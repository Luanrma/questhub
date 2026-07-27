import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Socket } from 'socket.io-client'
import { diceOptions, maxVisibleDice } from '../config/constants'
import {
  createDiceBox,
  requestDiceResize,
  toDiceEngineRollResults,
  waitForDiceReadyFrame,
  type DiceBoxRollCompleteHandler,
  type DestroyableDiceBox,
} from '../infrastructure/dice-box/diceBoxEngine'
import {
  buildCommand,
  extractRollResults,
  formatChatMessage,
  normalizeGroups,
  parseDiceCommand,
  resolveDiceBoxScale,
  rollCount,
} from '../domain/diceRollDomain'
import { publishDiceRollChatMessage } from '../infrastructure/chat/diceRollChatPublisher'
import {
  DICE_DISPLAY_SETTINGS_CHANGED_EVENT,
  normalizeHexColor,
  readStoredDiceDisplaySettings,
  readStoredDiceThemeColor,
  storeDiceDisplaySettings,
  storeDiceThemeColor,
  type DiceDisplaySettings,
} from '../infrastructure/storage/diceThemeStorage'
import type { DiceRollGroup, DiceRollResultGroup, DiceSides } from '../domain/types'

const diceFadeOutMs = 700

function areDiceDisplaySettingsEqual(left: DiceDisplaySettings, right: DiceDisplaySettings) {
  return left.autoClear === right.autoClear && left.showResultPopup === right.showResultPopup
}

type VttDiceCharacter = {
  id: string
}

type UseVttDiceRollerOptions = {
  campaignId: string
  actor: VttDiceCharacter | null
  socket: Socket | null
  enabled: boolean
  clearSignal: number
  containerId: string
  containerRef: React.RefObject<HTMLDivElement | null>
}

export type DiceResultPopupData = {
  command: string
  groups: DiceRollResultGroup[]
  total: number
}

