import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const apiSourceRoot = path.join(process.cwd(), 'apps', 'api', 'src')
const gameSystemsRoot = path.join(apiSourceRoot, 'game_systems')
const gameSystemRuntimeRoot = path.join(gameSystemsRoot, 'runtime')
const vttModulesRoot = path.join(apiSourceRoot, 'modules')
const legacyGameSystemsRoot = path.join(vttModulesRoot, 'game_systems')
const vttServerFile = path.join(apiSourceRoot, 'server.ts')
const applicationBootstrapFile = path.join(apiSourceRoot, 'main.ts')
const gameSystemsRegisterFile = path.join(gameSystemsRoot, 'register.ts')
const webSourceRoot = path.join(process.cwd(), 'apps', 'web', 'src')
const webVttRoot = path.join(webSourceRoot, 'vtt')
const webPathfinderRoot = path.join(webSourceRoot, 'features', 'pathfinder-2e')

function collectTypeScriptFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const entryPath = path.join(directory, entry)
    return statSync(entryPath).isDirectory()
      ? collectTypeScriptFiles(entryPath)
      : entry.endsWith('.ts') || entry.endsWith('.tsx')
        ? [entryPath]
        : []
  })
}

function findRelativeImportsInto(sourceRoot: string, forbiddenRoot: string): string[] {
  const violations: string[] = []
  const importSpecifierPattern = /(?:from\s+|import\s*(?:\(\s*)?)["']([^"']+)["']/g

  for (const sourceFile of collectTypeScriptFiles(sourceRoot)) {
    const source = readFileSync(sourceFile, 'utf8')

    for (const match of source.matchAll(importSpecifierPattern)) {
      const specifier = match[1]
      if (!specifier?.startsWith('.')) continue

      const resolvedImport = path.resolve(path.dirname(sourceFile), specifier)
      const relativeToForbiddenRoot = path.relative(forbiddenRoot, resolvedImport)
      const entersForbiddenRoot =
        relativeToForbiddenRoot === '' ||
        (!relativeToForbiddenRoot.startsWith('..') && !path.isAbsolute(relativeToForbiddenRoot))

      if (entersForbiddenRoot) {
        violations.push(`${path.relative(process.cwd(), sourceFile)} -> ${specifier}`)
      }
    }
  }

  return violations
}

function findRelativeImportsFromFileInto(sourceFile: string, forbiddenRoot: string): string[] {
  const source = readFileSync(sourceFile, 'utf8')
  const violations: string[] = []
  const importSpecifierPattern = /(?:from\s+|import\s*(?:\(\s*)?)["']([^"']+)["']/g

  for (const match of source.matchAll(importSpecifierPattern)) {
    const specifier = match[1]
    if (!specifier?.startsWith('.')) continue

    const resolvedImport = path.resolve(path.dirname(sourceFile), specifier)
    const relativeToForbiddenRoot = path.relative(forbiddenRoot, resolvedImport)
    const entersForbiddenRoot =
      relativeToForbiddenRoot === '' ||
      (!relativeToForbiddenRoot.startsWith('..') && !path.isAbsolute(relativeToForbiddenRoot))

    if (entersForbiddenRoot) {
      violations.push(`${path.relative(apiSourceRoot, sourceFile)} -> ${specifier}`)
    }
  }

  return violations
}

function getConcreteGameSystemRoots() {
  return readdirSync(gameSystemsRoot)
    .map((entry) => path.join(gameSystemsRoot, entry))
    .filter((entryPath) => statSync(entryPath).isDirectory())
    .filter((entryPath) => existsSync(path.join(entryPath, 'register.ts')))
}

test('game systems stay outside the VTT modules directory', () => {
  assert.equal(
    existsSync(legacyGameSystemsRoot),
    false,
    'apps/api/src/modules/game_systems must never exist',
  )
  assert.equal(existsSync(gameSystemsRoot), true)
})

test('game systems and VTT modules have no direct rule imports', () => {
  const violations = [
    ...findRelativeImportsInto(gameSystemsRoot, vttModulesRoot),
    ...findRelativeImportsInto(vttModulesRoot, gameSystemsRoot),
  ]

  assert.deepEqual(
    violations,
    [],
    `Cross-boundary imports are forbidden:\n${violations.join('\n')}`,
  )
})

test('the VTT server does not compose game systems', () => {
  assert.deepEqual(
    findRelativeImportsFromFileInto(vttServerFile, gameSystemsRoot),
    [],
    'apps/api/src/server.ts must remain exclusive to the VTT',
  )

  const serverSource = readFileSync(vttServerFile, 'utf8')
  assert.doesNotMatch(
    serverSource,
    /pathfinder|character-sheet|bestiary|bestiario|items?|spells?/i,
    'apps/api/src/server.ts must not know concrete game systems or their capabilities',
  )
})

test('the executable bootstrap knows only the aggregated game-systems entrypoint', () => {
  const gameSystemImports = findRelativeImportsFromFileInto(
    applicationBootstrapFile,
    gameSystemsRoot,
  )

  assert.deepEqual(gameSystemImports, ['main.ts -> ./game_systems/register'])
})

test('the game-systems aggregator imports only system-level registrars', () => {
  const source = readFileSync(gameSystemsRegisterFile, 'utf8')
  const relativeImports = [...source.matchAll(/from\s+["']([^"']+)["']/g)]
    .map((match) => match[1])
    .filter((specifier): specifier is string => Boolean(specifier?.startsWith('.')))

  assert.equal(relativeImports.length > 0, true, 'At least one game system must be registered')

  for (const specifier of relativeImports) {
    assert.match(
      specifier,
      /^\.\/[^/]+\/register$/,
      `The aggregator must import a system registrar, received: ${specifier}`,
    )
  }
})

test('each registered game system is isolated from sibling systems', () => {
  const systemRoots = getConcreteGameSystemRoots()
  const violations = systemRoots.flatMap((sourceRoot) =>
    systemRoots
      .filter((forbiddenRoot) => forbiddenRoot !== sourceRoot)
      .flatMap((forbiddenRoot) => findRelativeImportsInto(sourceRoot, forbiddenRoot)),
  )

  assert.deepEqual(
    violations,
    [],
    `A game system cannot import a sibling system:\n${violations.join('\n')}`,
  )
})

test('the shared runtime never imports a concrete game system', () => {
  assert.equal(existsSync(gameSystemRuntimeRoot), true)

  const violations = getConcreteGameSystemRoots().flatMap((systemRoot) =>
    findRelativeImportsInto(gameSystemRuntimeRoot, systemRoot),
  )

  assert.deepEqual(
    violations,
    [],
    `The shared runtime cannot depend on a concrete system:\n${violations.join('\n')}`,
  )
})

test('the web VTT never imports or names the Pathfinder renderer', () => {
  const importViolations = findRelativeImportsInto(webVttRoot, webPathfinderRoot)
  const namingViolations = collectTypeScriptFiles(webVttRoot).flatMap((sourceFile) => {
    const source = readFileSync(sourceFile, 'utf8')
    return /PATHFINDER_2E|pathfinder-2e|Pathfinder2e|Pathfinder 2e/i.test(source)
      ? [path.relative(process.cwd(), sourceFile)]
      : []
  })

  assert.deepEqual(
    importViolations,
    [],
    `The VTT cannot import a concrete sheet renderer:\n${importViolations.join('\n')}`,
  )
  assert.deepEqual(
    namingViolations,
    [],
    `The VTT cannot branch on or name Pathfinder:\n${namingViolations.join('\n')}`,
  )
})
