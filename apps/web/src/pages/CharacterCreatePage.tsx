import { useMemo, useState } from 'react'
import { ArrowLeft, Check, Image, Link, Plus, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { api, ApiError } from '../lib/api'

const BIO_MAX_LENGTH = 2000

const avatarPresets = [
  '/avatars/hooded-ranger.png',
  '/avatars/arcane-scholar.png',
  '/avatars/steel-guardian.png',
  '/avatars/wild-mystic.png',
]

type AvatarMode = 'preset' | 'url'

export function CharacterCreatePage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [avatarMode, setAvatarMode] = useState<AvatarMode>('preset')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [selectedPreset, setSelectedPreset] = useState(avatarPresets[0])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const selectedAvatarUrl = avatarMode === 'preset' ? selectedPreset : avatarUrl.trim()
  const canCreate = useMemo(() => name.trim().length > 0 && bio.length <= BIO_MAX_LENGTH, [bio.length, name])

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!canCreate) return

    setLoading(true)
    setError(null)

    try {
      await api('/api/characters', {
        method: 'POST',
        body: JSON.stringify({
          name: name.trim(),
          avatarUrl: selectedAvatarUrl || undefined,
          bio: bio.trim() || undefined,
        }),
      })

      navigate('/campaigns', { replace: true })
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message)
        return
      }

      setError('Nao foi possivel criar o personagem agora.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <button
        type="button"
        className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
        onClick={() => navigate('/campaigns')}
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </button>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-300/20 bg-indigo-400/10 text-indigo-100">
              <UserRound className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">Criar personagem</h1>
              <p className="text-sm text-zinc-300">Comece com identidade basica. A ficha pode vir depois.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-6 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-zinc-200">Nome</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nome publico do personagem"
                maxLength={80}
                className="rounded bg-gray-900 p-3 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <div className="grid gap-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-zinc-200">Avatar opcional</span>
                <div className="inline-flex rounded-lg border border-white/10 bg-black/20 p-1">
                  <button
                    type="button"
                    onClick={() => setAvatarMode('preset')}
                    className={[
                      'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs transition',
                      avatarMode === 'preset' ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white',
                    ].join(' ')}
                  >
                    <Image className="h-3.5 w-3.5" />
                    Presets
                  </button>
                  <button
                    type="button"
                    onClick={() => setAvatarMode('url')}
                    className={[
                      'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs transition',
                      avatarMode === 'url' ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white',
                    ].join(' ')}
                  >
                    <Link className="h-3.5 w-3.5" />
                    URL
                  </button>
                </div>
              </div>

              {avatarMode === 'preset' ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {avatarPresets.map((preset, index) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSelectedPreset(preset)}
                      className={[
                        'relative aspect-square rounded-lg border bg-gray-900 transition hover:border-indigo-300/50',
                        selectedPreset === preset ? 'border-indigo-300/70' : 'border-white/10',
                      ].join(' ')}
                      title={`Avatar ${index + 1}`}
                    >
                      <img src={preset} alt="" className="h-full w-full rounded-lg object-cover" />
                      {selectedPreset === preset ? (
                        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      ) : null}
                    </button>
                  ))}
                </div>
              ) : (
                <input
                  value={avatarUrl}
                  onChange={(event) => setAvatarUrl(event.target.value)}
                  placeholder="https://exemplo.com/avatar.png"
                  className="rounded bg-gray-900 p-3 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              )}
            </div>

            <label className="grid gap-2">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-zinc-200">Bio opcional</span>
                <span className={bio.length > BIO_MAX_LENGTH ? 'text-xs text-red-300' : 'text-xs text-zinc-400'}>
                  {bio.length}/{BIO_MAX_LENGTH}
                </span>
              </div>
              <textarea
                value={bio}
                onChange={(event) => setBio(event.target.value)}
                placeholder="Uma historia curta, uma motivacao, ou uma pista sobre quem esse personagem e."
                className="min-h-36 rounded bg-gray-900 p-3 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            {error ? (
              <div className="rounded-lg border border-red-300/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {error}
              </div>
            ) : null}

            <Button type="submit" disabled={loading || !canCreate} className="w-full gap-2">
              <Plus className="h-4 w-4" />
              {loading ? 'Criando...' : 'Criar personagem'}
            </Button>
          </form>
        </section>

        <aside className="rounded-lg border border-white/10 bg-white/5 p-5">
          <div className="aspect-square rounded-lg border border-white/10 bg-black/20 p-4">
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              {selectedAvatarUrl ? (
                <img
                  src={selectedAvatarUrl}
                  alt=""
                  className="h-24 w-24 rounded-full border border-indigo-300/20 bg-black/30 object-cover"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-indigo-300/20 bg-indigo-400/10 text-indigo-100">
                  <UserRound className="h-11 w-11" />
                </div>
              )}
              <div>
                <div className="text-lg font-semibold text-white">{name.trim() || 'Novo personagem'}</div>
                <div className="mt-1 text-xs text-zinc-400">
                  {selectedAvatarUrl ? 'Avatar selecionado' : 'Sem avatar'}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-zinc-300">
            {bio.trim() || 'A bio fica privada para voce e mestres das campanhas onde este personagem entrar.'}
          </div>
        </aside>
      </div>
    </div>
  )
}
