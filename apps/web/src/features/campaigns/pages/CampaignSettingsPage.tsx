import { useMemo, useState } from 'react'
import { Copy } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { useSession } from '../../../contexts/SessionContext'
import { api } from '../../../lib/api'
import { maxDiceAutoClearSeconds, minDiceAutoClearSeconds } from '../../../vtt/dice-roller/config/constants'
import {
  normalizeDiceAutoClearPreference,
  readStoredDiceDisplaySettings,
  storeCampaignUserSettings,
  storeDiceDisplaySettings,
  type CampaignUserSettings,
  type DiceAutoClearPreference,
  type DiceDisplaySettings,
} from '../../../vtt/dice-roller/infrastructure/storage/diceThemeStorage'

type DiceDisplaySettingsCardProps = {
  autoClearOptions: number[]
  settings: DiceDisplaySettings
  onAutoClearChange: (value: DiceAutoClearPreference) => void
  onShowResultPopupChange: (value: boolean) => void
}

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

function DiceDisplaySettingsCard({
  autoClearOptions,
  settings,
  onAutoClearChange,
  onShowResultPopupChange,
}: DiceDisplaySettingsCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-lg font-semibold text-white">Preferencias da mesa</h2>
      <p className="mt-2 text-sm text-zinc-300">Estas opcoes ficam salvas para voce neste navegador.</p>

      <div className="mt-4 grid gap-3">
        <label className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 p-4">
          <span>
            <span className="block text-sm font-semibold text-white">Sumir dados</span>
            <span className="mt-1 block text-xs text-zinc-400">Tempo apos o fim da animacao 3D.</span>
          </span>
          <select
            value={settings.autoClear}
            className="h-9 min-w-36 rounded-md border border-white/10 bg-black/45 px-3 text-sm font-semibold text-white outline-none transition focus:border-indigo-300/40"
            onChange={(event) => {
              const value = event.target.value
              onAutoClearChange(value === 'manual' ? 'manual' : Number(value))
            }}
          >
            {autoClearOptions.map((seconds) => (
              <option key={seconds} value={seconds}>
                {seconds}s depois
              </option>
            ))}
            <option value="manual">Permanente</option>
          </select>
        </label>

        <label className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 p-4">
          <span>
            <span className="block text-sm font-semibold text-white">Popup do resultado</span>
            <span className="mt-1 block text-xs text-zinc-400">Mostra o total no centro da mesa por 3 segundos.</span>
          </span>
          <input
            type="checkbox"
            checked={settings.showResultPopup}
            className="h-4 w-4 accent-indigo-400"
            onChange={(event) => onShowResultPopupChange(event.target.checked)}
          />
        </label>
      </div>
    </div>
  )
}

