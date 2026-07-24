import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const sourceRoot = resolve(process.argv[2] ?? '.tmp/pf2e-source')
const batchNumber = String(process.argv[3] ?? '01').padStart(2, '0')
const batchIndex = Number(batchNumber)
const limits = {
  bestiary: Number(process.argv[4] ?? (batchIndex === 1 ? 50 : 100)),
  spells: Number(process.argv[5] ?? (batchIndex === 1 ? 20 : 40)),
  items: Number(process.argv[6] ?? (batchIndex === 1 ? 50 : 100)),
}
const bestiaryPublications = (process.argv[9] ?? 'Pathfinder Monster Core')
  .split('|')
  .map((publication) => publication.trim())
const bestiarySourcePacks = (process.argv[10] ?? 'pathfinder-monster-core')
  .split('|')
  .map((pack) => pack.trim())
const publications = {
  items: process.argv[7] ?? 'Pathfinder Player Core',
  spells: process.argv[8] ?? 'Pathfinder Player Core',
  bestiary: bestiaryPublications,
}
const expectedCommit = '01114da5851f31404078d8020809b13e4000bc4b'
const importerVersion = 7
const outputRoot = resolve('apps/api/src/game_systems/pathfinder_2e/content_catalog')
const localIconRoot = resolve('apps/api/src/game_systems/pathfinder_2e/icons')
const batchSlug = `core-remaster-exhaustive-${batchNumber}`
const batchExportToken = `EXHAUSTIVE_${batchNumber}`

if (!Number.isInteger(batchIndex) || batchIndex <= 0) {
  throw new Error(`Invalid exhaustive batch number: ${batchNumber}`)
}

for (const [domain, limit] of Object.entries(limits)) {
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error(`Invalid ${domain} limit: ${limit}`)
  }
}

for (const [domain, publication] of Object.entries({
  items: publications.items,
  spells: publications.spells,
})) {
  if (!publication.trim()) throw new Error(`Invalid ${domain} publication: ${publication}`)
}

if (
  bestiaryPublications.length !== bestiarySourcePacks.length
  || bestiaryPublications.some((publication) => !publication)
  || bestiarySourcePacks.some((pack) => !/^[a-z0-9-]+$/.test(pack))
) {
  throw new Error('Bestiary publications and source packs must be valid positional lists')
}

const bestiarySources = bestiaryPublications.map((publication, index) => ({
  publication,
  sourcePack: bestiarySourcePacks[index],
  order: index,
}))

const coveredSourceIds = {
  bestiary: new Set([
    'fLLKuOXwPq1Iq0U4',
    'BN5Lb6IsQ9Wyu3rL',
    'trchDxbDR2TiPMxT',
    'yQ2mosomuAPiLMkU',
    '4MoqBCDQA6FR1sPw',
    'gWgMg7cARqOe82O6',
  ]),
  spells: new Set([
    'kBhaPuzLUSwS6vVf',
    'gKKqvLohtrSJj3BM',
    'rfZpqmj0AIIdkVIs',
    'ZxHC7V7HtjUsB8zH',
    '9HpwDN4MYQJnW0LG',
    'XXqE1eY3w3z6xJCB',
  ]),
  items: new Set([
    'olwngGXM3hpgoLEP',
    'hIgqLgH3YcLZBeoT',
    '4tIVTg9wj56RrveA',
    'Gq1cZWSKOtJhKd2p',
    'SGkOHFyBbzWdBk8D',
    'rV7MTDCseZmEZKDw',
  ]),
}

const supportedItemTypes = new Set([
  'weapon',
  'armor',
  'shield',
  'equipment',
  'consumable',
  'ammo',
  'treasure',
  'backpack',
  'kit',
])

function sha256(value) {
  return `sha256:${createHash('sha256').update(value).digest('hex')}`
}

function readJson(file) {
  const raw = readFileSync(file, 'utf8')
  return { raw, value: JSON.parse(raw) }
}

function walkJson(directory) {
  return readdirSync(directory)
    .flatMap((name) => {
      const path = join(directory, name)
      return statSync(path).isDirectory() ? walkJson(path) : name.endsWith('.json') ? [path] : []
    })
}

