import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { AreaVisualPattern } from '../src/vtt/area-templates/components/AreaVisualPatterns'
import { areaVisualPatternId, areaVisualPresentation, type AnimatedAreaVisualEffect } from '../src/vtt/area-templates/components/areaVisualConfig'

const effects: AnimatedAreaVisualEffect[] = ['FIRE', 'ELECTRIC', 'HEALING', 'EARTH', 'VINES', 'LEAVES']
Object.assign(globalThis, { React })

test('every animated area effect provides an SVG pattern and visual presentation', () => {
  for (const effect of effects) {
    const id = `test-${effect.toLowerCase()}`
    const markup = renderToStaticMarkup(<svg><AreaVisualPattern effect={effect} id={id} rotationDegrees={35} /></svg>)
    assert.match(markup, new RegExp(`id="${areaVisualPatternId(effect, id)}"`))
    assert.ok(areaVisualPresentation(effect).surfaceClass.startsWith('questhub-area-'))
  }
})

test('leaf gust rotates its pattern with a directional area', () => {
  const markup = renderToStaticMarkup(<svg><AreaVisualPattern effect="LEAVES" id="leaves" rotationDegrees={42} /></svg>)
  assert.match(markup, /patternTransform="rotate\(42\)"/)
})
