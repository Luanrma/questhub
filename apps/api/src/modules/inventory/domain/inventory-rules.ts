import type { EquipmentResourceLock, InventoryAccess, InventoryItemState } from './types'

export function buildInventoryAccess(
  actorUserId: string,
  isMasterActive: boolean,
  target: { userId: string; status: string },
): InventoryAccess {
  return {
    isMasterActive,
    isOwnerActive: target.userId === actorUserId && target.status === 'ACTIVE',
  }
}

export function canViewInventory(access: InventoryAccess): boolean {
  return access.isMasterActive || access.isOwnerActive
}

export function canViewWallet(access: InventoryAccess): boolean {
  return access.isMasterActive || access.isOwnerActive
}

export function canCreateItemDefinition(access: InventoryAccess): boolean {
  return access.isMasterActive
}

export function canAddItem(access: InventoryAccess): boolean {
  return access.isMasterActive
}

export function canUpdateItemMetadata(access: InventoryAccess): boolean {
  return access.isMasterActive || access.isOwnerActive
}

export function canUpdateItemQuantityOrState(access: InventoryAccess): boolean {
  return access.isMasterActive
}

export function canEquip(access: InventoryAccess): boolean {
  return access.isMasterActive || access.isOwnerActive
}

export function canUnequip(access: InventoryAccess): boolean {
  return access.isMasterActive || access.isOwnerActive
}

export function canTransferItem(access: InventoryAccess): boolean {
  return access.isMasterActive || access.isOwnerActive
}

export function canAdjustWallet(access: InventoryAccess): boolean {
  return access.isMasterActive
}

export function canTransferCurrency(access: InventoryAccess): boolean {
  return access.isMasterActive || access.isOwnerActive
}

export function canViewLedger(access: InventoryAccess): boolean {
  return access.isMasterActive || access.isOwnerActive
}

export function assertQuantityPositive(quantity: number): boolean {
  return Number.isInteger(quantity) && quantity > 0
}

export function assertEquipmentResourcesAvailable(
  existingResourceLocks: readonly EquipmentResourceLock[],
  requestedResourceLocks: readonly EquipmentResourceLock[],
): boolean {
  return !requestedResourceLocks.some(
    (requested) =>
      requested.exclusive === true &&
      existingResourceLocks.some((existing) => existing.exclusive === true && existing.resource === requested.resource),
  )
}

export function computeTransferSplit(sourceQuantity: number, transferQuantity: number) {
  return {
    remainingInSource: sourceQuantity - transferQuantity,
    transferred: transferQuantity,
  }
}

export function assertSufficientFunds(balanceMinorUnit: number, amountMinorUnit: number): boolean {
  return balanceMinorUnit >= amountMinorUnit
}

export function assertNoNegativeBalance(resultingBalanceMinorUnit: number): boolean {
  return resultingBalanceMinorUnit >= 0
}

const STATE_TRANSITIONS: Record<InventoryItemState, readonly InventoryItemState[]> = {
  STORED: ['EQUIPPED', 'TRANSFERRED', 'CONSUMED', 'DESTROYED', 'DROPPED'],
  EQUIPPED: ['STORED'],
  DROPPED: [],
  CONSUMED: [],
  DESTROYED: [],
  TRANSFERRED: [],
}

export function isValidStateTransition(from: InventoryItemState, to: InventoryItemState): boolean {
  return STATE_TRANSITIONS[from].includes(to)
}

/** States a Mestre may set directly through PATCH .../inventory-items/:id. EQUIPPED/TRANSFERRED have dedicated routes. */
export const PATCHABLE_INVENTORY_ITEM_STATES: readonly InventoryItemState[] = ['CONSUMED', 'DESTROYED', 'DROPPED']

export function isValidPatchStateTransition(from: InventoryItemState, to: InventoryItemState): boolean {
  return PATCHABLE_INVENTORY_ITEM_STATES.includes(to) && isValidStateTransition(from, to)
}

export function ledgerTypeForPatchStateChange(to: InventoryItemState): 'CONSUME' | 'REMOVE' {
  return to === 'CONSUMED' ? 'CONSUME' : 'REMOVE'
}
