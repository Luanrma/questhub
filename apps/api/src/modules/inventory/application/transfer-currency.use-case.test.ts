import test from 'node:test'
import assert from 'node:assert/strict'
import { createTransferCurrencyUseCase } from './transfer-currency.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryWalletRepository } from './__fakes__/in-memory-wallet-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: walletRepository, seedWallet } = createInMemoryWalletRepository()
  const { eventBus, currencyTransferred } = createInMemoryInventoryEventBus()

  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'other-cc', campaignId: 'camp-1', characterId: 'char-other', userId: 'user-other', role: 'PLAYER', status: 'ACTIVE' })
  seedCharacter({ id: 'foreign-cc', campaignId: 'camp-2', characterId: 'char-foreign', userId: 'user-foreign', role: 'PLAYER', status: 'ACTIVE' })
  seedWallet({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', balanceMinorUnit: 100 })

  const useCase = createTransferCurrencyUseCase({ walletRepository, eventBus, campaignAccess })
  return { useCase, currencyTransferred }
}

test('owner transfers currency to another character atomically', async () => {
  const { useCase, currencyTransferred } = setup()

  const result = await useCase({ campaignId: 'camp-1', fromCharacterId: 'char-player', toCharacterId: 'char-other', amountMinorUnit: 40, actorUserId: 'user-player' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return
  assert.equal(result.wallet.balanceMinorUnit, 60)
  assert.equal(currencyTransferred.length, 1)
})

test('rejects insufficient funds', async () => {
  const { useCase } = setup()

  const result = await useCase({ campaignId: 'camp-1', fromCharacterId: 'char-player', toCharacterId: 'char-other', amountMinorUnit: 1000, actorUserId: 'user-player' })
  assert.equal(result.status, 'insufficient_funds')
})

test('rejects a non-positive amount', async () => {
  const { useCase } = setup()

  const result = await useCase({ campaignId: 'camp-1', fromCharacterId: 'char-player', toCharacterId: 'char-other', amountMinorUnit: 0, actorUserId: 'user-player' })
  assert.equal(result.status, 'invalid_currency_amount')
})

test('blocks cross-campaign currency transfers', async () => {
  const { useCase } = setup()

  const result = await useCase({ campaignId: 'camp-1', fromCharacterId: 'char-player', toCharacterId: 'char-foreign', amountMinorUnit: 10, actorUserId: 'user-player' })
  assert.equal(result.status, 'not_found')
})

test('a third party cannot transfer someone else money', async () => {
  const { useCase } = setup()

  const result = await useCase({ campaignId: 'camp-1', fromCharacterId: 'char-player', toCharacterId: 'char-other', amountMinorUnit: 10, actorUserId: 'user-other' })
  assert.equal(result.status, 'forbidden')
})