export function useVttDiceRoller({
  campaignId,
  actor,
  socket,
  enabled,
  clearSignal,
  containerId,
  containerRef,
}: UseVttDiceRollerOptions) {
  const diceBoxRef = useRef<DestroyableDiceBox | null>(null)
  const initPromiseRef = useRef<Promise<DestroyableDiceBox> | null>(null)
  const initializedRef = useRef(false)
  const pendingRollRef = useRef<{ groups: DiceRollGroup[]; command: string } | null>(null)
  const lastClearSignalRef = useRef(clearSignal)
  const autoClearTimeoutRef = useRef<number | null>(null)
  const resultPopupTimeoutRef = useRef<number | null>(null)
  const fadeClearTimeoutRef = useRef<number | null>(null)
  const [initializing, setInitializing] = useState(false)
  const [rolling, setRolling] = useState(false)
  const [command, setCommand] = useState('')
  const [diceThemeColor, setDiceThemeColor] = useState(() => readStoredDiceThemeColor(campaignId))
  const [displaySettings, setDisplaySettings] = useState<DiceDisplaySettings>(() => readStoredDiceDisplaySettings(campaignId))
  const displaySettingsRef = useRef<DiceDisplaySettings>(displaySettings)
  const [quantities, setQuantities] = useState<Record<DiceSides, number>>({ 4: 0, 6: 0, 8: 0, 10: 0, 12: 0, 20: 0 })
  const [visibleRolls, setVisibleRolls] = useState<Array<{ id: string; sides: DiceSides; value: number }>>([])
  const [diceFading, setDiceFading] = useState(false)
  const [resultPopup, setResultPopup] = useState<DiceResultPopupData | null>(null)
  const [warning, setWarning] = useState<string | null>(null)
  const canRollDice = Boolean(enabled && actor?.id && socket)
  const selectedGroups = useMemo(
    () => normalizeGroups(diceOptions.map((sides) => ({ sides, count: quantities[sides] ?? 0 }))),
    [quantities],
  )
  const selectedCount = rollCount(selectedGroups)
  const visibleCount = visibleRolls.length
  const remainingSlots = Math.max(0, maxVisibleDice - visibleCount - selectedCount)

  const publishChatMessage = useCallback(
    async (content: string) => {
      if (!socket || !actor?.id) return

      const result = await publishDiceRollChatMessage({ socket, campaignId, actorId: actor.id, content })
      if (!result.ok) setWarning(result.error)
    },
    [campaignId, actor, socket],
  )

  const cancelAutoClear = useCallback(() => {
    if (autoClearTimeoutRef.current === null) return
    window.clearTimeout(autoClearTimeoutRef.current)
    autoClearTimeoutRef.current = null
  }, [])

  const cancelResultPopupTimeout = useCallback(() => {
    if (resultPopupTimeoutRef.current === null) return
    window.clearTimeout(resultPopupTimeoutRef.current)
    resultPopupTimeoutRef.current = null
  }, [])

  const cancelFadeClearTimeout = useCallback(() => {
    if (fadeClearTimeoutRef.current === null) return
    window.clearTimeout(fadeClearTimeoutRef.current)
    fadeClearTimeoutRef.current = null
  }, [])

  const clearDice = useCallback(() => {
    cancelAutoClear()
    cancelResultPopupTimeout()
    cancelFadeClearTimeout()
    setDiceFading(true)
    setResultPopup(null)
    setWarning(null)
    fadeClearTimeoutRef.current = window.setTimeout(() => {
      diceBoxRef.current?.clear()
      setVisibleRolls([])
      setDiceFading(false)
      fadeClearTimeoutRef.current = null
    }, diceFadeOutMs)
  }, [cancelAutoClear, cancelFadeClearTimeout, cancelResultPopupTimeout])

  const onRollComplete = useCallback<DiceBoxRollCompleteHandler>(
    (results) => {
      const pendingRoll = pendingRollRef.current
      pendingRollRef.current = null
      setRolling(false)

      if (!pendingRoll) return

      const groups = extractRollResults(toDiceEngineRollResults(results), pendingRoll.groups)
      const nextRolls = groups.flatMap((group) =>
        group.values.map((value, index) => ({
          id: `${Date.now()}-${group.sides}-${index}-${value}`,
          sides: group.sides,
          value,
        })),
      )

      const total = groups.reduce((sum, group) => sum + group.values.reduce((groupSum, value) => groupSum + value, 0), 0)

      setVisibleRolls((current) => [...current, ...nextRolls])
      setResultPopup({ command: pendingRoll.command, groups, total })
      void publishChatMessage(formatChatMessage(pendingRoll.command, groups))

      cancelResultPopupTimeout()
      resultPopupTimeoutRef.current = window.setTimeout(() => {
        setResultPopup(null)
      }, 3000)

      cancelAutoClear()
      const currentDisplaySettings = displaySettingsRef.current
      if (currentDisplaySettings.autoClear !== 'manual') {
        autoClearTimeoutRef.current = window.setTimeout(() => {
          clearDice()
        }, currentDisplaySettings.autoClear * 1000)
      }
    },
    [cancelAutoClear, cancelResultPopupTimeout, clearDice, publishChatMessage],
  )

  useEffect(() => {
    return () => {
      cancelAutoClear()
      cancelResultPopupTimeout()
      cancelFadeClearTimeout()
      initializedRef.current = false
      initPromiseRef.current = null
      diceBoxRef.current?.destroy()
      diceBoxRef.current = null
    }
  }, [cancelAutoClear, cancelFadeClearTimeout, cancelResultPopupTimeout])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setDiceThemeColor(readStoredDiceThemeColor(campaignId))
      const nextDisplaySettings = readStoredDiceDisplaySettings(campaignId)
      displaySettingsRef.current = nextDisplaySettings
      setDisplaySettings(nextDisplaySettings)
    })

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [campaignId])

  useEffect(() => {
    const normalizedColor = normalizeHexColor(diceThemeColor)
    storeDiceThemeColor(campaignId, normalizedColor)

    if (!diceBoxRef.current || !initializedRef.current) return
    diceBoxRef.current.updateConfig({ themeColor: normalizedColor }).catch(() => {
      setWarning('Nao foi possivel atualizar a cor dos dados 3D.')
    })
  }, [campaignId, diceThemeColor])

  useEffect(() => {
    displaySettingsRef.current = displaySettings
    storeDiceDisplaySettings(campaignId, displaySettings)
  }, [campaignId, displaySettings])

  useEffect(() => {
    function onDisplaySettingsChanged(event: Event) {
      const detail = (event as CustomEvent<{ campaignId: string; settings: DiceDisplaySettings }>).detail
      if (!detail || detail.campaignId !== campaignId) return
      if (areDiceDisplaySettingsEqual(displaySettingsRef.current, detail.settings)) return
      displaySettingsRef.current = detail.settings
      setDisplaySettings(detail.settings)
    }

    window.addEventListener(DICE_DISPLAY_SETTINGS_CHANGED_EVENT, onDisplaySettingsChanged)

    return () => {
      window.removeEventListener(DICE_DISPLAY_SETTINGS_CHANGED_EVENT, onDisplaySettingsChanged)
    }
  }, [campaignId])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let resizeFrame = 0
    const syncDiceBox = () => {
      window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(() => {
        diceBoxRef.current?.show()
        requestDiceResize(container, { notifyEngine: false })
      })
    }

    const observer = new ResizeObserver(syncDiceBox)
    observer.observe(container)
    window.addEventListener('resize', syncDiceBox)

    return () => {
      window.cancelAnimationFrame(resizeFrame)
      observer.disconnect()
      window.removeEventListener('resize', syncDiceBox)
    }
  }, [containerRef])

  useEffect(() => {
    if (lastClearSignalRef.current === clearSignal) return

    lastClearSignalRef.current = clearSignal
    clearDice()
  }, [clearDice, clearSignal])

  async function getDiceBox() {
    if (diceBoxRef.current && initializedRef.current) return diceBoxRef.current
    if (initPromiseRef.current) return initPromiseRef.current

    const container = containerRef.current
    if (!container) throw new Error('Container de dados indisponivel.')

    setInitializing(true)

    const diceBox = createDiceBox({
      containerId,
      container,
      themeColor: normalizeHexColor(diceThemeColor),
      onRollComplete,
    })

    diceBoxRef.current = diceBox

    initPromiseRef.current = diceBox
      .init()
      .then(async () => {
        initializedRef.current = true
        diceBox.show()
        requestDiceResize(container)
        await waitForDiceReadyFrame(container)
        return diceBox
      })
      .catch((error: unknown) => {
        diceBox.destroy()
        diceBoxRef.current = null
        initializedRef.current = false
        initPromiseRef.current = null
        throw error
      })
      .finally(() => {
        setInitializing(false)
      })

    return initPromiseRef.current
  }

  function setQuantity(sides: DiceSides, rawValue: string) {
    const nextValue = rawValue === '' ? 0 : Math.max(0, Math.floor(Number(rawValue)))
    if (!Number.isFinite(nextValue)) return

    const currentWithoutSide = selectedCount - (quantities[sides] ?? 0)
    const maxForSide = Math.max(0, maxVisibleDice - visibleCount - currentWithoutSide)
    const safeValue = Math.min(nextValue, maxForSide)

    setQuantities((current) => ({ ...current, [sides]: safeValue }))
    if (safeValue > 0) setCommand('')

    if (nextValue > maxForSide) {
      setWarning(`O limite e de ${maxVisibleDice} dados.`)
      return
    }

    setWarning(null)
  }

  function resolveRoll() {
    if (selectedCount > 0) return { groups: selectedGroups, command: buildCommand(selectedGroups) }
    return parseDiceCommand(command)
  }

  async function rollDice() {
    if (!canRollDice || rolling || initializing) return

    const resolved = resolveRoll()
    if ('error' in resolved) {
      setWarning(resolved.error)
      return
    }

    const nextCount = rollCount(resolved.groups)
    if (nextCount <= 0) {
      setWarning('Informe pelo menos um dado.')
      return
    }

    if (nextCount > maxVisibleDice || visibleCount + nextCount > maxVisibleDice) {
      setWarning(`O limite e de ${maxVisibleDice} dados. Clique em Limpar Dados para rolar novamente.`)
      return
    }

    setWarning(null)
    setRolling(true)
    cancelAutoClear()
    cancelResultPopupTimeout()
    cancelFadeClearTimeout()
    setDiceFading(false)
    pendingRollRef.current = resolved

    try {
      const diceBox = await getDiceBox()
      const notation = resolved.groups.map((group) => ({ qty: group.count, sides: group.sides, themeColor: normalizeHexColor(diceThemeColor) }))
      await diceBox.updateConfig({ scale: resolveDiceBoxScale(visibleCount + nextCount) }).catch(() => undefined)
      diceBox.show()
      requestDiceResize(containerRef.current)
      await waitForDiceReadyFrame(containerRef.current)

      void diceBox.add(notation).catch(() => {
        pendingRollRef.current = null
        setRolling(false)
        setWarning('Nao foi possivel rolar os dados 3D.')
      })
      requestDiceResize(containerRef.current)
    } catch {
      pendingRollRef.current = null
      setRolling(false)
      setWarning('Nao foi possivel carregar ou rolar os dados 3D.')
    }
  }

  function updateCommand(value: string) {
    setCommand(value)
    setWarning(null)
  }

  function updateDiceThemeColor(value: string) {
    setDiceThemeColor(normalizeHexColor(value))
  }

  return {
    canRollDice,
    clearDice,
    command,
    displaySettings,
    diceFading,
    diceThemeColor,
    initializing,
    quantities,
    remainingSlots,
    resultPopup,
    rollDice,
    rolling,
    selectedCount,
    setQuantity,
    updateCommand,
    updateDiceThemeColor,
    visibleCount,
    warning,
  }
}
