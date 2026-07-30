import assert from 'node:assert/strict'
import test from 'node:test'
import { CampaignMutationQueue } from './campaign-mutation-queue'

test('serializes campaign mutations in reception order', async () => {
  const queue = new CampaignMutationQueue()
  const events: string[] = []
  let releaseGridUpdate: () => void = () => {}
  const gridUpdateGate = new Promise<void>((resolve) => {
    releaseGridUpdate = resolve
  })

  const gridUpdate = queue.run('campaign-1', async () => {
    events.push('grid:start')
    await gridUpdateGate
    events.push('grid:end')
  })
  const canonicalSave = queue.run('campaign-1', async () => {
    events.push('save')
  })

  await Promise.resolve()
  await Promise.resolve()
  assert.deepEqual(events, ['grid:start'])

  releaseGridUpdate()
  await Promise.all([gridUpdate, canonicalSave])
  assert.deepEqual(events, ['grid:start', 'grid:end', 'save'])
})

test('does not block mutations from another campaign', async () => {
  const queue = new CampaignMutationQueue()
  let releaseFirstCampaign: () => void = () => {}
  const firstCampaignGate = new Promise<void>((resolve) => {
    releaseFirstCampaign = resolve
  })

  const firstCampaign = queue.run('campaign-1', () => firstCampaignGate)
  const secondCampaign = queue.run('campaign-2', async () => 'completed')

  assert.equal(await secondCampaign, 'completed')
  releaseFirstCampaign()
  await firstCampaign
})
