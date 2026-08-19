import { useState } from 'react'
import type { ReactNode } from 'react'
import {
  ChevronDown,
  Eye,
  Heart,
  Plus,
  Shield,
  ShieldCheck,
  Skull,
  Sparkles,
  Swords,
  UserRound,
  X,
} from 'lucide-react'
import type {
  Pathfinder2eCharacterSheetData,
  Pathfinder2eDerivedCharacterSheet,
  Pathfinder2eProficiencyRank,
  Pathfinder2eProficiencyValue,
} from '../types'

type ProficiencyGroup = 'perception' | 'savingThrows'

type Props = {
  name: string
  avatarUrl: string | null
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

const armorCategoryLabels: Record<Pathfinder2eDerivedCharacterSheet['armorClass']['armorCategory'], string> = {
  unarmored: 'Sem armadura',
  light: 'Armadura leve',
  medium: 'Armadura média',
  heavy: 'Armadura pesada',
}

const compactInputClass =
  'min-w-0 rounded-md border border-[#806e54]/50 bg-[#d8cbb2] px-2 py-1.5 text-xs text-[#2d271f] outline-none transition focus:border-[#6d4ac8]/60 focus:ring-2 focus:ring-[#6d4ac8]/15'

function parseNumber(value: string) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function signed(value: number) {
  return value >= 0 ? `+${value}` : String(value)
}

function rankLabel(rank: Pathfinder2eProficiencyRank) {
  return rankOptions.find((option) => option.value === rank)?.label ?? 'Não treinado'
}

function SidebarDivider({ title, icon }: { title: string; icon?: ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-t border-[#7f6c50]/35 pt-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#695944] first:border-t-0 first:pt-0">
      {icon}
      <span>{title}</span>
      <span className="h-px flex-1 bg-[#8f7b5d]/30" />
    </div>
  )
}

function StatRow({ icon, label, value, detail }: {
  icon: ReactNode
  label: string
  value: string
  detail?: string
}) {
  return (
    <div className="grid grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-2 py-1.5">
      <span className="text-[#795d34]">{icon}</span>
      <span className="min-w-0">
        <span className="block truncate text-[11px] font-semibold uppercase tracking-wide text-[#544735]">{label}</span>
        {detail ? <span className="block truncate text-[10px] text-[#786a56]">{detail}</span> : null}
      </span>
      <strong className="font-serif text-lg text-[#2b241c]">{value}</strong>
    </div>
  )
}

function ProficiencyEditor({
  label,
  total,
  value,
  effectiveRank,
  onChange,
}: {
  label: string
  total: number
  value: Pathfinder2eProficiencyValue
  effectiveRank: Pathfinder2eProficiencyRank
  onChange: (value: Pathfinder2eProficiencyValue) => void
}) {
  const effectiveRankLabel = rankLabel(effectiveRank)

  return (
    <div className="grid gap-1.5 rounded-md border border-[#8f7b5d]/35 bg-[#cdbd9f]/60 p-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-[#5d4f3c]">{label}</span>
        <span className="font-serif text-base font-semibold text-[#2b241c]">{signed(total)}</span>
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_64px] gap-1.5">
        <select
          aria-label={`Grau de ${label}`}
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
        <input
          type="number"
          aria-label={`Bônus de ${label}`}
          value={value.bonus}
          className={`${compactInputClass} w-full text-center`}
          onChange={(event) => onChange({ ...value, bonus: parseNumber(event.target.value) })}
        />
      </div>
      {effectiveRank > value.rank ? (
        <div className="text-[9px] text-[#496640]">Efetivo pela Classe: {effectiveRankLabel}</div>
      ) : null}
    </div>
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
    <section className="border-t border-[#8f7b5d]/30 pt-2.5 first:border-t-0 first:pt-0">
      <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#665742]">{label}</div>
      <div className="mt-1.5 flex flex-wrap gap-1">
        {values.length ? values.map((value, index) => (
          <span key={`${value}-${index}`} className="inline-flex max-w-full items-center gap-1 rounded-full border border-[#806e54]/35 bg-[#d2c4aa] px-2 py-0.5 text-[10px] text-[#4f4333]">
            <span className="truncate">{value}</span>
            <button
              type="button"
              className="shrink-0 rounded-full p-0.5 text-[#786a56] transition hover:bg-[#8f7b5d]/15 hover:text-[#2d271f]"
              title={`Remover ${value}`}
              onClick={() => onChange(values.filter((entry) => entry !== value))}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        )) : <span className="text-[10px] italic text-[#847661]">Nenhuma</span>}
      </div>
      <div className="mt-1.5 grid grid-cols-[minmax(0,1fr)_28px] gap-1.5">
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
          className="flex items-center justify-center rounded-md border border-[#7657bd]/30 bg-[#7657bd]/12 text-[#54379a] transition hover:bg-[#7657bd]/20 disabled:cursor-not-allowed disabled:opacity-35"
          onClick={addEntry}
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}

function CompactDefenseSummary({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="grid grid-cols-[72px_minmax(0,1fr)] gap-2 text-[10px]">
      <span className="font-semibold uppercase tracking-wide text-[#665742]">{label}</span>
      <span className="truncate text-right text-[#4d4233]" title={values.join(', ') || 'Nenhuma'}>
        {values.length ? values.join(', ') : 'Nenhuma'}
      </span>
    </div>
  )
}

export function CharacterSheetAppendix({
  name,
  avatarUrl,
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
  const armorLabel = derived.armorClass.sourceName ?? armorCategoryLabels[derived.armorClass.armorCategory]
  const experienceMax = Math.max(1, sheet.general.experience.nextLevel)
  const experiencePercent = Math.max(0, Math.min(100, (sheet.general.experience.current / experienceMax) * 100))

  return (
    <aside className="min-w-0 rounded-xl border border-[#78664d]/55 bg-[#aa9778] p-3 text-[#2d271f] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] lg:sticky lg:top-0">
      <div className="flex min-w-0 items-center gap-3 border-b border-[#78664d]/35 pb-3">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt=""
            className="h-14 w-14 shrink-0 rounded-full border-2 border-[#8c6f3d]/70 bg-[#c6b89e] object-cover shadow-sm"
          />
        ) : (
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-[#8c6f3d]/60 bg-[#c6b89e] text-[#71572f]">
            <UserRound className="h-6 w-6" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h2 className="truncate font-serif text-xl font-semibold tracking-wide text-[#282119]">{name}</h2>
          <div className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#655642]">Pathfinder 2e · Nível {sheet.identity.level}</div>
          <div className="mt-2">
            <div className="mb-1 flex justify-between text-[9px] uppercase tracking-wide text-[#665742]">
              <span>EXP</span>
              <span>{sheet.general.experience.current} / {sheet.general.experience.nextLevel}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#78664d]/25">
              <div className="h-full rounded-full bg-[#6d4ac8]" style={{ width: `${experiencePercent}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2.5 space-y-2.5">
        <div>
          <StatRow
            icon={<Heart className="h-4 w-4" />}
            label="Pontos de vida"
            value={`${sheet.hitPoints.current} / ${derived.hitPoints.maximum}`}
            detail={sheet.hitPoints.temporary > 0 ? `+${sheet.hitPoints.temporary} temporários` : undefined}
          />
          <div className="h-1.5 overflow-hidden rounded-full bg-[#7d684b]/25">
            <div
              className="h-full rounded-full bg-[#9b3e3e]"
              style={{ width: `${Math.max(0, Math.min(100, (sheet.hitPoints.current / Math.max(1, derived.hitPoints.maximum)) * 100))}%` }}
            />
          </div>
        </div>

        <StatRow icon={<Shield className="h-4 w-4" />} label="Classe de armadura" value={String(derived.armorClass.value)} detail={armorLabel} />
        <StatRow icon={<Eye className="h-4 w-4" />} label="Percepção" value={signed(derived.perception.value)} detail={rankLabel(derived.perception.effectiveRank)} />
        <StatRow icon={<Swords className="h-4 w-4" />} label="Iniciativa" value={signed(derived.initiative.value)} />

        <SidebarDivider title="Salvamentos" icon={<ShieldCheck className="h-3.5 w-3.5" />} />
        <div className="space-y-0.5">
          {savingThrows.map(({ key, label, value }) => (
            <div key={key} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 py-1">
              <span className="min-w-0">
                <span className="block truncate text-[11px] font-semibold text-[#4f4333]">{label}</span>
                <span className="block truncate text-[9px] uppercase tracking-wide text-[#786a56]">
                  {rankLabel(derived.savingThrows[key].effectiveRank)}
                </span>
              </span>
              <strong className="font-serif text-base text-[#2b241c]">{signed(value)}</strong>
            </div>
          ))}
        </div>

        <SidebarDivider title="Condições" icon={<Skull className="h-3.5 w-3.5" />} />
        <div className="grid grid-cols-3 gap-1.5">
          {[
            ['Ferido', sheet.hitPoints.wounded],
            ['Morrendo', sheet.hitPoints.dying],
            ['Condenado', sheet.hitPoints.doomed],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-[#806e54]/35 bg-[#c1ae8d]/55 px-1.5 py-1 text-center">
              <div className="text-[8px] font-semibold uppercase tracking-wide text-[#665742]">{label}</div>
              <div className="font-serif text-base font-semibold text-[#2d271f]">{value}</div>
            </div>
          ))}
        </div>

        <SidebarDivider title="Defesas especiais" icon={<Sparkles className="h-3.5 w-3.5" />} />
        <div className="space-y-1">
          <CompactDefenseSummary label="Resist." values={sheet.defenses.resistances} />
          <CompactDefenseSummary label="Fraquezas" values={sheet.defenses.weaknesses} />
          <CompactDefenseSummary label="Imunid." values={sheet.defenses.immunities} />
        </div>

        <details className="group rounded-lg border border-[#7657bd]/25 bg-[#c2b093]/55">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#54379a]">
            Ajustes rápidos
            <ChevronDown className="h-3.5 w-3.5 transition group-open:rotate-180" />
          </summary>
          <div className="space-y-2.5 border-t border-[#806e54]/30 p-2.5">
            <div className="grid grid-cols-2 gap-1.5">
              <label className="grid gap-1">
                <span className="text-[9px] uppercase tracking-wide text-[#665742]">PV atual</span>
                <input
                  type="number"
                  min={0}
                  value={sheet.hitPoints.current}
                  className={`${compactInputClass} w-full text-center`}
                  onChange={(event) => onHitPointsChange({
                    current: Math.max(0, parseNumber(event.target.value)),
                    temporary: sheet.hitPoints.temporary,
                  })}
                />
              </label>
              <label className="grid gap-1">
                <span className="text-[9px] uppercase tracking-wide text-[#665742]">PV temporário</span>
                <input
                  type="number"
                  min={0}
                  value={sheet.hitPoints.temporary}
                  className={`${compactInputClass} w-full text-center`}
                  onChange={(event) => onHitPointsChange({
                    current: sheet.hitPoints.current,
                    temporary: Math.max(0, parseNumber(event.target.value)),
                  })}
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <label className="grid gap-1">
                <span className="text-[9px] uppercase tracking-wide text-[#665742]">Ajuste CA</span>
                <input
                  type="number"
                  value={sheet.armorClass.bonus}
                  className={`${compactInputClass} w-full text-center`}
                  onChange={(event) => onArmorClassBonusChange(parseNumber(event.target.value))}
                />
              </label>
              <label className="grid gap-1">
                <span className="text-[9px] uppercase tracking-wide text-[#665742]">Ajuste iniciativa</span>
                <input
                  type="number"
                  value={sheet.initiative.bonus}
                  className={`${compactInputClass} w-full text-center`}
                  onChange={(event) => onInitiativeBonusChange(parseNumber(event.target.value))}
                />
              </label>
            </div>

            <ProficiencyEditor
              label="Percepção"
              total={derived.perception.value}
              value={sheet.perception}
              effectiveRank={derived.perception.effectiveRank}
              onChange={(value) => onProficiencyChange('perception', 'perception', value)}
            />

            <div className="space-y-1.5">
              {savingThrows.map(({ key, label, value: total }) => (
                <ProficiencyEditor
                  key={key}
                  label={label}
                  total={total}
                  value={sheet.savingThrows[key]}
                  effectiveRank={derived.savingThrows[key].effectiveRank}
                  onChange={(value) => onProficiencyChange('savingThrows', key, value)}
                />
              ))}
            </div>

            <div className="space-y-2 rounded-md border border-[#8f7b5d]/35 bg-[#cdbd9f]/55 p-2">
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
            </div>
          </div>
        </details>
      </div>
    </aside>
  )
}
