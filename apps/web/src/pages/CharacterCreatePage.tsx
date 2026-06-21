import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Check, FileText, Image, Link, Plus, Save, UserRound, X } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { api, ApiError } from '../lib/api'

const BIO_MAX_LENGTH = 2000

const avatarPresets = [
  '/avatars/hooded-ranger.svg',
  '/avatars/arcane-scholar.svg',
  '/avatars/steel-guardian.svg',
  '/avatars/wild-mystic.svg',
]

type AvatarMode = 'preset' | 'url'
type GameSystem = 'PATHFINDER_2E'

const systemLabels: Record<GameSystem, string> = {
  PATHFINDER_2E: 'Pathfinder 2e',
}

type CharacterCampaign = {
  id: string
}

type Character = {
  id: string
  name: string
  avatarUrl?: string | null
  bio?: string | null
  system?: GameSystem | null
  campaigns: CharacterCampaign[]
  available: boolean
}

type FormSnapshot = {
  name: string
  bio: string
  avatarUrl: string
  system: GameSystem
}

export function CharacterCreatePage() {
  const navigate = useNavigate()
  const { characterId } = useParams()
  const isEditing = Boolean(characterId)
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [system, setSystem] = useState<GameSystem>('PATHFINDER_2E')
  const [avatarMode, setAvatarMode] = useState<AvatarMode>('preset')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [selectedPreset, setSelectedPreset] = useState(avatarPresets[0])
  const [original, setOriginal] = useState<FormSnapshot | null>(null)
  const [canEditName, setCanEditName] = useState(true)
  const [loadingCharacter, setLoadingCharacter] = useState(isEditing)
  const [avatarModalOpen, setAvatarModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const selectedAvatarUrl = avatarMode === 'preset' ? selectedPreset : avatarUrl.trim()
  const currentSnapshot = useMemo(
    () => ({
      name: name.trim(),
      bio: bio.trim(),
      avatarUrl: selectedAvatarUrl.trim(),
      system,
    }),
    [bio, name, selectedAvatarUrl, system],
  )
  const isDirty = useMemo(() => {
    if (!isEditing) return true
    if (!original) return false

    return (
      currentSnapshot.name !== original.name ||
      currentSnapshot.bio !== original.bio ||
      currentSnapshot.avatarUrl !== original.avatarUrl ||
      currentSnapshot.system !== original.system
    )
  }, [currentSnapshot, isEditing, original])
  const canSubmit = useMemo(() => {
    if (!name.trim()) return false
    if (bio.length > BIO_MAX_LENGTH) return false
    if (loadingCharacter) return false
    if (isEditing) return isDirty
    return true
  }, [bio.length, isDirty, isEditing, loadingCharacter, name])

  useEffect(() => {
    if (!characterId) return

    let cancelled = false

    async function loadCharacter() {
      setLoadingCharacter(true)
      setError(null)

      try {
        const character = await api<Character>(`/api/characters/${characterId}`)
        if (cancelled) return

        const loadedAvatarUrl = character.avatarUrl ?? ''
        setName(character.name)
        setBio(character.bio ?? '')
        setSystem(character.system ?? 'PATHFINDER_2E')
        setCanEditName(character.available)
        setOriginal({
          name: character.name.trim(),
          bio: (character.bio ?? '').trim(),
          avatarUrl: loadedAvatarUrl.trim(),
          system: character.system ?? 'PATHFINDER_2E',
        })

        if (avatarPresets.includes(loadedAvatarUrl)) {
          setAvatarMode('preset')
          setSelectedPreset(loadedAvatarUrl)
          setAvatarUrl('')
          return
        }

        setAvatarMode('url')
        setAvatarUrl(loadedAvatarUrl)
      } catch (err) {
        if (cancelled) return

        if (err instanceof ApiError) {
          setError(err.message)
          return
        }

        setError('Não foi possível carregar o personagem.')
      } finally {
        if (!cancelled) setLoadingCharacter(false)
      }
    }

    loadCharacter()

    return () => {
      cancelled = true
    }
  }, [characterId])

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!canSubmit) return

    setLoading(true)
    setError(null)

    try {
      const body = JSON.stringify({
        name: canEditName ? currentSnapshot.name : undefined,
        system: currentSnapshot.system,
        avatarUrl: currentSnapshot.avatarUrl || null,
        bio: currentSnapshot.bio || null,
      })

      if (isEditing && characterId) {
        await api(`/api/characters/${characterId}`, {
          method: 'PATCH',
          body,
        })
      } else {
        await api('/api/characters', {
          method: 'POST',
          body,
        })
      }

      navigate('/characters', { replace: true })
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

  function choosePreset(preset: string) {
    setAvatarMode('preset')
    setSelectedPreset(preset)
    setAvatarModalOpen(false)
  }

  function useUrlAvatar() {
    setAvatarMode('url')
    setAvatarModalOpen(false)
  }

  function clearAvatar() {
    setAvatarMode('url')
    setAvatarUrl('')
    setAvatarModalOpen(false)
  }

  return (
    <div className="mx-auto max-w-5xl">
      <button
        type="button"
        className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
        onClick={() => navigate('/characters')}
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
              <h1 className="text-2xl font-semibold text-white">
                {isEditing ? 'Editar personagem' : 'Criar personagem'}
              </h1>
              <p className="text-sm text-zinc-300">
                {isEditing ? 'Atualize identidade, avatar e bio.' : 'Comece com identidade basica. A ficha pode vir depois.'}
              </p>
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
                disabled={!canEditName || loadingCharacter}
                className="rounded bg-gray-900 p-3 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {!canEditName ? (
                <span className="text-xs text-zinc-400">Personagens vinculados mantem o nome da campanha.</span>
              ) : null}
            </label>

            <section className="grid gap-3 rounded-lg border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/20 bg-emerald-400/10 text-emerald-100">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">Ficha</h2>
                  <p className="text-xs text-zinc-400">O módulo define o formato da ficha criada para este personagem.</p>
                </div>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-200">Módulo</span>
                <select
                  value={system}
                  onChange={(event) => setSystem(event.target.value as GameSystem)}
                  disabled={isEditing}
                  className="rounded border border-white/10 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="PATHFINDER_2E">{systemLabels.PATHFINDER_2E}</option>
                </select>
                {isEditing ? (
                  <span className="text-xs text-zinc-400">O módulo da ficha não muda depois que o personagem é criado.</span>
                ) : null}
              </label>
            </section>

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

            <Button type="submit" disabled={loading || !canSubmit} className="w-full gap-2">
              {isEditing ? <Save className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              {loading ? (isEditing ? 'Salvando...' : 'Criando...') : isEditing ? 'Salvar mudanças' : 'Criar personagem'}
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
                <button
                  type="button"
                  onClick={() => setAvatarModalOpen(true)}
                  className="mt-2 text-xs font-semibold text-indigo-200 hover:text-indigo-100"
                >
                  Escolher/mudar avatar
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-zinc-300">
            {bio.trim() || 'A bio fica privada para voce e mestres das campanhas onde este personagem entrar.'}
          </div>
        </aside>
      </div>

      {avatarModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-lg rounded-lg border border-white/10 bg-[#0f1014] p-5 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">Avatar</h2>
                <p className="text-sm text-zinc-400">Escolha um preset ou use uma URL externa.</p>
              </div>
              <button
                type="button"
                onClick={() => setAvatarModalOpen(false)}
                className="rounded-lg border border-white/10 p-2 text-zinc-300 hover:bg-white/10 hover:text-white"
                title="Fechar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {avatarPresets.map((preset, index) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => choosePreset(preset)}
                  className={[
                    'relative aspect-square rounded-lg border bg-gray-900 transition hover:border-indigo-300/50',
                    selectedAvatarUrl === preset ? 'border-indigo-300/70' : 'border-white/10',
                  ].join(' ')}
                  title={`Avatar ${index + 1}`}
                >
                  <img src={preset} alt="" className="h-full w-full rounded-lg object-cover" />
                  {selectedAvatarUrl === preset ? (
                    <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  ) : null}
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              <label className="grid gap-2">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
                  <Link className="h-4 w-4" />
                  URL
                </span>
                <input
                  value={avatarUrl}
                  onChange={(event) => {
                    setAvatarMode('url')
                    setAvatarUrl(event.target.value)
                  }}
                  placeholder="https://exemplo.com/avatar.png"
                  className="rounded bg-gray-900 p-3 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </label>

              <div className="flex flex-wrap justify-end gap-2">
                <Button type="button" variant="ghost" onClick={clearAvatar}>
                  Sem avatar
                </Button>
                <Button type="button" variant="ghost" onClick={useUrlAvatar}>
                  <Image className="h-4 w-4" />
                  Usar URL
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
