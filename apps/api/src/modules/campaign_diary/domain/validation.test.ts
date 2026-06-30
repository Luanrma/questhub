import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createCampaignDiarySchema, updateCampaignDiarySchema } from './validation'

test('campaign diary requires free title and supports markdown content', () => {
  const result = createCampaignDiarySchema.parse({
    title: 'Cena 1',
    content: '# Segredos\n\n- Porta oculta',
  })

  assert.equal(result.title, 'Cena 1')
  assert.match(result.content ?? '', /Porta oculta/)
})

test('campaign diary update allows title-only changes', () => {
  const result = updateCampaignDiarySchema.parse({
    title: 'Resumo da vila',
  })

  assert.equal(result.title, 'Resumo da vila')
})