function readGeneratedArray(path) {
  const source = readFileSync(path, 'utf8')
  const assignment = source.indexOf(' = [', source.indexOf('export const'))
  const start = assignment < 0 ? -1 : assignment + 3
  const end = source.lastIndexOf('\n]')
  if (start < 0 || end < 0) throw new Error(`Generated array not found in ${path}`)
  return JSON.parse(source.slice(start, end + 2))
}

function includePreviousExhaustiveSourceIds(domain, covered) {
  for (let index = 1; index < batchIndex; index += 1) {
    const previousBatch = String(index).padStart(2, '0')
    const path = join(
      outputRoot,
      domain,
      'original',
      `core-remaster-exhaustive-${previousBatch}.ts`,
    )
    if (!existsSync(path)) {
      throw new Error(`Previous exhaustive batch not found: ${path}`)
    }

    for (const record of readGeneratedArray(path)) {
      covered.add(record.source.sourceId)
    }
  }
}

function slugFromFile(file) {
  return basename(file, '.json')
}

function decodeHtmlEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&nbsp;', ' ')
}

function evaluateArithmetic(expression) {
  const matchedTokens = expression.match(/\d+(?:\.\d+)?|[()+\-*/]/g)
  if (!matchedTokens || matchedTokens.join('') !== expression.replace(/\s+/g, '')) return null
  let index = 0

  function primary() {
    const token = matchedTokens[index]
    if (token === undefined) return null
    if (token === '(') {
      index += 1
      const value = addition()
      if (matchedTokens[index] !== ')') return null
      index += 1
      return value
    }
    if (token === '+' || token === '-') {
      index += 1
      const value = primary()
      return value === null ? null : token === '-' ? -value : value
    }
    const value = Number(token)
    if (!Number.isFinite(value)) return null
    index += 1
    return value
  }

  function multiplication() {
    let value = primary()
    if (value === null) return null
    while (matchedTokens[index] === '*' || matchedTokens[index] === '/') {
      const operator = matchedTokens[index]
      index += 1
      const right = primary()
      if (right === null || (operator === '/' && right === 0)) return null
      value = operator === '*' ? value * right : value / right
    }
    return value
  }

  function addition() {
    let value = multiplication()
    if (value === null) return null
    while (matchedTokens[index] === '+' || matchedTokens[index] === '-') {
      const operator = matchedTokens[index]
      index += 1
      const right = multiplication()
      if (right === null) return null
      value = operator === '+' ? value + right : value - right
    }
    return value
  }

  const value = addition()
  return value !== null && index === matchedTokens.length && Number.isFinite(value) ? value : null
}

function resolveArithmeticFunctions(value) {
  let resolved = value
  let previous = ''

  while (resolved !== previous) {
    previous = resolved
    resolved = resolved
      .replace(/\b(floor|ceil)\(([-+*/.\d\s]+)\)/gi, (match, operation, expression) => {
        const result = evaluateArithmetic(expression)
        if (result === null) return match
        return String(operation.toLowerCase() === 'floor' ? Math.floor(result) : Math.ceil(result))
      })
      .replace(/\(([-+*/.\d\s]+)\)/g, (match, expression) => {
        const result = evaluateArithmetic(expression)
        return result === null ? match : String(result)
      })
  }

  return resolved
}

function normalizeInlineText(value, context = {}) {
  const replacements = {
    '@item.level': context.itemLevel,
    '@item.rank': context.itemRank,
    '@actor.level': context.actorLevel,
    '@actor.abilities.str.mod': context.actorStrengthModifier,
  }
  let normalized = value

  for (const [token, replacement] of Object.entries(replacements)) {
    if (replacement !== undefined) {
      normalized = normalized.replace(new RegExp(token.replaceAll('.', '\\.'), 'gi'), String(replacement))
    }
  }

  return resolveArithmeticFunctions(normalized)
    .replace(/@Template\[([^\]\n]+)\]/gi, (_, options) => {
      const [type, ...properties] = options.split('|')
      const distance = properties
        .map((property) => property.split(':'))
        .find(([key]) => key === 'distance')?.[1]
      return distance ? `${distance}-foot ${type}` : type
    })
    .replace(
      /(\b\d+(?:\.\d+)?(?:d\d+(?:[+-]\d+)?)?)\[([^\]\n]+)\](?:\{[^}\n]*\})?(?:\s+damage)?/gi,
      (_, formula, annotation) => {
        const tags = annotation.split('|')[0].split(',').map((tag) => tag.trim().toLowerCase())
        const persistent = tags.includes('persistent')
        const healing = tags.includes('healing')
        const type = tags.find((tag) => tag !== 'persistent' && tag !== 'healing')
        if (healing) return `${formula} healing`
        if (persistent && type) return `${formula} persistent ${type} damage`
        if (type === 'bleed') return `${formula} persistent bleed damage`
        return type ? `${formula} ${type} damage` : formula
      },
    )
    .replace(/\{[^}\n]*\}/g, '')
    .replace(/@[a-z][a-z0-9_.]*/gi, 'effect value')
}

