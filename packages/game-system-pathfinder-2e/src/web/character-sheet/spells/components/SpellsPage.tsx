import { useEffect, useMemo, useState } from 'react'
import { BookOpen, Check, ChevronDown, Plus, Save, Search, Sparkles, Trash2, X } from 'lucide-react'
import { Pathfinder2eSpellSheetView } from '../../../spells/Pathfinder2eSpellSheetView'
import { useCharacterSpellbook } from '../hooks/useCharacterSpellbook'
import { SpellSearchPicker } from './SpellSearchPicker'
import { SuggestedEntryCard } from './SuggestedEntryCard'
import {
  SPELLCASTING_CATEGORY_LABELS,
  addKnownSpell,
  addPreparedSlot,
  createSpellcastingEntry,
  removePreparedSlot,
  setPreparedSpell,
  setSlotMax,
  toggleExpended,
  withEntry,
} from '../domain/spellbookHelpers'
import type {
  Pathfinder2eCharacterSpellbookData,
  Pathfinder2eRitualEntry,
  Pathfinder2eSpellSearchResult,
  Pathfinder2eSpellcastingCategory,
  Pathfinder2eSpellcastingEntry,
} from '../types'

type Props = {
  characterId: string | null
  campaignId: string | null
  classSelectionId?: string | null
  level?: number
}

type SpellSheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

type CampaignSpellEntry = {
  id: string
  system: string
  category: 'spell' | 'ritual'
  name: string
  display: {
    subtitle?: string
    level?: { label: string; value: string }
    stats: Array<{ key: string; label: string; value: string }>
    tags: string[]
    sheet?: { sections: Array<{ key: string; title: string; entries: SpellSheetEntry[] }> }
  }
}

type SpellRow =
  | {
      kind: 'prepared'
      key: string
      entryId: string
      entryName: string
      category: Pathfinder2eSpellcastingCategory
      tradition: string
      ability: string
      rank: number
      spellId: string | null
      name: string | null
      expended: boolean
      slotIndex: number
    }
  | {
      kind: 'known'
      key: string
      entryId: string
      entryName: string
      category: Pathfinder2eSpellcastingCategory
      tradition: string
      ability: string
      rank: number
      spellId: string
      name: string
    }
  | {
      kind: 'innate'
      key: string
      entryId: string
      entryName: string
      category: Pathfinder2eSpellcastingCategory
      tradition: string
      ability: string
      rank: number
      spellId: string
      name: string
      uses: string
    }
  | {
      kind: 'ritual'
      key: string
      entryId: null
      entryName: 'Rituais'
      category: 'RITUAL'
      tradition: ''
      ability: ''
      rank: number
      spellId: string
      name: string
    }

const CATEGORY_OPTIONS: Array<[Pathfinder2eSpellcastingCategory, string]> = Object.entries(SPELLCASTING_CATEGORY_LABELS) as Array<[
  Pathfinder2eSpellcastingCategory,
  string,
]>

const TRADITION_OPTIONS = ['arcane', 'divine', 'occult', 'primal'] as const
const ABILITY_OPTIONS = ['int', 'wis', 'cha'] as const
const PROFICIENCY_LABELS: Record<number, string> = {
  0: 'Nao treinado',
  2: 'Treinado',
  4: 'Especialista',
  6: 'Mestre',
  8: 'Lendario',
}

