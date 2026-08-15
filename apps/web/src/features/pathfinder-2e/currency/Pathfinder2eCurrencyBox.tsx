import { useEffect, useState } from 'react'
import { Coins, Loader2, Minus, Send, X } from 'lucide-react'
import { api } from '../../../lib/api'

type Currency = { platinum: number; gold: number; silver: number; copper: number }
type CurrencyResponse = { currency: Currency; canTransfer: boolean; canAdjust: boolean }
type Recipient = { id: string; name: string; role: 'MASTER' | 'PLAYER' | null }
type RecipientsResponse = { recipients: Recipient[] }

type Props = { campaignId: string; actorId: string; zIndex?: number }

const emptyCurrency: Currency = { platinum: 0, gold: 0, silver: 0, copper: 0 }
const denominations: ReadonlyArray<{ key: keyof Currency; label: string; tone: string }> = [
  { key: 'platinum', label: 'Platina', tone: 'text-slate-100' },
  { key: 'gold', label: 'Ouro', tone: 'text-amber-200' },
  { key: 'silver', label: 'Prata', tone: 'text-zinc-200' },
  { key: 'copper', label: 'Cobre', tone: 'text-orange-300' },
]

function CurrencyFields({
  values,
  onChange,
  signed = false,
}: {
  values: Currency
  onChange: (currency: Currency) => void
  signed?: boolean
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {denominations.map(({ key, label, tone }) => (
        <label key={key} className="rounded-lg border border-white/10 bg-black/25 px-2 py-1.5">
          <span className={`block text-[10px] font-semibold uppercase tracking-wide ${tone}`}>{label}</span>
          <input
            type="number"
            inputMode="numeric"
            min={signed ? -100_000_000 : 0}
            max={100_000_000}
            value={values[key]}
            onChange={(event) => {
              const parsed = Number(event.target.value)
              if (!Number.isInteger(parsed) || parsed < (signed ? -100_000_000 : 0) || parsed > 100_000_000) return
              onChange({ ...values, [key]: parsed })
            }}
            className="mt-1 w-full bg-transparent text-sm font-semibold text-white outline-none"
            aria-label={label}
          />
        </label>
      ))}
    </div>
  )
}

