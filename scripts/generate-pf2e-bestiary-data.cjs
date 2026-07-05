const fs = require('node:fs')
const path = require('node:path')

const packsRoot = path.join(process.cwd(), 'pf2e-master', 'packs')
const outputPath = path.join(process.cwd(), 'packages', 'game-system-pathfinder-2e', 'src', 'server', 'bestiary', 'data.generated.ts')

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

function cleanText(value, maxLength = 360) {
  const text = stringValue(value)
    .replace(/@UUID\[[^\]]+\]\{([^}]+)\}/g, '$1')
    .replace(/@UUID\[[^\]]+\]/g, '')
    .replace(/@Check\[([^\]|]+)[^\]]*\]/g, '$1 check')
    .replace(/@Damage\[([^\]]+)\](?:\{([^}]+)\})?/g, (_, roll, label) => label || roll)
    .replace(/@Localize\[[^\]]+\]/g, '')
    .replace(/<hr\s*\/?>/gi, '. ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trim()}...`
}

function fallbackInitials(name) {
  const parts = stringValue(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)

  return (parts.map((part) => part[0]).join('') || '?').toLocaleUpperCase()
}

function tokenFor(document, borderColor) {
  const image = stringValue(document.img)
  const imageUrl = image && !image.includes('/default-icons/') && /^https?:\/\//.test(image) ? image : null

  return {
    imageUrl,
    fallbackInitials: fallbackInitials(document.name),
    borderColor,
  }
}

function publicationFor(document, fallbackTitle = '') {
  const detailsPublication = document.system?.details?.publication
  const itemPublication = document.system?.publication
  const publication = detailsPublication || itemPublication || {}

  return {
    title: stringValue(publication.title, fallbackTitle),
    license: stringValue(publication.license, 'ORC'),
    remaster: Boolean(publication.remaster),
  }
}

function formatSenses(senses) {
  return array(senses).map((sense) => {
    if (typeof sense === 'string') return sense
    const type = stringValue(sense?.type)
    const range = numberValue(sense?.range, 0)
    const acuity = stringValue(sense?.acuity)
    return [acuity, type, range > 0 ? `${range} feet` : ''].filter(Boolean).join(' ')
  }).filter(Boolean)
}

function formatOtherSpeeds(speeds) {
  return array(speeds).map((speed) => {
    if (typeof speed === 'string') return speed
    const type = stringValue(speed?.type, 'speed')
    const value = numberValue(speed?.value, 0)
    return value > 0 ? `${type} ${value} ft` : type
  }).filter(Boolean)
}

function formatDefenseList(values) {
  return array(values).map((entry) => {
    if (typeof entry === 'string') return entry
    const type = stringValue(entry?.type)
    const value = numberValue(entry?.value, 0)
    return [type, value > 0 ? String(value) : ''].filter(Boolean).join(' ')
  }).filter(Boolean)
}

function damageFor(item) {
  const rolls = item.system?.damageRolls
  if (!rolls || typeof rolls !== 'object') return ''

  return Object.values(rolls)
    .map((roll) => {
      const damage = stringValue(roll?.damage)
      const type = stringValue(roll?.damageType)
      return [damage, type].filter(Boolean).join(' ')
    })
    .filter(Boolean)
    .join(', ')
}

function actionKind(item) {
  const value = item.system?.actionType?.value
  if (value === 'reaction') return 'reaction'
  if (value === 'free') return 'free'
  if (value === 'passive') return 'passive'
  return value === 'action' ? 'action' : 'passive'
}

function normalizeNpc(document, filePath) {
  const pack = packNameFor(filePath)
  const details = document.system?.details || {}
  const attributes = document.system?.attributes || {}
  const traits = document.system?.traits || {}
  const publication = publicationFor(document, pack)
  const actions = array(document.items).filter((item) => item?.type === 'action')
  const attacks = array(document.items).filter((item) => item?.type === 'melee')

  return {
    id: `pf2e:${pack}:${slugFor(filePath)}`,
    system: 'PATHFINDER_2E',
    category: 'npc',
    sourcePack: pack,
    sourceId: stringValue(document._id),
    name: stringValue(document.name, slugFor(filePath)),
    level: numberValue(details.level?.value),
    rarity: stringValue(traits.rarity, 'common'),
    size: stringValue(traits.size?.value, 'med'),
    traits: array(traits.value).map(String),
    armorClass: numberValue(attributes.ac?.value),
    hitPoints: numberValue(attributes.hp?.max, numberValue(attributes.hp?.value)),
    speed: numberValue(attributes.speed?.value),
    publicationTitle: publication.title,
    remaster: publication.remaster,
    license: publication.license,
    token: tokenFor(document, '#22c55e'),
    sheet: {
      perception: {
        modifier: numberValue(document.system?.perception?.mod),
        senses: formatSenses(document.system?.perception?.senses),
      },
      saves: {
        fortitude: numberValue(document.system?.saves?.fortitude?.value),
        reflex: numberValue(document.system?.saves?.reflex?.value),
        will: numberValue(document.system?.saves?.will?.value),
        detail: cleanText(attributes.allSaves?.value, 160) || undefined,
      },
      abilities: {
        str: numberValue(document.system?.abilities?.str?.mod),
        dex: numberValue(document.system?.abilities?.dex?.mod),
        con: numberValue(document.system?.abilities?.con?.mod),
        int: numberValue(document.system?.abilities?.int?.mod),
        wis: numberValue(document.system?.abilities?.wis?.mod),
        cha: numberValue(document.system?.abilities?.cha?.mod),
      },
      skills: Object.fromEntries(
        Object.entries(document.system?.skills || {})
          .map(([key, value]) => [key, numberValue(value?.base)])
          .filter(([, value]) => value !== 0),
      ),
      movement: {
        land: numberValue(attributes.speed?.value),
        other: formatOtherSpeeds(attributes.speed?.otherSpeeds),
      },
      languages: {
        values: array(details.languages?.value).map(String),
        detail: cleanText(details.languages?.details, 160) || undefined,
      },
      defenses: {
        immunities: formatDefenseList(attributes.immunities),
        resistances: formatDefenseList(attributes.resistances),
        weaknesses: formatDefenseList(attributes.weaknesses),
      },
      attacks: attacks.map((item) => ({
        name: stringValue(item.name),
        bonus: numberValue(item.system?.bonus?.value),
        damage: damageFor(item),
        traits: array(item.system?.traits?.value).map(String),
      })),
      actions: actions.map((item) => ({
        name: stringValue(item.name),
        kind: actionKind(item),
        traits: array(item.system?.traits?.value).map(String),
        detail: cleanText(item.system?.description?.value) || undefined,
      })),
      notes: cleanText(details.publicNotes, 520) || cleanText(details.blurb, 240) || undefined,
    },
  }
}

