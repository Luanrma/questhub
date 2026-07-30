import assert from 'node:assert/strict'
import test from 'node:test'
import {
  closeAllVttWindows,
  registerVttWindow,
} from '../src/vtt/table/infrastructure/vttInteractionRegistry'

test('Escape window coordination closes every visible window from the greatest z-index down', () => {
  const closed: string[] = []
  const unregisterLower = registerVttWindow({
    id: 'lower',
    getZIndex: () => 50,
    close: () => closed.push('lower'),
    isVisible: () => true,
  })
  const unregisterHigher = registerVttWindow({
    id: 'higher',
    getZIndex: () => 130,
    close: () => closed.push('higher'),
    isVisible: () => true,
  })

  assert.equal(closeAllVttWindows(), 2)
  assert.deepEqual(closed, ['higher', 'lower'])

  unregisterHigher()
  unregisterLower()
})

test('Escape window coordination leaves already minimized windows untouched', () => {
  const closed: string[] = []
  const unregister = registerVttWindow({
    id: 'minimized',
    getZIndex: () => 200,
    close: () => closed.push('minimized'),
    isVisible: () => false,
  })

  assert.equal(closeAllVttWindows(), 0)
  assert.deepEqual(closed, [])

  unregister()
})
