import { useEffect, useRef, useState } from 'react'
import { BadgeCheck, BookOpen, Compass, Dumbbell, Feather, Pencil, Sparkles, type LucideIcon } from 'lucide-react'
import type { Socket } from 'socket.io-client'
import './Pathfinder2eSheetForm.css'
import { calculateArmorClass, normalizePathfinder2eArmorCategory } from '../../shared/armor-class'
import { applyMaximumHitPointsIncrease, calculateMaximumHitPoints, initializeCurrentHitPoints } from '../../shared/hit-points'
import {
  PATHFINDER_2E_ATTRIBUTE_KEY_BY_SLUG,
  derivePathfinder2eAttributeScoresFromBuildChoices,
} from './domain/buildChoices'
import { toggleArmorClassShieldRaised, useArmorClassEquipment } from './hooks/useArmorClassEquipment'
import type {
  Pathfinder2eArmorClassManual,
  Pathfinder2eArmorProficiencies,
  Pathfinder2eAttributeSlug,
  Pathfinder2eBuildChoices,
  Pathfinder2eCatalogSelection,
  Pathfinder2eCharacterSelection,
  Pathfinder2eProficiencyRank,
  Pathfinder2eProficiencyValue,
  Pathfinder2eSheet,
  Pathfinder2eSheetV2,
  Pathfinder2eSheetEnvelope,
  Pathfinder2eSkills,
} from './types'

type Props = {
  page: number
  characterName: string
  sheet: Pathfinder2eSheetEnvelope
  onChangeSheet: (sheet: Pathfinder2eSheetEnvelope) => void
  identityLocked?: boolean
  isGameMaster?: boolean
  characterId?: string | null
  campaignId?: string | null
  socket?: Socket | null
}

type SkillKey = keyof Pathfinder2eSkills
type AttributeKey = keyof Pathfinder2eSheet['attributes']
type IdentityField = 'class' | 'ancestry' | 'heritage' | 'background'
type ArmorProficiencyKey = keyof Pathfinder2eArmorProficiencies

type Pathfinder2eAttributeChoice = {
  key: string
  options: Pathfinder2eAttributeSlug[]
  count: number
  free: boolean
}

type CharacterOptionSystemData =
  | {
      kind: 'class'
      hitPointsPerLevel: number
      keyAbility: { options: Pathfinder2eAttributeSlug[] }
      trainedSkills: { fixed: string[]; additional: number }
    }
  | {
      kind: 'ancestry'
      hitPoints: number
      languages: { additional: { count: number; options: string[]; custom: string | null } }
      attributes: {
        boosts: Pathfinder2eAttributeChoice[]
        flaws: Pathfinder2eAttributeChoice[]
        alternateBoosts: Pathfinder2eAttributeSlug[]
      }
    }
  | {
      kind: 'heritage'
    }
  | {
      kind: 'background'
      attributes: { boosts: Pathfinder2eAttributeChoice[] }
      trainedSkills: { skills: string[]; lore: string[] }
    }

type CharacterOptionEntry<TSystemData = unknown> = {
  id: string
  kind: IdentityField
  slug: string
  name: string
  source: {
    pack: string
    id: string
    publication?: string
  }
  display: {
    subtitle?: string
    tags: string[]
    stats: Array<{ key: string; label: string; value: string }>
  }
  systemData: TSystemData
}

type CharacterOptionsResponse = {
  entries: CharacterOptionEntry[]
}

type CharacterOptionDetails = CharacterOptionEntry<CharacterOptionSystemData>

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3001'

