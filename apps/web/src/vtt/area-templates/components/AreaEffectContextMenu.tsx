import { useState } from 'react'
import { Move, Save, Trash2, X } from 'lucide-react'

type AreaEffectEditInput = { rotationDegrees: number; dimensionMeters: number }

export function AreaEffectContextMenu({ name, position, rotationDegrees, dimensionLabel, dimensionMeters, minimumDimensionMeters, maximumDimensionMeters, canRotate, canReposition, canDelete, onPreview, onSave, onReposition, onDelete, onClose }: {
  name: string
  position: { x: number; y: number }
  rotationDegrees: number
  dimensionLabel: string
  dimensionMeters: number
  minimumDimensionMeters: number
  maximumDimensionMeters: number
  canRotate: boolean
  canReposition: boolean
  canDelete: boolean
  onPreview: (input: AreaEffectEditInput) => void
  onSave: (input: AreaEffectEditInput) => void
  onReposition: () => void
  onDelete: () => void
  onClose: () => void
}) {
  const [rotation, setRotation] = useState(String(Math.round(rotationDegrees)))
  const [dimension, setDimension] = useState(String(Number(dimensionMeters.toFixed(2))))
  const parsedRotation = Number(rotation)
  const parsedDimension = Number(dimension)
  const valid = (!canRotate || Number.isInteger(parsedRotation)) && Number.isFinite(parsedDimension) && parsedDimension >= minimumDimensionMeters && parsedDimension <= maximumDimensionMeters

  function preview(nextRotation: string, nextDimension: string) {
    const rotationValue = Number(nextRotation)
    const dimensionValue = Number(nextDimension)
    if (!Number.isInteger(rotationValue) || !Number.isFinite(dimensionValue) || dimensionValue < minimumDimensionMeters || dimensionValue > maximumDimensionMeters) return
    onPreview({ rotationDegrees: rotationValue, dimensionMeters: dimensionValue })
  }

  return (
    <div
      className="pointer-events-auto fixed z-[100] w-52 rounded-lg border border-white/15 bg-[#111218]/95 p-2 text-white shadow-2xl backdrop-blur"
      style={{ left: Math.max(8, Math.min(position.x + 12, window.innerWidth - 220)), top: Math.max(8, Math.min(position.y + 12, window.innerHeight - (canRotate ? 238 : 202))) }}
      onClick={(event) => event.stopPropagation()}
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="mb-2 flex items-center justify-between gap-2 border-b border-white/10 px-1 pb-2">
        <span className="min-w-0 truncate text-xs font-semibold">{name}</span>
        <button type="button" title="Fechar" onClick={onClose} className="rounded p-1 text-zinc-400 hover:bg-white/10 hover:text-white"><X className="h-3.5 w-3.5" /></button>
      </div>
      <div className={canRotate ? 'grid grid-cols-2 gap-1.5' : 'grid grid-cols-1'}>
        {canRotate ? <label className="text-[10px] uppercase text-zinc-500">Rotacao (graus)<input type="number" step="1" value={rotation} onChange={(event) => { const value = event.currentTarget.value; setRotation(value); preview(value, dimension) }} className="mt-1 h-7 w-full rounded border border-white/10 bg-black/40 px-2 text-xs text-white" /></label> : null}
        <label className="text-[10px] uppercase text-zinc-500">{dimensionLabel}<input type="number" min={minimumDimensionMeters} max={maximumDimensionMeters} step="0.1" value={dimension} onChange={(event) => { const value = event.currentTarget.value; setDimension(value); preview(rotation, value) }} className="mt-1 h-7 w-full rounded border border-white/10 bg-black/40 px-2 text-xs text-white" /></label>
      </div>
      <button type="button" disabled={!valid} onClick={() => onSave({ rotationDegrees: parsedRotation, dimensionMeters: parsedDimension })} className="mt-2 flex h-7 w-full items-center justify-center gap-1.5 rounded bg-violet-600 text-[10px] font-semibold hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"><Save className="h-3 w-3" />Salvar</button>
      {canReposition ? <button type="button" onClick={onReposition} className="mt-1 flex h-7 w-full items-center justify-center gap-1.5 rounded border border-white/10 text-[10px] font-semibold text-zinc-200 hover:bg-white/10"><Move className="h-3 w-3" />Reposicionar</button> : null}
      {canDelete ? <button type="button" onClick={onDelete} className="mt-1 flex h-7 w-full items-center justify-center gap-1.5 rounded border border-red-300/20 text-[10px] font-semibold text-red-200 hover:bg-red-500/10"><Trash2 className="h-3 w-3" />Remover area</button> : null}
    </div>
  )
}
