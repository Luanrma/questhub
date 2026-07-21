import assert from 'node:assert/strict'
import { test } from 'node:test'
import { resetFogExplorationMask, unionFogExplorationMasks, validateFogExplorationMask } from './exploration-mask'

test('fog exploration masks are merged monotonically', () => {
  const first = { revision: 2, width: 4, height: 2, mask: new Uint8Array([0b00000001]) }
  const second = { revision: 2, width: 4, height: 2, mask: new Uint8Array([0b10000000]) }
  const merged = unionFogExplorationMasks(first, second)
  assert.equal(merged.ok, true)
  if (merged.ok) assert.equal(merged.value.mask[0], 0b10000001)
})

test('stale exploration cannot restore a reset mask', () => {
  const current = resetFogExplorationMask({ revision: 4, width: 4, height: 2, mask: new Uint8Array([255]) })
  const merged = unionFogExplorationMasks(current, { revision: 4, width: 4, height: 2, mask: new Uint8Array([255]) })
  assert.deepEqual(merged, { ok: false, code: 'STALE_FOG_REVISION' })
})

test('fog exploration validates exact bitset size', () => {
  assert.deepEqual(validateFogExplorationMask({ revision: 0, width: 9, height: 1, mask: new Uint8Array([0]) }), {
    ok: false,
    code: 'INVALID_MASK_SIZE',
  })
})
