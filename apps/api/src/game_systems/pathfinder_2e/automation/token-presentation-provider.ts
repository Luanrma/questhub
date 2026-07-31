import type {
  GameSystemCharacterSheetSnapshot,
  GameSystemTokenPresentationProvider,
  TokenIndicatorPresentation,
  TokenPresentation,
} from '../../automation/contracts'
import {
  catalogTokenSheetSystemKey,
  parseCatalogTokenSheetEnvelope,
} from '../../catalog'
import { gameSystemRuntime } from '../../runtime/game-system-runtime'
import { pathfinder2eCharacterSheetRuntimeAdapter } from '../character-sheet/adapter'
import {
  parsePathfinder2eCatalogTokenSheetData,
  resolvePathfinder2eCatalogTokenSheetData,
} from './catalog-token-sheet'
import {
  buildPathfinder2eCatalogTokenActions,
  buildPathfinder2eCharacterSpellActions,
  buildPathfinder2ePlayerSkillActions,
  findPathfinder2eCatalogTokenEntry,
} from './encounter-action-presentation'

function emptyPresentation(tokenId: string, revision = 'unlinked'): TokenPresentation {
  return {
    tokenId,
    revision,
    resources: [],
    indicators: [],
    actions: [],
  }
}

function invalidSheetPresentation(tokenId: string, revision: string): TokenPresentation {
  return {
    tokenId,
    revision,
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

function presentationRevision(sheet: GameSystemCharacterSheetSnapshot) {
  const timestamps = [
    sheet.updatedAt,
    ...(sheet.entries ?? []).map((entry) => entry.updatedAt),
  ]
  const newest = timestamps.reduce((current, candidate) => (
    candidate.getTime() > current.getTime() ? candidate : current
  ))
  return newest.toISOString()
}

function buildCatalogTokenPresentation(
  tokenId: string,
  revision: string,
  sheetData: unknown,
): TokenPresentation {
  const envelope = parseCatalogTokenSheetEnvelope(sheetData)
  const data = envelope
    ? parsePathfinder2eCatalogTokenSheetData(envelope.data)
      ?? resolvePathfinder2eCatalogTokenSheetData(envelope.source.contentId)
    : null
  if (!data) return invalidSheetPresentation(tokenId, revision)
  const entry = envelope
    ? findPathfinder2eCatalogTokenEntry(envelope.source.contentId)
    : null

  return {
    tokenId,
    revision,
    resources: [
      {
        id: 'primary-vitality',
        slot: 'primary',
        label: 'PV',
        value: data.hitPoints.current,
        maximum: data.hitPoints.maximum,
        presentation: 'bar',
        visibility: 'PUBLIC',
      },
    ],
    indicators: [],
    actions: entry
      ? buildPathfinder2eCatalogTokenActions(entry, envelope?.source.locale ?? 'pt-BR')
      : [],
  }
}

export const pathfinder2eTokenPresentationProvider: GameSystemTokenPresentationProvider = {
  systemKey: pathfinder2eCharacterSheetRuntimeAdapter.systemKey,
  capabilities: [
    'TOKEN_PRESENTATION',
    'TOKEN_RESOURCES',
    'TOKEN_INDICATORS',
    'TOKEN_ACTIONS',
    'CHARACTER_SHEET',
  ],

  buildTokenPresentation(context) {
    const sheet = context.characterSheet
    if (!sheet) {
      return emptyPresentation(context.tokenId)
    }

    const revision = presentationRevision(sheet)
    if (sheet.systemKey === catalogTokenSheetSystemKey('PATHFINDER_2E')) {
      return buildCatalogTokenPresentation(context.tokenId, revision, sheet.data)
    }
    if (sheet.systemKey !== pathfinder2eCharacterSheetRuntimeAdapter.systemKey) {
      return emptyPresentation(context.tokenId, revision)
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
        revision,
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
        actions: [
          ...buildPathfinder2ePlayerSkillActions(resolved.derived),
          ...buildPathfinder2eCharacterSpellActions(sheet.entries ?? [], 'pt-BR'),
        ],
      }
    } catch {
      return {
        tokenId: context.tokenId,
        revision,
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
