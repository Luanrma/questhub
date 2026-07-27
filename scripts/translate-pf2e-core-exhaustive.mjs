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

const spellDefenseTranslations = {
  'will save': 'teste de Vontade',
  'fortitude save': 'teste de Fortitude',
  'reflex save': 'teste de Reflexos',
  'basic will save': 'teste básico de Vontade',
  'basic fortitude save': 'teste básico de Fortitude',
  'basic reflex save': 'teste básico de Reflexos',
  'fortitude-dc': 'CD de Fortitude',
  ac: 'CA',
}

const technicalActionTargetTranslations = {
  'emotion effects': 'efeitos de emoção',
  curses: 'maldições',
  'disease, poison, and radiation': 'doença, veneno e radiação',
  disease: 'doença',
  magic: 'magia',
  mental: 'efeitos mentais',
  vitality: 'vitalidade',
  'shove and trip': 'Empurrar e Derrubar',
  'enchantment and illusion effects': 'efeitos de encantamento e ilusão',
  'linguistic effects': 'efeitos linguísticos',
  'disease and poison': 'doença e veneno',
  emotion: 'emoção',
  'divine magic': 'magia divina',
  sonic: 'efeitos sônicos',
  traps: 'armadilhas',
  illusions: 'ilusões',
  poison: 'veneno',
  cold: 'frio',
  'dream and sleep': 'sonho e sono',
  fear: 'medo',
  'fear effects': 'efeitos de medo',
  'death effects, disease, and poison': 'efeitos de morte, doença e veneno',
  'higher ranking cult members': 'membros do culto de Rank superior',
  'higher-ranked cultists': 'cultistas de Rank superior',
  'higher ranking iron ring members': 'membros do Anel de Ferro de Rank superior',
  'petrifying gaze': 'olhar petrificante',
  'xulgath stench': 'fedor de xulgath',
  'fear and effects that render him clumsy, doomed, drained, enfeebled, or fatigued':
    'medo e efeitos que o deixem desajeitado, condenado, drenado, enfraquecido ou fatigado',
}

function translateSpellDefense(value) {
  if (typeof value !== 'string' || !value.trim()) return null
  return spellDefenseTranslations[value.trim().toLowerCase()] ?? null
}

function translateTechnicalBestiaryActionName(value) {
  if (typeof value !== 'string' || !value.trim()) return null

  const armorClass = /^(\d+) AC vs\. Non-Magical$/i.exec(value.trim())
  if (armorClass) return `${armorClass[1]} CA contra ataques não mágicos`

  const savesAndArmorClass =
    /^([+-]\d+) (?:(Status|Circumstance|Item|Untyped)(?: Bonus)? )?to All Saves and AC vs\. (.+)$/i
      .exec(value.trim())
  if (savesAndArmorClass) {
    const target = technicalActionTargetTranslations[savesAndArmorClass[3].toLowerCase()]
    if (!target) return null
    const bonusType = savesAndArmorClass[2]?.toLowerCase()
    const bonus = bonusType && bonusType !== 'untyped'
      ? ` de bônus de ${bonusType === 'circumstance' ? 'circunstância' : bonusType === 'item' ? 'item' : 'status'}`
      : ''
    return `${savesAndArmorClass[1]}${bonus} em todos os testes de resistência e CA contra ${target}`
  }

  const specificSave =
    /^([+-]\d+) (?:(Status|Circumstance|Item|Untyped)(?: Bonus)? )?to (Will|Fortitude|Reflex) Saves vs\. (.+)$/i
    .exec(value.trim())
  if (specificSave) {
    const saveTranslations = {
      will: 'Vontade',
      fortitude: 'Fortitude',
      reflex: 'Reflexos',
    }
    const target = technicalActionTargetTranslations[specificSave[4].toLowerCase()]
    if (!target) return null
    const bonusType = specificSave[2]?.toLowerCase()
    const bonus = bonusType && bonusType !== 'untyped'
      ? ` de bônus de ${bonusType === 'circumstance' ? 'circunstância' : bonusType === 'item' ? 'item' : 'status'}`
      : ''
    return `${specificSave[1]}${bonus} em testes de ${saveTranslations[specificSave[3].toLowerCase()]} contra ${target}`
  }

  const allSaves =
    /^([+-]\d+) (?:(Status|Circumstance|Item|Untyped)(?: Bonus)? )?(?:to|on) (All )?Saves vs\. (.+)$/i
    .exec(value.trim())
  if (!allSaves) return null

  const target = technicalActionTargetTranslations[allSaves[4].toLowerCase()]
  if (!target) return null

  const bonusType = allSaves[2]?.toLowerCase()
  const bonus = bonusType === 'status'
    ? ' de bônus de status'
    : bonusType === 'circumstance'
      ? ' de bônus de circunstância'
      : bonusType === 'item'
        ? ' de bônus de item'
      : ''
  const saves = allSaves[3] ? 'todos os testes de resistência' : 'testes de resistência'
  return `${allSaves[1]}${bonus} em ${saves} contra ${target}`
}

