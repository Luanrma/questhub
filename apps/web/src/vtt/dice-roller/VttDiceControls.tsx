import DiceBox, { type DiceBoxRollResult } from '@3d-dice/dice-box'
import { Dice5, Loader2, Palette, RotateCcw, X } from 'lucide-react'
import { memo, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import type { Socket } from 'socket.io-client'
import { Button } from '../../components/Button'
import { CHAT_LOCAL_MESSAGE_EVENT, type ChatMessage } from '../../components/CampaignChat'
import type { DiceRollGroup, DiceRollResultGroup, DiceSides } from './types'

const diceOptions = [20, 12, 10, 8, 6, 4] as const
const diceAssetPath = '/assets/dice-box/'
const maxVisibleDice = 20
const defaultDiceThemeColor = '#16a34a'

type DestroyableDiceBox = DiceBox & {
  destroy: () => void
}

type VttDiceCharacter = {
  id: string
}

type ChatAck = {
  ok: boolean
  error?: string
  message?: ChatMessage
}

type VttDiceControlsProps = {
  campaignId: string
  character: VttDiceCharacter | null
  socket: Socket | null
  enabled: boolean
  onClose?: () => void
  className?: string
}

type VisibleRoll = {
  id: string
  sides: DiceSides
  value: number
}

function ensureDestroy(diceBox: DiceBox, container: HTMLDivElement): DestroyableDiceBox {
  const destroyableDiceBox = diceBox as DestroyableDiceBox

  if (typeof destroyableDiceBox.destroy === 'function') return destroyableDiceBox

  destroyableDiceBox.destroy = () => {
    diceBox.clear()
    diceBox.hide()
    container.querySelectorAll('canvas').forEach((canvas) => canvas.remove())
  }

  return destroyableDiceBox
}

function styleDiceCanvas(container: HTMLDivElement) {
  container.querySelectorAll<HTMLCanvasElement>('canvas').forEach((canvas) => {
    canvas.style.display = 'block'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.opacity = '1'
    canvas.style.pointerEvents = 'none'
    canvas.style.background = 'transparent'
  })
}

function requestDiceResize(container: HTMLDivElement | null) {
  if (!container) return

  const sync = () => {
    styleDiceCanvas(container)
    window.dispatchEvent(new Event('resize'))
  }

  sync()
  window.requestAnimationFrame(sync)
  window.requestAnimationFrame(() => window.requestAnimationFrame(sync))
}

function diceColorStorageKey(campaignId: string) {
  return `questhub:vtt:dice-theme-color:${campaignId}`
}

function normalizeHexColor(value: string | null) {
  if (!value) return defaultDiceThemeColor
  return /^#[0-9a-f]{6}$/i.test(value) ? value : defaultDiceThemeColor
}

function readStoredDiceThemeColor(campaignId: string) {
  if (typeof window === 'undefined') return defaultDiceThemeColor

  try {
    return normalizeHexColor(window.localStorage.getItem(diceColorStorageKey(campaignId)))
  } catch {
    return defaultDiceThemeColor
  }
}

function storeDiceThemeColor(campaignId: string, color: string) {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(diceColorStorageKey(campaignId), normalizeHexColor(color))
  } catch {
    // Configuracao visual local: falha de storage nao deve bloquear a mesa.
  }
}

function isDiceSides(value: number): value is DiceSides {
  return value === 4 || value === 6 || value === 8 || value === 10 || value === 12 || value === 20
}

function normalizeGroups(groups: DiceRollGroup[]) {
  return diceOptions
    .map((sides) => ({
      sides,
      count: groups.filter((group) => group.sides === sides).reduce((total, group) => total + group.count, 0),
    }))
    .filter((group) => group.count > 0)
}

function rollCount(groups: DiceRollGroup[]) {
  return groups.reduce((total, group) => total + group.count, 0)
}

function parseDiceCommand(input: string): { groups: DiceRollGroup[]; command: string } | { error: string } {
  const normalized = input.trim().toLowerCase().replace(/\s+/g, '')
  if (!normalized) return { error: 'Informe uma rolagem.' }

  const parts = normalized.split('-').filter(Boolean)
  if (!parts.length || parts.join('-') !== normalized) return { error: 'Use o formato 1d20-5d6-3d10.' }

  const groups: DiceRollGroup[] = []

  for (const part of parts) {
    const match = part.match(/^(\d*)d(\d+)$/)
    if (!match) return { error: 'Use apenas grupos como 1d20, 5d6 ou 3d10.' }

    const count = match[1] ? Number(match[1]) : 1
    const sides = Number(match[2])

    if (!Number.isInteger(count) || count <= 0) return { error: 'A quantidade de dados precisa ser maior que zero.' }
    if (!isDiceSides(sides)) return { error: 'Use apenas D4, D6, D8, D10, D12 ou D20.' }

    groups.push({ sides, count })
  }

  const normalizedGroups = normalizeGroups(groups)
  const command = normalizedGroups.map((group) => `${group.count}d${group.sides}`).join('-').toUpperCase()
  return { groups: normalizedGroups, command }
}

