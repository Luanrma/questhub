import { useSession } from '../../contexts/SessionContext'
import { useParams } from 'react-router-dom'

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const el = document.createElement('textarea')
      el.value = text
      el.style.position = 'fixed'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(el)
      return ok
    } catch {
      return false
    }
  }
}

export function CampaignOverviewPage() {
  const { campaignId } = useParams()
  const { campaigns } = useSession()

  const campaign = campaigns.find((c) => c.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold text-white">Visão Geral</h1>
        <p className="text-sm text-zinc-300">Resumo da sua campanha.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
          <h2 className="text-lg font-semibold text-white">Sobre a campanha</h2>
          <div className="mt-2 text-sm text-zinc-200">{campaign?.title ?? '—'}</div>
          <div className="mt-2 text-sm text-zinc-300">{campaign?.description ?? 'Sem descrição.'}</div>
          <div className="mt-3 text-xs text-zinc-400">Mestre: {campaign?.gmName ?? '—'}</div>
        </div>

        {isMaster ? (
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold text-white">Convite (Mestre)</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Compartilhe o código abaixo. Se sua campanha estiver marcada como privada, o jogador precisará ser aprovado por você.
            </p>

            <button
              type="button"
              className="mt-4 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm text-white hover:bg-black/40 transition"
              title="Copiar invite code"
              onClick={async () => {
                if (!campaign?.inviteCode) return
                const ok = await copyToClipboard(campaign.inviteCode)
                if (ok) alert('Invite code copiado!')
                else alert('Não foi possível copiar. Copie manualmente.')
              }}
            >
              <span className="font-mono text-indigo-200">{campaign?.inviteCode ?? '—'}</span>
              <span className="ml-2 text-xs text-zinc-300">(clique para copiar)</span>
            </button>
            <div className="mt-3 text-xs text-zinc-400">
              Modo: <span className="text-zinc-200">{campaign?.joinPolicy === 'PRIVATE' ? 'Privada' : 'Pública'}</span>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold text-white">Próxima sessão</h2>
            <div className="mt-2 text-sm text-zinc-300">Em breve…</div>
            <button
              type="button"
              className="mt-4 w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm text-white hover:bg-black/40 transition"
            >
              Ver detalhes
            </button>
          </div>
        )}

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 lg:col-span-2">
          <h2 className="text-lg font-semibold text-white">Atividade recente</h2>
          <div className="mt-2 text-sm text-zinc-300">Nada por aqui ainda.</div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold text-white">Jogadores</h2>
          <div className="mt-2 text-sm text-zinc-300">Em breve…</div>
        </div>
      </div>
    </div>
  )
}
