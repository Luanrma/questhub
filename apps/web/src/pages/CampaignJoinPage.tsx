import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'
import { api } from '../lib/api'

export function CampaignJoinPage() {
  const navigate = useNavigate()
  const { campaigns, loadCampaigns, setActiveCampaignId } = useSession()
  const [inviteCode, setInviteCode] = useState('')
  const [characterName, setCharacterName] = useState('')
  const [loading, setLoading] = useState(false)

  const sorted = useMemo(() => {
    return [...campaigns].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
  }, [campaigns])

  async function onJoin() {
    const code = inviteCode.trim().toUpperCase()
    if (!code) return
    setLoading(true)
    try {
      const joined = await api<any>('/api/campaigns/join', {
        method: 'POST',
        body: JSON.stringify({ inviteCode: code, characterName: characterName.trim() || undefined }),
      })
      if (joined.status === 'PENDING') {
        alert('Solicitação enviada! Aguarde o mestre aprovar.')
        await loadCampaigns()
        navigate('/campaigns', { replace: true })
        return
      }
      if (joined.status === 'REJECTED') {
        alert('Seu convite foi recusado. Aguarde o mestre liberar seu acesso.')
        await loadCampaigns()
        navigate('/campaigns', { replace: true })
        return
      }

      await loadCampaigns()
      setActiveCampaignId(joined.id)
      navigate(`/campaign/${joined.id}/overview`, { replace: true })
    } catch (err: any) {
      const msg = (err?.message ?? '').toString()
      if (msg.includes('Mestre offline') || msg.includes('409')) {
        alert('Mestre offline. Aguarde ele entrar na campanha para você conseguir entrar.')
      } else {
        alert('Não foi possível entrar. Confira o invite code.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button
        type="button"
        className="text-sm text-zinc-300 hover:text-white mb-4"
        onClick={() => navigate('/campaigns')}
      >
        ← Voltar
      </button>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold text-white">Entrar em uma campanha</h1>
        <p className="text-sm text-zinc-300 mt-1">Digite o invite code fornecido pelo mestre.</p>

        <div className="mt-6 grid gap-3">
          <input
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            placeholder="Código de convite (ex.: ABCD-1234)"
            className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 uppercase"
          />
          <input
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            placeholder="Nome do seu personagem (obrigatório)"
            className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Button className="w-full" disabled={loading || !inviteCode.trim()} onClick={onJoin}>
            {loading ? 'Entrando...' : 'Entrar na campanha'}
          </Button>
        </div>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <div className="text-xs text-zinc-400">ou</div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="text-lg font-semibold text-white">Campanhas disponíveis para você</h2>
        <div className="mt-4 grid gap-3">
          {sorted.length === 0 ? (
            <div className="text-sm text-zinc-400">Nenhuma campanha ainda.</div>
          ) : (
            sorted.map((c) => (
              <button
                key={c.id}
                type="button"
                className="w-full text-left rounded-lg border border-white/10 bg-black/20 p-4 hover:bg-black/30 transition"
                onClick={() => {
                  setActiveCampaignId(c.id)
                  navigate(`/campaign/${c.id}/overview`)
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-white font-semibold">{c.title}</div>
                    <div className="text-xs text-zinc-300 mt-1">Mestre: {c.gmName}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-zinc-400">Role</div>
                    <div className="text-xs text-zinc-200">{c.myRole === 'MASTER' ? 'Mestre' : 'Convidado'}</div>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
