import { useCallback, useEffect, useState } from 'react'
import { fetchCharacterSpellbook, saveCharacterSpellbook, SpellbookConflictError } from '../infrastructure/spellbookApi'
import type { Pathfinder2eCharacterSpellbookData } from '../types'

const EMPTY_SPELLBOOK: Pathfinder2eCharacterSpellbookData = { entries: [], rituals: [] }

type State = {
  loading: boolean
  saving: boolean
  error: string | null
  revision: number
  data: Pathfinder2eCharacterSpellbookData
}

export function useCharacterSpellbook(characterId: string | null) {
  const [state, setState] = useState<State>({ loading: true, saving: false, error: null, revision: 0, data: EMPTY_SPELLBOOK })

  const reload = useCallback(() => {
    if (!characterId) return

    setState((current) => ({ ...current, loading: true, error: null }))
    fetchCharacterSpellbook(characterId)
      .then((response) => {
        setState({
          loading: false,
          saving: false,
          error: null,
          revision: response.revision,
          data: response.spellbook.data.pathfinder2e ?? EMPTY_SPELLBOOK,
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
    async (nextData: Pathfinder2eCharacterSpellbookData) => {
      if (!characterId) return

      setState((current) => ({ ...current, saving: true, error: null }))

      try {
        const response = await saveCharacterSpellbook(characterId, state.revision, {
          system: 'PATHFINDER_2E',
          version: 1,
          data: { pathfinder2e: nextData },
        })
        setState({
          loading: false,
          saving: false,
          error: null,
          revision: response.revision,
          data: response.spellbook.data.pathfinder2e ?? EMPTY_SPELLBOOK,
        })
      } catch (error) {
        if (error instanceof SpellbookConflictError) {
          setState((current) => ({ ...current, saving: false, error: `${error.message} Recarregando...` }))
          reload()
          return
        }
        setState((current) => ({ ...current, saving: false, error: error instanceof Error ? error.message : 'Erro ao salvar' }))
      }
    },
    [characterId, reload, state.revision],
  )

  return { ...state, save, reload }
}
