import { useEffect, useMemo, useRef, useState } from 'react'
import { Copy, Grip, PanelRightOpen, Pencil, Pin, Plus, Search, Sparkles, Trash2, X } from 'lucide-react'
import { ResizableEdges, type ResizableBox } from '../../../components/ResizableEdges'
import { areaTemplateNameMaxLength, detachedAreaPanelMaxHeight, detachedAreaPanelMaxWidth } from '../config/limits'
import { areaTemplateForMeterEditor, metersPerFoot, metersToFeet } from '../domain/measurement'
import {
  activateRuntimeSpatialTemplate,
  clearRuntimeSpatialTemplate,
} from '../domain/runtimeSpatialActivation'
import { defaultAreaTemplateInput, type AreaShape, type AreaTemplateInput, type CampaignAreaTemplate } from '../domain/types'
import {
  runtimeAreaTemplateRequestedEvent,
  type RuntimeAreaTemplateRequested,
} from '../infrastructure/runtimeAreaTemplateEvents'

const shapeLabels: Record<AreaShape, string> = {
  CIRCLE: 'Circulo', CONE: 'Cone', LINE: 'Linha', ORTHOGONAL: 'Ortogonal', RING: 'Anel', POLYGON: 'Poligono', TARGET: 'Target',
}

function dimensionsForShape(shape: AreaShape, current: AreaTemplateInput['dimensions']) {
  if (shape === 'TARGET') return { targetCount: current.targetCount ?? 1 }
  if (shape === 'CIRCLE' || shape === 'ORTHOGONAL') return { radius: current.radius ?? 3 }
  if (shape === 'CONE') return { length: current.length ?? 6, angleDegrees: current.angleDegrees ?? 60, startWidth: current.startWidth ?? 0 }
  if (shape === 'LINE') return { length: current.length ?? 6, width: current.width ?? 1 }
  if (shape === 'RING') return { radius: current.radius ?? 4, innerRadius: current.innerRadius ?? 2 }
  return { polygonPoints: current.polygonPoints ?? [{ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 1.5, y: 3 }] }
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

function TemplateEditor({ template, gridScale, onCancel, onSave }: {
  template?: CampaignAreaTemplate
  gridScale: { metersPerCell: number }
  onCancel: () => void
  onSave: (input: AreaTemplateInput, id?: string) => Promise<CampaignAreaTemplate | null>
}) {
  const [form, setForm] = useState<AreaTemplateInput>(() => {
    const initial = areaTemplateForMeterEditor(template ?? defaultAreaTemplateInput, gridScale.metersPerCell)
    return initial.persistenceMode === 'PREVIEW_ONLY' ? { ...initial, persistenceMode: 'INSTANT' } : initial
  })
  const [saving, setSaving] = useState(false)
  const setDimension = (key: string, value: number) => setForm((current) => ({ ...current, dimensions: { ...current.dimensions, [key]: value } }))
  const directional = form.shape === 'CONE' || form.shape === 'LINE'
  const isTarget = form.shape === 'TARGET'
  const dimensionLabel = (label: string) => label
  const primaryDimensionMeters = form.shape === 'CIRCLE' || form.shape === 'ORTHOGONAL' || form.shape === 'RING'
    ? form.dimensions.radius ?? 0
    : form.dimensions.length ?? 0
  const topGridColumns = directional
    ? 'grid-cols-[minmax(72px,0.7fr)_minmax(92px,0.9fr)_minmax(72px,0.72fr)_minmax(82px,0.82fr)]'
    : 'grid-cols-[minmax(72px,0.72fr)_minmax(100px,1fr)_minmax(76px,0.76fr)]'

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    setSaving(true)
    const saved = await onSave(form, template?.id)
    setSaving(false)
    if (saved) onCancel()
  }

  return (
    <form className="grid min-w-0 gap-3 overflow-x-hidden [&>*]:min-w-0" onSubmit={submit}>
      <div className={`grid min-w-0 ${topGridColumns} gap-2 [&>*]:min-w-0`}>
        <label className="col-span-full text-xs text-zinc-400">Nome<input required maxLength={areaTemplateNameMaxLength} value={form.name} onChange={(event) => setForm({ ...form, name: event.currentTarget.value })} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white" /></label>
        <label className="text-xs text-zinc-400">Forma<select value={form.shape} onChange={(event) => { const shape = event.currentTarget.value as AreaShape; setForm({ ...form, shape, dimensions: dimensionsForShape(shape, form.dimensions), originMode: shape === 'TARGET' ? 'TARGET_TOKEN' : 'GRID_CELL', placementMode: shape === 'TARGET' || shape === 'CIRCLE' || shape === 'ORTHOGONAL' || shape === 'RING' ? 'POINT' : 'DIRECTIONAL', persistenceMode: shape === 'TARGET' ? 'INSTANT' : form.persistenceMode, movementMode: shape === 'TARGET' ? 'STATIC' : form.movementMode, propagationMode: shape === 'TARGET' ? 'IGNORE_WALLS' : form.propagationMode, tokenIntersectionRule: shape === 'TARGET' ? 'MANUAL' : shape === 'ORTHOGONAL' ? 'COVERED_CELLS' : form.tokenIntersectionRule === 'MANUAL' ? 'COVERED_CELLS' : form.tokenIntersectionRule }) }} className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm">{(['CIRCLE', 'CONE', 'LINE', 'ORTHOGONAL', 'TARGET'] as AreaShape[]).map((shape) => <option key={shape} value={shape}>{shapeLabels[shape]}</option>)}</select></label>
        {!isTarget ? <div className="text-xs text-zinc-400">Unidade<div className="mt-1 rounded-md border border-white/10 bg-zinc-950 px-2 py-1.5 text-sm text-zinc-200"><span className="block">Metros (m)</span><span className="block truncate text-[9px] text-zinc-500">{Number(primaryDimensionMeters.toFixed(2))}m = {Number(metersToFeet(primaryDimensionMeters).toFixed(2))}ft</span></div></div> : null}
        {isTarget ? <label className="col-span-2 text-xs text-zinc-400">Quantidade maxima de alvos<input type="number" required min="1" max="100" step="1" value={form.dimensions.targetCount ?? 1} onChange={(event) => setDimension('targetCount', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {(form.shape === 'CIRCLE' || form.shape === 'ORTHOGONAL' || form.shape === 'RING') ? <label className="text-xs text-zinc-400">{dimensionLabel(form.shape === 'ORTHOGONAL' ? 'Distancia' : 'Raio externo')}<input type="number" min="0.1" step="0.1" value={form.dimensions.radius ?? 1} onChange={(event) => setDimension('radius', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {form.shape === 'RING' ? <label className="text-xs text-zinc-400">{dimensionLabel('Raio interno')}<input type="number" min="0" step="0.1" value={form.dimensions.innerRadius ?? 0} onChange={(event) => setDimension('innerRadius', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {directional ? <label className="text-xs text-zinc-400">{dimensionLabel('Comprimento')}<input type="number" min="0.1" step="0.1" value={form.dimensions.length ?? 1} onChange={(event) => setDimension('length', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {form.shape === 'LINE' ? <label className="text-xs text-zinc-400">{dimensionLabel('Largura')}<input type="number" min="0.1" step="0.1" value={form.dimensions.width ?? 1} onChange={(event) => setDimension('width', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {form.shape === 'CONE' ? <label className="text-xs text-zinc-400">Abertura (graus)<input type="number" min="1" max="359" value={form.dimensions.angleDegrees ?? 60} onChange={(event) => setDimension('angleDegrees', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {!isTarget ? <p className="col-span-full rounded-md border border-sky-300/15 bg-sky-500/5 px-2.5 py-1.5 text-[10px] leading-4 text-sky-100/75">Cada celula representa {gridScale.metersPerCell}m / {Number((gridScale.metersPerCell / metersPerFoot).toFixed(2))}ft.</p> : <p className="col-span-full rounded-md border border-violet-300/15 bg-violet-500/5 px-2.5 py-1.5 text-[10px] leading-4 text-violet-100/75">Selecao manual de tokens no mapa.</p>}
      </div>

      {!isTarget ? <div className="grid min-w-0 grid-cols-3 gap-2 [&>*]:min-w-0">
        <label className="text-xs text-zinc-400">Persistencia<select value={form.persistenceMode} onChange={(event) => setForm({ ...form, persistenceMode: event.currentTarget.value as AreaTemplateInput['persistenceMode'] })} className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm"><option value="INSTANT">Instantanea</option><option value="PERSISTENT">Permanente</option></select></label>
        <label className="text-xs text-zinc-400">Paredes<select value={form.propagationMode} onChange={(event) => setForm({ ...form, propagationMode: event.currentTarget.value as AreaTemplateInput['propagationMode'] })} className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm"><option value="IGNORE_WALLS">Ignorar</option><option value="BLOCKED_BY_WALLS">Bloquear</option></select></label>
        <label className="text-xs text-zinc-400">Visibilidade<select value={form.visibility} onChange={(event) => setForm({ ...form, visibility: event.currentTarget.value as AreaTemplateInput['visibility'] })} className="mt-1 w-full min-w-0 rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm"><option value="MASTER_ONLY">Mestre</option><option value="ALL_PLAYERS">Todos</option></select></label>
        <label className="col-span-3 flex min-w-0 items-start gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-2 text-xs text-zinc-300"><input type="checkbox" checked={form.tokenIntersectionRule === 'COVERED_CELLS'} onChange={(event) => setForm({ ...form, tokenIntersectionRule: event.currentTarget.checked ? 'COVERED_CELLS' : 'ANY_OVERLAP' })} className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-orange-500" /><span className="min-w-0"><span className="block font-semibold text-zinc-200">Usar celulas do grid para atingir tokens</span><span className="mt-0.5 block text-[10px] leading-4 text-zinc-500">Marcado: o token e atingido ao ocupar uma celula afetada. Desmarcado: somente a forma geometrica exata importa.</span></span></label>
        {form.tokenIntersectionRule === 'COVERED_CELLS' ? <fieldset className="col-span-3 grid min-w-0 grid-cols-2 gap-1.5 rounded-md border border-orange-300/15 bg-orange-500/[0.04] p-2.5"><legend className="px-1 text-[10px] font-semibold uppercase text-orange-100/80">Quando uma celula conta como afetada?</legend>{([
          ['ANY_OVERLAP', 'Qualquer parte', 'Basta a forma cobrir uma pequena parte da celula.'],
          ['CENTER_INSIDE', 'Centro dentro', 'O centro da celula precisa estar dentro da forma.'],
          ['HALF_OR_MORE', 'Metade ou mais', 'Pelo menos 50% da celula precisa estar coberta.'],
          ['FULLY_INSIDE', 'Celula inteira', 'Toda a celula precisa estar dentro da forma.'],
        ] as const).map(([value, label, description]) => <label key={value} className="flex min-w-0 items-start gap-2 rounded border border-white/5 px-2 py-1.5 text-xs hover:bg-white/[0.04]"><input type="radio" name="area-cell-inclusion" value={value} checked={form.cellInclusionRule === value} onChange={() => setForm({ ...form, cellInclusionRule: value })} className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-orange-500" /><span className="min-w-0"><span className="block font-semibold text-zinc-200">{label}</span><span className="block text-[10px] leading-4 text-zinc-500">{description}</span></span></label>)}</fieldset> : null}
      </div> : <div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300">Target e instantaneo, ignora paredes e usa selecao manual.</div>}

      <div className="grid grid-cols-3 gap-2">
        <label className="text-xs text-zinc-400">Preenchimento<input type="color" value={form.style.fillColor} onChange={(event) => setForm({ ...form, style: { ...form.style, fillColor: event.currentTarget.value } })} className="mt-1 h-8 w-full rounded bg-transparent" /></label>
        <label className="text-xs text-zinc-400">Borda<input type="color" value={form.style.borderColor} onChange={(event) => setForm({ ...form, style: { ...form.style, borderColor: event.currentTarget.value } })} className="mt-1 h-8 w-full rounded bg-transparent" /></label>
        <label className="text-xs text-zinc-400">Anel<input type="color" value={form.style.affectedTokenRing.color} onChange={(event) => setForm({ ...form, style: { ...form.style, affectedTokenRing: { ...form.style.affectedTokenRing, color: event.currentTarget.value } } })} className="mt-1 h-8 w-full rounded bg-transparent" /></label>
      </div>
      {!isTarget ? <label className="text-xs text-zinc-400">Efeito visual<select value={form.style.visualEffect ?? 'DEFAULT'} onChange={(event) => setForm({ ...form, style: { ...form.style, visualEffect: event.currentTarget.value as AreaTemplateInput['style']['visualEffect'] } })} className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm"><option value="DEFAULT">Padrao</option><option value="FIRE">Fogo</option><option value="ELECTRIC">Eletrico</option><option value="HEALING">Cura</option><option value="EARTH">Terra (terremoto)</option><option value="VINES">Videiras</option><option value="LEAVES">Plantas (rajada de folhas)</option></select></label> : null}
      <div className="flex justify-end gap-2"><button type="button" onClick={onCancel} className="rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-300">Cancelar</button><button disabled={saving} className="rounded-md bg-orange-600 px-3 py-2 text-xs font-semibold text-white disabled:opacity-50">{saving ? 'Salvando...' : 'Salvar template'}</button></div>
    </form>
  )
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
      {editing ? <TemplateEditor template={editing === 'new' ? undefined : editing} gridScale={gridScale} onCancel={() => setEditing(null)} onSave={onSave} /> : <>
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
