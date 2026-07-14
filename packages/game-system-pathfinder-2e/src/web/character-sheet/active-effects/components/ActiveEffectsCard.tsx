import { useState } from 'react'
import { Trash2, Zap } from 'lucide-react'
import type { useCharacterActiveEffects } from '../hooks/useCharacterActiveEffects'
import type { Pathfinder2eModifierType } from '../types'

type Props = Pick<ReturnType<typeof useCharacterActiveEffects>, 'data' | 'saving' | 'error' | 'addEffect' | 'removeEffect'>

const MODIFIER_TYPE_LABELS: Record<Pathfinder2eModifierType, string> = {
  circumstance: 'Circunstancia',
  status: 'Condicao',
  item: 'Item',
  untyped: 'Sem tipo',
}

/**
 * Alvos oferecidos pelo formulario manual de efeito (secao 2 de skills.md:
 * UI restrita a um Rule Element por efeito, contrato aberto). `'saving-throw'`
 * e o selector real do PF2e para "todos os salvamentos" (auditado em
 * pf2e-master/packs), nao um valor inventado.
 */
const TARGET_OPTIONS: Array<{ selector: string; label: string }> = [
  { selector: 'ac', label: 'CA' },
  { selector: 'fortitude', label: 'Fortitude' },
  { selector: 'reflex', label: 'Reflexo' },
  { selector: 'will', label: 'Vontade' },
  { selector: 'saving-throw', label: 'Todos os salvamentos' },
]

const TARGET_LABEL_BY_SELECTOR = new Map(TARGET_OPTIONS.map((option) => [option.selector, option.label]))

function flatModifierValue(effect: { rules: Array<Record<string, unknown> & { key: string }> }): { selector: string; value: number } | null {
  const rule = effect.rules.find((candidate) => candidate.key === 'FlatModifier' && typeof candidate.value === 'number')
  if (!rule) return null
  return { selector: String(rule.selector), value: rule.value as number }
}

export function ActiveEffectsCard({ data, saving, error, addEffect, removeEffect }: Props) {
  const [label, setLabel] = useState('')
  const [target, setTarget] = useState(TARGET_OPTIONS[0].selector)
  const [type, setType] = useState<Pathfinder2eModifierType>('circumstance')
  const [value, setValue] = useState(1)

  function handleAdd() {
    const trimmedLabel = label.trim()
    if (!trimmedLabel) return

    addEffect({
      id: `effect-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      label: trimmedLabel,
      rules: [{ key: 'FlatModifier', selector: target, type, value }],
    })
    setLabel('')
    setValue(1)
  }

  return (
    <div className="sheet-build-subgroup">
      <strong>Efeitos Ativos</strong>
      {error ? <p className="sheet-error">{error}</p> : null}

      <div className="sheet-proficiency-list">
        {data.effects.map((effect) => {
          const modifier = flatModifierValue(effect)
          const targetLabel = modifier ? (TARGET_LABEL_BY_SELECTOR.get(modifier.selector) ?? modifier.selector) : null
          return (
            <div key={effect.id} className="sheet-proficiency-row">
              <span>{effect.label}</span>
              {modifier !== null ? (
                <span className="sheet-proficiency-total">
                  {targetLabel} {modifier.value >= 0 ? `+${modifier.value}` : modifier.value}
                </span>
              ) : null}
              <button
                type="button"
                className="sheet-icon-button"
                title="Remover efeito"
                disabled={saving}
                onClick={() => removeEffect(effect.id)}
              >
                <Trash2 size={14} />
              </button>
            </div>
          )
        })}
      </div>

      <div className="sheet-build-choice-grid">
        <label className="sheet-build-choice">
          <span>Rotulo</span>
          <input value={label} onChange={(event) => setLabel(event.target.value)} placeholder="Ex.: Shield (magia)" />
        </label>
        <label className="sheet-build-choice">
          <span>Alvo</span>
          <select value={target} onChange={(event) => setTarget(event.target.value)}>
            {TARGET_OPTIONS.map((option) => (
              <option key={option.selector} value={option.selector}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="sheet-build-choice">
          <span>Tipo</span>
          <select value={type} onChange={(event) => setType(event.target.value as Pathfinder2eModifierType)}>
            {(Object.entries(MODIFIER_TYPE_LABELS) as Array<[Pathfinder2eModifierType, string]>).map(([key, modifierLabel]) => (
              <option key={key} value={key}>
                {modifierLabel}
              </option>
            ))}
          </select>
        </label>
        <label className="sheet-build-choice">
          <span>Bonus/Penalidade</span>
          <input
            type="number"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
        </label>
      </div>
      <button type="button" className="sheet-build-apply" disabled={!label.trim() || saving} onClick={handleAdd}>
        <Zap size={14} strokeWidth={1.8} /> Adicionar efeito
      </button>
    </div>
  )
}
