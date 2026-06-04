import { Button } from '../components/Button'
import { useSession } from '../contexts/SessionContext'

export function CampaignHubPage() {
  const { me, logout } = useSession()

  return (
    <div className="max-w-3xl">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold">Campanhas</h1>
          <p className="text-zinc-300 mt-2">
            Logado como <span className="text-white">{me?.email}</span>
          </p>
        </div>

        <Button variant="ghost" onClick={logout}>
          Logout
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Criar campanha</h2>
          <p className="text-sm text-zinc-300 mt-1">
            Criar uma nova campanha (você vira o Mestre) — UI e endpoint ainda serão implementados.
          </p>
          <Button className="mt-4 w-full">Nova campanha</Button>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">Entrar em campanha</h2>
          <p className="text-sm text-zinc-300 mt-1">
            Entrar em uma campanha existente via convite/código — UI e endpoint ainda serão implementados.
          </p>
          <Button variant="ghost" className="mt-4 w-full">
            Entrar com código
          </Button>
        </div>
      </div>
    </div>
  )
}

