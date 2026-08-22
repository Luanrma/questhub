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
type Provenance = 'questhub-reviewed' | 'upstream' | 'editorial-draft' | 'empty-source'
type DraftEntry = {
  name: string
  description: string
  provenance: { name: Provenance; description: Provenance }
}
type TranslationTask = {
  id: number
  definitionKey: string
  field: 'name' | 'description'
  source: string
  prefix: string
}

const artifactDir = path.resolve('qh-eff-016-artifact')
const inventory = JSON.parse(await readFile(path.join(artifactDir, 'effect-inventory.json'), 'utf8')) as Inventory
const upstream = JSON.parse(await readFile(path.join(artifactDir, 'upstream-pt-br.json'), 'utf8')) as Upstream
const partialFile = path.join(artifactDir, 'machine-draft.partial.json')
const finalFile = path.join(artifactDir, 'machine-draft.json')

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
    [/\bcondição desajeitada\b/gi, 'condição desajeitado'],
    [/\bcondição assustada\b/gi, 'condição assustado'],
    [/\bcondição doente\b/gi, 'condição enjoado'],
    [/\bcondição enjoada\b/gi, 'condição enjoado'],
    [/\bfora de guarda\b/gi, 'desprevenido'],
    [/\bdesprevenida\b/gi, 'desprevenido'],
    [/\bteste plano\b/gi, 'teste simples'],
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
    if (attempt < 9 && (response.status === 429 || response.status >= 500)) {
      const delay = Math.min(30_000, 750 * 2 ** attempt)
      console.log(`translation endpoint ${response.status}; retrying in ${delay}ms`)
      await new Promise((resolve) => setTimeout(resolve, delay))
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

function marker(id: number) {
  return `[[QH${id}]]`
}

async function translateBatch(tasks: TranslationTask[]): Promise<Map<number, string>> {
  if (!tasks.length) return new Map()
  const input = tasks.map((task) => `${marker(task.id)}\n${task.source}`).join('\n')
  const translated = await translateGoogle(input)
  const positions = tasks
    .map((task) => ({ task, index: translated.indexOf(marker(task.id)) }))
    .filter((entry) => entry.index >= 0)
    .sort((a, b) => a.index - b.index)

  if (positions.length !== tasks.length) {
    if (tasks.length === 1) {
      return new Map([[tasks[0].id, await translateGoogle(tasks[0].source)]])
    }
    const middle = Math.ceil(tasks.length / 2)
    const left = await translateBatch(tasks.slice(0, middle))
    await new Promise((resolve) => setTimeout(resolve, 250))
    const right = await translateBatch(tasks.slice(middle))
    return new Map([...left, ...right])
  }

  const output = new Map<number, string>()
  for (let i = 0; i < positions.length; i += 1) {
    const current = positions[i]
    const next = positions[i + 1]
    const start = current.index + marker(current.task.id).length
    const end = next?.index ?? translated.length
    output.set(current.task.id, translated.slice(start, end).trim())
  }
  return output
}

const results: Record<string, DraftEntry> = {}
const tasks: TranslationTask[] = []
let nextTaskId = 1
for (const effect of inventory.effects) {
  const upstreamTranslation = upstream.packs[effect.sourcePack]?.[effect.name]
  const reviewedName = effect.existingPtBr?.name?.trim()
  const upstreamName = upstreamTranslation?.name?.trim()
  const reviewedDescription = effect.existingPtBr?.description?.trim()
  const upstreamDescription = upstreamTranslation?.description?.trim()
  const sourceDescription = presentPathfinder2eActiveEffectDescription(effect.description, 'en-US').description
  const { prefix, body } = titleParts(effect.name)

  results[effect.definitionKey] = {
    name: normalizeTerminology(reviewedName || upstreamName || ''),
    description: normalizeTerminology(
      reviewedDescription
        ? presentPathfinder2eActiveEffectDescription(reviewedDescription, 'pt-BR').description
        : upstreamDescription
          ? presentPathfinder2eActiveEffectDescription(upstreamDescription, 'pt-BR').description
          : '',
    ),
    provenance: {
      name: reviewedName ? 'questhub-reviewed' : upstreamName ? 'upstream' : 'editorial-draft',
      description: reviewedDescription
        ? 'questhub-reviewed'
        : upstreamDescription
          ? 'upstream'
          : sourceDescription
            ? 'editorial-draft'
            : 'empty-source',
    },
  }

  if (!reviewedName && !upstreamName) {
    tasks.push({ id: nextTaskId++, definitionKey: effect.definitionKey, field: 'name', source: body, prefix })
  }
  if (!reviewedDescription && !upstreamDescription && sourceDescription) {
    tasks.push({ id: nextTaskId++, definitionKey: effect.definitionKey, field: 'description', source: sourceDescription, prefix: '' })
  }
}

const batches: TranslationTask[][] = []
let batch: TranslationTask[] = []
let chars = 0
for (const task of tasks) {
  const cost = task.source.length + marker(task.id).length + 2
  if (batch.length && chars + cost > 2800) {
    batches.push(batch)
    batch = []
    chars = 0
  }
  batch.push(task)
  chars += cost
}
if (batch.length) batches.push(batch)

console.log(`translation tasks: ${tasks.length}; batches: ${batches.length}`)
let completed = 0
for (let batchIndex = 0; batchIndex < batches.length; batchIndex += 1) {
  const currentBatch = batches[batchIndex]
  const translated = await translateBatch(currentBatch)
  for (const task of currentBatch) {
    const value = translated.get(task.id)
    if (!value?.trim()) throw new Error(`empty translation for task ${task.id} (${task.definitionKey} ${task.field})`)
    if (task.field === 'name') {
      results[task.definitionKey].name = `${task.prefix}${normalizeTerminology(value)}`
    } else {
      results[task.definitionKey].description = normalizeTerminology(value)
    }
    completed += 1
  }

  if ((batchIndex + 1) % 10 === 0 || batchIndex + 1 === batches.length) {
    console.log(`translated ${completed}/${tasks.length} fields (${batchIndex + 1}/${batches.length} batches)`)
    await writeFile(
      partialFile,
      JSON.stringify({ definitions: inventory.effects.length, translatedFields: completed, entries: results }, null, 2),
      'utf8',
    )
  }
  await new Promise((resolve) => setTimeout(resolve, 350))
}

for (const effect of inventory.effects) {
  const entry = results[effect.definitionKey]
  if (!entry.name.trim()) throw new Error(`missing translated name: ${effect.definitionKey}`)
  if (effect.description.trim() && !entry.description.trim()) {
    throw new Error(`missing translated description: ${effect.definitionKey}`)
  }
}

await writeFile(
  finalFile,
  JSON.stringify({
    generatedAt: new Date().toISOString(),
    upstream: { repository: upstream.repository, commit: upstream.commit },
    definitions: inventory.effects.length,
    translatedFields: completed,
    entries: results,
  }, null, 2),
  'utf8',
)