function titleCase(value: string) {
  if (!value) return '-'
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function rankLabel(rank: number) {
  return rank === 0 ? 'Truques' : `Rank ${rank}`
}

function spellRankFromSearch(result: Pathfinder2eSpellSearchResult) {
  const parsed = Number(result.rank)
  return Number.isFinite(parsed) ? parsed : 1
}

function entryResourceSummary(entry: Pathfinder2eSpellcastingEntry, spellbook: Pathfinder2eCharacterSpellbookData) {
  const focusPool = spellbook.focusPool ?? entry.focusPool
  if (entry.category === 'FOCUS' && focusPool) return `${focusPool.points} / ${focusPool.max} foco`
  if (entry.category === 'PREPARED') {
    const total = entry.prepared.length
    const available = entry.prepared.filter((slot) => !slot.expended).length
    return `${available} / ${total} preparados`
  }
  if (entry.category === 'SPONTANEOUS') {
    const max = entry.slots.reduce((total, slot) => total + slot.max, 0)
    const used = entry.slots.reduce((total, slot) => total + (slot.used ?? 0), 0)
    return `${Math.max(0, max - used)} / ${max} slots`
  }
  if (entry.category === 'INNATE') {
    const limited = entry.innateUses.filter((spell) => spell.usesPerDay !== 'at-will')
    if (!limited.length) return 'A vontade'
    const max = limited.reduce((total, spell) => total + Number(spell.usesPerDay), 0)
    const used = limited.reduce((total, spell) => total + spell.used, 0)
    return `${Math.max(0, max - used)} / ${max} usos`
  }
  return `${entry.known.length} magias`
}

function addEntryToSpellbook(
  spellbook: Pathfinder2eCharacterSpellbookData,
  entry: Pathfinder2eSpellcastingEntry,
): Pathfinder2eCharacterSpellbookData {
  const focusPool =
    entry.category === 'FOCUS' && !spellbook.focusPool ? { points: 0, max: 1 } : spellbook.focusPool

  return {
    ...spellbook,
    ...(focusPool ? { focusPool } : {}),
    entries: [...spellbook.entries, entry],
  }
}

function rowsForSpellbook(spellbook: Pathfinder2eCharacterSpellbookData): SpellRow[] {
  const rows: SpellRow[] = []

  for (const entry of spellbook.entries) {
    if (entry.category === 'PREPARED') {
      for (const slot of [...entry.prepared].sort((left, right) => right.rank - left.rank || left.slotIndex - right.slotIndex)) {
        rows.push({
          kind: 'prepared',
          key: `${entry.id}:prepared:${slot.rank}:${slot.slotIndex}`,
          entryId: entry.id,
          entryName: entry.name,
          category: entry.category,
          tradition: entry.tradition,
          ability: entry.ability,
          rank: slot.rank,
          spellId: slot.spellId,
          name: slot.name,
          expended: slot.expended,
          slotIndex: slot.slotIndex,
        })
      }
      continue
    }

    if (entry.category === 'INNATE') {
      for (const spell of entry.innateUses) {
        rows.push({
          kind: 'innate',
          key: `${entry.id}:innate:${spell.spellId}`,
          entryId: entry.id,
          entryName: entry.name,
          category: entry.category,
          tradition: entry.tradition,
          ability: entry.ability,
          rank: 1,
          spellId: spell.spellId,
          name: spell.name,
          uses: spell.usesPerDay === 'at-will' ? 'A vontade' : `${Math.max(0, spell.usesPerDay - spell.used)} / ${spell.usesPerDay}`,
        })
      }
      continue
    }

    for (const spell of entry.known) {
      rows.push({
        kind: 'known',
        key: `${entry.id}:known:${spell.spellId}`,
        entryId: entry.id,
        entryName: entry.name,
        category: entry.category,
        tradition: entry.tradition,
        ability: entry.ability,
        rank: spell.rank,
        spellId: spell.spellId,
        name: spell.name,
      })
    }
  }

  for (const ritual of spellbook.rituals) {
    rows.push({
      kind: 'ritual',
      key: `ritual:${ritual.spellId}`,
      entryId: null,
      entryName: 'Rituais',
      category: 'RITUAL',
      tradition: '',
      ability: '',
      rank: 0,
      spellId: ritual.spellId,
      name: ritual.name,
    })
  }

  return rows.sort((left, right) => right.rank - left.rank || left.name?.localeCompare(right.name ?? '') || 0)
}

function SpellbookOverview({ spellbook }: { spellbook: Pathfinder2eCharacterSpellbookData }) {
  return (
    <div className="spellbook-overview-grid">
      {spellbook.entries.map((entry) => (
        <div key={entry.id} className="spellbook-overview-card">
          <div className="spellbook-overview-title">
            <Sparkles size={16} strokeWidth={1.7} />
            <strong>{entry.name}</strong>
          </div>
          <div className="spellbook-overview-lines">
            <span>Tradicao</span>
            <strong>{titleCase(entry.tradition)}</strong>
            <span>Categoria</span>
            <strong>{SPELLCASTING_CATEGORY_LABELS[entry.category]}</strong>
            <span>Proficiencia</span>
            <strong>{PROFICIENCY_LABELS[entry.proficiencyRank] ?? `+${entry.proficiencyRank}`}</strong>
            <span>Recurso</span>
            <strong>{entryResourceSummary(entry, spellbook)}</strong>
          </div>
        </div>
      ))}
      {spellbook.entries.length === 0 ? <div className="spellbook-empty">Nenhuma entrada de conjuracao configurada.</div> : null}
    </div>
  )
}

function SpellRowButton({
  row,
  selected,
  onSelect,
  onOpenSheet,
  onToggleExpended,
  onClearPrepared,
}: {
  row: SpellRow
  selected: boolean
  onSelect: () => void
  onOpenSheet: () => void
  onToggleExpended: () => void
  onClearPrepared: () => void
}) {
  const hasSpell = Boolean(row.spellId && row.name)
  const categoryLabel = SPELLCASTING_CATEGORY_LABELS[row.category]

  return (
    <div className={selected ? 'spellbook-row spellbook-row-selected' : 'spellbook-row'}>
      <button type="button" className="spellbook-row-main" onClick={onSelect}>
        <span className="spellbook-row-rank">{rankLabel(row.rank)}</span>
        <span className="spellbook-row-name">{row.name ?? 'Slot vazio'}</span>
        <span className="spellbook-row-meta">
          {categoryLabel}
          {row.kind === 'prepared' ? ` - Slot ${row.slotIndex + 1}` : ''}
          {row.kind === 'innate' ? ` - ${row.uses}` : ''}
        </span>
      </button>
      <div className="spellbook-row-actions">
        {row.kind === 'prepared' && hasSpell ? (
          <button
            type="button"
            className={row.expended ? 'spellbook-small-button spellbook-small-button-muted' : 'spellbook-small-button'}
            title={row.expended ? 'Marcar disponivel' : 'Marcar gasto'}
            onClick={onToggleExpended}
          >
            <Check size={14} />
          </button>
        ) : null}
        {hasSpell ? (
          <button type="button" className="spellbook-small-button" title="Abrir ficha da magia" onClick={onOpenSheet}>
            <BookOpen size={14} />
          </button>
        ) : null}
        {row.kind === 'prepared' && hasSpell ? (
          <button type="button" className="spellbook-small-button" title="Limpar slot" onClick={onClearPrepared}>
            <X size={14} />
          </button>
        ) : null}
      </div>
    </div>
  )
}

function SpellList({
  rows,
  selectedKey,
  query,
  onQueryChange,
  entries,
  selectedEntryId,
  onSelectedEntryChange,
  onOpenPreparation,
  onSelect,
  onOpenSheet,
  onTogglePrepared,
  onClearPrepared,
}: {
  rows: SpellRow[]
  selectedKey: string | null
  query: string
  onQueryChange: (query: string) => void
  entries: Pathfinder2eSpellcastingEntry[]
  selectedEntryId: string
  onSelectedEntryChange: (entryId: string) => void
  onOpenPreparation: () => void
  onSelect: (row: SpellRow) => void
  onOpenSheet: (spellId: string) => void
  onTogglePrepared: (row: Extract<SpellRow, { kind: 'prepared' }>) => void
  onClearPrepared: (row: Extract<SpellRow, { kind: 'prepared' }>) => void
}) {
  const filteredRows = rows.filter(
    (row) =>
      (selectedEntryId === 'all' || row.entryId === selectedEntryId) &&
      (row.name ?? '').toLowerCase().includes(query.trim().toLowerCase()),
  )
  const groups = new Map<string, SpellRow[]>()
  for (const row of filteredRows) {
    const key = row.kind === 'ritual' ? 'Rituais' : rankLabel(row.rank)
    groups.set(key, [...(groups.get(key) ?? []), row])
  }

  return (
    <section className="spellbook-panel spellbook-list-panel">
      <div className="spellbook-panel-header">
        <strong>Magias preparadas</strong>
        <span>{filteredRows.filter((row) => row.name).length}</span>
      </div>
      <div className="spellbook-list-toolbar">
        <label className="spellbook-search">
          <Search size={15} />
          <input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar magia preparada..." />
        </label>
        <select className="spellbook-list-select" value={selectedEntryId} onChange={(event) => onSelectedEntryChange(event.target.value)}>
          <option value="all">Todas as listas</option>
          {entries.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.name}
            </option>
          ))}
        </select>
        <button type="button" className="spellbook-outline-button" onClick={onOpenPreparation}>
          <Plus size={14} />
          Preparar
        </button>
      </div>

      <div className="spellbook-rank-groups">
        {[...groups.entries()].map(([rank, rankRows]) => (
          <div key={rank} className="spellbook-rank-group">
            <div className="spellbook-rank-heading">
              <span>{rank}</span>
              <small>{rankRows.filter((row) => row.name).length}</small>
            </div>
            {rankRows.map((row) => (
              <SpellRowButton
                key={row.key}
                row={row}
                selected={row.key === selectedKey}
                onSelect={() => onSelect(row)}
                onOpenSheet={() => row.spellId && onOpenSheet(row.spellId)}
                onToggleExpended={() => row.kind === 'prepared' && onTogglePrepared(row)}
                onClearPrepared={() => row.kind === 'prepared' && onClearPrepared(row)}
              />
            ))}
          </div>
        ))}
        {filteredRows.length === 0 ? <div className="spellbook-empty">Nenhuma magia encontrada.</div> : null}
      </div>
    </section>
  )
}

