import { existsSync, readFileSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs'
import { basename, join, relative, resolve, sep } from 'node:path'
import ts from 'typescript'
import {
  collectPf2eSourceReferences,
  createPf2eSourceReferenceResolver,
} from './pf2e-source-references.mjs'

const SEMANTIC_TARGET_TYPES = new Set(['condition', 'effect', 'affliction'])

const DOMAIN_CONFIG = {
  BESTIARY: {
    file: 'bestiary.ts',
    exportName: 'PATHFINDER_2E_BESTIARY_SOURCE_REFERENCE_INDEX',
  },
  SPELL: {
    file: 'spells.ts',
    exportName: 'PATHFINDER_2E_SPELL_SOURCE_REFERENCE_INDEX',
  },
  ITEM: {
    file: 'items.ts',
    exportName: 'PATHFINDER_2E_ITEM_SOURCE_REFERENCE_INDEX',
  },
}

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

function unwrapExpression(node) {
  let current = node
  while (
    ts.isParenthesizedExpression(current)
    || ts.isAsExpression(current)
    || ts.isTypeAssertionExpression(current)
    || (typeof ts.isSatisfiesExpression === 'function' && ts.isSatisfiesExpression(current))
  ) {
    current = current.expression
  }
  return current
}

function propertyName(name, path) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
    return name.text
  }
  throw new Error(`Unsupported computed property in historical catalog file: ${path}`)
}

function valueFromAst(node, path, constants, resolving = new Set()) {
  const value = unwrapExpression(node)

  if (ts.isStringLiteral(value) || ts.isNoSubstitutionTemplateLiteral(value)) return value.text
  if (ts.isNumericLiteral(value)) return Number(value.text)
  if (value.kind === ts.SyntaxKind.TrueKeyword) return true
  if (value.kind === ts.SyntaxKind.FalseKeyword) return false
  if (value.kind === ts.SyntaxKind.NullKeyword) return null

  if (ts.isIdentifier(value)) {
    const initializer = constants.get(value.text)
    if (!initializer) {
      throw new Error(`Unsupported external identifier in historical catalog file ${path}: ${value.text}`)
    }
    if (resolving.has(value.text)) {
      throw new Error(`Circular local constant in historical catalog file ${path}: ${value.text}`)
    }
    const nextResolving = new Set(resolving)
    nextResolving.add(value.text)
    return valueFromAst(initializer, path, constants, nextResolving)
  }

  if (ts.isPrefixUnaryExpression(value)) {
    const operand = valueFromAst(value.operand, path, constants, resolving)
    if (typeof operand !== 'number') throw new Error(`Unsupported unary value in ${path}`)
    if (value.operator === ts.SyntaxKind.MinusToken) return -operand
    if (value.operator === ts.SyntaxKind.PlusToken) return operand
    throw new Error(`Unsupported unary operator in ${path}`)
  }

  if (ts.isArrayLiteralExpression(value)) {
    return value.elements.map((entry) => valueFromAst(entry, path, constants, resolving))
  }

  if (ts.isObjectLiteralExpression(value)) {
    const result = {}
    for (const property of value.properties) {
      if (!ts.isPropertyAssignment(property)) {
        throw new Error(`Unsupported non-literal property in historical catalog file: ${path}`)
      }
      result[propertyName(property.name, path)] = valueFromAst(
        property.initializer,
        path,
        constants,
        resolving,
      )
    }
    return result
  }

  throw new Error(`Unsupported expression in historical catalog file ${path}: ${value.getText()}`)
}

function localConstantInitializers(sourceFile) {
  const constants = new Map()
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue
    if (!(statement.declarationList.flags & ts.NodeFlags.Const)) continue
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue
      constants.set(declaration.name.text, declaration.initializer)
    }
  }
  return constants
}

function directRecordArray(source, path) {
  const sourceFile = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const constants = localConstantInitializers(sourceFile)

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue
    for (const declaration of statement.declarationList.declarations) {
      if (!declaration.initializer) continue
      let initializer = unwrapExpression(declaration.initializer)

      if (ts.isCallExpression(initializer) && initializer.arguments.length > 0) {
        initializer = unwrapExpression(initializer.arguments[0])
      }

      if (!ts.isArrayLiteralExpression(initializer)) continue
      const records = valueFromAst(initializer, path, constants)
      if (!Array.isArray(records)) continue
      if (records.length > 0 && !records.every((entry) => (
        entry && typeof entry === 'object' && typeof entry.contentId === 'string'
      ))) {
        continue
      }
      return records
    }
  }

  throw new Error(`Historical original array not found: ${path}`)
}

