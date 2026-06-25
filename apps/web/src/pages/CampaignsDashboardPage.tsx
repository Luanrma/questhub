import { useMemo } from 'react'
import { Plus, ScrollText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'

type CampaignCharacterStatus = 'PENDING' | 'ACTIVE' | 'REJECTED' | 'LEFT' | 'DEAD'

const roleLabel = {
  MASTER: 'Mestre',
  PLAYER: 'Jogador',
} as const

const statusLabel: Record<CampaignCharacterStatus, string> = {
  ACTIVE: 'Ativo',
  PENDING: 'Pendente',
  REJECTED: 'Recusado',
  LEFT: 'Saiu',
  DEAD: 'Morto',
}

const statusClassName: Record<CampaignCharacterStatus, string> = {
  ACTIVE: 'bg-emerald-400/10 text-emerald-200 border-emerald-300/20',
  PENDING: 'bg-amber-400/10 text-amber-200 border-amber-300/20',
  REJECTED: 'bg-red-400/10 text-red-200 border-red-300/20',
  LEFT: 'bg-zinc-400/10 text-zinc-200 border-zinc-300/20',
  DEAD: 'bg-rose-400/10 text-rose-200 border-rose-300/20',
}

function canEnterCampaign(params: { role: 'MASTER' | 'PLAYER'; status?: CampaignCharacterStatus; isOnline: boolean }) {
  if (params.status !== 'ACTIVE') return false
  if (params.role === 'MASTER') return true
  return params.isOnline
}

function getEnterButtonLabel(params: { role: 'MASTER' | 'PLAYER'; status?: CampaignCharacterStatus; isOnline: boolean }) {
  if (params.status === 'PENDING') return 'Aguardando'
  if (params.status === 'LEFT') return 'Saiu'
  if (params.status === 'DEAD') return 'Morto'
  if (params.status === 'REJECTED') return 'Recusado'
  if (params.status === 'ACTIVE' && params.role === 'PLAYER' && !params.isOnline) return 'Offline'
  return 'Entrar'
}

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

export function CampaignsDashboardPage() {
  const navigate = useNavigate()
  const { me, logout, campaigns, campaignsLoading, setActiveCampaignId } = useSession()

  const sorted = useMemo(() => {
    return [...campaigns].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
  }, [campaigns])

  return (
    <div className="space-y-6">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-white font-semibold">Quest Hub</div>
          <div className="text-xs text-zinc-300">Olá, {me?.email}</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => navigate('/home')}>
            Home
          </Button>
          <Button variant="ghost" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>

      {/* Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-400/10 text-indigo-100 border border-indigo-300/20">
              <Plus className="h-4 w-4" />
            </span>
            <h2 className="text-lg font-semibold text-white">Criar campanha</h2>
          </div>
          <p className="text-sm text-zinc-300 mt-1">Crie uma nova aventura e convide seus amigos.</p>
          <Button className="mt-4 w-full" onClick={() => navigate('/campaigns/new')}>
            Criar nova campanha
          </Button>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-100 border border-emerald-300/20">
              <ScrollText className="h-4 w-4" />
            </span>
            <h2 className="text-lg font-semibold text-white">Entrar em campanha</h2>
          </div>
          <p className="text-sm text-zinc-300 mt-1">Entre usando um invite code do mestre.</p>
          <Button variant="ghost" className="mt-4 w-full" onClick={() => navigate('/campaigns/join')}>
            Entrar em uma campanha
          </Button>
        </div>

      </div>

      {/* List */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">Suas campanhas</h2>
          {campaignsLoading ? <span className="text-xs text-zinc-400">Carregando…</span> : null}
        </div>

        <div className="mt-4 grid gap-3">
          {sorted.length === 0 ? (
            <div className="text-sm text-zinc-400">Nenhuma campanha ainda.</div>
          ) : (
            sorted.map((c) => (
              <div
                key={c.id}
                className="w-full rounded-lg border border-white/10 bg-black/20 p-4 hover:bg-black/30 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-white font-semibold flex items-center gap-2">
                      {c.title}
                      <span
                        className={[
                          'text-[10px] px-2 py-0.5 rounded-full border',
                          c.isOnline
                            ? 'bg-emerald-400/10 text-emerald-200 border-emerald-300/20'
                            : 'bg-zinc-400/10 text-zinc-200 border-zinc-300/20',
                        ].join(' ')}
                      >
                        {c.isOnline ? 'Online' : 'Offline'}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-300 mt-1">Mestre: {c.gmName}</div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-300">
                      <span>Personagem: {c.myCharacterName ?? '-'}</span>
                      <span className="text-zinc-500">•</span>
                      <span>Funcao: {roleLabel[c.myRole]}</span>
                      {c.myStatus ? (
                        <span
                          className={[
                            'text-[10px] px-2 py-0.5 rounded-full border',
                            statusClassName[c.myStatus],
                          ].join(' ')}
                        >
                          {statusLabel[c.myStatus]}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    {c.myRole === 'MASTER' && c.inviteCode ? (
                    <button
                      type="button"
                      className="text-right"
                      title="Copiar invite code"
                      onClick={async () => {
                        const ok = await copyToClipboard(c.inviteCode ?? '')
                        if (ok) alert('Invite code copiado!')
                        else alert('Não foi possível copiar. Copie manualmente.')
                      }}
                    >
                      <div className="text-[10px] text-zinc-400">Invite</div>
                      <div className="font-mono text-sm text-indigo-200 underline decoration-white/20 hover:decoration-white/40">
                        {c.inviteCode}
                      </div>
                    </button>
                    ) : null}

                    <Button
                      className="px-3 py-1.5 text-xs"
                      disabled={!canEnterCampaign({ role: c.myRole, status: c.myStatus, isOnline: c.isOnline })}
                      onClick={() => {
                        if (c.myRole === 'PLAYER' && !c.isOnline) {
                          alert('Sessão offline. Aguarde o mestre iniciar a sessão.')
                          return
                        }
                        setActiveCampaignId(c.id)
                        navigate(`/campaign/${c.id}/overview`)
                      }}
                    >
                      {getEnterButtonLabel({ role: c.myRole, status: c.myStatus, isOnline: c.isOnline })}
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
