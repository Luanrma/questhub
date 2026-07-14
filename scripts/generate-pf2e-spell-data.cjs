const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const packsRoot = path.join(process.cwd(), 'pf2e-master', 'packs')
const outputDir = path.join(process.cwd(), 'packages', 'game-system-pathfinder-2e', 'src', 'server', 'spells')
const dataOutputPath = path.join(outputDir, 'data.generated.ts')
const manifestOutputPath = path.join(outputDir, 'source-manifest.generated.ts')
const reportOutputPath = path.join(outputDir, 'compatibility-report.generated.ts')

const SPELL_PACK = 'spells'
const DEPENDENCY_PACKS = ['spell-effects', 'conditions', 'equipment-effects', 'feat-effects', 'other-effects', 'campaign-effects', 'bestiary-effects', 'actions']
const PACK_ALIASES = {
  conditionitems: 'conditions',
  actionspf2e: 'actions',
  'spells-srd': 'spells',
  'equipment-srd': 'equipment',
  'feats-srd': 'feats',
}

const KNOWN_RULE_ELEMENT_KEYS = new Set([
  'ActiveEffectLike', 'AdjustDegreeOfSuccess', 'AdjustModifier', 'Aura',
  'BaseSpeed', 'BattleForm', 'ChoiceSet', 'DamageAlteration', 'DamageDice',
  'EphemeralEffect', 'FastHealing', 'FlatModifier', 'GrantItem', 'Immunity',
  'ItemAlteration', 'LoseHitPoints', 'Resistance', 'RollOption', 'RollTwice',
  'Sense', 'SpecialResource', 'SpecialStatistic', 'SubstituteRoll', 'TempHP',
  'TokenEffectIcon', 'TokenImage', 'TokenLight', 'Weakness',
])

// ---------------------------------------------------------------------------
// Filesystem helpers
// ---------------------------------------------------------------------------

function walkJsonFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return walkJsonFiles(fullPath)
    if (entry.isFile() && entry.name.endsWith('.json')) return [fullPath]
    return []
  })
}

function readDocument(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function packNameFor(filePath) {
  return path.relative(packsRoot, path.dirname(filePath)).split(path.sep)[0]
}

function slugFor(filePath) {
  return path.basename(filePath, '.json')
}

function array(value) {
  return Array.isArray(value) ? value : []
}

function stringValue(value, fallback = '') {
  return typeof value === 'string' ? value : fallback
}

function numberValue(value, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

// ---------------------------------------------------------------------------
// Rich-text compiler: HTML + Foundry inline macros -> Pathfinder2eRichTextDocument
// Never truncates and never drops macros; unknown tags are stripped to text.
// ---------------------------------------------------------------------------

const HTML_ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', 39: "'", nbsp: ' ' }

function decodeEntities(text) {
  return text.replace(/&(#?\w+);/g, (match, entity) => {
    const key = entity.startsWith('#') ? entity.slice(1) : entity
    return HTML_ENTITIES[key] !== undefined ? HTML_ENTITIES[key] : match
  })
}

function htmlToText(html) {
  let text = html
    .replace(/<\/(h2|h3|p|li|tr)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<tr[^>]*>/gi, '')
    .replace(/<\/(td|th)>/gi, ' | ')
    .replace(/<hr\s*\/?>/gi, '\n---\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')

  text = decodeEntities(text)
  text = text
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return text
}

function parseTemplateParams(raw) {
  const parts = raw.split('|')
  let shape
  const params = {}
  for (const part of parts) {
    if (part.includes(':')) {
      const [key, value] = part.split(':')
      if (key === 'type') shape = value
      else params[key] = value
    } else if (!shape) {
      shape = part
    }
  }
  return {
    shape: shape || 'burst',
    distance: params.distance !== undefined ? Number(params.distance) : undefined,
    width: params.width !== undefined ? Number(params.width) : undefined,
  }
}

function parseCheckParams(raw) {
  const parts = raw.split('|')
  const statistic = parts[0]
  const params = {}
  let basic = false
  for (const part of parts.slice(1)) {
    if (part === 'basic') {
      basic = true
      continue
    }
    if (part.includes(':')) {
      const [key, value] = part.split(':')
      params[key] = value
    }
  }
  return { statistic, dc: params.dc, against: params.against, basic }
}

function parseDamageParams(raw) {
  const match = raw.match(/^(.*)\[([^\]]*)\]$/)
  if (!match) return { formula: raw, damageTypes: [] }
  const [, formula, typesRaw] = match
  return {
    formula: formula.trim(),
    damageTypes: typesRaw
      .split(',')
      .map((type) => type.trim())
      .filter(Boolean),
  }
}

const MACRO_PATTERN =
  /@UUID\[([^\]]+)\](?:\{([^}]+)\})?|@Check\[([^\]]+)\]|@Damage\[((?:[^[\]]|\[[^\]]*\])*)\](?:\{([^}]+)\})?|@Template\[([^\]]+)\]|@Localize\[([^\]]+)\]|<span class="action-glyph">([^<]*)<\/span>/g

