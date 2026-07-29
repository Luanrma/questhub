import assert from 'node:assert/strict'
import test from 'node:test'
import {
  handleTokenImagePickerBackdropMouseDown,
  stopTokenImagePickerClickPropagation,
  type TokenImagePickerBoundaryEvent,
} from '../src/vtt/table/components/tokenImagePickerEvents'

function boundaryEvent(target: EventTarget, currentTarget: EventTarget) {
  let propagationStopped = false
  return {
    event: {
      target,
      currentTarget,
      stopPropagation: () => {
        propagationStopped = true
      },
    } satisfies TokenImagePickerBoundaryEvent,
    propagationStopped: () => propagationStopped,
  }
}

test('token image picker portal prevents clicks from reaching the board', () => {
  let propagationStopped = false
  stopTokenImagePickerClickPropagation({
    stopPropagation: () => {
      propagationStopped = true
    },
  })

  assert.equal(propagationStopped, true)
})

test('interactions inside the picker do not close its contextual-menu owner', () => {
  const backdrop = new EventTarget()
  const control = new EventTarget()
  const interaction = boundaryEvent(control, backdrop)
  let cancelled = false

  handleTokenImagePickerBackdropMouseDown(interaction.event, false, () => {
    cancelled = true
  })

  assert.equal(interaction.propagationStopped(), true)
  assert.equal(cancelled, false)
})

test('only an idle backdrop interaction closes the picker', () => {
  const backdrop = new EventTarget()
  const idleInteraction = boundaryEvent(backdrop, backdrop)
  const savingInteraction = boundaryEvent(backdrop, backdrop)
  let cancellations = 0

  handleTokenImagePickerBackdropMouseDown(idleInteraction.event, false, () => {
    cancellations += 1
  })
  handleTokenImagePickerBackdropMouseDown(savingInteraction.event, true, () => {
    cancellations += 1
  })

  assert.equal(cancellations, 1)
})
