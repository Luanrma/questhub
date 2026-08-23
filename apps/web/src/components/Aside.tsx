import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Backpack,
  BookOpen,
  BookUser,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  House,
  Map,
  ScrollText,
  Settings,
  Users,
} from 'lucide-react'
import { api } from '../lib/api'
import { CampaignCatalogModal } from '../game-systems/CampaignCatalogModal'
import { CampaignCharacterSheetsModal } from '../game-systems/CampaignCharacterSheetsModal'
import { CampaignCharacterSheetWorkspace } from '../game-systems/CampaignCharacterSheetWorkspace'
import { CampaignGameSystemTokenIntegration } from '../game-systems/CampaignGameSystemTokenIntegration'
import { CampaignInventoryModal } from '../game-systems/CampaignInventoryModal'
import type {
  GameSystemCatalogDomain,
  GameSystemCatalogDomainDescriptor,
  GameSystemKey,
} from '../game-systems/registry'
import { registerVttWindow } from '../vtt/table/infrastructure/vttInteractionRegistry'

type CampaignRole = 'MASTER' | 'PLAYER'
type NavItem = { to: string; label: string; icon: React.ReactNode }

type CampaignSystemResponse = {
  campaignId: string
  gameSystem: GameSystemKey
  descriptor: {
    key: GameSystemKey
    label: string
    catalogDomains: GameSystemCatalogDomainDescriptor[]
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

const COMPENDIUM_WINDOW_BASE_Z_INDEX = 100
const COMPENDIUM_WINDOW_Z_INDEX_STEP = 100

export function Aside({
  campaignId,
  role,
  onSwitchCampaign,
  onOpenCampaignPanel,
}: Props) {
  const [collapsed, setCollapsed] = useState(true)
  const [system, setSystem] = useState<CampaignSystemResponse | null>(null)
  const [compendiumMenuOpen, setCompendiumMenuOpen] = useState(false)
  const [compendiumMenuTop, setCompendiumMenuTop] = useState(0)
  const [openCompendiumDomainKeys, setOpenCompendiumDomainKeys] = useState<GameSystemCatalogDomain[]>([])
  const [characterSheetsOpen, setCharacterSheetsOpen] = useState(false)
  const [inventoryOpen, setInventoryOpen] = useState(false)
  const compendiumButtonRef = useRef<HTMLButtonElement>(null)

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

  useEffect(() => {
    setCompendiumMenuOpen(false)
    setOpenCompendiumDomainKeys([])
  }, [campaignId])

  useEffect(() => registerVttWindow({
    id: `campaign-sidebar:${campaignId}`,
    getZIndex: () => 40,
    close: () => {
      setCompendiumMenuOpen(false)
      setCollapsed(true)
    },
    isVisible: () => !collapsed,
  }), [campaignId, collapsed])

  const primaryItems = useMemo<NavItem[]>(
    () => [
      { to: `/campaign/${campaignId}/overview`, label: 'Mesa', icon: <Map size={18} /> },
      { to: `/campaign/${campaignId}/sessions`, label: 'Sessões', icon: <House size={18} /> },
    ],
    [campaignId],
  )
  const secondaryItems = useMemo<NavItem[]>(
    () => [
      { to: `/campaign/${campaignId}/players`, label: 'Jogadores', icon: <Users size={18} /> },
      { to: `/campaign/${campaignId}/journal`, label: 'Diário', icon: <ScrollText size={18} /> },
      { to: '/campaigns', label: 'Trocar campanha', icon: <House size={18} /> },
      { to: `/campaign/${campaignId}/settings`, label: 'Configurações', icon: <Settings size={18} /> },
    ],
    [campaignId],
  )

  const catalogDomains = system?.descriptor.catalogDomains ?? []

  function updateCompendiumMenuPosition() {
    const rect = compendiumButtonRef.current?.getBoundingClientRect()
    if (!rect) return
    const estimatedHeight = Math.max(56, catalogDomains.length * 42 + 16)
    setCompendiumMenuTop(Math.max(8, Math.min(rect.top, window.innerHeight - estimatedHeight - 8)))
  }

  function toggleCompendiumMenu() {
    updateCompendiumMenuPosition()
    setCompendiumMenuOpen((current) => !current)
  }

  function openCompendiumDomain(domain: GameSystemCatalogDomainDescriptor) {
    setOpenCompendiumDomainKeys((current) => [
      ...current.filter((key) => key !== domain.key),
      domain.key,
    ])
  }

  function closeCompendiumDomain(domainKey: GameSystemCatalogDomain) {
    setOpenCompendiumDomainKeys((current) => current.filter((key) => key !== domainKey))
  }

  function renderNavItem(item: NavItem) {
    return (
      <li key={item.to}>
        <NavLink
          to={item.to}
          onClick={(event) => {
            if (item.to.endsWith('/overview')) return
            if (item.to === '/campaigns') {
              event.preventDefault()
              const confirmed = window.confirm('Deseja sair da mesa e trocar de campanha?')
              if (confirmed) void onSwitchCampaign?.()
              return
            }
            event.preventDefault()
            onOpenCampaignPanel?.(item.to)
          }}
          className={({ isActive }) => [
            'flex items-center gap-3 rounded-lg px-3 py-2 transition',
            'text-zinc-300 hover:text-white hover:bg-white/10',
            isActive ? 'text-white' : '',
          ].join(' ')}
        >
          <span className="text-[#6e3fae]">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      </li>
    )
  }

  return (
    <>
      {collapsed ? (
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
      ) : (
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
                onClick={() => {
                  setCompendiumMenuOpen(false)
                  setCollapsed(true)
                }}
                aria-label="Recolher menu"
              >
                <ChevronUp className="h-5 w-5" strokeWidth={3} />
              </button>
            </div>

            <nav className="px-2 pb-3">
              <ul className="flex flex-col gap-1">
                {primaryItems.map(renderNavItem)}

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

                {role === 'MASTER' ? <li>
                  <button
                    type="button"
                    onClick={() => setInventoryOpen(true)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-zinc-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <span className="text-[#6e3fae]"><Backpack size={18} /></span>
                    <span>Inventários</span>
                  </button>
                </li> : null}

                {catalogDomains.length > 0 ? (
                  <li>
                    <button
                      ref={compendiumButtonRef}
                      type="button"
                      onClick={toggleCompendiumMenu}
                      aria-expanded={compendiumMenuOpen}
                      aria-haspopup="menu"
                      className={[
                        'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition',
                        compendiumMenuOpen
                          ? 'bg-white/10 text-white'
                          : 'text-zinc-300 hover:bg-white/10 hover:text-white',
                      ].join(' ')}
                    >
                      <span className="text-[#6e3fae]"><BookOpen size={18} /></span>
                      <span className="flex-1">Compêndio</span>
                      <ChevronRight
                        size={16}
                        className={compendiumMenuOpen ? 'rotate-90 text-zinc-200 transition' : 'text-zinc-500 transition'}
                      />
                    </button>
                  </li>
                ) : null}

                {secondaryItems.map(renderNavItem)}
              </ul>
            </nav>
          </div>
        </aside>
      )}

      {!collapsed && compendiumMenuOpen && catalogDomains.length > 0 ? (
        <div
          className="fixed left-[244px] z-[10001] w-60 max-w-[calc(100vw-256px)] rounded-xl border border-white/10 bg-zinc-900/95 p-1.5 text-white shadow-2xl backdrop-blur"
          style={{ top: compendiumMenuTop }}
          role="menu"
          aria-label="Domínios do Compêndio"
        >
          {catalogDomains.map((domain) => {
            const open = openCompendiumDomainKeys.includes(domain.key)
            return (
              <button
                key={domain.key}
                type="button"
                role="menuitem"
                onClick={() => openCompendiumDomain(domain)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <span className={[
                  'h-2 w-2 shrink-0 rounded-full border',
                  open ? 'border-violet-300 bg-violet-400' : 'border-zinc-600 bg-transparent',
                ].join(' ')} />
                <span className="min-w-0 flex-1 truncate">{domain.label}</span>
                {open ? <span className="text-[10px] uppercase tracking-wide text-violet-300">Aberto</span> : null}
              </button>
            )
          })}
        </div>
      ) : null}

      {openCompendiumDomainKeys.map((domainKey, index) => {
        const domain = catalogDomains.find((candidate) => candidate.key === domainKey)
        if (!domain) return null
        return (
          <CampaignCatalogModal
            key={domain.key}
            campaignId={campaignId}
            domains={[domain]}
            canManageTokens={role === 'MASTER'}
            zIndex={COMPENDIUM_WINDOW_BASE_Z_INDEX + index * COMPENDIUM_WINDOW_Z_INDEX_STEP}
            leftInset={collapsed ? 48 : 240}
            onClose={() => closeCompendiumDomain(domain.key)}
          />
        )
      })}

      {characterSheetsOpen ? (
        <CampaignCharacterSheetsModal
          campaignId={campaignId}
          onClose={() => setCharacterSheetsOpen(false)}
        />
      ) : null}

      {role === 'MASTER' && inventoryOpen ? (
        <CampaignInventoryModal
          campaignId={campaignId}
          onClose={() => setInventoryOpen(false)}
        />
      ) : null}

      <CampaignCharacterSheetWorkspace
        campaignId={campaignId}
        gameSystem={system?.gameSystem ?? null}
        role={role}
      />
      <CampaignGameSystemTokenIntegration
        campaignId={campaignId}
        enabled={Boolean(role === 'MASTER' && system)}
      />
    </>
  )
}