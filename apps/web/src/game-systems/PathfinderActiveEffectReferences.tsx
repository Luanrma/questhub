import { Link2 } from 'lucide-react'
import type { PathfinderActiveEffectReference } from './PathfinderActiveEffectDefinitionModal'

type TextSegment =
  | { kind: 'text'; value: string }
  | { kind: 'reference'; value: string; reference: PathfinderActiveEffectReference }

function exactCandidates(reference: PathfinderActiveEffectReference) {
  if (!reference.source.label) return []
  return [...reference.exactLabels]
    .filter((label) => label.trim().length > 0)
    .sort((left, right) => right.length - left.length)
}

export function buildPathfinderReferenceSegments(
  text: string,
  references: readonly PathfinderActiveEffectReference[],
): readonly TextSegment[] {
  if (!text || references.length === 0) return [{ kind: 'text', value: text }]

  const segments: TextSegment[] = []
  const used = new Set<number>()
  let cursor = 0

  while (cursor < text.length) {
    let best: { start: number; label: string; reference: PathfinderActiveEffectReference } | null = null

    for (const reference of references) {
      if (used.has(reference.occurrenceIndex)) continue
      for (const label of exactCandidates(reference)) {
        const start = text.indexOf(label, cursor)
        if (start < 0) continue
        if (
          !best
          || start < best.start
          || (start === best.start && label.length > best.label.length)
          || (
            start === best.start
            && label.length === best.label.length
            && reference.occurrenceIndex < best.reference.occurrenceIndex
          )
        ) {
          best = { start, label, reference }
        }
      }
    }

    if (!best) {
      segments.push({ kind: 'text', value: text.slice(cursor) })
      break
    }

    if (best.start > cursor) {
      segments.push({ kind: 'text', value: text.slice(cursor, best.start) })
    }
    segments.push({ kind: 'reference', value: best.label, reference: best.reference })
    used.add(best.reference.occurrenceIndex)
    cursor = best.start + best.label.length
  }

  return segments.length ? segments : [{ kind: 'text', value: text }]
}

type TextProps = {
  text: string
  references: readonly PathfinderActiveEffectReference[]
  onOpen: (reference: PathfinderActiveEffectReference) => void
}

export function PathfinderReferenceText({ text, references, onOpen }: TextProps) {
  const segments = buildPathfinderReferenceSegments(text, references)

  return (
    <>
      {segments.map((segment, index) => (
        segment.kind === 'reference' ? (
          <button
            key={`${segment.reference.occurrenceIndex}:${index}`}
            type="button"
            onClick={() => onOpen(segment.reference)}
            className="inline rounded px-0.5 font-semibold text-indigo-300 underline decoration-indigo-300/45 underline-offset-2 transition hover:bg-indigo-500/15 hover:text-indigo-200"
            title="Abrir definição PF2e"
          >
            {segment.value}
          </button>
        ) : (
          <span key={`text:${index}`}>{segment.value}</span>
        )
      ))}
    </>
  )
}

type ListProps = {
  references: readonly PathfinderActiveEffectReference[]
  onOpen: (reference: PathfinderActiveEffectReference) => void
}

function referenceContextLabel(reference: PathfinderActiveEffectReference) {
  if (reference.context.outcome) return reference.context.outcome.replaceAll('_', ' ')
  if (reference.context.stageHint !== null) return `Estágio ${reference.context.stageHint}`
  if (reference.context.origin?.name) return reference.context.origin.name
  if (!reference.potential) return 'Somente referência'
  return null
}

export function PathfinderActiveEffectReferenceList({ references, onOpen }: ListProps) {
  if (references.length === 0) return null

  return (
    <section className="rounded-xl border border-indigo-300/15 bg-indigo-500/[0.035] p-5">
      <div className="flex items-center gap-2">
        <Link2 className="h-4 w-4 text-indigo-300" />
        <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-200">
          Conditions e Effects referenciados
        </h2>
      </div>
      <p className="mt-1 text-xs leading-5 text-zinc-500">
        Referências estruturais do conteúdo. Consultar uma definição não aplica nenhuma mecânica.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {references.map((reference) => {
          const contextLabel = referenceContextLabel(reference)
          return (
            <button
              key={`${reference.definitionKey}:${reference.occurrenceIndex}`}
              type="button"
              onClick={() => onOpen(reference)}
              className="rounded-lg border border-indigo-300/20 bg-indigo-500/10 px-3 py-2 text-left transition hover:border-indigo-300/40 hover:bg-indigo-500/15"
            >
              <span className="block text-xs font-semibold text-indigo-100">
                {reference.displayLabel}
              </span>
              {contextLabel ? (
                <span className="mt-0.5 block text-[10px] uppercase tracking-wide text-indigo-200/55">
                  {contextLabel}
                </span>
              ) : null}
            </button>
          )
        })}
      </div>
    </section>
  )
}
