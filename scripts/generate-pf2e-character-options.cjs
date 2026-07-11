const childProcess = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const packsRoot = path.join(process.cwd(), 'pf2e-master', 'packs')
const outputRoot = path.join(process.cwd(), 'packages', 'game-system-pathfinder-2e', 'src', 'server', 'character-options', 'data')

const PACKS = {
  class: 'classes',
  ancestry: 'ancestries',
  heritage: 'heritages',
  background: 'backgrounds',
}

const ATTRIBUTE_SLUGS = ['str', 'dex', 'con', 'int', 'wis', 'cha']

function assertPackDirs() {
  for (const packName of Object.values(PACKS)) {
    const dir = path.join(packsRoot, packName)
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
      throw new Error(`Missing required PF2e pack directory: ${path.relative(process.cwd(), dir)}`)
    }
  }
}

function sourceRevision() {
  for (const command of ['git', 'git.cmd']) {
    try {
      return childProcess.execFileSync(command, ['-C', path.join(process.cwd(), 'pf2e-master'), 'rev-parse', 'HEAD'], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim()
    } catch {
      // Try the next git executable name; Windows installations often expose git.cmd to Node.
    }
  }

  return null
}

function walkJsonFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return walkJsonFiles(fullPath)
    if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== '_folders.json') return [fullPath]
    return []
  })
}

