import { useState } from 'react'
import type { ReactNode } from 'react'
import { ChevronDown, Pencil } from 'lucide-react'
import type {
  Pathfinder2eCharacterOption,
  Pathfinder2eProficiencyGrantSource,
  Pathfinder2eProficiencyRank,
  Pathfinder2eProficiencyValue,
} from '../types'

const inputClass =
  'w-full min-w-0 rounded-md border border-[#8f7d62]/55 bg-[#d9ccb4] px-2.5 py-1.5 text-sm text-[#2d271f] outline-none transition focus:border-[#6d4ac8]/65 focus:ring-2 focus:ring-[#6d4ac8]/15'

export function SheetSection({ title, description, children }: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section className="rounded-xl border border-[#8f7d62]/45 bg-[#cfc0a5] p-4 text-[#2d271f] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
      <div className="border-b border-[#8f7d62]/35 pb-2.5">
        <h2 className="font-serif text-lg font-semibold tracking-wide text-[#2b241c]">{title}</h2>
        {description ? <p className="mt-0.5 text-xs text-[#6f6250]">{description}</p> : null}
      </div>
      <div className="mt-3">{children}</div>
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
    <label className="grid gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#756754]">{label}</span>
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

export function DerivedNumberField({ label, value, detail }: {
  label: string
  value: number
  detail?: string
}) {
  return (
    <div className="grid gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#756754]">{label}</span>
      <div className="rounded-md border border-[#7657bd]/30 bg-[#c4b4a4] px-2.5 py-1.5 text-sm font-semibold text-[#4f378b]">
        {value}
      </div>
      {detail ? <span className="text-[11px] text-[#766957]">{detail}</span> : null}
    </div>
  )
}

export function ManualCatalogSelect({ label, value, options, locale, onChange }: {
  label: string
  value: string
  options: readonly Pathfinder2eCharacterOption[]
  locale: 'pt-BR' | 'en-US'
  onChange: (value: string) => void
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#756754]">{label}</span>
      <select className={inputClass} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Não selecionado</option>
        {options.map((option) => {
          const displayLabel = option.labels[locale] ?? option.labels['en-US']
          return <option key={option.value} value={option.value}>{displayLabel}</option>
        })}
      </select>
    </label>
  )
}

const proficiencyOptions: Array<{ value: Pathfinder2eProficiencyRank; label: string }> = [
  { value: 0, label: 'Não treinado' },
  { value: 2, label: 'Treinado' },
  { value: 4, label: 'Especialista' },
  { value: 6, label: 'Mestre' },
  { value: 8, label: 'Lendário' },
]

function rankLabel(rank: Pathfinder2eProficiencyRank) {
  return proficiencyOptions.find((option) => option.value === rank)?.label ?? 'Não treinado'
}

function rankBadgeClass(rank: Pathfinder2eProficiencyRank) {
  if (rank >= 8) return 'border-[#7a5127]/35 bg-[#b98b54]/20 text-[#6f441c]'
  if (rank >= 6) return 'border-[#6d4ac8]/35 bg-[#8061c7]/15 text-[#54379a]'
  if (rank >= 4) return 'border-[#4f7348]/35 bg-[#73936a]/16 text-[#3f6339]'
  if (rank >= 2) return 'border-[#426b8b]/35 bg-[#6d91ad]/15 text-[#365f7d]'
  return 'border-[#8f7d62]/40 bg-[#a89678]/12 text-[#6f6250]'
}

export function ProficiencyEditor({
  label,
  attributeLabel,
  icon,
  value,
  total,
  effectiveRank = value.rank,
  grantSources = [],
  onChange,
}: {
  label: string
  attributeLabel?: string
  icon?: ReactNode
  value: Pathfinder2eProficiencyValue
  total: number
  effectiveRank?: Pathfinder2eProficiencyRank
  grantSources?: Pathfinder2eProficiencyGrantSource[]
  onChange: (value: Pathfinder2eProficiencyValue) => void
}) {
  const [editing, setEditing] = useState(false)
  const sourceLabel = grantSources
    .map((source) => source === 'class' ? 'Classe' : 'Background')
    .join(' + ')
  const effectiveLabel = rankLabel(effectiveRank)

  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-[#8f7d62]/45 bg-[#d6c9af] transition hover:border-[#7657bd]/45">
      <button
        type="button"
        className="grid w-full min-w-0 grid-cols-[34px_minmax(0,1fr)_auto_auto] items-center gap-2.5 px-3 py-2 text-left"
        aria-expanded={editing}
        title={`Editar ${label}`}
        onClick={() => setEditing((current) => !current)}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full border border-[#8f7d62]/35 bg-[#c8b99d] text-[#71572f]">
          {icon ?? <Pencil className="h-4 w-4" />}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-serif text-sm font-semibold text-[#2b241c]">{label}</span>
          {attributeLabel ? <span className="block truncate text-[11px] text-[#766957]">{attributeLabel}</span> : null}
        </span>
        <span className={`hidden rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide sm:inline-flex ${rankBadgeClass(effectiveRank)}`}>
          {effectiveLabel}
        </span>
        <span className="flex items-center gap-1.5">
          <strong className="min-w-8 text-right font-serif text-lg text-[#2b241c]">
            {total >= 0 ? `+${total}` : total}
          </strong>
          <ChevronDown className={`h-3.5 w-3.5 text-[#766957] transition ${editing ? 'rotate-180' : ''}`} />
        </span>
      </button>

      {editing ? (
        <div className="grid gap-2 border-t border-[#8f7d62]/35 bg-[#cabc9f]/70 px-3 py-2 sm:grid-cols-[minmax(0,1fr)_88px] sm:items-end">
          <label className="grid gap-1">
            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#756754]">Grau manual</span>
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
            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#756754]">Bônus</span>
            <input
              className={`${inputClass} text-center`}
              type="number"
              value={value.bonus}
              onChange={(event) => {
                const parsed = Number(event.target.value)
                onChange({ ...value, bonus: Number.isFinite(parsed) ? parsed : 0 })
              }}
            />
          </label>
          {effectiveRank > value.rank ? (
            <span className="text-[10px] text-[#496640] sm:col-span-2">
              Grau efetivo: {effectiveLabel}{sourceLabel ? ` · concedido por ${sourceLabel}` : ''}
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export function ArmorProficiencyField({ label, value, effectiveRank = value, onChange }: {
  label: string
  value: Pathfinder2eProficiencyRank
  effectiveRank?: Pathfinder2eProficiencyRank
  onChange: (value: Pathfinder2eProficiencyRank) => void
}) {
  return (
    <label className="grid gap-1.5 rounded-lg border border-[#8f7d62]/35 bg-[#d6c9af] p-2.5">
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#756754]">{label}</span>
      <select
        className={inputClass}
        value={value}
        onChange={(event) => onChange(Number(event.target.value) as Pathfinder2eProficiencyRank)}
      >
        {proficiencyOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {effectiveRank > value ? (
        <span className="text-[10px] text-[#496640]">
          Efetivo pela Classe: {rankLabel(effectiveRank)}
        </span>
      ) : null}
    </label>
  )
}

export const manualTextareaClass = `${inputClass} min-h-40 resize-y`
