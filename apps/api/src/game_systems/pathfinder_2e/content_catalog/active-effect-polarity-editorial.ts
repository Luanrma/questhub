// QH-EFF-012 editorial polarity decisions for every published PF2e `effect`.
//
// The generated canonical source already contains the explicit, versioned baseline
// polarity loaded from active-effect-polarity.json. The manifests below materialize
// the individual editorial decisions that replace the historical blanket NEUTRAL
// baseline when an Effect is semantically one-sided.
//
// Runtime performs key lookup/composition only: it never inspects names,
// descriptions, Rule Elements, numeric signals, or AI to infer polarity.

import { PATHFINDER_2E_ACTIVE_EFFECT_SOURCE_DOCUMENTS } from './generated/active-effect-source'
import { PATHFINDER_2E_EFFECT_POLARITY_BESTIARY_1 } from './active-effect-polarity-editorial/bestiary-1'
import { PATHFINDER_2E_EFFECT_POLARITY_BESTIARY_2 } from './active-effect-polarity-editorial/bestiary-2'
import { PATHFINDER_2E_EFFECT_POLARITY_BESTIARY_3 } from './active-effect-polarity-editorial/bestiary-3'
import { PATHFINDER_2E_EFFECT_POLARITY_CAMPAIGN_1 } from './active-effect-polarity-editorial/campaign-1'
import { PATHFINDER_2E_EFFECT_POLARITY_EQUIPMENT_1 } from './active-effect-polarity-editorial/equipment-1'
import { PATHFINDER_2E_EFFECT_POLARITY_EQUIPMENT_2 } from './active-effect-polarity-editorial/equipment-2'
import { PATHFINDER_2E_EFFECT_POLARITY_EQUIPMENT_3 } from './active-effect-polarity-editorial/equipment-3'
import { PATHFINDER_2E_EFFECT_POLARITY_FEAT_1 } from './active-effect-polarity-editorial/feat-1'
import { PATHFINDER_2E_EFFECT_POLARITY_OTHER_1 } from './active-effect-polarity-editorial/other-1'
import { PATHFINDER_2E_EFFECT_POLARITY_SPELL_1 } from './active-effect-polarity-editorial/spell-1'
import { PATHFINDER_2E_EFFECT_POLARITY_SPELL_2 } from './active-effect-polarity-editorial/spell-2'
import { PATHFINDER_2E_EFFECT_POLARITY_SPELL_3 } from './active-effect-polarity-editorial/spell-3'

export type Pathfinder2eEditorialEffectPolarity = 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'

const PATHFINDER_2E_EFFECT_POLARITY_BASELINE = Object.fromEntries(
  PATHFINDER_2E_ACTIVE_EFFECT_SOURCE_DOCUMENTS
    .filter((document) => document.kind === 'effect')
    .map((document) => [document.definitionKey, document.polarity]),
) as Record<string, Pathfinder2eEditorialEffectPolarity>

export const PATHFINDER_2E_EFFECT_POLARITY_EDITORIAL = Object.freeze({
  ...PATHFINDER_2E_EFFECT_POLARITY_BASELINE,
  ...PATHFINDER_2E_EFFECT_POLARITY_BESTIARY_1,
  ...PATHFINDER_2E_EFFECT_POLARITY_BESTIARY_2,
  ...PATHFINDER_2E_EFFECT_POLARITY_BESTIARY_3,
  ...PATHFINDER_2E_EFFECT_POLARITY_CAMPAIGN_1,
  ...PATHFINDER_2E_EFFECT_POLARITY_EQUIPMENT_1,
  ...PATHFINDER_2E_EFFECT_POLARITY_EQUIPMENT_2,
  ...PATHFINDER_2E_EFFECT_POLARITY_EQUIPMENT_3,
  ...PATHFINDER_2E_EFFECT_POLARITY_FEAT_1,
  ...PATHFINDER_2E_EFFECT_POLARITY_OTHER_1,
  ...PATHFINDER_2E_EFFECT_POLARITY_SPELL_1,
  ...PATHFINDER_2E_EFFECT_POLARITY_SPELL_2,
  ...PATHFINDER_2E_EFFECT_POLARITY_SPELL_3,
} satisfies Record<string, Pathfinder2eEditorialEffectPolarity>)
