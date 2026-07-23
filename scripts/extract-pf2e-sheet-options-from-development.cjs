const { execFileSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const DEVELOPMENT_REF = 'origin/development'
const outputRoot = path.join(
  process.cwd(),
  'apps/api/src/modules/game_systems/pathfinder_2e/character-sheet/options',
)

const generatedSources = {
  ancestries: 'packages/game-system-pathfinder-2e/src/server/character-options/data/ancestries.generated.ts',
  heritages: 'packages/game-system-pathfinder-2e/src/server/character-options/data/heritages.generated.ts',
  backgrounds: 'packages/game-system-pathfinder-2e/src/server/character-options/data/backgrounds.generated.ts',
  classes: 'packages/game-system-pathfinder-2e/src/server/character-options/data/classes.generated.ts',
}

function git(...args) {
  return execFileSync('git', args, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 100 })
}

function readFromDevelopment(filePath) {
  return git('show', `${DEVELOPMENT_REF}:${filePath}`)
}

function parseGeneratedArray(source, filePath) {
  const assignmentIndex = source.indexOf('=')
  const start = source.indexOf('[', assignmentIndex)
  const end = source.lastIndexOf(']')
  if (start < 0 || end < start) throw new Error(`Could not find generated array in ${filePath}`)
  return JSON.parse(source.slice(start, end + 1))
}

function uniqueSortedNames(entries) {
  return [...new Set(entries.map((entry) => entry?.name).filter((name) => typeof name === 'string' && name.trim()))]
    .sort((left, right) => left.localeCompare(right, 'en'))
}

function listDevelopmentPaths() {
  return git('ls-tree', '-r', '--name-only', DEVELOPMENT_REF)
    .split(/\r?\n/)
    .filter(Boolean)
}

function parseDeities(paths) {
  const generatedCandidates = paths.filter((filePath) => /deit(?:y|ies).*generated\.ts$/i.test(filePath))
  for (const filePath of generatedCandidates) {
    try {
      const entries = parseGeneratedArray(readFromDevelopment(filePath), filePath)
      const names = uniqueSortedNames(entries)
      if (names.length) return { names, source: filePath }
    } catch {
      // Continue to the next candidate.
    }
  }

  const rawCandidates = paths.filter((filePath) =>
    /(?:^|\/)deities(?:\/|$)/i.test(filePath) && filePath.endsWith('.json') && !filePath.endsWith('_folders.json'),
  )
  const rawNames = rawCandidates.flatMap((filePath) => {
    try {
      const document = JSON.parse(readFromDevelopment(filePath))
      return typeof document?.name === 'string' && document.name.trim() ? [document.name.trim()] : []
    } catch {
      return []
    }
  })
  if (rawNames.length) return { names: [...new Set(rawNames)].sort((a, b) => a.localeCompare(b, 'en')), source: 'development deity JSON files' }

  const discovery = paths.filter((filePath) => /deit/i.test(filePath))
  fs.mkdirSync(outputRoot, { recursive: true })
  fs.writeFileSync(
    path.join(outputRoot, 'deity-discovery.txt'),
    [
      'No deity catalog was found automatically in the development branch.',
      '',
      'Paths containing "deit":',
      ...discovery,
      '',
    ].join('\n'),
  )
  return { names: [], source: null }
}

function writeNamesFile(key, constantName, names, source) {
  const lines = [
    `// Static names extracted from branch development: ${source ?? 'source not found'}.`,
    '// Keep this file independent from the other PF2e select catalogs.',
    `export const ${constantName} = [`,
    ...names.map((name) => `  ${JSON.stringify(name)},`),
    '] as const',
    '',
  ]
  fs.writeFileSync(path.join(outputRoot, `${key}.ts`), lines.join('\n'))
}

fs.mkdirSync(outputRoot, { recursive: true })

for (const [key, sourcePath] of Object.entries(generatedSources)) {
  const entries = parseGeneratedArray(readFromDevelopment(sourcePath), sourcePath)
  const names = uniqueSortedNames(entries)
  writeNamesFile(key, `PATHFINDER_2E_${key.toUpperCase()}`, names, sourcePath)
}

const developmentPaths = listDevelopmentPaths()
const deityResult = parseDeities(developmentPaths)
writeNamesFile('deities', 'PATHFINDER_2E_DEITIES', deityResult.names, deityResult.source)

console.log('PF2e sheet select catalogs extracted from development:')
for (const key of [...Object.keys(generatedSources), 'deities']) {
  const content = fs.readFileSync(path.join(outputRoot, `${key}.ts`), 'utf8')
  const count = (content.match(/^  "/gm) ?? []).length
  console.log(`- ${key}: ${count}`)
}
