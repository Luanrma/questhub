import DiceBox, { type DiceBoxRollResult } from '@3d-dice/dice-box'
import { defaultDiceBoxScale, defaultDiceThemeColor, diceAssetPath } from '../../config/constants'
import type { DiceEngineRollResult } from '../../domain/diceRollDomain'

export type DestroyableDiceBox = DiceBox & {
  destroy: () => void
}

export type DiceBoxRollCompleteHandler = (results: DiceBoxRollResult[]) => void

export type CreateDiceBoxOptions = {
  containerId: string
  container: HTMLDivElement
  themeColor?: string
  scale?: number
  onRollComplete: DiceBoxRollCompleteHandler
}

export function createDiceBox({ containerId, container, themeColor = defaultDiceThemeColor, scale = defaultDiceBoxScale, onRollComplete }: CreateDiceBoxOptions) {
  const diceBox = ensureDestroy(
    new DiceBox({
      container: `#${containerId}`,
      assetPath: diceAssetPath,
      theme: 'default',
      themeColor,
      offscreen: true,
      scale,
    }),
    container,
  )

  diceBox.onRollComplete = onRollComplete
  return diceBox
}

export function ensureDestroy(diceBox: DiceBox, container: HTMLDivElement): DestroyableDiceBox {
  const destroyableDiceBox = diceBox as DestroyableDiceBox

  if (typeof destroyableDiceBox.destroy === 'function') return destroyableDiceBox

  destroyableDiceBox.destroy = () => {
    diceBox.clear()
    diceBox.hide()
    container.querySelectorAll('canvas').forEach((canvas) => canvas.remove())
  }

  return destroyableDiceBox
}

export function styleDiceCanvas(container: HTMLDivElement) {
  container.querySelectorAll<HTMLCanvasElement>('canvas').forEach((canvas) => {
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.display = 'block'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.margin = '0'
    canvas.style.opacity = '1'
    canvas.style.pointerEvents = 'none'
    canvas.style.background = 'transparent'
  })
}

export function requestDiceResize(container: HTMLDivElement | null, options?: { notifyEngine?: boolean }) {
  if (!container) return

  const sync = () => {
    styleDiceCanvas(container)
    if (options?.notifyEngine !== false) window.dispatchEvent(new Event('resize'))
  }

  sync()
  window.requestAnimationFrame(sync)
  window.requestAnimationFrame(() => window.requestAnimationFrame(sync))
}

export function waitForDiceReadyFrame(container: HTMLDivElement | null) {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => {
      requestDiceResize(container)
      window.requestAnimationFrame(() => {
        requestDiceResize(container)
        resolve()
      })
    })
  })
}

export function toDiceEngineRollResults(results: DiceBoxRollResult[]): DiceEngineRollResult[] {
  if (!Array.isArray(results)) return []

  return results.flatMap((result) => {
    const rolls = Array.isArray(result.rolls) ? result.rolls : []
    return rolls.map((roll) => ({
      sides: roll.sides,
      value: roll.value,
    }))
  })
}
