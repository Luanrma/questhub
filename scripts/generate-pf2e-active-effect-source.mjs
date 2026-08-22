import { existsSync, readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const EXPECTED_SOURCE_COMMIT = '01114da5851f31404078d8020809b13e4000bc4b'
const TARGET_TYPES = new Set(['condition', 'effect', 'affliction'])
const SOURCE_INDEX_FILES = ['bestiary.ts', 'spells.ts', 'items.ts']
const DEFAULT_OUTPUT = resolve(
  'apps/api/src/game_systems/pathfinder_2e/content_catalog/generated/active-effect-source.ts',
)
const POLARITY_MANIFEST = resolve(
  'apps/api/src/game_systems/pathfinder_2e/content_catalog/active-effect-polarity.json',
)

const sourceRoot = resolve(process.argv[2] ?? '.tmp/pf2e-source')
const checkOnly = process.argv.includes('--check')
const outputArgumentIndex = process.argv.indexOf('--output')
const outputPath = outputArgumentIndex >= 0
  ? resolve(process.argv[outputArgumentIndex + 1])
  : DEFAULT_OUTPUT

function fail(message) {
  throw new Error(`[QH-EFF-012] ${message}`)
}

function walkJson(directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name))
    .flatMap((entry) => {
      const path = join(directory, entry.name)
      if (entry.isDirectory()) return walkJson(path)
      return entry.isFile() && path.endsWith('.json') && entry.name !== '_folders.json' ? [path] : []
    })
}

