import type {
  GameSystemTokenPresentationProvider,
  TokenIndicatorPresentation,
  TokenPresentation,
} from '../../automation/contracts'
import { gameSystemRuntime } from '../../runtime/game-system-runtime'
import { pathfinder2eCharacterSheetRuntimeAdapter } from '../character-sheet/adapter'

function emptyPresentation(tokenId: string, revision = 'unlinked'): TokenPresentation {
  return {
    tokenId,
    revision,
    resources: [],
    indicators: [],
    actions: [],
  }
}

export const pathfinder2eTokenPresentationProvider: GameSystemTokenPresentationProvider = {
  systemKey: pathfinder2eCharacterSheetRuntimeAdapter.systemKey,
  capabilities: [
    'TOKEN_PRESENTATION',
    'TOKEN_RESOURCES',
    'TOKEN_INDICATORS',
    'CHARACTER_SHEET',
  ],

  buildTokenPresentation(context) {
    const sheet = context.characterSheet
    if (!sheet || sheet.systemKey !== pathfinder2eCharacterSheetRuntimeAdapter.systemKey) {
      return emptyPresentation(context.tokenId)
    }

    try {
      const resolved = gameSystemRuntime.resolveCharacterSheet(
        pathfinder2eCharacterSheetRuntimeAdapter,
        sheet.data,
      )
      const hitPoints = resolved.data.hitPoints
      const indicators: TokenIndicatorPresentation[] = []

      if (hitPoints.wounded > 0) {
        indicators.push({
          id: 'wounded',
          label: 'Ferido',
          value: hitPoints.wounded,
          visibility: 'PUBLIC',
          severity: 'warning',
        })
      }
      if (hitPoints.dying > 0) {
        indicators.push({
          id: 'dying',
          label: 'Morrendo',
          value: hitPoints.dying,
          visibility: 'PUBLIC',
          severity: 'critical',
        })
      }
      if (hitPoints.doomed > 0) {
        indicators.push({
          id: 'doomed',
          label: 'Condenado',
          value: hitPoints.doomed,
          visibility: 'PUBLIC',
          severity: 'critical',
        })
      }

      return {
        tokenId: context.tokenId,
        revision: sheet.updatedAt.toISOString(),
        resources: [
          {
            id: 'primary-vitality',
            slot: 'primary',
            label: 'PV',
            value: hitPoints.current,
            maximum: resolved.derived.hitPoints.maximum,
            temporary: hitPoints.temporary,
            presentation: 'bar',
            visibility: 'PUBLIC',
          },
        ],
        indicators,
        actions: [],
      }
    } catch {
      return {
        tokenId: context.tokenId,
        revision: sheet.updatedAt.toISOString(),
        resources: [],
        indicators: [
          {
            id: 'invalid-character-sheet',
            label: 'Ficha inválida',
            visibility: 'MASTER_ONLY',
            severity: 'critical',
          },
        ],
        actions: [],
      }
    }
  },
}
