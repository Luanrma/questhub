import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { api } from '../../../lib/api'
import {
  storeCampaignUserSettings,
  type CampaignUserSettings,
} from '../../../vtt/dice-roller/infrastructure/storage/diceThemeStorage'
import {
  normalizePathfinder2eDisplaySettings,
  readStoredPathfinder2eDisplaySettings,
  storePathfinder2eDisplaySettings,
  type Pathfinder2eDisplaySettings,
} from '../character-sheet/infrastructure/pathfinder2eDisplaySettingsStorage'

type Pathfinder2eCampaignSettingsPanelProps = {
  campaignId: string
}

type CampaignUserSettingsResponse = CampaignUserSettings & {
  pathfinder2e?: unknown
}

export function Pathfinder2eCampaignSettingsPanel({
  campaignId,
}: Pathfinder2eCampaignSettingsPanelProps) {
  const [open, setOpen] = useState(true)
  const [draft, setDraft] = useState<{
    campaignId: string
    settings: Pathfinder2eDisplaySettings
  } | null>(null)
  const [syncWarning, setSyncWarning] = useState<string | null>(null)

  const storedSettings = useMemo(
    () => readStoredPathfinder2eDisplaySettings(campaignId),
    [campaignId],
  )
  const settings = draft?.campaignId === campaignId ? draft.settings : storedSettings

  function updateContentLocale(contentLocale: Pathfinder2eDisplaySettings['contentLocale']) {
    const nextSettings = { contentLocale }
    setDraft({ campaignId, settings: nextSettings })
    storePathfinder2eDisplaySettings(campaignId, nextSettings)
    setSyncWarning(null)

    void api<{ settings: CampaignUserSettingsResponse }>(
      `/api/campaigns/${campaignId}/my-settings`,
      {
        method: 'PATCH',
        body: JSON.stringify({ settings: { pathfinder2e: nextSettings } }),
      },
    )
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        const persistedSettings = normalizePathfinder2eDisplaySettings(
          response.settings.pathfinder2e ?? nextSettings,
        )
        storePathfinder2eDisplaySettings(campaignId, persistedSettings)
        setDraft({ campaignId, settings: persistedSettings })
      })
      .catch(() => {
        setSyncWarning('Preferencia aplicada neste navegador, mas ainda nao foi salva no servidor.')
      })
  }

  return (
    <section className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-white/[0.03]"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>
          <span className="block text-lg font-semibold text-white">Pathfinder 2e</span>
          <span className="mt-2 block text-sm text-zinc-300">
            Escolha o idioma dos catálogos exibidos na ficha de personagem.
          </span>
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 pb-5">
            <label className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 p-4">
              <span>
                <span className="block text-sm font-semibold text-white">Idioma do conteúdo</span>
                <span className="mt-1 block text-xs text-zinc-400">
                  O original em inglês é preservado e usado como fallback quando uma tradução ainda não existe.
                </span>
              </span>
              <select
                value={settings.contentLocale}
                className="h-9 min-w-44 rounded-md border border-white/10 bg-black/45 px-3 text-sm font-semibold text-white outline-none transition focus:border-indigo-300/40"
                onChange={(event) => updateContentLocale(
                  event.target.value === 'en-US' ? 'en-US' : 'pt-BR',
                )}
              >
                <option value="pt-BR">Português (traduzido)</option>
                <option value="en-US">English (original)</option>
              </select>
            </label>

            {syncWarning ? (
              <p className="mt-4 rounded-lg border border-amber-300/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
                {syncWarning}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