function compileRichText(rawHtml) {
  const raw = stringValue(rawHtml)
  const nodes = []
  let lastIndex = 0
  let match

  function pushText(segment) {
    const text = htmlToText(segment)
    if (text) nodes.push({ kind: 'TEXT', value: text })
  }

  MACRO_PATTERN.lastIndex = 0
  while ((match = MACRO_PATTERN.exec(raw))) {
    pushText(raw.slice(lastIndex, match.index))
    const [, uuid, uuidLabel, check, damage, damageLabel, template, localizeKey, glyph] = match

    if (uuid !== undefined) {
      nodes.push({ kind: 'UUID', uuid, ...(uuidLabel ? { label: uuidLabel } : {}) })
    } else if (check !== undefined) {
      const { statistic, dc, against, basic } = parseCheckParams(check)
      nodes.push({ kind: 'CHECK', statistic, ...(dc ? { dc } : {}), ...(against ? { against } : {}), ...(basic ? { basic } : {}) })
    } else if (damage !== undefined) {
      const { formula, damageTypes } = parseDamageParams(damage)
      nodes.push({ kind: 'DAMAGE', formula, damageTypes, ...(damageLabel ? { label: damageLabel } : {}) })
    } else if (template !== undefined) {
      const { shape, distance, width } = parseTemplateParams(template)
      nodes.push({ kind: 'TEMPLATE', shape, ...(distance !== undefined ? { distance } : {}), ...(width !== undefined ? { width } : {}) })
    } else if (localizeKey !== undefined) {
      nodes.push({ kind: 'LOCALIZE', key: localizeKey })
    } else if (glyph !== undefined) {
      nodes.push({ kind: 'ACTION_GLYPH', actions: glyph.trim() })
    }

    lastIndex = MACRO_PATTERN.lastIndex
  }
  pushText(raw.slice(lastIndex))

  return { raw, nodes }
}

// ---------------------------------------------------------------------------
// Lossless field extraction
// ---------------------------------------------------------------------------

function damageComponentsFor(rawDamage) {
  const result = {}
  for (const [key, value] of Object.entries(rawDamage || {})) {
    if (!value || typeof value !== 'object') continue
    result[key] = {
      formula: stringValue(value.formula),
      type: stringValue(value.type),
      kinds: array(value.kinds).map(String),
      category: value.category === null || value.category === undefined ? null : stringValue(value.category),
      applyMod: Boolean(value.applyMod),
      materials: array(value.materials).map(String),
    }
  }
  return result
}

function areaFor(rawArea) {
  if (!rawArea || typeof rawArea !== 'object') return null
  return {
    type: stringValue(rawArea.type),
    value: numberValue(rawArea.value, 0),
    ...(rawArea.details ? { details: stringValue(rawArea.details) } : {}),
  }
}

function defenseFor(rawDefense) {
  const save = rawDefense && rawDefense.save
  if (!save) return null
  const statistic = stringValue(save.statistic)
  if (!['fortitude', 'reflex', 'will'].includes(statistic)) return null
  return { save: { statistic, basic: Boolean(save.basic) } }
}

function durationFor(rawDuration) {
  return { value: stringValue(rawDuration?.value), sustained: Boolean(rawDuration?.sustained) }
}

