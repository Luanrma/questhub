import { ClipboardList, X } from 'lucide-react'
import { useState } from 'react'
import type { VttPlayerToken } from '../domain/types'
import { TokenAvatar } from './TokenAvatar'

export function EncounterSetupPanel({
  isMaster,
  canStart,
  tokenCount,
  selectedTokens,
  pending,
  error,
  onStart,
  onRemoveSelectedToken,
}: {
  isMaster: boolean
  canStart: boolean
  tokenCount: number
  selectedTokens: readonly VttPlayerToken[]
  pending: boolean
  error: string | null
  onStart: (details: { name: string; privateNotes: string }) => void
  onRemoveSelectedToken: (tokenId: string) => void
}) {
  const [name, setName] = useState('Novo encontro')
  const [privateNotes, setPrivateNotes] = useState('')
  const validName = name.trim().length > 0 && name.trim().length <= 120

  return (
    <section className="max-h-full overflow-auto rounded-lg border border-white/10 bg-white/[0.035]">
      <header className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <ClipboardList className="h-4 w-4 shrink-0 text-indigo-300" />
        <span>
          <span className="block text-sm font-semibold text-white">Novo encontro</span>
          <span className="block text-[10px] uppercase tracking-wide text-zinc-500">Organização manual da sessão</span>
        </span>
      </header>

      <div className="grid gap-3 p-3">
        {isMaster ? (
          <>
            <label className="grid gap-1 text-xs font-medium text-zinc-300">
              Nome
              <input value={name} maxLength={120} className="h-9 rounded-md border border-white/10 bg-black/25 px-3 text-sm text-white outline-none focus:border-indigo-300/60" onChange={(event) => setName(event.target.value)} />
            </label>
            <label className="grid gap-1 text-xs font-medium text-zinc-300">
              Anotações privadas
              <textarea value={privateNotes} maxLength={20_000} rows={4} placeholder="Visível somente para o mestre." className="resize-y rounded-md border border-white/10 bg-black/25 px-3 py-2 text-sm text-white outline-none focus:border-indigo-300/60" onChange={(event) => setPrivateNotes(event.target.value)} />
            </label>

            <div>
              <div className="mb-2 text-[10px] uppercase tracking-wide text-zinc-500">{selectedTokens.length}/{tokenCount} tokens preparados</div>
              <div data-encounter-dropzone="true" className="grid min-h-20 gap-2 rounded-md border border-dashed border-white/10 bg-black/20 p-2">
                {selectedTokens.length ? selectedTokens.map((token) => (
                  <div key={token.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5">
                    <TokenAvatar avatarUrl={token.avatarUrl} name={token.name} fallbackSeed={token.id} color={token.color} className="h-8 w-8 rounded-md object-cover" />
                    <span className="truncate text-xs font-semibold text-white">{token.name}</span>
                    <button type="button" aria-label={`Remover ${token.name} da preparação`} className="grid h-7 w-7 place-items-center rounded-md text-zinc-400 hover:bg-red-500/10 hover:text-red-100" onClick={() => onRemoveSelectedToken(token.id)}><X className="h-3.5 w-3.5" /></button>
                  </div>
                )) : <p className="self-center px-2 text-center text-xs leading-relaxed text-zinc-500">Você pode iniciar sem tokens e adicioná-los depois.</p>}
              </div>
            </div>

            {error ? <p role="alert" className="text-xs text-red-300">{error}</p> : null}
            <button type="button" disabled={!canStart || !validName || pending} className="h-9 rounded-md bg-indigo-600 px-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-45" onClick={() => onStart({ name: name.trim(), privateNotes })}>
              {pending ? 'Iniciando…' : 'Iniciar encontro'}
            </button>
          </>
        ) : <p className="rounded-md border border-dashed border-white/10 px-3 py-4 text-center text-xs text-zinc-500">Nenhum encontro ativo.</p>}
      </div>
    </section>
  )
}
