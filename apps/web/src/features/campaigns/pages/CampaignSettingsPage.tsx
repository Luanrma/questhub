import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ChevronDown, Copy, Crosshair, Move } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { useSession } from '../../../contexts/session-context'
import { api } from '../../../lib/api'
import { maxDiceAutoClearSeconds, minDiceAutoClearSeconds } from '../../../vtt/dice-roller/config/constants'
import {
  normalizeDiceAutoClearPreference,
  readStoredDiceDisplaySettings,
  readStoredInventoryDisplaySettings,
  storeCampaignUserSettings,
  storeDiceDisplaySettings,
  storeInventoryDisplaySettings,
  type CampaignUserSettings,
  type DiceAutoClearPreference,
  type DiceDisplaySettings,
  type InventoryDisplaySettings,
} from '../../../vtt/dice-roller/infrastructure/storage/diceThemeStorage'
import {
  readStoredPathfinder2eDisplaySettings,
  storePathfinder2eDisplaySettings,
  type Pathfinder2eDisplaySettings,
} from '../../pathfinder-2e/character-sheet/infrastructure/pathfinder2eDisplaySettingsStorage'
import type { TargetMarkerStyle } from '../../../vtt/table/domain/tokenSelection'

type CampaignUserSettingsResponse = CampaignUserSettings & {
  pathfinder2e: Pathfinder2eDisplaySettings
}

type CampaignSettingsPageProps = {
  targetMarkerStyle?: TargetMarkerStyle
  onTargetMarkerStyleChange?: (style: TargetMarkerStyle) => Promise<void>
}

type DiceDisplaySettingsCardProps = {
  autoClearOptions: number[]
  settings: DiceDisplaySettings
  syncWarning: string | null
  onAutoClearChange: (value: DiceAutoClearPreference) => void
  onShowResultPopupChange: (value: boolean) => void
}

type CollapsibleSettingsSectionProps = {
  title: string
  description: string
  children: ReactNode
  defaultOpen?: boolean
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

function CollapsibleSettingsSection({
  title,
  description,
  children,
  defaultOpen = false,
}: CollapsibleSettingsSectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-white/[0.03]"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>
          <span className="block text-lg font-semibold text-white">{title}</span>
          <span className="mt-2 block text-sm text-zinc-300">{description}</span>
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 pb-5">{children}</div>
        </div>
      </div>
    </section>
  )
}

function DiceDisplaySettingsCard({
  autoClearOptions,
  settings,
  syncWarning,
  onAutoClearChange,
  onShowResultPopupChange,
}: DiceDisplaySettingsCardProps) {
  return (
    <CollapsibleSettingsSection
      title="Preferencias da mesa"
      description="Estas opcoes ficam salvas para sua conta nesta campanha."
    >
      <div className="grid gap-3">
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
      {syncWarning ? (
        <p className="mt-4 rounded-lg border border-amber-300/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
          {syncWarning}
        </p>
      ) : null}
    </CollapsibleSettingsSection>
  )
}

