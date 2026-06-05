import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useSession } from '../../contexts/SessionContext'
import { api } from '../../lib/api'

type PlayerRow = {
  userId: string
  email: string
  role: 'MASTER' | 'PLAYER' | null
  status: 'PENDING' | 'ACTIVE' | 'REJECTED'
  characterId?: string | null
  characterName?: string | null
  createdAt: string
  decidedAt?: string | null
}

export function CampaignPlayersPage() {
  const { campaignId } = useParams()
  const { campaigns, socket } = useSession()
  const campaign = campaigns.find((c) => c.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'

  const [players, setPlayers] = useState<PlayerRow[]>([])
  const [loading, setLoading] = useState(false)
  const [onlineIds, setOnlineIds] = useState<Record<string, boolean>>({})

  async function load() {
    if (!campaignId) return
    setLoading(true)
    try {
      const list = await api<PlayerRow[]>(`/api/campaigns/${campaignId}/players`)
      setPlayers(list)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load().catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignId])

  // Presença em tempo real (por characterId)
  useEffect(() => {
    if (!socket) return
    function onUpdate(payload: any) {
      if (!payload?.characterId) return
      if (payload?.campaignId && campaignId && payload.campaignId !== campaignId) return
      setOnlineIds((prev) => ({ ...prev, [payload.characterId]: !!payload.online }))
    }
    socket.on('presence:update', onUpdate)
    return () => {
      socket.off('presence:update', onUpdate)
    }
  }, [socket, campaignId])

  const grouped = useMemo(() => {
    const pending = players.filter((p) => p.status === 'PENDING')
    const active = players.filter((p) => p.status === 'ACTIVE')
    const rejected = players.filter((p) => p.status === 'REJECTED')
    return { pending, active, rejected }
  }, [players])

  async function approve(userId: string) {
    if (!campaignId) return
    await api(`/api/campaigns/${campaignId}/players/${userId}/approve`, { method: 'POST', body: '{}' })
    await load()
  }

  async function reject(userId: string) {
    if (!campaignId) return
    await api(`/api/campaigns/${campaignId}/players/${userId}/reject`, { method: 'POST', body: '{}' })
    await load()
  }

  const Badge = ({ status }: { status: PlayerRow['status'] }) => {
    const map: Record<PlayerRow['status'], string> = {
      ACTIVE: 'bg-emerald-400/10 text-emerald-200 border-emerald-300/20',
      PENDING: 'bg-amber-400/10 text-amber-200 border-amber-300/20',
      REJECTED: 'bg-red-400/10 text-red-200 border-red-300/20',
    }
    const label: Record<PlayerRow['status'], string> = {
      ACTIVE: 'Ativo',
      PENDING: 'Pendente',
      REJECTED: 'Recusado',
    }
    return (
      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${map[status]}`}>{label[status]}</span>
    )
  }

  const Row = ({ p }: { p: PlayerRow }) => (
    <div className="rounded-lg border border-white/10 bg-black/20 p-4 flex items-start justify-between gap-4">
      <div>
        <div className="text-white font-semibold flex items-center gap-2">
          {(p.characterName || p.email) ?? '—'} <Badge status={p.status} />
          {p.characterId ? (
            <span
              className={[
                'text-[10px] px-2 py-0.5 rounded-full border',
                onlineIds[p.characterId]
                  ? 'bg-emerald-400/10 text-emerald-200 border-emerald-300/20'
                  : 'bg-zinc-400/10 text-zinc-200 border-zinc-300/20',
              ].join(' ')}
            >
              {onlineIds[p.characterId] ? 'Online' : 'Offline'}
            </span>
          ) : null}
        </div>
        <div className="text-xs text-zinc-300 mt-1">
          {p.role === 'MASTER' ? 'Mestre' : 'Jogador'} • {p.email}
        </div>
      </div>

      {isMaster ? (
        <div className="flex items-center gap-2">
          {(p.status === 'PENDING' || p.status === 'REJECTED') && p.role !== 'MASTER' ? (
            <Button className="px-3 py-1.5 text-xs" onClick={() => approve(p.userId)}>
              Aceitar
            </Button>
          ) : null}
          {p.status === 'PENDING' && p.role !== 'MASTER' ? (
            <Button variant="ghost" className="px-3 py-1.5 text-xs" onClick={() => reject(p.userId)}>
              Recusar
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Jogadores</h1>
          <p className="text-sm text-zinc-300">Gerencie os participantes da campanha.</p>
        </div>
        <button type="button" className="text-sm text-zinc-300 hover:text-white" onClick={load} disabled={loading}>
          {loading ? 'Atualizando…' : 'Atualizar'}
        </button>
      </div>

      {isMaster && grouped.pending.length > 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold text-white">Solicitações de acesso</h2>
          <div className="mt-4 grid gap-3">
            {grouped.pending.map((p) => (
              <Row key={p.userId} p={p} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-lg font-semibold text-white">Jogadores ativos</h2>
        <div className="mt-4 grid gap-3">
          {grouped.active.length === 0 ? (
            <div className="text-sm text-zinc-400">Ninguém ainda.</div>
          ) : (
            grouped.active.map((p) => <Row key={p.userId} p={p} />)
          )}
        </div>
      </div>

      {isMaster ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold text-white">Recusados</h2>
          <p className="text-sm text-zinc-300 mt-1">
            Você pode aceitar um jogador recusado a qualquer momento.
          </p>
          <div className="mt-4 grid gap-3">
            {grouped.rejected.length === 0 ? (
              <div className="text-sm text-zinc-400">Nenhum recusado.</div>
            ) : (
              grouped.rejected.map((p) => <Row key={p.userId} p={p} />)
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}
