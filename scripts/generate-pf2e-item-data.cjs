const fs = require('node:fs')
const path = require('node:path')

const packsRoot = path.join(process.cwd(), 'pf2e-master', 'packs')
const itemPacks = ['equipment']
const knownItemTypes = new Set(['weapon', 'armor', 'equipment', 'consumable', 'treasure', 'backpack', 'shield', 'kit'])
const outputPath = path.join(process.cwd(), 'packages', 'game-system-pathfinder-2e', 'src', 'server', 'items', 'data.generated.ts')

const PF2E_CURRENCY = { cp: 1, sp: 10, gp: 100, pp: 1000 }

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

function cleanText(value, maxLength = 600) {
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

function formatBulk(value) {
  const numeric = numberValue(value, 0)
  if (numeric <= 0) return '-'
  if (numeric < 1) return 'L'
  return String(Math.round(numeric))
}

function priceToMinorUnit(price) {
  const value = price?.value || {}
  return (
    numberValue(value.pp) * PF2E_CURRENCY.pp +
    numberValue(value.gp) * PF2E_CURRENCY.gp +
    numberValue(value.sp) * PF2E_CURRENCY.sp +
    numberValue(value.cp) * PF2E_CURRENCY.cp
  )
}

function equipSlotFor(document) {
  const type = document.type
  const usage = stringValue(document.system?.usage?.value)

  if (type === 'shield') return 'shield'
  if (type === 'armor') return 'armor'
  if (type === 'weapon') return usage.includes('two-hands') ? 'two_hands' : 'main_hand'
  if (type === 'backpack') return 'backpack'
  if (type === 'consumable') return 'consumable'
  if (usage.startsWith('worn')) return 'worn'
  if (usage.startsWith('held')) return 'held'
  return 'other'
}

function isStackableFor(document) {
  return document.type === 'consumable' || document.type === 'treasure'
}

function damageFor(document) {
  const damage = document.system?.damage
  if (!damage) return undefined
  const dice = numberValue(damage.dice, 0)
  const die = stringValue(damage.die)
  const damageType = stringValue(damage.damageType)
  if (!dice || !die) return undefined
  return [`${dice}${die}`, damageType].filter(Boolean).join(' ')
}

function normalizeItem(document, filePath) {
  const pack = packNameFor(filePath)
  const system = document.system || {}
  const traits = system.traits || {}
  const publication = system.publication || {}

  return {
    id: `pf2e:${pack}:${slugFor(filePath)}`,
    sourcePack: pack,
    sourceId: stringValue(document._id),
    name: stringValue(document.name, slugFor(filePath)),
    itemType: stringValue(document.type),
    rarity: stringValue(traits.rarity, 'common'),
    level: numberValue(system.level?.value, 0),
    traits: array(traits.value).map(String),
    bulk: formatBulk(system.bulk?.value),
    priceMinorUnit: priceToMinorUnit(system.price),
    isStackable: isStackableFor(document),
    equipSlot: equipSlotFor(document),
    systemData: {
      usage: stringValue(system.usage?.value) || undefined,
      group: stringValue(system.group) || undefined,
      category: stringValue(system.category) || undefined,
      damage: damageFor(document),
      ac: system.acBonus !== undefined ? numberValue(system.acBonus) : undefined,
      description: cleanText(system.description?.value) || undefined,
      publicationTitle: stringValue(publication.title) || undefined,
      remaster: Boolean(publication.remaster),
      license: stringValue(publication.license) || undefined,
    },
  }
}

const items = []

for (const packName of itemPacks) {
  const packDir = path.join(packsRoot, packName)
  for (const filePath of walkJsonFiles(packDir)) {
    const document = readDocument(filePath)
    if (Array.isArray(document)) continue
    if (!knownItemTypes.has(document?.type)) continue
    items.push(normalizeItem(document, filePath))
  }
}

items.sort((left, right) => left.itemType.localeCompare(right.itemType) || left.name.localeCompare(right.name) || left.id.localeCompare(right.id))

const byType = items.reduce((acc, item) => {
  acc[item.itemType] = (acc[item.itemType] || 0) + 1
  return acc
}, {})

const content = `// @ts-nocheck
import type { Pathfinder2eCompendiumItem } from './models'

export const PATHFINDER_2E_ITEM_DATA: Pathfinder2eCompendiumItem[] = ${JSON.stringify(items, null, 2)}

export const PATHFINDER_2E_ITEM_SOURCE_SUMMARY = {
  source: 'pf2e-master/packs',
  packs: ${JSON.stringify(itemPacks)},
  totalItems: ${items.length},
  byType: ${JSON.stringify(byType, null, 2)},
} as const
`

fs.writeFileSync(outputPath, content)
console.log(`Generated ${items.length} items at ${path.relative(process.cwd(), outputPath)}`)
console.log(byType)
