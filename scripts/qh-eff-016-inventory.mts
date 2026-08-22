import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { listPathfinder2eActiveEffectDefinitions } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-definitions.ts'
import {
  PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_SOURCE_COMMIT,
  PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_SOURCE_REPOSITORY,
  getPathfinder2eActiveEffectPtBrTranslation,
} from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-pt-br.ts'

type UpstreamEntry = { name?: string; description?: string }

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

const upstreamByPack: Record<string, Record<string, UpstreamEntry>> = {}
const upstreamStats: Record<string, { entries: number; matchedDefinitions: number; names: number; descriptions: number }> = {}
for (const pack of packs) {
  const fileName = `pf2e.${pack}.json`
  const url = `https://raw.githubusercontent.com/${PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_SOURCE_REPOSITORY}/${PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_SOURCE_COMMIT}/translation/pt-BR/compendium/${fileName}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Could not fetch frozen PT-BR pack ${fileName}: ${response.status}`)
  }
  const payload = await response.json() as { entries?: Record<string, UpstreamEntry> }
  const entries = payload.entries ?? {}
  upstreamByPack[pack] = entries
  const canonical = effects.filter((effect) => effect.sourcePack === pack)
  const matched = canonical.filter((effect) => Boolean(entries[effect.name]))
  upstreamStats[pack] = {
    entries: Object.keys(entries).length,
    matchedDefinitions: matched.length,
    names: matched.filter((effect) => Boolean(entries[effect.name]?.name?.trim())).length,
    descriptions: matched.filter((effect) => Boolean(entries[effect.name]?.description?.trim())).length,
  }
}

const outputDir = path.resolve('qh-eff-016-artifact')
await mkdir(outputDir, { recursive: true })
await writeFile(
  path.join(outputDir, 'effect-inventory.json'),
  JSON.stringify({ total: effects.length, packs, stats, upstreamStats, effects }, null, 2),
  'utf8',
)
await writeFile(
  path.join(outputDir, 'upstream-pt-br.json'),
  JSON.stringify({
    repository: PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_SOURCE_REPOSITORY,
    commit: PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_SOURCE_COMMIT,
    packs: upstreamByPack,
  }, null, 2),
  'utf8',
)
console.log(JSON.stringify({ total: effects.length, packs, stats, upstreamStats }, null, 2))
