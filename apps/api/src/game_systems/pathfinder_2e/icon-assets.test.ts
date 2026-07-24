import assert from 'node:assert/strict'
import test from 'node:test'
import { resolvePathfinder2eIconAsset } from './icon-assets'

test('PF2e icon assets resolve supported local image paths', () => {
  const svg = resolvePathfinder2eIconAsset('default-icons/npc.svg')
  const webp = resolvePathfinder2eIconAsset('spells/magic-missile.webp')

  assert.ok(svg)
  assert.equal(svg.contentType, 'image/svg+xml')
  assert.ok(svg.absolutePath.endsWith('default-icons/npc.svg'))

  assert.ok(webp)
  assert.equal(webp.contentType, 'image/webp')
  assert.ok(webp.absolutePath.endsWith('spells/magic-missile.webp'))
})

test('PF2e icon assets reject traversal and unsupported files', () => {
  assert.equal(resolvePathfinder2eIconAsset('../secrets.env'), null)
  assert.equal(resolvePathfinder2eIconAsset('default-icons/npc.svg/../../secrets.env'), null)
  assert.equal(resolvePathfinder2eIconAsset('default-icons/icon.exe'), null)
  assert.equal(resolvePathfinder2eIconAsset('https://example.com/icon.webp'), null)
})
