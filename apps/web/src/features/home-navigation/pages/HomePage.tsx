import { ScrollText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/Button'
import { useSession } from '../../../contexts/session-context'

export function HomePage() {
  const navigate = useNavigate()
  const { me, logout } = useSession()

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-white">Quest Hub</div>
          <div className="text-xs text-zinc-300">Olá, {me?.email}</div>
        </div>
        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </div>

      <section className="grid gap-4">
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
            Crie aventuras, entre por convite e gerencie fichas exclusivamente dentro de cada mundo.
          </p>
          <span className="mt-5 inline-flex text-sm font-semibold text-indigo-200 group-hover:text-indigo-100">
            Abrir campanhas
          </span>
        </button>
      </section>
    </div>
  )
}