function plainText(value = '', context = {}) {
  const text = decodeHtmlEntities(String(value))
    .replace(/@UUID\[([^\]]+)\](?:\{([^}]+)\})?/g, (_, uuid, label) => (
      label ?? uuid.split('.').at(-1) ?? ''
    ))
    .replace(/@Check\[([^\]]+)\]/g, (_, check) => `check (${check.replaceAll('|', ', ')})`)
    .replace(/@Damage\[([^\]]+)\]/g, (_, damage) => damage)
    .replace(/@Localize\[[^\]]+\]/g, '')
    .replace(/<(?:br|hr)\s*\/?>/gi, '\n')
    .replace(/<\/(?:p|div|li|tr|h\d)>/gi, '\n')
    .replace(/<\/(?:td|th)>/gi, ' | ')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()

  return normalizeInlineText(text, context)
}

function sourceIdentity(sourcePack, sourceId, slug, publication) {
  return {
    sourcePack,
    sourceId,
    slug,
    publicationTitle: publication.title,
    license: publication.license,
    remaster: publication.remaster,
  }
}

function resolveLocalIcon(sourcePath) {
  const prefix = 'systems/pf2e/icons/'
  if (typeof sourcePath !== 'string' || !sourcePath.startsWith(prefix)) return undefined

  const relativePath = sourcePath.slice(prefix.length)
  const localPath = join(localIconRoot, ...relativePath.split('/'))
  if (!existsSync(localPath)) return undefined

  return { path: `/api/game-systems/pathfinder-2e/icons/${relativePath}` }
}

function normalizeSize(size) {
  return {
    tiny: 'tiny',
    sm: 'small',
    med: 'medium',
    lg: 'large',
    huge: 'huge',
    grg: 'gargantuan',
  }[size] ?? size ?? 'medium'
}

function normalizeSense(sense) {
  return [
    sense.type,
    sense.acuity && sense.acuity !== 'precise' ? sense.acuity : null,
    Number.isFinite(sense.range) ? sense.range : null,
  ].filter((part) => part !== null && part !== undefined).join('-')
}

function normalizeDefense(entry) {
  if (typeof entry === 'string') return entry
  const exceptions = Array.isArray(entry.exceptions) && entry.exceptions.length
    ? ` except ${entry.exceptions.join(', ')}`
    : ''
  return `${entry.type}${Number.isFinite(entry.value) ? ` ${entry.value}` : ''}${exceptions}`
}

function normalizeSpeedFeet(speed) {
  if (Number.isFinite(speed?.value)) return speed.value

  const alternativeSpeed = speed?.otherSpeeds?.find((entry) => Number.isFinite(entry?.value))
  return alternativeSpeed?.value ?? 0
}

function normalizeDamageRolls(damageRolls = {}) {
  return Object.values(damageRolls)
    .map((roll) => `${roll.damage} ${roll.damageType}`.trim())
    .join('; ')
}

function normalizeSpellcasting(items = []) {
  const spells = items.filter((item) => item.type === 'spell')

  return items
    .filter((item) => item.type === 'spellcastingEntry')
    .map((entry) => ({
      id: entry._id,
      name: entry.name,
      tradition: entry.system.tradition?.value ?? '',
      category: entry.system.prepared?.value ?? '',
      attackModifier: entry.system.spelldc?.value ?? null,
      saveDc: entry.system.spelldc?.dc ?? null,
      spells: spells
        .filter((spell) => spell.system.location?.value === entry._id)
        .map((spell) => ({
          id: spell._id,
          name: spell.name,
          rank: spell.system.location?.heightenedLevel ?? spell.system.level?.value ?? 0,
        }))
        .sort((left, right) => left.rank - right.rank || left.name.localeCompare(right.name)),
    }))
}

