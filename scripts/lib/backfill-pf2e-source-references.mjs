import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { basename, join, relative, resolve, sep } from 'node:path'
import {
  collectPf2eSourceReferences,
  createPf2eSourceReferenceResolver,
} from './pf2e-source-references.mjs'

function walkFiles(directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name))
    .flatMap((entry) => {
      const path = join(directory, entry.name)
      return entry.isDirectory() ? walkFiles(path) : [path]
    })
}

function walkJson(directory) {
  return walkFiles(directory).filter((file) => file.endsWith('.json'))
}

function readManifestPackDirectories(sourceRoot) {
  const manifestPath = join(sourceRoot, 'system.pf2e.json')
  if (!existsSync(manifestPath)) return new Map()

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  const byName = new Map()

  for (const pack of Array.isArray(manifest?.packs) ? manifest.packs : []) {
    if (typeof pack?.name !== 'string' || typeof pack?.path !== 'string') continue
    const normalizedRelative = pack.path.replaceAll('\\', '/').replace(/^\.\//, '')
    const candidates = [
      join(sourceRoot, normalizedRelative),
      ...(normalizedRelative.startsWith('packs/')
        ? [join(sourceRoot, 'packs', 'pf2e', normalizedRelative.slice('packs/'.length))]
        : []),
    ].filter((candidate, index, all) => all.indexOf(candidate) === index)
    const existing = candidates.filter((candidate) => (
      existsSync(candidate) && statSync(candidate).isDirectory()
    ))
    if (existing.length === 1) byName.set(pack.name, existing[0])
  }

  return byName
}

function publicationTitle(document) {
  const publication = document?.system?.publication ?? document?.system?.details?.publication
  return typeof publication?.title === 'string' ? publication.title.trim() : null
}

function indexSourceDocuments(sourceRoot) {
  const packDirectories = readManifestPackDirectories(sourceRoot)
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

    const packNames = [...packDirectories.entries()]
      .filter(([, directory]) => file === directory || file.startsWith(`${directory}${sep}`))
      .map(([name]) => name)

    const entries = bySourceId.get(value._id) ?? []
    entries.push({
      file,
      fileKey: basename(file, '.json'),
      packNames,
      publicationTitle: publicationTitle(value),
      value,
    })
    bySourceId.set(value._id, entries)
  }

  return bySourceId
}

function narrow(candidates, predicate) {
  const filtered = candidates.filter(predicate)
  return filtered.length > 0 ? filtered : candidates
}

function sourceDocumentForRecord(record, sourceDocuments) {
  let candidates = sourceDocuments.get(record.source?.sourceId) ?? []
  const sourceId = record.source?.sourceId ?? 'missing-source-id'
  const slug = typeof record.source?.slug === 'string' ? record.source.slug : null
  const sourcePack = typeof record.source?.sourcePack === 'string' ? record.source.sourcePack : null
  const expectedPublication = typeof record.source?.publicationTitle === 'string'
    ? record.source.publicationTitle.trim()
    : null

  if (slug) {
    candidates = narrow(candidates, (entry) => (
      entry.fileKey === slug || entry.value?.system?.slug === slug
    ))
  }
  if (sourcePack) {
    candidates = narrow(candidates, (entry) => entry.packNames.includes(sourcePack))
  }
  if (expectedPublication) {
    candidates = narrow(candidates, (entry) => entry.publicationTitle === expectedPublication)
  }
  if (record.domain === 'SPELL') {
    candidates = narrow(candidates, (entry) => entry.value?.type === 'spell')
  } else if (record.domain === 'BESTIARY') {
    candidates = narrow(candidates, (entry) => ['npc', 'hazard'].includes(entry.value?.type))
  }

  const uniqueByFile = new Map(candidates.map((candidate) => [candidate.file, candidate]))
  if (uniqueByFile.size !== 1) {
    throw new Error(
      `Expected exactly one source document for ${record.contentId} (${sourceId}:${slug ?? 'no-slug'}), found ${uniqueByFile.size}`,
    )
  }

  return [...uniqueByFile.values()][0].value
}

function readGeneratedArray(source, path) {
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
  if (start < 0 || end < start) throw new Error(`Generated original array not found: ${path}`)
  return JSON.parse(source.slice(start, end + 2))
}

