import { useState } from 'react'
import { ChevronLeft, ChevronRight, ImagePlus, Plus, X } from 'lucide-react'
import { Button } from '../../../components/Button'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
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
  const [box, setBox] = useState<ResizableBox>(() => ({
    x: Math.max(16, (window.innerWidth - 980) / 2),
    y: Math.max(16, (window.innerHeight - 720) / 2),
    width: Math.min(980, window.innerWidth - 32),
    height: Math.min(720, window.innerHeight - 48),
  }))

  return (
    <div className="pointer-events-auto fixed inset-0 z-50 bg-black/55 backdrop-blur-sm">
      <div
        className="relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#101116]/95 text-white shadow-2xl"
        style={{ position: 'fixed', left: box.x, top: box.y, width: box.width, height: box.height }}
      >
        <ResizableEdges box={box} setBox={setBox} limits={{ minWidth: 520, minHeight: 360, viewportMargin: 16 }} />
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
                            <img src={scene.imageUrl} alt="" className="h-full w-full object-cover" draggable={false} />
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
  sceneDockCollapsed = false,
  onSelectScene,
  onToggleSceneDock,
  onPrepareScene,
}: {
  scenes: PreparedScene[]
  activeSceneId: string | null
  sceneDockCollapsed?: boolean
  onSelectScene: (sceneId: string) => void
  onToggleSceneDock?: () => void
  onPrepareScene?: () => void
}) {
  const sceneThumbnails = scenes.filter(isSelectablePreparedScene)

  if (sceneDockCollapsed) {
    return (
      <button type="button" title="Expandir cenas" className="grid h-full min-h-24 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-purple-300" onClick={onToggleSceneDock}>
        <ChevronLeft className="h-5 w-5" />
      </button>
    )
  }

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <ImagePlus className="h-4 w-4 text-purple-300" />
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-white">Cenas</div>
          <div className="truncate text-[11px] uppercase text-zinc-500">{sceneThumbnails.length} preparada{sceneThumbnails.length === 1 ? '' : 's'}</div>
        </div>
        {onToggleSceneDock ? <button type="button" title="Recolher cenas" className="ml-auto text-zinc-400 hover:text-white" onClick={onToggleSceneDock}><ChevronRight className="h-4 w-4" /></button> : null}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-2">
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
                    'group grid w-full grid-cols-[88px_minmax(0,1fr)] overflow-hidden rounded-md border bg-white/[0.03] text-left transition',
                    selected ? 'border-indigo-300 bg-indigo-500/20 ring-1 ring-indigo-400/40' : 'border-white/10 hover:border-indigo-300/50 hover:bg-white/[0.07]',
                  ].join(' ')}
                  onClick={() => onSelectScene(scene.id)}
                >
                  <span className="relative block h-16 overflow-hidden bg-black/30">
                    {scene.imageUrl ? <img src={scene.imageUrl} alt="" className="h-full w-full object-cover" draggable={false} /> : null}
                  </span>
                  <span className="min-w-0 self-center px-3">
                    <span className="block truncate text-sm font-semibold text-white">{scene.name}</span>
                    <span className="block truncate text-[11px] text-zinc-500">{scene.fileName ?? 'Sem arquivo'}</span>
                  </span>
                </button>
              )
            })}
          </div>
        ) : (
          <div className="rounded-md border border-dashed border-white/10 px-3 py-6 text-center text-xs text-zinc-500">
            Nenhuma cena preparada.
          </div>
        )}
      </div>

      {onPrepareScene ? <div className="border-t border-white/10 p-2">
        <Button type="button" variant="ghost" className="h-9 w-full gap-2 px-3" onClick={onPrepareScene}>
          <Plus className="h-4 w-4" />
          Preparar Cena
        </Button>
      </div> : null}
    </section>
  )
}

export function SceneDock({ scenes, activeSceneId, rightInset, onSelectScene, onPrepareScene }: {
  scenes: PreparedScene[]
  activeSceneId: string | null
  rightInset: number
  onSelectScene: (sceneId: string) => void
  onPrepareScene: () => void
}) {
  const sceneThumbnails = scenes.filter(isSelectablePreparedScene)

  return (
    <div className="pointer-events-auto absolute bottom-5 left-1/2 z-40 flex max-w-[min(760px,calc(100vw-220px))] -translate-x-1/2 gap-2 overflow-x-auto rounded-lg border border-white/10 bg-black/60 p-2 shadow-2xl backdrop-blur" style={{ marginRight: rightInset }}>
      {sceneThumbnails.map((scene) => (
        <button key={scene.id} type="button" title={scene.name} className={['h-14 w-20 shrink-0 overflow-hidden rounded-md border', scene.id === activeSceneId ? 'border-indigo-300 ring-1 ring-indigo-400' : 'border-white/10'].join(' ')} onClick={() => onSelectScene(scene.id)}>
          {scene.imageUrl ? <img src={scene.imageUrl} alt="" className="h-full w-full object-cover" draggable={false} /> : <span className="grid h-full place-items-center text-[10px] text-zinc-400">{scene.name}</span>}
        </button>
      ))}
      <button type="button" title="Preparar cena" className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-dashed border-white/20 text-zinc-300 hover:border-indigo-300 hover:text-white" onClick={onPrepareScene}><Plus className="h-5 w-5" /></button>
    </div>
  )
}
