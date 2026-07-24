import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const catalogRoot = resolve('apps/api/src/game_systems/pathfinder_2e/content_catalog')
const batchNumber = String(process.argv[2] ?? '01').padStart(2, '0')
const batchIndex = Number(batchNumber)
const batchSlug = `core-remaster-exhaustive-${batchNumber}`
const batchExportToken = `EXHAUSTIVE_${batchNumber}`
const cachePath = resolve('.tmp/pf2e-core-exhaustive-translation-cache.json')
const cacheVersion = 'v3'
const cache = existsSync(cachePath)
  ? JSON.parse(readFileSync(cachePath, 'utf8'))
  : {}

if (!Number.isInteger(batchIndex) || batchIndex <= 0) {
  throw new Error(`Invalid exhaustive batch number: ${batchNumber}`)
}

const sizeTranslations = {
  tiny: 'Minúsculo',
  small: 'Pequeno',
  medium: 'Médio',
  large: 'Grande',
  huge: 'Enorme',
  gargantuan: 'Imenso',
}

const itemTypeTranslations = {
  weapon: 'arma',
  armor: 'armadura',
  shield: 'escudo',
  equipment: 'equipamento',
  consumable: 'consumível',
  ammunition: 'munição',
  treasure: 'tesouro',
  container: 'recipiente',
  kit: 'kit',
}

const damageTypeTranslations = {
  acid: 'ácido',
  bleed: 'sangramento',
  bludgeoning: 'contundente',
  cold: 'frio',
  electricity: 'eletricidade',
  fire: 'fogo',
  force: 'força',
  mental: 'mental',
  piercing: 'perfurante',
  poison: 'veneno',
  slashing: 'cortante',
  sonic: 'sônico',
  spirit: 'espiritual',
  vitality: 'vitalidade',
  void: 'vazio',
}

function readGeneratedArray(path) {
  const source = readFileSync(path, 'utf8')
  const assignment = source.indexOf(' = [', source.indexOf('export const'))
  const start = assignment < 0 ? -1 : assignment + 3
  const end = source.lastIndexOf('\n]')
  if (start < 0 || end < 0) throw new Error(`Generated array not found in ${path}`)
  return JSON.parse(source.slice(start, end + 2))
}

function protectTerms(value) {
  return value
    .replace(/(\d+(?:\.\d+)?)\s*(?:feet|foot)\b/gi, (_, feet) => (
      `QHDISTANCE${String(feet).replace('.', '_')}END`
    ))
    .replace(/\bRank\b/gi, 'QHRANK')
    .replace(/\bGP\b/gi, 'QHGP')
    .replace(/\bSP\b/gi, 'QHSP')
    .replace(/\bCP\b/gi, 'QHCP')
}

function restoreTerms(value) {
  return value
    .replace(/QHDISTANCE(\d+)(?:_(\d+))?END/gi, (_, whole, decimal) => {
      const feet = Number(`${whole}${decimal ? `.${decimal}` : ''}`)
      const meters = Math.round(feet * 0.3 * 10) / 10
      return `${feet} pés (${String(meters).replace('.', ',')} metros)`
    })
    .replaceAll('QHRANK', 'Rank')
    .replaceAll('QHGP', 'GP')
    .replaceAll('QHSP', 'SP')
    .replaceAll('QHCP', 'CP')
    .replace(/\bClassificação\b/g, 'Rank')
    .replace(/\bfeitiços\b/gi, 'magias')
    .replace(/\bfeitiço\b/gi, 'magia')
    .replace(/\bElevado\b/g, 'Aprimorada')
    .replace(/\bvalor em massa\b/gi, 'valor de Volume')
}

function responseTranslation(payload) {
  const segments = payload?.[0]
  if (!Array.isArray(segments)) throw new Error('Unexpected translation response')
  return segments.map((segment) => segment?.[0] ?? '').join('')
}

