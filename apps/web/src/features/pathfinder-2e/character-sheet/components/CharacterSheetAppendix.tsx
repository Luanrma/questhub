import { useState } from 'react'
import type { ReactNode } from 'react'
import { Activity, Eye, HeartPulse, Plus, Shield, ShieldCheck, Swords, X } from 'lucide-react'
import type {
  Pathfinder2eCharacterSheetData,
  Pathfinder2eDerivedCharacterSheet,
  Pathfinder2eProficiencyRank,
  Pathfinder2eProficiencyValue,
} from '../types'

type ProficiencyGroup = 'perception' | 'savingThrows'

type Props = {
  sheet: Pathfinder2eCharacterSheetData
  derived: Pathfinder2eDerivedCharacterSheet
  onHitPointsChange: (value: Pick<Pathfinder2eCharacterSheetData['hitPoints'], 'current' | 'temporary'>) => void
  onArmorClassBonusChange: (bonus: number) => void
  onInitiativeBonusChange: (bonus: number) => void
  onProficiencyChange: (
    group: ProficiencyGroup,
    key: string,
    value: Pathfinder2eProficiencyValue,
  ) => void
  onDefensesChange: (defenses: Pathfinder2eCharacterSheetData['defenses']) => void
}

const rankOptions: Array<{ value: Pathfinder2eProficiencyRank; label: string }> = [
  { value: 0, label: 'Não treinado' },
  { value: 2, label: 'Treinado' },
  { value: 4, label: 'Especialista' },
  { value: 6, label: 'Mestre' },
  { value: 8, label: 'Lendário' },
]

const compactInputClass =
  'min-w-0 rounded-md border border-white/10 bg-black/25 px-2 py-1.5 text-sm text-white outline-none transition focus:border-rose-200/50 focus:ring-2 focus:ring-rose-400/15'

function parseNumber(value: string) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function VitalityField({ label, value, readOnly, onChange }: {
  label: string
  value: number
  readOnly?: boolean
  onChange?: (value: number) => void
}) {
  return (
    <label className="grid min-w-0 gap-1 text-center">
      <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-rose-100/65">{label}</span>
      {readOnly ? (
        <span className="rounded-lg border border-rose-200/15 bg-rose-950/45 px-1 py-2 text-xl font-bold text-white">
          {value}
        </span>
      ) : (
        <input
          type="number"
          min={0}
          value={value}
          aria-label={label}
          className={`${compactInputClass} w-full px-1 py-2 text-center text-xl font-bold`}
          onChange={(event) => onChange?.(Math.max(0, parseNumber(event.target.value)))}
        />
      )}
    </label>
  )
}