function heighteningFor(rawHeightening) {
  if (!rawHeightening || typeof rawHeightening !== 'object') return null
  if (rawHeightening.type === 'interval') {
    return {
      type: 'interval',
      interval: numberValue(rawHeightening.interval, 0),
      ...(rawHeightening.damage ? { damage: rawHeightening.damage } : {}),
      ...(typeof rawHeightening.area === 'number' ? { area: rawHeightening.area } : {}),
    }
  }
  if (rawHeightening.type === 'fixed') {
    return { type: 'fixed', levels: rawHeightening.levels || {} }
  }
  return null
}

function overlaysFor(rawOverlays) {
  return Object.values(rawOverlays || {}).map((overlay) => ({
    id: stringValue(overlay._id),
    ...(overlay.name ? { name: stringValue(overlay.name) } : {}),
    overlayType: stringValue(overlay.overlayType),
    sort: numberValue(overlay.sort, 0),
    system: overlay.system || {},
  }))
}

function ritualFor(system) {
  const ritual = system.ritual
  if (!ritual || typeof ritual !== 'object') return null
  const primaryCheck = stringValue(ritual.primary?.check) || undefined
  const secondaryChecks = stringValue(ritual.secondary?.checks) || undefined
  const secondaryCasters = ritual.secondary?.casters !== undefined ? numberValue(ritual.secondary.casters) : undefined
  if (!primaryCheck && !secondaryChecks && secondaryCasters === undefined) return null
  return {
    ...(primaryCheck ? { primaryCheck } : {}),
    ...(secondaryChecks ? { secondaryChecks } : {}),
    ...(secondaryCasters !== undefined ? { secondaryCasters } : {}),
  }
}

// ---------------------------------------------------------------------------
// Dependency graph: GrantItem / EphemeralEffect / Aura + description-linked effects
// ---------------------------------------------------------------------------

function packAlias(pack) {
  return PACK_ALIASES[pack] || pack
}

function parseUuid(uuid) {
  if (typeof uuid !== 'string' || !uuid.startsWith('Compendium.pf2e.')) return null
  const parts = uuid.split('.')
  if (parts.length < 5) return null
  return { pack: packAlias(parts[2]), docType: parts[3], idOrName: parts.slice(4).join('.') }
}

function structuralUuidsFromRules(rules) {
  const uuids = []
  for (const rule of array(rules)) {
    if (!rule || typeof rule !== 'object') continue
    if (rule.key === 'GrantItem' && typeof rule.uuid === 'string') uuids.push(rule.uuid)
    if ((rule.key === 'EphemeralEffect' || rule.key === 'Aura') && Array.isArray(rule.effects)) {
      for (const effect of rule.effects) {
        if (effect && typeof effect.uuid === 'string') uuids.push(effect.uuid)
      }
    }
  }
  return uuids
}

function descriptionEffectUuids(nodes) {
  const uuids = []
  for (const node of nodes) {
    if (node.kind !== 'UUID') continue
    const parsed = parseUuid(node.uuid)
    if (!parsed || parsed.docType !== 'Item') continue
    if (!DEPENDENCY_PACKS.includes(parsed.pack)) continue
    uuids.push(node.uuid)
  }
  return uuids
}

function buildDependencyIndex() {
  const index = new Map()
  for (const packName of DEPENDENCY_PACKS) {
    const packDir = path.join(packsRoot, packName)
    if (!fs.existsSync(packDir)) continue
    const byId = new Map()
    const byName = new Map()
    for (const filePath of walkJsonFiles(packDir)) {
      const document = readDocument(filePath)
      if (Array.isArray(document) || !document || typeof document !== 'object') continue
      const id = stringValue(document._id)
      const name = stringValue(document.name)
      if (id) byId.set(id, { document, filePath, pack: packName })
      if (name) byName.set(name.toLocaleLowerCase(), { document, filePath, pack: packName })
    }
    index.set(packName, { byId, byName })
  }
  return index
}

function resolveUuid(uuid, index) {
  const parsed = parseUuid(uuid)
  if (!parsed) return { entry: null }
  const packIndex = index.get(parsed.pack)
  if (!packIndex) return { entry: null }
  return { entry: packIndex.byId.get(parsed.idOrName) ?? packIndex.byName.get(parsed.idOrName.toLocaleLowerCase()) ?? null }
}

