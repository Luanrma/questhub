const { execFileSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const DEVELOPMENT_REF = 'origin/development'
const PF2E_REFERENCE_COMMIT = '5069fb7a421a5ba1789652764447cced91ffb0e2'
const PF2E_CHECKOUT_ROOT = '/tmp/pf2e-reference'
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

function walkJsonFiles(root) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(root, entry.name)
    if (entry.isDirectory()) return walkJsonFiles(fullPath)
    if (entry.isFile() && entry.name.endsWith('.json') && entry.name !== '_folders.json') return [fullPath]
    return []
  })
}

function parsePinnedDeities() {
  const packRoot = path.join(PF2E_CHECKOUT_ROOT, 'packs', 'pf2e', 'deities')
  if (!fs.existsSync(packRoot)) throw new Error(`Missing pinned PF2e deity pack at ${packRoot}`)

  const entries = walkJsonFiles(packRoot).map((filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8')))
  return {
    names: uniqueSortedNames(entries),
    source: `foundryvtt/pf2e@${PF2E_REFERENCE_COMMIT}:packs/pf2e/deities`,
  }
}

function writeNamesFile(key, constantName, names, source) {
  const lines = [
    `// Static names extracted once from ${source}.`,
    '// This file is intentionally independent from the other PF2e select catalogs.',
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
  writeNamesFile(key, `PATHFINDER_2E_${key.toUpperCase()}`, names, `branch development:${sourcePath}`)
}

const deityResult = parsePinnedDeities()
writeNamesFile('deities', 'PATHFINDER_2E_DEITIES', deityResult.names, deityResult.source)

const obsoleteDiscoveryPath = path.join(outputRoot, 'deity-discovery.txt')
if (fs.existsSync(obsoleteDiscoveryPath)) fs.unlinkSync(obsoleteDiscoveryPath)

console.log('PF2e sheet select catalogs extracted as static name-only files:')
for (const key of [...Object.keys(generatedSources), 'deities']) {
  const content = fs.readFileSync(path.join(outputRoot, `${key}.ts`), 'utf8')
  const count = (content.match(/^  "/gm) ?? []).length
  console.log(`- ${key}: ${count}`)
}