function readOriginalRecords(source, path) {
  const generatedChunks = [...source.matchAll(
    /\/\* PF2E_GENERATED_CHUNK_START \*\/([\s\S]*?)\/\* PF2E_GENERATED_CHUNK_END \*\//g,
  )]
  if (generatedChunks.length > 0) {
    return generatedChunks.flatMap((match) => JSON.parse(match[1]))
  }
  if (/export const[\s\S]*?=\s*\[\s*\]\s*$/.test(source)) return []
  return directRecordArray(source, path)
}

function originalCatalogFiles(outputRoot) {
  return walkFiles(outputRoot).filter((file) => {
    if (!file.endsWith('.ts')) return false
    const segments = relative(outputRoot, file).split(sep)
    return segments.includes('original')
  })
}

function compactReference(reference) {
  return [
    reference.syntax === 'INLINE_UUID' ? 0 : 1,
    reference.sourcePath,
    reference.sourceIndex,
    reference.uuid,
    reference.label,
    reference.owner?.sourceId ?? null,
    reference.target.sourceId ?? null,
    reference.target.slug ?? null,
    reference.target.type ?? null,
  ]
}

function generatedFileSource(exportName, entries) {
  const lines = [
    "import type { Pathfinder2eSourceReferenceTuple } from '../../source-references'",
    '',
    `export const ${exportName}: Readonly<Record<string, readonly Pathfinder2eSourceReferenceTuple[]>> = {`,
  ]

  for (const [contentId, references] of entries) {
    lines.push(`  ${JSON.stringify(contentId)}: ${JSON.stringify(references)},`)
  }

  lines.push('}', '')
  return lines.join('\n')
}

function isUnresolvedPf2eItemReference(reference) {
  return reference.target.package === 'pf2e'
    && reference.target.documentType === 'Item'
    && !reference.target.type
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
  const byDomain = new Map(Object.keys(DOMAIN_CONFIG).map((domain) => [domain, []]))

  let recordCount = 0
  let recordsWithReferences = 0
  let referenceCount = 0
  let sourceReferenceCount = 0
  let unresolvedTargetCount = 0

  for (const path of originalCatalogFiles(outputRoot)) {
    const source = readFileSync(path, 'utf8')
    if (!source.includes('Pathfinder2eOriginalContentRecord')) continue

    const records = readOriginalRecords(source, path)
    for (const record of records) {
      recordCount += 1
      if (!DOMAIN_CONFIG[record.domain]) {
        throw new Error(`Unsupported PF2e content domain in backfill: ${record.domain}`)
      }

      const sourceDocument = sourceDocumentForRecord(record, sourceDocuments)
      const allReferences = collectPf2eSourceReferences(sourceDocument, { resolveTarget })
      sourceReferenceCount += allReferences.length
      unresolvedTargetCount += allReferences.filter(isUnresolvedPf2eItemReference).length

      const retainedReferences = allReferences.filter((reference) => (
        SEMANTIC_TARGET_TYPES.has(reference.target.type)
        || isUnresolvedPf2eItemReference(reference)
      ))
      if (retainedReferences.length === 0) continue

      recordsWithReferences += 1
      referenceCount += retainedReferences.length
      byDomain.get(record.domain).push([
        record.contentId,
        retainedReferences.map(compactReference),
      ])
    }
  }

  const generatedRoot = join(outputRoot, 'source_reference_index', 'generated')
  if (write) mkdirSync(generatedRoot, { recursive: true })

  const changedFiles = []
  for (const [domain, config] of Object.entries(DOMAIN_CONFIG)) {
    const entries = byDomain.get(domain)
      .sort((left, right) => left[0].localeCompare(right[0]))
    const expected = generatedFileSource(config.exportName, entries)
    const path = join(generatedRoot, config.file)
    const current = existsSync(path) ? readFileSync(path, 'utf8') : null
    if (current === expected) continue

    changedFiles.push(relative(outputRoot, path).replaceAll('\\', '/'))
    if (write) writeFileSync(path, expected)
  }

  return {
    fileCount: originalCatalogFiles(outputRoot).length,
    recordCount,
    sourceReferenceCount,
    recordsWithReferences,
    referenceCount,
    unresolvedTargetCount,
    changedFileCount: changedFiles.length,
    changedFiles,
  }
}
