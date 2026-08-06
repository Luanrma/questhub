import {
  derivePathfinder2eCharacterSheet,
  type Pathfinder2eArmorCategory,
  type Pathfinder2eEquippedArmor,
} from '../character-sheet/derivation'
import {
  pathfinder2eCharacterSheetSchema,
  type Pathfinder2eCharacterSheetData,
} from '../character-sheet/schema'
import type { Pathfinder2eItemData } from '../content_catalog/items/types'

export type Pathfinder2eCarryMode = 'STOWED' | 'HELD' | 'WORN'

export type Pathfinder2eEquipmentEntry = {
  id: string
  quantity: number
  data: unknown
  state: unknown
}

export type Pathfinder2eEquipmentState = {
  equipment: {
    systemKey: 'PATHFINDER_2E'
    carryMode: Pathfinder2eCarryMode
  }
}

export type Pathfinder2eEquipmentAction = {
  carryMode: Exclude<Pathfinder2eCarryMode, 'STOWED'>
  conflictEntryIds: string[]
}

export type Pathfinder2eEquipmentEntryView = {
  entryId: string
  name: string
  itemType: Pathfinder2eItemData['itemType']
  currentMode: Pathfinder2eCarryMode
  supportedModes: Array<Exclude<Pathfinder2eCarryMode, 'STOWED'>>
  requiredHands: number
  usageKey: string | null
  actions: Pathfinder2eEquipmentAction[]
  warnings: string[]
}

export type Pathfinder2eEquipmentView = {
  systemKey: 'PATHFINDER_2E'
  hands: {
    capacity: 2
    occupied: number
    entries: Array<{ entryId: string; hands: number }>
  }
  armor: {
    entryId: string | null
  }
  wornGroups: Array<{
    key: string
    label: string
    exclusive: boolean
    entryIds: string[]
  }>
  entries: Pathfinder2eEquipmentEntryView[]
  armorClass: {
    value: number
    category: 'unarmored' | 'light' | 'medium' | 'heavy'
    sourceName: string | null
    breakdown: Array<{ label: string; value: number }>
  } | null
  warnings: string[]
}

type ItemEquipmentUsage = {
  supportedModes: Array<Exclude<Pathfinder2eCarryMode, 'STOWED'>>
  requiredHands: number
  usageKey: string | null
}

export type Pathfinder2eEquipmentTransition =
  | {
      ok: true
      updates: Array<{ entryId: string; state: Pathfinder2eEquipmentState }>
    }
  | {
      ok: false
      error: string
      conflictEntryIds: string[]
    }

const wornUsageLabels: Record<string, string> = {
  armor: 'Armadura',
  belt: 'Cinto',
  cloak: 'Capa',
  footwear: 'Calçados',
  gloves: 'Luvas',
  headwear: 'Cabeça',
  mask: 'Máscara',
  necklace: 'Pescoço',
  ring: 'Anéis',
  wrist: 'Pulsos',
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {}
}

export function isPathfinder2eItemData(value: unknown): value is Pathfinder2eItemData {
  const record = asRecord(value)
  return record.schemaVersion === 1
    && typeof record.name === 'string'
    && typeof record.itemType === 'string'
    && typeof record.usage === 'string'
}

export function readPathfinder2eCarryMode(state: unknown): Pathfinder2eCarryMode {
  const equipment = asRecord(asRecord(state).equipment)
  if (equipment.systemKey !== 'PATHFINDER_2E') return 'STOWED'
  return equipment.carryMode === 'HELD' || equipment.carryMode === 'WORN'
    ? equipment.carryMode
    : 'STOWED'
}

export function createPathfinder2eEquipmentState(
  carryMode: Pathfinder2eCarryMode,
): Pathfinder2eEquipmentState {
  return {
    equipment: {
      systemKey: 'PATHFINDER_2E',
      carryMode,
    },
  }
}

function resolveItemUsage(item: Pathfinder2eItemData): ItemEquipmentUsage {
  const usage = item.usage.trim().toLowerCase()

  if (item.itemType === 'armor' || usage === 'worn-armor') {
    return { supportedModes: ['WORN'], requiredHands: 0, usageKey: 'armor' }
  }
  if (usage.startsWith('held-in-two') || usage.startsWith('held-in-one-plus')) {
    return { supportedModes: ['HELD'], requiredHands: 2, usageKey: null }
  }
  if (usage.startsWith('held-in-one') || usage === 'held') {
    return { supportedModes: ['HELD'], requiredHands: 1, usageKey: null }
  }
  if (usage === 'worn') {
    return { supportedModes: ['WORN'], requiredHands: 0, usageKey: null }
  }
  if (usage.startsWith('worn-')) {
    return {
      supportedModes: ['WORN'],
      requiredHands: 0,
      usageKey: usage.slice('worn-'.length) || null,
    }
  }

  return { supportedModes: [], requiredHands: 0, usageKey: null }
}

