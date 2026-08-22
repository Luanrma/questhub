import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { listPathfinder2eActiveEffectDefinitions } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-definitions.ts'
import { getPathfinder2eActiveEffectPtBrTranslation } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-pt-br.ts'

const effects = listPathfinder2eActiveEffectDefinitions()
  .filter((definition) => definition.kind === 'effect')
  .map((definition) => {
    const translation = getPathfinder2eActiveEffectPtBrTranslation(
      definition.source.sourcePack,
      definition.name,
    )
    return {
      definitionKey: definition.definitionKey,
      sourcePack: definition.source.sourcePack,
      sourceId: definition.source.sourceId,
      name: definition.name,
      description: definition.description,
      existingPtBr: translation ?? null,
    }
  })

const packs = [...new Set(effects.map((effect) => effect.sourcePack))].sort()
const stats = Object.fromEntries(
  packs.map((pack) => {
    const entries = effects.filter((effect) => effect.sourcePack === pack)
    return [pack, {
      definitions: entries.length,
      namesTranslated: entries.filter((effect) => Boolean(effect.existingPtBr?.name?.trim())).length,
      descriptionsRequired: entries.filter((effect) => Boolean(effect.description.trim())).length,
      descriptionsTranslated: entries.filter((effect) => Boolean(effect.existingPtBr?.description?.trim())).length,
    }]
  }),
)

const outputDir = path.resolve('qh-eff-016-artifact')
await mkdir(outputDir, { recursive: true })
await writeFile(
  path.join(outputDir, 'effect-inventory.json'),
  JSON.stringify({ total: effects.length, packs, stats, effects }, null, 2),
  'utf8',
)
console.log(JSON.stringify({ total: effects.length, packs, stats }, null, 2))
