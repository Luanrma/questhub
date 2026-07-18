import { useCallback, useEffect, useRef, useState } from 'react'
import { positionAlongMovementPath, smoothMovementProgress } from '../domain/tokenMovement'
import type { VttPlayerToken, VttTokenMovementStartedPayload } from '../domain/types'

export function useSmoothTokenMovement(
  onPosition: (tokenId: string, position: VttPlayerToken['position']) => void,
  onComplete?: (tokenId: string) => void,
) {
  const animationFramesRef = useRef(new Map<string, number>())
  const onPositionRef = useRef(onPosition)
  const onCompleteRef = useRef(onComplete)
  const [movingTokenIds, setMovingTokenIds] = useState<Set<string>>(() => new Set())

  useEffect(() => {
    onPositionRef.current = onPosition
    onCompleteRef.current = onComplete
  }, [onComplete, onPosition])

  const startMovement = useCallback((movement: VttTokenMovementStartedPayload) => {
    const previousFrame = animationFramesRef.current.get(movement.tokenId)
    if (previousFrame !== undefined) cancelAnimationFrame(previousFrame)

    const localStartedAt = performance.now() + Math.max(0, movement.startedAt - Date.now())
    setMovingTokenIds((current) => new Set(current).add(movement.tokenId))

    function animate(now: number) {
      const elapsed = now - localStartedAt
      const linearProgress = Math.min(elapsed / movement.durationMs, 1)
      const position = positionAlongMovementPath(movement.path, smoothMovementProgress(linearProgress))
      onPositionRef.current(movement.tokenId, position)

      if (linearProgress < 1) {
        animationFramesRef.current.set(movement.tokenId, requestAnimationFrame(animate))
        return
      }

      animationFramesRef.current.delete(movement.tokenId)
      onCompleteRef.current?.(movement.tokenId)
      setMovingTokenIds((current) => {
        const next = new Set(current)
        next.delete(movement.tokenId)
        return next
      })
    }

    animationFramesRef.current.set(movement.tokenId, requestAnimationFrame(animate))
  }, [])

  useEffect(() => () => {
    animationFramesRef.current.forEach((frame) => cancelAnimationFrame(frame))
    animationFramesRef.current.clear()
  }, [])

  return { startMovement, movingTokenIds }
}
