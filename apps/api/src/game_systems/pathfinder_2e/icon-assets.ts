import { readFile } from 'node:fs/promises'
import { extname, resolve, sep } from 'node:path'
import type { FastifyInstance } from 'fastify'

const PATHFINDER_2E_ICONS_ROOT = resolve(
  process.cwd(),
  'apps/api/src/game_systems/pathfinder_2e/icons',
)

const CONTENT_TYPES: Readonly<Record<string, string>> = {
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
}

export type Pathfinder2eIconAsset = {
  absolutePath: string
  contentType: string
}

export function resolvePathfinder2eIconAsset(relativePath: string): Pathfinder2eIconAsset | null {
  const normalizedPath = relativePath.replaceAll('\\', '/').replace(/^\/+/, '')
  if (!normalizedPath || normalizedPath.includes('..')) return null
  if (!/^[a-zA-Z0-9_./-]+$/.test(normalizedPath)) return null

  const contentType = CONTENT_TYPES[extname(normalizedPath).toLowerCase()]
  if (!contentType) return null

  const absolutePath = resolve(PATHFINDER_2E_ICONS_ROOT, normalizedPath)
  if (!absolutePath.startsWith(`${PATHFINDER_2E_ICONS_ROOT}${sep}`)) return null

  return { absolutePath, contentType }
}

export function registerPathfinder2eIconAssetRoutes(app: FastifyInstance) {
  app.get('/api/game-systems/pathfinder-2e/icons/*', async (req, reply) => {
    const relativePath = (req.params as { '*': string })['*']
    const asset = resolvePathfinder2eIconAsset(relativePath)
    if (!asset) return reply.status(404).send({ error: 'Ícone não encontrado' })

    try {
      const content = await readFile(asset.absolutePath)
      return reply
        .header('Cache-Control', 'public, max-age=86400')
        .type(asset.contentType)
        .send(content)
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        return reply.status(404).send({ error: 'Ícone não encontrado' })
      }
      req.log.error({ error, relativePath }, 'Failed to read Pathfinder 2e icon asset')
      return reply.status(500).send({ error: 'Não foi possível carregar o ícone' })
    }
  })
}
