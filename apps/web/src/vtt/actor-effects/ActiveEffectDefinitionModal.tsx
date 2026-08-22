import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { BookOpen, CircleDot, ShieldCheck, Sparkles, TriangleAlert, X } from 'lucide-react'

export type ActiveEffectDefinitionLocale = 'pt-BR' | 'en-US'

export type ActiveEffectDefinitionTag = {
  label: string
  tone?: 'neutral' | 'beneficial' | 'harmful' | 'accent'
}

export type ActiveEffectDefinitionLocalization = {
  requestedLocale: ActiveEffectDefinitionLocale
  nameLocale: ActiveEffectDefinitionLocale
  descriptionLocale: ActiveEffectDefinitionLocale
}

type Props = {
  title: string
  headerLabel: string
  descriptionBlocks: readonly string[]
  iconUrl?: string | null
  polarity?: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL' | null
  tags?: readonly ActiveEffectDefinitionTag[]
  sourceLabel?: string | null
  locale?: ActiveEffectDefinitionLocale
  localization?: ActiveEffectDefinitionLocalization | null
  localeEnabled?: boolean
  loading?: boolean
  error?: string | null
  context?: ReactNode
  zIndex?: number
  onLocaleChange?: (locale: ActiveEffectDefinitionLocale) => void
  onClose: () => void
}

const polarityVisual = {
  BENEFICIAL: {
    classes: 'border-emerald-700/35 bg-emerald-950/15 text-emerald-900',
    Icon: ShieldCheck,
  },
  HARMFUL: {
    classes: 'border-rose-700/35 bg-rose-950/10 text-rose-900',
    Icon: TriangleAlert,
  },
  NEUTRAL: {
    classes: 'border-stone-600/30 bg-stone-900/10 text-stone-800',
    Icon: CircleDot,
  },
} as const

function tagClasses(tone: ActiveEffectDefinitionTag['tone']) {
  if (tone === 'beneficial') return polarityVisual.BENEFICIAL.classes
  if (tone === 'harmful') return polarityVisual.HARMFUL.classes
  if (tone === 'accent') return 'border-[#6d4ac8]/25 bg-[#6d4ac8]/10 text-[#4d2c91]'
  return 'border-[#6f6252]/25 bg-[#f2e8d7] text-[#352d24]'
}

function localeName(locale: ActiveEffectDefinitionLocale) {
  return locale === 'pt-BR' ? 'Português (Brasil)' : 'English (US)'
}

export function ActiveEffectDefinitionModal({
  title,
  headerLabel,
  descriptionBlocks,
  iconUrl = null,
  polarity = 'NEUTRAL',
  tags = [],
  sourceLabel = null,
  locale = 'pt-BR',
  localization = null,
  localeEnabled = false,
  loading = false,
  error = null,
  context = null,
  zIndex = 320,
  onLocaleChange,
  onClose,
}: Props) {
  if (typeof document === 'undefined') return null

  const visual = polarityVisual[polarity ?? 'NEUTRAL']
  const Icon = visual.Icon
  const hasFallback = localization
    ? localization.nameLocale !== localization.requestedLocale
      || localization.descriptionLocale !== localization.requestedLocale
    : false

  return createPortal(
    <div
      className="pointer-events-auto fixed inset-0 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
      style={{ zIndex }}
      role="presentation"
      onPointerDown={(event) => {
        event.stopPropagation()
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[82vh] w-full max-w-lg overflow-y-auto rounded-xl border border-[#8c7a60]/60 bg-[#e1d3bd] p-4 text-[#352d24] shadow-2xl"
        onPointerDown={(event) => event.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-[#7c6d59]/25 bg-[#f2e8d7]">
              {iconUrl ? (
                <img src={iconUrl} alt="" className="h-full w-full object-cover" />
              ) : loading ? (
                <Sparkles className="h-5 w-5" />
              ) : (
                <Icon className="h-5 w-5" />
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#756653]">
                <BookOpen className="h-3 w-3" />
                {headerLabel}
              </div>
              <h4 className="mt-1 text-base font-bold">{loading ? 'Carregando…' : title}</h4>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-[#665846] hover:bg-black/5"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        {localeEnabled ? (
          <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-[#7c6d59]/20 bg-[#f2e8d7]/55 px-3 py-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#756653]">Idioma</span>
            <select
              aria-label="Idioma da definição"
              value={locale}
              onChange={(event) => onLocaleChange?.(event.target.value as ActiveEffectDefinitionLocale)}
              className="rounded-md border border-[#7c6d59]/25 bg-[#f2e8d7] px-2 py-1 text-xs font-semibold text-[#4b4034] outline-none focus:border-[#6d4ac8]/45"
            >
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en-US">English (US)</option>
            </select>
          </div>
        ) : null}

        {loading ? <p className="mt-4 text-sm text-[#6b5d4d]">Carregando definição…</p> : null}
        {error ? (
          <p className="mt-4 rounded-lg border border-rose-700/25 bg-rose-950/10 px-3 py-2 text-sm text-rose-900">
            {error}
          </p>
        ) : null}

        {!loading ? (
          <div className="mt-4 space-y-4">
            {tags.length ? (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, index) => (
                  <span
                    key={`${tag.label}:${index}`}
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${tagClasses(tag.tone)}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            ) : null}

            {hasFallback && localization ? (
              <div className="rounded-lg border border-amber-800/20 bg-amber-950/5 px-3 py-2 text-[10px] leading-4 text-amber-950/80">
                A tradução para {localeName(localization.requestedLocale)} ainda é parcial nesta definição.
                {localization.nameLocale !== localization.requestedLocale
                  ? ` Nome exibido em ${localeName(localization.nameLocale)}.`
                  : ''}
                {localization.descriptionLocale !== localization.requestedLocale
                  ? ` Descrição exibida em ${localeName(localization.descriptionLocale)}.`
                  : ''}
              </div>
            ) : null}

            <div className="space-y-2 rounded-lg border border-[#7c6d59]/20 bg-[#f2e8d7]/70 p-3 text-sm leading-6 text-[#4b4034]">
              {descriptionBlocks.length ? (
                descriptionBlocks.map((block, index) => (
                  <p key={`${index}:${block.slice(0, 24)}`} className="whitespace-pre-wrap">
                    {block}
                  </p>
                ))
              ) : (
                <p>Sem descrição publicada.</p>
              )}
            </div>

            {context}

            {sourceLabel ? (
              <footer className="border-t border-[#7c6d59]/20 pt-3 text-xs text-[#756653]">
                {sourceLabel}
              </footer>
            ) : null}
          </div>
        ) : null}
      </section>
    </div>,
    document.body,
  )
}