function serialize(value) {
  return JSON.stringify(value, null, 2)
}

function rewriteGeneratedArray(source, records, path) {
  const chunkPattern = /\/\* PF2E_GENERATED_CHUNK_START \*\/([\s\S]*?)\/\* PF2E_GENERATED_CHUNK_END \*\//g
  const chunks = [...source.matchAll(chunkPattern)]
  if (chunks.length > 0) {
    const lengths = chunks.map((match) => JSON.parse(match[1]).length)
    let offset = 0
    return source.replace(chunkPattern, (_, originalChunk) => {
      const expectedLength = lengths.shift() ?? JSON.parse(originalChunk).length
      const chunk = records.slice(offset, offset + expectedLength)
      offset += expectedLength
      return `/* PF2E_GENERATED_CHUNK_START */${serialize(chunk)}/* PF2E_GENERATED_CHUNK_END */`
    })
  }

  const exportStart = source.indexOf('export const')
  const assignment = source.indexOf(' = [', exportStart)
  const wrappedAssignment = source.indexOf('([', exportStart)
  const wrapped = assignment < 0 && wrappedAssignment >= 0
  const start = assignment >= 0 ? assignment + 3 : wrappedAssignment + 1
  const end = source.lastIndexOf(wrapped ? '\n])' : '\n]')
  if (start < 0 || end < start) throw new Error(`Generated original array not found: ${path}`)
  return `${source.slice(0, start)}${serialize(records)}${source.slice(end + 2)}`
}

function withoutSourceReferences(record) {
  const copy = { ...record }
  delete copy.sourceReferences
  return copy
}

function sameJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right)
}

function enrichRecord(record, sourceDocuments, resolveTarget) {
  const sourceDocument = sourceDocumentForRecord(record, sourceDocuments)
  const sourceReferences = collectPf2eSourceReferences(sourceDocument, { resolveTarget })
  const enriched = { ...record }
  if (sourceReferences.length > 0) enriched.sourceReferences = sourceReferences
  else delete enriched.sourceReferences

  if (!sameJson(withoutSourceReferences(record), withoutSourceReferences(enriched))) {
    throw new Error(`Backfill attempted to mutate canonical record fields: ${record.contentId}`)
  }

  return enriched
}

function originalCatalogFiles(outputRoot) {
  return walkFiles(outputRoot).filter((file) => {
    if (!file.endsWith('.ts')) return false
    const segments = relative(outputRoot, file).split(sep)
    return segments.includes('original')
  })
}

export function backfillPf2eCatalogSourceReferences({
  sourceRoot,
  outputRoot = resolve('apps/api/src/game_systems/pathfinder_2e/content_catalog'),
  write = true,
}) {
  if (!existsSync(sourceRoot)) throw new Error(`PF2e source checkout not found: ${sourceRoot}`)
  if (!existsSync(outputRoot)) throw new Error(`PF2e catalog not found: ${outputRoot}`)

  const sourceDocuments = indexSourceDocuments(sourceRoot)
  const resolveTarget = createPf2eSourceReferenceResolver(sourceRoot)
  const files = originalCatalogFiles(outputRoot)

  let recordCount = 0
  let recordsWithReferences = 0
  let referenceCount = 0
  const changedFiles = []

  for (const path of files) {
    const source = readFileSync(path, 'utf8')
    if (!source.includes('Pathfinder2eOriginalContentRecord')) continue

    const records = readGeneratedArray(source, path)
    let changed = false
    const enriched = records.map((record) => {
      const result = enrichRecord(record, sourceDocuments, resolveTarget)
      recordCount += 1
      referenceCount += result.sourceReferences?.length ?? 0
      if ((result.sourceReferences?.length ?? 0) > 0) recordsWithReferences += 1
      if (!sameJson(record.sourceReferences ?? null, result.sourceReferences ?? null)) changed = true
      return result
    })

    if (!changed) continue
    changedFiles.push(relative(outputRoot, path).replaceAll('\\', '/'))
    if (write) writeFileSync(path, rewriteGeneratedArray(source, enriched, path))
  }

  return {
    fileCount: files.length,
    recordCount,
    recordsWithReferences,
    referenceCount,
    changedFileCount: changedFiles.length,
    changedFiles,
  }
}