function normalizeBestiaryActions(items = [], inlineContext = {}) {
  return items
    .filter((item) => item.type === 'action')
    .map((item) => ({
      id: item._id,
      name: item.name,
      kind: item.system.actionType?.value === 'reaction'
        ? 'reaction'
        : item.system.actionType?.value === 'action'
          ? 'action'
          : 'passive',
      description: plainText(item.system.description?.value, inlineContext),
      traits: item.system.traits?.value ?? [],
    }))
}

function normalizeHazard(row) {
  const source = row.value
  const system = source.system
  const slug = slugFromFile(row.file)
  const inlineContext = { actorLevel: system.details.level.value }
  const data = {
    schemaVersion: 1,
    entryType: 'HAZARD',
    name: source.name,
    level: system.details.level.value,
    rarity: system.traits.rarity,
    size: normalizeSize(system.traits.size?.value),
    traits: system.traits.value ?? [],
    description: plainText(system.details.description, inlineContext),
    armorClass: system.attributes.ac?.value ?? 0,
    hitPoints: system.attributes.hp?.max ?? 0,
    hardness: system.attributes.hardness ?? 0,
    stealth: {
      modifier: system.attributes.stealth?.value ?? 0,
      details: plainText(system.attributes.stealth?.details, inlineContext),
    },
    disable: plainText(system.details.disable, inlineContext),
    isComplex: system.details.isComplex === true,
    routine: plainText(system.details.routine, inlineContext),
    reset: plainText(system.details.reset, inlineContext),
    saves: {
      fortitude: system.saves?.fortitude?.value ?? 0,
      reflex: system.saves?.reflex?.value ?? 0,
      will: system.saves?.will?.value ?? 0,
    },
    defenses: {
      immunities: (system.attributes.immunities ?? []).map(normalizeDefense),
      resistances: (system.attributes.resistances ?? []).map(normalizeDefense),
      weaknesses: (system.attributes.weaknesses ?? []).map(normalizeDefense),
    },
    actions: normalizeBestiaryActions(source.items, inlineContext),
  }

  return originalRecord({
    domain: 'BESTIARY',
    contentId: `pf2e:bestiary:${row.sourcePack}:${slug}`,
    source: sourceIdentity(row.sourcePack, source._id, slug, system.details.publication),
    raw: row.raw,
    data,
    image: resolveLocalIcon(source.img),
  })
}

function normalizeBestiary(row) {
  const source = row.value
  if (source.type === 'hazard') return normalizeHazard(row)

  const system = source.system
  const slug = slugFromFile(row.file)
  const inlineContext = {
    actorLevel: system.details.level.value,
    actorStrengthModifier: system.abilities.str.mod,
  }
  const data = {
    schemaVersion: 1,
    name: source.name,
    level: system.details.level.value,
    rarity: system.traits.rarity,
    size: normalizeSize(system.traits.size?.value),
    traits: system.traits.value ?? [],
    description: plainText(system.details.publicNotes, inlineContext),
    armorClass: system.attributes.ac.value,
    hitPoints: system.attributes.hp.max,
    speedFeet: normalizeSpeedFeet(system.attributes.speed),
    perception: {
      modifier: system.perception.mod,
      senses: (system.perception.senses ?? []).map(normalizeSense),
    },
    saves: {
      fortitude: system.saves.fortitude.value,
      reflex: system.saves.reflex.value,
      will: system.saves.will.value,
    },
    abilities: {
      str: system.abilities.str.mod,
      dex: system.abilities.dex.mod,
      con: system.abilities.con.mod,
      int: system.abilities.int.mod,
      wis: system.abilities.wis.mod,
      cha: system.abilities.cha.mod,
    },
    skills: Object.fromEntries(
      Object.entries(system.skills ?? {}).map(([key, skill]) => [key, skill.base]),
    ),
    languages: system.details.languages?.value ?? [],
    defenses: {
      immunities: (system.attributes.immunities ?? []).map(normalizeDefense),
      resistances: (system.attributes.resistances ?? []).map(normalizeDefense),
      weaknesses: (system.attributes.weaknesses ?? []).map(normalizeDefense),
    },
    attacks: (source.items ?? [])
      .filter((item) => item.type === 'melee')
      .map((item) => ({
        id: item._id,
        name: item.name,
        bonus: item.system.bonus.value,
        damage: normalizeDamageRolls(item.system.damageRolls),
        traits: item.system.traits?.value ?? [],
      })),
    actions: normalizeBestiaryActions(source.items, inlineContext),
    spellcasting: normalizeSpellcasting(source.items),
  }

  return originalRecord({
    domain: 'BESTIARY',
    contentId: `pf2e:bestiary:${row.sourcePack}:${slug}`,
    source: sourceIdentity(
      row.sourcePack,
      source._id,
      slug,
      system.details.publication,
    ),
    raw: row.raw,
    data,
    image: resolveLocalIcon(source.img),
  })
}

