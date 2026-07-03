import { ChevronLeft, ChevronRight, ImagePlus, Plus, X } from 'lucide-react'
import { Button } from '../../../components/Button'
import { sceneImageMimeTypes } from '../config/constants'
import { isDraftPreparedScene, isSelectablePreparedScene } from '../domain/sceneDomain'
import type { PreparedScene } from '../domain/types'

export function ScenePreparationModal({
  scenes,
  saving,
  deletingSceneId,
  error,
  successMessage,
  skippedFiles,
  onCreateScene,
  onUpload,
  onSave,
  onDelete,
  onClose,
}: {
  scenes: PreparedScene[]
  saving: boolean
  deletingSceneId: string | null
  error: string | null
  successMessage: string | null
  skippedFiles: string[]
  onCreateScene: () => void
  onUpload: (sceneId: string, file: File) => void
  onSave: () => void
  onDelete: (sceneId: string) => void
  onClose: () => void
}) {
  const canSave = scenes.some((scene) => scene.file && !scene.assetId)

  return (
    <div className="pointer-events-auto fixed inset-0 z-50 grid place-items-center bg-black/55 p-6 backdrop-blur-sm">
      <div className="flex max-h-[min(720px,calc(100vh-48px))] w-[min(980px,calc(100vw-32px))] flex-col rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <div className="flex min-w-0 items-center gap-2">
            <ImagePlus className="h-5 w-5 text-indigo-300" />
            <h2 className="truncate text-base font-semibold">Preparar cena</h2>
          </div>
          <button type="button" title="Fechar" className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white" onClick={onClose}>
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="min-h-0 overflow-auto p-5">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
            {scenes.map((scene) => (
              <div key={scene.id} className="grid gap-2">
                {isDraftPreparedScene(scene) ? (
                  <button type="button" disabled={saving} className="group grid aspect-[4/3] grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-lg border border-dashed border-white/15 bg-white/[0.03] text-left transition hover:border-indigo-300/50 hover:bg-white/[0.06] disabled:cursor-wait disabled:opacity-60" onClick={onCreateScene}>
                    <span className="border-b border-white/10 px-3 py-2 text-sm font-semibold text-zinc-100">Nova cena</span>
                    <span className="grid min-h-0 place-items-center">
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-black/35 text-zinc-200 transition group-hover:border-indigo-300/60 group-hover:text-white">
                        <Plus className="h-7 w-7" />
                      </span>
                    </span>
                  </button>
                ) : (
                  <>
                    <div className="grid aspect-[4/3] grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                      <span className="border-b border-white/10 px-3 py-2 text-sm font-semibold text-zinc-100">{scene.name}</span>
                      <span className="relative grid min-h-0 place-items-center overflow-hidden">
                        {scene.imageUrl ? (
                          <>
                            <img src={scene.imageUrl} alt="" className="h-full w-full object-cover" />
                            <span className="absolute inset-x-0 bottom-0 truncate bg-black/60 px-3 py-2 text-xs font-semibold text-zinc-200">{scene.fileName}</span>
                          </>
                        ) : (
                          <span className="px-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">Sem imagem</span>
                        )}
                        <span className="absolute right-2 top-2 rounded-full border border-emerald-300/30 bg-emerald-500/20 px-2 py-1 text-[10px] font-bold uppercase text-emerald-100">Salva</span>
                      </span>
                      {scene.error ? <span className="px-3 pb-2 text-xs font-semibold text-red-200">{scene.error}</span> : null}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="grid h-8 cursor-pointer place-items-center rounded-md border border-white/10 bg-indigo-600 px-3 text-center text-xs font-semibold text-white transition hover:bg-indigo-500">
                        Imagem
                        <input
                          type="file"
                          accept={sceneImageMimeTypes.join(',')}
                          disabled={saving || deletingSceneId === scene.id}
                          className="sr-only"
                          onChange={(event) => {
                            const file = event.target.files?.[0]
                            event.currentTarget.value = ''
                            if (!file) return
                            onUpload(scene.id, file)
                          }}
                        />
                      </label>
                      <Button type="button" variant="danger" disabled={saving || deletingSceneId === scene.id} className="h-8 px-3 text-xs" onClick={() => onDelete(scene.id)}>
                        {deletingSceneId === scene.id ? 'Deletando...' : 'Deletar'}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-3 border-t border-white/10 px-5 py-4">
          <div className="min-w-0">
            {successMessage ? <div className="text-sm font-semibold text-emerald-200">{successMessage}</div> : null}
            {skippedFiles.length ? <div className="mt-1 text-xs font-semibold text-amber-200">Nao enviados: {skippedFiles.join(', ')}</div> : null}
            {error ? <div className="mt-1 text-sm font-semibold text-red-200">{error}</div> : null}
          </div>
          <Button type="button" disabled={!canSave || saving} className="h-9 px-4" onClick={onSave}>
            {saving ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export function SceneSidebarScenes({
  scenes,
  activeSceneId,
  sceneDockCollapsed,
  onSelectScene,
  onToggleSceneDock,
}: {
  scenes: PreparedScene[]
  activeSceneId: string | null
  sceneDockCollapsed: boolean
  onSelectScene: (sceneId: string) => void
  onToggleSceneDock: () => void
}) {
  const sceneThumbnails = scenes.filter(isSelectablePreparedScene)

  return (
    <div className="flex max-h-40 min-h-[112px] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        title={sceneDockCollapsed ? 'Expandir cenas' : 'Recolher cenas'}
        aria-label={sceneDockCollapsed ? 'Expandir cenas' : 'Recolher cenas'}
        className="grid w-10 shrink-0 place-items-center border-r border-white/10 text-purple-400 transition hover:bg-white/10 hover:text-purple-300"
        onClick={onToggleSceneDock}
      >
        {sceneDockCollapsed ? (
          <ChevronLeft className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </button>
      <div className="min-w-0 flex-1 overflow-y-auto p-2">
        {sceneThumbnails.length ? (
          <div className="grid gap-2">
            {sceneThumbnails.map((scene) => {
              const selected = scene.id === activeSceneId

              return (
                <button
                  key={scene.id}
                  type="button"
                  title={scene.fileName ?? scene.name}
                  className={[
                    'w-full truncate rounded-md border px-3 py-2 text-left text-sm font-semibold transition',
                    selected ? 'border-indigo-300 bg-indigo-500/20 text-white' : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-indigo-300/50 hover:bg-white/[0.07] hover:text-white',
                  ].join(' ')}
                  onClick={() => onSelectScene(scene.id)}
                >
                  {scene.name}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="text-xs text-zinc-500">Nenhuma cena preparada.</div>
        )}
      </div>
    </div>
  )
}

export function SceneDock({
  scenes,
  activeSceneId,
  rightInset,
  onSelectScene,
  onPrepareScene,
}: {
  scenes: PreparedScene[]
  activeSceneId: string | null
  rightInset: number
  onSelectScene: (sceneId: string) => void
  onPrepareScene: () => void
}) {
  const sceneThumbnails = scenes.filter(isSelectablePreparedScene)
  const activeScene = sceneThumbnails.find((scene) => scene.id === activeSceneId)

  return (
    <div
      className="pointer-events-auto absolute bottom-6 left-6 z-30 overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur"
      style={{ right: rightInset }}
    >
      <div className="flex min-h-[104px] items-stretch">
        <div className="flex min-w-0 flex-1 flex-wrap items-end justify-between gap-3 px-3 py-3">
          <div className="min-w-0">
            <div className="mb-2">
              <div className="truncate text-sm font-semibold text-white">{activeScene ? activeScene.name : 'Cena sem mapa carregado'}</div>
            </div>
            {sceneThumbnails.length ? (
              <div className="flex max-w-[calc(100vw-360px)] flex-wrap gap-2 max-xl:max-w-full">
                {sceneThumbnails.map((scene) => {
                  const selected = scene.id === activeSceneId

                  return (
                    <button key={scene.id} type="button" title={scene.fileName ?? scene.name} className={['group relative h-16 w-28 overflow-hidden rounded-md border bg-white/[0.04] text-left shadow-lg transition', selected ? 'border-indigo-300 ring-2 ring-indigo-400/50' : 'border-white/10 hover:border-indigo-300/60 hover:bg-white/[0.08]'].join(' ')} onClick={() => onSelectScene(scene.id)}>
                      {scene.imageUrl ? <img src={scene.imageUrl} alt="" className="h-full w-full object-cover" /> : null}
                      <span className="absolute inset-x-0 bottom-0 truncate bg-black/70 px-2 py-1 text-xs font-semibold text-white">{scene.name}</span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className="text-xs text-zinc-400">Grid pronto para mapas, tokens e medidas.</div>
            )}
          </div>
          <Button variant="ghost" className="h-9 gap-2 px-3" onClick={onPrepareScene}>
            <Plus className="h-4 w-4" />
            Preparar cena
          </Button>
        </div>
      </div>
    </div>
  )
}
