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
  notes: '',
}