async function requestTranslation(value, attempt = 1) {
  const query = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: 'pt',
    dt: 't',
    q: protectTerms(value),
  })
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${query}`)
  if (response.ok) return restoreTerms(responseTranslation(await response.json())).trim()

  if (attempt >= 4) throw new Error(`Translation failed (${response.status}) for: ${value.slice(0, 80)}`)
  await new Promise((resolvePromise) => setTimeout(resolvePromise, attempt * 750))
  return requestTranslation(value, attempt + 1)
}

async function translate(value) {
  if (typeof value !== 'string' || !value.trim()) return ''
  const cacheKey = `${cacheVersion}:${value}`
  if (cache[cacheKey]) return cache[cacheKey]

  const translated = await requestTranslation(value)
  cache[cacheKey] = translated
  return translated
}

async function mapConcurrent(values, worker, concurrency = 8) {
  const results = new Array(values.length)
  let cursor = 0

  async function run() {
    while (cursor < values.length) {
      const index = cursor
      cursor += 1
      results[index] = await worker(values[index], index)
      if (index % 25 === 0) writeFileSync(cachePath, JSON.stringify(cache, null, 2))
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, run))
  return results
}

function translateDamage(value) {
  return value.replace(
    /\b(acid|bleed|bludgeoning|cold|electricity|fire|force|mental|piercing|poison|slashing|sonic|spirit|vitality|void)\b/g,
    (type) => damageTypeTranslations[type] ?? type,
  )
}

async function translatedMap(values) {
  const pairs = await mapConcurrent(values, async (value) => [value, await translate(value)])
  return Object.fromEntries(pairs)
}

async function translateSense(value) {
  if (value === 'darkvision') return 'visão no escuro'
  if (value === 'low-light-vision') return 'visão na penumbra'

  const scent = /^scent-(imprecise|precise)-(\d+)$/.exec(value)
  if (scent) {
    const feet = Number(scent[2])
    const meters = Math.round(feet * 0.3 * 10) / 10
    const acuity = scent[1] === 'imprecise' ? 'impreciso' : 'preciso'
    return `faro ${acuity} ${feet} pés (${String(meters).replace('.', ',')} metros)`
  }

  return translate(value)
}

async function translateBestiaryActions(actions) {
  return Object.fromEntries(
    await mapConcurrent(actions, async (action) => [
      action.id,
      {
        name: await translate(action.name),
        description: await translate(action.description),
      },
    ]),
  )
}

async function translateHazard(original) {
  const data = original.data

  return translationRecord(original, {
    name: await translate(data.name),
    description: await translate(data.description),
    size: sizeTranslations[data.size] ?? await translate(data.size),
    stealthDetails: await translate(data.stealth.details),
    disable: await translate(data.disable),
    routine: await translate(data.routine),
    reset: await translate(data.reset),
    defenses: {
      immunities: await mapConcurrent(data.defenses.immunities, translate),
      resistances: await mapConcurrent(data.defenses.resistances, translate),
      weaknesses: await mapConcurrent(data.defenses.weaknesses, translate),
    },
    actions: await translateBestiaryActions(data.actions),
  })
}

async function translateBestiary(original) {
  const data = original.data
  if (data.entryType === 'HAZARD') return translateHazard(original)

  const attacks = await mapConcurrent(data.attacks, async (attack) => [
    attack.id,
    {
      name: await translate(attack.name),
      damage: translateDamage(attack.damage),
    },
  ])
  const spellcasting = await mapConcurrent(data.spellcasting ?? [], async (entry) => [
    entry.id,
    {
      name: await translate(entry.name),
      category: await translate(entry.category),
      spells: Object.fromEntries(
        await mapConcurrent(entry.spells, async (spell) => [
          spell.id,
          { name: await translate(spell.name) },
        ]),
      ),
    },
  ])

  return translationRecord(original, {
    name: await translate(data.name),
    description: await translate(data.description),
    size: sizeTranslations[data.size] ?? await translate(data.size),
    senses: Object.fromEntries(
      await mapConcurrent(data.perception.senses, async (sense) => [sense, await translateSense(sense)]),
    ),
    languages: await translatedMap(data.languages),
    defenses: {
      immunities: await mapConcurrent(data.defenses.immunities, translate),
      resistances: await mapConcurrent(data.defenses.resistances, translate),
      weaknesses: await mapConcurrent(data.defenses.weaknesses, translate),
    },
    attacks: Object.fromEntries(attacks),
    actions: await translateBestiaryActions(data.actions),
    spellcasting: Object.fromEntries(spellcasting),
  })
}

async function translateSpell(original) {
  const data = original.data
  return translationRecord(original, {
    name: await translate(data.name),
    description: await translate(data.description),
    castingTime: await translate(data.castingTime),
    range: await translate(data.range),
    target: await translate(data.target),
    ...(data.area ? { area: await translate(data.area) } : {}),
    duration: await translate(data.duration),
    ...(data.defense ? { defense: await translate(data.defense) } : {}),
    heightening: await translate(data.heightening),
  })
}

async function translateItem(original) {
  const data = original.data
  return translationRecord(original, {
    name: await translate(data.name),
    description: await translate(data.description),
    itemType: itemTypeTranslations[data.itemType] ?? await translate(data.itemType),
    usage: await translate(data.usage),
    category: await translate(data.category),
    group: await translate(data.group),
    ...(data.damage?.type
      ? { damageType: damageTypeTranslations[data.damage.type] ?? await translate(data.damage.type) }
      : {}),
  })
}

function translationRecord(original, fields) {
  return {
    contentId: original.contentId,
    locale: 'pt-BR',
    sourceTranslatableHash: original.translatableHash,
    version: 1,
    status: 'MACHINE_DRAFT',
    fields,
  }
}

function writeTranslations(path, importPath, exportName, translations) {
  writeFileSync(
    path,
    `import type { Pathfinder2eContentTranslation } from '${importPath}'\n\n`
      + `export const ${exportName}: readonly Pathfinder2eContentTranslation[] = `
      + `${JSON.stringify(translations, null, 2)}\n`,
  )
}

const bestiary = readGeneratedArray(
  resolve(catalogRoot, `bestiary/original/${batchSlug}.ts`),
)
const spells = readGeneratedArray(
  resolve(catalogRoot, `spells/original/${batchSlug}.ts`),
)
const items = readGeneratedArray(
  resolve(catalogRoot, `items/original/${batchSlug}.ts`),
)

const bestiaryTranslations = await mapConcurrent(bestiary, translateBestiary, 4)
const spellTranslations = await mapConcurrent(spells, translateSpell, 4)
const itemTranslations = await mapConcurrent(items, translateItem, 4)

writeTranslations(
  resolve(catalogRoot, `bestiary/translations/pt-BR/${batchSlug}.ts`),
  '../../../records',
  `PATHFINDER_2E_${batchExportToken}_BESTIARY_PT_BR`,
  bestiaryTranslations,
)
writeTranslations(
  resolve(catalogRoot, `spells/translations/pt-BR/${batchSlug}.ts`),
  '../../../records',
  `PATHFINDER_2E_${batchExportToken}_SPELLS_PT_BR`,
  spellTranslations,
)
writeTranslations(
  resolve(catalogRoot, `items/translations/pt-BR/${batchSlug}.ts`),
  '../../../records',
  `PATHFINDER_2E_${batchExportToken}_ITEMS_PT_BR`,
  itemTranslations,
)

writeFileSync(cachePath, JSON.stringify(cache, null, 2))
console.log(JSON.stringify({
  batch: batchNumber,
  translated: {
    bestiary: bestiaryTranslations.length,
    spells: spellTranslations.length,
    items: itemTranslations.length,
  },
  cachedStrings: Object.keys(cache).length,
}, null, 2))
