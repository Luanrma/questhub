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
import { normalizeHexColor, readStoredDiceThemeColor, storeDiceThemeColor } from '../infrastructure/storage/diceThemeStorage'
import type { DiceRollGroup, DiceSides } from '../domain/types'

type VttDiceCharacter = {
  id: string
}

type UseVttDiceRollerOptions = {
  campaignId: string
  character: VttDiceCharacter | null
  socket: Socket | null
  enabled: boolean
  clearSignal: number
  containerId: string
  containerRef: React.RefObject<HTMLDivElement | null>
}

export function useVttDiceRoller({
  campaignId,
  character,
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
  const [initializing, setInitializing] = useState(false)
  const [rolling, setRolling] = useState(false)
  const [command, setCommand] = useState('')
  const [diceThemeColor, setDiceThemeColor] = useState(() => readStoredDiceThemeColor(campaignId))
  const [quantities, setQuantities] = useState<Record<DiceSides, number>>({ 4: 0, 6: 0, 8: 0, 10: 0, 12: 0, 20: 0 })
  const [visibleRolls, setVisibleRolls] = useState<Array<{ id: string; sides: DiceSides; value: number }>>([])
  const [warning, setWarning] = useState<string | null>(null)
  const canRollDice = Boolean(enabled && character?.id && socket)
  const selectedGroups = useMemo(
    () => normalizeGroups(diceOptions.map((sides) => ({ sides, count: quantities[sides] ?? 0 }))),
    [quantities],
  )
  const selectedCount = rollCount(selectedGroups)
  const visibleCount = visibleRolls.length
  const remainingSlots = Math.max(0, maxVisibleDice - visibleCount - selectedCount)

  const publishChatMessage = useCallback(
    async (content: string) => {
      if (!socket || !character?.id) return

      const result = await publishDiceRollChatMessage({ socket, campaignId, characterId: character.id, content })
      if (!result.ok) setWarning(result.error)
    },
    [campaignId, character?.id, socket],
  )

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

      setVisibleRolls((current) => [...current, ...nextRolls])
      void publishChatMessage(formatChatMessage(pendingRoll.command, groups))
    },
    [publishChatMessage],
  )

  useEffect(() => {
    return () => {
      initializedRef.current = false
      initPromiseRef.current = null
      diceBoxRef.current?.destroy()
      diceBoxRef.current = null
    }
  }, [])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setDiceThemeColor(readStoredDiceThemeColor(campaignId))
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
  }, [clearSignal])

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

  function clearDice() {
    diceBoxRef.current?.clear()
    setVisibleRolls([])
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
    diceThemeColor,
    initializing,
    quantities,
    remainingSlots,
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