function readDocument(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function relativeSourcePath(filePath) {
  return path.relative(process.cwd(), filePath).replace(/\\/g, '/')
}

function sourcePackFor(filePath) {
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

function nullableString(value) {
  return typeof value === 'string' && value.trim() ? value : null
}

function numberValue(value, fallback = 0) {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function booleanValue(value, fallback = false) {
  return typeof value === 'boolean' ? value : fallback
}

function objectValue(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {}
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right))
}

function cleanText(value) {
  return stringValue(value)
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
}

function publicationFor(document) {
  const publication = objectValue(document.system?.publication ?? document.system?.details?.publication)
  return {
    title: nullableString(publication.title),
    license: nullableString(publication.license),
    remaster: booleanValue(publication.remaster),
  }
}

function rarityFor(document) {
  return stringValue(document.system?.traits?.rarity, 'common')
}

function traitsFor(document) {
  return array(document.system?.traits?.value).map((trait) => stringValue(trait)).filter(Boolean)
}

function rulesFor(document) {
  return array(document.system?.rules).map((rule) => ({
    key: stringValue(rule?.key, 'unknown'),
    data: structuredClone(rule),
  }))
}

function parseCompendiumUuid(uuid) {
  const match = stringValue(uuid).match(/^Compendium\.([^.]+)\.([^.]+)\.([^.]+)\.(.+)$/)
  if (!match) {
    return {
      system: null,
      pack: null,
      documentType: null,
      documentIdOrName: null,
    }
  }

  return {
    system: match[1],
    pack: match[2],
    documentType: match[3],
    documentIdOrName: match[4],
  }
}

function grantedItemsFor(document) {
  return Object.values(objectValue(document.system?.items)).map((item) => ({
    name: stringValue(item.name),
    image: nullableString(item.img),
    level: numberValue(item.level),
    uuid: stringValue(item.uuid),
    parsedReference: parseCompendiumUuid(item.uuid),
  }))
}

function baseOption(kind, document, filePath) {
  const slug = slugFor(filePath)
  const sourcePack = sourcePackFor(filePath)
  const sourcePath = relativeSourcePath(filePath)
  const sourceId = stringValue(document._id)
  const warnings = []

  if (!sourceId) warnings.push('missing-source-id')
  if (!stringValue(document.name)) warnings.push('missing-name')
  if (document.type !== kind) warnings.push(`unexpected-type:${stringValue(document.type, 'missing')}`)

  return {
    schemaVersion: 1,
    id: `pf2e:${kind}:${slug}`,
    kind,
    slug,
    name: stringValue(document.name, slug),
    description: {
      sourceHtml: stringValue(document.system?.description?.value),
      plainText: cleanText(document.system?.description?.value),
    },
    rarity: rarityFor(document),
    traits: traitsFor(document),
    rules: rulesFor(document),
    grantedItems: grantedItemsFor(document),
    source: {
      sourcePack,
      sourceId,
      sourcePath,
      slug,
      image: nullableString(document.img),
      publication: publicationFor(document),
    },
    normalizationWarnings: warnings,
  }
}

function numericArray(value) {
  return array(value?.value)
    .map((entry) => numberValue(entry, Number.NaN))
    .filter((entry) => Number.isInteger(entry))
    .sort((left, right) => left - right)
}

function attributeSlugs(value) {
  return array(value).map((entry) => stringValue(entry)).filter((entry) => ATTRIBUTE_SLUGS.includes(entry))
}

function attributeChoices(record) {
  return Object.entries(objectValue(record)).map(([key, choice]) => {
    const options = attributeSlugs(choice?.value)
    return {
      key,
      options,
      count: 1,
      free: ATTRIBUTE_SLUGS.every((slug) => options.includes(slug)),
    }
  })
}

function normalizeClass(document, filePath) {
  const base = baseOption('class', document, filePath)
  return {
    ...base,
    hitPointsPerLevel: numberValue(document.system?.hp),
    keyAbility: {
      options: attributeSlugs(document.system?.keyAbility?.value),
    },
    proficiencies: {
      perception: numberValue(document.system?.perception),
      savingThrows: {
        fortitude: numberValue(document.system?.savingThrows?.fortitude),
        reflex: numberValue(document.system?.savingThrows?.reflex),
        will: numberValue(document.system?.savingThrows?.will),
      },
      attacks: {
        simple: numberValue(document.system?.attacks?.simple),
        martial: numberValue(document.system?.attacks?.martial),
        advanced: numberValue(document.system?.attacks?.advanced),
        unarmed: numberValue(document.system?.attacks?.unarmed),
        other: {
          name: stringValue(document.system?.attacks?.other?.name),
          rank: numberValue(document.system?.attacks?.other?.rank),
        },
      },
      defenses: {
        unarmored: numberValue(document.system?.defenses?.unarmored),
        light: numberValue(document.system?.defenses?.light),
        medium: numberValue(document.system?.defenses?.medium),
        heavy: numberValue(document.system?.defenses?.heavy),
      },
      spellcasting: numberValue(document.system?.spellcasting),
    },
    trainedSkills: {
      fixed: array(document.system?.trainedSkills?.value).map((skill) => stringValue(skill)).filter(Boolean),
      additional: numberValue(document.system?.trainedSkills?.additional),
    },
    progression: {
      ancestryFeatLevels: numericArray(document.system?.ancestryFeatLevels),
      classFeatLevels: numericArray(document.system?.classFeatLevels),
      generalFeatLevels: numericArray(document.system?.generalFeatLevels),
      skillFeatLevels: numericArray(document.system?.skillFeatLevels),
      skillIncreaseLevels: numericArray(document.system?.skillIncreaseLevels),
    },
  }
}

function normalizeAncestry(document, filePath) {
  const base = baseOption('ancestry', document, filePath)
  return {
    ...base,
    hitPoints: numberValue(document.system?.hp),
    speedFeet: numberValue(document.system?.speed),
    size: stringValue(document.system?.size),
    hands: numberValue(document.system?.hands, 2),
    reachFeet: numberValue(document.system?.reach),
    vision: stringValue(document.system?.vision),
    languages: {
      granted: array(document.system?.languages?.value).map((language) => stringValue(language)).filter(Boolean),
      additional: {
        count: numberValue(document.system?.additionalLanguages?.count),
        options: array(document.system?.additionalLanguages?.value).map((language) => stringValue(language)).filter(Boolean),
        custom: nullableString(document.system?.additionalLanguages?.custom),
      },
    },
    attributes: {
      boosts: attributeChoices(document.system?.boosts),
      flaws: attributeChoices(document.system?.flaws),
      alternateBoosts: attributeSlugs(document.system?.alternateAncestryBoosts?.value),
    },
  }
}

function normalizeHeritage(document, filePath) {
  const base = baseOption('heritage', document, filePath)
  const ancestry = document.system?.ancestry ?? null
  const parsedReference = ancestry ? parseCompendiumUuid(ancestry.uuid) : null
  return {
    ...base,
    ancestry: ancestry
      ? {
          name: stringValue(ancestry.name),
          slug: stringValue(ancestry.slug),
          uuid: stringValue(ancestry.uuid),
          sourceId: parsedReference?.documentIdOrName ?? null,
        }
      : null,
    versatile: ancestry === null,
  }
}

function normalizeBackground(document, filePath) {
  const base = baseOption('background', document, filePath)
  return {
    ...base,
    attributes: {
      boosts: attributeChoices(document.system?.boosts),
    },
    trainedSkills: {
      skills: array(document.system?.trainedSkills?.value).map((skill) => stringValue(skill)).filter(Boolean),
      lore: array(document.system?.trainedSkills?.lore)
        .map((lore) => stringValue(lore))
        .filter(Boolean)
        .map((lore) => (lore.toLocaleLowerCase().endsWith(' lore') ? lore : `${lore} Lore`)),
    },
  }
}

function normalizePack(kind, normalize) {
  const packDir = path.join(packsRoot, PACKS[kind])
  return walkJsonFiles(packDir)
    .map((filePath) => normalize(readDocument(filePath), filePath))
    .sort((left, right) => left.name.localeCompare(right.name) || left.id.localeCompare(right.id))
}

function countBy(entries, keyFor) {
  return entries.reduce((acc, entry) => {
    const key = keyFor(entry)
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {})
}

function duplicatedValues(entries, keyFor) {
  const counts = countBy(entries, keyFor)
  return Object.entries(counts)
    .filter(([, count]) => count > 1)
    .map(([value, count]) => ({ value, count }))
    .sort((left, right) => left.value.localeCompare(right.value))
}

function summaryFor(allEntries, heritages, revision) {
  const ruleKeys = {}
  const warnings = {}
  let warningDocuments = 0

  for (const entry of allEntries) {
    if (entry.normalizationWarnings.length > 0) {
      warningDocuments += 1
      for (const warning of entry.normalizationWarnings) {
        warnings[warning] = (warnings[warning] || 0) + 1
      }
    }
    for (const rule of entry.rules) {
      ruleKeys[rule.key] = (ruleKeys[rule.key] || 0) + 1
    }
  }

  return {
    source: 'pf2e-master/packs',
    sourceRevision: revision,
    sourceRevisionUnavailableReason: revision ? null : 'pf2e-master has no readable standalone Git metadata in this workspace',
    counts: {
      classes: allEntries.filter((entry) => entry.kind === 'class').length,
      ancestries: allEntries.filter((entry) => entry.kind === 'ancestry').length,
      heritages: heritages.length,
      specificHeritages: heritages.filter((heritage) => !heritage.versatile).length,
      versatileHeritages: heritages.filter((heritage) => heritage.versatile).length,
      backgrounds: allEntries.filter((entry) => entry.kind === 'background').length,
    },
    rarity: countBy(allEntries, (entry) => entry.rarity),
    publications: countBy(allEntries, (entry) => entry.source.publication.title || 'unknown'),
    licenses: countBy(allEntries, (entry) => entry.source.publication.license || 'unknown'),
    ruleKeys,
    duplicates: {
      ids: duplicatedValues(allEntries, (entry) => entry.id),
      slugs: duplicatedValues(allEntries, (entry) => `${entry.kind}:${entry.slug}`),
    },
    unresolvedHeritageAncestryReferences: heritages
      .filter((heritage) => heritage.ancestry && !heritage.ancestry.sourceId)
      .map((heritage) => ({ heritageId: heritage.id, uuid: heritage.ancestry.uuid })),
    normalization: {
      warningDocuments,
      warnings,
    },
  }
}

function writeDataFile(fileName, typeName, constantName, data) {
  const outputPath = path.join(outputRoot, fileName)
  const content = `// @ts-nocheck
import type { ${typeName} } from '../models'

export const ${constantName}: ${typeName}[] = ${JSON.stringify(data, null, 2)}
`
  fs.writeFileSync(outputPath, content)
}

function writeSummary(summary) {
  const outputPath = path.join(outputRoot, 'summary.generated.ts')
  const content = `// @ts-nocheck
export const PATHFINDER_2E_CHARACTER_OPTIONS_SOURCE_SUMMARY = ${JSON.stringify(summary, null, 2)} as const
`
  fs.writeFileSync(outputPath, content)
}

assertPackDirs()
fs.mkdirSync(outputRoot, { recursive: true })

const revision = sourceRevision()
const classes = normalizePack('class', normalizeClass)
const ancestries = normalizePack('ancestry', normalizeAncestry)
const heritages = normalizePack('heritage', normalizeHeritage)
const backgrounds = normalizePack('background', normalizeBackground)
const allEntries = [...classes, ...ancestries, ...heritages, ...backgrounds]
const summary = summaryFor(allEntries, heritages, revision)

writeDataFile('classes.generated.ts', 'Pathfinder2eClassEntry', 'PATHFINDER_2E_CLASSES', classes)
writeDataFile('ancestries.generated.ts', 'Pathfinder2eAncestryEntry', 'PATHFINDER_2E_ANCESTRIES', ancestries)
writeDataFile('heritages.generated.ts', 'Pathfinder2eHeritageEntry', 'PATHFINDER_2E_HERITAGES', heritages)
writeDataFile('backgrounds.generated.ts', 'Pathfinder2eBackgroundEntry', 'PATHFINDER_2E_BACKGROUNDS', backgrounds)
writeSummary(summary)

console.log(`Generated PF2e character options in ${path.relative(process.cwd(), outputRoot)}`)
console.log(summary.counts)
console.log({ ruleKeys: Object.keys(summary.ruleKeys).length, warnings: summary.normalization.warningDocuments })
