import type {
  Pathfinder2eProficiencyRank,
  Pathfinder2eProficiencyValue,
  Pathfinder2eSheet,
  Pathfinder2eSheetEnvelope,
  Pathfinder2eSkills,
} from './types'

type Props = {
  page: number
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

export const PATHFINDER_2E_PAGE_TITLES = ['Identidade e Status', 'Proficiências']

const UNTRAINED_PROFICIENCY: Pathfinder2eProficiencyValue = {
  rank: 0,
  value: 0,
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

export function Pathfinder2eSheetForm({ page, sheet, onChangeSheet }: Props) {
  const pathfinder2e = withCalculatedSkills(sheet.data.pathfinder2e)

  function updatePathfinder2e(update: (current: Pathfinder2eSheet) => Pathfinder2eSheet) {
    onChangeSheet({
      ...sheet,
      data: {
        pathfinder2e: update(pathfinder2e),
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
      <>
        <section className="sheet-section">
          <div className="sheet-section-title">Identidade</div>
          <div className="sheet-identity-grid">
            {numberInput('Nível', pathfinder2e.identity.level, (value) => {
              updatePathfinder2e((current) => updateAndCalculateSkills(current, {
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
        </section>

        <section className="sheet-section">
          <div className="sheet-section-title">Hit Points e Status</div>
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
            {numberInput('Classe de Armadura', pathfinder2e.armorClass, (value) => {
              updatePathfinder2e((current) => ({ ...current, armorClass: value }))
            }, 0)}
            {numberInput('Iniciativa', pathfinder2e.initiative, (value) => {
              updatePathfinder2e((current) => ({ ...current, initiative: value }))
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
      </>
    )
  }

  return (
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
  )
}
