import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { listPathfinder2eActiveEffectDefinitions } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-definitions.ts'
import { resolvePathfinder2eActiveEffectDisplay } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-localization.ts'

const definitions = listPathfinder2eActiveEffectDefinitions()
  .filter((definition) => definition.kind === 'effect')

const effects = definitions.map((definition) => {
  const display = resolvePathfinder2eActiveEffectDisplay(definition, 'pt-BR')
  return {
    definitionKey: definition.definitionKey,
    sourcePack: definition.source.sourcePack,
    sourceId: definition.source.sourceId,
    canonicalName: definition.name,
    canonicalDescription: definition.description,
    localizedName: display.name,
    localizedDescription: display.description,
    nameLocale: display.localization.nameLocale,
    descriptionLocale: display.localization.descriptionLocale,
  }
})

const packs = [...new Set(effects.map((effect) => effect.sourcePack))].sort()
const stats = Object.fromEntries(
  packs.map((pack) => {
    const entries = effects.filter((effect) => effect.sourcePack === pack)
    const descriptionsRequired = entries.filter((effect) => Boolean(effect.canonicalDescription.trim()))
    return [pack, {
      definitions: entries.length,
      namesTranslated: entries.filter((effect) => effect.nameLocale === 'pt-BR').length,
      descriptionsRequired: descriptionsRequired.length,
      descriptionsTranslated: descriptionsRequired.filter((effect) => effect.descriptionLocale === 'pt-BR').length,
    }]
  }),
)

const missing = effects.filter((effect) => (
  effect.nameLocale !== 'pt-BR'
  || (effect.canonicalDescription.trim() && effect.descriptionLocale !== 'pt-BR')
))

const outputDir = path.resolve('qh-eff-016-artifact')
await mkdir(outputDir, { recursive: true })
await writeFile(
  path.join(outputDir, 'effect-inventory.json'),
  JSON.stringify({ total: effects.length, packs, stats, missingCount: missing.length, effects, missing }, null, 2),
  'utf8',
)

console.log(JSON.stringify({
  total: effects.length,
  packs,
  stats,
  missingCount: missing.length,
}, null, 2))
