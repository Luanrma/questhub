import { pathfinder2eManualCharacterSheetSchema, type Pathfinder2eManualCharacterSheet } from './schema'

const untrained = { rank: 0 as const, value: 0 }

export function createDefaultPathfinder2eManualCharacterSheet(): Pathfinder2eManualCharacterSheet {
  return pathfinder2eManualCharacterSheetSchema.parse({
    schemaVersion: 1,
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
      maximum: 0,
      current: 0,
      temporary: 0,
      wounded: 0,
      dying: 0,
      doomed: 0,
      bonus: 0,
    },
    armorClass: 0,
    initiative: 0,
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
