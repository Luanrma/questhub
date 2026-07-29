import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const apiRoot = path.join(root, 'apps', 'api', 'src')
const systemsRoot = path.join(apiRoot, 'game_systems')
const modulesRoot = path.join(apiRoot, 'modules')
const webRoot = path.join(root, 'apps', 'web', 'src')
const webVttRoot = path.join(webRoot, 'vtt')

function collectFiles(directory, extensions = ['.ts', '.tsx']) {
  if (!existsSync(directory)) return []
  return readdirSync(directory).flatMap((entry) => {
    const entryPath = path.join(directory, entry)
    if (statSync(entryPath).isDirectory()) return collectFiles(entryPath, extensions)
    return extensions.some((extension) => entry.endsWith(extension)) ? [entryPath] : []
  })
}

function relativeImports(sourceFile) {
  const source = readFileSync(sourceFile, 'utf8')
  const pattern = /(?:from\s+|import\s*(?:\(\s*)?)["']([^"']+)["']/g
  return [...source.matchAll(pattern)]
    .map((match) => match[1])
    .filter((specifier) => specifier?.startsWith('.'))
}

function entersRoot(sourceFile, specifier, targetRoot) {
  const resolved = path.resolve(path.dirname(sourceFile), specifier)
  const relative = path.relative(targetRoot, resolved)
  return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative))
}

const violations = []

for (const sourceFile of collectFiles(modulesRoot)) {
  for (const specifier of relativeImports(sourceFile)) {
    if (entersRoot(sourceFile, specifier, systemsRoot)) {
      violations.push(`VTT API imports game-system implementation: ${path.relative(root, sourceFile)} -> ${specifier}`)
    }
  }
}

for (const sourceFile of collectFiles(systemsRoot)) {
  for (const specifier of relativeImports(sourceFile)) {
    if (entersRoot(sourceFile, specifier, modulesRoot)) {
      violations.push(`Game system imports VTT API module: ${path.relative(root, sourceFile)} -> ${specifier}`)
    }
  }
}

const forbiddenVttRulePattern = /\b(?:PATHFINDER_2E|DND_5E|hitPoints|armorClass|spellSlots|savingThrows|dying|wounded|doomed)\b|pathfinder-2e|dnd-5e/i
for (const sourceFile of collectFiles(webVttRoot)) {
  const source = readFileSync(sourceFile, 'utf8')
  if (forbiddenVttRulePattern.test(source)) {
    violations.push(`VTT names or interprets a concrete game rule: ${path.relative(root, sourceFile)}`)
  }

  for (const specifier of relativeImports(sourceFile)) {
    const resolved = path.resolve(path.dirname(sourceFile), specifier)
    const relativeToGameSystems = path.relative(path.join(webRoot, 'game-systems'), resolved)
    const relativeToFeatures = path.relative(path.join(webRoot, 'features'), resolved)
    if (relativeToGameSystems === '' || (!relativeToGameSystems.startsWith('..') && !path.isAbsolute(relativeToGameSystems))) {
      violations.push(`VTT imports a game-system web module: ${path.relative(root, sourceFile)} -> ${specifier}`)
    }
    if (relativeToFeatures === '' || (!relativeToFeatures.startsWith('..') && !path.isAbsolute(relativeToFeatures))) {
      violations.push(`VTT imports a concrete feature module: ${path.relative(root, sourceFile)} -> ${specifier}`)
    }
  }
}

for (const sourceFile of collectFiles(systemsRoot).filter((file) => file.endsWith('token-presentation-provider.ts'))) {
  const source = readFileSync(sourceFile, 'utf8')
  if (/\b(?:react|fastify|pixi|canvas|HTMLElement|JSX)\b/i.test(source)) {
    violations.push(`Automation provider depends on UI or transport technology: ${path.relative(root, sourceFile)}`)
  }
}

if (violations.length > 0) {
  console.error('Game-system boundary violations found:\n')
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log('Game-system boundaries are valid.')
