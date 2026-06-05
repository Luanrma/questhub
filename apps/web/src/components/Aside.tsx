import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  House,
  LayoutDashboard,
  Users,
  ScrollText,
  Settings,
  UserRound,
} from 'lucide-react'

type NavItem = { to: string; label: string; icon: React.ReactNode }

export function Aside({ campaignId }: { campaignId: string }) {
  const [collapsed, setCollapsed] = useState(true)

  const items = useMemo<NavItem[]>(
    () => [
      { to: `/campaign/${campaignId}/overview`, label: 'Visão Geral', icon: <LayoutDashboard size={18} /> },
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
        'm-2 rounded-r-2xl bg-zinc-800/90 text-white',
        'transition-[width] duration-300 ease-out',
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
          {items.map((it) => (
            <li key={it.to}>
              <NavLink
                to={it.to}
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
    </aside>
  )
}
