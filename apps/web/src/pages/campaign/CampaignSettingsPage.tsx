import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useSession } from '../../contexts/SessionContext'
import { api } from '../../lib/api'

export function CampaignSettingsPage() {
  const { campaignId } = useParams()
  const { campaigns, loadCampaigns } = useSession()
  const campaign = campaigns.find((c) => c.id === campaignId)

  const isMaster = campaign?.myRole === 'MASTER'
  const [joinPolicy, setJoinPolicy] = useState<'PUBLIC' | 'PRIVATE'>(campaign?.joinPolicy ?? 'PUBLIC')
  const [saving, setSaving] = useState(false)

  const changed = useMemo(() => (campaign ? joinPolicy !== campaign.joinPolicy : false), [campaign, joinPolicy])

  async function save() {
    if (!campaignId) return
    setSaving(true)
    try {
      await api(`/api/campaigns/${campaignId}/settings`, {
        method: 'PATCH',
        body: JSON.stringify({ joinPolicy }),
      })
      await loadCampaigns()
      alert('Configuração salva!')
    } catch (err: any) {
      const msg = (err?.message ?? '').toString()
      // Mostra o erro real (ex.: 403, 401, CORS, etc.)
      if (msg.includes('Apenas o mestre')) alert('Não foi possível salvar. Apenas o mestre pode alterar.')
      else alert(msg || 'Não foi possível salvar.')
    } finally {
      setSaving(false)
    }
  }

  if (!campaign) {
    return (
      <div className="max-w-3xl">
        <h1 className="text-2xl font-semibold text-white">Configurações</h1>
        <p className="text-sm text-zinc-300 mt-2">Campanha não encontrada.</p>
      </div>
    )
  }

  if (!isMaster) {
    return (
      <div className="max-w-3xl">
        <h1 className="text-2xl font-semibold text-white">Configurações</h1>
        <p className="text-sm text-zinc-300 mt-2">Apenas o mestre pode alterar as configurações da campanha.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Configurações</h1>
        <p className="text-sm text-zinc-300 mt-2">Controle se o convite entra automaticamente ou se precisa de aprovação.</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-lg font-semibold text-white">Privacidade da campanha</h2>

        <div className="mt-4 grid gap-3">
          <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/20 p-4 cursor-pointer">
            <input
              type="radio"
              name="joinPolicy"
              checked={joinPolicy === 'PUBLIC'}
              onChange={() => setJoinPolicy('PUBLIC')}
            />
            <div>
              <div className="text-white font-semibold">Pública</div>
              <div className="text-sm text-zinc-300">Qualquer pessoa com o código entra automaticamente.</div>
            </div>
          </label>

          <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/20 p-4 cursor-pointer">
            <input
              type="radio"
              name="joinPolicy"
              checked={joinPolicy === 'PRIVATE'}
              onChange={() => setJoinPolicy('PRIVATE')}
            />
            <div>
              <div className="text-white font-semibold">Privada</div>
              <div className="text-sm text-zinc-300">
                Quem usar o código fica pendente até você aceitar em <b>Jogadores</b>.
              </div>
            </div>
          </label>
        </div>

        <div className="mt-4">
          <Button className="w-full" disabled={!changed || saving} onClick={save}>
            {saving ? 'Salvando…' : 'Salvar'}
          </Button>
        </div>
      </div>
    </div>
  )
}