function normalizeHazard(document, filePath) {
  const pack = packNameFor(filePath)
  const details = document.system?.details || {}
  const attributes = document.system?.attributes || {}
  const traits = document.system?.traits || {}
  const publication = publicationFor(document, pack)
  const actions = array(document.items).filter((item) => item?.type === 'action')

  return {
    id: `pf2e:${pack}:${slugFor(filePath)}`,
    system: 'PATHFINDER_2E',
    category: 'hazard',
    sourcePack: pack,
    sourceId: stringValue(document._id),
    name: stringValue(document.name, slugFor(filePath)),
    level: numberValue(details.level?.value),
    rarity: stringValue(traits.rarity, 'common'),
    traits: array(traits.value).map(String),
    isComplex: Boolean(details.isComplex),
    publicationTitle: publication.title,
    remaster: publication.remaster,
    license: publication.license,
    token: tokenFor(document, '#f97316'),
    sheet: {
      defenses: {
        armorClass: numberValue(attributes.ac?.value),
        hardness: numberValue(attributes.hardness),
        hitPoints: numberValue(attributes.hp?.max, numberValue(attributes.hp?.value)),
        stealth: numberValue(attributes.stealth?.value),
        stealthDetail: cleanText(attributes.stealth?.details, 160) || undefined,
        fortitude: numberValue(document.system?.saves?.fortitude?.value),
        reflex: numberValue(document.system?.saves?.reflex?.value),
        will: numberValue(document.system?.saves?.will?.value),
      },
      disable: cleanText(details.disable, 420) || undefined,
      routine: cleanText(details.routine, 420) || undefined,
      reset: cleanText(details.reset, 260) || undefined,
      description: cleanText(details.description, 420) || undefined,
      actions: actions.map((item) => ({
        name: stringValue(item.name),
        kind: actionKind(item),
        traits: array(item.system?.traits?.value).map(String),
        detail: cleanText(item.system?.description?.value) || undefined,
      })),
    },
  }
}

const creatures = []
const hazards = []

for (const filePath of walkJsonFiles(packsRoot)) {
  const document = readDocument(filePath)
  if (Array.isArray(document)) continue
  if (document?.type === 'npc') creatures.push(normalizeNpc(document, filePath))
  if (document?.type === 'hazard') hazards.push(normalizeHazard(document, filePath))
}

creatures.sort((left, right) => left.level - right.level || left.name.localeCompare(right.name) || left.id.localeCompare(right.id))
hazards.sort((left, right) => left.level - right.level || left.name.localeCompare(right.name) || left.id.localeCompare(right.id))

const content = `// @ts-nocheck
import type { Pathfinder2eBestiaryCreatureData, Pathfinder2eBestiaryHazardData } from './index'

export const PATHFINDER_2E_BESTIARY_DATA: Pathfinder2eBestiaryCreatureData[] = ${JSON.stringify(creatures, null, 2)}

export const PATHFINDER_2E_BESTIARY_HAZARD_DATA: Pathfinder2eBestiaryHazardData[] = ${JSON.stringify(hazards, null, 2)}

export const PATHFINDER_2E_BESTIARY_SOURCE_SUMMARY = {
  source: 'pf2e-master/packs',
  documentTypes: ['npc', 'hazard'],
  totalCreatures: ${creatures.length},
  totalHazards: ${hazards.length},
  totalEntries: ${creatures.length + hazards.length},
} as const
`

fs.writeFileSync(outputPath, content)
console.log(`Generated ${creatures.length} NPCs and ${hazards.length} hazards at ${path.relative(process.cwd(), outputPath)}`)