function StatisticEditor({
  label,
  total,
  icon,
  value,
  effectiveRank,
  onChange,
}: {
  label: string
  total: number
  icon: ReactNode
  value: Pathfinder2eProficiencyValue
  effectiveRank: Pathfinder2eProficiencyRank
  onChange: (value: Pathfinder2eProficiencyValue) => void
}) {
  const effectiveRankLabel = rankOptions.find((option) => option.value === effectiveRank)?.label

  return (
    <section className="rounded-xl border border-white/10 bg-black/15 p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-rose-100/80">
          {icon}
          {label}
        </div>
        <span className="text-2xl font-black text-white">{total >= 0 ? `+${total}` : total}</span>
      </div>
      <div className="mt-2 grid grid-cols-[minmax(0,1fr)_68px] gap-2">
        <label className="grid gap-1">
          <span className="text-[9px] font-semibold uppercase tracking-wide text-rose-100/45">Grau</span>
          <select
            className={compactInputClass}
            value={value.rank}
            onChange={(event) => onChange({
              ...value,
              rank: Number(event.target.value) as Pathfinder2eProficiencyRank,
            })}
          >
            {rankOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-[9px] font-semibold uppercase tracking-wide text-rose-100/45">Bônus</span>
          <input
            type="number"
            value={value.bonus}
            className={`${compactInputClass} w-full text-center`}
            onChange={(event) => onChange({ ...value, bonus: parseNumber(event.target.value) })}
          />
        </label>
      </div>
      {effectiveRank > value.rank ? (
        <div className="mt-1.5 text-[10px] text-emerald-200/80">Efetivo pela Classe: {effectiveRankLabel}</div>
      ) : null}
    </section>
  )
}

function DefenseListEditor({ label, values, onChange }: {
  label: string
  values: string[]
  onChange: (values: string[]) => void
}) {
  const [draft, setDraft] = useState('')

  function addEntry() {
    const entry = draft.trim()
    if (!entry || values.length >= 50) return
    if (values.some((value) => value.toLocaleLowerCase() === entry.toLocaleLowerCase())) {
      setDraft('')
      return
    }
    onChange([...values, entry])
    setDraft('')
  }

  return (
    <section className="border-t border-white/10 pt-3">
      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-rose-100/70">{label}</div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {values.length ? values.map((value, index) => (
          <span key={`${value}-${index}`} className="inline-flex max-w-full items-center gap-1 rounded-full border border-rose-200/15 bg-rose-950/60 px-2 py-1 text-xs text-rose-50">
            <span className="truncate">{value}</span>
            <button
              type="button"
              className="shrink-0 rounded-full p-0.5 text-rose-100/55 transition hover:bg-white/10 hover:text-white"
              title={`Remover ${value}`}
              onClick={() => onChange(values.filter((entry) => entry !== value))}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        )) : <span className="text-xs italic text-rose-100/35">Nenhuma</span>}
      </div>
      <div className="mt-2 grid grid-cols-[minmax(0,1fr)_30px] gap-1.5">
        <input
          type="text"
          value={draft}
          maxLength={120}
          placeholder="Ex.: Fogo 5"
          aria-label={`Adicionar ${label.toLocaleLowerCase()}`}
          className={`${compactInputClass} w-full`}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key !== 'Enter') return
            event.preventDefault()
            addEntry()
          }}
        />
        <button
          type="button"
          title={`Adicionar ${label.toLocaleLowerCase()}`}
          disabled={!draft.trim() || values.length >= 50}
          className="flex items-center justify-center rounded-md border border-rose-200/15 bg-rose-500/15 text-rose-50 transition hover:bg-rose-500/25 disabled:cursor-not-allowed disabled:opacity-35"
          onClick={addEntry}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}

