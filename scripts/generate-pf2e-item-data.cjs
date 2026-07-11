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

function normalizeToken(value) {
  if (typeof value !== 'string') return ''

  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
}

const wornPlacementByToken = new Map([
  ['amulet', 'neck'],
  ['anklets', 'feet'],
  ['armbands', 'hands'],
  ['backpack', 'back'],
  ['belt', 'waist'],
  ['boots', 'feet'],
  ['bracelet', 'hands'],
  ['bracers', 'hands'],
  ['cape', 'shoulders'],
  ['cap', 'head'],
  ['circlet', 'head'],
  ['cloak', 'shoulders'],
  ['clothing', 'torso'],
  ['collar', 'neck'],
  ['crown', 'head'],
  ['epaulet', 'shoulders'],
  ['eyeglasses', 'eyes'],
  ['eyepiece', 'eyes'],
  ['footwear', 'feet'],
  ['garment', 'torso'],
  ['gloves', 'hands'],
  ['headwear', 'head'],
  ['horseshoes', 'feet'],
  ['mask', 'eyes'],
  ['necklace', 'neck'],
  ['ring', 'ring'],
  ['saddle', 'back'],
  ['sandals', 'feet'],
  ['sandles', 'feet'],
  ['shoes', 'feet'],
  ['underarmor', 'torso'],
])

function normalizeUsage(value) {
  const raw = stringValue(value) || null
  const normalized = normalizeToken(value)
  const warnings = []

  if (!normalized) return { raw, normalized, mode: 'none', hands: 0, placement: null, warnings }
  if (normalized === 'ammo' || normalized === 'ammunition') return { raw, normalized, mode: 'ammunition', hands: 0, placement: null, warnings }

  if (isAttachmentUsage(normalized)) return { raw, normalized, mode: 'affixed', hands: 0, placement: null, warnings }

  if (normalized.startsWith('held')) {
    const hands = normalized.includes('twohands') || normalized.includes('2hands') ? 2 : 1
    return { raw, normalized, mode: 'held', hands, placement: null, warnings }
  }

  if (normalized.startsWith('worn')) {
    const placementToken = normalized.slice('worn'.length)
    const placement = wornPlacementByToken.get(placementToken) ?? null
    if (!placement) warnings.push(`UNKNOWN_WORN_PLACEMENT:${raw ?? normalized}`)
    return { raw, normalized, mode: 'worn', hands: 0, placement, warnings }
  }

  if (normalized.startsWith('tattooed')) return { raw, normalized, mode: 'worn', hands: 0, placement: 'other', warnings }
  if (normalized.startsWith('carried')) return { raw, normalized, mode: 'stowed', hands: 0, placement: null, warnings }
  if (normalized.startsWith('stowed')) return { raw, normalized, mode: 'stowed', hands: 0, placement: null, warnings }
  if (normalized.startsWith('consumed')) return { raw, normalized, mode: 'consumed', hands: 0, placement: null, warnings }

  warnings.push(`UNKNOWN_USAGE:${raw ?? normalized}`)
  return { raw, normalized, mode: 'none', hands: 0, placement: null, warnings }
}

