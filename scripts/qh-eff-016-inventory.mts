import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { listPathfinder2eActiveEffectDefinitions } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-definitions.ts'
import { resolvePathfinder2eActiveEffectDisplay } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-localization.ts'
import { PATHFINDER_2E_EFFECT_PT_BR_TRANSLATIONS } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/translations/pt-BR/active-effects/index.ts'

const EXPECTED_PACK_COUNTS = Object.freeze({
  'bestiary-effects': 460,
  'campaign-effects': 5,
  'equipment-effects': 643,
  'feat-effects': 20,
  'kingmaker-features': 1,
  'other-effects': 2,
  'spell-effects': 479,
})
const EXPECTED_TOTAL = 1610
const FORBIDDEN_PRESENTATION_PATTERN = /@(?:Check|UUID|Compendium)\b|<\/?[a-z][^>]*>/i

function nonBlank(value: string | undefined): boolean {
  return typeof value === 'string' && value.trim().length > 0
}

const definitions = listPathfinder2eActiveEffectDefinitions()
  .filter((definition) => definition.kind === 'effect')

const effects = definitions.map((definition) => {
  const directTranslation = PATHFINDER_2E_EFFECT_PT_BR_TRANSLATIONS[definition.definitionKey]
  const display = resolvePathfinder2eActiveEffectDisplay(definition, 'pt-BR')
  const presentationText = `${display.name}\n${display.description}`

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
    hasDefinitionKeyTranslation: Boolean(directTranslation),
    directNameTranslated: nonBlank(directTranslation?.name),
    directDescriptionTranslated: !definition.description.trim() || nonBlank(directTranslation?.description),
    hasForbiddenPresentationMarkup: FORBIDDEN_PRESENTATION_PATTERN.test(presentationText),
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
      definitionKeyTranslations: entries.filter((effect) => effect.hasDefinitionKeyTranslation).length,
    }]
  }),
)

const missing = effects.filter((effect) => (
  !effect.hasDefinitionKeyTranslation
  || !effect.directNameTranslated
  || !effect.directDescriptionTranslated
  || effect.nameLocale !== 'pt-BR'
  || (effect.canonicalDescription.trim() && effect.descriptionLocale !== 'pt-BR')
))
const presentationViolations = effects.filter((effect) => effect.hasForbiddenPresentationMarkup)
const expectedPacks = Object.keys(EXPECTED_PACK_COUNTS).sort()
const inventoryFailures: string[] = []

if (effects.length !== EXPECTED_TOTAL) {
  inventoryFailures.push(`expected ${EXPECTED_TOTAL} Effects, found ${effects.length}`)
}
if (JSON.stringify(packs) !== JSON.stringify(expectedPacks)) {
  inventoryFailures.push(`expected packs ${expectedPacks.join(', ')}, found ${packs.join(', ')}`)
}
for (const [pack, expectedCount] of Object.entries(EXPECTED_PACK_COUNTS)) {
  const actualCount = effects.filter((effect) => effect.sourcePack === pack).length
  if (actualCount !== expectedCount) {
    inventoryFailures.push(`${pack}: expected ${expectedCount} definitions, found ${actualCount}`)
  }
}
if (missing.length > 0) {
  inventoryFailures.push(`${missing.length} Effect(s) are missing an explicit definitionKey pt-BR translation`)
}
if (presentationViolations.length > 0) {
  inventoryFailures.push(`${presentationViolations.length} Effect(s) expose Foundry macro/HTML markup`)
}

const outputDir = path.resolve('qh-eff-016-artifact')
await mkdir(outputDir, { recursive: true })
await writeFile(
  path.join(outputDir, 'effect-inventory.json'),
  JSON.stringify({
    expectedTotal: EXPECTED_TOTAL,
    total: effects.length,
    expectedPackCounts: EXPECTED_PACK_COUNTS,
    packs,
    stats,
    missingCount: missing.length,
    presentationViolationCount: presentationViolations.length,
    inventoryFailures,
    effects,
    missing,
    presentationViolations,
  }, null, 2),
  'utf8',
)

console.log(JSON.stringify({
  expectedTotal: EXPECTED_TOTAL,
  total: effects.length,
  expectedPackCounts: EXPECTED_PACK_COUNTS,
  packs,
  stats,
  missingCount: missing.length,
  presentationViolationCount: presentationViolations.length,
  inventoryFailures,
}, null, 2))

if (inventoryFailures.length > 0) {
  console.error(`QH-EFF-016 inventory gate failed:\n- ${inventoryFailures.join('\n- ')}`)
  process.exitCode = 1
}
