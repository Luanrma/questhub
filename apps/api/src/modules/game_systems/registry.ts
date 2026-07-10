import { z } from 'zod'
import type { CharacterSheetEnvelope, CharacterSheetMetadata, CharacterSheetSystemAdapter } from './models'
import { characterSheetEnvelopeSchema } from './schemas'
import { pathfinder2eSheetAdapter } from './pathfinder_2e/character_sheet'
import { pathfinder2eItemAdapter } from './pathfinder_2e/items'
import {
  formatPathfinder2eCurrency,
  fromCopper,
  PATHFINDER_2E_EXCLUSIVE_SLOTS,
  PATHFINDER_2E_NON_EXCLUSIVE_SLOTS,
  toCopper,
} from './pathfinder_2e/inventory'
import type {
  CurrencySystemAdapter,
  EquipmentGroup,
  EquipmentGroupingItem,
  EquipmentOption,
  EquipmentResourceUsage,
  GameSystemAdapter,
  GameSystemId,
  InventorySystemAdapter,
} from './ports'

const slotLabel = (slot: string) =>
  slot
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const pathfinder2eInventoryAdapter: InventorySystemAdapter = {
  listEquipmentOptions() {
    return [
      ...PATHFINDER_2E_EXCLUSIVE_SLOTS.map((slot) => ({
        key: slot,
        label: slotLabel(slot),
        metadata: {
          exclusive: true,
          category: ['main_hand', 'off_hand', 'two_hands'].includes(slot) ? 'held' : slot,
        },
      })),
      ...PATHFINDER_2E_NON_EXCLUSIVE_SLOTS.map((slot) => ({
        key: slot,
        label: slotLabel(slot),
        metadata: {
          exclusive: false,
          category: slot === 'backpack' ? 'stowed' : slot,
        },
      })),
    ]
  },
  listEquippedGroups(input) {
    const groups = new Map<string, EquipmentGroup>()

    for (const item of input.items) {
      const group = toPathfinder2eEquipmentGroup(item)
      const current = groups.get(group.id)
      if (current) {
        current.itemIds.push(item.equippedItemId)
      } else {
        groups.set(group.id, { ...group, itemIds: [item.equippedItemId] })
      }
    }

    return ['held', 'worn', 'invested', 'prepared', 'other'].flatMap((groupId) => {
      const group = groups.get(groupId)
      return group && group.itemIds.length > 0 ? [group] : []
    })
  },
  validateEquipment(input) {
    const option = this.listEquipmentOptions().find((candidate) => candidate.key === input.optionKey)
    if (!option) {
      return {
        ok: false,
        code: 'INVALID_EQUIPMENT_OPTION',
        message: 'Opcao de equipamento invalida',
      }
    }

    if (!isCompatiblePathfinder2eEquipmentOption(input.item, option.key)) {
      return {
        ok: false,
        code: 'INVALID_EQUIPMENT_OPTION',
        message: 'Opcao de equipamento incompativel com o item',
        details: { equipSlot: input.item.equipSlot, receivedOptionKey: option.key },
      }
    }

    const resourceUsage = toPathfinder2eResourceUsage(option, input.item)
    const conflict = findPathfinder2eEquipmentConflict(resourceUsage, input.currentEquipment)

    if (conflict) {
      return {
        ok: false,
        code: 'EQUIPMENT_CONFLICT',
        message: 'Opcao de equipamento em conflito',
        details: conflict,
      }
    }

    return {
      ok: true,
      optionKey: option.key,
      resourceUsage,
      systemData: { option },
    }
  },
  normalizeItemData(input) {
    const raw = (input ?? {}) as Partial<{
      name: string
      itemType: string
      rarity: string | null
      level: number | null
      traits: string[]
      bulk: string | null
      priceMinorUnit: number | null
      equipSlot: string | null
      isStackable: boolean
      systemData: unknown
    }>

    return {
      name: raw.name ?? '',
      itemType: raw.itemType ?? '',
      rarity: raw.rarity ?? null,
      level: raw.level ?? null,
      traits: raw.traits ?? [],
      bulk: raw.bulk ?? null,
      priceMinorUnit: raw.priceMinorUnit ?? null,
      equipSlot: raw.equipSlot ?? null,
      isStackable: raw.isStackable ?? false,
      systemData: raw.systemData ?? null,
    }
  },
}

