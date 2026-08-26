import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { VttDicePanel } from '../src/vtt/dice-roller/components/VttDicePanel'

Object.assign(globalThis, { React })

const commonProps = {
  canRollDice: true,
  command: '',
  diceThemeColor: '#7f59d9',
  initializing: false,
  labelInput: 'Ataque com espada',
  modifierInput: '+7',
  quantities: { 4: 0, 6: 0, 8: 0, 10: 0, 12: 0, 20: 1 } as const,
  remainingSlots: 39,
  rolling: false,
  showClearButton: false,
  visibleCount: 0,
  warning: null,
  onClear: () => undefined,
  onCommandChange: () => undefined,
  onInputModeChange: () => undefined,
  onLabelChange: () => undefined,
  onModifierChange: () => undefined,
  onQuantityChange: () => undefined,
  onRoll: () => undefined,
  onThemeColorChange: () => undefined,
}

test('guided dice panel exposes modifier, identification and normalized preview', () => {
  const markup = renderToStaticMarkup(<VttDicePanel
    {...commonProps}
    inputMode="guided"
    preview={{
      groups: [{ sides: 20, count: 1 }],
      modifier: 7,
      label: 'Ataque com espada',
      expression: '1D20 + 7',
      diceCount: 1,
    }}
  />)

  assert.match(markup, /Seleção guiada/)
  assert.match(markup, /Modificador/)
  assert.match(markup, /Identificação opcional/)
  assert.match(markup, /Ataque com espada/)
  assert.match(markup, /1D20 \+ 7/)
  assert.match(markup, /modificador \+7/)
})

test('expression dice panel uses a single expression source', () => {
  const markup = renderToStaticMarkup(<VttDicePanel
    {...commonProps}
    command="2d6-2"
    inputMode="expression"
    preview={{
      groups: [{ sides: 6, count: 2 }],
      modifier: -2,
      label: 'Ataque com espada',
      expression: '2D6 - 2',
      diceCount: 2,
    }}
  />)

  assert.match(markup, /Usar expressão/)
  assert.match(markup, /2d6-2/)
  assert.doesNotMatch(markup, /placeholder="0, \+7 ou -2"/)
  assert.match(markup, /2D6 - 2/)
})
