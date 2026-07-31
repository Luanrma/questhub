import assert from 'node:assert/strict'
import test from 'node:test'
import {
  activateRuntimeSpatialTemplate,
  clearRuntimeSpatialTemplate,
  runtimeTargetIsWithinRange,
} from './runtimeSpatialActivation'
import type { CampaignAreaTemplate } from './types'

function runtimeTargetTemplate(maximumDistance: number): CampaignAreaTemplate {
  const timestamp = new Date('2026-07-31T00:00:00.000Z').toISOString()
  return {
    id: 'runtime:test',
    campaignId: 'campaign-1',
    createdByUserId: 'user-1',
    name: 'Touch',
    tags: [],
    shape: 'TARGET',
    volumeShape: 'NONE',
    dimensions: { targetCount: 1 },
    measurementMode: 'WORLD_UNIT',
    measurementUnit: 'm',
    originMode: 'TARGET_TOKEN',
    placementMode: 'POINT',
    propagationMode: 'IGNORE_WALLS',
    persistenceMode: 'INSTANT',
    movementMode: 'STATIC',
    cellInclusionRule: 'ANY_OVERLAP',
    tokenIntersectionRule: 'MANUAL',
    includesOrigin: false,
    stopAtFirstObstacle: false,
    style: {
      visualEffect: 'DEFAULT',
      fillColor: '#000000',
      borderColor: '#000000',
      borderWidthPx: 1,
      opacity: 0.5,
      showCoveredCells: false,
      showOrigin: false,
      showDirectionLine: false,
      affectedTokenRing: {
        color: '#000000',
        opacity: 1,
        thicknessPx: 1,
        gapPx: 0,
        pulse: false,
      },
    },
    visibility: 'MASTER_ONLY',
    createdAt: timestamp,
    updatedAt: timestamp,
    runtimeSource: {
      kind: 'TOKEN_ACTION',
      sourceTokenId: 'caster',
      actionId: 'spell:test',
      maximumDistance,
    },
  }
}

test('runtime target range treats adjacent Tokens as 1 grid cell', () => {
  activateRuntimeSpatialTemplate(runtimeTargetTemplate(1.5), 1.5)
  const tokens = [
    { id: 'caster', position: { x: 1, y: 1 }, size: 1 },
    { id: 'adjacent', position: { x: 2, y: 2 }, size: 1 },
    { id: 'far', position: { x: 3, y: 1 }, size: 1 },
  ]

  assert.equal(runtimeTargetIsWithinRange('adjacent', tokens), true)
  assert.equal(runtimeTargetIsWithinRange('far', tokens), false)
  clearRuntimeSpatialTemplate()
})
