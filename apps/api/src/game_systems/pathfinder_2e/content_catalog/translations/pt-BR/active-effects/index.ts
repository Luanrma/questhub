import { PATHFINDER_2E_CAMPAIGN_EFFECT_PT_BR, type Pathfinder2eEffectPtBrTranslation } from './campaign'

export const PATHFINDER_2E_EFFECT_PT_BR_TRANSLATIONS = Object.freeze({
  ...PATHFINDER_2E_CAMPAIGN_EFFECT_PT_BR,
} satisfies Readonly<Record<string, Pathfinder2eEffectPtBrTranslation>>)

export type { Pathfinder2eEffectPtBrTranslation }