function assertSourceRevision() {
  const revision = spawnSync('git', ['-C', sourceRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' })
  if (revision.error) throw revision.error
  if (revision.status !== 0) {
    fail(`unable to read PF2e source revision: ${revision.stderr?.trim() || 'git failed'}`)
  }
  const sourceCommit = revision.stdout.trim()
  if (sourceCommit !== EXPECTED_SOURCE_COMMIT) {
    fail(`source commit mismatch: expected ${EXPECTED_SOURCE_COMMIT}, received ${sourceCommit}`)
  }
  return sourceCommit
}

function readManifestPackDirectories() {
  const manifestPath = join(sourceRoot, 'system.pf2e.json')
  if (!existsSync(manifestPath)) fail(`missing source manifest: ${manifestPath}`)
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  const byName = new Map()

  for (const pack of Array.isArray(manifest?.packs) ? manifest.packs : []) {
    if (typeof pack?.name !== 'string' || typeof pack?.path !== 'string') continue
    const normalized = pack.path.replaceAll('\\', '/').replace(/^\.\//, '')
    const candidates = [
      join(sourceRoot, normalized),
      ...(normalized.startsWith('packs/')
        ? [join(sourceRoot, 'packs', 'pf2e', normalized.slice('packs/'.length))]
        : []),
    ].filter((candidate, index, values) => values.indexOf(candidate) === index)
    const existing = candidates.filter((candidate) => (
      existsSync(candidate) && statSync(candidate).isDirectory()
    ))
    if (existing.length === 1) byName.set(pack.name, existing[0])
  }

  return byName
}

function parseReferenceIndexes() {
  const generatedRoot = resolve(
    'apps/api/src/game_systems/pathfinder_2e/content_catalog/source_reference_index/generated',
  )
  const targets = new Map()

  for (const fileName of SOURCE_INDEX_FILES) {
    const path = join(generatedRoot, fileName)
    const source = readFileSync(path, 'utf8')

    for (const line of source.split(/\r?\n/)) {
      const match = line.match(/^\s*"[^"]+":\s*(\[.*\]),\s*$/)
      if (!match) continue
      const tuples = JSON.parse(match[1])
      for (const tuple of tuples) {
        const uuid = tuple[3]
        const sourceId = tuple[6]
        const kind = tuple[8]
        if (!TARGET_TYPES.has(kind) || typeof sourceId !== 'string' || typeof uuid !== 'string') continue

        const uuidMatch = uuid.match(/^Compendium\.pf2e\.([^.]+)\.Item\.(.+)$/)
        if (!uuidMatch) continue
        const sourcePack = uuidMatch[1]
        const definitionKey = `${sourcePack}:${sourceId}`
        const existing = targets.get(definitionKey)
        if (existing && existing.kind !== kind) {
          fail(`conflicting target kind for ${definitionKey}: ${existing.kind} vs ${kind}`)
        }
        targets.set(definitionKey, { definitionKey, sourcePack, sourceId, kind })
      }
    }
  }

  return targets
}

function readPolarityManifest() {
  if (!existsSync(POLARITY_MANIFEST)) fail(`missing polarity manifest: ${POLARITY_MANIFEST}`)
  const parsed = JSON.parse(readFileSync(POLARITY_MANIFEST, 'utf8'))
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) fail('invalid polarity manifest')
  const allowed = new Set(['BENEFICIAL', 'HARMFUL', 'NEUTRAL'])
  for (const [definitionKey, polarity] of Object.entries(parsed)) {
    if (!allowed.has(polarity)) fail(`invalid polarity for ${definitionKey}: ${String(polarity)}`)
  }
  return parsed
}

function readDocument(path) {
  const document = JSON.parse(readFileSync(path, 'utf8'))
  if (!document || typeof document !== 'object' || Array.isArray(document)) {
    fail(`invalid PF2e document: ${path}`)
  }
  return document
}

function indexPackBySourceId(directory) {
  const byId = new Map()
  for (const path of walkJson(directory)) {
    const document = readDocument(path)
    if (typeof document._id !== 'string' || !document._id) continue
    const entries = byId.get(document._id) ?? []
    entries.push({ path, document })
    byId.set(document._id, entries)
  }
  return byId
}

function description(document) {
  const value = document?.system?.description?.value
  return typeof value === 'string' ? value.trim() : ''
}

function stringOrNull(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function conditionValue(document) {
  const value = document?.system?.value
  if (!value || typeof value !== 'object' || typeof value.isValued !== 'boolean') return null
  const baseValue = typeof value.value === 'number' && Number.isFinite(value.value)
    ? value.value
    : null
  return { isValued: value.isValued, baseValue }
}

function sourceRecord(target, document, polarityManifest) {
  const polarity = polarityManifest[target.definitionKey]
  if (!polarity) fail(`missing explicit polarity classification: ${target.definitionKey}`)
  return {
    definitionKey: target.definitionKey,
    kind: target.kind,
    source: {
      sourcePack: target.sourcePack,
      sourceId: target.sourceId,
      slug: stringOrNull(document?.system?.slug),
      publicationTitle: stringOrNull(document?.system?.publication?.title),
      imagePath: stringOrNull(document?.img),
    },
    name: String(document?.name ?? '').trim(),
    description: description(document, target.definitionKey),
    polarity,
    group: stringOrNull(document?.system?.group),
    conditionValue: target.kind === 'condition' ? conditionValue(document) : null,
    schemaVersion: 1,
  }
}

function canonicalConditionTargets(packDirectory) {
  const targets = []
  for (const path of walkJson(packDirectory)) {
    const document = readDocument(path)
    if (typeof document._id !== 'string' || !document._id) {
      fail(`condition without source id: ${relative(sourceRoot, path)}`)
    }
    targets.push({
      definitionKey: `conditionitems:${document._id}`,
      sourcePack: 'conditionitems',
      sourceId: document._id,
      kind: 'condition',
      document,
    })
  }
  return targets
}

function collectSourceRecords(packDirectories, polarityManifest) {
  const references = parseReferenceIndexes()
  const records = new Map()

  const conditionsDirectory = packDirectories.get('conditionitems')
    ?? join(sourceRoot, 'packs', 'pf2e', 'conditions')
  if (!existsSync(conditionsDirectory)) fail('canonical conditionitems pack not found')

  for (const target of canonicalConditionTargets(conditionsDirectory)) {
    records.set(target.definitionKey, sourceRecord(target, target.document, polarityManifest))
  }

  const nonConditionTargets = [...references.values()]
    .filter((target) => target.kind !== 'condition')
    .sort((left, right) => left.definitionKey.localeCompare(right.definitionKey))
  const packIndexes = new Map()

  for (const target of nonConditionTargets) {
    const directory = packDirectories.get(target.sourcePack)
    if (!directory) fail(`source pack not found in manifest: ${target.sourcePack}`)
    let index = packIndexes.get(target.sourcePack)
    if (!index) {
      index = indexPackBySourceId(directory)
      packIndexes.set(target.sourcePack, index)
    }
    const candidates = index.get(target.sourceId) ?? []
    if (candidates.length !== 1) {
      fail(`expected one source document for ${target.definitionKey}, found ${candidates.length}`)
    }
    records.set(target.definitionKey, sourceRecord(target, candidates[0].document, polarityManifest))
  }

  const unknownManifestKeys = Object.keys(polarityManifest).filter((key) => !records.has(key))
  if (unknownManifestKeys.length > 0) {
    fail(`polarity manifest contains unpublished definitions: ${unknownManifestKeys.join(', ')}`)
  }

  return [...records.values()].sort((left, right) => (
    left.definitionKey.localeCompare(right.definitionKey)
  ))
}

function generatedSource(records) {
  return [
    '// Generated by scripts/generate-pf2e-active-effect-source.mjs.',
    `// PF2e source commit: ${EXPECTED_SOURCE_COMMIT}`,
    '// Do not edit this file manually.',
    '',
    'export type Pathfinder2eActiveEffectSourceDocument = {',
    '  definitionKey: string',
    "  kind: 'condition' | 'effect' | 'affliction'",
    '  source: {',
    '    sourcePack: string',
    '    sourceId: string',
    '    slug: string | null',
    '    publicationTitle: string | null',
    '    imagePath: string | null',
    '  }',
    '  name: string',
    '  description: string',
    "  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'",
    '  group: string | null',
    '  conditionValue: { isValued: boolean; baseValue: number | null } | null',
    '  schemaVersion: 1',
    '}',
    '',
    'export const PATHFINDER_2E_ACTIVE_EFFECT_SOURCE_DOCUMENTS = ',
    `${JSON.stringify(records, null, 2)} as const satisfies readonly Pathfinder2eActiveEffectSourceDocument[]`,
    '',
  ].join('\n')
}

const sourceCommit = assertSourceRevision()
const polarityManifest = readPolarityManifest()
const packDirectories = readManifestPackDirectories()
const records = collectSourceRecords(packDirectories, polarityManifest)
const expected = generatedSource(records)
const current = existsSync(outputPath) ? readFileSync(outputPath, 'utf8') : null
const changed = current !== expected

if (checkOnly) {
  console.log(JSON.stringify({ sourceCommit, outputPath, definitionCount: records.length, changed }, null, 2))
  if (changed) process.exitCode = 1
} else {
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, expected)
  console.log(JSON.stringify({ sourceCommit, outputPath, definitionCount: records.length, changed }, null, 2))
}