function SpellDetailPanel({
  row,
  campaignId,
  onOpenSheet,
}: {
  row: SpellRow | null
  campaignId: string | null
  onOpenSheet: (spellId: string) => void
}) {
  const [spell, setSpell] = useState<CampaignSpellEntry | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!campaignId || !row?.spellId) {
      setSpell(null)
      setLoading(false)
      return
    }

    let cancelled = false
    setLoading(true)
    fetch(`/api/campaigns/${campaignId}/spells/${encodeURIComponent(row.spellId)}`, { credentials: 'include' })
      .then(async (response) => (response.ok ? ((await response.json()) as CampaignSpellEntry) : null))
      .then((data) => {
        if (!cancelled) setSpell(data)
      })
      .catch(() => {
        if (!cancelled) setSpell(null)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, row?.spellId])

  if (!row) {
    return (
      <section className="spellbook-panel spellbook-detail-panel">
        <div className="spellbook-empty">Selecione uma magia para ver os dados de jogo.</div>
      </section>
    )
  }

  const hasSpell = Boolean(row.spellId && row.name)
  const tags = spell?.display.tags.slice(0, 4) ?? []
  const sheetEntries = spell?.display.sheet?.sections.flatMap((section) => section.entries) ?? []
  const statEntries = spell?.display.stats ?? []
  const stat = (keys: string[], labels: string[]) =>
    [...statEntries, ...sheetEntries].find((entry) => keys.includes(entry.key) || labels.some((label) => entry.label.toLowerCase().includes(label)))?.value
  const defense = stat(['defense', 'save', 'savingThrow'], ['salv', 'teste'])
  const action = stat(['time', 'cast', 'casting'], ['lanc', 'tempo'])
  const range = stat(['range'], ['alcance'])
  const target = stat(['target', 'area'], ['alvo', 'area'])
  const duration = stat(['duration'], ['duracao'])
  const effect = sheetEntries.find((entry) => ['effect', 'description', 'summary'].includes(entry.key) || entry.label.toLowerCase().includes('efeito'))?.value

  return (
    <section className="spellbook-panel spellbook-detail-panel">
      <div className="spellbook-detail-heading">
        <div className="spellbook-detail-title-row">
          <div className="spellbook-spell-thumb">
            <Sparkles size={20} />
          </div>
          <div>
            <span>{rankLabel(row.rank)}</span>
            <strong>{row.name ?? 'Slot vazio'}</strong>
          </div>
        </div>
        {hasSpell ? (
          <button type="button" className="spellbook-small-button" title="Abrir ficha completa" disabled={!campaignId} onClick={() => row.spellId && onOpenSheet(row.spellId)}>
            <BookOpen size={15} />
          </button>
        ) : null}
      </div>

      {tags.length > 0 ? (
        <div className="spellbook-tag-row">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      ) : null}

      <div className="spellbook-detail-grid">
        <span>Entrada</span>
        <strong>{row.entryName}</strong>
        <span>Categoria</span>
        <strong>{SPELLCASTING_CATEGORY_LABELS[row.category]}</strong>
        <span>Tradicao</span>
        <strong>{stat(['traditions', 'tradition'], ['tradicao']) ?? (row.tradition ? titleCase(row.tradition) : '-')}</strong>
        <span>Atributo</span>
        <strong>{row.ability ? row.ability.toUpperCase() : '-'}</strong>
        <span>Lancamento</span>
        <strong>{action ?? '-'}</strong>
        <span>Alcance</span>
        <strong>{range ?? target ?? '-'}</strong>
        <span>Teste</span>
        <strong>{defense ?? '-'}</strong>
        <span>Duracao</span>
        <strong>{duration ?? '-'}</strong>
        {row.kind === 'prepared' ? (
          <>
            <span>Preparado em</span>
            <strong>{`${row.entryName} (${rankLabel(row.rank)})`}</strong>
            <span>Slot usado</span>
            <strong>{row.name ? (row.expended ? 'Gasta' : 'Preparada') : 'Vazio'}</strong>
          </>
        ) : null}
        {row.kind === 'innate' ? (
          <>
            <span>Usos</span>
            <strong>{row.uses}</strong>
          </>
        ) : null}
      </div>

      <div className="spellbook-effect-box">
        <span>Efeito</span>
        <p>{loading ? 'Carregando detalhes...' : effect ?? 'Abra a ficha completa para consultar a regra e descricao detalhada da magia.'}</p>
      </div>

      <div className="spellbook-detail-actions">
        <button type="button" className="spellbook-outline-button" disabled={!campaignId || !row.spellId} onClick={() => row.spellId && onOpenSheet(row.spellId)}>
          Abrir ficha completa
        </button>
        <button type="button" className="spellbook-cast-button" disabled>
          Conjurar
        </button>
        {row.kind === 'prepared' ? (
          <button type="button" className="spellbook-outline-button" disabled>
            {row.expended ? 'Marcar preparado' : 'Preparado'}
          </button>
        ) : null}
      </div>
    </section>
  )
}

