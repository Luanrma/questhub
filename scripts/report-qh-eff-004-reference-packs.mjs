import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = process.argv[2]
  ?? 'apps/api/src/game_systems/pathfinder_2e/content_catalog'

function walk(directory) {
  if (!existsSync(directory)) return []
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  })
}

const counts = new Map()
let total = 0
let withoutPack = 0

for (const file of walk(root).filter((path) => path.endsWith('.ts'))) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(/"target":\s*\{([\s\S]*?)\n\s*\}/g)) {
    total += 1
    const pack = match[1].match(/"sourcePack":\s*"([^"]+)"/)?.[1] ?? null
    if (!pack) {
      withoutPack += 1
      continue
    }
    counts.set(pack, (counts.get(pack) ?? 0) + 1)
  }
}

const byPack = Object.fromEntries(
  [...counts.entries()].sort((left, right) => right[1] - left[1]),
)

console.log(JSON.stringify({ total, withoutPack, byPack }, null, 2))
