import { normalizePathfinder2eArmorCategory } from '../../shared/armor-class'
import { PATHFINDER_2E_EXCLUSIVE_SLOTS, PATHFINDER_2E_NON_EXCLUSIVE_SLOTS } from './slots'

type EquipmentOption = {
  key: string
  label: string
  description?: string
  disabled?: boolean
  metadata?: unknown
}

type EquipmentResourceUsage = {
  resource: string
  amount: number
  exclusive?: boolean
}

type EquippedItemState = {
  inventoryItemId: string
  equipmentOptionKey: string
  resourceLocks: EquipmentResourceUsage[]
  systemData: unknown
}

type UniversalItemDefinition = {
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
  schemaVersion?: number
  classification?: { role?: string; subtype?: string | null }
  usage?: unknown
  equipment?: {
    equippable?: boolean
    options?: Array<{
      key: string
      label: string
      resourceUsage?: EquipmentResourceUsage[]
      metadata?: unknown
    }>
  }
}

type EquipmentGroupingItem = EquippedItemState & {
  equippedItemId: string
  item: UniversalItemDefinition
}

type EquipmentGroup = {
  id: string
  label: string
  itemIds: string[]
  metadata?: unknown
}

type ArmorClassEquipmentResolution = {
  armor: { equippedItemId: string; category: string; itemBonus: number; dexCap: number | null } | null
  shield: { equippedItemId: string; itemBonus: number; raised: boolean } | null
}

type EquipmentValidationInput = {
  optionKey: string
  item: UniversalItemDefinition
  currentEquipment: EquippedItemState[]
}

type EquipmentValidationResult =
  | {
      ok: true
      optionKey: string
      resourceUsage: EquipmentResourceUsage[]
      systemData?: unknown
    }
  | {
      ok: false
      code: string
      message: string
      details?: unknown
    }

const slotLabel = (slot: string) =>
  slot
    .split('_')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

function listLegacyEquipmentOptions(): EquipmentOption[] {
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
}

function toPathfinder2eEquipmentGroup(item: EquipmentGroupingItem): Omit<EquipmentGroup, 'itemIds'> {
  if (isPathfinder2eHeldEquipment(item)) return { id: 'held', label: 'Segurados' }
  if (item.item.traits.includes('invested')) {
    return { id: 'invested', label: 'Investidos', metadata: { limit: 10 } }
  }
  if (item.item.classification?.role === 'ammunition') return { id: 'other', label: 'Outros' }
  if (item.item.classification?.role === 'consumable' || item.item.equipSlot === 'consumable' || item.item.itemType === 'consumable') {
    return { id: 'prepared', label: 'Preparados' }
  }
  if (item.item.equipSlot === 'other') return { id: 'other', label: 'Outros' }
  return { id: 'worn', label: 'Vestidos' }
}

function isPathfinder2eHeldEquipment(item: EquipmentGroupingItem) {
  return (
    ['main_hand', 'off_hand', 'two_hands', 'shield', 'held', 'held-main-hand', 'held-off-hand', 'held-two-hands'].includes(
      item.equipmentOptionKey,
    ) || item.resourceLocks.some((lock) => lock.resource.startsWith('pf2e:hand:'))
  )
}

function getVersionedEquipmentOptions(item: UniversalItemDefinition) {
  if (item.schemaVersion !== 2) return null
  if (isConsumableOrAmmunition(item)) return []

  const options = item.equipment?.options ?? []
  return options.map((option) => ({
    key: option.key,
    label: option.label,
    metadata: option.metadata,
  }))
}

function validateVersionedEquipment(input: EquipmentValidationInput): EquipmentValidationResult | null {
  if (input.item.schemaVersion !== 2) return null

  if (isConsumableOrAmmunition(input.item)) {
    return { ok: false, code: 'ITEM_NOT_EQUIPPABLE', message: 'Item nao pode ser equipado' }
  }

  if (!input.item.equipment?.equippable) {
    return { ok: false, code: 'ITEM_NOT_EQUIPPABLE', message: 'Item nao pode ser equipado' }
  }

  const option = input.item.equipment.options?.find((candidate) => candidate.key === input.optionKey)
  if (!option) {
    return {
      ok: false,
      code: 'INVALID_EQUIPMENT_OPTION',
      message: 'Opcao de equipamento incompativel com o item',
      details: { receivedOptionKey: input.optionKey },
    }
  }

  const resourceUsage = option.resourceUsage ?? []
  const conflict = findPathfinder2eEquipmentConflict(resourceUsage, input.currentEquipment)
  if (conflict) {
    return { ok: false, code: 'EQUIPMENT_CONFLICT', message: 'Opcao de equipamento em conflito', details: conflict }
  }

  return {
    ok: true,
    optionKey: option.key,
    resourceUsage,
    systemData: { option },
  }
}

function isCompatibleLegacyEquipmentOption(item: UniversalItemDefinition, requestedOptionKey: string) {
  if (!item.equipSlot) return false
  return getCompatibleLegacyEquipmentOptions(item).includes(requestedOptionKey)
}

