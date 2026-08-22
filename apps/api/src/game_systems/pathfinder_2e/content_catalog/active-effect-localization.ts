import type { Pathfinder2eActiveEffectDefinition } from './active-effect-definitions'
import type { Pathfinder2eContentLocale } from './models'

export type Pathfinder2eActiveEffectTranslationFields = Readonly<{
  name?: string
  description?: string
}>

export type Pathfinder2eActiveEffectTranslationOverlay = Readonly<
  Record<string, Pathfinder2eActiveEffectTranslationFields>
>

// QH-EFF-013 intentionally does not invent translations. Active Effect pt-BR
// translations can be added here by stable definitionKey as they are reviewed.
export const PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_TRANSLATIONS = Object.freeze(
  {} satisfies Record<string, Pathfinder2eActiveEffectTranslationFields>,
)

function nonBlank(value: string | undefined): string | null {
  return typeof value === 'string' && value.trim().length > 0 ? value : null
}

export function resolvePathfinder2eActiveEffectDisplay(
  definition: Pathfinder2eActiveEffectDefinition,
  locale: Pathfinder2eContentLocale,
  ptBrOverlay: Pathfinder2eActiveEffectTranslationOverlay = PATHFINDER_2E_ACTIVE_EFFECT_PT_BR_TRANSLATIONS,
) {
  const translation = locale === 'pt-BR' ? ptBrOverlay[definition.definitionKey] : undefined
  const translatedName = nonBlank(translation?.name)
  const translatedDescription = nonBlank(translation?.description)

  return {
    name: translatedName ?? definition.name,
    description: translatedDescription ?? definition.description,
    localization: {
      requestedLocale: locale,
      nameLocale: translatedName ? 'pt-BR' as const : 'en-US' as const,
      descriptionLocale: translatedDescription ? 'pt-BR' as const : 'en-US' as const,
    },
  }
}