function normalizeDependencyDocument(entry) {
  const { document, filePath, pack } = entry
  const system = document.system || {}
  return {
    id: `pf2e:${pack}:${slugFor(filePath)}`,
    sourcePack: pack,
    sourceId: stringValue(document._id),
    name: stringValue(document.name, slugFor(filePath)),
    documentType: document.type === 'condition' ? 'condition' : 'effect',
    rules: array(system.rules),
    description: compileRichText(system.description?.value),
  }
}

const dependencyIndex = buildDependencyIndex()
const dependencyDocuments = new Map()
const unresolvedReferences = []
const unknownRuleElementKeysSet = new Set()

function collectRuleElementKeys(rules) {
  for (const rule of array(rules)) {
    if (rule && typeof rule.key === 'string') unknownRuleElementKeysSet.add(rule.key)
  }
}

function resolveDependenciesFor(fromId, rules, descriptionNodes, visited, depth) {
  if (depth > 5) return []

  const uuids = [...structuralUuidsFromRules(rules), ...descriptionEffectUuids(descriptionNodes)]
  const resolvedIds = []

  for (const uuid of uuids) {
    const parsed = parseUuid(uuid)
    if (!parsed) continue

    const { entry } = resolveUuid(uuid, dependencyIndex)
    if (!entry) {
      unresolvedReferences.push({ fromId, uuid })
      continue
    }

    const normalized = normalizeDependencyDocument(entry)
    resolvedIds.push(normalized.id)

    if (!dependencyDocuments.has(normalized.id)) {
      dependencyDocuments.set(normalized.id, normalized)
      collectRuleElementKeys(normalized.rules)
    }

    if (!visited.has(normalized.id)) {
      visited.add(normalized.id)
      resolvedIds.push(...resolveDependenciesFor(normalized.id, normalized.rules, normalized.description.nodes, visited, depth + 1))
    }
  }

  return [...new Set(resolvedIds)]
}

// ---------------------------------------------------------------------------
// Spell normalization
// ---------------------------------------------------------------------------

function normalizeSpell(document, filePath) {
  const pack = packNameFor(filePath)
  const system = document.system || {}
  const traits = system.traits || {}
  const publication = system.publication || {}
  const ritual = ritualFor(system)
  const description = compileRichText(system.description?.value)
  const rules = array(system.rules)
  const id = `pf2e:${pack}:${slugFor(filePath)}`

  collectRuleElementKeys(rules)

  const dependencyIds = resolveDependenciesFor(id, rules, description.nodes, new Set([id]), 0)

  return {
    id,
    source: {
      pack,
      id: stringValue(document._id),
      ...(publication.title ? { title: stringValue(publication.title) } : {}),
      ...(publication.license ? { license: stringValue(publication.license) } : {}),
      remaster: Boolean(publication.remaster),
    },
    name: stringValue(document.name, slugFor(filePath)),
    category: ritual ? 'ritual' : 'spell',
    rank: numberValue(system.level?.value, 0),
    rarity: stringValue(traits.rarity, 'common'),
    traits: array(traits.value).map(String),
    traditions: array(traits.traditions).map(String),
    time: stringValue(system.time?.value),
    ...(system.cost?.value ? { cost: stringValue(system.cost.value) } : {}),
    ...(system.requirements ? { requirements: stringValue(system.requirements) } : {}),
    ...(system.range?.value ? { range: stringValue(system.range.value) } : {}),
    ...(system.target?.value ? { target: stringValue(system.target.value) } : {}),
    area: areaFor(system.area),
    duration: durationFor(system.duration),
    defense: defenseFor(system.defense),
    damage: damageComponentsFor(system.damage),
    heightening: heighteningFor(system.heightening),
    overlays: overlaysFor(system.overlays),
    counteraction: Boolean(system.counteraction),
    ritual,
    rules,
    description,
    dependencyIds,
  }
}

// ---------------------------------------------------------------------------
// Main import
// ---------------------------------------------------------------------------

const spells = []
const compilationFailures = []

for (const filePath of walkJsonFiles(path.join(packsRoot, SPELL_PACK))) {
  let document
  try {
    document = readDocument(filePath)
  } catch (error) {
    compilationFailures.push({ id: `pf2e:${SPELL_PACK}:${slugFor(filePath)}`, reason: `parse error: ${error.message}` })
    continue
  }

  if (Array.isArray(document) || document?.type !== 'spell') continue

  try {
    spells.push(normalizeSpell(document, filePath))
  } catch (error) {
    compilationFailures.push({ id: `pf2e:${SPELL_PACK}:${slugFor(filePath)}`, reason: error.message })
  }
}

