import assert from 'node:assert/strict'
import test from 'node:test'
import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { AreaOverlay } from '../src/vtt/area-templates/components/AreaOverlay'
import { AreaVisualPattern } from '../src/vtt/area-templates/components/AreaVisualPatterns'
import { areaVisualPatternId, areaVisualPresentation, type AnimatedAreaVisualEffect } from '../src/vtt/area-templates/components/areaVisualConfig'
import { defaultAreaTemplateInput, type AreaRenderModel, type CampaignAreaTemplate } from '../src/vtt/area-templates/domain/types'

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

test('orthogonal area clips its visual effect to covered grid cells', () => {
  const template: CampaignAreaTemplate = {
    ...defaultAreaTemplateInput,
    id: 'template-1',
    campaignId: 'campaign-1',
    createdByUserId: 'user-1',
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
    shape: 'ORTHOGONAL',
    dimensions: { radius: 3 },
    style: { ...defaultAreaTemplateInput.style, visualEffect: 'FIRE' },
  }
  const area: AreaRenderModel = {
    key: 'orthogonal:test',
    template,
    origin: { x: 10, y: 10 },
    rotationDegrees: 0,
    scale: 1,
    selected: true,
    polygon: [{ x: 0, y: 10 }, { x: 10, y: 0 }, { x: 20, y: 10 }, { x: 10, y: 20 }],
    coveredCells: [
      { id: '0:0', polygon: [{ x: 5, y: 5 }, { x: 15, y: 5 }, { x: 15, y: 15 }, { x: 5, y: 15 }] },
    ],
    touchedTokenIds: [],
  }

  const markup = renderToStaticMarkup(<AreaOverlay areas={[area]} />)

  assert.match(markup, /id="orthogonal-area-mask-orthogonaltest"/)
  assert.match(markup, /mask="url\(#orthogonal-area-mask-orthogonaltest\)"/)
  assert.match(markup, /id="area-fire-pattern-orthogonaltest"/)
})

test('orthogonal area keeps its visual effect on a hex grid without square covered cells', () => {
  const area: AreaRenderModel = {
    key: 'orthogonal:hex',
    template: {
      ...defaultAreaTemplateInput,
      id: 'template-hex',
      campaignId: 'campaign-1',
      createdByUserId: 'user-1',
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z',
      shape: 'ORTHOGONAL',
      dimensions: { radius: 3 },
      style: { ...defaultAreaTemplateInput.style, visualEffect: 'ELECTRIC' },
    },
    origin: { x: 10, y: 10 },
    rotationDegrees: 0,
    scale: 1,
    selected: true,
    polygon: [{ x: 0, y: 10 }, { x: 10, y: 0 }, { x: 20, y: 10 }, { x: 10, y: 20 }],
    coveredCells: [],
    touchedTokenIds: [],
  }

  const markup = renderToStaticMarkup(<AreaOverlay areas={[area]} />)

  assert.match(markup, /id="area-electric-pattern-orthogonalhex"/)
  assert.doesNotMatch(markup, /orthogonal-area-mask-orthogonalhex/)
})
