import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  House,
  Map,
  Users,
  ScrollText,
  Settings,
  UserRound,
} from 'lucide-react'

type CampaignRole = 'MASTER' | 'PLAYER'
type NavItem = { to: string; label: string; icon: React.ReactNode }

type Props = {
  campaignId: string
  role?: CampaignRole | null
  canOpenMySheet?: boolean
  onOpenMySheet?: () => void
}

export function Aside({ campaignId, role, canOpenMySheet = false, onOpenMySheet }: Props) {
  const [collapsed, setCollapsed] = useState(true)

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

  return (
    <aside
      className={[
        'campaign-sidebar z-40 text-white',
        collapsed ? 'campaign-sidebar-collapsed' : 'campaign-sidebar-expanded',
      ].join(' ')}
    >
      <div
        className={[
          'campaign-sidebar-panel rounded-r-2xl bg-zinc-800/90 shadow-2xl backdrop-blur',
          'transition-[width,transform] duration-300 ease-out',
          collapsed ? 'w-20' : 'w-60',
        ].join(' ')}
      >
        <div className="flex items-center justify-end p-3">
          <button
            type="button"
            className="rounded-md p-2 hover:bg-white/10 transition"
            onClick={() => setCollapsed((v) => !v)}
            aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>

        <nav className="px-2 pb-3">
          <ul className="flex flex-col gap-1">
            {role === 'PLAYER' ? (
              <li>
                <button
                  type="button"
                  disabled={!canOpenMySheet}
                  onClick={onOpenMySheet}
                  className={[
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition disabled:cursor-not-allowed disabled:opacity-40',
                    'text-zinc-300 hover:bg-white/10 hover:text-white',
                  ].join(' ')}
                >
                  <span className="text-[#6e3fae]"><FileText size={18} /></span>
                  {!collapsed && <span>Minha ficha</span>}
                </button>
              </li>
            ) : null}
            {items.filter((it) => role !== 'PLAYER' || !it.to.endsWith('/characters')).map((it) => (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  onClick={(event) => {
                    if (it.to !== '/campaigns') return
                    const confirmed = window.confirm('Deseja sair da mesa e trocar de campanha?')
                    if (!confirmed) event.preventDefault()
                  }}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 rounded-lg px-3 py-2 transition',
                      'text-zinc-300 hover:text-white hover:bg-white/10',
                      isActive ? 'text-white' : '',
                    ].join(' ')
                  }
                >
                  <span className="text-[#6e3fae]">{it.icon}</span>
                  {!collapsed && <span>{it.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
