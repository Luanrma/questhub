import { useCallback, useEffect, useState } from 'react'
import {
  ActiveEffectsConflictError,
  fetchCharacterActiveEffects,
  saveCharacterActiveEffects,
} from '../infrastructure/activeEffectsApi'
import type { Pathfinder2eActiveEffect, Pathfinder2eCharacterActiveEffectsData } from '../types'

const EMPTY_ACTIVE_EFFECTS: Pathfinder2eCharacterActiveEffectsData = { effects: [] }

type State = {
  loading: boolean
  saving: boolean
  error: string | null
  revision: number
  data: Pathfinder2eCharacterActiveEffectsData
}

export function useCharacterActiveEffects(characterId: string | null) {
  const [state, setState] = useState<State>({ loading: true, saving: false, error: null, revision: 0, data: EMPTY_ACTIVE_EFFECTS })

  const reload = useCallback(() => {
    if (!characterId) return

    setState((current) => ({ ...current, loading: true, error: null }))
    fetchCharacterActiveEffects(characterId)
      .then((response) => {
        setState({
          loading: false,
          saving: false,
          error: null,
          revision: response.revision,
          data: response.activeEffects.data.pathfinder2e ?? EMPTY_ACTIVE_EFFECTS,
        })
      })
      .catch((error) => {
        setState((current) => ({ ...current, loading: false, error: error instanceof Error ? error.message : 'Erro desconhecido' }))
      })
  }, [characterId])

  useEffect(() => {
    reload()
  }, [reload])

  const save = useCallback(
    async (nextData: Pathfinder2eCharacterActiveEffectsData) => {
      if (!characterId) return

      setState((current) => ({ ...current, saving: true, error: null }))

      try {
        const response = await saveCharacterActiveEffects(characterId, state.revision, {
          system: 'PATHFINDER_2E',
          version: 1,
          data: { pathfinder2e: nextData },
        })
        setState({
          loading: false,
          saving: false,
          error: null,
          revision: response.revision,
          data: response.activeEffects.data.pathfinder2e ?? EMPTY_ACTIVE_EFFECTS,
        })
      } catch (error) {
        if (error instanceof ActiveEffectsConflictError) {
          setState((current) => ({ ...current, saving: false, error: `${error.message} Recarregando...` }))
          reload()
          return
        }
        setState((current) => ({ ...current, saving: false, error: error instanceof Error ? error.message : 'Erro ao salvar' }))
      }
    },
    [characterId, reload, state.revision],
  )

  const addEffect = useCallback(
    (effect: Pathfinder2eActiveEffect) => save({ effects: [...state.data.effects, effect] }),
    [save, state.data.effects],
  )

  const removeEffect = useCallback(
    (effectId: string) => save({ effects: state.data.effects.filter((effect) => effect.id !== effectId) }),
    [save, state.data.effects],
  )

  return { ...state, save, addEffect, removeEffect, reload }
}
