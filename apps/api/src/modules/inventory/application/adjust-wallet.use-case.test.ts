import test from 'node:test'
import assert from 'node:assert/strict'
import { createAdjustWalletUseCase } from './adjust-wallet.use-case'
import { createInMemoryCampaignAccess } from './__fakes__/in-memory-campaign-access'
import { createInMemoryInventoryEventBus } from './__fakes__/in-memory-inventory-event-bus'
import { createInMemoryWalletRepository } from './__fakes__/in-memory-wallet-repository'

function setup() {
  const { port: campaignAccess, seedCharacter } = createInMemoryCampaignAccess()
  const { repository: walletRepository, seedWallet } = createInMemoryWalletRepository()
  const { eventBus, walletChanged } = createInMemoryInventoryEventBus()

  seedCharacter({ id: 'master-cc', campaignId: 'camp-1', characterId: 'char-master', userId: 'user-master', role: 'MASTER', status: 'ACTIVE' })
  seedCharacter({ id: 'player-cc', campaignId: 'camp-1', characterId: 'char-player', userId: 'user-player', role: 'PLAYER', status: 'ACTIVE' })
  seedWallet({ campaignId: 'camp-1', campaignCharacterId: 'player-cc', balanceMinorUnit: 100 })

  const useCase = createAdjustWalletUseCase({ walletRepository, eventBus, campaignAccess })
  return { useCase, walletChanged }
}

test('master adjusts a player wallet', async () => {
  const { useCase, walletChanged } = setup()

  const result = await useCase({ campaignId: 'camp-1', characterId: 'char-player', deltaMinorUnit: 50, reason: 'LOOT', actorUserId: 'user-master' })
  assert.equal(result.status, 'ok')
  if (result.status !== 'ok') return
  assert.equal(result.wallet.balanceMinorUnit, 150)
  assert.equal(walletChanged.length, 1)
})

test('a player cannot adjust their own wallet freely', async () => {
  const { useCase } = setup()

  const result = await useCase({ campaignId: 'camp-1', characterId: 'char-player', deltaMinorUnit: 50, reason: 'ADJUSTMENT', actorUserId: 'user-player' })
  assert.equal(result.status, 'forbidden')
})

test('balance cannot go negative', async () => {
  const { useCase } = setup()

  const result = await useCase({ campaignId: 'camp-1', characterId: 'char-player', deltaMinorUnit: -200, reason: 'CORRECTION', actorUserId: 'user-master' })
  assert.equal(result.status, 'negative_balance_not_allowed')
})