function NewEntryPanel({ onAdd }: { onAdd: (entry: Pathfinder2eSpellcastingEntry) => void }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [category, setCategory] = useState<Pathfinder2eSpellcastingCategory>('PREPARED')
  const [tradition, setTradition] = useState<(typeof TRADITION_OPTIONS)[number]>('arcane')
  const [ability, setAbility] = useState<(typeof ABILITY_OPTIONS)[number]>('int')

  return (
    <div className="spellbook-manage-card">
      <button type="button" className="spellbook-manage-toggle" onClick={() => setOpen((current) => !current)}>
        <Plus size={15} />
        Nova entrada
        <ChevronDown size={14} />
      </button>
      {open ? (
        <div className="spellbook-manage-body">
          <label className="spellbook-field">
            <span>Nome</span>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Conjuracao de Mago" />
          </label>
          <div className="spellbook-field-grid">
            <label className="spellbook-field">
              <span>Categoria</span>
              <select value={category} onChange={(event) => setCategory(event.target.value as Pathfinder2eSpellcastingCategory)}>
                {CATEGORY_OPTIONS.filter(([value]) => value !== 'ITEMS').map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label className="spellbook-field">
              <span>Tradicao</span>
              <select value={tradition} onChange={(event) => setTradition(event.target.value as (typeof TRADITION_OPTIONS)[number])}>
                {TRADITION_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {titleCase(option)}
                  </option>
                ))}
              </select>
            </label>
            <label className="spellbook-field">
              <span>Atributo</span>
              <select value={ability} onChange={(event) => setAbility(event.target.value as (typeof ABILITY_OPTIONS)[number])}>
                {ABILITY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option.toUpperCase()}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="button"
            className="spellbook-outline-button"
            disabled={!name.trim()}
            onClick={() => {
              onAdd(createSpellcastingEntry(name.trim(), category, tradition, ability))
              setName('')
              setOpen(false)
            }}
          >
            <Plus size={14} />
            Adicionar
          </button>
        </div>
      ) : null}
    </div>
  )
}

