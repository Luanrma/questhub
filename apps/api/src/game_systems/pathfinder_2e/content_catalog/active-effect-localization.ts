import type { Pathfinder2eActiveEffectDefinition } from './active-effect-definitions'
import { getPathfinder2eActiveEffectPtBrTranslation } from './active-effect-pt-br'
import type { Pathfinder2eContentLocale } from './models'
import { PATHFINDER_2E_EFFECT_PT_BR_TRANSLATIONS } from './translations/pt-BR/active-effects'

export type Pathfinder2eActiveEffectTranslationFields = Readonly<{
  name?: string
  description?: string
}>

export type Pathfinder2eActiveEffectTranslationOverlay = Readonly<
  Record<string, Pathfinder2eActiveEffectTranslationFields>
>

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
  const translation = locale === 'pt-BR'
    ? ptBrOverlay[definition.definitionKey]
      ?? PATHFINDER_2E_EFFECT_PT_BR_TRANSLATIONS[definition.definitionKey]
      ?? getPathfinder2eActiveEffectPtBrTranslation(definition.source.sourcePack, definition.name)
    : undefined
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
