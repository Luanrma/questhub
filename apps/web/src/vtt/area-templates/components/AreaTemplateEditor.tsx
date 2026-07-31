import { useState, type ReactNode } from 'react'
import { areaTemplateNameMaxLength } from '../config/limits'
import {
  areaTemplateForMeterEditor,
  metersPerFoot,
  metersToFeet,
} from '../domain/measurement'
import {
  defaultAreaTemplateInput,
  type AreaShape,
  type AreaTemplateInput,
} from '../domain/types'

const shapeLabels: Record<AreaShape, string> = {
  CIRCLE: 'Circulo',
  CONE: 'Cone',
  LINE: 'Linha',
  ORTHOGONAL: 'Ortogonal',
  RING: 'Anel',
  POLYGON: 'Poligono',
  TARGET: 'Target',
}

function dimensionsForShape(
  shape: AreaShape,
  current: AreaTemplateInput['dimensions'],
) {
  if (shape === 'TARGET') return { targetCount: current.targetCount ?? 1 }
  if (shape === 'CIRCLE' || shape === 'ORTHOGONAL') return { radius: current.radius ?? 3 }
  if (shape === 'CONE') return {
    length: current.length ?? 6,
    angleDegrees: current.angleDegrees ?? 60,
    startWidth: current.startWidth ?? 0,
  }
  if (shape === 'LINE') return { length: current.length ?? 6, width: current.width ?? 1 }
  if (shape === 'RING') return { radius: current.radius ?? 4, innerRadius: current.innerRadius ?? 2 }
  return {
    polygonPoints: current.polygonPoints ?? [
      { x: 0, y: 0 },
      { x: 3, y: 0 },
      { x: 1.5, y: 3 },
    ],
  }
}

function withoutOriginInDirectionalSource(template: AreaTemplateInput) {
  if (
    (template.shape === 'CONE' || template.shape === 'LINE')
    && template.originMode === 'SOURCE_TOKEN'
  ) {
    return { ...template, includesOrigin: false }
  }
  return template
}

