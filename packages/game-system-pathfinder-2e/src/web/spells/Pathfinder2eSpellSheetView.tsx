export type Pathfinder2eSpellSheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type Pathfinder2eSpellSheetSection = {
  key: string
  title: string
  entries: Pathfinder2eSpellSheetEntry[]
}

export type Pathfinder2eSpellSheetSpell = {
  name: string
  category: string
  display: {
    subtitle?: string
    level?: {
      label: string
      value: string
    }
    stats: Array<{
      key: string
      label: string
      value: string
    }>
    tags: string[]
    sheet?: {
      sections: Pathfinder2eSpellSheetSection[]
    }
  }
}

function sectionEntries(spell: Pathfinder2eSpellSheetSpell, sectionKey: string) {
  return spell.display.sheet?.sections.find((section) => section.key === sectionKey)?.entries ?? []
}

function otherSections(spell: Pathfinder2eSpellSheetSpell) {
  const sideKeys = new Set(['casting'])
  return spell.display.sheet?.sections.filter((section) => !sideKeys.has(section.key)) ?? []
}

function SheetStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="sheet-quick-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function SheetEntry({ entry }: { entry: Pathfinder2eSpellSheetEntry }) {
  return (
    <div className="sheet-bestiary-entry">
      <div className="sheet-bestiary-entry-line">
        <strong>{entry.label}</strong>
        {entry.value ? <span>{entry.value}</span> : null}
      </div>
      {entry.detail ? <p>{entry.detail}</p> : null}
      {entry.tags && entry.tags.length > 0 ? (
        <div className="sheet-bestiary-tags">
          {entry.tags.map((tag, index) => (
            <span key={`${entry.key}:${tag}:${index}`}>{tag}</span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function SheetSection({ section }: { section: Pathfinder2eSpellSheetSection }) {
  return (
    <section className="sheet-section">
      <div className="sheet-section-title">{section.title}</div>
      <div className="sheet-bestiary-section-grid">
        {section.entries.map((entry) => (
          <SheetEntry key={entry.key} entry={entry} />
        ))}
      </div>
    </section>
  )
}

export function Pathfinder2eSpellSheetView({ spell }: { spell: Pathfinder2eSpellSheetSpell }) {
  const castingEntries = sectionEntries(spell, 'casting')
  const contentSections = otherSections(spell)

  return (
    <div className="pathfinder-sheet pathfinder-sheet-layout pathfinder-bestiary-sheet">
      <aside className="sheet-quick-summary" aria-label="Resumo rapido da magia Pathfinder 2e">
        <div className="sheet-quick-brand">
          <strong>{spell.category === 'ritual' ? 'Ritual' : 'Magia'}</strong>
        </div>

        <div className="sheet-quick-name">{spell.name}</div>
        {spell.display.subtitle ? <div className="sheet-bestiary-subtitle">{spell.display.subtitle}</div> : null}

        <div className="sheet-quick-level-row">
          {spell.display.level ? <SheetStat label={spell.display.level.label} value={spell.display.level.value} /> : null}
        </div>

        {castingEntries.length > 0 ? <div className="sheet-quick-section-title">Conjuracao</div> : null}
        <div className="sheet-bestiary-side-list">
          {castingEntries.map((entry) => (
            <SheetEntry key={entry.key} entry={entry} />
          ))}
        </div>
      </aside>

      <div className="pathfinder-sheet-main">
        <section className="sheet-section">
          <div className="sheet-section-title">Traits</div>
          <div className="sheet-bestiary-tags sheet-bestiary-main-tags">
            {spell.display.tags.map((tag, index) => (
              <span key={`${tag}:${index}`}>{tag}</span>
            ))}
          </div>
        </section>

        {contentSections.map((section) => (
          <SheetSection key={section.key} section={section} />
        ))}
      </div>
    </div>
  )
}
