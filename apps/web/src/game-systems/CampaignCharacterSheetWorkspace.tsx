import { useEffect, useMemo, useRef, useState } from 'react'
import type { ComponentType, PointerEvent as ReactPointerEvent } from 'react'
import { FileText, Grip, Maximize2, Minimize2, X } from 'lucide-react'
import { ResizableEdges, type ResizableBox } from '../components/ResizableEdges'
import {
  campaignCharacterSheetOpenEvent,
  type CampaignCharacterSheetOpenRequest,
} from '../lib/campaign-character-sheet-window-events'
import { ActorActiveEffectsPanel } from '../vtt/actor-effects/ActorActiveEffectsPanel'
import { useCharacterSheetActorContext } from '../vtt/actor-effects/useCharacterSheetActorContext'
import type { ActorEffectPresentationResolver } from '../vtt/actor-effects/types'
import { registerVttWindow } from '../vtt/table/infrastructure/vttInteractionRegistry'
import { getCharacterSheetRenderer } from './character-sheet-renderers'
import type { CharacterSheetRendererProps } from './character-sheet-renderers'
import type { GameSystemKey } from './registry'

type CampaignRole = 'MASTER' | 'PLAYER'

type SheetWindowState = {
  sheetId: string
  title: string
  activePage: string
  minimized: boolean
  zIndex: number
  presentation: 'FULL' | 'SIMPLIFIED'
}

type Props = {
  campaignId: string
  gameSystem: GameSystemKey | null
  role?: CampaignRole | null
}

function initialBox(offset: number): ResizableBox {
  const viewportWidth = typeof window === 'undefined' ? 1440 : window.innerWidth
  const viewportHeight = typeof window === 'undefined' ? 900 : window.innerHeight
  const width = Math.min(1040, Math.max(700, viewportWidth - 180))
  const height = Math.min(780, Math.max(480, viewportHeight - 150))

  return {
    x: Math.max(24, (viewportWidth - width) / 2 + offset),
    y: Math.max(82, (viewportHeight - height) / 2 + offset),
    width,
    height,
  }
}