export function CampaignSettingsPage({
  targetMarkerStyle = 'ARROWS',
  onTargetMarkerStyleChange,
}: CampaignSettingsPageProps = {}) {
  const { campaignId } = useParams()
  const { campaigns, loadCampaigns } = useSession()
  const campaign = campaigns.find((c) => c.id === campaignId)

  const isMaster = campaign?.myRole === 'MASTER'
  const [joinPolicyDraft, setJoinPolicyDraft] = useState<{ campaignId?: string; value: 'PUBLIC' | 'PRIVATE' } | null>(null)
  const [diceDisplaySettingsDraft, setDiceDisplaySettingsDraft] = useState<{ campaignId?: string; settings: DiceDisplaySettings } | null>(null)
  const [inventoryDisplaySettingsDraft, setInventoryDisplaySettingsDraft] = useState<{ campaignId?: string; settings: InventoryDisplaySettings } | null>(null)
  const [pathfinder2eDisplaySettingsDraft, setPathfinder2eDisplaySettingsDraft] = useState<{ campaignId?: string; settings: Pathfinder2eDisplaySettings } | null>(null)
  const [campaignGameSystem, setCampaignGameSystem] = useState<string | null>(null)
  const [settingsSyncWarning, setSettingsSyncWarning] = useState<string | null>(null)
  const [targetMarkerSaving, setTargetMarkerSaving] = useState(false)
  const [targetMarkerError, setTargetMarkerError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const storedDiceDisplaySettings = useMemo(
    () => (campaignId ? readStoredDiceDisplaySettings(campaignId) : readStoredDiceDisplaySettings('global')),
    [campaignId],
  )
  const storedInventoryDisplaySettings = useMemo(
    () => (campaignId
      ? readStoredInventoryDisplaySettings(campaignId)
      : readStoredInventoryDisplaySettings('global')),
    [campaignId],
  )
  const storedPathfinder2eDisplaySettings = useMemo(
    () => (campaignId
      ? readStoredPathfinder2eDisplaySettings(campaignId)
      : readStoredPathfinder2eDisplaySettings('global')),
    [campaignId],
  )
  const joinPolicy =
    joinPolicyDraft && joinPolicyDraft.campaignId === campaignId ? joinPolicyDraft.value : campaign?.joinPolicy ?? 'PUBLIC'
  const diceDisplaySettings =
    diceDisplaySettingsDraft && diceDisplaySettingsDraft.campaignId === campaignId
      ? diceDisplaySettingsDraft.settings
      : storedDiceDisplaySettings
  const inventoryDisplaySettings =
    inventoryDisplaySettingsDraft && inventoryDisplaySettingsDraft.campaignId === campaignId
      ? inventoryDisplaySettingsDraft.settings
      : storedInventoryDisplaySettings
  const pathfinder2eDisplaySettings =
    pathfinder2eDisplaySettingsDraft && pathfinder2eDisplaySettingsDraft.campaignId === campaignId
      ? pathfinder2eDisplaySettingsDraft.settings
      : storedPathfinder2eDisplaySettings
  const changed = useMemo(() => (campaign ? joinPolicy !== campaign.joinPolicy : false), [campaign, joinPolicy])
  const autoClearOptions = useMemo(
    () => Array.from({ length: maxDiceAutoClearSeconds - minDiceAutoClearSeconds + 1 }, (_, index) => minDiceAutoClearSeconds + index),
    [],
  )

  useEffect(() => {
    if (!campaignId) return
    let cancelled = false

    void api<{ gameSystem: string }>(`/api/campaigns/${campaignId}/game-system`)
      .then((response) => {
        if (!cancelled) setCampaignGameSystem(response.gameSystem)
      })
      .catch(() => {
        if (!cancelled) setCampaignGameSystem(null)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId])

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

  function updateInventoryLocale(itemSheetLocale: InventoryDisplaySettings['itemSheetLocale']) {
    if (!campaignId) return

    const nextSettings = { itemSheetLocale }
    setInventoryDisplaySettingsDraft({ campaignId, settings: nextSettings })
    storeInventoryDisplaySettings(campaignId, nextSettings)
    setSettingsSyncWarning(null)

    void api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`, {
      method: 'PATCH',
      body: JSON.stringify({ settings: { inventory: nextSettings } }),
    })
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        setInventoryDisplaySettingsDraft({
          campaignId,
          settings: response.settings.inventory,
        })
      })
      .catch(() => {
        setSettingsSyncWarning('Preferencia aplicada neste navegador, mas ainda nao foi salva no servidor.')
      })
  }

  function updatePathfinder2eLocale(
    contentLocale: Pathfinder2eDisplaySettings['contentLocale'],
  ) {
    if (!campaignId) return

    const nextSettings = { contentLocale }
    setPathfinder2eDisplaySettingsDraft({ campaignId, settings: nextSettings })
    storePathfinder2eDisplaySettings(campaignId, nextSettings)
    setSettingsSyncWarning(null)

    void api<{ settings: CampaignUserSettingsResponse }>(
      `/api/campaigns/${campaignId}/my-settings`,
      {
        method: 'PATCH',
        body: JSON.stringify({ settings: { pathfinder2e: nextSettings } }),
      },
    )
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        setPathfinder2eDisplaySettingsDraft({
          campaignId,
          settings: response.settings.pathfinder2e,
        })
      })
      .catch(() => {
        setSettingsSyncWarning('Preferencia aplicada neste navegador, mas ainda nao foi salva no servidor.')
      })
  }

  async function updateTargetMarker(style: TargetMarkerStyle) {
    if (!onTargetMarkerStyleChange || style === targetMarkerStyle || targetMarkerSaving) return

    setTargetMarkerSaving(true)
    setTargetMarkerError(null)
    try {
      await onTargetMarkerStyleChange(style)
    } catch (cause) {
      setTargetMarkerError(
        cause instanceof Error ? cause.message : 'Nao foi possivel alterar o marcador de alvo.',
      )
    } finally {
      setTargetMarkerSaving(false)
    }
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
        syncWarning={settingsSyncWarning}
        onAutoClearChange={updateDiceAutoClear}
        onShowResultPopupChange={updateShowResultPopup}
      />

      {isMaster && onTargetMarkerStyleChange ? (
        <CollapsibleSettingsSection
          title="Mesa virtual"
          description="Configure os indicadores compartilhados exibidos no tabuleiro."
          defaultOpen
        >
          <div className="rounded-lg border border-white/10 bg-black/20 p-4">
            <div>
              <div className="text-sm font-semibold text-white">Padrao visual do alvo</div>
              <div className="mt-1 text-xs text-zinc-400">
                Define como os Tokens marcados com T aparecem para os participantes durante esta sessao.
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2" role="group" aria-label="Padrao visual do alvo">
              <button
                type="button"
                disabled={targetMarkerSaving}
                aria-pressed={targetMarkerStyle === 'ARROWS'}
                className={[
                  'flex min-h-12 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-semibold transition disabled:cursor-wait disabled:opacity-60',
                  targetMarkerStyle === 'ARROWS'
                    ? 'border-red-300/40 bg-red-500/20 text-red-100'
                    : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/10 hover:text-white',
                ].join(' ')}
                onClick={() => void updateTargetMarker('ARROWS')}
              >
                <Move className="h-4 w-4" />
                Flechas
              </button>
              <button
                type="button"
                disabled={targetMarkerSaving}
                aria-pressed={targetMarkerStyle === 'RETICLE'}
                className={[
                  'flex min-h-12 items-center justify-center gap-2 rounded-lg border px-4 text-sm font-semibold transition disabled:cursor-wait disabled:opacity-60',
                  targetMarkerStyle === 'RETICLE'
                    ? 'border-red-300/40 bg-red-500/20 text-red-100'
                    : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/10 hover:text-white',
                ].join(' ')}
                onClick={() => void updateTargetMarker('RETICLE')}
              >
                <Crosshair className="h-4 w-4" />
                Mira
              </button>
            </div>
            {targetMarkerError ? (
              <p className="mt-3 rounded-lg border border-red-300/20 bg-red-500/10 px-3 py-2 text-xs text-red-100">
                {targetMarkerError}
              </p>
            ) : null}
          </div>
        </CollapsibleSettingsSection>
      ) : null}

      <CollapsibleSettingsSection
        title="Inventário"
        description="Escolha o idioma padrão usado ao abrir a ficha de um item."
      >
        <label className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 p-4">
          <span>
            <span className="block text-sm font-semibold text-white">Idioma das fichas</span>
            <span className="mt-1 block text-xs text-zinc-400">
              A tradução e o conteúdo original continuam disponíveis no catálogo.
            </span>
          </span>
          <select
            value={inventoryDisplaySettings.itemSheetLocale}
            className="h-9 min-w-44 rounded-md border border-white/10 bg-black/45 px-3 text-sm font-semibold text-white outline-none transition focus:border-indigo-300/40"
            onChange={(event) => updateInventoryLocale(event.target.value === 'en-US' ? 'en-US' : 'pt-BR')}
          >
            <option value="pt-BR">Português (traduzido)</option>
            <option value="en-US">English (original)</option>
          </select>
        </label>
      </CollapsibleSettingsSection>

      {campaignGameSystem === 'PATHFINDER_2E' ? (
        <CollapsibleSettingsSection
          title="Pathfinder 2e"
          description="Escolha o idioma dos catálogos exibidos na ficha de personagem."
          defaultOpen
        >
          <label className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 p-4">
            <span>
              <span className="block text-sm font-semibold text-white">Idioma do conteúdo</span>
              <span className="mt-1 block text-xs text-zinc-400">
                O original em inglês é preservado e usado como fallback quando uma tradução ainda não existe.
              </span>
            </span>
            <select
              value={pathfinder2eDisplaySettings.contentLocale}
              className="h-9 min-w-44 rounded-md border border-white/10 bg-black/45 px-3 text-sm font-semibold text-white outline-none transition focus:border-indigo-300/40"
              onChange={(event) => updatePathfinder2eLocale(
                event.target.value === 'en-US' ? 'en-US' : 'pt-BR',
              )}
            >
              <option value="pt-BR">Português (traduzido)</option>
              <option value="en-US">English (original)</option>
            </select>
          </label>
        </CollapsibleSettingsSection>
      ) : null}

      {isMaster ? (
        <>
          <CollapsibleSettingsSection title="Convite" description="Compartilhe este codigo com os jogadores.">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-left transition hover:bg-black/30"
              onClick={onCopyInviteCode}
            >
              <span className="font-mono text-sm text-indigo-200">{campaign.inviteCode ?? '-'}</span>
              <Copy className="h-4 w-4 shrink-0 text-zinc-400" />
            </button>
            <div className="mt-3 text-xs text-zinc-500">
              Modo: <span className="text-zinc-300">{campaign.joinPolicy === 'PRIVATE' ? 'Privada' : 'Publica'}</span>
            </div>
          </CollapsibleSettingsSection>

          <CollapsibleSettingsSection title="Privacidade da campanha" description="Defina como novos jogadores entram nesta campanha.">
            <div className="grid gap-3">
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
          </CollapsibleSettingsSection>
        </>
      ) : null}
    </div>
  )
}
