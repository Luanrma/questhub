import { PROFICIENCY_RANKS } from './constants'
import type { Pathfinder2eBuildChoices } from '../character-options/models'
import type { Pathfinder2eSheetV2 } from './models'

export const defaultPathfinder2eBuildChoices: Pathfinder2eBuildChoices = {
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

export const defaultPathfinder2eSheet: Pathfinder2eSheetV2 = {
  general: {
    experience: {
      current: 0,
      nextLevel: 0,
    },
    movementMeters: 0,
  },
  identity: {
    level: 1,
    ancestry: null,
    heritage: null,
    background: null,
    class: null,
  },
  buildChoices: defaultPathfinder2eBuildChoices,
  attributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  hitPoints: {
    maximum: 0,
    current: 0,
    temporary: 0,
    wounded: 0,
    dying: 0,
    doomed: 0,
    manualAdjustment: 0,
  },
  armorClass: {
    manualAdjustment: 0,
  },
  armorProficiencies: {
    unarmored: PROFICIENCY_RANKS.TRAINED,
    light: PROFICIENCY_RANKS.UNTRAINED,
    medium: PROFICIENCY_RANKS.UNTRAINED,
    heavy: PROFICIENCY_RANKS.UNTRAINED,
  },
  initiative: 0,
  perception: {
    rank: PROFICIENCY_RANKS.UNTRAINED,
    value: 0,
  },
  savingThrows: {
    fortitude: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    reflex: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    will: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
  },
  skills: {
    acrobatics: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    arcana: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    athletics: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    crafting: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    deception: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    diplomacy: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    intimidation: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    medicine: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    nature: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    occultism: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    performance: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    religion: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    society: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    stealth: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    survival: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
    thievery: {
      rank: PROFICIENCY_RANKS.UNTRAINED,
      value: 0,
    },
  },
  notes: '',
}
