import assert from 'node:assert/strict'
import test from 'node:test'
import { areaTemplateNameMaxLength, nextAreaTemplateCopyName } from './template-name'

test('area template copies use an incrementing suffix without nesting copy labels', () => {
  const names = ['Bola de fogo', 'Bola de fogo Copia1', 'Bola de fogo Copia2']
  assert.equal(nextAreaTemplateCopyName('Bola de fogo', names), 'Bola de fogo Copia3')
  assert.equal(nextAreaTemplateCopyName('Bola de fogo Copia2', names), 'Bola de fogo Copia3')
})

test('area template copies normalize legacy copy suffixes', () => {
  assert.equal(
    nextAreaTemplateCopyName('Nova area (copia) (copia)', ['Nova area', 'Nova area (copia)', 'Nova area (copia) (copia)']),
    'Nova area Copia3',
  )
})

test('area template copy names preserve the configured maximum length', () => {
  const result = nextAreaTemplateCopyName('A'.repeat(areaTemplateNameMaxLength), [])
  assert.equal(result.length, areaTemplateNameMaxLength)
  assert.match(result, / Copia1$/)
})
