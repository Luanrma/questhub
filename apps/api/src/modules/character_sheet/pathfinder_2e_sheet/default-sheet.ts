import { PROFICIENCY_RANKS } from './constants'
import type { Pathfinder2eSheet } from './models'

export const defaultPathfinder2eSheet: Pathfinder2eSheet = {
  identity: {
    level: 1,
    ancestry: '',
    heritage: '',
    background: '',
    className: '',
  },
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
  },
  armorClass: 10,
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