function spellDefense(defense) {
  if (!defense) return null
  if (defense.save) return `${defense.save.basic ? 'basic ' : ''}${defense.save.statistic} save`
  if (defense.passive) return defense.passive.statistic
  return null
}

function spellArea(area) {
  if (!area) return null
  return [area.value, area.type].filter(Boolean).join(' ') || null
}

function spellHeightening(description, inlineContext) {
  const text = plainText(description, inlineContext)
  const marker = text.search(/\bHeightened\b/i)
  return marker >= 0 ? text.slice(marker) : ''
}

function castingTime(value) {
  if (/^\d+$/.test(value)) return `${value} ${value === '1' ? 'action' : 'actions'}`
  if (/^\d+\s+to\s+\d+$/.test(value)) return `${value} actions`
  return value
}

function normalizeSpell(row) {
  const source = row.value
  const system = source.system
  const slug = slugFromFile(row.file)
  const inlineContext = {
    itemLevel: system.level.value,
    itemRank: system.level.value,
  }
  const data = {
    schemaVersion: 1,
    name: source.name,
    rank: system.level.value,
    rarity: system.traits.rarity,
    traits: system.traits.value ?? [],
    traditions: system.traits.traditions ?? [],
    description: plainText(system.description.value, inlineContext),
    castingTime: castingTime(system.time.value),
    range: system.range?.value ?? '',
    target: system.target?.value ?? '',
    area: spellArea(system.area),
    duration: system.duration?.value || (system.duration?.sustained ? 'sustained' : ''),
    defense: spellDefense(system.defense),
    damage: Object.values(system.damage ?? {}).map((damage) => ({
      formula: damage.formula,
      type: damage.type,
      kind: damage.kinds?.includes('healing')
        ? damage.kinds.includes('damage') ? 'damage-or-healing' : 'healing'
        : 'damage',
    })),
    heightening: spellHeightening(system.description.value, inlineContext),
  }

  return originalRecord({
    domain: 'SPELL',
    contentId: `pf2e:spell:spells-srd:${slug}`,
    source: sourceIdentity('spells-srd', source._id, slug, system.publication),
    raw: row.raw,
    data,
    image: resolveLocalIcon(source.img),
  })
}

function itemType(type) {
  return {
    ammo: 'ammunition',
    backpack: 'container',
  }[type] ?? type
}

function normalizeItem(row) {
  const source = row.value
  const system = source.system
  const slug = slugFromFile(row.file)
  const inlineContext = { itemLevel: system.level?.value ?? 0 }
  const normalized = {
    schemaVersion: 1,
    name: source.name,
    itemType: itemType(source.type),
    level: system.level?.value ?? 0,
    rarity: system.traits?.rarity ?? 'common',
    traits: system.traits?.value ?? [],
    description: plainText(system.description?.value, inlineContext),
    bulk: system.bulk?.value ?? 0,
    price: Object.fromEntries(
      Object.entries(system.price?.value ?? {})
        .filter(([currency, amount]) => ['gp', 'sp', 'cp'].includes(currency) && amount > 0),
    ),
    usage: system.usage?.value ?? '',
    category: system.category ?? source.type,
    group: system.group ?? system.baseItem ?? source.type,
  }

  if (source.type === 'weapon' && system.damage) {
    normalized.damage = {
      dice: system.damage.dice,
      die: system.damage.die,
      type: system.damage.damageType,
    }
  }

  if (source.type === 'armor') {
    normalized.armor = {
      armorClassBonus: system.acBonus,
      dexterityCap: system.dexCap,
      checkPenalty: system.checkPenalty,
      speedPenaltyFeet: system.speedPenalty ?? 0,
    }
  }

  return originalRecord({
    domain: 'ITEM',
    contentId: `pf2e:item:equipment-srd:${slug}`,
    source: sourceIdentity('equipment-srd', source._id, slug, system.publication),
    raw: row.raw,
    data: normalized,
    image: resolveLocalIcon(source.img),
  })
}

