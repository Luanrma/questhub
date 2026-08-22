import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { presentPathfinder2eActiveEffectDescription } from '../apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-description.ts'

type Translation = { name?: string; description?: string }
type Effect = {
  definitionKey: string
  sourcePack: string
  sourceId: string
  name: string
  description: string
  existingPtBr: Translation | null
}
type Inventory = { effects: Effect[] }
type Upstream = { repository: string; commit: string; packs: Record<string, Record<string, Translation>> }

const artifactDir = path.resolve('qh-eff-016-artifact')
const inventory = JSON.parse(await readFile(path.join(artifactDir, 'effect-inventory.json'), 'utf8')) as Inventory
const upstream = JSON.parse(await readFile(path.join(artifactDir, 'upstream-pt-br.json'), 'utf8')) as Upstream
const separator = '\uE000'

function titleParts(name: string) {
  if (name.startsWith('Spell Effect: ')) return { prefix: 'Efeito de Magia: ', body: name.slice('Spell Effect: '.length) }
  if (name.startsWith('Effect: ')) return { prefix: 'Efeito: ', body: name.slice('Effect: '.length) }
  if (name.startsWith('Stance: ')) return { prefix: 'Postura: ', body: name.slice('Stance: '.length) }
  return { prefix: '', body: name }
}

function normalizeTerminology(value: string) {
  let text = value
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  const replacements: Array<[RegExp, string]> = [
    [/\bbônus de status\b/gi, 'bônus de estado'],
    [/\bpenalidade de status\b/gi, 'penalidade de estado'],
    [/\bbônus circunstancial\b/gi, 'bônus de circunstância'],
    [/\bpenalidade circunstancial\b/gi, 'penalidade de circunstância'],
    [/\bjogadas de salvamento\b/gi, 'salvamentos'],
    [/\btestes de resistência de Fortitude\b/gi, 'salvamentos de Fortitude'],
    [/\btestes de resistência de Reflexos?\b/gi, 'salvamentos de Reflexos'],
    [/\btestes de resistência de Vontade\b/gi, 'salvamentos de Vontade'],
    [/\bchecagens\b/gi, 'testes'],
    [/\bchecagem\b/gi, 'teste'],
    [/\bCA\s*\(AC\)\b/g, 'CA'],
    [/\bAC\b/g, 'CA'],
    [/\bDC\b/g, 'CD'],
    [/\bpontos de vida temporários\b/gi, 'Pontos de Vida temporários'],
    [/\bpontos de vida\b/gi, 'Pontos de Vida'],
    [/\bdano espiritual\b/gi, 'dano espiritual'],
    [/\bdano vazio\b/gi, 'dano de vazio'],
    [/\bdano de vazio\b/gi, 'dano de vazio'],
    [/\bdano de vitalidade\b/gi, 'dano de vitalidade'],
    [/\bcondição desajeitada\b/gi, 'condição desajeitado'],
    [/\bcondição assustada\b/gi, 'condição assustado'],
    [/\bcondição doente\b/gi, 'condição enjoado'],
    [/\bcondição enjoada\b/gi, 'condição enjoado'],
    [/\bfora de guarda\b/gi, 'desprevenido'],
    [/\bdesprevenida\b/gi, 'desprevenido'],
    [/\bteste plano\b/gi, 'teste simples'],
    [/\brolagem de iniciativa\b/gi, 'rolagem de iniciativa'],
  ]
  for (const [pattern, replacement] of replacements) text = text.replace(pattern, replacement)

  const feetToMeters: Record<string, string> = {
    '5': '1,5 metro', '10': '3 metros', '15': '4,5 metros', '20': '6 metros', '25': '7,5 metros',
    '30': '9 metros', '35': '10,5 metros', '40': '12 metros', '45': '13,5 metros', '50': '15 metros',
    '60': '18 metros', '80': '24 metros', '100': '30 metros', '120': '36 metros', '500': '150 metros',
  }
  text = text.replace(/\b(5|10|15|20|25|30|35|40|45|50|60|80|100|120|500)\s*(?:pés|pé)\b/gi, (_match, feet: string) => feetToMeters[feet] ?? `${feet} pés`)
  return text
}

