import type { ReactNode } from 'react'
import type { Pathfinder2eProficiencyRank, Pathfinder2eProficiencyValue } from '../types'

const inputClass =
  'w-full rounded-lg border border-white/10 bg-black/25 px-3 py-2 text-sm text-white outline-none transition focus:border-indigo-300/50 focus:ring-2 focus:ring-indigo-500/20'

export function SheetSection({ title, description, children }: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {description ? <p className="mt-1 text-sm text-zinc-400">{description}</p> : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export function ManualNumberField({ label, value, onChange, step = 1, min, max }: {
  label: string
  value: number
  onChange: (value: number) => void
  step?: number
  min?: number
  max?: number
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{label}</span>
      <input
        className={inputClass}
        type="number"
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={(event) => {
          const parsed = Number(event.target.value)
          onChange(Number.isFinite(parsed) ? parsed : 0)
        }}
      />
    </label>
  )
}

export function ManualCatalogSelect({ label, value, options, onChange }: {
  label: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{label}</span>
      <select className={inputClass} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Nao selecionado</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

const proficiencyOptions: Array<{ value: Pathfinder2eProficiencyRank; label: string }> = [
  { value: 0, label: 'Nao treinado' },
  { value: 2, label: 'Treinado' },
  { value: 4, label: 'Especialista' },
  { value: 6, label: 'Mestre' },
  { value: 8, label: 'Lendario' },
]

export function ProficiencyEditor({ label, value, onChange }: {
  label: string
  value: Pathfinder2eProficiencyValue
  onChange: (value: Pathfinder2eProficiencyValue) => void
}) {
  return (
    <div className="grid gap-2 rounded-lg border border-white/10 bg-black/15 p-3 sm:grid-cols-[minmax(0,1fr)_150px_110px] sm:items-end">
      <div className="text-sm font-medium text-zinc-200">{label}</div>
      <label className="grid gap-1">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Grau</span>
        <select
          className={inputClass}
          value={value.rank}
          onChange={(event) => onChange({ ...value, rank: Number(event.target.value) as Pathfinder2eProficiencyRank })}
        >
          {proficiencyOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">Total</span>
        <input
          className={inputClass}
          type="number"
          value={value.value}
          onChange={(event) => {
            const parsed = Number(event.target.value)
            onChange({ ...value, value: Number.isFinite(parsed) ? parsed : 0 })
          }}
        />
      </label>
    </div>
  )
}

export function ArmorProficiencyField({ label, value, onChange }: {
  label: string
  value: Pathfinder2eProficiencyRank
  onChange: (value: Pathfinder2eProficiencyRank) => void
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{label}</span>
      <select
        className={inputClass}
        value={value}
        onChange={(event) => onChange(Number(event.target.value) as Pathfinder2eProficiencyRank)}
      >
        {proficiencyOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  )
}

export const manualTextareaClass = `${inputClass} min-h-40 resize-y`
