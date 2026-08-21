import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import {
  collectPf2eSourceReferences,
  createPf2eSourceReferenceResolver,
} from './pf2e-source-references.mjs'

function walkJson(directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory)
    .sort((left, right) => left.localeCompare(right))
    .flatMap((name) => {
      const path = join(directory, name)
      return statSync(path).isDirectory()
        ? walkJson(path)
        : name.endsWith('.json') ? [path] : []
    })
}

function readGeneratedArray(source) {
  const generatedChunks = [...source.matchAll(
    /\/\* PF2E_GENERATED_CHUNK_START \*\/([\s\S]*?)\/\* PF2E_GENERATED_CHUNK_END \*\//g,
  )]
  if (generatedChunks.length > 0) {
    return generatedChunks.flatMap((match) => JSON.parse(match[1]))
  }

  const exportStart = source.indexOf('export const')
  const assignment = source.indexOf(' = [', exportStart)
  if (assignment < 0) throw new Error('Generated original array not found')
  const start = assignment + 3
  const end = source.lastIndexOf('\n]')
  if (end < start) throw new Error('Generated original array end not found')
  return JSON.parse(source.slice(start, end + 2))
}

function serialize(value) {
  return JSON.stringify(value, null, 2)
}

function rewriteGeneratedArray(source, records) {
  const chunkPattern = /\/\* PF2E_GENERATED_CHUNK_START \*\/[\s\S]*?\/\* PF2E_GENERATED_CHUNK_END \*\//g
  const chunks = [...source.matchAll(chunkPattern)]
  if (chunks.length > 0) {
    let offset = 0
    return source.replace(chunkPattern, () => {
      const chunk = records.slice(offset, offset + 400)
      offset += chunk.length
      return `/* PF2E_GENERATED_CHUNK_START */${serialize(chunk)}/* PF2E_GENERATED_CHUNK_END */`
    })
  }

  const exportStart = source.indexOf('export const')
  const assignment = source.indexOf(' = [', exportStart)
  if (assignment < 0) throw new Error('Generated original array not found')
  const start = assignment + 3
  const end = source.lastIndexOf('\n]')
  if (end < start) throw new Error('Generated original array end not found')
  return `${source.slice(0, start)}${serialize(records)}${source.slice(end + 2)}`
}

function indexSourceDocuments(sourceRoot) {
  const bySourceId = new Map()
  for (const file of walkJson(join(sourceRoot, 'packs', 'pf2e'))) {
    let value
    try {
      value = JSON.parse(readFileSync(file, 'utf8'))
    } catch {
      continue
    }
    if (!value || typeof value !== 'object' || Array.isArray(value)) continue
    if (typeof value._id !== 'string' || !value._id) continue

    const entries = bySourceId.get(value._id) ?? []
    entries.push({ file, value })
    bySourceId.set(value._id, entries)
  }
  return bySourceId
}

function sourceDocumentForRecord(record, sourceDocuments) {
  const matches = sourceDocuments.get(record.source?.sourceId) ?? []
  const slug = typeof record.source?.slug === 'string' ? record.source.slug : null
  const slugMatches = slug
    ? matches.filter((entry) => basename(entry.file, '.json') === slug)
    : []
  const candidates = slugMatches.length > 0 ? slugMatches : matches

  if (candidates.length !== 1) {
    throw new Error(
      `Expected exactly one source document for ${record.contentId} (${record.source?.sourceId}:${slug ?? 'no-slug'}), found ${candidates.length}`,
    )
  }

  return candidates[0].value
}

function enrichRecord(record, sourceDocuments, resolveTarget) {
  const sourceDocument = sourceDocumentForRecord(record, sourceDocuments)
  const sourceReferences = collectPf2eSourceReferences(sourceDocument, { resolveTarget })
  const enriched = { ...record }
  if (sourceReferences.length > 0) enriched.sourceReferences = sourceReferences
  else delete enriched.sourceReferences
  return enriched
}

export function enrichPf2eBatchSourceReferences({
  sourceRoot,
  batchNumber,
  outputRoot = resolve('apps/api/src/game_systems/pathfinder_2e/content_catalog'),
}) {
  const normalizedBatch = String(batchNumber).padStart(2, '0')
  const batchSlug = `core-remaster-exhaustive-${normalizedBatch}`
  const sourceDocuments = indexSourceDocuments(sourceRoot)
  const resolveTarget = createPf2eSourceReferenceResolver(sourceRoot)
  let referenceCount = 0
  let recordCount = 0

  for (const domain of ['bestiary', 'spells', 'items']) {
    const path = join(outputRoot, domain, 'original', `${batchSlug}.ts`)
    if (!existsSync(path)) throw new Error(`Generated original file not found: ${path}`)

    const source = readFileSync(path, 'utf8')
    const records = readGeneratedArray(source)
    const enriched = records.map((record) => {
      const result = enrichRecord(record, sourceDocuments, resolveTarget)
      referenceCount += result.sourceReferences?.length ?? 0
      recordCount += 1
      return result
    })

    writeFileSync(path, rewriteGeneratedArray(source, enriched))
  }

  return { recordCount, referenceCount }
}
