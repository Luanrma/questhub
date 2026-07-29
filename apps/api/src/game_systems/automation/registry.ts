import type { GameSystemKey } from '../catalog'
import type {
  GameSystemTokenPresentationProvider,
  TokenPresentation,
  TokenPresentationVisibility,
} from './contracts'

const tokenPresentationProviders = new Map<
  GameSystemKey,
  GameSystemTokenPresentationProvider
>()

export function registerGameSystemTokenPresentationProvider(
  system: GameSystemKey,
  provider: GameSystemTokenPresentationProvider,
) {
  if (tokenPresentationProviders.has(system)) {
    throw new Error(`Token presentation provider already registered for ${system}`)
  }

  tokenPresentationProviders.set(system, provider)
}

export function getGameSystemTokenPresentationProvider(system: GameSystemKey) {
  return tokenPresentationProviders.get(system) ?? null
}

function canView(
  visibility: TokenPresentationVisibility,
  viewer: { role: 'MASTER' | 'PLAYER'; controlsToken: boolean },
) {
  if (visibility === 'PUBLIC') return true
  if (visibility === 'MASTER_ONLY') return viewer.role === 'MASTER'
  return viewer.role === 'MASTER' || viewer.controlsToken
}

export function filterTokenPresentationForViewer(
  presentation: TokenPresentation,
  viewer: { role: 'MASTER' | 'PLAYER'; controlsToken: boolean },
): TokenPresentation {
  return {
    ...presentation,
    resources: presentation.resources.filter((resource) => canView(resource.visibility, viewer)),
    indicators: presentation.indicators.filter((indicator) => canView(indicator.visibility, viewer)),
    actions: presentation.actions.filter((action) => canView(action.visibility, viewer)),
  }
}

export function clearGameSystemTokenPresentationProvidersForTests() {
  tokenPresentationProviders.clear()
}