type CharacterOptionSelectorProps = {
  label: string
  kind: IdentityField
  Icon: LucideIcon
  selection: Pathfinder2eCharacterSelection | null
  ancestryId?: string
  disabled?: boolean
  onCustom: (value: string) => void
  onSelect: (selection: Pathfinder2eCatalogSelection) => void
}

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
  renderPage({ page, characterName, sheet, onChangeSheet, identityLocked, isGameMaster, characterId, campaignId, socket }: Props) {
    return (
      <Pathfinder2eSheetForm
        page={page}
        characterName={characterName}
        sheet={sheet}
        onChangeSheet={onChangeSheet}
        identityLocked={identityLocked}
        isGameMaster={isGameMaster}
        characterId={characterId}
        campaignId={campaignId}
        socket={socket}
      />
    )
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

const DEFAULT_BUILD_CHOICES: Pathfinder2eBuildChoices = {
  ancestry: {
    boosts: {},
    flaws: {},
    alternateBoostsEnabled: false,
    additionalLanguages: [],
    ruleSelections: {},
  },
  heritage: {
    ruleSelections: {},
  },
  background: {
    boosts: {},
    ruleSelections: {},
  },
  class: {
    keyAbility: null,
    trainedSkills: [],
    ruleSelections: {},
  },
}

const ATTRIBUTE_OPTIONS: Array<{ value: Pathfinder2eAttributeSlug; label: string }> = [
  { value: 'str', label: 'FOR' },
  { value: 'dex', label: 'DES' },
  { value: 'con', label: 'CON' },
  { value: 'int', label: 'INT' },
  { value: 'wis', label: 'SAB' },
  { value: 'cha', label: 'CAR' },
]

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

const DEFAULT_ARMOR_PROFICIENCIES: Pathfinder2eArmorProficiencies = {
  unarmored: 2,
  light: 0,
  medium: 0,
  heavy: 0,
}

const DEFAULT_ARMOR_CLASS: Pathfinder2eArmorClassManual = {
  manualAdjustment: 0,
}

const HIT_POINTS_COMBAT_ONLY_TOOLTIP = 'Dano e cura sao aplicados pelo Mestre no editor de HP do token, durante o combate.'

type ArmorProficiencyDefinition = {
  key: ArmorProficiencyKey
  label: string
  detail: string
}

const ARMOR_PROFICIENCY_LABELS: ArmorProficiencyDefinition[] = [
  { key: 'unarmored', label: 'Desarmado', detail: 'Sem armadura equipada' },
  { key: 'light', label: 'Leve', detail: 'Armaduras leves (couro, malha leve)' },
  { key: 'medium', label: 'Média', detail: 'Armaduras médias (couraça, cota de malha)' },
  { key: 'heavy', label: 'Pesada', detail: 'Armaduras pesadas (placas, armadura completa)' },
]

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

function isPathfinder2eSheetV2(pathfinder2e: Pathfinder2eSheet): pathfinder2e is Pathfinder2eSheetV2 {
  return 'buildChoices' in pathfinder2e
}

function selectionName(selection: Pathfinder2eCharacterSelection | null | undefined) {
  return selection?.name ?? ''
}

function isCatalogSelection(selection: Pathfinder2eCharacterSelection | null | undefined): selection is Pathfinder2eCatalogSelection {
  return selection?.source === 'catalog'
}

function customSelection(value: string): Pathfinder2eCharacterSelection | null {
  return value.trim() ? { source: 'custom', name: value } : null
}

function toCatalogSelection(entry: CharacterOptionEntry): Pathfinder2eCatalogSelection {
  return {
    source: 'catalog',
    id: entry.id,
    sourcePack: entry.source.pack,
    sourceId: entry.source.id,
    slug: entry.slug,
    name: entry.name,
  }
}

async function fetchCharacterOptions(kind: IdentityField, query: string, ancestryId?: string): Promise<CharacterOptionEntry[]> {
  const params = new URLSearchParams({
    q: query,
    limit: '8',
    page: '1',
  })

  const endpoint = kind === 'heritage' && ancestryId
    ? `/api/game-systems/PATHFINDER_2E/character-options/heritages?${params.toString()}&ancestryId=${encodeURIComponent(ancestryId)}`
    : `/api/game-systems/PATHFINDER_2E/character-options?${params.toString()}&kind=${kind}`

  const response = await fetch(`${API_URL}${endpoint}`, { credentials: 'include' })
  if (!response.ok) throw new Error('Falha ao carregar opcoes')

  const data = await response.json() as CharacterOptionsResponse
  return data.entries
}

async function fetchCharacterOptionDetails(kind: IdentityField, entryId: string): Promise<CharacterOptionDetails> {
  const response = await fetch(`${API_URL}/api/game-systems/PATHFINDER_2E/character-options/${kind}/${entryId}`, { credentials: 'include' })
  if (!response.ok) throw new Error('Falha ao carregar opcao')
  return await response.json() as CharacterOptionDetails
}

function useCharacterOptionDetails(kind: IdentityField, selection: Pathfinder2eCharacterSelection | null) {
  const [details, setDetails] = useState<CharacterOptionDetails | null>(null)

  useEffect(() => {
    if (!isCatalogSelection(selection)) {
      setDetails(null)
      return
    }

    let active = true
    fetchCharacterOptionDetails(kind, selection.id)
      .then((nextDetails) => {
        if (!active) return
        setDetails(nextDetails.systemData.kind === kind ? nextDetails : null)
      })
      .catch(() => {
        if (!active) return
        setDetails(null)
      })

    return () => {
      active = false
    }
  }, [kind, selection])

  return details
}

function CharacterOptionSelector({ label, kind, Icon, selection, ancestryId, disabled = false, onCustom, onSelect }: CharacterOptionSelectorProps) {
  const [query, setQuery] = useState(selectionName(selection))
  const [entries, setEntries] = useState<CharacterOptionEntry[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [isEditing, setIsEditing] = useState(false)
  const isSearchOpen = isEditing || !selection

  useEffect(() => {
    if (!isEditing) setQuery(selectionName(selection))
  }, [isEditing, selection])

  useEffect(() => {
    if (disabled || !isSearchOpen) {
      setEntries([])
      setStatus('idle')
      return
    }

    let active = true
    const handle = window.setTimeout(() => {
      setStatus('loading')
      fetchCharacterOptions(kind, query.trim(), ancestryId)
        .then((nextEntries) => {
          if (!active) return
          setEntries(nextEntries)
          setStatus('idle')
        })
        .catch(() => {
          if (!active) return
          setEntries([])
          setStatus('error')
        })
    }, 180)

    return () => {
      active = false
      window.clearTimeout(handle)
    }
  }, [ancestryId, disabled, isSearchOpen, kind, query])

  return (
    <div className="sheet-option-selector">
      <span className="sheet-option-icon" aria-hidden="true">
        <Icon size={26} strokeWidth={1.7} />
      </span>
      <span className="sheet-option-label">{label}</span>
      <strong className="sheet-option-name">{selectionName(selection) || '-'}</strong>
      {!disabled ? (
        <button
          type="button"
          className="sheet-option-edit"
          title={`Editar ${label}`}
          aria-label={`Editar ${label}`}
          onClick={() => setIsEditing((current) => !current)}
        >
          <Pencil size={15} strokeWidth={1.8} />
        </button>
      ) : null}
      {isSearchOpen ? (
        <>
          <input
            value={query}
            disabled={disabled}
            aria-label={label}
            onChange={(event) => {
              if (disabled) return
              const nextQuery = event.target.value
              setQuery(nextQuery)
              onCustom(nextQuery)
            }}
          />
          <div className="sheet-option-state">
            {status === 'loading' ? <span>Carregando</span> : null}
            {status === 'error' ? <span>Erro ao buscar</span> : null}
          </div>
          <div className="sheet-option-results">
            {entries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                className="sheet-option-result"
                disabled={disabled}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  if (disabled) return
                  const nextSelection = toCatalogSelection(entry)
                  setQuery(nextSelection.name)
                  setIsEditing(false)
                  onSelect(nextSelection)
                }}
              >
                <strong>{entry.name}</strong>
                <span>{entry.display.subtitle ?? entry.source.publication ?? entry.source.pack}</span>
                {entry.display.tags.length > 0 ? (
                  <small>{entry.display.tags.slice(0, 4).join(' / ')}</small>
                ) : null}
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

function getSheetLevel(pathfinder2e: Pathfinder2eSheet) {
  return pathfinder2e.identity.level
}

function getIdentityText(pathfinder2e: Pathfinder2eSheet, field: IdentityField) {
  if (isPathfinder2eSheetV2(pathfinder2e)) return selectionName(pathfinder2e.identity[field])
  if (field === 'class') return pathfinder2e.identity.className
  return pathfinder2e.identity[field]
}

function getIdentitySelection(pathfinder2e: Pathfinder2eSheet, field: IdentityField) {
  if (isPathfinder2eSheetV2(pathfinder2e)) return pathfinder2e.identity[field]
  return customSelection(getIdentityText(pathfinder2e, field))
}

function getSelectedAncestryId(pathfinder2e: Pathfinder2eSheet) {
  const ancestry = getIdentitySelection(pathfinder2e, 'ancestry')
  return isCatalogSelection(ancestry) ? ancestry.id : undefined
}

function toV2Identity(pathfinder2e: Pathfinder2eSheet): Pathfinder2eSheetV2['identity'] {
  if (isPathfinder2eSheetV2(pathfinder2e)) return pathfinder2e.identity

  return {
    level: pathfinder2e.identity.level,
    ancestry: customSelection(pathfinder2e.identity.ancestry),
    heritage: customSelection(pathfinder2e.identity.heritage),
    background: customSelection(pathfinder2e.identity.background),
    class: customSelection(pathfinder2e.identity.className),
  }
}

function withLevel(pathfinder2e: Pathfinder2eSheet, level: number): Pathfinder2eSheet {
  if (isPathfinder2eSheetV2(pathfinder2e)) {
    return {
      ...pathfinder2e,
      identity: {
        ...pathfinder2e.identity,
        level,
      },
    }
  }

  return {
    ...pathfinder2e,
    identity: {
      ...pathfinder2e.identity,
      level,
    },
  }
}

function withIdentitySelection(
  pathfinder2e: Pathfinder2eSheet,
  field: IdentityField,
  selection: Pathfinder2eCharacterSelection | null,
): Pathfinder2eSheetV2 {
  const identity = toV2Identity(pathfinder2e)

  return {
    ...pathfinder2e,
    identity: {
      ...identity,
      [field]: selection,
    },
    buildChoices: isPathfinder2eSheetV2(pathfinder2e) ? pathfinder2e.buildChoices : DEFAULT_BUILD_CHOICES,
    armorClass: getArmorClassManual(pathfinder2e),
    armorProficiencies: getArmorProficiencies(pathfinder2e),
  }
}

function withIdentityText(pathfinder2e: Pathfinder2eSheet, field: IdentityField, value: string): Pathfinder2eSheetV2 {
  return withIdentitySelection(pathfinder2e, field, customSelection(value))
}

function toV2Sheet(pathfinder2e: Pathfinder2eSheet): Pathfinder2eSheetV2 {
  if (isPathfinder2eSheetV2(pathfinder2e)) return pathfinder2e

  return {
    ...pathfinder2e,
    identity: toV2Identity(pathfinder2e),
    buildChoices: DEFAULT_BUILD_CHOICES,
    armorClass: getArmorClassManual(pathfinder2e),
    armorProficiencies: getArmorProficiencies(pathfinder2e),
  }
}

// Editar Armor Class (ajuste manual ou proficiencia de armadura) sempre
// converge a ficha para o formato V2/V3 completo, igual withIdentityText —
// evita o hibrido invalido "identidade V1 + Armor Class dinamico".
function withArmorClassPatch(
  pathfinder2e: Pathfinder2eSheet,
  patch: Partial<Pick<Pathfinder2eSheetV2, 'armorClass' | 'armorProficiencies'>>,
): Pathfinder2eSheetV2 {
  return { ...toV2Sheet(pathfinder2e), ...patch }
}

function withBuildChoices(
  pathfinder2e: Pathfinder2eSheet,
  update: (choices: Pathfinder2eBuildChoices) => Pathfinder2eBuildChoices,
): Pathfinder2eSheetV2 {
  const next = toV2Sheet(pathfinder2e)

  return {
    ...next,
    buildChoices: update(next.buildChoices),
  }
}

function choiceSlotKey(choice: Pathfinder2eAttributeChoice, index: number) {
  return `${choice.key}:${index}`
}

function splitChoiceList(value: string) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function joinChoiceList(value: string[]) {
  return value.join(', ')
}

function hasBuildChoiceAttributeInputs(choices: Pathfinder2eBuildChoices) {
  return (
    choices.class.keyAbility !== null ||
    Object.keys(choices.ancestry.boosts).length > 0 ||
    Object.keys(choices.ancestry.flaws).length > 0 ||
    Object.keys(choices.background.boosts).length > 0
  )
}

function attributeOptionsFor(choice: Pathfinder2eAttributeChoice) {
  const allowed = new Set(choice.options)
  return ATTRIBUTE_OPTIONS.filter((option) => allowed.has(option.value))
}

function withOptionalAttributeChoice(
  values: Record<string, Pathfinder2eAttributeSlug>,
  slot: string,
  value: Pathfinder2eAttributeSlug | null,
) {
  const next = { ...values }
  if (value) next[slot] = value
  else delete next[slot]
  return next
}

type BuildChoicesPanelProps = {
  pathfinder2e: Pathfinder2eSheet
  onChange: (update: (current: Pathfinder2eSheet) => Pathfinder2eSheet) => void
}

function BuildChoicesPanel({ pathfinder2e, onChange }: BuildChoicesPanelProps) {
  const classDetails = useCharacterOptionDetails('class', getIdentitySelection(pathfinder2e, 'class'))
  const ancestryDetails = useCharacterOptionDetails('ancestry', getIdentitySelection(pathfinder2e, 'ancestry'))
  const backgroundDetails = useCharacterOptionDetails('background', getIdentitySelection(pathfinder2e, 'background'))
  const choices = isPathfinder2eSheetV2(pathfinder2e) ? pathfinder2e.buildChoices : DEFAULT_BUILD_CHOICES
  const classData = classDetails?.systemData.kind === 'class' ? classDetails.systemData : null
  const ancestryData = ancestryDetails?.systemData.kind === 'ancestry' ? ancestryDetails.systemData : null
  const backgroundData = backgroundDetails?.systemData.kind === 'background' ? backgroundDetails.systemData : null
  const suggestedAttributes = derivePathfinder2eAttributeScoresFromBuildChoices(choices)
  const canApplySuggestedAttributes = hasBuildChoiceAttributeInputs(choices)

  function updateChoices(update: (current: Pathfinder2eBuildChoices) => Pathfinder2eBuildChoices) {
    onChange((current) => withBuildChoices(current, update))
  }

  function attributeChoiceInputs(
    title: string,
    values: Record<string, Pathfinder2eAttributeSlug>,
    choicesToRender: Pathfinder2eAttributeChoice[],
    onSelect: (slot: string, value: Pathfinder2eAttributeSlug | null) => void,
  ) {
    if (choicesToRender.length === 0) return null

    return (
      <div className="sheet-build-subgroup">
        <strong>{title}</strong>
        <div className="sheet-build-choice-grid">
          {choicesToRender.flatMap((choice) => Array.from({ length: choice.count }, (_, index) => {
            const slot = choiceSlotKey(choice, index)
            return (
              <label key={slot} className="sheet-build-choice">
                <span>{choice.key}</span>
                <select
                  value={values[slot] ?? ''}
                  onChange={(event) => onSelect(slot, event.target.value ? event.target.value as Pathfinder2eAttributeSlug : null)}
                >
                  <option value="">-</option>
                  {attributeOptionsFor(choice).map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            )
          }))}
        </div>
      </div>
    )
  }

  if (!classData && !ancestryData && !backgroundData) return null

  return (
    <section className="sheet-section">
      <div className="sheet-section-title">Escolhas de criacao</div>
      <div className="sheet-build-grid">
        {classData ? (
          <div className="sheet-build-group">
            <div className="sheet-build-group-title">
              <BookOpen size={22} strokeWidth={1.7} />
              <strong>Classe</strong>
            </div>
            {classData.keyAbility.options.length > 0 ? (
              <label className="sheet-build-choice">
                <span>Atributo chave</span>
                <select
                  value={choices.class.keyAbility ?? ''}
                  onChange={(event) => updateChoices((current) => ({
                    ...current,
                    class: {
                      ...current.class,
                      keyAbility: event.target.value ? event.target.value as Pathfinder2eAttributeSlug : null,
                    },
                  }))}
                >
                  <option value="">-</option>
                  {ATTRIBUTE_OPTIONS.filter((option) => classData.keyAbility.options.includes(option.value)).map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label>
            ) : null}
            {classData.trainedSkills.additional > 0 ? (
              <label className="sheet-build-choice">
                <span>{`Pericias treinadas (${classData.trainedSkills.additional})`}</span>
                <input
                  value={joinChoiceList(choices.class.trainedSkills)}
                  onChange={(event) => updateChoices((current) => ({
                    ...current,
                    class: { ...current.class, trainedSkills: splitChoiceList(event.target.value) },
                  }))}
                />
              </label>
            ) : null}
          </div>
        ) : null}

        {ancestryData ? (
          <div className="sheet-build-group">
            <div className="sheet-build-group-title">
              <Feather size={22} strokeWidth={1.7} />
              <strong>Ancestralidade</strong>
            </div>
            {ancestryData.attributes.alternateBoosts.length > 0 ? (
              <label className="sheet-build-toggle">
                <input
                  type="checkbox"
                  checked={choices.ancestry.alternateBoostsEnabled}
                  onChange={(event) => updateChoices((current) => ({
                    ...current,
                    ancestry: { ...current.ancestry, alternateBoostsEnabled: event.target.checked },
                  }))}
                />
                <span>Boosts alternativos</span>
              </label>
            ) : null}
            {attributeChoiceInputs('Boosts', choices.ancestry.boosts, ancestryData.attributes.boosts, (slot, value) => {
              updateChoices((current) => ({
                ...current,
                ancestry: { ...current.ancestry, boosts: withOptionalAttributeChoice(current.ancestry.boosts, slot, value) },
              }))
            })}
            {attributeChoiceInputs('Falhas', choices.ancestry.flaws, ancestryData.attributes.flaws, (slot, value) => {
              updateChoices((current) => ({
                ...current,
                ancestry: { ...current.ancestry, flaws: withOptionalAttributeChoice(current.ancestry.flaws, slot, value) },
              }))
            })}
            {ancestryData.languages.additional.count > 0 ? (
              <label className="sheet-build-choice">
                <span>{`Idiomas (${ancestryData.languages.additional.count})`}</span>
                <input
                  value={joinChoiceList(choices.ancestry.additionalLanguages)}
                  onChange={(event) => updateChoices((current) => ({
                    ...current,
                    ancestry: { ...current.ancestry, additionalLanguages: splitChoiceList(event.target.value) },
                  }))}
                />
              </label>
            ) : null}
          </div>
        ) : null}

        {backgroundData ? (
          <div className="sheet-build-group">
            <div className="sheet-build-group-title">
              <Sparkles size={22} strokeWidth={1.7} />
              <strong>Background</strong>
            </div>
            {attributeChoiceInputs('Boosts', choices.background.boosts, backgroundData.attributes.boosts, (slot, value) => {
              updateChoices((current) => ({
                ...current,
                background: { ...current.background, boosts: withOptionalAttributeChoice(current.background.boosts, slot, value) },
              }))
            })}
          </div>
        ) : null}

        {canApplySuggestedAttributes ? (
          <div className="sheet-build-group sheet-build-attribute-strip">
            <div className="sheet-build-group-title">
              <Dumbbell size={22} strokeWidth={1.7} />
              <strong>Atributos sugeridos</strong>
            </div>
            <div className="sheet-build-score-grid">
              {ATTRIBUTE_OPTIONS.map((option) => (
                <div key={option.value} className="sheet-build-score">
                  <span>{option.label}</span>
                  <strong>{suggestedAttributes[PATHFINDER_2E_ATTRIBUTE_KEY_BY_SLUG[option.value]]}</strong>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="sheet-build-apply"
              onClick={() => onChange((current) => updateAndCalculateSkills(current, { attributes: suggestedAttributes }))}
            >
              Aplicar atributos
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function calculateSkillValue(pathfinder2e: Pathfinder2eSheet, skill: SkillDefinition, rank: Pathfinder2eProficiencyRank) {
  return getRankBonus(getSheetLevel(pathfinder2e), rank) + getAttributeModifier(pathfinder2e.attributes[skill.attribute])
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

// Fichas antigas (formato pre Armor Class dinamico, ver
// .ai/game_systems/pathfinder_2e/armor_class/specs.md secao 3) podem chegar
// via GET sem `armorProficiencies` e com `armorClass` como numero solto — a
// migracao real acontece no backend na proxima escrita (PUT), mas a ficha
// precisa renderizar corretamente antes disso tambem.
function withDefaultArmorClass(pathfinder2e: Pathfinder2eSheet): Pathfinder2eSheet {
  const hasLegacyArmorClass = typeof pathfinder2e.armorClass === 'number'
  const armorProficiencies = (pathfinder2e as Partial<Pathfinder2eSheetV2>).armorProficiencies

  return {
    ...pathfinder2e,
    armorClass: hasLegacyArmorClass ? DEFAULT_ARMOR_CLASS : pathfinder2e.armorClass,
    armorProficiencies: armorProficiencies ?? DEFAULT_ARMOR_PROFICIENCIES,
  } as Pathfinder2eSheet
}

function updateAndCalculateSkills(current: Pathfinder2eSheet, patch: Partial<Pathfinder2eSheet>): Pathfinder2eSheet {
  const next = withDefaultSkills({
    ...current,
    ...patch,
  } as Pathfinder2eSheet)

  return {
    ...next,
    skills: calculateSkills(next),
  }
}

function getArmorProficiencies(pathfinder2e: Pathfinder2eSheet): Pathfinder2eArmorProficiencies {
  return (pathfinder2e as Partial<Pathfinder2eSheetV2>).armorProficiencies ?? DEFAULT_ARMOR_PROFICIENCIES
}

function getArmorClassManual(pathfinder2e: Pathfinder2eSheet): Pathfinder2eArmorClassManual {
  return typeof pathfinder2e.armorClass === 'number' ? DEFAULT_ARMOR_CLASS : pathfinder2e.armorClass
}

export function Pathfinder2eSheetForm({
  page,
  characterName,
  sheet,
  onChangeSheet,
  identityLocked = false,
  isGameMaster = false,
  characterId = null,
  campaignId = null,
  socket = null,
}: Props) {
  const pathfinder2e = withDefaultArmorClass(withCalculatedSkills(sheet.data.pathfinder2e))
  const { equipment: armorClassEquipment, reload: reloadArmorClassEquipment } = useArmorClassEquipment(campaignId, characterId, socket)

  const classDetailsForHitPoints = useCharacterOptionDetails('class', getIdentitySelection(pathfinder2e, 'class'))
  const ancestryDetailsForHitPoints = useCharacterOptionDetails('ancestry', getIdentitySelection(pathfinder2e, 'ancestry'))
  const classDataForHitPoints = classDetailsForHitPoints?.systemData.kind === 'class' ? classDetailsForHitPoints.systemData : null
  const ancestryDataForHitPoints = ancestryDetailsForHitPoints?.systemData.kind === 'ancestry' ? ancestryDetailsForHitPoints.systemData : null

  const hitPointsLevel = getSheetLevel(pathfinder2e)
  const constitutionModifier = getAttributeModifier(pathfinder2e.attributes.constitution)
  const hpBreakdown = calculateMaximumHitPoints({
    level: hitPointsLevel,
    ancestryHitPoints: ancestryDataForHitPoints?.hitPoints ?? 0,
    classHitPointsPerLevel: classDataForHitPoints?.hitPointsPerLevel ?? 0,
    constitutionModifier,
    manualAdjustment: pathfinder2e.hitPoints.manualAdjustment ?? 0,
  })

  const previousLevelForHitPointsRef = useRef(hitPointsLevel)

  useEffect(() => {
    const leveledUp = hitPointsLevel !== previousLevelForHitPointsRef.current
    previousLevelForHitPointsRef.current = hitPointsLevel

    const previousMaximum = pathfinder2e.hitPoints.maximum
    if (hpBreakdown.maximum === previousMaximum) return

    const nextCurrent = leveledUp
      ? applyMaximumHitPointsIncrease(pathfinder2e.hitPoints.current, previousMaximum, hpBreakdown.maximum)
      : initializeCurrentHitPoints(pathfinder2e.hitPoints.current, previousMaximum, hpBreakdown.maximum)

    updatePathfinder2e((current) => ({
      ...current,
      hitPoints: { ...current.hitPoints, maximum: hpBreakdown.maximum, current: nextCurrent },
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hpBreakdown.maximum])

  function updatePathfinder2e(update: (current: Pathfinder2eSheet) => Pathfinder2eSheet) {
    const nextPathfinder2e = update(pathfinder2e)
    onChangeSheet({
      ...sheet,
      version: isPathfinder2eSheetV2(nextPathfinder2e) ? 3 : sheet.version,
      data: {
        pathfinder2e: nextPathfinder2e,
      },
    })
  }

  function quickNumberInput(
    label: string,
    value: number,
    onChange: (value: number) => void,
    options: { min?: number; decimal?: boolean; disabled?: boolean; title?: string } = {},
  ) {
    return (
      <label className="sheet-quick-number" title={options.title}>
        <span>{label}</span>
        <input
          type="number"
          inputMode={options.decimal ? 'decimal' : 'numeric'}
          step={options.decimal ? 0.1 : 1}
          min={options.min}
          value={value}
          disabled={options.disabled}
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
    const armorClassBreakdown = calculateArmorClass({
      level: getSheetLevel(pathfinder2e),
      dexterityModifier,
      armorProficiencies: getArmorProficiencies(pathfinder2e),
      equippedArmor: armorClassEquipment?.armor
        ? {
            category: normalizePathfinder2eArmorCategory(armorClassEquipment.armor.category),
            itemBonus: armorClassEquipment.armor.itemBonus,
            dexCap: armorClassEquipment.armor.dexCap,
          }
        : null,
      equippedShield: armorClassEquipment?.shield ?? null,
      manualAdjustment: getArmorClassManual(pathfinder2e).manualAdjustment,
    })

    const hpBreakdownTooltip = [
      `${hpBreakdown.ancestryHitPoints} da ancestralidade`,
      `${hpBreakdown.classTotal} da classe (${hpBreakdown.classHitPointsPerLevel}/nivel)`,
      `${hpBreakdown.constitutionTotal} da Constituicao (mod ${hpBreakdown.constitutionModifier})`,
      `${hpBreakdown.manualAdjustment} de ajuste manual`,
    ].join('\n')

    return (
      <aside className="sheet-quick-summary" aria-label="Resumo rapido Pathfinder 2e">
        <div className="sheet-character-portrait" aria-hidden="true">
          <div className="sheet-character-silhouette" />
        </div>

        <div className="sheet-quick-name">{characterName}</div>

        <div className="sheet-quick-core-row">
          {quickNumberInput('Nivel', getSheetLevel(pathfinder2e), (value) => {
            updatePathfinder2e((current) => updateAndCalculateSkills(current, {
              ...withLevel(current, value),
            }))
          }, { min: 1 })}
          <div className="sheet-quick-class">
            <span>Classe</span>
            <strong>{getIdentityText(pathfinder2e, 'class') || '-'}</strong>
          </div>
        </div>

        <div className="sheet-quick-experience-row">
          {quickNumberInput('EXP atual', pathfinder2e.general.experience.current, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              general: {
                ...current.general,
                experience: { ...current.general.experience, current: value },
              },
            }))
          }, { min: 0 })}
          {quickNumberInput('Proximo nivel', pathfinder2e.general.experience.nextLevel, (value) => {
            updatePathfinder2e((current) => ({
              ...current,
              general: {
                ...current.general,
                experience: { ...current.general.experience, nextLevel: value },
              },
            }))
          }, { min: 0 })}
        </div>

        {quickSectionTitle('Defesa')}
        <div className="sheet-quick-defense-row">
          {summaryValue('AC', armorClassBreakdown.total)}
          <div className="sheet-quick-hp-card" title={hpBreakdownTooltip}>
            <span>Vida (HP)</span>
            <strong>{pathfinder2e.hitPoints.current} / {pathfinder2e.hitPoints.maximum}</strong>
            <em>Temporaria {pathfinder2e.hitPoints.temporary}</em>
          </div>
        </div>

        {quickSectionTitle('Vida')}
        <div className="sheet-quick-health-row sheet-quick-life-row">
          {quickNumberInput('Maxima', pathfinder2e.hitPoints.maximum, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, maximum: value } }))
          }, { min: 0, disabled: !isGameMaster, title: hpBreakdownTooltip })}
          {quickNumberInput('Atual', pathfinder2e.hitPoints.current, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, current: value } }))
          }, { min: 0, disabled: true, title: HIT_POINTS_COMBAT_ONLY_TOOLTIP })}
          {quickNumberInput('Temporaria', pathfinder2e.hitPoints.temporary, (value) => {
            updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, temporary: value } }))
          }, { min: 0, disabled: true, title: HIT_POINTS_COMBAT_ONLY_TOOLTIP })}
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

        {quickNumberInput('Ajuste de AC', armorClassBreakdown.manualAdjustment, (value) => {
          updatePathfinder2e((current) => withArmorClassPatch(current, { armorClass: { manualAdjustment: value } }))
        })}

        {quickNumberInput('Ajuste manual de vida', pathfinder2e.hitPoints.manualAdjustment ?? 0, (value) => {
          updatePathfinder2e((current) => ({ ...current, hitPoints: { ...current.hitPoints, manualAdjustment: value } }))
        })}

        {armorClassEquipment?.shield ? (
          <button
            type="button"
            className="sheet-shield-toggle"
            aria-pressed={armorClassEquipment.shield.raised}
            onClick={async () => {
              if (!campaignId || !armorClassEquipment.shield) return
              const ok = await toggleArmorClassShieldRaised(
                campaignId,
                armorClassEquipment.shield.equippedItemId,
                !armorClassEquipment.shield.raised,
              )
              if (ok) void reloadArmorClassEquipment()
            }}
          >
            {armorClassEquipment.shield.raised ? 'Abaixar escudo' : 'Erguer escudo'}
          </button>
        ) : null}

        {quickSectionTitle('Defesas')}
        <div className="sheet-quick-saves-row">
          {summaryValue('Fortitude', formatSigned(pathfinder2e.savingThrows.fortitude.value))}
          {summaryValue('Reflexo', formatSigned(pathfinder2e.savingThrows.reflex.value))}
          {summaryValue('Vontade', formatSigned(pathfinder2e.savingThrows.will.value))}
        </div>

        <div className="sheet-quick-bottom">
          {summaryValue('Inic.', formatSigned(pathfinder2e.initiative))}
          {summaryValue('Percepcao', formatSigned(pathfinder2e.perception.value))}
        </div>

        {quickSectionTitle('Movimento')}
        {quickNumberInput('Terrestre (m)', pathfinder2e.general.movementMeters, (value) => {
          updatePathfinder2e((current) => ({
            ...current,
            general: { ...current.general, movementMeters: value },
          }))
        }, { min: 0, decimal: true })}
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

  function armorProficiencyInput(
    definition: ArmorProficiencyDefinition,
    rank: Pathfinder2eProficiencyRank,
    onChange: (rank: Pathfinder2eProficiencyRank) => void,
  ) {
    const bonus = getRankBonus(getSheetLevel(pathfinder2e), rank)

    return (
      <div className="sheet-proficiency-row">
        <span className="sheet-proficiency-help" aria-label={definition.detail} tabIndex={0}>
          ?
          <span className="sheet-proficiency-tooltip" role="tooltip">
            {definition.detail}
          </span>
        </span>
        <label className="sheet-proficiency-total">
          <input type="number" inputMode="numeric" step={1} value={bonus} readOnly aria-label={`Bonus de ${definition.label}`} />
          <span>{definition.label}</span>
        </label>
        <select
          aria-label={`Rank de ${definition.label}`}
          className={getRankClassName(rank)}
          value={rank}
          onChange={(event) => onChange(Number(event.target.value) as Pathfinder2eProficiencyRank)}
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
      <div className="pathfinder-sheet pathfinder-sheet-layout">
        {renderQuickSummary()}
        <div className="pathfinder-sheet-main">
        <section className="sheet-section">
          <div className="sheet-section-title">Identificação</div>
          <div className="sheet-identification-grid">
            <CharacterOptionSelector
              label="Classe"
              kind="class"
              Icon={BookOpen}
              selection={getIdentitySelection(pathfinder2e, 'class')}
              disabled={identityLocked}
              onCustom={(value) => updatePathfinder2e((current) => withIdentityText(current, 'class', value))}
              onSelect={(selection) => updatePathfinder2e((current) => withIdentitySelection(current, 'class', selection))}
            />
            <CharacterOptionSelector
              label="Ancestralidade"
              kind="ancestry"
              Icon={Feather}
              selection={getIdentitySelection(pathfinder2e, 'ancestry')}
              disabled={identityLocked}
              onCustom={(value) => updatePathfinder2e((current) => withIdentityText(current, 'ancestry', value))}
              onSelect={(selection) => updatePathfinder2e((current) => withIdentitySelection(current, 'ancestry', selection))}
            />
            <CharacterOptionSelector
              label="Herança"
              kind="heritage"
              Icon={Compass}
              selection={getIdentitySelection(pathfinder2e, 'heritage')}
              ancestryId={getSelectedAncestryId(pathfinder2e)}
              disabled={identityLocked}
              onCustom={(value) => updatePathfinder2e((current) => withIdentityText(current, 'heritage', value))}
              onSelect={(selection) => updatePathfinder2e((current) => withIdentitySelection(current, 'heritage', selection))}
            />
            <CharacterOptionSelector
              label="Background"
              kind="background"
              Icon={Sparkles}
              selection={getIdentitySelection(pathfinder2e, 'background')}
              disabled={identityLocked}
              onCustom={(value) => updatePathfinder2e((current) => withIdentityText(current, 'background', value))}
              onSelect={(selection) => updatePathfinder2e((current) => withIdentitySelection(current, 'background', selection))}
            />
          </div>
        </section>

        <BuildChoicesPanel pathfinder2e={pathfinder2e} onChange={updatePathfinder2e} />

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
    <div className="pathfinder-sheet pathfinder-sheet-layout">
      {renderQuickSummary()}
      <div className="pathfinder-sheet-main">
        <section className="sheet-section">
          <div className="sheet-section-title">Defesas de Armadura</div>
          <div className="sheet-proficiency-list">
            {ARMOR_PROFICIENCY_LABELS.map((definition) => (
              <div key={definition.key}>
                {armorProficiencyInput(definition, getArmorProficiencies(pathfinder2e)[definition.key], (rank) => {
                  updatePathfinder2e((current) => withArmorClassPatch(current, {
                    armorProficiencies: {
                      ...getArmorProficiencies(current),
                      [definition.key]: rank,
                    },
                  }))
                })}
              </div>
            ))}
          </div>
        </section>

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
