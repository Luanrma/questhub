import type { Pathfinder2eProficiencyRank, Pathfinder2eProficiencyValue, Pathfinder2eSheet, Pathfinder2eSheetEnvelope } from './types'

type Props = {
  page: number
  sheet: Pathfinder2eSheetEnvelope
  onChangeSheet: (sheet: Pathfinder2eSheetEnvelope) => void
}

export const PATHFINDER_2E_PAGE_TITLES = ['Identidade', 'Atributos', 'Proficiências']

const PROFICIENCY_OPTIONS: Array<{ value: Pathfinder2eProficiencyRank; label: string }> = [
  { value: 0, label: 'Não treinado' },
  { value: 2, label: 'Treinado' },
  { value: 4, label: 'Especialista' },
  { value: 6, label: 'Mestre' },
  { value: 8, label: 'Lendário' },
]

const ATTRIBUTE_LABELS: Array<{ key: keyof Pathfinder2eSheet['attributes']; label: string }> = [
  { key: 'strength', label: 'FOR' },
  { key: 'dexterity', label: 'DES' },
  { key: 'constitution', label: 'CON' },
  { key: 'intelligence', label: 'INT' },
  { key: 'wisdom', label: 'SAB' },
  { key: 'charisma', label: 'CAR' },
]

function toInteger(value: string) {
  const parsed = Number.parseInt(value, 10)
  return Number.isNaN(parsed) ? 0 : parsed
}

function toBoundedInteger(value: string, min?: number) {
  const parsed = toInteger(value)
  if (min === undefined) return parsed
  return Math.max(min, parsed)
}

export function Pathfinder2eSheetForm({ page, sheet, onChangeSheet }: Props) {
  const pathfinder2e = sheet.data.pathfinder2e

  function updatePathfinder2e(update: (current: Pathfinder2eSheet) => Pathfinder2eSheet) {
    onChangeSheet({
      ...sheet,
      data: {
        pathfinder2e: update(pathfinder2e),
      },
    })
  }

  function updateBio(value: string) {
    onChangeSheet({
      ...sheet,
      metadata: {
        ...(sheet.metadata ?? {}),
        bio: value,
      },
    })
  }

  function numberInput(label: string, value: number, onChange: (value: number) => void, min?: number) {
    return (
      <label className="sheet-field">
        <span>{label}</span>
        <input
          type="number"
          inputMode="numeric"
          step={1}
          min={min}
          value={value}
          onChange={(event) => onChange(toBoundedInteger(event.target.value, min))}
        />
      </label>
    )
  }

  function textInput(label: string, value: string, onChange: (value: string) => void) {
    return (
      <label className="sheet-line-field">
        <span>{label}</span>
        <input value={value} onChange={(event) => onChange(event.target.value)} />
      </label>
    )
  }

  function proficiencyInput(label: string, value: Pathfinder2eProficiencyValue, onChange: (value: Pathfinder2eProficiencyValue) => void) {
    return (
      <div className="sheet-proficiency-row">
        <label>
          <span>{label}</span>
          <select
            value={value.rank}
            onChange={(event) => onChange({ ...value, rank: Number(event.target.value) as Pathfinder2eProficiencyRank })}
          >
            {PROFICIENCY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        {numberInput('Valor', value.value, (nextValue) => onChange({ ...value, value: nextValue }))}
      </div>
    )
  }

  if (page === 0) {
    return (
      <>
        <div className="sheet-identity-grid">
          {numberInput('Nível', pathfinder2e.identity.level, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              identity: { ...current.identity, level: value },
            }))
          }, 1)}
          {textInput('Classe', pathfinder2e.identity.className, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              identity: { ...current.identity, className: value },
            }))
          })}
          {textInput('Ancestralidade', pathfinder2e.identity.ancestry, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              identity: { ...current.identity, ancestry: value },
            }))
          })}
          {textInput('Herança', pathfinder2e.identity.heritage, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              identity: { ...current.identity, heritage: value },
            }))
          })}
          <div className="sm:col-span-2">
            {textInput('Background', pathfinder2e.identity.background, (value) => {
              updatePathfinder2e((current) => ({
                ...current,
                identity: { ...current.identity, background: value },
              }))
            })}
          </div>
        </div>

        <label className="sheet-box min-h-52">
          <span className="sheet-box-title">Bio</span>
          <textarea
            value={sheet.metadata?.bio ?? ''}
            onChange={(event) => updateBio(event.target.value)}
            maxLength={2000}
            className="sheet-notes-area min-h-32"
          />
        </label>
      </>
    )
  }

  if (page === 1) {
    return (
      <>
        <div className="sheet-attributes-row">
          {ATTRIBUTE_LABELS.map((attribute) => (
            <label key={attribute.key} className="sheet-attribute-card">
              <span>{attribute.label}</span>
              <input
                type="number"
                min={1}
                step={1}
                value={pathfinder2e.attributes[attribute.key]}
                onChange={(event) => {
                  updatePathfinder2e((current) => ({
                    ...current,
                    attributes: {
                      ...current.attributes,
                      [attribute.key]: toBoundedInteger(event.target.value, 1),
                    },
                  }))
                }}
              />
            </label>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {numberInput('HP máximo', pathfinder2e.hitPoints.maximum, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, maximum: value } }))
          }, 0)}
          {numberInput('HP atual', pathfinder2e.hitPoints.current, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, current: value } }))
          }, 0)}
          {numberInput('HP temporário', pathfinder2e.hitPoints.temporary, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, temporary: value } }))
          }, 0)}
          {numberInput('Ferido', pathfinder2e.hitPoints.wounded, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, wounded: value } }))
          }, 0)}
          {numberInput('Morrendo', pathfinder2e.hitPoints.dying, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, dying: value } }))
          }, 0)}
          {numberInput('Condenado', pathfinder2e.hitPoints.doomed, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, doomed: value } }))
          }, 0)}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {numberInput('Classe de Armadura', pathfinder2e.armorClass, (value) => {
          updatePathfinder2e((current) => ({ ...current, armorClass: value }))
        }, 0)}
        {numberInput('Iniciativa', pathfinder2e.initiative, (value) => {
          updatePathfinder2e((current) => ({ ...current, initiative: value }))
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {proficiencyInput('Percepção', pathfinder2e.perception, (value) => {
          updatePathfinder2e((current) => ({ ...current, perception: value }))
        })}
        {proficiencyInput('Fortitude', pathfinder2e.savingThrows.fortitude, (value) => {
          updatePathfinder2e((current) => ({
            ...current,
            savingThrows: { ...current.savingThrows, fortitude: value },
          }))
        })}
        {proficiencyInput('Reflexos', pathfinder2e.savingThrows.reflex, (value) => {
          updatePathfinder2e((current) => ({
            ...current,
            savingThrows: { ...current.savingThrows, reflex: value },
          }))
        })}
        {proficiencyInput('Vontade', pathfinder2e.savingThrows.will, (value) => {
          updatePathfinder2e((current) => ({
            ...current,
            savingThrows: { ...current.savingThrows, will: value },
          }))
        })}
      </div>

      <label className="sheet-box min-h-52">
        <span className="sheet-box-title">Notas</span>
        <textarea
          value={pathfinder2e.notes}
          onChange={(event) => updatePathfinder2e((current) => ({ ...current, notes: event.target.value }))}
          className="sheet-notes-area min-h-32"
        />
      </label>
    </>
  )
}