function originalRecord({ domain, contentId, source, raw, data, image }) {
  return {
    contentId,
    domain,
    locale: 'en-US',
    source,
    ...(image ? { image } : {}),
    sourceHash: sha256(raw),
    translatableHash: sha256(JSON.stringify(data)),
    data,
  }
}

function select({ directory, publication, covered, limit, value, eligible = () => true }) {
  return walkJson(directory)
    .map((file) => ({ file, ...readJson(file) }))
    .filter((row) => publication(row.value) && eligible(row.value) && !covered.has(row.value._id))
    .sort((left, right) => (
      value(left.value) - value(right.value)
      || left.value._id.localeCompare(right.value._id)
    ))
    .slice(0, limit)
}

function selectBestiary({ sources, covered, limit }) {
  return sources
    .flatMap((source) => walkJson(join(sourceRoot, `packs/pf2e/${source.sourcePack}`))
      .map((file) => ({ file, ...readJson(file), ...source })))
    .filter((row) => (
      row.value.system?.details?.publication?.title === row.publication
      && (row.value.type === 'npc' || row.value.type === 'hazard')
      && !covered.has(row.value._id)
    ))
    .sort((left, right) => (
      left.order - right.order
      || left.value.system.details.level.value - right.value.system.details.level.value
      || left.sourcePack.localeCompare(right.sourcePack)
      || left.value._id.localeCompare(right.value._id)
    ))
    .slice(0, limit)
}

function serialize(value) {
  return JSON.stringify(value, null, 2)
}

function countByValue(records, value) {
  return Object.fromEntries(
    [...new Set(records.map(value))]
      .sort((left, right) => left - right)
      .map((current) => [
        current,
        records.filter((record) => value(record) === current).length,
      ]),
  )
}

function writeOriginals(path, typeImport, typeName, exportName, records) {
  writeFileSync(path, `${typeImport}\n\nexport const ${exportName}: readonly Pathfinder2eOriginalContentRecord<${typeName}>[] = ${serialize(records)}\n`)
}

function writeTranslations(path, importPath, exportName, originals) {
  if (existsSync(path)) return

  const translations = originals.map((original) => ({
    contentId: original.contentId,
    locale: 'pt-BR',
    sourceTranslatableHash: original.translatableHash,
    version: 1,
    status: 'NOT_STARTED',
    fields: {},
  }))
  writeFileSync(path, `import type { Pathfinder2eContentTranslation } from '${importPath}'\n\nexport const ${exportName}: readonly Pathfinder2eContentTranslation[] = ${serialize(translations)}\n`)
}

if (!existsSync(sourceRoot)) throw new Error(`PF2e source checkout not found: ${sourceRoot}`)

includePreviousExhaustiveSourceIds('bestiary', coveredSourceIds.bestiary)
includePreviousExhaustiveSourceIds('spells', coveredSourceIds.spells)
includePreviousExhaustiveSourceIds('items', coveredSourceIds.items)

for (const directory of [
  join(outputRoot, 'items/original'),
  join(outputRoot, 'items/translations/pt-BR'),
]) {
  mkdirSync(directory, { recursive: true })
}

const bestiaryRows = selectBestiary({
  sources: bestiarySources,
  covered: coveredSourceIds.bestiary,
  limit: limits.bestiary,
})

const spellRows = select({
  directory: join(sourceRoot, 'packs/pf2e/spells/spells'),
  publication: (source) => source.system?.publication?.title === publications.spells,
  covered: coveredSourceIds.spells,
  limit: limits.spells,
  value: (source) => source.system.level.value,
})

