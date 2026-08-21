import { type FormEvent, useState } from 'react'
import { api } from '../lib/api'

type SemanticTargetType = 'condition' | 'effect' | 'affliction'

type SourceReference = {
  syntax: 'INLINE_UUID' | 'UUID_VALUE'
  sourcePath: string
  sourceIndex: number
  uuid: string
  label: string | null
  ownerSourceId: string | null
  target: {
    uuid: string
    package?: string
    sourcePack?: string
    documentType?: string
    compendiumKey?: string
    sourceId?: string
    slug?: string
    type?: SemanticTargetType
  }
}

type DebugResponse = {
  contentId: string
  count: number
  references: SourceReference[]
}

type Shortcut = {
  name: string
  contentId: string
  expected: string
}

const SHORTCUTS: Shortcut[] = [
  {
    name: 'Agonizing Despair',
    contentId: 'pf2e:spell:spells-srd:agonizing-despair',
    expected: 'Frightened 1, 2 e 3 como condition',
  },
  {
    name: 'Aerial Form',
    contentId: 'pf2e:spell:spells-srd:aerial-form',
    expected: 'Clumsy como condition + Spell Effect: Aerial Form como effect',
  },
  {
    name: 'Candle of Revealing',
    contentId: 'pf2e:item:equipment-srd:candle-of-revealing',
    expected: 'Invisible + Concealed como condition',
  },
  {
    name: 'Camouflage Suit',
    contentId: 'pf2e:item:equipment-srd:camouflage-suit',
    expected: 'Prepared Camouflage Suit como effect',
  },
  {
    name: 'Condensed Mana',
    contentId: 'pf2e:item:equipment-srd:condensed-mana',
    expected: 'Somente Stunned; Wellspring Surges/RollTable NÃO deve aparecer',
  },
  {
    name: "Cayden's Brew",
    contentId: 'pf2e:item:equipment-srd:caydens-brew',
    expected: '6 referências: Clumsy 1/2, Stupefied 1/2, Sickened 1 e Effect: Cayden\'s Brew',
  },
]

export function Pf2eSemanticReferencesDebugPage() {
  const [contentId, setContentId] = useState(SHORTCUTS[0].contentId)
  const [selectedShortcut, setSelectedShortcut] = useState<Shortcut | null>(SHORTCUTS[0])
  const [result, setResult] = useState<DebugResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function inspect(nextContentId: string) {
    const normalized = nextContentId.trim()
    if (!normalized) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await api<DebugResponse>(
        `/api/game-systems/pathfinder-2e/content/entries/${encodeURIComponent(normalized)}/source-references`,
      )
      setResult(response)
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Falha ao consultar referências')
    } finally {
      setLoading(false)
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSelectedShortcut(SHORTCUTS.find((shortcut) => shortcut.contentId === contentId.trim()) ?? null)
    void inspect(contentId)
  }

  function chooseShortcut(shortcut: Shortcut) {
    setContentId(shortcut.contentId)
    setSelectedShortcut(shortcut)
    void inspect(shortcut.contentId)
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-zinc-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Debug temporário · QH-EFF-004</p>
          <h1 className="mt-2 text-3xl font-semibold">PF2e Semantic Reference Inspector</h1>
          <p className="mt-2 max-w-3xl text-sm text-zinc-400">
            Esta tela lê diretamente o sidecar criado pelo QH-EFF-004. Ela não aplica efeitos e não altera ficha, token ou catálogo.
          </p>
        </header>

        <section className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
          <h2 className="text-sm font-semibold text-zinc-200">Casos recomendados</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {SHORTCUTS.map((shortcut) => (
              <button
                key={shortcut.contentId}
                type="button"
                onClick={() => chooseShortcut(shortcut)}
                className="rounded-lg border border-zinc-700 bg-zinc-950/60 p-3 text-left transition hover:border-amber-500/70 hover:bg-zinc-900"
              >
                <strong className="block text-sm text-zinc-100">{shortcut.name}</strong>
                <span className="mt-1 block text-xs text-zinc-400">{shortcut.expected}</span>
              </button>
            ))}
          </div>
        </section>

        <form onSubmit={submit} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
          <label htmlFor="content-id" className="text-sm font-medium text-zinc-200">Content ID</label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="content-id"
              value={contentId}
              onChange={(event) => setContentId(event.target.value)}
              className="min-w-0 flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 font-mono text-sm text-zinc-100 outline-none focus:border-amber-500"
              placeholder="pf2e:spell:spells-srd:agonizing-despair"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-amber-500 px-5 py-2 text-sm font-semibold text-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Consultando…' : 'Inspecionar'}
            </button>
          </div>
          {selectedShortcut ? (
            <p className="mt-3 text-sm text-amber-200">
              <strong>Esperado para {selectedShortcut.name}:</strong> {selectedShortcut.expected}
            </p>
          ) : null}
        </form>

        {error ? (
          <div className="rounded-xl border border-red-900 bg-red-950/40 p-4 text-sm text-red-200">{error}</div>
        ) : null}

        {result ? (
          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">Resultado</p>
                <p className="mt-1 break-all font-mono text-sm text-zinc-300">{result.contentId}</p>
              </div>
              <div className="rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm">
                <strong>{result.count}</strong> referência{result.count === 1 ? '' : 's'}
              </div>
            </div>

            {result.references.length === 0 ? (
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 text-sm text-zinc-400">
                Nenhuma referência semântica foi preservada para este conteúdo.
              </div>
            ) : (
              <div className="space-y-3">
                {result.references.map((reference, index) => (
                  <article key={`${reference.uuid}-${reference.sourcePath}-${reference.sourceIndex}-${index}`} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-zinc-100">{reference.label ?? reference.target.compendiumKey ?? '(sem label)'}</p>
                        <p className="mt-1 break-all font-mono text-xs text-zinc-500">{reference.uuid}</p>
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${reference.target.type ? 'border-emerald-700 bg-emerald-950/40 text-emerald-300' : 'border-amber-700 bg-amber-950/40 text-amber-300'}`}>
                        {reference.target.type ?? 'unresolved item'}
                      </span>
                    </div>

                    <dl className="mt-5 grid gap-x-6 gap-y-3 text-sm md:grid-cols-2 xl:grid-cols-3">
                      <Field label="syntax" value={reference.syntax} />
                      <Field label="sourcePath" value={reference.sourcePath} />
                      <Field label="sourceIndex" value={String(reference.sourceIndex)} />
                      <Field label="ownerSourceId" value={reference.ownerSourceId} />
                      <Field label="package" value={reference.target.package} />
                      <Field label="sourcePack" value={reference.target.sourcePack} />
                      <Field label="documentType" value={reference.target.documentType} />
                      <Field label="compendiumKey" value={reference.target.compendiumKey} />
                      <Field label="target.sourceId" value={reference.target.sourceId} />
                      <Field label="target.slug" value={reference.target.slug} />
                    </dl>
                  </article>
                ))}
              </div>
            )}
          </section>
        ) : null}
      </div>
    </main>
  )
}

function Field({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">{label}</dt>
      <dd className="mt-1 break-all font-mono text-xs text-zinc-300">{value ?? '—'}</dd>
    </div>
  )
}
