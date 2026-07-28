import assert from 'node:assert/strict'
import test from 'node:test'
import { questhubTokenDragType } from '../src/vtt/table/config/constants'
import {
  hasTokenDragData,
  readTokenDragData,
  writeTokenDragData,
} from '../src/vtt/table/infrastructure/tokenDragAndDrop'

function createDataTransfer() {
  const values = new Map<string, string>()
  return {
    effectAllowed: 'none',
    get types() {
      return [...values.keys()]
    },
    setData(format: string, value: string) {
      values.set(format, value)
    },
    getData(format: string) {
      return values.get(format) ?? ''
    },
  }
}

test('token drag payload uses the QuestHub MIME type and the move operation', () => {
  const dataTransfer = createDataTransfer()

  writeTokenDragData(dataTransfer, 'token-123')

  assert.equal(dataTransfer.effectAllowed, 'move')
  assert.deepEqual(dataTransfer.types, [questhubTokenDragType])
  assert.equal(readTokenDragData(dataTransfer), 'token-123')
})

test('unrelated browser drags are not accepted as token drops', () => {
  const dataTransfer = createDataTransfer()
  dataTransfer.setData('text/plain', 'token-123')

  assert.equal(hasTokenDragData(dataTransfer), false)
  assert.equal(readTokenDragData(dataTransfer), null)
})