const itemRows = select({
  directory: join(sourceRoot, 'packs/pf2e/equipment'),
  publication: (source) => source.system?.publication?.title === publications.items,
  eligible: (source) => supportedItemTypes.has(source.type),
  covered: coveredSourceIds.items,
  limit: limits.items,
  value: (source) => source.system.level?.value ?? 0,
})

const bestiary = bestiaryRows.map(normalizeBestiary)
const spells = spellRows.map(normalizeSpell)
const items = itemRows.map(normalizeItem)

writeOriginals(
  join(outputRoot, `bestiary/original/${batchSlug}.ts`),
  "import type { Pathfinder2eOriginalContentRecord } from '../../records'\nimport type { Pathfinder2eBestiaryData } from '../types'",
  'Pathfinder2eBestiaryData',
  `PATHFINDER_2E_${batchExportToken}_BESTIARY_ORIGINALS`,
  bestiary,
)
writeTranslations(
  join(outputRoot, `bestiary/translations/pt-BR/${batchSlug}.ts`),
  '../../../records',
  `PATHFINDER_2E_${batchExportToken}_BESTIARY_PT_BR`,
  bestiary,
)

writeOriginals(
  join(outputRoot, `spells/original/${batchSlug}.ts`),
  "import type { Pathfinder2eOriginalContentRecord } from '../../records'\nimport type { Pathfinder2eSpellData } from '../types'",
  'Pathfinder2eSpellData',
  `PATHFINDER_2E_${batchExportToken}_SPELL_ORIGINALS`,
  spells,
)
writeTranslations(
  join(outputRoot, `spells/translations/pt-BR/${batchSlug}.ts`),
  '../../../records',
  `PATHFINDER_2E_${batchExportToken}_SPELLS_PT_BR`,
  spells,
)

writeOriginals(
  join(outputRoot, `items/original/${batchSlug}.ts`),
  "import type { Pathfinder2eOriginalContentRecord } from '../../records'\nimport type { Pathfinder2eItemData } from '../types'",
  'Pathfinder2eItemData',
  `PATHFINDER_2E_${batchExportToken}_ITEM_ORIGINALS`,
  items,
)
writeTranslations(
  join(outputRoot, `items/translations/pt-BR/${batchSlug}.ts`),
  '../../../records',
  `PATHFINDER_2E_${batchExportToken}_ITEMS_PT_BR`,
  items,
)

const frozenIds = {
  bestiary: bestiary.map((entry) => entry.contentId),
  spells: spells.map((entry) => entry.contentId),
  items: items.map((entry) => entry.contentId),
}
const normalizationWarnings = Object.fromEntries(
  itemRows
    .filter((row) => row.value.type === 'kit' && row.value.system.level === undefined)
    .map((row) => [
      `pf2e:item:equipment-srd:${slugFromFile(row.file)}`,
      ['missing-source-level-defaulted-to-zero'],
    ]),
)
writeFileSync(
  join(outputRoot, `deliveries/${batchSlug}-ids.ts`),
  `export const PATHFINDER_2E_CORE_REMASTER_${batchExportToken}_IDS = ${serialize(frozenIds)} as const\n\n`
    + `export const PATHFINDER_2E_CORE_REMASTER_${batchExportToken}_NORMALIZATION_WARNINGS = `
    + `${serialize(normalizationWarnings)} as const\n`,
)

const checksumInput = [...bestiary, ...spells, ...items]
  .map((entry) => `${entry.contentId}:${entry.sourceHash}`)
  .join('\n')

console.log(JSON.stringify({
  batch: batchNumber,
  sourceCommit: expectedCommit,
  importerVersion,
  publications,
  bestiarySourcePacks,
  inputChecksum: sha256(checksumInput).slice('sha256:'.length),
  counts: {
    bestiary: bestiary.length,
    spells: spells.length,
    items: items.length,
  },
  ranges: {
    bestiary: countByValue(bestiary, (entry) => entry.data.level),
    spells: countByValue(spells, (entry) => entry.data.rank),
    items: countByValue(items, (entry) => entry.data.level),
  },
  icons: {
    bestiary: bestiary.filter((entry) => entry.image).length,
    spells: spells.filter((entry) => entry.image).length,
    items: items.filter((entry) => entry.image).length,
  },
  normalizationWarnings: Object.keys(normalizationWarnings).length,
}, null, 2))