type Pathfinder2eEquipmentItem = Parameters<InventorySystemAdapter['validateEquipment']>[0]['item']

function toPathfinder2eEquipmentGroup(item: EquipmentGroupingItem): Omit<EquipmentGroup, 'itemIds'> {
  if (isPathfinder2eHeldEquipment(item)) return { id: 'held', label: 'Segurados' }
  if (item.item.traits.includes('invested')) {
    return { id: 'invested', label: 'Investidos', metadata: { limit: 10 } }
  }
  if (item.item.equipSlot === 'consumable' || item.item.itemType === 'consumable') {
    return { id: 'prepared', label: 'Preparados' }
  }
  if (item.item.equipSlot === 'other') return { id: 'other', label: 'Outros' }
  return { id: 'worn', label: 'Vestidos' }
}

function isPathfinder2eHeldEquipment(item: EquipmentGroupingItem) {
  return (
    ['main_hand', 'off_hand', 'two_hands', 'shield', 'held'].includes(item.equipmentOptionKey) ||
    item.resourceLocks.some((lock) => lock.resource.startsWith('pf2e:hand:'))
  )
}

function isCompatiblePathfinder2eEquipmentOption(item: Pathfinder2eEquipmentItem, requestedOptionKey: string) {
  if (!item.equipSlot) return true
  return getCompatiblePathfinder2eEquipmentOptions(item).includes(requestedOptionKey)
}

function getCompatiblePathfinder2eEquipmentOptions(item: Pathfinder2eEquipmentItem): string[] {
  const equipSlot = item.equipSlot
  if (!equipSlot) return []
  const usage = getPathfinder2eUsage(item.systemData)

  if (item.itemType === 'weapon') return equipSlot === 'two_hands' ? ['two_hands'] : ['main_hand', 'off_hand']
  if (item.itemType === 'shield') return ['shield']
  if (item.itemType === 'armor') return ['armor']

  if (equipSlot === 'held') {
    return usage.includes('two-hands') ? ['two_hands'] : ['main_hand', 'off_hand']
  }

  if (equipSlot === 'consumable') {
    if (usage.startsWith('held')) return usage.includes('two-hands') ? ['two_hands'] : ['main_hand', 'off_hand']
    return ['worn']
  }

  if (equipSlot === 'main_hand') return ['main_hand', 'off_hand']
  if (equipSlot === 'two_hands') return ['two_hands']
  return [equipSlot]
}

function getPathfinder2eUsage(systemData: unknown) {
  if (!systemData || typeof systemData !== 'object') return ''
  const usage = (systemData as { usage?: unknown }).usage
  return typeof usage === 'string' ? usage : ''
}

function toPathfinder2eResourceUsage(option: EquipmentOption, item: Pathfinder2eEquipmentItem): EquipmentResourceUsage[] {
  const usage = toPathfinder2eBaseResourceUsage(option)
  if (item.traits.includes('invested')) {
    usage.push({ resource: 'pf2e:investiture', amount: 1, exclusive: false })
  }
  return usage
}

function toPathfinder2eBaseResourceUsage(option: EquipmentOption): EquipmentResourceUsage[] {
  if (option.key === 'main_hand') return [{ resource: 'pf2e:hand:main', amount: 1, exclusive: true }]
  if (option.key === 'off_hand') return [{ resource: 'pf2e:hand:off', amount: 1, exclusive: true }]
  if (option.key === 'two_hands') {
    return [
      { resource: 'pf2e:hand:main', amount: 1, exclusive: true },
      { resource: 'pf2e:hand:off', amount: 1, exclusive: true },
    ]
  }
  if (option.key === 'shield') {
    return [
      { resource: 'pf2e:shield', amount: 1, exclusive: true },
      { resource: 'pf2e:hand:off', amount: 1, exclusive: true },
    ]
  }
  if (option.key === 'armor') return [{ resource: 'pf2e:armor', amount: 1, exclusive: true }]
  return []
}

