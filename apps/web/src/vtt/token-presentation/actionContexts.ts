import type { TokenActionPresentation } from './types'

export type TokenActionContext = TokenActionPresentation['contexts'][number]

export function tokenActionsForContext(
  actions: readonly TokenActionPresentation[],
  context: TokenActionContext,
) {
  return actions.filter((action) => action.contexts.includes(context))
}
