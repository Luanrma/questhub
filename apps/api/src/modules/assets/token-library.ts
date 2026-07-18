import { readdir } from 'node:fs/promises'
import { join, resolve } from 'node:path'

const supportedTokenImageExtension = /\.(?:avif|gif|jpe?g|png|svg|webp)$/i

export type LocalTokenImage = {
  name: string
  path: string
}

function isMissingDirectory(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error && error.code === 'ENOENT'
}

async function collectLocalTokenImages(directory: string, relativeDirectory = ''): Promise<LocalTokenImage[]> {
  let entries
  try {
    entries = await readdir(directory, { withFileTypes: true })
  } catch (error) {
    if (isMissingDirectory(error)) return []
    throw error
  }

  const nestedImages = await Promise.all(entries.map(async (entry) => {
    const relativePath = relativeDirectory ? `${relativeDirectory}/${entry.name}` : entry.name
    if (entry.isDirectory()) return collectLocalTokenImages(join(directory, entry.name), relativePath)
    if (!entry.isFile() || !supportedTokenImageExtension.test(entry.name)) return []

    return [{
      name: relativePath,
      path: `/tokens/${relativePath.split('/').map(encodeURIComponent).join('/')}`,
    }]
  }))

  return nestedImages.flat()
}

export async function listLocalTokenImages(
  directory = resolve(process.cwd(), 'apps/web/public/tokens'),
): Promise<LocalTokenImage[]> {
  const images = await collectLocalTokenImages(directory)
  return images.sort((left, right) => left.name.localeCompare(right.name))
}
