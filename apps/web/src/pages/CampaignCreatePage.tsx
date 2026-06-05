import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { api } from '../lib/api'
import { useSession } from '../contexts/SessionContext'

export function CampaignCreatePage() {
  const navigate = useNavigate()
  const { loadCampaigns, setActiveCampaignId } = useSession()

  const [gmName, setGmName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const canCreate = useMemo(() => gmName.trim() && title.trim(), [gmName, title])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canCreate) return

    setLoading(true)
    try {
      const created = await api<any>('/api/campaigns', {
        method: 'POST',
        body: JSON.stringify({
          gmName: gmName.trim(),
          title: title.trim(),
          description: description.trim() || undefined,
        }),
      })

      await loadCampaigns()
      setActiveCampaignId(created.id)
      navigate(`/campaign/${created.id}/overview`, { replace: true })
    } catch {
      alert('Erro ao criar campanha. Verifique a API/DB.')
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
        <h1 className="text-2xl font-semibold text-white">Criar nova campanha</h1>
        <p className="text-sm text-zinc-300 mt-1">Você será o mestre desta aventura.</p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <input
            value={gmName}
            onChange={(e) => setGmName(e.target.value)}
            placeholder="Nome do mestre (ex.: Arion, o Sábio)"
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
            className="p-3 rounded bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-28"
          />

          <Button type="submit" className="w-full" disabled={loading || !canCreate}>
            {loading ? 'Criando...' : 'Criar campanha'}
          </Button>
        </form>
      </div>
    </div>
  )
}