function normalizeArmorCategory(value: string): Pathfinder2eArmorCategory {
  return value === 'light' || value === 'medium' || value === 'heavy'
    ? value
    : 'unarmored'
}

function entryDetails(entry: Pathfinder2eEquipmentEntry) {
  if (!isPathfinder2eItemData(entry.data)) return null
  return {
    entry,
    item: entry.data,
    mode: readPathfinder2eCarryMode(entry.state),
    usage: resolveItemUsage(entry.data),
  }
}

function heldEntries(entries: readonly Pathfinder2eEquipmentEntry[], exceptEntryId?: string) {
  return entries.flatMap((entry) => {
    const details = entryDetails(entry)
    if (!details || entry.id === exceptEntryId || details.mode !== 'HELD') return []
    return [{ entryId: entry.id, hands: details.usage.requiredHands }]
  })
}

function conflictsForMode(
  entries: readonly Pathfinder2eEquipmentEntry[],
  target: NonNullable<ReturnType<typeof entryDetails>>,
  carryMode: Exclude<Pathfinder2eCarryMode, 'STOWED'>,
) {
  if (carryMode === 'WORN') {
    if (!target.usage.usageKey) return []
    return entries.flatMap((entry) => {
      const details = entryDetails(entry)
      return details
        && entry.id !== target.entry.id
        && details.mode === 'WORN'
        && details.usage.usageKey === target.usage.usageKey
        ? [entry.id]
        : []
    })
  }

  const current = heldEntries(entries, target.entry.id)
  const occupied = current.reduce((total, entry) => total + entry.hands, 0)
  const handsToFree = occupied + target.usage.requiredHands - 2
  if (handsToFree <= 0) return []

  const conflicts: string[] = []
  let freed = 0
  for (const entry of current) {
    conflicts.push(entry.entryId)
    freed += entry.hands
    if (freed >= handsToFree) break
  }
  return conflicts
}

function armorWarning(
  item: Pathfinder2eItemData,
  sheet: Pathfinder2eCharacterSheetData | null,
) {
  if (item.itemType !== 'armor') return []
  if (!item.armor) return ['A armadura não possui dados mecânicos para alterar a CA.']
  if (!sheet) return ['A ficha Pathfinder não está disponível para validar proficiência e CA.']

  const category = normalizeArmorCategory(item.category)
  if (category === 'unarmored') return ['A categoria desta armadura não foi reconhecida.']
  const derived = derivePathfinder2eCharacterSheet(sheet).derived
  return derived.armorProficiencies[category].effectiveRank === 0
    ? [`O personagem não possui proficiência em armadura ${category}.`]
    : []
}

export function resolvePathfinder2eEquippedArmor(
  entries: readonly Pathfinder2eEquipmentEntry[],
): Pathfinder2eEquippedArmor | null {
  for (const entry of entries) {
    const details = entryDetails(entry)
    if (
      details
      && details.mode === 'WORN'
      && details.item.itemType === 'armor'
      && details.item.armor
    ) {
      return {
        name: details.item.name,
        category: normalizeArmorCategory(details.item.category),
        armorClassBonus: details.item.armor.armorClassBonus,
        dexterityCap: details.item.armor.dexterityCap,
      }
    }
  }
  return null
}

function groupLabel(key: string) {
  return wornUsageLabels[key]
    ?? key.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
}

