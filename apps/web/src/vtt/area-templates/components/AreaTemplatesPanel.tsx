import { useEffect, useMemo, useRef, useState } from 'react'
import { Copy, Grip, PanelRightOpen, Pencil, Pin, Plus, Search, Sparkles, Trash2, X } from 'lucide-react'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
import { detachedAreaPanelMaxHeight, detachedAreaPanelMaxWidth } from '../config/limits'
import {
  activateRuntimeSpatialTemplate,
  clearRuntimeSpatialTemplate,
} from '../domain/runtimeSpatialActivation'
import { type AreaShape, type AreaTemplateInput, type CampaignAreaTemplate } from '../domain/types'
import {
  runtimeAreaTemplateRequestedEvent,
  type RuntimeAreaTemplateRequested,
} from '../infrastructure/runtimeAreaTemplateEvents'
import { AreaTemplateEditor } from './AreaTemplateEditor'

const shapeLabels: Record<AreaShape, string> = {
  CIRCLE: 'Circulo', CONE: 'Cone', LINE: 'Linha', ORTHOGONAL: 'Ortogonal', RING: 'Anel', POLYGON: 'Poligono', TARGET: 'Target',
}

function initialFloatingPanelBox(): ResizableBox {
  const viewportWidth = typeof window === 'undefined' ? 1280 : window.innerWidth
  const viewportHeight = typeof window === 'undefined' ? 800 : window.innerHeight
  return {
    x: Math.max(16, Math.min(96, viewportWidth - 476)),
    y: 80,
    width: Math.min(460, detachedAreaPanelMaxWidth, viewportWidth - 32),
    height: Math.min(560, detachedAreaPanelMaxHeight, viewportHeight - 112),
  }
}