export function CampaignSettingsPage() {
  const { campaignId } = useParams()
  const { campaigns, loadCampaigns } = useSession()
  const campaign = campaigns.find((c) => c.id === campaignId)

  const isMaster = campaign?.myRole === 'MASTER'
  const [joinPolicyDraft, setJoinPolicyDraft] = useState<{ campaignId?: string; value: 'PUBLIC' | 'PRIVATE' } | null>(null)
  const [diceDisplaySettingsDraft, setDiceDisplaySettingsDraft] = useState<{ campaignId?: string; settings: DiceDisplaySettings } | null>(null)
  const [settingsSyncWarning, setSettingsSyncWarning] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const storedDiceDisplaySettings = useMemo(
    () => (campaignId ? readStoredDiceDisplaySettings(campaignId) : readStoredDiceDisplaySettings('global')),
    [campaignId],
  )
  const joinPolicy =
    joinPolicyDraft && joinPolicyDraft.campaignId === campaignId ? joinPolicyDraft.value : campaign?.joinPolicy ?? 'PUBLIC'
  const diceDisplaySettings =
    diceDisplaySettingsDraft && diceDisplaySettingsDraft.campaignId === campaignId
      ? diceDisplaySettingsDraft.settings
      : storedDiceDisplaySettings
  const changed = useMemo(() => (campaign ? joinPolicy !== campaign.joinPolicy : false), [campaign, joinPolicy])
  const autoClearOptions = useMemo(
    () => Array.from({ length: maxDiceAutoClearSeconds - minDiceAutoClearSeconds + 1 }, (_, index) => minDiceAutoClearSeconds + index),
    [],
  )

  function updateDiceDisplaySettings(nextSettings: DiceDisplaySettings) {
    if (!campaignId) return

    setDiceDisplaySettingsDraft({ campaignId, settings: nextSettings })
    storeDiceDisplaySettings(campaignId, nextSettings)
    setSettingsSyncWarning(null)

    void api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`, {
      method: 'PATCH',
      body: JSON.stringify({ settings: { dice: nextSettings } }),
    })
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        setDiceDisplaySettingsDraft({ campaignId, settings: response.settings.dice })
      })
      .catch(() => {
        setSettingsSyncWarning('Preferencia aplicada neste navegador, mas ainda nao foi salva no servidor.')
      })
  }

  function updateDiceAutoClear(value: DiceAutoClearPreference) {
    updateDiceDisplaySettings({
      ...diceDisplaySettings,
      autoClear: normalizeDiceAutoClearPreference(value),
    })
  }

  function updateShowResultPopup(value: boolean) {
    updateDiceDisplaySettings({
      ...diceDisplaySettings,
      showResultPopup: value,
    })
  }

  async function onCopyInviteCode() {
    if (!campaign?.inviteCode) return

    const copied = await copyToClipboard(campaign.inviteCode)
    if (copied) {
      alert('Codigo de convite copiado!')
      return
    }

    alert('Nao foi possivel copiar. Copie manualmente.')
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
      setJoinPolicyDraft(null)
      alert('Configuracao salva!')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : ''
      if (msg.includes('Apenas o mestre')) alert('Nao foi possivel salvar. Apenas o mestre pode alterar.')
      else alert(msg || 'Nao foi possivel salvar.')
    } finally {
      setSaving(false)
    }
  }

  if (!campaign) {
    return (
      <div className="max-w-3xl">
        <h1 className="text-2xl font-semibold text-white">Configuracoes</h1>
        <p className="mt-2 text-sm text-zinc-300">Campanha nao encontrada.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">Configuracoes</h1>
        <p className="mt-2 text-sm text-zinc-300">
          {isMaster ? 'Controle a campanha e ajuste sua experiencia local na mesa.' : 'Ajuste sua experiencia local na mesa.'}
        </p>
      </div>

      <DiceDisplaySettingsCard
        autoClearOptions={autoClearOptions}
        settings={diceDisplaySettings}
        onAutoClearChange={updateDiceAutoClear}
        onShowResultPopupChange={updateShowResultPopup}
      />
      {settingsSyncWarning ? (
        <p className="-mt-4 rounded-lg border border-amber-300/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
          {settingsSyncWarning}
        </p>
      ) : null}

      {isMaster ? (
        <>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold text-white">Convite</h2>
            <p className="mt-2 text-sm text-zinc-300">Compartilhe este codigo com os jogadores.</p>
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-left transition hover:bg-black/30"
              onClick={onCopyInviteCode}
            >
              <span className="font-mono text-sm text-indigo-200">{campaign.inviteCode ?? '-'}</span>
              <Copy className="h-4 w-4 shrink-0 text-zinc-400" />
            </button>
            <div className="mt-3 text-xs text-zinc-500">
              Modo: <span className="text-zinc-300">{campaign.joinPolicy === 'PRIVATE' ? 'Privada' : 'Publica'}</span>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold text-white">Privacidade da campanha</h2>

            <div className="mt-4 grid gap-3">
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/10 bg-black/20 p-4">
                <input
                  type="radio"
                  name="joinPolicy"
                  checked={joinPolicy === 'PUBLIC'}
                  onChange={() => setJoinPolicyDraft({ campaignId, value: 'PUBLIC' })}
                />
                <div>
                  <div className="font-semibold text-white">Publica</div>
                  <div className="text-sm text-zinc-300">Qualquer pessoa com o codigo entra automaticamente.</div>
                </div>
              </label>

              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/10 bg-black/20 p-4">
                <input
                  type="radio"
                  name="joinPolicy"
                  checked={joinPolicy === 'PRIVATE'}
                  onChange={() => setJoinPolicyDraft({ campaignId, value: 'PRIVATE' })}
                />
                <div>
                  <div className="font-semibold text-white">Privada</div>
                  <div className="text-sm text-zinc-300">
                    Quem usar o codigo fica pendente ate voce aceitar em <b>Jogadores</b>.
                  </div>
                </div>
              </label>
            </div>

            <div className="mt-4">
              <Button className="w-full" disabled={!changed || saving} onClick={save}>
                {saving ? 'Salvando...' : 'Salvar'}
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
