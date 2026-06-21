import { ScrollText, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'

export function HomePage() {
  const navigate = useNavigate()
  const { me, logout } = useSession()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-white font-semibold">Quest Hub</div>
          <div className="text-xs text-zinc-300">Olá, {me?.email}</div>
        </div>
        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <button
          type="button"
          onClick={() => navigate('/campaigns')}
          className="group rounded-lg border border-white/10 bg-white/5 p-6 text-left transition hover:border-indigo-300/40 hover:bg-white/10"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-indigo-300/20 bg-indigo-400/10 text-indigo-100">
            <ScrollText className="h-5 w-5" />
          </span>
          <h1 className="mt-5 text-2xl font-semibold text-white">Campanhas</h1>
          <p className="mt-2 text-sm text-zinc-300">
            Crie aventuras, entre por convite e acesse suas mesas ativas.
          </p>
          <span className="mt-5 inline-flex text-sm font-semibold text-indigo-200 group-hover:text-indigo-100">
            Abrir campanhas
          </span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/characters')}
          className="group rounded-lg border border-white/10 bg-white/5 p-6 text-left transition hover:border-amber-300/40 hover:bg-white/10"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-400/10 text-amber-100">
            <UserRound className="h-5 w-5" />
          </span>
          <h1 className="mt-5 text-2xl font-semibold text-white">Personagens</h1>
          <p className="mt-2 text-sm text-zinc-300">
            Gerencie sua biblioteca de personagens livres e vinculados.
          </p>
          <span className="mt-5 inline-flex text-sm font-semibold text-amber-200 group-hover:text-amber-100">
            Abrir personagens
          </span>
        </button>
      </section>
    </div>
  )
}

