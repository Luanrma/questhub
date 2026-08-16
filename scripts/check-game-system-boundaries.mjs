import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const apiRoot = path.join(root, 'apps', 'api', 'src')
const systemsRoot = path.join(apiRoot, 'game_systems')
const modulesRoot = path.join(apiRoot, 'modules')
const webRoot = path.join(root, 'apps', 'web', 'src')
const webVttRoot = path.join(webRoot, 'vtt')
const tokenPresentationRoot = path.join(webVttRoot, 'token-presentation')
const equipmentRendererRegistryFile = path.join(
  webRoot,
  'game-systems',
  'equipment-renderers.tsx',
)
const settingsPanelRegistryFile = path.join(
  webRoot,
  'game-systems',
  'settings-panels.tsx',
)
const genericCampaignSettingsFile = path.join(
  webRoot,
  'features',
  'campaigns',
  'pages',
  'CampaignSettingsPage.tsx',
)
const genericCampaignRoutesFile = path.join(
  modulesRoot,
  'campaigns',
  'routes.ts',
)

// Existing generic integration points from main. This baseline prevents new
// cross-boundary imports while these bridges are moved to the composition shell.
// Do not add entries without an architectural decision record.
const approvedVttGameSystemBridges = new Set([
  'apps/web/src/vtt/table/CampaignOverviewPage.tsx -> ../../game-systems/CampaignInventoryModal',
])

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

function importKey(sourceFile, specifier) {
  return `${path.relative(root, sourceFile).split(path.sep).join('/')} -> ${specifier}`
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
    const key = importKey(sourceFile, specifier)
    const entersGameSystems = relativeToGameSystems === ''
      || (!relativeToGameSystems.startsWith('..') && !path.isAbsolute(relativeToGameSystems))
    const entersFeatures = relativeToFeatures === ''
      || (!relativeToFeatures.startsWith('..') && !path.isAbsolute(relativeToFeatures))

    if (entersGameSystems && !approvedVttGameSystemBridges.has(key)) {
      violations.push(`VTT imports a game-system web module: ${key}`)
    }
    if (entersFeatures) {
      violations.push(`VTT imports a concrete feature module: ${key}`)
    }
  }
}

if (existsSync(equipmentRendererRegistryFile)) {
  const source = readFileSync(equipmentRendererRegistryFile, 'utf8')
  const relativePath = path.relative(root, equipmentRendererRegistryFile)

  if (!/Partial\s*<\s*Record\s*<\s*GameSystemKey\s*,/.test(source)) {
    violations.push(`Equipment renderer registry must be keyed by GameSystemKey: ${relativePath}`)
  }
  if (/const\s+equipmentRenderers\s*=\s*\[/.test(source)) {
    violations.push(`Equipment renderers cannot be mounted as an unconditional list: ${relativePath}`)
  }
  if (!/equipmentRenderers\s*\[\s*gameSystem\s*\]/.test(source)) {
    violations.push(`Equipment renderer must be selected from the current game system: ${relativePath}`)
  }
}

if (existsSync(settingsPanelRegistryFile)) {
  const source = readFileSync(settingsPanelRegistryFile, 'utf8')
  const relativePath = path.relative(root, settingsPanelRegistryFile)

  if (!/Partial\s*<\s*Record\s*<\s*GameSystemKey\s*,/.test(source)) {
    violations.push(`Settings panel registry must be keyed by GameSystemKey: ${relativePath}`)
  }
  if (!/settingsPanels\s*\[\s*gameSystem\s*\]/.test(source)) {
    violations.push(`Settings panel must be selected from the current game system: ${relativePath}`)
  }
}

if (existsSync(genericCampaignSettingsFile)) {
  const source = readFileSync(genericCampaignSettingsFile, 'utf8')
  const relativePath = path.relative(root, genericCampaignSettingsFile)

  if (/pathfinder(?:-2e|2e)|PATHFINDER_2E/i.test(source)) {
    violations.push(`Generic campaign settings names a concrete game system: ${relativePath}`)
  }
  if (!/GameSystemSettingsPanels/.test(source)) {
    violations.push(`Generic campaign settings must delegate game-system panels to the composition shell: ${relativePath}`)
  }
}

if (existsSync(genericCampaignRoutesFile)) {
  const source = readFileSync(genericCampaignRoutesFile, 'utf8')
  const relativePath = path.relative(root, genericCampaignRoutesFile)

  if (/pathfinder2e/i.test(source) || /contentLocale/.test(source)) {
    violations.push(`Generic campaign routes interpret concrete game-system user settings: ${relativePath}`)
  }
}

for (const sourceFile of collectFiles(tokenPresentationRoot)) {
  const source = readFileSync(sourceFile, 'utf8')
  if (/\bsetInterval\s*\(/.test(source)) {
    violations.push(`Token presentation must update through realtime events, not polling: ${path.relative(root, sourceFile)}`)
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
