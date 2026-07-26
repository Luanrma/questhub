import { useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  BookUser,
  ChevronDown,
  ChevronUp,
  House,
  Map,
  Package,
  PawPrint,
  ScrollText,
  Settings,
  Sparkles,
  UserRound,
  Users,
} from 'lucide-react'
import { api } from '../lib/api'
import { CampaignCatalogModal } from '../game-systems/CampaignCatalogModal'
import { CampaignCharacterSheetsModal } from '../game-systems/CampaignCharacterSheetsModal'
import {
  catalogDomainLabels,
  type GameSystemCatalogDomain,
  type GameSystemKey,
} from '../game-systems/registry'

type CampaignRole = 'MASTER' | 'PLAYER'
type NavItem = { to: string; label: string; icon: React.ReactNode }

type CampaignSystemResponse = {
  campaignId: string
  gameSystem: GameSystemKey
  descriptor: {
    key: GameSystemKey
    label: string
    catalogDomains: GameSystemCatalogDomain[]
  }
  catalogAvailable: boolean
  characterSheetsAvailable: boolean
}

type Props = {
  campaignId: string
  role?: CampaignRole | null
  onSwitchCampaign?: () => void | Promise<void>
  onOpenCampaignPanel?: (path: string) => void
}

const catalogIcons = {
  BESTIARY: PawPrint,
  SPELLS: Sparkles,
  ITEMS: Package,
} satisfies Record<GameSystemCatalogDomain, typeof PawPrint>