spells.sort((left, right) => left.rank - right.rank || left.name.localeCompare(right.name) || left.id.localeCompare(right.id))

const totalRituals = spells.filter((spell) => spell.category === 'ritual').length
const totalSpells = spells.length - totalRituals

// ---------------------------------------------------------------------------
// Source manifest
// ---------------------------------------------------------------------------

function checksumForPack(packName) {
  const packDir = path.join(packsRoot, packName)
  if (!fs.existsSync(packDir)) return { fileCount: 0, checksum: crypto.createHash('sha256').digest('hex') }

  const files = walkJsonFiles(packDir).sort()
  const hash = crypto.createHash('sha256')
  for (const filePath of files) {
    hash.update(path.relative(packsRoot, filePath))
    hash.update(fs.readFileSync(filePath))
  }
  return { fileCount: files.length, checksum: hash.digest('hex') }
}

const pf2ePackageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'pf2e-master', 'package.json'), 'utf8'))

const sourceManifest = {
  repository: 'foundryvtt/pf2e',
  systemVersion: stringValue(pf2ePackageJson.version, 'unknown'),
  commitSha: null,
  importedAt: new Date().toISOString(),
  packs: [SPELL_PACK, ...DEPENDENCY_PACKS].map((packName) => {
    const { fileCount, checksum } = checksumForPack(packName)
    return { path: `pf2e-master/packs/${packName}`, fileCount, checksum }
  }),
}

// ---------------------------------------------------------------------------
// Compatibility report
// ---------------------------------------------------------------------------

const compatibilityReport = {
  sourceManifest,
  totalSpells,
  totalRituals,
  totalDependencies: dependencyDocuments.size,
  unresolvedReferences,
  unknownRuleElementKeys: [...unknownRuleElementKeysSet].filter((key) => !KNOWN_RULE_ELEMENT_KEYS.has(key)).sort(),
  compilationFailures,
}

// ---------------------------------------------------------------------------
// Write output
// ---------------------------------------------------------------------------

const dataContent = `// @ts-nocheck
import type { Pathfinder2eSpellDefinition, Pathfinder2eSpellEffectDependency } from './models'

export const PATHFINDER_2E_SPELL_DATA: Pathfinder2eSpellDefinition[] = ${JSON.stringify(spells, null, 2)}

export const PATHFINDER_2E_SPELL_EFFECT_DEPENDENCIES: Pathfinder2eSpellEffectDependency[] = ${JSON.stringify([...dependencyDocuments.values()], null, 2)}

export const PATHFINDER_2E_SPELL_SOURCE_SUMMARY = {
  source: 'pf2e-master/packs',
  packs: ${JSON.stringify([SPELL_PACK, ...DEPENDENCY_PACKS])},
  totalSpells: ${totalSpells},
  totalRituals: ${totalRituals},
  totalDependencies: ${dependencyDocuments.size},
} as const
`

const manifestContent = `// @ts-nocheck
import type { Pathfinder2eSourceManifest } from './models'

export const PATHFINDER_2E_SPELL_SOURCE_MANIFEST: Pathfinder2eSourceManifest = ${JSON.stringify(sourceManifest, null, 2)}
`

const reportContent = `// @ts-nocheck
import type { Pathfinder2eSpellCompatibilityReport } from './models'

export const PATHFINDER_2E_SPELL_COMPATIBILITY_REPORT: Pathfinder2eSpellCompatibilityReport = ${JSON.stringify(compatibilityReport, null, 2)}
`

fs.writeFileSync(dataOutputPath, dataContent)
fs.writeFileSync(manifestOutputPath, manifestContent)
fs.writeFileSync(reportOutputPath, reportContent)

console.log(`Generated ${spells.length} spells (${totalRituals} rituals) at ${path.relative(process.cwd(), dataOutputPath)}`)
console.log(`Resolved ${dependencyDocuments.size} effect/condition dependencies`)
console.log(`Compatibility report: ${unresolvedReferences.length} unresolved references, ${compatibilityReport.unknownRuleElementKeys.length} unknown rule element keys, ${compilationFailures.length} compilation failures`)