function CharacterSheetWindow({
  campaignId,
  role,
  state,
  index,
  hidden,
  pages,
  Renderer,
  resolveActorEffectPresentation,
  onFocus,
  onPageChange,
  onMinimize,
  onClose,
}: {
  campaignId: string
  role?: CampaignRole | null
  state: SheetWindowState
  index: number
  hidden: boolean
  pages: readonly { id: string; label: string }[]
  Renderer: ComponentType<CharacterSheetRendererProps>
  resolveActorEffectPresentation?: ActorEffectPresentationResolver
  onFocus: () => void
  onPageChange: (pageId: string) => void
  onMinimize: () => void
  onClose: () => void
}) {
  const [box, setBox] = useState<ResizableBox>(() => initialBox(index * 24))
  const dragStartRef = useRef({ pointerX: 0, pointerY: 0, panelX: 0, panelY: 0 })
  const [dragging, setDragging] = useState(false)
  const actorId = useCharacterSheetActorContext(
    campaignId,
    state.sheetId,
    state.presentation === 'FULL',
  )

  useEffect(() => registerVttWindow({
    id: `character-sheet:${campaignId}:${state.sheetId}`,
    getZIndex: () => state.zIndex,
    close: onClose,
    isVisible: () => !hidden,
  }), [campaignId, hidden, onClose, state.sheetId, state.zIndex])

  useEffect(() => {
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return
      setBox((current) => ({
        ...current,
        x: Math.max(12, Math.min(window.innerWidth - 120, dragStartRef.current.panelX + event.clientX - dragStartRef.current.pointerX)),
        y: Math.max(76, Math.min(window.innerHeight - 72, dragStartRef.current.panelY + event.clientY - dragStartRef.current.pointerY)),
      }))
    }

    function onPointerUp() {
      setDragging(false)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [dragging])

  function startDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest('button')) return
    onFocus()
    dragStartRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      panelX: box.x,
      panelY: box.y,
    }
    setDragging(true)
  }

  return (
    <section
      className={[
        'fixed flex flex-col overflow-hidden rounded-xl border border-[#8c7a60]/55 bg-[#51483d]/98 text-[#f1e8d8] shadow-2xl backdrop-blur',
        hidden ? 'hidden' : '',
      ].join(' ')}
      style={{
        left: box.x,
        top: box.y,
        width: Math.min(box.width, window.innerWidth - 24),
        height: Math.min(box.height, window.innerHeight - 88),
        zIndex: state.zIndex,
      }}
      onPointerDown={onFocus}
      aria-label={`Ficha de ${state.title}`}
    >
      <ResizableEdges
        box={box}
        setBox={setBox}
        limits={{ minWidth: 620, minHeight: 420, minY: 76, viewportMargin: 12 }}
      />

      <header
        className="flex shrink-0 cursor-grab items-center justify-between gap-3 border-b border-[#d4c5aa]/20 bg-[#40392f]/95 px-4 py-2.5 active:cursor-grabbing"
        onPointerDown={startDrag}
      >
        <div className="flex min-w-0 items-center gap-3">
          <Grip className="h-4 w-4 shrink-0 text-[#9e927f]" />
          <FileText className="h-4 w-4 shrink-0 text-[#c9ab68]" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-[#f6eddf]">{state.title}</div>
            <div className="text-[10px] uppercase tracking-wide text-[#afa28e]">Ficha da campanha</div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <div
            id={`character-sheet-header-actions-${state.sheetId}`}
            className="flex min-h-8 items-center gap-2"
            onPointerDown={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            title="Minimizar ficha"
            className="rounded-md p-2 text-[#d3c8b7] transition hover:bg-[#eadfc9]/10 hover:text-[#fff8ed]"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onMinimize}
          >
            <Minimize2 className="h-4 w-4" />
          </button>
          <button
            type="button"
            title="Fechar ficha"
            className="rounded-md p-2 text-[#d3c8b7] transition hover:bg-[#eadfc9]/10 hover:text-[#fff8ed]"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {pages.length ? <nav className="flex shrink-0 flex-wrap gap-1 border-b border-[#d4c5aa]/20 bg-[#5d5244]/95 px-3 py-1.5">
        {pages.map((page) => (
          <button
            key={page.id}
            type="button"
            onClick={() => onPageChange(page.id)}
            className={[
              'whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold transition',
              state.activePage === page.id
                ? 'bg-[#6d4ac8] text-[#fff9ef] shadow-sm'
                : 'text-[#d9ccb8] hover:bg-[#eadfc9]/10 hover:text-[#fff9ef]',
            ].join(' ')}
          >
            {page.label}
          </button>
        ))}
      </nav> : null}

      {state.presentation === 'FULL' && actorId ? (
        <ActorActiveEffectsPanel
          campaignId={campaignId}
          actorId={actorId}
          canManage={role === 'MASTER'}
          resolvePresentation={resolveActorEffectPresentation}
        />
      ) : null}

      <div
        className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto bg-[#b7a78d] p-3"
        data-sheet-active-page={state.activePage}
      >
        <Renderer
          campaignId={campaignId}
          sheetId={state.sheetId}
          activePage={state.activePage}
          presentation={state.presentation}
          onRequestPageChange={onPageChange}
          onRequestMinimize={onMinimize}
        />
      </div>
    </section>
  )
}

export function CampaignCharacterSheetWorkspace({ campaignId, gameSystem, role }: Props) {
  const registration = useMemo(() => getCharacterSheetRenderer(gameSystem), [gameSystem])
  const [windows, setWindows] = useState<SheetWindowState[]>([])
  const zIndexRef = useRef(130)
  const renderedWindows = useMemo(() => {
    const firstPage = registration?.pages[0]?.id
    if (!firstPage) return windows
    return windows.map((item) => (
      item.presentation === 'SIMPLIFIED'
        ? { ...item, activePage: 'main' }
        : registration.pages.some((page) => page.id === item.activePage)
        ? item
        : { ...item, activePage: firstPage }
    ))
  }, [registration, windows])

  useEffect(() => {
    function onOpen(event: Event) {
      const request = (event as CustomEvent<CampaignCharacterSheetOpenRequest>).detail
      if (!request || request.campaignId !== campaignId) return

      zIndexRef.current += 1
      setWindows((current) => {
        const existing = current.find((item) => item.sheetId === request.sheetId)
        if (existing) {
          return current.map((item) => item.sheetId === request.sheetId
            ? {
                ...item,
                title: request.title?.trim() || item.title,
                presentation: request.presentation ?? item.presentation,
                minimized: false,
                zIndex: zIndexRef.current,
              }
            : item)
        }

        return [
          ...current,
          {
            sheetId: request.sheetId,
            title: request.title?.trim() || 'Ficha',
            activePage: registration?.pages[0]?.id ?? 'main',
            minimized: false,
            zIndex: zIndexRef.current,
            presentation: request.presentation ?? 'FULL',
          },
        ]
      })
    }

    window.addEventListener(campaignCharacterSheetOpenEvent, onOpen)
    return () => window.removeEventListener(campaignCharacterSheetOpenEvent, onOpen)
  }, [campaignId, registration])

  function updateWindow(sheetId: string, changes: Partial<SheetWindowState>) {
    setWindows((current) => current.map((item) => item.sheetId === sheetId ? { ...item, ...changes } : item))
  }

  function focusWindow(sheetId: string) {
    zIndexRef.current += 1
    updateWindow(sheetId, { zIndex: zIndexRef.current })
  }

  const minimized = renderedWindows.filter((item) => item.minimized)

  return (
    <>
      {registration ? renderedWindows.map((state, index) => (
        <CharacterSheetWindow
          key={state.sheetId}
          campaignId={campaignId}
          role={role}
          state={state}
          index={index}
          hidden={state.minimized}
          pages={state.presentation === 'SIMPLIFIED' ? [] : registration.pages}
          Renderer={registration.Renderer}
          resolveActorEffectPresentation={registration.resolveActorEffectPresentation}
          onFocus={() => focusWindow(state.sheetId)}
          onPageChange={(activePage) => updateWindow(state.sheetId, { activePage })}
          onMinimize={() => updateWindow(state.sheetId, { minimized: true })}
          onClose={() => setWindows((current) => current.filter((item) => item.sheetId !== state.sheetId))}
        />
      )) : null}

      {!registration && renderedWindows.some((item) => !item.minimized) ? (
        <div className="fixed left-1/2 top-24 z-[150] -translate-x-1/2 rounded-xl border border-amber-300/20 bg-[#51483d] px-5 py-4 text-sm text-amber-100 shadow-2xl">
          O sistema da campanha não registrou um renderer de ficha.
        </div>
      ) : null}

      {minimized.length > 0 ? (
        <div className="fixed bottom-4 left-4 z-[190] flex max-w-[calc(100vw-2rem)] flex-wrap gap-2">
          {minimized.map((state) => (
            <button
              key={state.sheetId}
              type="button"
              title={`Restaurar ficha de ${state.title}`}
              onClick={() => {
                zIndexRef.current += 1
                updateWindow(state.sheetId, { minimized: false, zIndex: zIndexRef.current })
              }}
              className="flex max-w-56 items-center gap-2 rounded-lg border border-[#9b8769]/60 bg-[#51483d]/98 px-3 py-2 text-left text-xs font-semibold text-[#efe4d2] shadow-xl transition hover:bg-[#6d4ac8]/30"
            >
              <Maximize2 className="h-4 w-4 shrink-0" />
              <span className="truncate">{state.title}</span>
            </button>
          ))}
        </div>
      ) : null}
    </>
  )
}
