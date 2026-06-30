import { BadgeCheck, Dumbbell } from 'lucide-react'
import type {
  Pathfinder2eProficiencyRank,
  Pathfinder2eProficiencyValue,
  Pathfinder2eSheet,
  Pathfinder2eSheetEnvelope,
  Pathfinder2eSkills,
} from './types'

type Props = {
  page: number
  characterName: string
  sheet: Pathfinder2eSheetEnvelope
  onChangeSheet: (sheet: Pathfinder2eSheetEnvelope) => void
}

type SkillKey = keyof Pathfinder2eSkills
type AttributeKey = keyof Pathfinder2eSheet['attributes']

type SkillDefinition = {
  key: SkillKey
  label: string
  detail: string
  attribute: AttributeKey
}

export const pathfinder2eCharacterSheetRenderer = {
  systemMark: 'PF2e',
  pages: [
    { title: 'Atributos', Icon: Dumbbell },
    { title: 'Proficiências', Icon: BadgeCheck },
  ],
  renderPage({ page, characterName, sheet, onChangeSheet }: Props) {
    return <Pathfinder2eSheetForm page={page} characterName={characterName} sheet={sheet} onChangeSheet={onChangeSheet} />
  },
}

const UNTRAINED_PROFICIENCY: Pathfinder2eProficiencyValue = {
  rank: 0,
  value: 0,
}

const DEFAULT_GENERAL: Pathfinder2eSheet['general'] = {
  experience: {
    current: 0,
    nextLevel: 0,
  },
  movementMeters: 0,
}

const DEFAULT_SKILLS: Pathfinder2eSkills = {
  acrobatics: UNTRAINED_PROFICIENCY,
  arcana: UNTRAINED_PROFICIENCY,
  athletics: UNTRAINED_PROFICIENCY,
  crafting: UNTRAINED_PROFICIENCY,
  deception: UNTRAINED_PROFICIENCY,
  diplomacy: UNTRAINED_PROFICIENCY,
  intimidation: UNTRAINED_PROFICIENCY,
  medicine: UNTRAINED_PROFICIENCY,
  nature: UNTRAINED_PROFICIENCY,
  occultism: UNTRAINED_PROFICIENCY,
  performance: UNTRAINED_PROFICIENCY,
  religion: UNTRAINED_PROFICIENCY,
  society: UNTRAINED_PROFICIENCY,
  stealth: UNTRAINED_PROFICIENCY,
  survival: UNTRAINED_PROFICIENCY,
  thievery: UNTRAINED_PROFICIENCY,
}

const PROFICIENCY_OPTIONS: Array<{ value: Pathfinder2eProficiencyRank; label: string }> = [
  { value: 0, label: 'Não treinado' },
  { value: 2, label: 'Treinado' },
  { value: 4, label: 'Especialista' },
  { value: 6, label: 'Mestre' },
  { value: 8, label: 'Lendário' },
]

const ATTRIBUTE_LABELS: Array<{ key: AttributeKey; label: string }> = [
  { key: 'strength', label: 'FOR' },
  { key: 'dexterity', label: 'DES' },
  { key: 'constitution', label: 'CON' },
  { key: 'intelligence', label: 'INT' },
  { key: 'wisdom', label: 'SAB' },
  { key: 'charisma', label: 'CAR' },
]