function buildCommand(groups: DiceRollGroup[]) {
  return normalizeGroups(groups)
    .map((group) => `${group.count}d${group.sides}`)
    .join('-')
    .toUpperCase()
}

function extractRollResults(results: DiceBoxRollResult[], groups: DiceRollGroup[]): DiceRollResultGroup[] {
  const fallbackGroups = groups.map((group) => ({
    ...group,
    values: Array.from({ length: group.count }, () => Math.floor(Math.random() * group.sides) + 1),
  }))

  if (!Array.isArray(results) || !results.length) return fallbackGroups

  const bySides = new Map<DiceSides, number[]>()

  results.forEach((result) => {
    const rolls = Array.isArray(result.rolls) ? result.rolls : []
    rolls.forEach((roll) => {
      const sides = typeof roll.sides === 'number' ? roll.sides : Number(roll.sides)
      if (!isDiceSides(sides)) return

      const value = typeof roll.value === 'number' && Number.isFinite(roll.value) ? Math.max(1, Math.min(sides, Math.round(roll.value))) : null
      if (value === null) return

      bySides.set(sides, [...(bySides.get(sides) ?? []), value])
    })
  })

  return groups.map((group) => {
    const values = bySides.get(group.sides)?.slice(-group.count) ?? []
    while (values.length < group.count) values.push(Math.floor(Math.random() * group.sides) + 1)
    return { ...group, values }
  })
}

function formatChatMessage(command: string, groups: DiceRollResultGroup[]) {
  const total = groups.reduce((sum, group) => sum + group.values.reduce((groupSum, value) => groupSum + value, 0), 0)
  const details = groups.map((group) => `D${group.sides}: ${group.values.join(', ')}`).join(' | ')
  return `ROLOU ${command} | ${details} | TOTAL: ${total}`
}