function findPathfinder2eEquipmentConflict(
  requestedResourceUsage: EquipmentResourceUsage[],
  currentEquipment: Parameters<InventorySystemAdapter['validateEquipment']>[0]['currentEquipment'],
) {
  for (const usage of requestedResourceUsage) {
    const currentAmount = currentEquipment
      .flatMap((equipped) => equipped.resourceLocks)
      .filter((lock) => lock.resource === usage.resource)
      .reduce((total, lock) => total + lock.amount, 0)

    if (usage.exclusive && currentAmount > 0) {
      return { resource: usage.resource, reason: 'exclusive_resource' }
    }

    if (usage.resource === 'pf2e:investiture' && currentAmount + usage.amount > 10) {
      return { resource: usage.resource, reason: 'capacity_exceeded', capacity: 10 }
    }
  }

  return null
}

const pathfinder2eCurrencyAdapter: CurrencySystemAdapter = {
  minorUnitName: 'copper piece',
  format: formatPathfinder2eCurrency,
  breakdown: fromCopper,
  toMinorUnit: toCopper,
}

const gameSystemAdapters = new Map<GameSystemId, GameSystemAdapter>([
  [
    'PATHFINDER_2E',
    {
      id: 'PATHFINDER_2E',
      label: 'Pathfinder 2e',
      version: 1,
      status: 'PLAYABLE',
      characterSheet: pathfinder2eSheetAdapter,
      inventory: pathfinder2eInventoryAdapter,
      currency: pathfinder2eCurrencyAdapter,
      items: pathfinder2eItemAdapter,
    },
  ],
  [
    'DND_5E',
    {
      id: 'DND_5E',
      label: 'D&D 5e',
      version: 1,
      status: 'RESERVED',
    },
  ],
])

export function getGameSystemAdapter(system: string) {
  return gameSystemAdapters.get(system as GameSystemId)
}

const adapters = new Map<string, CharacterSheetSystemAdapter<unknown>>([
  ...[...gameSystemAdapters.values()]
    .filter((adapter): adapter is GameSystemAdapter & { characterSheet: CharacterSheetSystemAdapter<unknown> } =>
      Boolean(adapter.characterSheet),
    )
    .map((adapter) => [adapter.characterSheet.system, adapter.characterSheet] as const),
])

export function getCharacterSheetAdapter(system: string) {
  return adapters.get(system)
}

export function buildDefaultCharacterSheetEnvelope(system: string, metadata?: CharacterSheetMetadata): CharacterSheetEnvelope {
  const adapter = getCharacterSheetAdapter(system)
  if (!adapter) throw new Error(`Unsupported character sheet system: ${system}`)

  return {
    system: adapter.system,
    version: adapter.version,
    ...(metadata ? { metadata } : {}),
    data: {
      [adapter.dataKey]: adapter.defaultSheet,
    },
  }
}

export function validateCharacterSheetEnvelope(input: unknown): CharacterSheetEnvelope {
  const envelope = characterSheetEnvelopeSchema.parse(input)
  const adapter = getCharacterSheetAdapter(envelope.system)
  if (!adapter) throw new Error(`Unsupported character sheet system: ${envelope.system}`)

  if (envelope.version !== adapter.version) {
    throw new Error(`Unsupported character sheet version: ${envelope.version}`)
  }

  const systemData = envelope.data[adapter.dataKey]
  if (systemData === undefined) {
    throw new Error(`Missing character sheet data block: ${adapter.dataKey}`)
  }

  adapter.schema.parse(systemData)
  return envelope
}

export function safeValidateCharacterSheetEnvelope(input: unknown) {
  try {
    return { success: true as const, data: validateCharacterSheetEnvelope(input) }
  } catch (error) {
    if (error instanceof z.ZodError) return { success: false as const, error }
    return { success: false as const, error }
  }
}
