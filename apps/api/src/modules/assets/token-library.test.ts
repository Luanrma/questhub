import assert from 'node:assert/strict'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { listLocalTokenImages } from './token-library'

test('local token library reflects files added and removed between queries', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'questhub-token-library-'))

  try {
    await mkdir(join(directory, 'creatures'))
    await writeFile(join(directory, 'creatures', 'goblin.png'), 'image')
    await writeFile(join(directory, 'notes.txt'), 'not an image')

    assert.deepEqual(await listLocalTokenImages(directory), [{
      name: 'creatures/goblin.png',
      path: '/tokens/creatures/goblin.png',
    }])

    await rm(join(directory, 'creatures', 'goblin.png'))
    assert.deepEqual(await listLocalTokenImages(directory), [])
  } finally {
    await rm(directory, { recursive: true, force: true })
  }
})

test('local token library returns an empty catalog when the directory does not exist', async () => {
  const missingDirectory = join(tmpdir(), `questhub-missing-token-library-${Date.now()}`)
  assert.deepEqual(await listLocalTokenImages(missingDirectory), [])
})
