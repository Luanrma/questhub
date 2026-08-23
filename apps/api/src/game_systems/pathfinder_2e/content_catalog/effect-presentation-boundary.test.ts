import assert from 'node:assert/strict'
import test from 'node:test'
import { pathfinder2eCatalogProvider } from './catalog-provider'
import { listPathfinder2eActiveEffectDefinitions } from './active-effect-definitions'
import { getPathfinder2eActiveEffectDefinitionView } from './active-effect-query'

test('Effects technical metadata is retained canonically and hidden only by the visual sheet projection', async () => {
  const candidate = listPathfinder2eActiveEffectDefinitions()[0]
  assert.ok(candidate)

  const view = getPathfinder2eActiveEffectDefinitionView(candidate.definitionKey, 'pt-BR')
  assert.ok(view)

  // Technical/canonical information must remain available below the UI projection.
  assert.equal(view.definitionKey, candidate.definitionKey)
  assert.equal(view.kind, candidate.kind)
  assert.deepEqual(view.source, candidate.source)
  assert.ok(view.source.sourcePack)
  assert.ok(view.source.sourceId)

  const sheet = await pathfinder2eCatalogProvider.get({
    campaignId: 'campaign-1',
    domain: 'EFFECTS',
    locale: 'pt-BR',
    contentId: candidate.definitionKey,
  })
  assert.ok(sheet)

  // The Compendium sheet intentionally omits technical metadata from presentation only.
  const visibleLabels = sheet.sections.flatMap((section) => section.fields.map((field) => field.label))
  assert.equal(visibleLabels.includes('Definition key'), false)
  assert.equal(visibleLabels.includes('Tipo'), false)
  assert.equal(visibleLabels.includes('Pacote'), false)
  assert.equal(visibleLabels.includes('Source ID'), false)
  assert.equal(visibleLabels.includes('Slug'), false)

  // Identity still uses definitionKey internally even though it is not displayed.
  assert.equal(sheet.id, candidate.definitionKey)
})