export function CharacterSheetAppendix({
  sheet,
  derived,
  onHitPointsChange,
  onArmorClassBonusChange,
  onInitiativeBonusChange,
  onProficiencyChange,
  onDefensesChange,
}: Props) {
  const savingThrows = [
    { key: 'fortitude' as const, label: 'Fortitude', value: derived.savingThrows.fortitude.value },
    { key: 'reflex' as const, label: 'Reflexos', value: derived.savingThrows.reflex.value },
    { key: 'will' as const, label: 'Vontade', value: derived.savingThrows.will.value },
  ]

  return (
    <aside className="overflow-hidden rounded-2xl border border-rose-200/20 bg-[radial-gradient(circle_at_top_left,_rgba(190,24,93,0.24),_transparent_45%),linear-gradient(165deg,_rgba(76,5,25,0.98),_rgba(30,6,18,0.98))] shadow-xl md:sticky md:top-0 md:max-h-[calc(100vh-12rem)] md:overflow-y-auto">
      <div className="border-b border-white/10 px-4 py-4">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200/70">
          <Activity className="h-3.5 w-3.5" /> Consulta rápida
        </div>
        <div className="mt-1 text-sm font-semibold text-white">Defesas principais</div>
      </div>

      <div className="space-y-3 p-3">
        <section className="rounded-xl border border-white/10 bg-black/15 p-3">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-rose-100/80">
            <HeartPulse className="h-4 w-4" /> Pontos de vida
          </div>
          <div className="grid grid-cols-3 gap-2">
            <VitalityField
              label="Vida temp."
              value={sheet.hitPoints.temporary}
              onChange={(temporary) => onHitPointsChange({ current: sheet.hitPoints.current, temporary })}
            />
            <VitalityField
              label="Vida atual"
              value={sheet.hitPoints.current}
              onChange={(current) => onHitPointsChange({ current, temporary: sheet.hitPoints.temporary })}
            />
            <VitalityField label="Vida máx." value={derived.hitPoints.maximum} readOnly />
          </div>
        </section>

        <div className="grid grid-cols-2 gap-2">
          <section className="rounded-xl border border-white/10 bg-black/15 p-3 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-rose-100/70">
              <Shield className="h-3.5 w-3.5" /> CA
            </div>
            <div className="mt-1 text-3xl font-black text-white">{derived.armorClass.value}</div>
            <div className="mt-0.5 text-[9px] uppercase tracking-wide text-rose-100/35">Sem armadura</div>
            <label className="mt-2 grid gap-1">
              <span className="text-[9px] uppercase tracking-wide text-rose-100/40">Ajuste</span>
              <input
                type="number"
                value={sheet.armorClass.bonus}
                className={`${compactInputClass} w-full text-center`}
                onChange={(event) => onArmorClassBonusChange(parseNumber(event.target.value))}
              />
            </label>
          </section>
          <section className="rounded-xl border border-white/10 bg-black/15 p-3 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-rose-100/70">
              <Swords className="h-3.5 w-3.5" /> Iniciativa
            </div>
            <div className="mt-1 text-3xl font-black text-white">
              {derived.initiative.value >= 0 ? `+${derived.initiative.value}` : derived.initiative.value}
            </div>
            <label className="mt-2 grid gap-1">
              <span className="text-[9px] uppercase tracking-wide text-rose-100/40">Ajuste</span>
              <input
                type="number"
                value={sheet.initiative.bonus}
                className={`${compactInputClass} w-full text-center`}
                onChange={(event) => onInitiativeBonusChange(parseNumber(event.target.value))}
              />
            </label>
          </section>
        </div>

        <StatisticEditor
          label="Percepção"
          total={derived.perception.value}
          icon={<Eye className="h-4 w-4" />}
          value={sheet.perception}
          effectiveRank={derived.perception.effectiveRank}
          onChange={(value) => onProficiencyChange('perception', 'perception', value)}
        />

        <section className="rounded-xl border border-white/10 bg-black/15 p-3">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-rose-100/80">
            <ShieldCheck className="h-4 w-4" /> Salvamentos
          </div>
          <div className="space-y-2">
            {savingThrows.map(({ key, label, value: total }) => {
              const proficiency = sheet.savingThrows[key]
              const effectiveRank = derived.savingThrows[key].effectiveRank
              const effectiveRankLabel = rankOptions.find((option) => option.value === effectiveRank)?.label
              return (
                <div key={key} className="grid grid-cols-[minmax(0,1fr)_44px] gap-2 rounded-lg border border-white/5 bg-black/15 p-2">
                  <div className="min-w-0">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-rose-100/65">{label}</div>
                    <div className="grid grid-cols-[minmax(0,1fr)_58px] gap-1.5">
                      <select
                        aria-label={`Grau de ${label}`}
                        className={compactInputClass}
                        value={proficiency.rank}
                        onChange={(event) => onProficiencyChange('savingThrows', key, {
                          ...proficiency,
                          rank: Number(event.target.value) as Pathfinder2eProficiencyRank,
                        })}
                      >
                        {rankOptions.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <input
                        type="number"
                        aria-label={`Bônus de ${label}`}
                        value={proficiency.bonus}
                        className={`${compactInputClass} w-full text-center`}
                        onChange={(event) => onProficiencyChange('savingThrows', key, {
                          ...proficiency,
                          bonus: parseNumber(event.target.value),
                        })}
                      />
                    </div>
                    {effectiveRank > proficiency.rank ? (
                      <div className="mt-1 text-[9px] text-emerald-200/75">Efetivo pela Classe: {effectiveRankLabel}</div>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-center text-lg font-black text-white">
                    {total >= 0 ? `+${total}` : total}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="rounded-xl border border-white/10 bg-black/15 p-3">
          <DefenseListEditor
            label="Resistências"
            values={sheet.defenses.resistances}
            onChange={(resistances) => onDefensesChange({ ...sheet.defenses, resistances })}
          />
          <DefenseListEditor
            label="Fraquezas"
            values={sheet.defenses.weaknesses}
            onChange={(weaknesses) => onDefensesChange({ ...sheet.defenses, weaknesses })}
          />
          <DefenseListEditor
            label="Imunidades"
            values={sheet.defenses.immunities}
            onChange={(immunities) => onDefensesChange({ ...sheet.defenses, immunities })}
          />
        </section>
      </div>
    </aside>
  )
}
