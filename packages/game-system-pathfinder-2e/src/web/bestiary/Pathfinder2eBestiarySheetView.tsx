export type Pathfinder2eBestiarySheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type Pathfinder2eBestiarySheetSection = {
  key: string
  title: string
  entries: Pathfinder2eBestiarySheetEntry[]
}

export type Pathfinder2eBestiarySheetCreature = {
  name: string
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
      sections: Pathfinder2eBestiarySheetSection[]
    }
  }
  token: {
    imageUrl: string | null
    fallbackInitials: string
    borderColor: string
  }
}

function sectionEntries(creature: Pathfinder2eBestiarySheetCreature, sectionKey: string) {
  return creature.display.sheet?.sections.find((section) => section.key === sectionKey)?.entries ?? []
}

function otherSections(creature: Pathfinder2eBestiarySheetCreature) {
  const sideKeys = new Set(['defenses', 'movement'])
  return creature.display.sheet?.sections.filter((section) => !sideKeys.has(section.key)) ?? []
}

function SheetStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="sheet-quick-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function SheetEntry({ entry }: { entry: Pathfinder2eBestiarySheetEntry }) {
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

function SheetSection({ section }: { section: Pathfinder2eBestiarySheetSection }) {
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

function CreaturePortrait({ creature }: { creature: Pathfinder2eBestiarySheetCreature }) {
  if (creature.token.imageUrl) {
    return <img className="sheet-bestiary-portrait" src={creature.token.imageUrl} alt="" draggable={false} />
  }

  return (
    <div className="sheet-bestiary-portrait sheet-bestiary-portrait-fallback" style={{ borderColor: creature.token.borderColor }}>
      {creature.token.fallbackInitials}
    </div>
  )
}

export function Pathfinder2eBestiarySheetView({ creature }: { creature: Pathfinder2eBestiarySheetCreature }) {
  const defenseEntries = sectionEntries(creature, 'defenses')
  const movementEntries = sectionEntries(creature, 'movement')
  const contentSections = otherSections(creature)

  return (
    <div className="pathfinder-sheet pathfinder-sheet-layout pathfinder-bestiary-sheet">
      <aside className="sheet-quick-summary" aria-label="Resumo rapido da criatura Pathfinder 2e">
        <div className="sheet-quick-brand">
          <strong>Criatura</strong>
        </div>

        <CreaturePortrait creature={creature} />
        <div className="sheet-quick-name">{creature.name}</div>
        {creature.display.subtitle ? <div className="sheet-bestiary-subtitle">{creature.display.subtitle}</div> : null}

        <div className="sheet-quick-level-row">
          {creature.display.level ? <SheetStat label={creature.display.level.label} value={creature.display.level.value} /> : null}
          {creature.display.stats.slice(0, 2).map((stat) => (
            <SheetStat key={stat.key} label={stat.label} value={stat.value} />
          ))}
        </div>

        {defenseEntries.length > 0 ? <div className="sheet-quick-section-title">Defesas</div> : null}
        <div className="sheet-bestiary-side-list">
          {defenseEntries.map((entry) => (
            <SheetEntry key={entry.key} entry={entry} />
          ))}
        </div>

        {movementEntries.length > 0 ? <div className="sheet-quick-section-title">Movimento</div> : null}
        <div className="sheet-bestiary-side-list">
          {movementEntries.map((entry) => (
            <SheetEntry key={entry.key} entry={entry} />
          ))}
        </div>
      </aside>

      <div className="pathfinder-sheet-main">
        <section className="sheet-section">
          <div className="sheet-section-title">Traits</div>
          <div className="sheet-bestiary-tags sheet-bestiary-main-tags">
            {creature.display.tags.map((tag, index) => (
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