export function Aside({
  campaignId,
  role,
  onSwitchCampaign,
  onOpenCampaignPanel,
}: Props) {
  const [collapsed, setCollapsed] = useState(true)
  const [system, setSystem] = useState<CampaignSystemResponse | null>(null)
  const [catalogDomain, setCatalogDomain] = useState<GameSystemCatalogDomain | null>(null)
  const [characterSheetsOpen, setCharacterSheetsOpen] = useState(false)

  useEffect(() => {
    if (collapsed) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && !catalogDomain && !characterSheetsOpen) setCollapsed(true)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [catalogDomain, characterSheetsOpen, collapsed])

  useEffect(() => {
    let cancelled = false
    api<CampaignSystemResponse>(`/api/campaigns/${campaignId}/game-system`)
      .then((response) => {
        if (!cancelled) setSystem(response)
      })
      .catch(() => {
        if (!cancelled) setSystem(null)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId])

  const items = useMemo<NavItem[]>(
    () => [
      { to: `/campaign/${campaignId}/overview`, label: 'Mesa', icon: <Map size={18} /> },
      { to: `/campaign/${campaignId}/sessions`, label: 'Sessões', icon: <House size={18} /> },
      { to: `/campaign/${campaignId}/characters`, label: 'Personagens', icon: <UserRound size={18} /> },
      { to: `/campaign/${campaignId}/players`, label: 'Jogadores', icon: <Users size={18} /> },
      { to: `/campaign/${campaignId}/journal`, label: 'Diário', icon: <ScrollText size={18} /> },
      { to: '/campaigns', label: 'Trocar campanha', icon: <House size={18} /> },
      { to: `/campaign/${campaignId}/settings`, label: 'Configurações', icon: <Settings size={18} /> },
    ],
    [campaignId],
  )

  if (collapsed) {
    return (
      <aside className="campaign-sidebar campaign-sidebar-collapsed z-40 text-white">
        <button
          type="button"
          title="Expandir menu da campanha"
          className="campaign-sidebar-toggle flex items-center justify-center rounded-br-xl border-b border-r border-white/10 bg-black/75 text-[#8b5cf6] shadow-2xl backdrop-blur transition hover:bg-zinc-900 hover:text-[#a78bfa]"
          onClick={() => setCollapsed(false)}
          aria-label="Expandir menu da campanha"
        >
          <ChevronDown className="h-5 w-5 drop-shadow-[0_0_10px_rgba(139,92,246,0.75)]" strokeWidth={3} />
        </button>
      </aside>
    )
  }

  const catalogDomains = system?.descriptor.catalogDomains ?? []

  return (
    <>
      <aside className="campaign-sidebar campaign-sidebar-expanded z-40 text-white">
        <div
          className={[
            'campaign-sidebar-panel w-60 rounded-r-2xl bg-zinc-800/90 shadow-2xl backdrop-blur',
            'transition-[width,transform] duration-300 ease-out',
          ].join(' ')}
        >
          <div className="flex items-center justify-start">
            <button
              type="button"
              title="Recolher menu da campanha"
              className="campaign-sidebar-toggle flex items-center justify-center rounded-br-xl border-b border-r border-white/10 bg-black/30 text-[#a78bfa] transition hover:bg-white/10 hover:text-white"
              onClick={() => setCollapsed(true)}
              aria-label="Recolher menu"
            >
              <ChevronUp className="h-5 w-5" strokeWidth={3} />
            </button>
          </div>

          <nav className="px-2 pb-3">
            <ul className="flex flex-col gap-1">
              {items.slice(0, 3).filter((it) => role !== 'PLAYER' || !it.to.endsWith('/characters')).map((it) => (
                <li key={it.to}>
                  <NavLink
                    to={it.to}
                    onClick={(event) => {
                      if (it.to.endsWith('/overview')) return
                      event.preventDefault()
                      onOpenCampaignPanel?.(it.to)
                    }}
                    className={({ isActive }) => [
                      'flex items-center gap-3 rounded-lg px-3 py-2 transition',
                      'text-zinc-300 hover:text-white hover:bg-white/10',
                      isActive ? 'text-white' : '',
                    ].join(' ')}
                  >
                    <span className="text-[#6e3fae]">{it.icon}</span>
                    <span>{it.label}</span>
                  </NavLink>
                </li>
              ))}

              {role === 'MASTER' && system?.characterSheetsAvailable ? (
                <li>
                  <button
                    type="button"
                    onClick={() => setCharacterSheetsOpen(true)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <span className="text-[#6e3fae]"><BookUser size={18} /></span>
                    <span>Fichas</span>
                  </button>
                </li>
              ) : null}

              {catalogDomains.map((domain) => {
                const Icon = catalogIcons[domain]
                return (
                  <li key={domain}>
                    <button
                      type="button"
                      onClick={() => setCatalogDomain(domain)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-zinc-300 transition hover:bg-white/10 hover:text-white"
                    >
                      <span className="text-[#6e3fae]"><Icon size={18} /></span>
                      <span>{catalogDomainLabels[domain]}</span>
                    </button>
                  </li>
                )
              })}

              {items.slice(3).map((it) => (
                <li key={it.to}>
                  <NavLink
                    to={it.to}
                    onClick={(event) => {
                      if (it.to === '/campaigns') {
                        event.preventDefault()
                        const confirmed = window.confirm('Deseja sair da mesa e trocar de campanha?')
                        if (confirmed) void onSwitchCampaign?.()
                        return
                      }
                      event.preventDefault()
                      onOpenCampaignPanel?.(it.to)
                    }}
                    className={({ isActive }) => [
                      'flex items-center gap-3 rounded-lg px-3 py-2 transition',
                      'text-zinc-300 hover:text-white hover:bg-white/10',
                      isActive ? 'text-white' : '',
                    ].join(' ')}
                  >
                    <span className="text-[#6e3fae]">{it.icon}</span>
                    <span>{it.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {catalogDomain ? (
        <CampaignCatalogModal
          campaignId={campaignId}
          domain={catalogDomain}
          onClose={() => setCatalogDomain(null)}
        />
      ) : null}

      {characterSheetsOpen ? (
        <CampaignCharacterSheetsModal
          campaignId={campaignId}
          onClose={() => setCharacterSheetsOpen(false)}
        />
      ) : null}
    </>
  )
}
