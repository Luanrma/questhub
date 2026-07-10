import test from 'node:test'
import assert from 'node:assert/strict'
import {
  canViewInventory,
  canAddItem,
  canEquip,
  canAdjustWallet,
  canTransferItem,
  canTransferCurrency,
  canUpdateItemMetadata,
  canUpdateItemQuantityOrState,
  assertQuantityPositive,
  assertEquipmentResourcesAvailable,
  computeTransferSplit,
  assertSufficientFunds,
  assertNoNegativeBalance,
  isValidStateTransition,
  isValidPatchStateTransition,
  ledgerTypeForPatchStateChange,
} from './inventory-rules'

test('canViewInventory allows master and owner, blocks a third party', () => {
  assert.equal(canViewInventory({ isMasterActive: true, isOwnerActive: false }), true)
  assert.equal(canViewInventory({ isMasterActive: false, isOwnerActive: true }), true)
  assert.equal(canViewInventory({ isMasterActive: false, isOwnerActive: false }), false)
})

test('canAddItem is Master-only in this entry', () => {
  assert.equal(canAddItem({ isMasterActive: true, isOwnerActive: false }), true)
  assert.equal(canAddItem({ isMasterActive: false, isOwnerActive: true }), false)
})

test('canEquip allows master and owner, blocks a third party', () => {
  assert.equal(canEquip({ isMasterActive: false, isOwnerActive: true }), true)
  assert.equal(canEquip({ isMasterActive: false, isOwnerActive: false }), false)
})

test('canAdjustWallet is Master-only', () => {
  assert.equal(canAdjustWallet({ isMasterActive: true, isOwnerActive: false }), true)
  assert.equal(canAdjustWallet({ isMasterActive: false, isOwnerActive: true }), false)
})

test('canTransferItem and canTransferCurrency allow the owning player', () => {
  assert.equal(canTransferItem({ isMasterActive: false, isOwnerActive: true }), true)
  assert.equal(canTransferCurrency({ isMasterActive: false, isOwnerActive: true }), true)
  assert.equal(canTransferItem({ isMasterActive: false, isOwnerActive: false }), false)
})

test('canUpdateItemMetadata allows owner, canUpdateItemQuantityOrState is Master-only', () => {
  assert.equal(canUpdateItemMetadata({ isMasterActive: false, isOwnerActive: true }), true)
  assert.equal(canUpdateItemQuantityOrState({ isMasterActive: false, isOwnerActive: true }), false)
  assert.equal(canUpdateItemQuantityOrState({ isMasterActive: true, isOwnerActive: false }), true)
})

test('assertQuantityPositive rejects zero, negative and non-integer', () => {
  assert.equal(assertQuantityPositive(1), true)
  assert.equal(assertQuantityPositive(0), false)
  assert.equal(assertQuantityPositive(-1), false)
  assert.equal(assertQuantityPositive(1.5), false)
})

test('assertEquipmentResourcesAvailable blocks a duplicate exclusive resource', () => {
  assert.equal(
    assertEquipmentResourcesAvailable(
      [{ resource: 'equipment:main_hand', amount: 1, exclusive: true }],
      [{ resource: 'equipment:off_hand', amount: 1, exclusive: true }],
    ),
    true,
  )
  assert.equal(
    assertEquipmentResourcesAvailable(
      [{ resource: 'equipment:main_hand', amount: 1, exclusive: true }],
      [{ resource: 'equipment:main_hand', amount: 1, exclusive: true }],
    ),
    false,
  )
})

test('assertEquipmentResourcesAvailable allows non-exclusive resources', () => {
  assert.equal(
    assertEquipmentResourcesAvailable(
      [{ resource: 'equipment:worn', amount: 1 }],
      [{ resource: 'equipment:worn', amount: 1 }],
    ),
    true,
  )
})

test('computeTransferSplit computes remaining and transferred amounts', () => {
  assert.deepEqual(computeTransferSplit(5, 2), { remainingInSource: 3, transferred: 2 })
})

test('assertSufficientFunds and assertNoNegativeBalance', () => {
  assert.equal(assertSufficientFunds(100, 100), true)
  assert.equal(assertSufficientFunds(99, 100), false)
  assert.equal(assertNoNegativeBalance(0), true)
  assert.equal(assertNoNegativeBalance(-1), false)
})

test('isValidStateTransition follows the STORED <-> EQUIPPED and terminal states diagram', () => {
  assert.equal(isValidStateTransition('STORED', 'EQUIPPED'), true)
  assert.equal(isValidStateTransition('EQUIPPED', 'STORED'), true)
  assert.equal(isValidStateTransition('STORED', 'CONSUMED'), true)
  assert.equal(isValidStateTransition('CONSUMED', 'STORED'), false)
  assert.equal(isValidStateTransition('EQUIPPED', 'CONSUMED'), false)
})

test('isValidPatchStateTransition rejects EQUIPPED/TRANSFERRED as PATCH targets', () => {
  assert.equal(isValidPatchStateTransition('STORED', 'EQUIPPED'), false)
  assert.equal(isValidPatchStateTransition('STORED', 'TRANSFERRED'), false)
  assert.equal(isValidPatchStateTransition('STORED', 'CONSUMED'), true)
  assert.equal(isValidPatchStateTransition('STORED', 'STORED'), false)
})

test('ledgerTypeForPatchStateChange maps CONSUMED to CONSUME and others to REMOVE', () => {
  assert.equal(ledgerTypeForPatchStateChange('CONSUMED'), 'CONSUME')
  assert.equal(ledgerTypeForPatchStateChange('DESTROYED'), 'REMOVE')
  assert.equal(ledgerTypeForPatchStateChange('DROPPED'), 'REMOVE')
})