const SKILL_LABELS: SkillDefinition[] = [
  { key: 'acrobatics', label: 'Acrobacia', detail: 'Destreza - equilibrar, manobrar no ar, esgueirar-se', attribute: 'dexterity' },
  { key: 'arcana', label: 'Arcanismo', detail: 'Inteligência - teoria arcana, identificar magia, aprender magias', attribute: 'intelligence' },
  { key: 'athletics', label: 'Atletismo', detail: 'Força - escalar, desarmar, saltar, nadar, empurrar', attribute: 'strength' },
  { key: 'crafting', label: 'Manufatura', detail: 'Inteligência - criar itens, reparar, alquimia', attribute: 'intelligence' },
  { key: 'diplomacy', label: 'Diplomacia', detail: 'Carisma - fazer uma impressão, pedir algo, negociar', attribute: 'charisma' },
  { key: 'deception', label: 'Enganação', detail: 'Carisma - mentir, disfarçar-se, distrair', attribute: 'charisma' },
  { key: 'stealth', label: 'Furtividade', detail: 'Destreza - esconder-se, mover-se furtivamente', attribute: 'dexterity' },
  { key: 'intimidation', label: 'Intimidação', detail: 'Carisma - coagir, desmoralizar', attribute: 'charisma' },
  { key: 'medicine', label: 'Medicina', detail: 'Sabedoria - primeiros socorros, curar doenças, tratar ferimentos', attribute: 'wisdom' },
  { key: 'nature', label: 'Natureza', detail: 'Sabedoria - ambiente, flora, fauna e planos naturais', attribute: 'wisdom' },
  { key: 'occultism', label: 'Ocultismo', detail: 'Inteligência - mistérios antigos, filosofia obscura, planos esotéricos', attribute: 'intelligence' },
  { key: 'performance', label: 'Performance', detail: 'Carisma - atuar, tocar instrumentos', attribute: 'charisma' },
  { key: 'thievery', label: 'Ladroagem', detail: 'Destreza - roubar, desativar dispositivos', attribute: 'dexterity' },
  { key: 'religion', label: 'Religião', detail: 'Sabedoria - magia divina, textos religiosos', attribute: 'wisdom' },
  { key: 'society', label: 'Sociedade', detail: 'Inteligência - cultura, leis, criação de forjas', attribute: 'intelligence' },
  { key: 'survival', label: 'Sobrevivência', detail: 'Sabedoria - rastrear, orientar-se, eliminar rastros', attribute: 'wisdom' },
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

function toBoundedNumber(value: string, min?: number) {
  const parsed = Number.parseFloat(value)
  const number = Number.isNaN(parsed) ? 0 : parsed
  if (min === undefined) return number
  return Math.max(min, number)
}

function formatSigned(value: number) {
  return value >= 0 ? `+${value}` : String(value)
}

function getAttributeModifier(attributeScore: number) {
  return Math.floor((attributeScore - 10) / 2)
}

function getRankBonus(level: number, rank: Pathfinder2eProficiencyRank) {
  if (rank === 0) return 0
  return level + rank
}

function getRankClassName(rank: Pathfinder2eProficiencyRank) {
  if (rank === 8) return 'sheet-proficiency-rank sheet-proficiency-rank-legendary'
  if (rank === 2) return 'sheet-proficiency-rank sheet-proficiency-rank-trained'
  if (rank === 4) return 'sheet-proficiency-rank sheet-proficiency-rank-expert'
  if (rank === 6) return 'sheet-proficiency-rank sheet-proficiency-rank-master'
  return 'sheet-proficiency-rank sheet-proficiency-rank-untrained'
}

function calculateSkillValue(pathfinder2e: Pathfinder2eSheet, skill: SkillDefinition, rank: Pathfinder2eProficiencyRank) {
  return getRankBonus(pathfinder2e.identity.level, rank) + getAttributeModifier(pathfinder2e.attributes[skill.attribute])
}

function calculateSkills(pathfinder2e: Pathfinder2eSheet): Pathfinder2eSkills {
  return SKILL_LABELS.reduce<Pathfinder2eSkills>((skills, skill) => ({
    ...skills,
    [skill.key]: {
      ...skills[skill.key],
      value: calculateSkillValue(pathfinder2e, skill, skills[skill.key].rank),
    },
  }), pathfinder2e.skills)
}

function withDefaultSkills(pathfinder2e: Pathfinder2eSheet): Pathfinder2eSheet {
  return {
    ...pathfinder2e,
    general: {
      ...DEFAULT_GENERAL,
      ...(pathfinder2e.general ?? {}),
      experience: {
        ...DEFAULT_GENERAL.experience,
        ...(pathfinder2e.general?.experience ?? {}),
      },
    },
    skills: {
      ...DEFAULT_SKILLS,
      ...(pathfinder2e.skills ?? {}),
    },
  }
}

function withCalculatedSkills(pathfinder2e: Pathfinder2eSheet): Pathfinder2eSheet {
  const sheetWithSkills = withDefaultSkills(pathfinder2e)
  return {
    ...sheetWithSkills,
    skills: calculateSkills(sheetWithSkills),
  }
}

function updateAndCalculateSkills(current: Pathfinder2eSheet, patch: Partial<Pathfinder2eSheet>): Pathfinder2eSheet {
  const next = withDefaultSkills({
    ...current,
    ...patch,
  })

  return {
    ...next,
    skills: calculateSkills(next),
  }
}

export function Pathfinder2eSheetForm({ page, characterName, sheet, onChangeSheet }: Props) {
  const pathfinder2e = withCalculatedSkills(sheet.data.pathfinder2e)

  function updatePathfinder2e(update: (current: Pathfinder2eSheet) => Pathfinder2eSheet) {
    onChangeSheet({
      ...sheet,
      data: {
        pathfinder2e: update(pathfinder2e),
      },
    })
  }

  function quickNumberInput(
    label: string,
    value: number,
    onChange: (value: number) => void,
    options: { min?: number; decimal?: boolean } = {},
  ) {
    return (
      <label className="sheet-quick-number">
        <span>{label}</span>
        <input
          type="number"
          inputMode={options.decimal ? 'decimal' : 'numeric'}
          step={options.decimal ? 0.1 : 1}
          min={options.min}
          value={value}
          onChange={(event) => {
            const next = options.decimal
              ? toBoundedNumber(event.target.value, options.min)
              : toBoundedInteger(event.target.value, options.min)
            onChange(next)
          }}
        />
      </label>
    )
  }

  function identificationInput(label: string, value: string, onChange: (value: string) => void) {
    return (
      <label className="sheet-line-field">
        <span>{label}</span>
        <input value={value} onChange={(event) => onChange(event.target.value)} />
      </label>
    )
  }

  function summaryValue(label: string, value: string | number) {
    return (
      <div className="sheet-quick-stat">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    )
  }

  function quickSectionTitle(label: string) {
    return <div className="sheet-quick-section-title">{label}</div>
  }

  function renderQuickSummary() {
    const dexterityModifier = getAttributeModifier(pathfinder2e.attributes.dexterity)

    return (
      <aside className="sheet-quick-summary" aria-label="Resumo rapido Pathfinder 2e">
        <div className="sheet-quick-brand">
          <strong>Identificacao rapida</strong>
        </div>

        <div className="sheet-quick-name">{characterName}</div>

        <div className="sheet-quick-level-row">
          {quickNumberInput('Nivel', pathfinder2e.identity.level, (value) => {
            updatePathfinder2e((current) => updateAndCalculateSkills(current, {
              identity: { ...current.identity, level: value },
            }))
          }, { min: 1 })}
          {quickNumberInput('EXP', pathfinder2e.general.experience.current, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              general: {
                ...current.general,
                experience: { ...current.general.experience, current: value },
              },
            }))
          }, { min: 0 })}
          {quickNumberInput('Meta', pathfinder2e.general.experience.nextLevel, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              general: {
                ...current.general,
                experience: { ...current.general.experience, nextLevel: value },
              },
            }))
          }, { min: 0 })}
        </div>

        {quickSectionTitle('Vida')}
        <div className="sheet-quick-health-row sheet-quick-life-row">
          {quickNumberInput('Maxima', pathfinder2e.hitPoints.maximum, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, maximum: value } }))
          }, { min: 0 })}
          {quickNumberInput('Atual', pathfinder2e.hitPoints.current, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, current: value } }))
          }, { min: 0 })}
          {quickNumberInput('Temporaria', pathfinder2e.hitPoints.temporary, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, temporary: value } }))
          }, { min: 0 })}
        </div>

        <div className="sheet-quick-saves-row">
          {quickNumberInput('Ferido', pathfinder2e.hitPoints.wounded, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, wounded: value } }))
          }, { min: 0 })}
          {quickNumberInput('Morrendo', pathfinder2e.hitPoints.dying, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, dying: value } }))
          }, { min: 0 })}
          {quickNumberInput('Condenado', pathfinder2e.hitPoints.doomed, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, doomed: value } }))
          }, { min: 0 })}
        </div>

        <div className="sheet-quick-ac-row">
          {quickNumberInput('AC', pathfinder2e.armorClass, (value) => {
            updatePathfinder2e((current) => ({ ...current, armorClass: value }))
          }, { min: 0 })}
          {summaryValue('Bonus', formatSigned(dexterityModifier))}
        </div>

        <div className="sheet-quick-saves-row">
          {summaryValue('Fortitude', formatSigned(pathfinder2e.savingThrows.fortitude.value))}
          {summaryValue('Reflexo', formatSigned(pathfinder2e.savingThrows.reflex.value))}
          {summaryValue('Vontade', formatSigned(pathfinder2e.savingThrows.will.value))}
        </div>

        <div className="sheet-quick-bottom">
          {summaryValue('Inic.', formatSigned(pathfinder2e.initiative))}
          {summaryValue('Percepcao', formatSigned(pathfinder2e.perception.value))}
          {quickNumberInput('Mov.', pathfinder2e.general.movementMeters, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              general: { ...current.general, movementMeters: value },
            }))
          }, { min: 0, decimal: true })}
        </div>
      </aside>
    )
  }

  function proficiencyInput(
    skill: SkillDefinition,
    value: Pathfinder2eProficiencyValue,
    onChange: (value: Pathfinder2eProficiencyValue) => void,
  ) {
    return (
      <div className="sheet-proficiency-row">
        <span className="sheet-proficiency-help" aria-label={skill.detail} tabIndex={0}>
          ?
          <span className="sheet-proficiency-tooltip" role="tooltip">
            {skill.detail}
          </span>
        </span>
        <label className="sheet-proficiency-total">
          <input type="number" inputMode="numeric" step={1} value={value.value} readOnly aria-label={`Total de ${skill.label}`} />
          <span>{skill.label}</span>
        </label>
        <select
          aria-label={`Rank de ${skill.label}`}
          className={getRankClassName(value.rank)}
          value={value.rank}
          onChange={(event) => onChange({ ...value, rank: Number(event.target.value) as Pathfinder2eProficiencyRank })}
        >
          {PROFICIENCY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  if (page === 0) {
    return (
      <div className="pathfinder-sheet-layout">
        {renderQuickSummary()}
        <div className="pathfinder-sheet-main">
        <section className="sheet-section">
          <div className="sheet-section-title">Identificação</div>
          <div className="sheet-identification-grid">
            {identificationInput('Classe', pathfinder2e.identity.className, (value) => {
              updatePathfinder2e((current) => ({
                ...current,
                identity: { ...current.identity, className: value },
              }))
            })}
            {identificationInput('Ancestralidade', pathfinder2e.identity.ancestry, (value) => {
              updatePathfinder2e((current) => ({
                ...current,
                identity: { ...current.identity, ancestry: value },
              }))
            })}
            {identificationInput('Herança', pathfinder2e.identity.heritage, (value) => {
              updatePathfinder2e((current) => ({
                ...current,
                identity: { ...current.identity, heritage: value },
              }))
            })}
            {identificationInput('Background', pathfinder2e.identity.background, (value) => {
              updatePathfinder2e((current) => ({
                ...current,
                identity: { ...current.identity, background: value },
              }))
            })}
          </div>
        </section>

        <section className="sheet-section">
          <div className="sheet-section-title">Atributos</div>
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
                    const value = toBoundedInteger(event.target.value, 1)
                    updatePathfinder2e((current) => updateAndCalculateSkills(current, {
                      attributes: {
                        ...current.attributes,
                        [attribute.key]: value,
                      },
                    }))
                  }}
                />
              </label>
            ))}
          </div>
        </section>
        </div>
      </div>
    )
  }

  return (
    <div className="pathfinder-sheet-layout">
      {renderQuickSummary()}
      <div className="pathfinder-sheet-main">
        <section className="sheet-section">
          <div className="sheet-section-title">Proficiências</div>
          <div className="sheet-proficiency-list">
            {SKILL_LABELS.map((skill) => (
              <div key={skill.key}>
                {proficiencyInput(skill, pathfinder2e.skills[skill.key], (value) => {
                  updatePathfinder2e((current) => {
                    const next = withDefaultSkills(current)
                    return {
                      ...next,
                      skills: {
                        ...next.skills,
                        [skill.key]: {
                          ...value,
                          value: calculateSkillValue(next, skill, value.rank),
                        },
                      },
                    }
                  })
                })}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
