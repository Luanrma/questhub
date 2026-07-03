import { useEffect, useMemo, useState } from 'react'
import { Check, Footprints, Heart, Plus, Search, Shield, Sparkles } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { api } from '../../../lib/api'
import {
  readStoredCampaignUserSettings,
  storeCampaignUserSettings,
  type CampaignUserSettings,
} from '../../../vtt/dice-roller/infrastructure/storage/diceThemeStorage'
import { questhubBestiaryDragType } from '../../../vtt/table/config/constants'

type BestiaryCreature = {
  id: string
  system: 'PATHFINDER_2E' | 'DND_5E'
  sourcePack: string
  sourceId: string
  name: string
  level: number
  rarity: string
  size: string
  traits: string[]
  armorClass: number
  hitPoints: number
  speed: number
  publicationTitle: string
  remaster: boolean
  license: string
  token: {
    imageUrl: string | null
    fallbackInitials: string
    borderColor: string
  }
}

type BestiaryResponse = {
  campaignId: string
  system: 'PATHFINDER_2E' | 'DND_5E'
  creatures: BestiaryCreature[]
}

const systemLabels: Record<BestiaryResponse['system'], string> = {
  PATHFINDER_2E: 'Pathfinder 2e',
  DND_5E: 'Dungeons & Dragons 5e',
}

const sizeLabels: Record<string, string> = {
  tiny: 'Miudo',
  sm: 'Pequeno',
  med: 'Medio',
  lg: 'Grande',
  huge: 'Enorme',
  grg: 'Colossal',
}

function formatLevel(level: number) {
  if (level < 0) return `${level}`
  return `+${level}`
}

function CreatureToken({ creature }: { creature: BestiaryCreature }) {
  if (creature.token.imageUrl) {
    return (
      <img
        src={creature.token.imageUrl}
        alt=""
        className="h-14 w-14 rounded-full border-2 object-cover shadow-lg"
        style={{ borderColor: creature.token.borderColor }}
      />
    )
  }

  return (
    <div
      className="grid h-14 w-14 place-items-center rounded-full border-2 bg-black/45 text-sm font-bold text-white shadow-lg"
      style={{
        borderColor: creature.token.borderColor,
        boxShadow: `0 0 22px ${creature.token.borderColor}33`,
      }}
      aria-hidden="true"
    >
      {creature.token.fallbackInitials}
    </div>
  )
}

function StatPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex h-8 items-center gap-1.5 rounded-md border border-white/10 bg-black/25 px-2.5 text-xs font-semibold text-zinc-100">
      <span className="text-zinc-400">{icon}</span>
      {label}
    </span>
  )
}

