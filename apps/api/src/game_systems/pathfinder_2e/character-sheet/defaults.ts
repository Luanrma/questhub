import {
  pathfinder2eCharacterSheetSchema,
  type Pathfinder2eCharacterSheetData,
} from './schema'

const untrained = { rank: 0 as const, bonus: 0 }

export function createDefaultPathfinder2eCharacterSheet(): Pathfinder2eCharacterSheetData {
  return pathfinder2eCharacterSheetSchema.parse({
    schemaVersion: 2,
    general: {
      experience: { current: 0, nextLevel: 1000 },
      movementMeters: 0,
    },
    identity: {
      level: 1,
      ancestry: '',
      heritage: '',
      background: '',
      class: '',
      deity: '',
    },
    attributes: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    hitPoints: {
      current: 0,
      temporary: 0,
      wounded: 0,
      dying: 0,
      doomed: 0,
      bonus: 0,
    },
    armorClass: { bonus: 0 },
    initiative: { bonus: 0 },
    perception: { ...untrained },
    savingThrows: {
      fortitude: { ...untrained },
      reflex: { ...untrained },
      will: { ...untrained },
    },
    skills: {
      acrobatics: { ...untrained },
      arcana: { ...untrained },
      athletics: { ...untrained },
      crafting: { ...untrained },
      deception: { ...untrained },
      diplomacy: { ...untrained },
      intimidation: { ...untrained },
      medicine: { ...untrained },
      nature: { ...untrained },
      occultism: { ...untrained },
      performance: { ...untrained },
      religion: { ...untrained },
      society: { ...untrained },
      stealth: { ...untrained },
      survival: { ...untrained },
      thievery: { ...untrained },
    },
    armorProficiencies: {
      unarmored: 0,
      light: 0,
      medium: 0,
      heavy: 0,
    },
    notes: '',
  })
}

// Alias temporario para imports da primeira fase.
export const createDefaultPathfinder2eManualCharacterSheet = createDefaultPathfinder2eCharacterSheet
