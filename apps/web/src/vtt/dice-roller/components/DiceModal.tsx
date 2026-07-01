import { Dice5, Loader2, X } from 'lucide-react'
import { memo, useEffect, useId, useRef, useState } from 'react'
import { Button } from '../../../components/Button'
import { ascendingDiceOptions, diceAssetPath } from '../config/constants'
import { normalizeRollValue, rollFallbackValue } from '../domain/diceRollDomain'
import type { DiceSides } from '../domain/types'
import {
  createDiceBox,
  getDiceBoxAssetDiagnostics,
  styleDiceCanvas,
  toDiceEngineRollResults,
  type DestroyableDiceBox,
} from '../infrastructure/dice-box/diceBoxEngine'

type DiceModalProps = {
  isOpen: boolean
  disabled?: boolean
  onClose: () => void
  onRollComplete?: (roll: { sides: DiceSides; value: number }) => void | Promise<void>
}

type VisibleRoll = {
  id: number
  sides: DiceSides
  value: number
}

export const DiceModal = memo(function DiceModal({ isOpen, disabled = false, onClose, onRollComplete }: DiceModalProps) {
  const reactId = useId()
  const containerIdRef = useRef(`dice-modal-box-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const diceBoxRef = useRef<DestroyableDiceBox | null>(null)
  const initializedRef = useRef(false)
  const rolledOnceRef = useRef(false)
  const currentSidesRef = useRef<DiceSides | null>(null)
  const [initializing, setInitializing] = useState(false)
  const [rollingSides, setRollingSides] = useState<DiceSides | null>(null)
  const [rolls, setRolls] = useState<VisibleRoll[]>([])

  useEffect(() => {
    if (!isOpen) return

    const container = containerRef.current
    if (!container) return

    let disposed = false
    setInitializing(true)
    setRolls([])
    rolledOnceRef.current = false
    currentSidesRef.current = null

    console.log('[DiceModal] initializing dice-box', {
      containerId: containerIdRef.current,
      absoluteAssetBaseUrl: `${window.location.origin}${diceAssetPath}`,
      ...getDiceBoxAssetDiagnostics(),
    })

    const diceBox = createDiceBox({
      containerId: containerIdRef.current,
      container,
      scale: 15,
      onRollComplete: (results) => {
        const sides = currentSidesRef.current
        if (!sides) return

        const [firstResult] = toDiceEngineRollResults(results)
        const value = normalizeRollValue(firstResult?.value, sides) ?? rollFallbackValue(sides)

        const roll = { id: Date.now(), sides, value }
        setRolls((current) => [roll, ...current])
        onRollComplete?.({ sides, value })
        console.log('[DiceModal] roll complete', { sides, value, results })
        setRollingSides(null)
      },
    })

    diceBoxRef.current = diceBox

    diceBox
      .init()
      .then(() => {
        if (disposed) return
        initializedRef.current = true
        diceBox.show()
        styleDiceCanvas(container)
        console.log('[DiceModal] dice-box initialized', {
          ...getDiceBoxAssetDiagnostics(),
          canvasCount: container.querySelectorAll('canvas').length,
          containerRect: container.getBoundingClientRect(),
        })
      })
      .catch((error: unknown) => {
        console.error('[DiceModal] failed to initialize dice-box', {
          error,
          attemptedAssetBaseUrl: diceAssetPath,
          ...getDiceBoxAssetDiagnostics(),
        })
      })
      .finally(() => {
        if (!disposed) setInitializing(false)
      })

    return () => {
      disposed = true
      initializedRef.current = false
      diceBox.destroy()
      diceBoxRef.current = null
      setInitializing(false)
      setRollingSides(null)
    }
  }, [isOpen, onRollComplete])

  function rollDie(sides: DiceSides) {
    const diceBox = diceBoxRef.current
    if (!diceBox || !initializedRef.current || rollingSides || disabled) return

    setRollingSides(sides)
    currentSidesRef.current = sides

    try {
      console.log('[DiceModal] rolling die', {
        notation: `1d${sides}`,
        assetPath: diceAssetPath,
        attemptedAssetBaseUrl: diceAssetPath,
      })

      diceBox.show()
      if (rolledOnceRef.current) {
        void diceBox.add(`1d${sides}`)
      } else {
        void diceBox.roll(`1d${sides}`)
        rolledOnceRef.current = true
      }
    } catch (error) {
      console.error('[DiceModal] failed to roll die', {
        error,
        sides,
        assetPath: diceAssetPath,
        attemptedAssetBaseUrl: diceAssetPath,
      })
      setRollingSides(null)
    }
  }

  if (!isOpen) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Dados"
        className="pointer-events-auto fixed left-1/2 top-20 flex h-[min(640px,calc(100vh-112px))] w-[min(920px,calc(100vw-32px))] -translate-x-1/2 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#101116] text-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <Dice5 className="h-5 w-5 text-indigo-300" />
            <div className="truncate font-semibold">Dados</div>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-200 transition hover:bg-white/10 hover:text-white"
            aria-label="Fechar dados"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <section className="relative z-20 shrink-0 border-b border-white/10 bg-black/55 px-4 py-3 backdrop-blur">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {ascendingDiceOptions.map((sides) => {
              const rolling = rollingSides === sides

              return (
                <Button
                  key={sides}
                  type="button"
                  variant="ghost"
                  className="h-11 gap-2 px-3"
                  disabled={disabled || initializing || Boolean(rollingSides)}
                  onClick={() => void rollDie(sides)}
                >
                  {rolling ? <Loader2 className="h-4 w-4 animate-spin" /> : <Dice5 className="h-4 w-4" />}
                  D{sides}
                </Button>
              )
            })}
          </div>
        </section>

        <section className="relative min-h-0 flex-1 bg-[#08090c]">
          <div
            ref={containerRef}
            id={containerIdRef.current}
            className="h-full min-h-[360px] w-full"
            style={{
              display: 'block',
              opacity: 1,
              pointerEvents: 'none',
              visibility: 'visible',
            }}
          />

          {!rolls.length && !initializing ? (
            <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center p-6 text-center">
              <div className="max-w-sm rounded-lg border border-white/10 bg-black/55 px-4 py-3 text-sm text-zinc-200 shadow-xl backdrop-blur">
                Escolha um dado acima para iniciar a rolagem 3D.
              </div>
            </div>
          ) : null}

          {initializing ? (
            <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-black/30 text-sm text-zinc-200">
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Carregando dados
              </span>
            </div>
          ) : null}
        </section>

        {rolls.length ? (
          <footer className="flex shrink-0 flex-wrap gap-2 border-t border-white/10 bg-black/25 px-4 py-3">
            {rolls.map((roll) => (
              <div key={roll.id} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-100">
                D{roll.sides}: <span className="font-semibold text-white">{roll.value}</span>
              </div>
            ))}
          </footer>
        ) : null}
      </div>
    </div>
  )
})
