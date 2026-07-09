export type Pathfinder2eItemSheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}

export type Pathfinder2eItemSheetSection = {
  key: string
  title: string
  entries: Pathfinder2eItemSheetEntry[]
}

export type Pathfinder2eItemSheetItem = {
  name: string
  itemType: string
  display: {
    subtitle?: string
    level?: {
      label: string
      value: string
    }
    price?: {
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
      sections: Pathfinder2eItemSheetSection[]
    }
  }
}

function sectionEntries(item: Pathfinder2eItemSheetItem, sectionKey: string) {
  return item.display.sheet?.sections.find((section) => section.key === sectionKey)?.entries ?? []
}

function otherSections(item: Pathfinder2eItemSheetItem) {
  const sideKeys = new Set(['details'])
  return item.display.sheet?.sections.filter((section) => !sideKeys.has(section.key)) ?? []
}

function SheetStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="sheet-quick-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function SheetEntry({ entry }: { entry: Pathfinder2eItemSheetEntry }) {
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

function SheetSection({ section }: { section: Pathfinder2eItemSheetSection }) {
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

export function Pathfinder2eItemSheetView({ item }: { item: Pathfinder2eItemSheetItem }) {
  const detailEntries = sectionEntries(item, 'details')
  const contentSections = otherSections(item)

  return (
    <div className="pathfinder-sheet pathfinder-sheet-layout pathfinder-bestiary-sheet">
      <aside className="sheet-quick-summary" aria-label="Resumo rapido do item Pathfinder 2e">
        <div className="sheet-quick-brand">
          <strong>Item</strong>
        </div>

        <div className="sheet-quick-name">{item.name}</div>
        {item.display.subtitle ? <div className="sheet-bestiary-subtitle">{item.display.subtitle}</div> : null}

        <div className="sheet-quick-level-row">
          {item.display.level ? <SheetStat label={item.display.level.label} value={item.display.level.value} /> : null}
          {item.display.price ? <SheetStat label={item.display.price.label} value={item.display.price.value} /> : null}
        </div>

        {detailEntries.length > 0 ? <div className="sheet-quick-section-title">Detalhes</div> : null}
        <div className="sheet-bestiary-side-list">
          {detailEntries.map((entry) => (
            <SheetEntry key={entry.key} entry={entry} />
          ))}
        </div>
      </aside>

      <div className="pathfinder-sheet-main">
        <section className="sheet-section">
          <div className="sheet-section-title">Traits</div>
          <div className="sheet-bestiary-tags sheet-bestiary-main-tags">
            {item.display.tags.map((tag, index) => (
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