export function Pathfinder2eCurrencyBox({ campaignId, actorId, zIndex = 140 }: Props) {
  const [wallet, setWallet] = useState<CurrencyResponse | null>(null)
  const [open, setOpen] = useState(false)
  const [recipients, setRecipients] = useState<Recipient[]>([])
  const [recipientId, setRecipientId] = useState('')
  const [amount, setAmount] = useState<Currency>(emptyCurrency)
  const [adjustment, setAdjustment] = useState<Currency>(emptyCurrency)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function loadWallet() {
    setLoading(true)
    api<CurrencyResponse>(`/api/campaigns/${campaignId}/actors/${actorId}/pathfinder-2e/currency`)
      .then(setWallet)
      .catch(() => setWallet(null))
      .finally(() => setLoading(false))
  }

  useEffect(() => { loadWallet() }, [campaignId, actorId])

  useEffect(() => {
    if (!open || !wallet?.canTransfer || wallet.canAdjust) return
    api<RecipientsResponse>(`/api/campaigns/${campaignId}/actors/${actorId}/pathfinder-2e/currency/recipients`)
      .then((response) => {
        setRecipients(response.recipients)
        setRecipientId(response.recipients[0]?.id ?? '')
      })
      .catch((cause) => setError(cause instanceof Error ? cause.message : 'Não foi possível carregar os destinatários.'))
  }, [actorId, campaignId, open, wallet?.canAdjust, wallet?.canTransfer])

  if (!wallet && !loading) return null

  async function submitTransfer() {
    if (!recipientId || !wallet || Object.values(amount).every((value) => value === 0)) {
      setError('Escolha um destinatário e informe ao menos uma moeda.')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const response = await api<{ source: { currency: Currency } }>(
        `/api/campaigns/${campaignId}/actors/${actorId}/pathfinder-2e/currency/transfers`,
        { method: 'POST', body: JSON.stringify({ recipientActorId: recipientId, amount }) },
      )
      setWallet({ ...wallet, currency: response.source.currency })
      setAmount(emptyCurrency)
      setOpen(false)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível transferir as moedas.')
    } finally {
      setSubmitting(false)
    }
  }

  async function submitAdjustment() {
    if (!wallet || Object.values(adjustment).every((value) => value === 0)) {
      setError('Informe ao menos um ajuste de moeda.')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const response = await api<{ currency: Currency }>(
        `/api/campaigns/${campaignId}/actors/${actorId}/pathfinder-2e/currency`,
        { method: 'PATCH', body: JSON.stringify({ adjustment }) },
      )
      setWallet({ ...wallet, currency: response.currency })
      setAdjustment(emptyCurrency)
      setOpen(false)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Não foi possível ajustar as moedas.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => { setError(null); setOpen(true) }}
        className="flex min-w-52 items-center gap-3 rounded-xl border border-amber-300/25 bg-[#17130d]/95 px-3 py-2 text-left shadow-lg transition hover:border-amber-200/60 hover:bg-amber-500/10"
        title={wallet?.canAdjust ? 'Ajustar moedas' : 'Enviar moedas'}
      >
        <Coins className="h-5 w-5 shrink-0 text-amber-300" />
        <span className="grid flex-1 grid-cols-4 gap-2 text-center text-xs">
          {denominations.map(({ key, label, tone }) => (
            <span key={key} className="min-w-0">
              <span className={`block font-bold ${tone}`}>{loading ? '—' : wallet?.currency[key] ?? 0}</span>
              <span className="block text-[9px] uppercase text-zinc-500">{label.slice(0, 2)}</span>
            </span>
          ))}
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 grid place-items-center bg-black/55 p-4" style={{ zIndex }} role="presentation">
          <section
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#16151d] p-5 text-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={wallet?.canAdjust ? 'Ajustar moedas' : 'Enviar moedas'}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-amber-300" />
                <h2 className="font-semibold">{wallet?.canAdjust ? 'Ajustar moedas' : 'Enviar moedas'}</h2>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded p-1 text-zinc-400 hover:bg-white/10 hover:text-white" aria-label="Fechar">
                <X className="h-5 w-5" />
              </button>
            </header>

            <p className="mt-3 text-xs text-zinc-400">
              {wallet?.canAdjust
                ? 'Use valores positivos para adicionar e negativos para subtrair.'
                : 'As moedas são transferidas na mesma denominação, sem conversão automática.'}
            </p>

            {!wallet?.canAdjust ? (
              <label className="mt-4 block text-xs text-zinc-300">
                Destinatário
                <select value={recipientId} onChange={(event) => setRecipientId(event.target.value)} className="mt-1.5 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none">
                  {recipients.length === 0 ? <option value="">Nenhum ator disponível</option> : null}
                  {recipients.map((recipient) => <option key={recipient.id} value={recipient.id}>{recipient.name}{recipient.role === 'MASTER' ? ' (Mestre)' : ''}</option>)}
                </select>
              </label>
            ) : null}

            <div className="mt-4">
              <CurrencyFields values={wallet?.canAdjust ? adjustment : amount} onChange={wallet?.canAdjust ? setAdjustment : setAmount} signed={Boolean(wallet?.canAdjust)} />
            </div>

            {error ? <p className="mt-3 rounded-lg border border-red-300/20 bg-red-500/10 px-3 py-2 text-xs text-red-100">{error}</p> : null}

            <button
              type="button"
              disabled={submitting || (!wallet?.canAdjust && recipients.length === 0)}
              onClick={() => { if (wallet?.canAdjust) void submitAdjustment(); else void submitTransfer() }}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500/20 px-4 py-2.5 text-sm font-semibold text-amber-100 transition hover:bg-amber-500/30 disabled:cursor-not-allowed disabled:opacity-45"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : wallet?.canAdjust ? <Minus className="h-4 w-4" /> : <Send className="h-4 w-4" />}
              {wallet?.canAdjust ? 'Aplicar ajuste' : 'Enviar moedas'}
            </button>
          </section>
        </div>
      ) : null}
    </>
  )
}