function isAttachmentUsage(normalizedUsage) {
  return (
    normalizedUsage.startsWith('affixed') ||
    normalizedUsage.startsWith('etched') ||
    normalizedUsage.startsWith('attached') ||
    normalizedUsage.startsWith('applied') ||
    normalizedUsage.startsWith('bonded') ||
    normalizedUsage.includes('attached') ||
    normalizedUsage.includes('applied') ||
    normalizedUsage.startsWith('sewn') ||
    normalizedUsage.startsWith('mounted')
  )
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

function equipmentOption(key, label, resourceUsage, metadata) {
  return {
    key,
    label,
    resourceUsage,
    ...(metadata ? { metadata } : {}),
  }
}

function heldOptions(hands) {
  if (hands === 2) {
    return [
      equipmentOption('held-two-hands', 'Duas maos', [
        { resource: 'pf2e:hand:main', amount: 1, exclusive: true },
        { resource: 'pf2e:hand:off', amount: 1, exclusive: true },
      ]),
    ]
  }

  return [
    equipmentOption('held-main-hand', 'Mao principal', [{ resource: 'pf2e:hand:main', amount: 1, exclusive: true }]),
    equipmentOption('held-off-hand', 'Mao secundaria', [{ resource: 'pf2e:hand:off', amount: 1, exclusive: true }]),
  ]
}

function wornOption(placement) {
  const labelByPlacement = {
    armor: 'Armadura',
    back: 'Costas',
    eyes: 'Olhos',
    feet: 'Pes',
    hands: 'Maos',
    head: 'Cabeca',
    neck: 'Pescoco',
    other: 'Corpo',
    ring: 'Anel',
    shoulders: 'Ombros',
    torso: 'Torso',
    waist: 'Cintura',
  }

  return equipmentOption(`worn-${placement}`, labelByPlacement[placement] ?? placement, [
    { resource: `pf2e:body:${placement}`, amount: 1, exclusive: true },
  ])
}

function shieldOptions() {
  return [
    equipmentOption('shield', 'Escudo', [
      { resource: 'pf2e:shield', amount: 1, exclusive: true },
      { resource: 'pf2e:hand:off', amount: 1, exclusive: true },
    ]),
  ]
}

function armorOptions() {
  return [equipmentOption('worn-armor', 'Armadura', [{ resource: 'pf2e:armor', amount: 1, exclusive: true }])]
}

function ammunitionKindFor(stackGroup) {
  const normalized = normalizeToken(stackGroup)
  if (normalized === 'arrows') return 'arrow'
  if (normalized === 'bolts') return 'bolt'
  if (normalized === 'slingbullets' || normalized === 'woodentaws') return 'sling-bullet'
  if (normalized === 'rounds10' || normalized === 'rounds5') return 'firearm-round'
  if (normalized === 'blowgundarts') return 'dart'
  return 'other'
}

function weaponAmmunitionFor(group) {
  if (group === 'bow') return { required: true, acceptedKinds: ['arrow'], quantityPerAttack: 1 }
  if (group === 'crossbow') return { required: true, acceptedKinds: ['bolt'], quantityPerAttack: 1 }
  if (group === 'sling') return { required: true, acceptedKinds: ['sling-bullet'], quantityPerAttack: 1 }
  if (group === 'firearm') return { required: true, acceptedKinds: ['firearm-round'], quantityPerAttack: 1 }
  if (group === 'dart') return { required: false, acceptedKinds: ['dart'], quantityPerAttack: 1 }
  return undefined
}

function classifyItem(document, usage, systemData) {
  const itemType = stringValue(document.type)
  const category = normalizeToken(systemData.category)
  const group = stringValue(systemData.group) || undefined
  const warnings = [...usage.warnings]

  if (itemType === 'armor') {
    return {
      classification: { role: 'armor', subtype: systemData.category ?? null },
      usage: { raw: usage.raw, mode: 'worn', hands: 0, placement: 'armor' },
      equipment: { equippable: true, options: armorOptions() },
      armor: {
        ...(systemData.category ? { category: systemData.category } : {}),
        ...(systemData.group ? { group: systemData.group } : {}),
        ...(typeof systemData.ac === 'number' ? { ac: systemData.ac } : {}),
        ...(typeof systemData.dexCap === 'number' ? { dexCap: systemData.dexCap } : {}),
        ...(typeof systemData.strengthRequirement === 'number' ? { strengthRequirement: systemData.strengthRequirement } : {}),
        ...(typeof systemData.checkPenalty === 'number' ? { checkPenalty: systemData.checkPenalty } : {}),
        ...(typeof systemData.speedPenaltyFeet === 'number' ? { speedPenaltyFeet: systemData.speedPenaltyFeet } : {}),
      },
      warnings,
    }
  }

  if (itemType === 'shield') {
    return {
      classification: { role: 'shield', subtype: systemData.group ?? null },
      usage: { raw: usage.raw, mode: 'held', hands: 1, placement: null },
      equipment: { equippable: true, options: shieldOptions() },
      shield: {
        ...(typeof systemData.ac === 'number' ? { ac: systemData.ac } : {}),
        ...(typeof systemData.speedPenaltyFeet === 'number' ? { speedPenaltyFeet: systemData.speedPenaltyFeet } : {}),
      },
      warnings,
    }
  }

  if (itemType === 'weapon') {
    const hands = usage.hands === 2 ? 2 : 1
    return {
      classification: { role: 'weapon', subtype: group ?? systemData.category ?? null },
      usage: { raw: usage.raw, mode: 'held', hands, placement: null },
      equipment: { equippable: true, options: heldOptions(hands) },
      weapon: {
        ...(systemData.group ? { group: systemData.group } : {}),
        ...(systemData.category ? { category: systemData.category } : {}),
        ...(systemData.damage ? { damage: systemData.damage } : {}),
        hands,
        ...(weaponAmmunitionFor(group) ? { ammunition: weaponAmmunitionFor(group) } : {}),
      },
      warnings,
    }
  }

  if (itemType === 'consumable' && category === 'ammo') {
    const kind = ammunitionKindFor(systemData.stackGroup)
    return {
      classification: { role: 'ammunition', subtype: kind },
      usage: { raw: usage.raw, mode: 'ammunition', hands: 0, placement: null },
      equipment: { equippable: false, options: [] },
      consumable: { category: systemData.category ?? 'ammo' },
      ammunition: { kind },
      warnings,
    }
  }

  if (usage.mode === 'affixed' || ['talisman', 'gadget'].includes(category)) {
    return {
      classification: { role: 'attachment', subtype: systemData.category ?? null },
      usage: { raw: usage.raw, mode: 'affixed', hands: 0, placement: null },
      equipment: { equippable: false, options: [] },
      ...(itemType === 'consumable' && systemData.category ? { consumable: { category: systemData.category } } : {}),
      warnings,
    }
  }

  if (itemType === 'consumable') {
    return {
      classification: { role: 'consumable', subtype: systemData.category ?? null },
      usage: { raw: usage.raw, mode: usage.mode === 'none' ? 'consumed' : usage.mode, hands: 0, placement: null },
      equipment: { equippable: false, options: [] },
      ...(systemData.category ? { consumable: { category: systemData.category } } : {}),
      warnings,
    }
  }

  if (usage.mode === 'worn') {
    const equippable = Boolean(usage.placement)
    return {
      classification: { role: 'wearable', subtype: usage.placement },
      usage: { raw: usage.raw, mode: 'worn', hands: 0, placement: usage.placement },
      equipment: { equippable, options: usage.placement ? [wornOption(usage.placement)] : [] },
      warnings,
    }
  }

  if (usage.mode === 'held') {
    const hands = usage.hands === 2 ? 2 : 1
    const role = itemType === 'consumable' ? 'consumable' : 'held-equipment'
    return {
      classification: { role, subtype: systemData.category ?? null },
      usage: { raw: usage.raw, mode: 'held', hands, placement: null },
      equipment: { equippable: true, options: heldOptions(hands) },
      ...(itemType === 'consumable' && systemData.category ? { consumable: { category: systemData.category } } : {}),
      warnings,
    }
  }

  if (itemType === 'backpack') {
    return {
      classification: { role: 'container', subtype: null },
      usage: { raw: usage.raw, mode: 'stowed', hands: 0, placement: null },
      equipment: { equippable: false, options: [] },
      warnings,
    }
  }

  if (itemType === 'treasure') {
    return {
      classification: { role: 'treasure', subtype: null },
      usage: { raw: usage.raw, mode: 'stowed', hands: 0, placement: null },
      equipment: { equippable: false, options: [] },
      warnings,
    }
  }

  if (itemType === 'kit') {
    return {
      classification: { role: 'kit', subtype: null },
      usage: { raw: usage.raw, mode: 'stowed', hands: 0, placement: null },
      equipment: { equippable: false, options: [] },
      warnings,
    }
  }

  warnings.push(`UNCLASSIFIED_ITEM:${itemType}`)
  return {
    classification: { role: 'other', subtype: null },
    usage: { raw: usage.raw, mode: usage.mode, hands: usage.hands, placement: usage.placement },
    equipment: { equippable: false, options: [] },
    warnings,
  }
}

function normalizeItem(document, filePath) {
  const pack = packNameFor(filePath)
  const system = document.system || {}
  const traits = system.traits || {}
  const publication = system.publication || {}
  const rawUsage = stringValue(system.usage?.value) || undefined
  const systemData = {
    usage: rawUsage,
    group: stringValue(system.group) || undefined,
    category: stringValue(system.category) || undefined,
    stackGroup: stringValue(system.stackGroup) || undefined,
    damage: damageFor(document),
    ac: system.acBonus !== undefined ? numberValue(system.acBonus) : undefined,
    dexCap: system.dexCap !== undefined ? numberValue(system.dexCap) : undefined,
    strengthRequirement: system.strength !== undefined ? numberValue(system.strength) : undefined,
    checkPenalty: system.checkPenalty !== undefined ? numberValue(system.checkPenalty) : undefined,
    speedPenaltyFeet: system.speedPenalty !== undefined ? numberValue(system.speedPenalty) : undefined,
    description: cleanText(system.description?.value) || undefined,
    publicationTitle: stringValue(publication.title) || undefined,
    remaster: Boolean(publication.remaster),
    license: stringValue(publication.license) || undefined,
  }
  const usage = normalizeUsage(rawUsage)
  const normalized = classifyItem(document, usage, systemData)

  return {
    schemaVersion: 2,
    id: `pf2e:${pack}:${slugFor(filePath)}`,
    sourcePack: pack,
    sourceId: stringValue(document._id),
    name: stringValue(document.name, slugFor(filePath)),
    itemType: stringValue(document.type),
    classification: normalized.classification,
    rarity: stringValue(traits.rarity, 'common'),
    level: numberValue(system.level?.value, 0),
    traits: array(traits.value).map(String),
    bulk: formatBulk(system.bulk?.value),
    priceMinorUnit: priceToMinorUnit(system.price),
    stack: { stackable: isStackableFor(document) },
    usage: normalized.usage,
    equipment: normalized.equipment,
    ...(normalized.consumable ? { consumable: normalized.consumable } : {}),
    ...(normalized.ammunition ? { ammunition: normalized.ammunition } : {}),
    ...(normalized.weapon ? { weapon: normalized.weapon } : {}),
    ...(normalized.armor ? { armor: normalized.armor } : {}),
    ...(normalized.shield ? { shield: normalized.shield } : {}),
    systemData,
    ...(normalized.warnings.length > 0 ? { normalizationWarnings: normalized.warnings } : {}),
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

const normalization = items.reduce(
  (acc, item) => {
    acc.byRole[item.classification.role] = (acc.byRole[item.classification.role] || 0) + 1
    if (item.normalizationWarnings?.length) {
      acc.warningItems += 1
      for (const warning of item.normalizationWarnings) {
        acc.warnings[warning] = (acc.warnings[warning] || 0) + 1
      }
    }
    return acc
  },
  { byRole: {}, warningItems: 0, warnings: {} },
)

const content = `// @ts-nocheck
import type { Pathfinder2eCompendiumItem } from './models'

export const PATHFINDER_2E_ITEM_DATA: Pathfinder2eCompendiumItem[] = ${JSON.stringify(items, null, 2)}

export const PATHFINDER_2E_ITEM_SOURCE_SUMMARY = {
  source: 'pf2e-master/packs',
  packs: ${JSON.stringify(itemPacks)},
  totalItems: ${items.length},
  byType: ${JSON.stringify(byType, null, 2)},
  normalization: ${JSON.stringify(normalization, null, 2)},
} as const
`

fs.writeFileSync(outputPath, content)
console.log(`Generated ${items.length} items at ${path.relative(process.cwd(), outputPath)}`)
console.log(byType)
console.log(normalization)
