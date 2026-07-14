import { useEffect, useState } from 'react'
import { searchCampaignSpells } from '../infrastructure/spellCatalogSearchApi'
import type { Pathfinder2eSpellSearchResult } from '../types'

type Props = {
  campaignId: string | null
  category?: 'spell' | 'ritual' | 'all'
  placeholder?: string
  onPick: (result: Pathfinder2eSpellSearchResult) => void
  compact?: boolean
  maxRank?: number
}

const DEBOUNCE_MS = 250
const MIN_QUERY_LENGTH = 2

function resultRank(result: Pathfinder2eSpellSearchResult): number | null {
  const parsed = Number(result.rank)
  return Number.isFinite(parsed) ? parsed : null
}

export function SpellSearchPicker({ campaignId, category = 'all', placeholder = 'Buscar magia por nome...', onPick, compact = false, maxRank }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Pathfinder2eSpellSearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!campaignId || query.trim().length < MIN_QUERY_LENGTH) {
      setResults([])
      setError(null)
      return
    }

    const handle = setTimeout(() => {
      setLoading(true)
      setError(null)
      searchCampaignSpells(campaignId, { q: query.trim(), category, limit: 8 })
        .then((found) => setResults(maxRank === undefined ? found : found.filter((result) => (resultRank(result) ?? 0) <= maxRank)))
        .catch((searchError) => {
          setError(searchError instanceof Error ? searchError.message : 'Erro na busca')
          setResults([])
        })
        .finally(() => setLoading(false))
    }, DEBOUNCE_MS)

    return () => clearTimeout(handle)
  }, [campaignId, query, category])

  return (
    <div className={compact ? 'spell-search-picker spell-search-picker-compact' : 'sheet-build-choice spell-search-picker'}>
      {!compact ? <span>Buscar no catalogo</span> : null}
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={placeholder} disabled={!campaignId} />
      {loading ? <em>Buscando...</em> : null}
      {error ? <p className="sheet-error">{error}</p> : null}
      {results.length > 0 ? (
        <div className="spell-search-results">
          {results.map((result) => (
            <button
              key={result.id}
              type="button"
              className="spell-search-result"
              onClick={() => {
                onPick(result)
                setQuery('')
                setResults([])
              }}
            >
              <span>{result.name}</span>
              <small>{result.rank ? `Rank ${result.rank}` : result.category === 'ritual' ? 'Ritual' : ''}</small>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