export function CampaignBestiaryPage() {
  const { campaignId } = useParams()
  const [search, setSearch] = useState('')
  const [data, setData] = useState<BestiaryResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [preparedCreatureIds, setPreparedCreatureIds] = useState<string[]>([])
  const [savingCreatureId, setSavingCreatureId] = useState<string | null>(null)

  const query = useMemo(() => search.trim(), [search])
  const preparedCreatureIdSet = useMemo(() => new Set(preparedCreatureIds), [preparedCreatureIds])

  useEffect(() => {
    if (!campaignId) return

    const controller = new AbortController()
    const timeout = window.setTimeout(() => {
      setLoading(true)
      setError(null)

      const qs = query ? `?q=${encodeURIComponent(query)}` : ''
      api<BestiaryResponse>(`/api/campaigns/${campaignId}/bestiary${qs}`, { signal: controller.signal })
        .then(setData)
        .catch((err) => {
          if (controller.signal.aborted) return
          setError(err instanceof Error ? err.message : 'Nao foi possivel carregar o bestiario.')
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false)
        })
    }, 180)

    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [campaignId, query])

  useEffect(() => {
    if (!campaignId) return

    const storedSettings = readStoredCampaignUserSettings(campaignId)
    setPreparedCreatureIds(storedSettings.vtt.preparedBestiaryCreatureIds)

    let cancelled = false
    api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`)
      .then((response) => {
        if (cancelled) return
        storeCampaignUserSettings(campaignId, response.settings)
        setPreparedCreatureIds(response.settings.vtt.preparedBestiaryCreatureIds)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [campaignId])

  function addCreatureToken(creature: BestiaryCreature) {
    if (!campaignId || preparedCreatureIdSet.has(creature.id) || savingCreatureId) return

    const currentSettings = readStoredCampaignUserSettings(campaignId)
    const nextIds = Array.from(new Set([...currentSettings.vtt.preparedBestiaryCreatureIds, creature.id]))
    const nextSettings: CampaignUserSettings = {
      ...currentSettings,
      vtt: {
        ...currentSettings.vtt,
        preparedBestiaryCreatureIds: nextIds,
      },
    }

    setSavingCreatureId(creature.id)
    setPreparedCreatureIds(nextIds)
    storeCampaignUserSettings(campaignId, nextSettings)

    void api<{ settings: CampaignUserSettings }>(`/api/campaigns/${campaignId}/my-settings`, {
      method: 'PATCH',
      body: JSON.stringify({ settings: { vtt: { preparedBestiaryCreatureIds: nextIds } } }),
    })
      .then((response) => {
        storeCampaignUserSettings(campaignId, response.settings)
        setPreparedCreatureIds(response.settings.vtt.preparedBestiaryCreatureIds)
      })
      .catch(() => {
        setPreparedCreatureIds(currentSettings.vtt.preparedBestiaryCreatureIds)
        storeCampaignUserSettings(campaignId, currentSettings)
        setError('Nao foi possivel adicionar o token ao toolbar.')
      })
      .finally(() => setSavingCreatureId(null))
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Bestiario</h1>
          <p className="mt-2 text-sm text-zinc-300">
            {data ? systemLabels[data.system] : 'Carregando sistema da campanha...'}
          </p>
        </div>
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar criatura ou trait"
            className="h-10 w-full rounded-md border border-white/10 bg-black/35 pl-9 pr-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-indigo-300/50"
          />
        </div>
      </div>

      {error ? (
        <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</div>
      ) : null}

      {loading && !data ? <div className="text-sm text-zinc-400">Carregando bestiario...</div> : null}

      {data && data.creatures.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-6 text-sm text-zinc-300">
          Nenhuma criatura encontrada.
        </div>
      ) : null}

      <div className="grid gap-3 lg:grid-cols-2">
        {data?.creatures.map((creature) => (
          <article
            key={creature.id}
            draggable
            title="Arraste para o tabuleiro para criar um token NPC"
            className="cursor-grab rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-indigo-300/40 hover:bg-white/[0.07] active:cursor-grabbing"
            onDragStart={(event) => {
              event.dataTransfer.setData(questhubBestiaryDragType, creature.id)
              event.dataTransfer.effectAllowed = 'copy'
            }}
          >
            <div className="flex items-start gap-4">
              <CreatureToken creature={creature} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="truncate text-base font-semibold text-white">{creature.name}</h2>
                    <div className="mt-1 text-xs text-zinc-400">
                      {creature.publicationTitle} - {creature.sourcePack}
                    </div>
                  </div>
                  <span className="rounded-md border border-indigo-300/20 bg-indigo-400/10 px-2 py-1 text-xs font-bold text-indigo-100">
                    Nivel {formatLevel(creature.level)}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <StatPill icon={<Shield className="h-3.5 w-3.5" />} label={`CA ${creature.armorClass}`} />
                  <StatPill icon={<Heart className="h-3.5 w-3.5" />} label={`${creature.hitPoints} PV`} />
                  <StatPill icon={<Footprints className="h-3.5 w-3.5" />} label={`${creature.speed} ft`} />
                  <StatPill icon={<Sparkles className="h-3.5 w-3.5" />} label={sizeLabels[creature.size] ?? creature.size} />
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[creature.rarity, ...creature.traits].map((trait) => (
                    <span key={trait} className="rounded border border-white/10 bg-black/25 px-2 py-0.5 text-[11px] text-zinc-300">
                      {trait}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={preparedCreatureIdSet.has(creature.id) || savingCreatureId === creature.id}
                  className="mt-4 inline-flex h-9 items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-500/10 px-3 text-xs font-semibold uppercase text-emerald-100 transition hover:bg-emerald-500/20 disabled:cursor-default disabled:border-white/10 disabled:bg-white/[0.04] disabled:text-zinc-400"
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    addCreatureToken(creature)
                  }}
                >
                  {preparedCreatureIdSet.has(creature.id) ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  {preparedCreatureIdSet.has(creature.id) ? 'Adicionado' : 'Adicionar Token'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
