import { useEffect, useMemo, useState } from 'react'
import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'
import { api } from '../lib/api'

export function CampaignHubPage() {
  const { me, logout } = useSession()

  const [campaigns, setCampaigns] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [inviteCode, setInviteCode] = useState('')

  const [gmName, setGmName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const canCreate = useMemo(() => gmName.trim() && title.trim(), [gmName, title])

  async function loadCampaigns() {
    const list = await api<any[]>('/api/campaigns')
    setCampaigns(list)
  }

  useEffect(() => {
    ;(async () => {
      try {
        await loadCampaigns()
      } catch {
        // ignore
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function onCreateCampaign() {
    if (!canCreate) return
    setLoading(true)
    try {
      await api('/api/campaigns', {
        method: 'POST',
        body: JSON.stringify({
          gmName: gmName.trim(),
          title: title.trim(),
          description: description.trim() || undefined,
        }),
      })
      setGmName('')
      setTitle('')
      setDescription('')
      await loadCampaigns()
      alert('Campanha criada!')
    } catch {
      alert('Erro ao criar campanha. Verifique a API/DB.')
    } finally {
      setLoading(false)
    }
  }

  async function onJoinCampaign() {
    const code = inviteCode.trim().toUpperCase()
    if (!code) return
    setLoading(true)
    try {
      await api('/api/campaigns/join', {
        method: 'POST',
        body: JSON.stringify({ inviteCode: code }),
      })
      setInviteCode('')
      await loadCampaigns()
      alert('Você entrou na campanha!')
    } catch {
      alert('Não foi possível entrar. Confira o invite code.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold">Campanhas</h1>
          <p className="text-zinc-300 mt-2">
            Logado como <span className="text-white">{me?.email}</span>
          </p>
        </div>

        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Criar campanha</h2>
          <p className="text-sm text-zinc-300 mt-1">Ao criar, você vira o Mestre e recebe um invite code.</p>

          <div className="mt-4 grid gap-3">
            <input
              value={gmName}
              onChange={(e) => setGmName(e.target.value)}
              placeholder="Nome do mestre"
              className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da campanha"
              className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição (opcional)"
              className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-24"
            />

            <Button className="w-full" disabled={loading || !canCreate} onClick={onCreateCampaign}>
              {loading ? 'Criando...' : 'Criar campanha'}
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Entrar em campanha</h2>
          <p className="text-sm text-zinc-300 mt-1">Cole o invite code enviado pelo Mestre.</p>

          <div className="mt-4 grid gap-3">
            <input
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              placeholder="Invite code (ex.: A1B2C3D4)"
              className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 uppercase"
            />
            <Button variant="ghost" className="w-full" disabled={loading || !inviteCode.trim()} onClick={onJoinCampaign}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-lg font-semibold">Minhas campanhas</h2>
        <p className="text-sm text-zinc-300 mt-1">
          Aqui aparecem as campanhas onde você é Mestre ou foi convidado.
        </p>

        <div className="mt-4 grid gap-3">
          {campaigns.length === 0 ? (
            <div className="text-sm text-zinc-400">Nenhuma campanha ainda.</div>
          ) : (
            campaigns.map((c) => (
              <div key={c.id} className="rounded-lg border border-white/10 bg-black/20 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-white font-semibold">{c.title}</div>
                    {c.description ? <div className="text-sm text-zinc-300 mt-1">{c.description}</div> : null}
                    <div className="text-xs text-zinc-400 mt-2">
                      Mestre: {c.gmName} • Role: {c.myRole ?? c.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-zinc-400">Invite</div>
                    <div className="font-mono text-sm text-indigo-200">{c.inviteCode}</div>
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