async function translateGoogle(value: string, attempt = 0): Promise<string> {
  if (!value.trim()) return ''
  const params = new URLSearchParams({ client: 'gtx', sl: 'en', tl: 'pt', dt: 't', q: value })
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`)
  if (!response.ok) {
    if (attempt < 5 && (response.status === 429 || response.status >= 500)) {
      await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1) ** 2))
      return translateGoogle(value, attempt + 1)
    }
    throw new Error(`translation request failed: ${response.status}`)
  }
  const payload = await response.json() as unknown
  if (!Array.isArray(payload) || !Array.isArray(payload[0])) throw new Error('unexpected translation response')
  return payload[0]
    .filter(Array.isArray)
    .map((segment: unknown[]) => typeof segment[0] === 'string' ? segment[0] : '')
    .join('')
}

async function translateMissing(effect: Effect, upstreamTranslation: Translation | undefined) {
  const preferredName = effect.existingPtBr?.name?.trim() || upstreamTranslation?.name?.trim() || ''
  const preferredDescription = effect.existingPtBr?.description?.trim() || upstreamTranslation?.description?.trim() || ''
  const { prefix, body } = titleParts(effect.name)
  const sourceDescription = presentPathfinder2eActiveEffectDescription(effect.description, 'en-US').description

  let translatedBody = ''
  let translatedDescription = ''
  if (!preferredName || (!preferredDescription && sourceDescription)) {
    const combined = `${!preferredName ? body : ''}${separator}${!preferredDescription ? sourceDescription : ''}`
    const translated = await translateGoogle(combined)
    const split = translated.split(separator)
    if (split.length === 2) {
      translatedBody = split[0] ?? ''
      translatedDescription = split[1] ?? ''
    } else {
      if (!preferredName) translatedBody = await translateGoogle(body)
      if (!preferredDescription && sourceDescription) translatedDescription = await translateGoogle(sourceDescription)
    }
  }

  const localizedName = preferredName || `${prefix}${normalizeTerminology(translatedBody)}`
  const rawDescription = preferredDescription
    ? presentPathfinder2eActiveEffectDescription(preferredDescription, 'pt-BR').description
    : translatedDescription
  return {
    name: normalizeTerminology(localizedName),
    description: normalizeTerminology(rawDescription),
    provenance: {
      name: effect.existingPtBr?.name?.trim() ? 'questhub-reviewed' : upstreamTranslation?.name?.trim() ? 'upstream' : 'editorial-draft',
      description: effect.existingPtBr?.description?.trim() ? 'questhub-reviewed' : upstreamTranslation?.description?.trim() ? 'upstream' : sourceDescription ? 'editorial-draft' : 'empty-source',
    },
  }
}

const results: Record<string, Awaited<ReturnType<typeof translateMissing>>> = {}
const concurrency = 8
let cursor = 0
let completed = 0
async function worker() {
  while (true) {
    const index = cursor++
    if (index >= inventory.effects.length) return
    const effect = inventory.effects[index]
    const upstreamTranslation = upstream.packs[effect.sourcePack]?.[effect.name]
    results[effect.definitionKey] = await translateMissing(effect, upstreamTranslation)
    completed += 1
    if (completed % 100 === 0 || completed === inventory.effects.length) {
      console.log(`translated ${completed}/${inventory.effects.length}`)
    }
  }
}
await Promise.all(Array.from({ length: concurrency }, () => worker()))

await writeFile(
  path.join(artifactDir, 'machine-draft.json'),
  JSON.stringify({
    generatedAt: new Date().toISOString(),
    upstream: { repository: upstream.repository, commit: upstream.commit },
    definitions: inventory.effects.length,
    entries: results,
  }, null, 2),
  'utf8',
)
