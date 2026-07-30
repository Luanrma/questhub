import { useEffect, useState } from 'react'
import { Loader2, Package, Send, UserRound, X } from 'lucide-react'
import { api } from '../lib/api'

type Recipient = {
  recipientActorId: string
  memberId: string
  userId: string
  email: string
  actor: {
    id: string
    name: string
    avatarUrl: string | null
  }
}

type RecipientsResponse = {
  recipients: Recipient[]
}

type SendResponse = {
  recipient: Recipient
  entry: {
    id: string
    quantity: number
    presentation: { name: string } | null
  }
  stacked: boolean
}

type Props = {
  campaignId: string
  contentId: string
  itemName: string
  onClose: () => void
}

export function CatalogItemSendModal({ campaignId, contentId, itemName, onClose }: Props) {
  const [recipients, setRecipients] = useState<Recipient[]>([])
  const [recipientActorId, setRecipientActorId] = useState('')
  const [quantity, setQuantity] = useState('1')
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<SendResponse | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    queueMicrotask(() => {
      if (controller.signal.aborted) return
      setLoading(true)
      setError(null)
    })

    api<RecipientsResponse>(`/api/campaigns/${campaignId}/inventory/recipients`, {
      signal: controller.signal,
    })
      .then((response) => {
        setRecipients(response.recipients)
        setRecipientActorId(response.recipients[0]?.recipientActorId ?? '')
      })
      .catch((cause) => {
        if (controller.signal.aborted) return
        setError(cause instanceof Error ? cause.message : 'Não foi possível carregar os jogadores.')
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [campaignId])

  async function sendItem() {
    const parsedQuantity = Number(quantity)
    if (!recipientActorId || !Number.isInteger(parsedQuantity) || parsedQuantity < 1 || parsedQuantity > 1_000_000) {
      setError('Selecione um ator e informe uma quantidade válida.')
      return
    }

    setSending(true)
    setError(null)

    try {
      const response = await api<SendResponse>(
        `/api/campaigns/${campaignId}/catalog/items/${encodeURIComponent(contentId)}/send`,
        {
          method: 'POST',
          body: JSON.stringify({
            recipientActorId,
            quantity: parsedQuantity,
          }),
        },
      )
      setSuccess(response)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível enviar o item.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Enviar ${itemName}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#111218] text-white shadow-[0_35px_120px_rgba(0,0,0,0.8)]">
        <header className="flex items-start justify-between gap-4 border-b border-white/10 bg-black/30 px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
              <Send className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-lg font-semibold">Enviar item</h1>
              <p className="mt-0.5 truncate text-xs text-zinc-400">{itemName}</p>
            </div>
          </div>

          <button
            type="button"
            title="Fechar"
            onClick={onClose}
            className="rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="p-5">
          {error ? (
            <div className="mb-4 rounded-xl border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          {success ? (
            <div className="rounded-xl border border-emerald-300/25 bg-emerald-500/10 p-5">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-500/15 text-emerald-200">
                  <Package className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-semibold text-emerald-100">Item enviado</h2>
                  <p className="mt-1 text-sm leading-6 text-emerald-100/75">
                    {success.entry.quantity} unidade(s) de {success.entry.presentation?.name ?? itemName} agora estão no inventário de {success.recipient.actor.name}.
                  </p>
                  {success.stacked ? (
                    <p className="mt-2 text-xs text-emerald-200/65">O item foi agrupado a uma entrada existente.</p>
                  ) : null}
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="mt-5 w-full rounded-lg border border-emerald-300/25 bg-emerald-500/15 px-4 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/25"
              >
                Concluir
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {loading ? (
                <div className="flex items-center gap-2 py-6 text-sm text-zinc-400">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Carregando jogadores...
                </div>
              ) : null}

              {!loading && recipients.length === 0 ? (
                <div className="rounded-xl border border-amber-300/20 bg-amber-500/10 p-4 text-sm leading-6 text-amber-100/80">
                  Não há atores controlados por jogadores ativos nesta campanha.
                </div>
              ) : null}

              {!loading && recipients.length > 0 ? (
                <>
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      <UserRound className="h-4 w-4" />
                      Ator destinatário
                    </span>
                    <select
                      value={recipientActorId}
                      onChange={(event) => setRecipientActorId(event.target.value)}
                      className="h-11 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-zinc-200 outline-none transition focus:border-indigo-300/50"
                    >
                      {recipients.map((recipient) => (
                        <option key={recipient.recipientActorId} value={recipient.recipientActorId}>
                          {recipient.actor.name} — {recipient.email}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Quantidade
                    </span>
                    <input
                      value={quantity}
                      inputMode="numeric"
                      onChange={(event) => setQuantity(event.target.value.replace(/\D/g, '').slice(0, 7))}
                      className="h-11 w-full rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-white outline-none transition focus:border-indigo-300/50"
                    />
                  </label>

                  <button
                    type="button"
                    disabled={sending || !recipientActorId}
                    onClick={() => void sendItem()}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-300/25 bg-indigo-500/15 px-4 py-3 text-sm font-semibold text-indigo-100 transition hover:border-indigo-300/50 hover:bg-indigo-500/25 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    Enviar para o inventário
                  </button>
                </>
              ) : null}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
