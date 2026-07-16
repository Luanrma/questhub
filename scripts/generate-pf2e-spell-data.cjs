const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const IMPORTER_VERSION = 2
const root = process.cwd()
const sourceRoot = path.join(root, 'pf2e-master')
const currentSpellPack = path.join(sourceRoot, 'packs', 'pf2e', 'spells')
const legacySpellPack = path.join(sourceRoot, 'packs', 'spells')
const spellPack = fs.existsSync(currentSpellPack) ? currentSpellPack : legacySpellPack
const outputDir = path.join(root, 'packages/game-system-pathfinder-2e/src/server/spells')

function filesIn(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) return filesIn(fullPath)
    return entry.isFile() && entry.name.endsWith('.json') ? [fullPath] : []
  })
}

function array(value) {
  return Array.isArray(value) ? value : []
}

function text(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function number(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback
}

function slug(filePath) {
  return path.basename(filePath, '.json')
}

function plainText(html) {
  const labels = html
    .replace(/@UUID\[[^\]]+\](?:\{([^}]+)\})?/g, (_, label) => label || '')
    .replace(/@Check\[([^\]]+)\]/g, (_, value) => value.split('|')[0] || '')
    .replace(/@Damage\[([^\]]+)\](?:\{([^}]+)\})?/g, (_, value, label) => label || value)
    .replace(/@Template\[([^\]]+)\]/g, '')
    .replace(/@Localize\[[^\]]+\]/g, '')
    .replace(/<span class="action-glyph">([^<]*)<\/span>/g, '$1')

  return labels
    .replace(/<\/(h2|h3|p|li|tr)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function castingTime(value) {
  const normalized = text(value).toLowerCase()
  if (/^[123](?: actions?)?$/.test(normalized)) return { kind: 'ACTIONS', actions: Number(normalized[0]) }
  if (normalized === 'reaction') return { kind: 'REACTION' }
  if (normalized === 'free' || normalized === 'free action') return { kind: 'FREE_ACTION' }
  if (/minute|hour|day/.test(normalized)) return { kind: 'LONG', text: text(value) }
  if (/\b(to|or)\b/.test(normalized)) return { kind: 'VARIABLE', text: text(value) }
  return { kind: 'UNKNOWN', text: text(value) }
}

function range(value) {
  const raw = text(value)
  const normalized = raw.toLowerCase()
  if (!normalized) return { kind: 'NONE' }
  if (normalized === 'self') return { kind: 'SELF' }
  if (normalized === 'touch') return { kind: 'TOUCH' }
  if (normalized === 'unlimited') return { kind: 'UNLIMITED' }
  const match = normalized.match(/^(\d+)\s*(?:feet|foot|ft\.?)$/)
  return match ? { kind: 'DISTANCE', feet: Number(match[1]) } : { kind: 'TEXT', text: raw }
}

const AREA_SHAPES = new Map([
  ['burst', 'BURST'], ['cone', 'CONE'], ['cube', 'CUBE'], ['cylinder', 'CYLINDER'],
  ['emanation', 'EMANATION'], ['line', 'LINE'], ['square', 'SQUARE'],
])

function area(value) {
  if (!value || typeof value !== 'object') return null
  const rawShape = text(value.type).toLowerCase()
  return {
    shape: AREA_SHAPES.get(rawShape) || 'OTHER',
    feet: number(value.value),
    ...(value.details ? { text: text(value.details) } : {}),
  }
}

function defense(value) {
  const statistic = text(value?.save?.statistic).toUpperCase()
  if (['FORTITUDE', 'REFLEX', 'WILL'].includes(statistic)) {
    return { kind: 'SAVE', statistic, basic: Boolean(value.save.basic) }
  }
  return value?.passive?.statistic === 'ac' ? { kind: 'SPELL_ATTACK' } : { kind: 'NONE' }
}

function damage(value) {
  return Object.entries(value || {}).flatMap(([id, component]) => {
    if (!component || typeof component !== 'object') return []
    const kinds = array(component.kinds)
    const kind = kinds.includes('healing') && !kinds.includes('damage') ? 'HEALING' : 'DAMAGE'
    return [{
      id,
      formula: text(component.formula),
      damageType: text(component.type),
      kind,
      applyAbilityModifier: Boolean(component.applyMod),
    }]
  })
}

function heightening(value) {
  if (!value || typeof value !== 'object') return { kind: 'NONE' }
  if (value.type === 'interval' && number(value.interval) > 0) {
    return {
      kind: 'INTERVAL',
      everyRanks: number(value.interval),
      damage: value.damage && typeof value.damage === 'object' ? value.damage : {},
      ...(typeof value.area === 'number' ? { areaFeet: value.area } : {}),
    }
  }
  return { kind: 'MANUAL', text: 'Aprimoramento com valores especificos por rank.' }
}

function rarity(value) {
  const normalized = text(value).toUpperCase()
  return ['COMMON', 'UNCOMMON', 'RARE', 'UNIQUE'].includes(normalized) ? normalized : 'COMMON'
}

function traditions(value) {
  return array(value).map((item) => text(item).toUpperCase()).filter((item) => ['ARCANE', 'DIVINE', 'OCCULT', 'PRIMAL'].includes(item))
}

function ritual(system) {
  if (!system.ritual || typeof system.ritual !== 'object') return null
  return {
    ...(text(system.ritual.primary?.check) ? { primaryCheck: text(system.ritual.primary.check) } : {}),
    ...(text(system.ritual.secondary?.checks) ? { secondaryChecks: text(system.ritual.secondary.checks) } : {}),
    ...(Number.isInteger(system.ritual.secondary?.casters) ? { secondaryCasters: system.ritual.secondary.casters } : {}),
  }
}

function automationFor(spell) {
  const reasons = []
  if (spell.heightening.kind === 'MANUAL') reasons.push('HEIGHTENING_REQUIRES_MANUAL_RESOLUTION')
  if (spell.targeting.range.kind === 'TEXT') reasons.push('RANGE_NOT_STRUCTURED')
  if (spell.targeting.area?.shape === 'OTHER') reasons.push('AREA_NOT_SUPPORTED')
  if (spell.damage.length > 1) reasons.push('MULTIPLE_DAMAGE_COMPONENTS')
  if (spell.damage.length === 0) reasons.push('NO_STRUCTURED_DAMAGE_OR_HEALING')
  return { status: reasons.length === 0 ? 'SUPPORTED' : spell.damage.length > 0 ? 'PARTIAL' : 'MANUAL', reasons }
}

function normalize(document, filePath) {
  const system = document.system || {}
  const publication = system.publication || {}
  const ritualData = ritual(system)
  const spell = {
    id: `pf2e.spell.${slug(filePath)}`,
    name: text(document.name) || slug(filePath),
    kind: ritualData ? 'RITUAL' : 'SPELL',
    rank: number(system.level?.value),
    rarity: rarity(system.traits?.rarity),
    traits: array(system.traits?.value).map(String),
    traditions: traditions(system.traits?.traditions),
    casting: {
      time: castingTime(system.time?.value),
      ...(text(system.cost?.value) ? { cost: text(system.cost.value) } : {}),
      ...(text(system.requirements) ? { requirements: text(system.requirements) } : {}),
    },
    targeting: {
      range: range(system.range?.value),
      ...(text(system.target?.value) ? { target: text(system.target.value) } : {}),
      area: area(system.area),
    },
    duration: { text: text(system.duration?.value), sustained: Boolean(system.duration?.sustained) },
    defense: defense(system.defense),
    damage: damage(system.damage),
    heightening: heightening(system.heightening),
    counteraction: Boolean(system.counteraction),
    ritual: ritualData,
    description: plainText(text(system.description?.value)),
    source: {
      provider: 'PAIZO',
      sourceId: text(document._id) || slug(filePath),
      ...(text(publication.title) ? { book: text(publication.title) } : {}),
      ...(text(publication.license) ? { license: text(publication.license) } : {}),
      remaster: Boolean(publication.remaster),
    },
  }
  return { ...spell, automation: automationFor(spell) }
}

const rejected = []
const inputFiles = filesIn(spellPack).sort()
const checksum = crypto.createHash('sha256')
const spells = []

for (const filePath of inputFiles) {
  checksum.update(path.relative(sourceRoot, filePath))
  const contents = fs.readFileSync(filePath)
  checksum.update(contents)
  try {
    const document = JSON.parse(contents)
    if (Array.isArray(document) || document?.type !== 'spell') continue
    spells.push(normalize(document, filePath))
  } catch (error) {
    rejected.push({ sourceId: slug(filePath), reason: error.message })
  }
}

spells.sort((left, right) => left.rank - right.rank || left.name.localeCompare(right.name))
const packageJson = JSON.parse(fs.readFileSync(path.join(sourceRoot, 'package.json'), 'utf8'))
const manifest = {
  importerVersion: IMPORTER_VERSION,
  provider: 'FOUNDRY_PF2E',
  providerVersion: text(packageJson.version) || 'unknown',
  importedAt: new Date().toISOString(),
  inputChecksum: checksum.digest('hex'),
  imported: spells.length,
  rejected,
}

const chunkSize = 150
const chunks = []
for (let offset = 0; offset < spells.length; offset += chunkSize) {
  const chunkIndex = chunks.length
  const name = `data.generated.${chunkIndex}`
  const exportName = `PATHFINDER_2E_SPELL_DATA_${chunkIndex}`
  chunks.push({ name, exportName })
  fs.writeFileSync(
    path.join(outputDir, `${name}.ts`),
    `// @ts-nocheck\nimport type { Pathfinder2eSpellDefinition } from './models'\n\nexport const ${exportName}: Pathfinder2eSpellDefinition[] = ${JSON.stringify(spells.slice(offset, offset + chunkSize))}\n`,
  )
}

for (const fileName of fs.readdirSync(outputDir)) {
  const match = fileName.match(/^data\.generated\.(\d+)\.ts$/)
  if (match && Number(match[1]) >= chunks.length) fs.unlinkSync(path.join(outputDir, fileName))
}

fs.writeFileSync(
  path.join(outputDir, 'data.generated.ts'),
  `${chunks.map(({ name, exportName }) => `import { ${exportName} } from './${name}'`).join('\n')}\n\nexport const PATHFINDER_2E_SPELL_DATA = [\n${chunks.map(({ exportName }) => `  ...${exportName},`).join('\n')}\n]\n`,
)
fs.writeFileSync(path.join(outputDir, 'import-manifest.generated.ts'), `// @ts-nocheck\nimport type { Pathfinder2eSpellImportManifest } from './models'\n\nexport const PATHFINDER_2E_SPELL_IMPORT_MANIFEST: Pathfinder2eSpellImportManifest = ${JSON.stringify(manifest, null, 2)}\n`)

console.log(`Imported ${spells.length} spells; rejected ${rejected.length}.`)
