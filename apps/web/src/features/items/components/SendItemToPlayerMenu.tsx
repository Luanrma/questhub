import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Send } from 'lucide-react'
import { api, ApiError } from '../../../lib/api'

export type SendItemToPlayerOption = {
  characterId: string
  characterName: string | null
  email: string
}

type Props = {
  campaignId: string
  itemId: string
  players: SendItemToPlayerOption[]
  compact?: boolean
}

export function SendItemToPlayerMenu({ campaignId, itemId, players, compact = false }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  const [sendingCharacterId, setSendingCharacterId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [sentLabel, setSentLabel] = useState<string | null>(null)

  useEffect(() => {
    if (!open) return

    function onClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  useEffect(() => {
    if (!sentLabel) return
    const timeout = window.setTimeout(() => setSentLabel(null), 2500)
    return () => window.clearTimeout(timeout)
  }, [sentLabel])

  async function sendTo(player: SendItemToPlayerOption) {
    setSendingCharacterId(player.characterId)
    setError(null)
    try {
      await api(`/api/campaigns/${campaignId}/items/${encodeURIComponent(itemId)}/send-to-player`, {
        method: 'POST',
        body: JSON.stringify({ characterId: player.characterId }),
      })
      setSentLabel(`Enviado para ${player.characterName ?? player.email}`)
      setOpen(false)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Nao foi possivel enviar o item.')
    } finally {
      setSendingCharacterId(null)
    }
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        title="Enviar para jogador"
        aria-label="Enviar para jogador"
        className={[
          'inline-flex max-w-full items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-500/10 px-3 text-xs font-semibold uppercase text-emerald-100 transition hover:bg-emerald-500/20',
          compact ? 'h-8' : 'h-9',
        ].join(' ')}
        onClick={() => setOpen((current) => !current)}
      >
        <Send className="h-4 w-4" />
        <span className="min-w-0 truncate">Enviar</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {open ? (
        <div className="absolute left-0 top-full z-20 mt-1 w-56 overflow-hidden rounded-md border border-white/10 bg-zinc-950 shadow-xl">
          {players.length === 0 ? (
            <div className="px-3 py-2 text-xs text-zinc-400">Nenhum jogador ativo nesta campanha.</div>
          ) : (
            players.map((player) => (
              <button
                key={player.characterId}
                type="button"
                disabled={sendingCharacterId === player.characterId}
                className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left text-xs text-zinc-200 transition hover:bg-white/10 disabled:cursor-default disabled:opacity-50"
                onClick={() => sendTo(player)}
              >
                <span className="min-w-0 truncate">{player.characterName ?? player.email}</span>
                {sendingCharacterId === player.characterId ? <span className="shrink-0 text-[10px] text-zinc-400">Enviando...</span> : null}
              </button>
            ))
          )}
          {error ? <div className="border-t border-white/10 px-3 py-2 text-[11px] text-red-300">{error}</div> : null}
        </div>
      ) : null}

      {!open && sentLabel ? (
        <div className="absolute left-0 top-full z-10 mt-1 w-56 truncate rounded-md border border-emerald-300/20 bg-emerald-500/10 px-3 py-1.5 text-[11px] text-emerald-100">
          {sentLabel}
        </div>
      ) : null}
    </div>
  )
}