export const VttDiceControls = memo(function VttDiceControls({
  campaignId,
  character,
  socket,
  enabled,
  onClose,
  className = '',
}: VttDiceControlsProps) {
  const reactId = useId()
  const containerIdRef = useRef(`vtt-dice-box-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const diceBoxRef = useRef<DestroyableDiceBox | null>(null)
  const initPromiseRef = useRef<Promise<DestroyableDiceBox> | null>(null)
  const initializedRef = useRef(false)
  const rolledOnceRef = useRef(false)
  const pendingRollRef = useRef<{ groups: DiceRollGroup[]; command: string } | null>(null)
  const [initializing, setInitializing] = useState(false)
  const [rolling, setRolling] = useState(false)
  const [command, setCommand] = useState('')
  const [diceThemeColor, setDiceThemeColor] = useState(() => readStoredDiceThemeColor(campaignId))
  const [quantities, setQuantities] = useState<Record<DiceSides, number>>({ 4: 0, 6: 0, 8: 0, 10: 0, 12: 0, 20: 0 })
  const [visibleRolls, setVisibleRolls] = useState<VisibleRoll[]>([])
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

      try {
        const ack = await new Promise<ChatAck>((resolve, reject) => {
          socket.timeout(5000).emit('chat:message:create', { campaignId, characterId: character.id, content }, (err: Error | null, response?: ChatAck) => {
            if (err) {
              reject(new Error('Tempo esgotado ao publicar rolagem.'))
              return
            }

            resolve(response ?? { ok: false, error: 'Resposta invalida do servidor.' })
          })
        })

        if (!ack.ok || !ack.message) {
          setWarning(ack.error ?? 'Nao foi possivel publicar a rolagem no chat.')
          return
        }

        window.dispatchEvent(new CustomEvent<ChatMessage>(CHAT_LOCAL_MESSAGE_EVENT, { detail: ack.message }))
      } catch (err) {
        setWarning(err instanceof Error ? err.message : 'Nao foi possivel publicar a rolagem no chat.')
      }
    },
    [campaignId, character?.id, socket],
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
    const nextColor = readStoredDiceThemeColor(campaignId)
    setDiceThemeColor(nextColor)
  }, [campaignId])

  useEffect(() => {
    const normalizedColor = normalizeHexColor(diceThemeColor)
    storeDiceThemeColor(campaignId, normalizedColor)

    if (!diceBoxRef.current || !initializedRef.current) return
    diceBoxRef.current.updateConfig({ themeColor: normalizedColor }).catch(() => {
      setWarning('Nao foi possivel atualizar a cor dos dados 3D.')
    })
  }, [campaignId, diceThemeColor])

  async function getDiceBox() {
    if (diceBoxRef.current && initializedRef.current) return diceBoxRef.current
    if (initPromiseRef.current) return initPromiseRef.current

    const container = containerRef.current
    if (!container) throw new Error('Container de dados indisponivel.')

    setInitializing(true)

    const diceBox = ensureDestroy(
      new DiceBox({
        container: `#${containerIdRef.current}`,
        assetPath: diceAssetPath,
        theme: 'default',
        themeColor: normalizeHexColor(diceThemeColor),
        offscreen: true,
        scale: 8,
      }),
      container,
    )

    diceBoxRef.current = diceBox

    diceBox.onRollComplete = (results: DiceBoxRollResult[]) => {
      const pendingRoll = pendingRollRef.current
      pendingRollRef.current = null
      setRolling(false)

      if (!pendingRoll) return

      const groups = extractRollResults(results, pendingRoll.groups)
      const nextRolls = groups.flatMap((group) =>
        group.values.map((value, index) => ({
          id: `${Date.now()}-${group.sides}-${index}-${value}`,
          sides: group.sides,
          value,
        })),
      )

      setVisibleRolls((current) => [...current, ...nextRolls])
      void publishChatMessage(formatChatMessage(pendingRoll.command, groups))
    }

    initPromiseRef.current = diceBox
      .init()
      .then(() => {
        initializedRef.current = true
        diceBox.show()
        requestDiceResize(container)
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
    rolledOnceRef.current = false
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
      diceBox.show()
      requestDiceResize(containerRef.current)

      if (rolledOnceRef.current) {
        void diceBox.add(notation).catch(() => {
          pendingRollRef.current = null
          setRolling(false)
          setWarning('Nao foi possivel rolar os dados 3D.')
        })
        requestDiceResize(containerRef.current)
      } else {
        void diceBox.roll(notation).catch(() => {
          pendingRollRef.current = null
          setRolling(false)
          setWarning('Nao foi possivel rolar os dados 3D.')
        })
        rolledOnceRef.current = true
        requestDiceResize(containerRef.current)
      }
    } catch {
      pendingRollRef.current = null
      setRolling(false)
      setWarning('Nao foi possivel carregar ou rolar os dados 3D.')
    }
  }

  return (
    <div className={className}>
      <div className={['pointer-events-none absolute inset-0 z-20', visibleCount || rolling ? 'opacity-100' : 'opacity-0'].join(' ')}>
        <div
          ref={containerRef}
          id={containerIdRef.current}
          className="absolute left-1/2 top-1/2 h-[min(620px,70vh)] w-[min(920px,70vw)] -translate-x-1/2 -translate-y-1/2"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      <div className="pointer-events-auto absolute left-24 top-20 w-[min(360px,calc(100vw-128px))] rounded-lg border border-white/10 bg-black/60 p-3 text-white shadow-2xl backdrop-blur">
        <div className="mb-2 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase text-zinc-400">
            <Dice5 className="h-4 w-4 text-indigo-300" />
            Dados
          </div>
          <button
            type="button"
            title="Fechar dados"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-300 transition hover:bg-white/10 hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {warning ? <div className="mb-2 rounded-md border border-red-400/30 bg-red-500/15 px-3 py-2 text-xs font-semibold text-red-200">{warning}</div> : null}

        <div className="mb-3 flex items-center gap-2">
          <Dice5 className="h-4 w-4 text-indigo-300" />
          <input
            type="text"
            value={command}
            disabled={!canRollDice || selectedCount > 0}
            placeholder="1d20-5d6-3d10"
            className="h-9 min-w-0 flex-1 rounded-md border border-white/10 bg-black/45 px-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-300/40 disabled:cursor-not-allowed disabled:opacity-60"
            onChange={(event) => {
              setCommand(event.target.value)
              setWarning(null)
            }}
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {diceOptions.map((sides) => (
            <label key={sides} className="grid gap-1 text-[10px] font-semibold uppercase text-zinc-400">
              D{sides}
              <input
                type="number"
                min={0}
                max={Math.max(0, remainingSlots + (quantities[sides] ?? 0))}
                value={quantities[sides] || ''}
                placeholder="0"
                disabled={!canRollDice}
                className="h-8 rounded-md border border-white/10 bg-black/45 px-2 text-sm font-semibold text-white outline-none transition placeholder:text-zinc-700 focus:border-indigo-300/40 disabled:cursor-not-allowed disabled:opacity-60"
                onChange={(event) => setQuantity(sides, event.target.value)}
              />
            </label>
          ))}
        </div>

        <label className="mt-3 flex items-center justify-between gap-3 rounded-md border border-white/10 bg-black/35 px-3 py-2 text-sm">
          <span className="flex items-center gap-2 text-zinc-200">
            <Palette className="h-4 w-4 text-zinc-500" />
            Cor dos dados
          </span>
          <input
            type="color"
            value={diceThemeColor}
            className="h-8 w-12 rounded border border-white/10 bg-transparent p-1"
            onChange={(event) => setDiceThemeColor(normalizeHexColor(event.target.value))}
          />
        </label>

        <div className="mt-3 flex items-center gap-2">
          <Button type="button" variant="primary" className="h-9 flex-1 gap-2 px-3" disabled={!canRollDice || rolling || initializing} onClick={() => void rollDice()}>
            {rolling || initializing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Dice5 className="h-4 w-4" />}
            Rolar Dados
          </Button>
          <button
            type="button"
            title="Limpar Dados"
            className="flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-white/10 px-3 text-xs font-semibold text-zinc-200 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!visibleCount}
            onClick={clearDice}
          >
            <RotateCcw className="h-4 w-4" />
            Limpar Dados
          </button>
        </div>

        <div className="mt-2 text-right text-[10px] uppercase text-zinc-500">
          {visibleCount}/{maxVisibleDice} dados na mesa
        </div>
      </div>
    </div>
  )
})
