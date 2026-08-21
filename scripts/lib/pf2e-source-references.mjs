import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'

const INLINE_UUID_PATTERN = /@UUID\[([^\]]+)\](?:\{([^}]*)\})?/g
const STRUCTURED_UUID_PATTERN = /^(?:Compendium|Actor|Item|JournalEntry|Scene|RollTable|Macro|Playlist|Cards)\.[^\s]+$/
const COMPENDIUM_UUID_PATTERN = /^Compendium\.([^.]+)\.([^.]+)\.([^.]+)\.(.+)$/

function escapeJsonPointerSegment(value) {
  return String(value).replaceAll('~', '~0').replaceAll('/', '~1')
}

function ownerFromObject(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null

  const owner = {
    ...(typeof value._id === 'string' && value._id ? { sourceId: value._id } : {}),
    ...(typeof value.name === 'string' && value.name ? { name: value.name } : {}),
    ...(typeof value.type === 'string' && value.type ? { type: value.type } : {}),
  }

  return Object.keys(owner).length ? owner : null
}

function nearestSourceOwner(value, inheritedOwner) {
  const candidate = ownerFromObject(value)
  if (!candidate) return inheritedOwner
  if (candidate.sourceId) return candidate
  if (inheritedOwner?.sourceId) return inheritedOwner
  return candidate
}

export function parseFoundryUuid(uuid) {
  const target = { uuid }
  const compendium = uuid.match(COMPENDIUM_UUID_PATTERN)
  if (!compendium) return target

  const [, packageName, sourcePack, documentType, compendiumKey] = compendium
  return {
    uuid,
    package: packageName,
    sourcePack,
    documentType,
    compendiumKey,
  }
}

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

function findDirectoriesNamed(directory, expectedName) {
  if (!existsSync(directory)) return []

  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .sort((left, right) => left.name.localeCompare(right.name))
    .flatMap((entry) => {
      const path = join(directory, entry.name)
      return [
        ...(entry.name === expectedName ? [path] : []),
        ...findDirectoriesNamed(path, expectedName),
      ]
    })
}

function readSourcePackManifest(sourceRoot) {
  const manifestPath = join(sourceRoot, 'system.pf2e.json')
  if (!existsSync(manifestPath)) return new Map()

  let manifest
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  } catch {
    return new Map()
  }

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

function readTargetDocument(file) {
  try {
    const value = JSON.parse(readFileSync(file, 'utf8'))
    if (!value || typeof value !== 'object' || Array.isArray(value)) return null

    const sourceId = typeof value._id === 'string' && value._id ? value._id : null
    if (!sourceId) return null

    return {
      sourceId,
      ...(typeof value.system?.slug === 'string' && value.system.slug
        ? { slug: value.system.slug }
        : {}),
      ...(typeof value.name === 'string' && value.name ? { name: value.name } : {}),
      ...(typeof value.type === 'string' && value.type ? { type: value.type } : {}),
      fileKey: basename(file, '.json'),
    }
  } catch {
    return null
  }
}

function aliasesForTarget(target) {
  return [target.sourceId, target.slug, target.name, target.fileKey]
    .filter((alias) => typeof alias === 'string' && alias.length > 0)
}

export function createPf2eSourceReferenceResolver(sourceRoot) {
  const packsRoot = join(sourceRoot, 'packs', 'pf2e')
  const manifestDirectories = readSourcePackManifest(sourceRoot)
  const packIndexCache = new Map()

  function indexPack(sourcePack) {
    if (packIndexCache.has(sourcePack)) return packIndexCache.get(sourcePack)

    const manifestDirectory = manifestDirectories.get(sourcePack)
    const direct = join(packsRoot, sourcePack)
    const directories = manifestDirectory
      ? [manifestDirectory]
      : existsSync(direct)
        ? [direct]
        : findDirectoriesNamed(packsRoot, sourcePack)

    if (directories.length !== 1) {
      packIndexCache.set(sourcePack, null)
      return null
    }

    const byAlias = new Map()
    for (const file of walkJson(directories[0])) {
      const target = readTargetDocument(file)
      if (!target) continue

      for (const alias of aliasesForTarget(target)) {
        const values = byAlias.get(alias) ?? []
        values.push(target)
        byAlias.set(alias, values)
      }
    }

    packIndexCache.set(sourcePack, byAlias)
    return byAlias
  }

  return function resolveTarget(parsedTarget) {
    if (
      parsedTarget?.package !== 'pf2e'
      || typeof parsedTarget.sourcePack !== 'string'
      || typeof parsedTarget.compendiumKey !== 'string'
    ) {
      return null
    }

    const byAlias = indexPack(parsedTarget.sourcePack)
    if (!byAlias) return null

    const candidates = byAlias.get(parsedTarget.compendiumKey) ?? []
    const uniqueBySourceId = new Map(candidates.map((candidate) => [candidate.sourceId, candidate]))
    if (uniqueBySourceId.size !== 1) return null

    const target = [...uniqueBySourceId.values()][0]
    return {
      sourceId: target.sourceId,
      ...(target.slug ? { slug: target.slug } : {}),
      ...(target.name ? { name: target.name } : {}),
      ...(target.type ? { type: target.type } : {}),
    }
  }
}

function makeReference({ syntax, sourcePath, sourceIndex, uuid, label, owner, resolveTarget }) {
  const parsedTarget = parseFoundryUuid(uuid)
  const resolvedTarget = resolveTarget?.(parsedTarget) ?? null
  return {
    syntax,
    sourcePath,
    sourceIndex,
    uuid,
    label,
    target: {
      ...parsedTarget,
      ...(resolvedTarget ?? {}),
    },
    ...(owner ? { owner } : {}),
  }
}

export function collectPf2eSourceReferences(document, { resolveTarget } = {}) {
  const references = []
  let encounterOrder = 0

  function visit(value, path, inheritedOwner) {
    if (typeof value === 'string') {
      const sourcePath = path || ''
      const matches = [...value.matchAll(INLINE_UUID_PATTERN)]
      if (matches.length > 0) {
        for (const match of matches) {
          references.push({
            encounterOrder: encounterOrder += 1,
            reference: makeReference({
              syntax: 'INLINE_UUID',
              sourcePath,
              sourceIndex: match.index ?? 0,
              uuid: match[1],
              label: match[2] ?? null,
              owner: inheritedOwner,
              resolveTarget,
            }),
          })
        }
        return
      }

      if (STRUCTURED_UUID_PATTERN.test(value)) {
        references.push({
          encounterOrder: encounterOrder += 1,
          reference: makeReference({
            syntax: 'UUID_VALUE',
            sourcePath,
            sourceIndex: 0,
            uuid: value,
            label: null,
            owner: inheritedOwner,
            resolveTarget,
          }),
        })
      }
      return
    }

    if (Array.isArray(value)) {
      value.forEach((entry, index) => {
        visit(entry, `${path}/${index}`, inheritedOwner)
      })
      return
    }

    if (!value || typeof value !== 'object') return

    const localOwner = nearestSourceOwner(value, inheritedOwner)
    for (const key of Object.keys(value).sort((left, right) => left.localeCompare(right))) {
      visit(value[key], `${path}/${escapeJsonPointerSegment(key)}`, localOwner)
    }
  }

  visit(document, '', null)

  return references
    .sort((left, right) => (
      left.reference.sourcePath.localeCompare(right.reference.sourcePath)
      || left.reference.sourceIndex - right.reference.sourceIndex
      || left.encounterOrder - right.encounterOrder
    ))
    .map(({ reference }) => reference)
}
