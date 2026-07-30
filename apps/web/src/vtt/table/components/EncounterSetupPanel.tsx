import { Swords, X } from 'lucide-react'
import type { VttPlayerToken } from '../domain/types'
import { TokenAvatar } from './TokenAvatar'

export function EncounterSetupPanel({
  isMaster,
  canStart,
  tokenCount,
  selectedTokens,
  onStart,
  onRemoveSelectedToken,
}: {
  isMaster: boolean
  canStart: boolean
  tokenCount: number
  selectedTokens: readonly VttPlayerToken[]
  onStart: () => void
  onRemoveSelectedToken: (tokenId: string) => void
}) {
  return (
    <section className="max-h-[42vh] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
      <header className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <Swords className="h-4 w-4 shrink-0 text-red-300" />
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-white">Encounter Mode</span>
          <span className="block truncate text-[10px] uppercase tracking-wide text-zinc-500">
            {selectedTokens.length}/{tokenCount} tokens selecionados
          </span>
        </span>
      </header>

      <div className="grid gap-2 p-3">
        <p className="text-xs leading-relaxed text-zinc-400">
          Envie tokens da cena pelo menu de contexto para preparar o encontro.
        </p>

        {isMaster ? (
          <div
            data-encounter-dropzone="true"
            className={[
              'grid min-h-24 gap-2 rounded-md border border-dashed px-2 py-2',
              selectedTokens.length
                ? 'border-indigo-300/35 bg-indigo-500/10'
                : 'place-items-center border-white/10 bg-black/20',
            ].join(' ')}
          >
            {selectedTokens.length ? (
              <div className="grid max-h-36 gap-2 overflow-auto pr-1">
                {selectedTokens.map((token) => (
                  <div
                    key={token.id}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5"
                  >
                    <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-md text-xs font-bold text-white">
                      <TokenAvatar
                        avatarUrl={token.avatarUrl}
                        name={token.name}
                        fallbackSeed={token.id}
                        color={token.color}
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-semibold text-white">{token.name}</span>
                      <span className="block truncate text-[9px] uppercase text-zinc-500">
                        {token.role === 'NPC' ? 'NPC' : token.ownerName}
                      </span>
                    </span>
                    <button
                      type="button"
                      title={`Remover ${token.name} da preparação`}
                      className="grid h-7 w-7 place-items-center rounded-md text-zinc-400 transition hover:bg-red-500/10 hover:text-red-100"
                      onClick={() => onRemoveSelectedToken(token.id)}
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-3 text-center text-xs leading-relaxed text-zinc-500">
                Nenhum Token enviado.
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-white/10 px-3 py-4 text-center text-xs text-zinc-500">
            Nenhum encontro ativo.
          </div>
        )}

        {isMaster ? (
          <button
            type="button"
            disabled={!canStart}
            className="flex h-9 items-center justify-center gap-2 rounded-md bg-red-600 px-3 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-45"
            onClick={onStart}
          >
            <Swords className="h-4 w-4" />
            Iniciar Encontro
          </button>
        ) : null}
      </div>
    </section>
  )
}
