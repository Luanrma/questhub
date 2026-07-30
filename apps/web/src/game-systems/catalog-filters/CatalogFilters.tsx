import { ListFilter } from 'lucide-react'

export type CatalogFilterDefinition = {
  id: string
  label: string
  kind: 'single' | 'multiple'
  options: ReadonlyArray<{
    value: string
    label: string
  }>
}

export type CatalogFilterSelection = Readonly<Record<string, readonly string[]>>

type Props = {
  definitions: readonly CatalogFilterDefinition[]
  locale: 'en-US' | 'pt-BR'
  selection: CatalogFilterSelection
  onChange: (selection: CatalogFilterSelection) => void
}

function withFilterSelection(
  selection: CatalogFilterSelection,
  filterId: string,
  values: readonly string[],
) {
  const nextSelection = { ...selection }
  if (values.length === 0) {
    delete nextSelection[filterId]
    return nextSelection
  }
  nextSelection[filterId] = values
  return nextSelection
}

export function CatalogFilters({ definitions, locale, selection, onChange }: Props) {
  const allLabel = locale === 'pt-BR' ? 'Todos' : 'All'

  return definitions.map((definition) => {
    const selectedValues = selection[definition.id] ?? []

    if (definition.kind === 'single') {
      return (
        <label key={definition.id} className="relative min-w-40 flex-1 md:max-w-52">
          <ListFilter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <select
            value={selectedValues[0] ?? ''}
            onChange={(event) => {
              onChange(withFilterSelection(
                selection,
                definition.id,
                event.target.value ? [event.target.value] : [],
              ))
            }}
            aria-label={definition.label}
            className="h-11 w-full appearance-none rounded-lg border border-white/10 bg-black/35 pl-10 pr-4 text-sm text-zinc-200 outline-none transition focus:border-indigo-300/50"
          >
            <option value="">{allLabel}: {definition.label}</option>
            {definition.options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      )
    }

    const selectedSet = new Set(selectedValues)
    const summary = selectedValues.length > 0
      ? `${definition.label} (${selectedValues.length})`
      : `${allLabel}: ${definition.label}`

    return (
      <details key={definition.id} className="group relative min-w-48 flex-1 md:max-w-64">
        <summary className="flex h-11 cursor-pointer list-none items-center gap-3 rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-zinc-200 outline-none transition marker:content-none hover:border-white/20 focus-visible:border-indigo-300/50">
          <ListFilter className="h-4 w-4 shrink-0 text-zinc-500" />
          <span className="truncate">{summary}</span>
        </summary>
        <div className="absolute right-0 z-20 mt-2 max-h-72 w-full min-w-64 overflow-y-auto rounded-xl border border-white/10 bg-[#171820] p-2 shadow-2xl">
          {selectedValues.length > 0 ? (
            <button
              type="button"
              onClick={() => onChange(withFilterSelection(selection, definition.id, []))}
              className="mb-1 w-full rounded-lg px-3 py-2 text-left text-xs font-semibold text-indigo-200 transition hover:bg-white/[0.06]"
            >
              {locale === 'pt-BR' ? 'Limpar seleção' : 'Clear selection'}
            </button>
          ) : null}
          {definition.options.map((option) => {
            const checked = selectedSet.has(option.value)
            return (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/[0.06]"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    const nextValues = checked
                      ? selectedValues.filter((value) => value !== option.value)
                      : [...selectedValues, option.value]
                    onChange(withFilterSelection(selection, definition.id, nextValues))
                  }}
                  className="h-4 w-4 accent-indigo-500"
                />
                <span className="min-w-0 truncate">{option.label}</span>
              </label>
            )
          })}
        </div>
      </details>
    )
  })
}
