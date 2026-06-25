import { useEffect, useMemo, useState } from 'react'
import { Copy } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useSession } from '../../contexts/SessionContext'
import { api } from '../../lib/api'

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const element = document.createElement('textarea')
      element.value = text
      element.style.position = 'fixed'
      element.style.left = '-9999px'
      document.body.appendChild(element)
      element.select()
      const copied = document.execCommand('copy')
      document.body.removeChild(element)
      return copied
    } catch {
      return false
    }
  }
}

export function CampaignSettingsPage() {
  const { campaignId } = useParams()
  const { campaigns, loadCampaigns } = useSession()
  const campaign = campaigns.find((c) => c.id === campaignId)

  const isMaster = campaign?.myRole === 'MASTER'
  const [joinPolicy, setJoinPolicy] = useState<'PUBLIC' | 'PRIVATE'>(campaign?.joinPolicy ?? 'PUBLIC')
  const [saving, setSaving] = useState(false)

  const changed = useMemo(() => (campaign ? joinPolicy !== campaign.joinPolicy : false), [campaign, joinPolicy])

  useEffect(() => {
    if (campaign) setJoinPolicy(campaign.joinPolicy)
  }, [campaign])

  async function onCopyInviteCode() {
    if (!campaign?.inviteCode) return

    const copied = await copyToClipboard(campaign.inviteCode)
    if (copied) {
      alert('Invite code copiado!')
      return
    }

    alert('Não foi possível copiar. Copie manualmente.')
  }

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
        <h2 className="text-lg font-semibold text-white">Convite</h2>
        <p className="mt-2 text-sm text-zinc-300">Compartilhe este código com os jogadores.</p>
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-left transition hover:bg-black/30"
          onClick={onCopyInviteCode}
        >
          <span className="font-mono text-sm text-indigo-200">{campaign.inviteCode ?? '-'}</span>
          <Copy className="h-4 w-4 shrink-0 text-zinc-400" />
        </button>
        <div className="mt-3 text-xs text-zinc-500">
          Modo: <span className="text-zinc-300">{campaign.joinPolicy === 'PRIVATE' ? 'Privada' : 'Pública'}</span>
        </div>
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
