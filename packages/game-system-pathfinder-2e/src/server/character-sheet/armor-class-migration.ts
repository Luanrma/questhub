import { PROFICIENCY_RANKS } from './constants'
import type { Pathfinder2eArmorProficiencies, Pathfinder2eSheetV2, Pathfinder2eSheetV2LegacyArmorClass } from './models'

export function defaultPathfinder2eArmorProficiencies(): Pathfinder2eArmorProficiencies {
  return {
    unarmored: PROFICIENCY_RANKS.TRAINED,
    light: PROFICIENCY_RANKS.UNTRAINED,
    medium: PROFICIENCY_RANKS.UNTRAINED,
    heavy: PROFICIENCY_RANKS.UNTRAINED,
  }
}

/**
 * Migra uma ficha com Armor Class no formato legado (`armorClass: number`,
 * sem `armorProficiencies`) para o formato dinamico V3. O numero antigo era
 * apenas um valor digitado a mao, sem breakdown a preservar — e descartado.
 */
export function migratePathfinder2eArmorClassToV3(
  sheet: Pathfinder2eSheetV2LegacyArmorClass,
): Pathfinder2eSheetV2 {
  const { armorClass: _legacyArmorClass, ...rest } = sheet

  return {
    ...rest,
    armorClass: { manualAdjustment: 0 },
    armorProficiencies: defaultPathfinder2eArmorProficiencies(),
  }
}
