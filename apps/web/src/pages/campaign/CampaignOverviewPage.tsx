import {
  Copy,
  Dice5,
  Grid3X3,
  MapPinned,
  MousePointer2,
  Move,
  Plus,
  Ruler,
  Users,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CampaignChat } from '../../components/CampaignChat'
import { useSession } from '../../contexts/SessionContext'

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

const toolButtons = [
  { label: 'Selecionar', icon: MousePointer2 },
  { label: 'Mover', icon: Move },
  { label: 'Medir', icon: Ruler },
  { label: 'Grid', icon: Grid3X3 },
]

export function CampaignOverviewPage() {
  const { campaignId } = useParams()
  const { campaigns } = useSession()

  const campaign = campaigns.find((item) => item.id === campaignId)
  const isMaster = campaign?.myRole === 'MASTER'

  async function onCopyInviteCode() {
    if (!campaign?.inviteCode) return

    const copied = await copyToClipboard(campaign.inviteCode)
    if (copied) {
      alert('Invite code copiado!')
      return
    }

    alert('Não foi possível copiar. Copie manualmente.')
  }

  return (
    <div className="grid h-full min-h-0 grid-cols-[minmax(0,1fr)_320px] bg-[#08090c] text-white max-xl:grid-cols-1">
      <section className="relative min-h-0 overflow-hidden border-r border-white/10 bg-[#0b0d12]">
        <div className="absolute inset-0 vtt-grid-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.10),transparent_36%),linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.72)_100%)]" />

        <div className="relative z-10 flex h-full min-h-[560px] flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/30 py-3 pl-24 pr-5 backdrop-blur">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs uppercase text-zinc-400">
                <MapPinned className="h-4 w-4 text-indigo-300" />
                Mesa ativa
                <span
                  className={[
                    'rounded-full border px-2 py-0.5 text-[10px]',
                    campaign?.isOnline
                      ? 'border-emerald-300/25 bg-emerald-400/10 text-emerald-200'
                      : 'border-zinc-300/20 bg-zinc-400/10 text-zinc-300',
                  ].join(' ')}
                >
                  {campaign?.isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
              <h1 className="truncate text-xl font-semibold text-white">{campaign?.title ?? 'Campanha'}</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" className="h-9 gap-2 px-3">
                <Dice5 className="h-4 w-4" />
                Rolar
              </Button>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="absolute left-24 top-5 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              {toolButtons.map((tool, index) => {
                const Icon = tool.icon
                const active = index === 0

                return (
                  <button
                    key={tool.label}
                    type="button"
                    title={tool.label}
                    className={[
                      'flex h-10 w-10 items-center justify-center rounded-md transition',
                      active ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-white/10 hover:text-white',
                    ].join(' ')}
                  >
                    <Icon className="h-4 w-4" />
                  </button>
                )
              })}
            </div>

            <div className="absolute right-5 top-5 flex rounded-lg border border-white/10 bg-black/45 p-1 shadow-2xl backdrop-blur">
              <button
                type="button"
                title="Diminuir zoom"
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <div className="flex h-10 min-w-16 items-center justify-center px-3 text-xs text-zinc-200">100%</div>
              <button
                type="button"
                title="Aumentar zoom"
                className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>

            <div className="absolute inset-x-6 bottom-6 rounded-lg border border-white/10 bg-black/45 px-4 py-3 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">Cena sem mapa carregado</div>
                  <div className="text-xs text-zinc-400">Grid pronto para mapas, tokens e medidas.</div>
                </div>
                {isMaster ? (
                  <Button variant="ghost" className="h-9 gap-2 px-3">
                    <Plus className="h-4 w-4" />
                    Preparar cena
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside className="min-h-0 overflow-hidden border-l border-white/10 bg-[#101116] p-5 max-xl:border-l-0 max-xl:border-t">
        <div className="flex h-full min-h-0 flex-col gap-5">
          <section>
            <div className="text-xs uppercase text-zinc-500">Campanha</div>
            <h2 className="mt-1 text-lg font-semibold text-white">{campaign?.title ?? 'Campanha'}</h2>
            <p className="mt-2 text-sm text-zinc-400">{campaign?.description || 'Sem descrição.'}</p>
            <div className="mt-3 text-xs text-zinc-500">
              Mestre: <span className="text-zinc-300">{campaign?.gmName ?? '-'}</span>
            </div>
          </section>

          {isMaster ? (
            <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="text-sm font-semibold text-white">Convite</div>
              <p className="mt-2 text-xs text-zinc-400">Compartilhe este código com os jogadores.</p>
              <button
                type="button"
                className="mt-3 flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-left transition hover:bg-black/40"
                onClick={onCopyInviteCode}
              >
                <span className="font-mono text-sm text-indigo-200">{campaign?.inviteCode ?? '-'}</span>
                <Copy className="h-4 w-4 text-zinc-400" />
              </button>
              <div className="mt-3 text-xs text-zinc-500">
                Modo: <span className="text-zinc-300">{campaign?.joinPolicy === 'PRIVATE' ? 'Privada' : 'Pública'}</span>
              </div>
            </section>
          ) : null}

          <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-white">Jogadores</div>
              <Users className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="mt-3 rounded-md border border-dashed border-white/10 px-3 py-5 text-center text-sm text-zinc-500">
              Nenhum token ativo na mesa.
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <div className="text-sm font-semibold text-white">Sessão</div>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Rodada</span>
                <span className="text-zinc-200">-</span>
              </div>
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Turno</span>
                <span className="text-zinc-200">Livre</span>
              </div>
              <div className="flex justify-between gap-3 text-zinc-400">
                <span>Grid</span>
                <span className="text-zinc-200">5 ft</span>
              </div>
            </div>
          </section>

          {campaignId ? (
            <CampaignChat
              campaignId={campaignId}
              characterId={campaign?.myCharacterId}
              enabled={Boolean(campaign?.isOnline && campaign?.myStatus === 'ACTIVE')}
            />
          ) : null}
        </div>
      </aside>
    </div>
  )
}