export function buildPathfinder2eEquipmentView(
  entries: readonly Pathfinder2eEquipmentEntry[],
  characterSheetData: unknown,
): Pathfinder2eEquipmentView {
  const parsedSheet = pathfinder2eCharacterSheetSchema.safeParse(characterSheetData)
  const sheet = parsedSheet.success ? parsedSheet.data : null
  const details = entries.flatMap((entry) => {
    const resolved = entryDetails(entry)
    return resolved ? [resolved] : []
  })
  const hands = heldEntries(entries)
  const equippedArmor = details.find((entry) => (
    entry.mode === 'WORN' && entry.item.itemType === 'armor'
  )) ?? null
  const wornGroupsByKey = new Map<string, string[]>()

  for (const entry of details) {
    if (entry.mode !== 'WORN' || !entry.usage.usageKey || entry.usage.usageKey === 'armor') continue
    const current = wornGroupsByKey.get(entry.usage.usageKey) ?? []
    current.push(entry.entry.id)
    wornGroupsByKey.set(entry.usage.usageKey, current)
  }

  const armor = resolvePathfinder2eEquippedArmor(entries)
  const armorDerivation = sheet
    ? derivePathfinder2eCharacterSheet(sheet, { armor })
    : null
  const armorClass = armorDerivation
    ? {
        value: armorDerivation.derived.armorClass.value,
        category: armorDerivation.derived.armorClass.armorCategory,
        sourceName: armorDerivation.derived.armorClass.sourceName,
        breakdown: [
          { label: 'Base', value: 10 },
          { label: 'Destreza', value: armorDerivation.derived.armorClass.dexterityModifier },
          { label: 'Proficiência', value: armorDerivation.derived.armorClass.proficiencyBonus },
          { label: 'Armadura', value: armorDerivation.derived.armorClass.itemBonus },
          { label: 'Ajustes', value: armorDerivation.derived.armorClass.bonus },
        ].filter((entry) => entry.label === 'Base' || entry.value !== 0),
      }
    : null

  const entryViews = details.map(({ entry, item, mode, usage }): Pathfinder2eEquipmentEntryView => {
    const warnings = [
      ...(entry.quantity === 1 ? [] : ['Separe esta pilha para equipar uma única unidade.']),
      ...armorWarning(item, sheet),
    ]
    const actions = entry.quantity === 1
      ? usage.supportedModes.map((carryMode) => ({
          carryMode,
          conflictEntryIds: conflictsForMode(entries, { entry, item, mode, usage }, carryMode),
        }))
      : []

    return {
      entryId: entry.id,
      name: item.name,
      itemType: item.itemType,
      currentMode: mode,
      supportedModes: usage.supportedModes,
      requiredHands: usage.requiredHands,
      usageKey: usage.usageKey,
      actions,
      warnings,
    }
  })

  const warnings = [
    ...(sheet ? [] : ['O personagem não possui uma ficha Pathfinder válida; a CA não pode ser calculada.']),
    ...(hands.reduce((total, entry) => total + entry.hands, 0) > 2
      ? ['O estado armazenado ocupa mais de duas mãos e precisa ser corrigido.']
      : []),
  ]

  return {
    systemKey: 'PATHFINDER_2E',
    hands: {
      capacity: 2,
      occupied: hands.reduce((total, entry) => total + entry.hands, 0),
      entries: hands,
    },
    armor: { entryId: equippedArmor?.entry.id ?? null },
    wornGroups: [...wornGroupsByKey.entries()].map(([key, entryIds]) => ({
      key,
      label: groupLabel(key),
      exclusive: true,
      entryIds,
    })),
    entries: entryViews,
    armorClass,
    warnings,
  }
}

export function transitionPathfinder2eEquipment(input: {
  entries: readonly Pathfinder2eEquipmentEntry[]
  entryId: string
  carryMode: Pathfinder2eCarryMode
  resolveConflicts: boolean
}): Pathfinder2eEquipmentTransition {
  const targetEntry = input.entries.find((entry) => entry.id === input.entryId)
  const target = targetEntry ? entryDetails(targetEntry) : null
  if (!target) {
    return { ok: false, error: 'Item de inventário inválido para Pathfinder 2e.', conflictEntryIds: [] }
  }
  if (target.entry.quantity !== 1) {
    return {
      ok: false,
      error: 'Separe a pilha antes de equipar este item.',
      conflictEntryIds: [],
    }
  }
  if (
    input.carryMode !== 'STOWED'
    && !target.usage.supportedModes.includes(input.carryMode)
  ) {
    return {
      ok: false,
      error: input.carryMode === 'HELD'
        ? 'Este item não pode ser segurado.'
        : 'Este item não pode ser vestido.',
      conflictEntryIds: [],
    }
  }

  const conflictEntryIds = input.carryMode === 'STOWED'
    ? []
    : conflictsForMode(input.entries, target, input.carryMode)
  if (conflictEntryIds.length && !input.resolveConflicts) {
    return {
      ok: false,
      error: 'Outros itens precisam ser guardados antes desta alteração.',
      conflictEntryIds,
    }
  }

  return {
    ok: true,
    updates: [
      ...conflictEntryIds.map((entryId) => ({
        entryId,
        state: createPathfinder2eEquipmentState('STOWED'),
      })),
      {
        entryId: target.entry.id,
        state: createPathfinder2eEquipmentState(input.carryMode),
      },
    ],
  }
}
