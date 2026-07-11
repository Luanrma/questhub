import assert from 'node:assert/strict'
import { describe, test } from 'node:test'
import type { Pathfinder2eBuildChoices } from '../types'
import {
  createDefaultPathfinder2eAttributeScores,
  derivePathfinder2eAttributeScoresFromBuildChoices,
} from './buildChoices'

function emptyBuildChoices(): Pathfinder2eBuildChoices {
  return {
    ancestry: {
      boosts: {},
      flaws: {},
      alternateBoostsEnabled: false,
      additionalLanguages: [],
      ruleSelections: {},
    },
    heritage: {
      ruleSelections: {},
    },
    background: {
      boosts: {},
      ruleSelections: {},
    },
    class: {
      keyAbility: null,
      trainedSkills: [],
      ruleSelections: {},
    },
  }
}

describe('derivePathfinder2eAttributeScoresFromBuildChoices', () => {
  test('returns base 10 scores when no attribute choice exists', () => {
    assert.deepEqual(
      derivePathfinder2eAttributeScoresFromBuildChoices(emptyBuildChoices()),
      createDefaultPathfinder2eAttributeScores(),
    )
  })

  test('applies ancestry boosts, ancestry flaws, background boosts, and class key ability', () => {
    const choices = emptyBuildChoices()
    choices.ancestry.boosts = {
      'ancestry-boost:0': 'str',
      'ancestry-boost:1': 'dex',
    }
    choices.ancestry.flaws = {
      'ancestry-flaw:0': 'wis',
    }
    choices.background.boosts = {
      'background-boost:0': 'str',
      'background-boost:1': 'cha',
    }
    choices.class.keyAbility = 'str'

    assert.deepEqual(derivePathfinder2eAttributeScoresFromBuildChoices(choices), {
      strength: 16,
      dexterity: 12,
      constitution: 10,
      intelligence: 10,
      wisdom: 8,
      charisma: 12,
    })
  })
})
