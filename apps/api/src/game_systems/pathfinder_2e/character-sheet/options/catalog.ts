import { PATHFINDER_2E_ANCESTRIES } from './ancestries'
import { PATHFINDER_2E_BACKGROUNDS } from './backgrounds'
import { PATHFINDER_2E_CLASSES } from './classes'
import { PATHFINDER_2E_DEITIES } from './deities'
import { PATHFINDER_2E_HERITAGES } from './heritages'
import { PATHFINDER_2E_HERITAGE_COMPATIBILITY } from './generated/heritage-compatibility.generated'
import { PATHFINDER_2E_PT_BR_TRANSLATIONS } from './translations/pt-BR'

export type Pathfinder2eContentLocale = 'en-US' | 'pt-BR'
export type Pathfinder2eTranslationStatus = 'MACHINE_DRAFT' | 'NOT_STARTED'

export type Pathfinder2eCharacterOption = {
  value: string
  labels: {
    'en-US': string
    'pt-BR'?: string
  }
  translationStatus: {
    'pt-BR': Pathfinder2eTranslationStatus
  }
}

export type Pathfinder2eHeritageOption = Pathfinder2eCharacterOption & {
  compatibility: {
    ancestry: string | null
    versatile: boolean
  }
}

type TranslationGroup = Record<string, string>

function createLocalizedOptions(
  values: readonly string[],
  translations: TranslationGroup,
): Pathfinder2eCharacterOption[] {
  return values.map((value) => {
    const translated = translations[value]
    return {
      value,
      labels: {
        'en-US': value,
        ...(translated ? { 'pt-BR': translated } : {}),
      },
      translationStatus: {
        'pt-BR': translated ? 'MACHINE_DRAFT' : 'NOT_STARTED',
      },
    }
  })
}

function createHeritageOptions(): Pathfinder2eHeritageOption[] {
  return createLocalizedOptions(
    PATHFINDER_2E_HERITAGES,
    PATHFINDER_2E_PT_BR_TRANSLATIONS.heritage,
  ).map((option) => {
    const compatibility = PATHFINDER_2E_HERITAGE_COMPATIBILITY[
      option.value as keyof typeof PATHFINDER_2E_HERITAGE_COMPATIBILITY
    ]
    if (!compatibility) {
      throw new Error(`Compatibilidade ausente para a Herança PF2e: ${option.value}`)
    }
    return {
      ...option,
      compatibility,
    }
  })
}

export const pathfinder2eCharacterSheetOptions = {
  ancestries: createLocalizedOptions(
    PATHFINDER_2E_ANCESTRIES,
    PATHFINDER_2E_PT_BR_TRANSLATIONS.ancestry,
  ),
  heritages: createHeritageOptions(),
  backgrounds: createLocalizedOptions(
    PATHFINDER_2E_BACKGROUNDS,
    PATHFINDER_2E_PT_BR_TRANSLATIONS.background,
  ),
  classes: createLocalizedOptions(
    PATHFINDER_2E_CLASSES,
    PATHFINDER_2E_PT_BR_TRANSLATIONS.class,
  ),
  deities: createLocalizedOptions(
    PATHFINDER_2E_DEITIES,
    PATHFINDER_2E_PT_BR_TRANSLATIONS.deity,
  ),
} as const

export function resolvePathfinder2eOptionLabel(
  option: Pathfinder2eCharacterOption,
  locale: Pathfinder2eContentLocale,
) {
  return option.labels[locale] ?? option.labels['en-US']
}