export function AreaTemplatesPanel({ templates, loading, error, activeTemplateId, gridScale, detached, canManageTemplates, onClose, onUse, onSave, onDuplicate, onDelete, persistentEffects, onDeleteEffect, onDetachedChange }: {
  templates: CampaignAreaTemplate[]
  loading: boolean
  error: string | null
  activeTemplateId?: string
  gridScale: { metersPerCell: number }
  detached: boolean
  canManageTemplates: boolean
  onClose: () => void
  onUse: (template: CampaignAreaTemplate) => void
  onSave: (input: AreaTemplateInput, id?: string) => Promise<CampaignAreaTemplate | null>
  onDuplicate: (id: string) => void
  onDelete: (id: string) => void
  persistentEffects: Array<{ id: string; name: string }>
  onDeleteEffect: (id: string) => void
  onDetachedChange?: (detached: boolean) => void
}) {
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState<CampaignAreaTemplate | 'new' | null>(null)
  const [dragging, setDragging] = useState(false)
  const [box, setBox] = useState<ResizableBox>(initialFloatingPanelBox)
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, panelX: 0, panelY: 0 })
  const filtered = useMemo(() => templates.filter((template) => template.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())), [search, templates])

  useEffect(() => {
    function onRuntimeTemplateRequested(event: Event) {
      const detail = (event as CustomEvent<RuntimeAreaTemplateRequested>).detail
      activateRuntimeSpatialTemplate(detail.template, gridScale.metersPerCell)
      onUse(detail.template)
    }

    window.addEventListener(runtimeAreaTemplateRequestedEvent, onRuntimeTemplateRequested)
    return () => {
      window.removeEventListener(runtimeAreaTemplateRequestedEvent, onRuntimeTemplateRequested)
      clearRuntimeSpatialTemplate()
    }
  }, [gridScale.metersPerCell, onUse])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return
      setBox((current) => ({
        ...current,
        x: Math.max(16, Math.min(window.innerWidth - current.width - 16, dragStartRef.current.panelX + event.clientX - dragStartRef.current.pointerX)),
        y: Math.max(16, Math.min(window.innerHeight - 48, dragStartRef.current.panelY + event.clientY - dragStartRef.current.pointerY)),
      }))
    }
    function onPointerUp() { setDragging(false) }
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging])

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (!detached || event.button !== 0) return
    dragStartRef.current = { pointerX: event.clientX, pointerY: event.clientY, panelX: box.x, panelY: box.y }
    setDragging(true)
  }

  return (
    <section
      className={['pointer-events-auto flex min-w-0 flex-col overflow-hidden rounded-xl border border-orange-300/20 bg-black/90 text-white shadow-2xl backdrop-blur-xl', detached ? 'fixed z-[80]' : ['absolute left-24 top-20 z-30 max-h-[calc(100vh-100px)]', editing ? 'w-[min(430px,calc(100vw-128px))]' : 'w-[min(350px,calc(100vw-128px))]'].join(' ')].join(' ')}
      style={detached ? { left: box.x, top: box.y, width: box.width, height: 'fit-content', maxWidth: detachedAreaPanelMaxWidth, maxHeight: Math.min(box.height, detachedAreaPanelMaxHeight) } : undefined}
    >
      {detached ? <ResizableEdges box={box} setBox={setBox} edges={['e', 'w', 's', 'se', 'sw']} limits={{ minWidth: 360, minHeight: 300, maxWidth: detachedAreaPanelMaxWidth, maxHeight: detachedAreaPanelMaxHeight, viewportMargin: 16 }} /> : null}
      <div className={['flex min-w-0 items-center justify-between gap-2 border-b border-white/10 bg-black/25 px-3 py-2', detached ? 'cursor-grab active:cursor-grabbing' : ''].join(' ')} onPointerDown={startDrag}>
        <span className="flex min-w-0 items-center gap-2 truncate text-[11px] font-bold uppercase tracking-wide text-orange-200">{detached ? <Grip className="h-3.5 w-3.5 shrink-0 text-zinc-500" /> : <Sparkles className="h-3.5 w-3.5 shrink-0" />}<span className="truncate">Templates de Area</span></span>
        <div className="flex shrink-0 items-center gap-0.5">
          {detached ? <button type="button" title="Pregar painel" onPointerDown={(event) => event.stopPropagation()} onClick={() => onDetachedChange?.(false)} className="rounded p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"><Pin className="h-3.5 w-3.5" /></button> : <button type="button" title="Destacar painel" onClick={() => onDetachedChange?.(true)} className="rounded p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"><PanelRightOpen className="h-3.5 w-3.5" /></button>}
          <button type="button" title="Fechar" onPointerDown={(event) => event.stopPropagation()} onClick={onClose} className="rounded p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"><X className="h-3.5 w-3.5" /></button>
        </div>
      </div>
      <div className={['min-h-0 min-w-0 overflow-y-auto overflow-x-hidden', editing ? 'p-3' : 'p-2', detached ? 'flex-1' : ''].join(' ')}>
      {editing ? <AreaTemplateEditor initialTemplate={editing === 'new' ? undefined : editing} gridScale={gridScale} onCancel={() => setEditing(null)} onSave={async (input) => Boolean(await onSave(input, editing === 'new' ? undefined : editing.id))} /> : <>
        <div className="mb-2 flex gap-1.5"><label className="relative flex-1"><Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-zinc-500" /><input value={search} onChange={(event) => setSearch(event.currentTarget.value)} placeholder="Pesquisar" className="h-8 w-full rounded-md border border-white/10 bg-black/40 pl-8 pr-2 text-xs" /></label>{canManageTemplates ? <button type="button" title="Criar template" onClick={() => setEditing('new')} className="grid h-8 w-8 place-items-center rounded-md bg-orange-600 text-white"><Plus className="h-3.5 w-3.5" /></button> : null}</div>
        {error ? <div className="mb-2 rounded border border-red-400/25 bg-red-500/10 px-3 py-2 text-xs text-red-200">{error}</div> : null}
        <div className="grid max-h-[260px] min-w-0 gap-1.5 overflow-y-auto overflow-x-hidden pr-1">
          {loading ? <div className="py-6 text-center text-sm text-zinc-500">Carregando...</div> : null}
          {!loading && !filtered.length ? <div className="rounded border border-dashed border-white/10 py-6 text-center text-sm text-zinc-500">Nenhum template nesta campanha.</div> : null}
          {filtered.map((template) => <div key={template.id} className={['grid min-h-12 w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-1.5 overflow-hidden rounded-lg border px-2 py-1.5', activeTemplateId === template.id ? 'border-orange-300/50 bg-orange-500/15' : 'border-white/10 bg-white/[0.04]'].join(' ')}>
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: template.style.fillColor }} />
            <div className="min-w-0 overflow-hidden" title={template.name}><div className="truncate text-xs font-semibold">{template.name}</div><div className="truncate text-[9px] uppercase text-zinc-500">{shapeLabels[template.shape]} · {template.persistenceMode === 'PERSISTENT' && canManageTemplates ? 'Persistente' : 'Previa'}</div></div>
            <div className="flex min-w-fit shrink-0 items-center gap-0.5">
              {canManageTemplates ? <><button title="Editar" type="button" onClick={() => setEditing(template)} className="rounded p-1 text-zinc-400 hover:bg-white/10"><Pencil className="h-3 w-3" /></button>
              <button title="Duplicar" type="button" onClick={() => onDuplicate(template.id)} className="rounded p-1 text-zinc-400 hover:bg-white/10"><Copy className="h-3 w-3" /></button>
              <button title="Excluir" type="button" onClick={() => onDelete(template.id)} className="rounded p-1 text-red-300 hover:bg-red-500/10"><Trash2 className="h-3 w-3" /></button></> : null}
              <button type="button" onClick={() => onUse(template)} className="ml-0.5 h-7 rounded bg-orange-600 px-2 text-[10px] font-semibold">Usar</button>
            </div>
          </div>)}
        </div>
        {persistentEffects.length ? <div className="mt-3 min-w-0 border-t border-white/10 pt-3"><div className="mb-2 text-[11px] font-semibold uppercase text-zinc-500">Areas nesta cena</div><div className="grid max-h-28 min-w-0 gap-1 overflow-y-auto overflow-x-hidden">{persistentEffects.map((effect) => <div key={effect.id} className="flex min-w-0 items-center justify-between rounded bg-white/[0.04] px-2 py-1.5 text-xs"><span className="min-w-0 truncate">{effect.name}</span>{canManageTemplates ? <button type="button" title="Remover area" onClick={() => onDeleteEffect(effect.id)} className="shrink-0 text-red-300"><Trash2 className="h-3.5 w-3.5" /></button> : null}</div>)}</div></div> : null}
      </>}
      </div>
    </section>
  )
}