function getCompatibleLegacyEquipmentOptions(item: UniversalItemDefinition): string[] {
  if (isConsumableOrAmmunition(item)) return []

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

function isConsumableOrAmmunition(item: UniversalItemDefinition) {
  return item.itemType === 'consumable' || item.classification?.role === 'ammunition' || getPathfinder2eCategory(item.systemData) === 'ammo'
}

function getPathfinder2eUsage(systemData: unknown) {
  if (!systemData || typeof systemData !== 'object') return ''
  const usage = (systemData as { usage?: unknown }).usage
  return typeof usage === 'string' ? usage : ''
}

function getPathfinder2eCategory(systemData: unknown) {
  if (!systemData || typeof systemData !== 'object') return ''
  const category = (systemData as { category?: unknown }).category
  return typeof category === 'string' ? category : ''
}

function getPathfinder2eSystemDataNumber(systemData: unknown, key: string): number | undefined {
  if (!systemData || typeof systemData !== 'object') return undefined
  const value = (systemData as Record<string, unknown>)[key]
  return typeof value === 'number' ? value : undefined
}

function getPathfinder2eSystemDataBoolean(systemData: unknown, key: string): boolean | undefined {
  if (!systemData || typeof systemData !== 'object') return undefined
  const value = (systemData as Record<string, unknown>)[key]
  return typeof value === 'boolean' ? value : undefined
}

function toPathfinder2eResourceUsage(option: EquipmentOption, item: UniversalItemDefinition): EquipmentResourceUsage[] {
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

function findPathfinder2eEquipmentConflict(requestedResourceUsage: EquipmentResourceUsage[], currentEquipment: EquippedItemState[]) {
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

export const pathfinder2eInventoryAdapter = {
  listEquipmentOptions(): EquipmentOption[] {
    return listLegacyEquipmentOptions()
  },
  getEquipmentOptions(item: UniversalItemDefinition): EquipmentOption[] {
    const versionedOptions = getVersionedEquipmentOptions(item)
    if (versionedOptions) return versionedOptions

    const compatibleKeys = getCompatibleLegacyEquipmentOptions(item)
    if (compatibleKeys.length === 0) return []
    return listLegacyEquipmentOptions().filter((option) => compatibleKeys.includes(option.key))
  },
  listEquippedGroups(input: { items: EquipmentGroupingItem[] }): EquipmentGroup[] {
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
  validateEquipment(input: EquipmentValidationInput): EquipmentValidationResult {
    const versionedResult = validateVersionedEquipment(input)
    if (versionedResult) return versionedResult

    const option = listLegacyEquipmentOptions().find((candidate) => candidate.key === input.optionKey)
    if (!option) {
      return { ok: false, code: 'INVALID_EQUIPMENT_OPTION', message: 'Opcao de equipamento invalida' }
    }

    if (!isCompatibleLegacyEquipmentOption(input.item, option.key)) {
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
      return { ok: false, code: 'EQUIPMENT_CONFLICT', message: 'Opcao de equipamento em conflito', details: conflict }
    }

    return {
      ok: true,
      optionKey: option.key,
      resourceUsage,
      systemData: { option },
    }
  },
  resolveArmorClassEquipment(input: { items: EquipmentGroupingItem[] }): ArmorClassEquipmentResolution {
    const armorItem = input.items.find((entry) => entry.item.classification?.role === 'armor')
    const shieldItem = input.items.find((entry) => entry.item.classification?.role === 'shield')

    const armor = armorItem
      ? {
          equippedItemId: armorItem.equippedItemId,
          category: normalizePathfinder2eArmorCategory(getPathfinder2eCategory(armorItem.item.systemData)),
          itemBonus: getPathfinder2eSystemDataNumber(armorItem.item.systemData, 'ac') ?? 0,
          dexCap: getPathfinder2eSystemDataNumber(armorItem.item.systemData, 'dexCap') ?? null,
        }
      : null

    const shield = shieldItem
      ? {
          equippedItemId: shieldItem.equippedItemId,
          itemBonus: getPathfinder2eSystemDataNumber(shieldItem.item.systemData, 'ac') ?? 0,
          raised: getPathfinder2eSystemDataBoolean(shieldItem.systemData, 'shieldRaised') ?? false,
        }
      : null

    return { armor, shield }
  },
  normalizeItemData(input: unknown): UniversalItemDefinition {
    const raw = (input ?? {}) as Partial<UniversalItemDefinition> & {
      stack?: { stackable?: boolean }
    }

    return {
      name: raw.name ?? '',
      itemType: raw.itemType ?? '',
      rarity: raw.rarity ?? null,
      level: raw.level ?? null,
      traits: raw.traits ?? [],
      bulk: raw.bulk ?? null,
      priceMinorUnit: raw.priceMinorUnit ?? null,
      equipSlot: raw.equipSlot ?? null,
      isStackable: raw.isStackable ?? raw.stack?.stackable ?? false,
      systemData: raw.systemData ?? null,
      ...(raw.schemaVersion === 2 ? { schemaVersion: 2 } : {}),
      ...(raw.classification ? { classification: raw.classification } : {}),
      ...(raw.usage ? { usage: raw.usage } : {}),
      ...(raw.equipment ? { equipment: raw.equipment } : {}),
    }
  },
}