export function AreaTemplateEditor({
  initialTemplate,
  gridScale,
  onCancel,
  onSave,
  showOrigin = false,
  nameReadOnly = false,
  allowPersistent = true,
  submitLabel = 'Salvar template',
  renderAdditionalFields,
  secondaryAction,
}: {
  initialTemplate?: AreaTemplateInput
  gridScale?: { metersPerCell: number }
  onCancel: () => void
  onSave: (input: AreaTemplateInput) => Promise<boolean>
  showOrigin?: boolean
  nameReadOnly?: boolean
  allowPersistent?: boolean
  submitLabel?: string
  renderAdditionalFields?: (form: AreaTemplateInput) => ReactNode
  secondaryAction?: ReactNode
}) {
  const metersPerCell = gridScale?.metersPerCell ?? 1.5
  const [form, setForm] = useState<AreaTemplateInput>(() => {
    const initial = areaTemplateForMeterEditor(
      initialTemplate ?? defaultAreaTemplateInput,
      metersPerCell,
    )
    return initial.persistenceMode === 'PREVIEW_ONLY' || !allowPersistent
      ? { ...initial, persistenceMode: 'INSTANT' }
      : initial
  })
  const [saving, setSaving] = useState(false)
  const directional = form.shape === 'CONE' || form.shape === 'LINE'
  const isTarget = form.shape === 'TARGET'
  const primaryDimensionMeters = form.shape === 'CIRCLE'
    || form.shape === 'ORTHOGONAL'
    || form.shape === 'RING'
    ? form.dimensions.radius ?? 0
    : form.dimensions.length ?? 0
  const topGridColumns = directional
    ? 'grid-cols-[minmax(72px,0.7fr)_minmax(92px,0.9fr)_minmax(72px,0.72fr)_minmax(82px,0.82fr)]'
    : 'grid-cols-[minmax(72px,0.72fr)_minmax(100px,1fr)_minmax(76px,0.76fr)]'

  function setDimension(key: string, value: number) {
    setForm((current) => ({
      ...current,
      dimensions: { ...current.dimensions, [key]: value },
    }))
  }

  function changeShape(shape: AreaShape) {
    setForm((current) => {
      const originMode = shape === 'TARGET'
        ? 'TARGET_TOKEN'
        : showOrigin
          ? current.originMode === 'TARGET_TOKEN' ? 'SOURCE_TOKEN' : current.originMode
          : 'GRID_CELL'
      return withoutOriginInDirectionalSource({
        ...current,
        shape,
        dimensions: dimensionsForShape(shape, current.dimensions),
        originMode,
        placementMode: shape === 'TARGET'
          || shape === 'CIRCLE'
          || shape === 'ORTHOGONAL'
          || shape === 'RING'
          ? 'POINT'
          : 'DIRECTIONAL',
        persistenceMode: shape === 'TARGET' || !allowPersistent
          ? 'INSTANT'
          : current.persistenceMode,
        movementMode: shape === 'TARGET' ? 'STATIC' : current.movementMode,
        propagationMode: shape === 'TARGET' ? 'IGNORE_WALLS' : current.propagationMode,
        tokenIntersectionRule: shape === 'TARGET'
          ? 'MANUAL'
          : shape === 'ORTHOGONAL'
            ? 'COVERED_CELLS'
            : current.tokenIntersectionRule === 'MANUAL'
              ? 'COVERED_CELLS'
              : current.tokenIntersectionRule,
      })
    })
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    setSaving(true)
    const saved = await onSave(withoutOriginInDirectionalSource(form))
    setSaving(false)
    if (saved) onCancel()
  }

  return (
    <form className="grid min-w-0 gap-3 overflow-x-hidden [&>*]:min-w-0" onSubmit={submit}>
      <div className={`grid min-w-0 ${topGridColumns} gap-2 [&>*]:min-w-0`}>
        <label className="col-span-full text-xs text-zinc-400">Nome
          <input required disabled={nameReadOnly} maxLength={areaTemplateNameMaxLength} value={form.name} onChange={(event) => setForm({ ...form, name: event.currentTarget.value })} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:text-zinc-400" />
        </label>
        <label className="text-xs text-zinc-400">Forma
          <select value={form.shape} onChange={(event) => changeShape(event.currentTarget.value as AreaShape)} className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm">
            {(['CIRCLE', 'CONE', 'LINE', 'ORTHOGONAL', 'TARGET'] as AreaShape[]).map((shape) => <option key={shape} value={shape}>{shapeLabels[shape]}</option>)}
          </select>
        </label>
        {showOrigin && !isTarget ? (
          <label className="text-xs text-zinc-400">Origem
            <select value={form.originMode} onChange={(event) => setForm(withoutOriginInDirectionalSource({ ...form, originMode: event.currentTarget.value as AreaTemplateInput['originMode'] }))} className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm">
              <option value="SOURCE_TOKEN">Token conjurador</option>
              <option value="FREE_POINT">Ponto livre</option>
              <option value="GRID_CELL">Celula do grid</option>
              <option value="GRID_INTERSECTION">Intersecao do grid</option>
            </select>
          </label>
        ) : null}
        {!isTarget ? <div className="text-xs text-zinc-400">Unidade<div className="mt-1 rounded-md border border-white/10 bg-zinc-950 px-2 py-1.5 text-sm text-zinc-200"><span className="block">Metros (m)</span><span className="block truncate text-[9px] text-zinc-500">{Number(primaryDimensionMeters.toFixed(2))}m = {Number(metersToFeet(primaryDimensionMeters).toFixed(2))}ft</span></div></div> : null}
        {isTarget ? <label className="col-span-2 text-xs text-zinc-400">Quantidade maxima de alvos<input type="number" required min="1" max="100" step="1" value={form.dimensions.targetCount ?? 1} onChange={(event) => setDimension('targetCount', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {(form.shape === 'CIRCLE' || form.shape === 'ORTHOGONAL' || form.shape === 'RING') ? <label className="text-xs text-zinc-400">{form.shape === 'ORTHOGONAL' ? 'Distancia' : 'Raio externo'}<input type="number" min="0.1" step="0.1" value={form.dimensions.radius ?? 1} onChange={(event) => setDimension('radius', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {form.shape === 'RING' ? <label className="text-xs text-zinc-400">Raio interno<input type="number" min="0" step="0.1" value={form.dimensions.innerRadius ?? 0} onChange={(event) => setDimension('innerRadius', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {directional ? <label className="text-xs text-zinc-400">Comprimento<input type="number" min="0.1" step="0.1" value={form.dimensions.length ?? 1} onChange={(event) => setDimension('length', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {form.shape === 'LINE' ? <label className="text-xs text-zinc-400">Largura<input type="number" min="0.1" step="0.1" value={form.dimensions.width ?? 1} onChange={(event) => setDimension('width', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {form.shape === 'CONE' ? <label className="text-xs text-zinc-400">Abertura (graus)<input type="number" min="1" max="359" value={form.dimensions.angleDegrees ?? 60} onChange={(event) => setDimension('angleDegrees', Number(event.currentTarget.value))} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-2 py-2 text-white" /></label> : null}
        {!isTarget && gridScale ? <p className="col-span-full rounded-md border border-sky-300/15 bg-sky-500/5 px-2.5 py-1.5 text-[10px] leading-4 text-sky-100/75">Cada celula representa {gridScale.metersPerCell}m / {Number((gridScale.metersPerCell / metersPerFoot).toFixed(2))}ft.</p> : null}
        {isTarget ? <p className="col-span-full rounded-md border border-violet-300/15 bg-violet-500/5 px-2.5 py-1.5 text-[10px] leading-4 text-violet-100/75">Selecao manual de tokens no mapa.</p> : null}
      </div>

      {renderAdditionalFields?.(form)}

      {!isTarget ? <div className={`grid min-w-0 ${allowPersistent ? 'grid-cols-3' : 'grid-cols-2'} gap-2 [&>*]:min-w-0`}>
        {allowPersistent ? <label className="text-xs text-zinc-400">Persistencia<select value={form.persistenceMode} onChange={(event) => setForm({ ...form, persistenceMode: event.currentTarget.value as AreaTemplateInput['persistenceMode'] })} className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm"><option value="INSTANT">Instantanea</option><option value="PERSISTENT">Permanente</option></select></label> : null}
        <label className="text-xs text-zinc-400">Paredes<select value={form.propagationMode} onChange={(event) => setForm({ ...form, propagationMode: event.currentTarget.value as AreaTemplateInput['propagationMode'] })} className="mt-1 w-full rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm"><option value="IGNORE_WALLS">Ignorar</option><option value="BLOCKED_BY_WALLS">Bloquear</option></select></label>
        <label className="text-xs text-zinc-400">Visibilidade<select value={form.visibility} onChange={(event) => setForm({ ...form, visibility: event.currentTarget.value as AreaTemplateInput['visibility'] })} className="mt-1 w-full min-w-0 rounded-md border border-white/10 bg-zinc-950 px-2 py-2 text-sm"><option value="MASTER_ONLY">Mestre</option><option value="ALL_PLAYERS">Todos</option></select></label>
        <label className={`${allowPersistent ? 'col-span-3' : 'col-span-2'} flex min-w-0 items-start gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-2 text-xs text-zinc-300`}><input type="checkbox" checked={form.tokenIntersectionRule === 'COVERED_CELLS'} onChange={(event) => setForm({ ...form, tokenIntersectionRule: event.currentTarget.checked ? 'COVERED_CELLS' : 'ANY_OVERLAP' })} className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-orange-500" /><span className="min-w-0"><span className="block font-semibold text-zinc-200">Usar celulas do grid para atingir tokens</span><span className="mt-0.5 block text-[10px] leading-4 text-zinc-500">Marcado: o token e atingido ao ocupar uma celula afetada. Desmarcado: somente a forma geometrica exata importa.</span></span></label>
        {form.tokenIntersectionRule === 'COVERED_CELLS' ? <fieldset className={`${allowPersistent ? 'col-span-3' : 'col-span-2'} grid min-w-0 grid-cols-2 gap-1.5 rounded-md border border-orange-300/15 bg-orange-500/[0.04] p-2.5`}><legend className="px-1 text-[10px] font-semibold uppercase text-orange-100/80">Quando uma celula conta como afetada?</legend>{([
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
      <div className="flex justify-end gap-2">{secondaryAction}<button type="button" onClick={onCancel} className="rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-300">Cancelar</button><button disabled={saving} className="rounded-md bg-orange-600 px-3 py-2 text-xs font-semibold text-white disabled:opacity-50">{saving ? 'Salvando...' : submitLabel}</button></div>
    </form>
  )
}
