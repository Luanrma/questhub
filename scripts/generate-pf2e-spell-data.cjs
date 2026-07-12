const fs = require('node:fs')
const path = require('node:path')

const packsRoot = path.join(process.cwd(), 'pf2e-master', 'packs')
const spellPacks = ['spells']
const outputPath = path.join(process.cwd(), 'packages', 'game-system-pathfinder-2e', 'src', 'server', 'spells', 'data.generated.ts')

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

function cleanText(value, maxLength = 900) {
  const text = stringValue(value)
    .replace(/@UUID\[[^\]]+\]\{([^}]+)\}/g, '$1')
    .replace(/@UUID\[[^\]]+\]/g, '')
    .replace(/@Check\[([^\]|]+)[^\]]*\]/g, '$1 check')
    .replace(/@Damage\[([^\]]+)\](?:\{([^}]+)\})?/g, (_, roll, label) => label || roll)
    .replace(/@Localize\[[^\]]+\]/g, '')
    .replace(/<table[\s\S]*?<\/table>/gi, ' ')
    .replace(/<hr\s*\/?>/gi, '. ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trim()}...`
}

function formatArea(area) {
  if (!area || typeof area !== 'object') return undefined
  const value = numberValue(area.value, 0)
  const type = stringValue(area.type)
  if (!value || !type) return undefined
  return `${value} pes (${type})`
}

function formatHeightening(heightening) {
  if (!heightening || typeof heightening !== 'object') return undefined

  if (heightening.type === 'interval') {
    const interval = numberValue(heightening.interval, 0)
    return interval ? `A cada ${interval} rank(s)` : undefined
  }

  if (heightening.type === 'fixed' && heightening.levels && typeof heightening.levels === 'object') {
    const ranks = Object.keys(heightening.levels)
      .map(Number)
      .filter((rank) => Number.isFinite(rank))
      .sort((left, right) => left - right)
    return ranks.length ? `Ranks ${ranks.join(', ')}` : undefined
  }

  return undefined
}

function defenseFor(system) {
  const save = system.defense?.save
  if (!save) return null

  const statistic = stringValue(save.statistic)
  if (!['fortitude', 'reflex', 'will'].includes(statistic)) return null

  return { save: statistic, basic: Boolean(save.basic) }
}

function ritualFor(system) {
  const ritual = system.ritual
  if (!ritual || typeof ritual !== 'object') return undefined

  const primaryCheck = stringValue(ritual.primary?.check) || undefined
  const secondaryChecks = stringValue(ritual.secondary?.checks) || undefined
  const secondaryCasters = ritual.secondary?.casters !== undefined ? numberValue(ritual.secondary.casters) : undefined

  if (!primaryCheck && !secondaryChecks && secondaryCasters === undefined) return undefined

  return {
    ...(primaryCheck ? { primaryCheck } : {}),
    ...(secondaryChecks ? { secondaryChecks } : {}),
    ...(secondaryCasters !== undefined ? { secondaryCasters } : {}),
  }
}

function normalizeSpell(document, filePath) {
  const pack = packNameFor(filePath)
  const system = document.system || {}
  const traits = system.traits || {}
  const publication = system.publication || {}
  const ritual = ritualFor(system)

  return {
    id: `pf2e:${pack}:${slugFor(filePath)}`,
    sourcePack: pack,
    sourceId: stringValue(document._id),
    name: stringValue(document.name, slugFor(filePath)),
    category: ritual ? 'ritual' : 'spell',
    rank: numberValue(system.level?.value, 0),
    rarity: stringValue(traits.rarity, 'common'),
    traditions: array(traits.traditions).map(String),
    traits: array(traits.value).map(String),
    castingTime: stringValue(system.time?.value) || undefined,
    cost: stringValue(system.cost?.value) || undefined,
    range: stringValue(system.range?.value) || undefined,
    target: stringValue(system.target?.value) || undefined,
    area: formatArea(system.area),
    duration: stringValue(system.duration?.value) || undefined,
    defense: defenseFor(system),
    requirements: stringValue(system.requirements) || undefined,
    description: cleanText(system.description?.value) || undefined,
    heightening: formatHeightening(system.heightening),
    ...(ritual ? { ritual } : {}),
    publicationTitle: stringValue(publication.title) || undefined,
    remaster: Boolean(publication.remaster),
    license: stringValue(publication.license) || undefined,
  }
}

const spells = []

for (const packName of spellPacks) {
  const packDir = path.join(packsRoot, packName)
  for (const filePath of walkJsonFiles(packDir)) {
    const document = readDocument(filePath)
    if (Array.isArray(document)) continue
    if (document?.type !== 'spell') continue
    spells.push(normalizeSpell(document, filePath))
  }
}

spells.sort((left, right) => left.rank - right.rank || left.name.localeCompare(right.name) || left.id.localeCompare(right.id))

const byCategory = spells.reduce((acc, spell) => {
  acc[spell.category] = (acc[spell.category] || 0) + 1
  return acc
}, {})

const byRank = spells.reduce((acc, spell) => {
  acc[spell.rank] = (acc[spell.rank] || 0) + 1
  return acc
}, {})

const content = `// @ts-nocheck
import type { Pathfinder2eSpellData } from './models'

export const PATHFINDER_2E_SPELL_DATA: Pathfinder2eSpellData[] = ${JSON.stringify(spells, null, 2)}

export const PATHFINDER_2E_SPELL_SOURCE_SUMMARY = {
  source: 'pf2e-master/packs',
  packs: ${JSON.stringify(spellPacks)},
  totalSpells: ${spells.length},
  byCategory: ${JSON.stringify(byCategory, null, 2)},
  byRank: ${JSON.stringify(byRank, null, 2)},
} as const
`

fs.writeFileSync(outputPath, content)
console.log(`Generated ${spells.length} spells at ${path.relative(process.cwd(), outputPath)}`)
console.log(byCategory)
console.log(byRank)
