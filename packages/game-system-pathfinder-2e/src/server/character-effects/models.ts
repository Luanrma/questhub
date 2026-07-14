import { z } from 'zod'

export const pathfinder2eRuleElementSourceSchema = z
  .object({ key: z.string().trim().min(1) })
  .catchall(z.unknown())

export type Pathfinder2eRuleElementSource = z.infer<typeof pathfinder2eRuleElementSourceSchema>

export const pathfinder2eActiveEffectSchema = z
  .object({
    id: z.string().trim().min(1),
    label: z.string().trim().min(1),
    rules: z.array(pathfinder2eRuleElementSourceSchema),
  })
  .strict()

export type Pathfinder2eActiveEffect = z.infer<typeof pathfinder2eActiveEffectSchema>

export const pathfinder2eCharacterActiveEffectsSchema = z
  .object({
    effects: z.array(pathfinder2eActiveEffectSchema),
  })
  .strict()

export type Pathfinder2eCharacterActiveEffectsData = z.infer<typeof pathfinder2eCharacterActiveEffectsSchema>

export const DEFAULT_PATHFINDER_2E_CHARACTER_ACTIVE_EFFECTS: Pathfinder2eCharacterActiveEffectsData = {
  effects: [],
}