function readGeneratedArray(path) {
  const source = readFileSync(path, 'utf8')
  const generatedChunks = [...source.matchAll(
    /\/\* PF2E_GENERATED_CHUNK_START \*\/([\s\S]*?)\/\* PF2E_GENERATED_CHUNK_END \*\//g,
  )]
  if (generatedChunks.length > 0) {
    return generatedChunks.flatMap((match) => JSON.parse(match[1]))
  }
  if (/export const[\s\S]*?=\s*\[\s*\]\s*$/.test(source)) return []

  const exportStart = source.indexOf('export const')
  const assignment = source.indexOf(' = [', exportStart)
  const wrappedAssignment = source.indexOf('([', exportStart)
  const wrapped = assignment < 0 && wrappedAssignment >= 0
  const start = assignment >= 0 ? assignment + 3 : wrappedAssignment + 1
  const end = source.lastIndexOf(wrapped ? '\n])' : '\n]')
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

function normalizePortugueseMagicAgreement(value) {
  const replacements = {
    O: 'A',
    o: 'a',
    Os: 'As',
    os: 'as',
    Este: 'Esta',
    este: 'esta',
    Estes: 'Estas',
    estes: 'estas',
    Esse: 'Essa',
    esse: 'essa',
    Esses: 'Essas',
    esses: 'essas',
    Aquele: 'Aquela',
    aquele: 'aquela',
    Aqueles: 'Aquelas',
    aqueles: 'aquelas',
    Um: 'Uma',
    um: 'uma',
    Uns: 'Umas',
    uns: 'umas',
    Do: 'Da',
    do: 'da',
    Dos: 'Das',
    dos: 'das',
    No: 'Na',
    no: 'na',
    Nos: 'Nas',
    nos: 'nas',
    Ao: 'À',
    ao: 'à',
    Aos: 'Às',
    aos: 'às',
    Pelo: 'Pela',
    pelo: 'pela',
    Pelos: 'Pelas',
    pelos: 'pelas',
    Meu: 'Minha',
    meu: 'minha',
    Meus: 'Minhas',
    meus: 'minhas',
    Teu: 'Tua',
    teu: 'tua',
    Teus: 'Tuas',
    teus: 'tuas',
    Seu: 'Sua',
    seu: 'sua',
    Seus: 'Suas',
    seus: 'suas',
    Nosso: 'Nossa',
    nosso: 'nossa',
    Nossos: 'Nossas',
    nossos: 'nossas',
    Vosso: 'Vossa',
    vosso: 'vossa',
    Vossos: 'Vossas',
    vossos: 'vossas',
    Todo: 'Toda',
    todo: 'toda',
    Todos: 'Todas',
    todos: 'todas',
    Outro: 'Outra',
    outro: 'outra',
    Outros: 'Outras',
    outros: 'outras',
    Mesmo: 'Mesma',
    mesmo: 'mesma',
    Mesmos: 'Mesmas',
    mesmos: 'mesmas',
    Próprio: 'Própria',
    próprio: 'própria',
    Próprios: 'Próprias',
    próprios: 'próprias',
    Algum: 'Alguma',
    algum: 'alguma',
    Alguns: 'Algumas',
    alguns: 'algumas',
    Nenhum: 'Nenhuma',
    nenhum: 'nenhuma',
  }

  return value.replace(
    /\b(O|o|Os|os|Este|este|Estes|estes|Esse|esse|Esses|esses|Aquele|aquele|Aqueles|aqueles|Um|um|Uns|uns|Do|do|Dos|dos|No|no|Nos|nos|Ao|ao|Aos|aos|Pelo|pelo|Pelos|pelos|Meu|meu|Meus|meus|Teu|teu|Teus|teus|Seu|seu|Seus|seus|Nosso|nosso|Nossos|nossos|Vosso|vosso|Vossos|vossos|Todo|todo|Todos|todos|Outro|outro|Outros|outros|Mesmo|mesmo|Mesmos|mesmos|Próprio|próprio|Próprios|próprios|Algum|algum|Alguns|alguns|Nenhum|nenhum) (magia|magias)\b/g,
    (_, determiner, magic) => `${replacements[determiner]} ${magic}`,
  )
}

function restoreTerms(value) {
  return normalizePortugueseMagicAgreement(value
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
    .replace(/\bvalor em massa\b/gi, 'valor de Volume'))
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
  if (cache[cacheKey]) {
    const normalized = normalizePortugueseMagicAgreement(cache[cacheKey])
    cache[cacheKey] = normalized
    return normalized
  }

  const translated = normalizePortugueseMagicAgreement(await requestTranslation(value))
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
        name: translateTechnicalBestiaryActionName(action.name) ?? await translate(action.name),
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
  const defense = translateSpellDefense(data.defense)

  return translationRecord(original, {
    name: await translate(data.name),
    description: await translate(data.description),
    castingTime: await translate(data.castingTime),
    range: await translate(data.range),
    target: await translate(data.target),
    ...(data.area ? { area: await translate(data.area) } : {}),
    duration: await translate(data.duration),
    ...(data.defense ? { defense: defense ?? await translate(data.defense) } : {}),
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
  if (translations.length > 400) {
    const chunks = Array.from(
      { length: Math.ceil(translations.length / 400) },
      (_, index) => translations.slice(index * 400, (index + 1) * 400),
    )
    const chunkDefinitions = chunks.map((chunk) => (
      `  definePathfinder2eContentTranslations(`
        + `/* PF2E_GENERATED_CHUNK_START */${JSON.stringify(chunk, null, 2)}`
        + '/* PF2E_GENERATED_CHUNK_END */)'
    )).join(',\n')
    writeFileSync(
      path,
      `import { definePathfinder2eContentTranslations } from '${importPath}'\n\n`
        + `const ${exportName}_CHUNKS = [\n${chunkDefinitions}\n] as const\n\n`
        + `export const ${exportName} = definePathfinder2eContentTranslations(`
        + `${exportName}_CHUNKS.flat())\n`,
    )
    return
  }

  writeFileSync(
    path,
    `import type { Pathfinder2eContentTranslation } from '${importPath}'\n\n`
      + `export const ${exportName}: readonly Pathfinder2eContentTranslation[] = `
      + `${JSON.stringify(translations, null, 2)}\n`,
  )
}

function sanitizeExistingTranslatedText(value) {
  return normalizePortugueseMagicAgreement(value
    .replace(
      /\[\[\/(?:r|gmr|br)\s+([^\]#]+?)(?:\s+#[^\]]*)?\]\](?:\{[^}\n]*\})?/gi,
      (_, formula) => formula.trim(),
    )
    .replace(
      /\[\[\/(?:act|agir)\s+([^\]]+)\]\](?:\{[^}\n]*\})?/gi,
      (_, command) => {
        const [action = 'ação', ...options] = command.trim().split(/\s+/)
        const difficultyClass = options
          .map((option) => option.match(/^(?:dc|cd)=(\d+)$/i)?.[1])
          .find(Boolean)
        const normalizedAction = [action, ...options.filter((option) => !/^(?:dc|cd|show-dc)=/i.test(option))]
          .join(' ')
          .toLowerCase()
        const labels = {
          escape: 'Escapar',
          hide: 'Esconder-se',
          'se esconder': 'Esconder-se',
          demoralize: 'Desmoralizar',
          desmoralizar: 'Desmoralizar',
        }
        return `${labels[normalizedAction] ?? normalizedAction.replaceAll('-', ' ')}${difficultyClass ? ` CD ${difficultyClass}` : ''}`
      },
    )
    .replace(/\|(?:options|opções):[^\]\n]+\]/gi, ''))
}

function sanitizeExistingTranslationRecord(original, translation) {
  function sanitizeValue(value) {
    if (typeof value === 'string') return sanitizeExistingTranslatedText(value)
    if (Array.isArray(value)) return value.map(sanitizeValue)
    if (value && typeof value === 'object') {
      return Object.fromEntries(
        Object.entries(value).map(([key, nestedValue]) => [key, sanitizeValue(nestedValue)]),
      )
    }
    return value
  }

  const fields = sanitizeValue(translation.fields)
  const originalActions = Array.isArray(original.data?.actions)
    ? new Map(original.data.actions.map((action) => [action.id, action]))
    : null

  if (originalActions && fields.actions && typeof fields.actions === 'object') {
    fields.actions = Object.fromEntries(
      Object.entries(fields.actions).map(([actionId, actionFields]) => {
        const originalAction = originalActions.get(actionId)
        const translatedName = originalAction
          ? translateTechnicalBestiaryActionName(originalAction.name)
          : null
        if (
          !translatedName
          || !actionFields
          || typeof actionFields !== 'object'
          || Array.isArray(actionFields)
        ) {
          return [actionId, actionFields]
        }
        return [actionId, { ...actionFields, name: translatedName }]
      }),
    )
  }

  return {
    ...translation,
    sourceTranslatableHash: original.translatableHash,
    fields,
  }
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

if (process.argv.includes('--normalize-spell-defenses')) {
  const translationPath = resolve(catalogRoot, `spells/translations/pt-BR/${batchSlug}.ts`)
  const originalsById = new Map(spells.map((original) => [original.contentId, original]))
  const translations = readGeneratedArray(translationPath).map((translation) => {
    const original = originalsById.get(translation.contentId)
    if (!original) throw new Error(`Missing original for translation ${translation.contentId}`)

    const defense = translateSpellDefense(original.data.defense)
    if (!defense) return translation

    return {
      ...translation,
      fields: {
        ...translation.fields,
        defense,
      },
    }
  })

  writeTranslations(
    translationPath,
    '../../../records',
    `PATHFINDER_2E_${batchExportToken}_SPELLS_PT_BR`,
    translations,
  )
  console.log(JSON.stringify({
    batch: batchNumber,
    normalizedSpellDefenses: translations.filter((translation) => translation.fields.defense).length,
  }, null, 2))
  process.exit(0)
}

if (process.argv.includes('--sanitize-existing')) {
  const domains = [
    {
      originals: bestiary,
      translationPath: resolve(catalogRoot, `bestiary/translations/pt-BR/${batchSlug}.ts`),
      importPath: '../../../records',
      exportName: `PATHFINDER_2E_${batchExportToken}_BESTIARY_PT_BR`,
    },
    {
      originals: spells,
      translationPath: resolve(catalogRoot, `spells/translations/pt-BR/${batchSlug}.ts`),
      importPath: '../../../records',
      exportName: `PATHFINDER_2E_${batchExportToken}_SPELLS_PT_BR`,
    },
    {
      originals: items,
      translationPath: resolve(catalogRoot, `items/translations/pt-BR/${batchSlug}.ts`),
      importPath: '../../../records',
      exportName: `PATHFINDER_2E_${batchExportToken}_ITEMS_PT_BR`,
    },
  ]

  for (const domain of domains) {
    const originalsById = new Map(domain.originals.map((original) => [original.contentId, original]))
    const translations = readGeneratedArray(domain.translationPath).map((translation) => {
      const original = originalsById.get(translation.contentId)
      if (!original) throw new Error(`Missing original for translation ${translation.contentId}`)
      return sanitizeExistingTranslationRecord(original, translation)
    })
    writeTranslations(domain.translationPath, domain.importPath, domain.exportName, translations)
  }

  console.log(JSON.stringify({
    batch: batchNumber,
    sanitizedExistingTranslations: {
      bestiary: bestiary.length,
      spells: spells.length,
      items: items.length,
    },
  }, null, 2))
  process.exit(0)
}

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