function PreparationPanel({
  open,
  entries,
  campaignId,
  selectedEntryId,
  onSelectedEntryChange,
  onChangeEntry,
  onRemoveEntry,
  onAddEntry,
}: {
  open: boolean
  entries: Pathfinder2eSpellcastingEntry[]
  campaignId: string | null
  selectedEntryId: string
  onSelectedEntryChange: (entryId: string) => void
  onChangeEntry: (entry: Pathfinder2eSpellcastingEntry) => void
  onRemoveEntry: (entryId: string) => void
  onAddEntry: (entry: Pathfinder2eSpellcastingEntry) => void
}) {
  const [slotRank, setSlotRank] = useState(1)
  const [slotToPrepare, setSlotToPrepare] = useState<string | null>(null)
  const entry = entries.find((candidate) => candidate.id === selectedEntryId) ?? entries[0] ?? null

  useEffect(() => {
    if (!entry && entries[0]) onSelectedEntryChange(entries[0].id)
  }, [entries, entry, onSelectedEntryChange])

  if (!open) return null

  function addKnown(result: Pathfinder2eSpellSearchResult) {
    if (!entry) return
    if (entry.known.some((spell) => spell.spellId === result.id)) return
    onChangeEntry(addKnownSpell(entry, { spellId: result.id, name: result.name, rank: spellRankFromSearch(result) }))
  }

  return (
    <section className="spellbook-preparation-panel">
      <div className="spellbook-preparation-header">
        <div>
          <span>Preparacao</span>
          <strong>{entry?.name ?? 'Nenhuma entrada'}</strong>
        </div>
        <select value={entry?.id ?? ''} onChange={(event) => onSelectedEntryChange(event.target.value)} disabled={entries.length === 0}>
          {entries.map((candidate) => (
            <option key={candidate.id} value={candidate.id}>
              {candidate.name}
            </option>
          ))}
        </select>
      </div>

      <div className="spellbook-preparation-grid">
        <div className="spellbook-preparation-column">
          <NewEntryPanel onAdd={onAddEntry} />
          {entry ? (
            <>
              <div className="spellbook-subtitle">Dados da entrada</div>
              <div className="spellbook-field-grid">
                <label className="spellbook-field">
                  <span>Prof.</span>
                  <select value={entry.proficiencyRank} onChange={(event) => onChangeEntry({ ...entry, proficiencyRank: Number(event.target.value) })}>
                    {[0, 2, 4, 6, 8].map((rank) => (
                      <option key={rank} value={rank}>
                        {PROFICIENCY_LABELS[rank]}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="spellbook-field">
                  <span>Tradicao</span>
                  <strong>{titleCase(entry.tradition)}</strong>
                </label>
                <label className="spellbook-field">
                  <span>Atributo</span>
                  <strong>{entry.ability.toUpperCase()}</strong>
                </label>
              </div>

              <div className="spellbook-subtitle">Adicionar ao livro/repertorio</div>
              <SpellSearchPicker campaignId={campaignId} category="spell" onPick={addKnown} compact />

              <div className="spellbook-known-list">
                {entry.known.map((spell) => (
                  <span key={spell.spellId}>
                    {spell.name}
                    <small>{rankLabel(spell.rank)}</small>
                  </span>
                ))}
                {entry.known.length === 0 ? <em>Nenhuma magia conhecida nesta entrada.</em> : null}
              </div>
            </>
          ) : null}
        </div>

        <div className="spellbook-preparation-column">
          {entry?.category === 'PREPARED' ? (
            <>
              <div className="spellbook-subtitle">Slots preparados</div>
              <div className="spellbook-slot-add-row">
                <label className="spellbook-field">
                  <span>Novo slot</span>
                  <input type="number" min={0} max={10} value={slotRank} onChange={(event) => setSlotRank(Number(event.target.value))} />
                </label>
                <button type="button" className="spellbook-outline-button" onClick={() => onChangeEntry(addPreparedSlot(entry, slotRank))}>
                  <Plus size={14} />
                  Adicionar slot
                </button>
              </div>

              <div className="spellbook-prep-ranks">
                {[...new Set(entry.prepared.map((slot) => slot.rank))]
                  .sort((left, right) => right - left)
                  .map((rank) => {
                    const slots = entry.prepared.filter((slot) => slot.rank === rank).sort((left, right) => left.slotIndex - right.slotIndex)
                    return (
                      <div key={rank} className="spellbook-prep-rank">
                        <div className="spellbook-rank-heading">
                          <span>{rankLabel(rank)}</span>
                          <small>{`${slots.filter((slot) => slot.spellId && !slot.expended).length} / ${slots.length} slots`}</small>
                        </div>
                        {slots.map((slot) => {
                          const key = `${slot.rank}:${slot.slotIndex}`
                          return (
                            <div key={key} className={slot.expended ? 'spellbook-prep-slot spellbook-prep-slot-expended' : 'spellbook-prep-slot'}>
                              <button type="button" className="spellbook-prep-slot-main" onClick={() => setSlotToPrepare(slotToPrepare === key ? null : key)}>
                                <span>{`#${slot.slotIndex + 1}`}</span>
                                <strong>{slot.name ?? 'Slot vazio'}</strong>
                                <small>{slot.expended ? 'Gasto' : slot.name ? 'Preparado' : 'Vazio'}</small>
                              </button>
                              <div className="spellbook-row-actions">
                                <button type="button" className="spellbook-small-button" title={slot.expended ? 'Marcar disponivel' : 'Marcar gasto'} onClick={() => onChangeEntry(toggleExpended(entry, slot.rank, slot.slotIndex))}>
                                  <Check size={14} />
                                </button>
                                <button type="button" className="spellbook-small-button" title="Limpar slot" onClick={() => onChangeEntry(setPreparedSpell(entry, slot.rank, slot.slotIndex, null, null))}>
                                  <X size={14} />
                                </button>
                                <button type="button" className="spellbook-small-button" title="Remover slot" onClick={() => onChangeEntry(removePreparedSlot(entry, slot.rank, slot.slotIndex))}>
                                  <Trash2 size={14} />
                                </button>
                              </div>
                              {slotToPrepare === key ? (
                                <div className="spellbook-prep-search">
                                  <SpellSearchPicker
                                    campaignId={campaignId}
                                    category="spell"
                                    maxRank={slot.rank}
                                    placeholder={`Preparar magia de ate ${rankLabel(slot.rank)}...`}
                                    onPick={(result) => {
                                      onChangeEntry(setPreparedSpell(entry, slot.rank, slot.slotIndex, result.id, result.name))
                                      setSlotToPrepare(null)
                                    }}
                                    compact
                                  />
                                </div>
                              ) : null}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                {entry.prepared.length === 0 ? <div className="spellbook-empty">Adicione slots para preparar magias.</div> : null}
              </div>
            </>
          ) : null}

          {entry && entry.category !== 'PREPARED' ? (
            <>
              <div className="spellbook-subtitle">Recursos por rank</div>
              <div className="spellbook-slot-config">
                {entry.slots.map((slot) => (
                  <label key={slot.rank} className="spellbook-field">
                    <span>{rankLabel(slot.rank)}</span>
                    <input type="number" min={0} value={slot.max} onChange={(event) => onChangeEntry(setSlotMax(entry, slot.rank, Number(event.target.value)))} />
                  </label>
                ))}
                <label className="spellbook-field">
                  <span>Novo rank</span>
                  <input type="number" min={0} max={10} value={slotRank} onChange={(event) => setSlotRank(Number(event.target.value))} />
                </label>
                <button type="button" className="spellbook-outline-button" onClick={() => onChangeEntry(setSlotMax(entry, slotRank, Math.max(1, entry.slots.find((slot) => slot.rank === slotRank)?.max ?? 1)))}>
                  <Plus size={14} />
                  Rank
                </button>
              </div>
            </>
          ) : null}

          {entry ? (
            <button type="button" className="spellbook-danger-button" onClick={() => onRemoveEntry(entry.id)}>
              <Trash2 size={14} />
              Remover entrada
            </button>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function RitualManager({
  campaignId,
  rituals,
  onAdd,
  onRemove,
}: {
  campaignId: string | null
  rituals: Pathfinder2eRitualEntry[]
  onAdd: (ritual: Pathfinder2eRitualEntry) => void
  onRemove: (spellId: string) => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="spellbook-manage-card">
      <button type="button" className="spellbook-manage-toggle" onClick={() => setOpen((current) => !current)}>
        <BookOpen size={15} />
        Rituais
        <ChevronDown size={14} />
      </button>
      {open ? (
        <div className="spellbook-manage-body">
          <SpellSearchPicker campaignId={campaignId} category="ritual" placeholder="Buscar ritual..." onPick={(result) => onAdd({ spellId: result.id, name: result.name })} compact />
          <div className="spellbook-chip-list">
            {rituals.map((ritual) => (
              <button key={ritual.spellId} type="button" className="spellbook-chip" onClick={() => onRemove(ritual.spellId)}>
                {ritual.name}
                <X size={12} />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function SpellSheetPopover({
  campaignId,
  spellId,
  onClose,
}: {
  campaignId: string
  spellId: string
  onClose: () => void
}) {
  const [spell, setSpell] = useState<CampaignSpellEntry | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetch(`/api/campaigns/${campaignId}/spells/${encodeURIComponent(spellId)}`, { credentials: 'include' })
      .then(async (response) => {
        if (!response.ok) {
          const body = (await response.json().catch(() => null)) as { error?: string } | null
          throw new Error(body?.error ?? 'Nao foi possivel abrir a ficha da magia.')
        }
        return response.json() as Promise<CampaignSpellEntry>
      })
      .then((data) => {
        if (!cancelled) setSpell(data)
      })
      .catch((fetchError) => {
        if (!cancelled) setError(fetchError instanceof Error ? fetchError.message : 'Nao foi possivel abrir a ficha da magia.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [campaignId, spellId])

  return (
    <div className="spellbook-sheet-popover" role="dialog" aria-modal="true">
      <div className="spellbook-sheet-window">
        <div className="spellbook-sheet-header">
          <strong>{spell?.name ?? 'Ficha da magia'}</strong>
          <button type="button" className="sheet-icon-button" title="Fechar" onClick={onClose}>
            <X size={16} />
          </button>
        </div>
        <div className="spellbook-sheet-body">
          {loading ? <div className="sheet-message">Carregando ficha...</div> : null}
          {error ? <div className="sheet-error">{error}</div> : null}
          {!loading && spell ? <Pathfinder2eSpellSheetView spell={spell} /> : null}
        </div>
      </div>
    </div>
  )
}

export function SpellsPage({ characterId, campaignId, classSelectionId = null, level = 1 }: Props) {
  const { loading, saving, error, data, save } = useCharacterSpellbook(characterId)
  const [draft, setDraft] = useState<Pathfinder2eCharacterSpellbookData>(data)
  const [dirty, setDirty] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [sheetSpellId, setSheetSpellId] = useState<string | null>(null)
  const [selectedEntryId, setSelectedEntryId] = useState('all')
  const [preparationOpen, setPreparationOpen] = useState(false)

  useEffect(() => {
    if (!dirty) setDraft(data)
  }, [data, dirty])

  const rows = useMemo(() => rowsForSpellbook(draft), [draft])
  const selectedRow = rows.find((row) => row.key === selectedKey) ?? rows.find((row) => row.name) ?? null

  useEffect(() => {
    if (!selectedKey && rows.length > 0) setSelectedKey(rows.find((row) => row.name)?.key ?? rows[0]?.key ?? null)
  }, [rows, selectedKey])

  function updateDraft(update: (current: Pathfinder2eCharacterSpellbookData) => Pathfinder2eCharacterSpellbookData) {
    setDraft((current) => update(current))
    setDirty(true)
  }

  if (!characterId) {
    return (
      <div className="pathfinder-sheet-main">
        <section className="sheet-section">
          <div className="sheet-section-title">Magias</div>
          <p>Salve o personagem antes de gerenciar o livro de magias.</p>
        </section>
      </div>
    )
  }

  return (
    <div className="pathfinder-sheet-main spellbook-page">
      <section className="sheet-section">
        <div className="spellbook-toolbar">
          <div className="sheet-section-title">Magias</div>
          <button
            type="button"
            className="spellbook-save-button"
            disabled={!dirty || saving}
            onClick={async () => {
              await save(draft)
              setDirty(false)
            }}
          >
            <Save size={14} />
            {saving ? 'Salvando' : 'Salvar'}
          </button>
        </div>

        {loading ? <p>Carregando...</p> : null}
        {error ? <p className="sheet-error">{error}</p> : null}

        {!loading ? (
          <>
            <SpellbookOverview spellbook={draft} />
            <div className="spellbook-layout">
              <SpellList
                rows={rows}
                selectedKey={selectedRow?.key ?? null}
                query={query}
                onQueryChange={setQuery}
                entries={draft.entries}
                selectedEntryId={selectedEntryId}
                onSelectedEntryChange={setSelectedEntryId}
                onOpenPreparation={() => setPreparationOpen((current) => !current)}
                onSelect={(row) => setSelectedKey(row.key)}
                onOpenSheet={(spellId) => setSheetSpellId(spellId)}
                onTogglePrepared={(row) => updateDraft((current) => withEntry(current, row.entryId, (entry) => toggleExpended(entry, row.rank, row.slotIndex)))}
                onClearPrepared={(row) => updateDraft((current) => withEntry(current, row.entryId, (entry) => setPreparedSpell(entry, row.rank, row.slotIndex, null, null)))}
              />
              <SpellDetailPanel row={selectedRow} campaignId={campaignId} onOpenSheet={(spellId) => setSheetSpellId(spellId)} />
            </div>

            <div className="spellbook-manage">
              <div className="spellbook-manage-heading">
                <span>Preparar e organizar</span>
                <button type="button" className="spellbook-outline-button" onClick={() => setPreparationOpen((current) => !current)}>
                  {preparationOpen ? 'Fechar' : 'Abrir'}
                </button>
              </div>
              <SuggestedEntryCard
                classSelectionId={classSelectionId}
                level={level}
                hasEntries={draft.entries.length > 0}
                onCreate={(entry) => updateDraft((current) => addEntryToSpellbook(current, entry))}
              />
              <PreparationPanel
                open={preparationOpen}
                entries={draft.entries}
                campaignId={campaignId}
                selectedEntryId={selectedEntryId === 'all' ? draft.entries[0]?.id ?? '' : selectedEntryId}
                onSelectedEntryChange={setSelectedEntryId}
                onChangeEntry={(next) => updateDraft((current) => withEntry(current, next.id, () => next))}
                onRemoveEntry={(entryId) => updateDraft((current) => ({ ...current, entries: current.entries.filter((item) => item.id !== entryId) }))}
                onAddEntry={(entry) => updateDraft((current) => addEntryToSpellbook(current, entry))}
              />
              <RitualManager
                campaignId={campaignId}
                rituals={draft.rituals}
                onAdd={(ritual) => updateDraft((current) => ({ ...current, rituals: [...current.rituals.filter((item) => item.spellId !== ritual.spellId), ritual] }))}
                onRemove={(spellId) => updateDraft((current) => ({ ...current, rituals: current.rituals.filter((item) => item.spellId !== spellId) }))}
              />
            </div>
          </>
        ) : null}
      </section>

      {campaignId && sheetSpellId ? <SpellSheetPopover campaignId={campaignId} spellId={sheetSpellId} onClose={() => setSheetSpellId(null)} /> : null}
    </div>
  )
}
