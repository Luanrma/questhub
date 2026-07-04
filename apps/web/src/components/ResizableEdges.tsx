import type { Dispatch, PointerEvent, SetStateAction } from 'react'

export type ResizableEdge = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

export type ResizableBox = {
  x: number
  y: number
  width: number
  height: number
}

type ResizeLimits = {
  minWidth: number
  minHeight: number
  maxWidth?: number
  maxHeight?: number
  viewportMargin?: number
  minY?: number
}

type ResizeHandleProps = {
  box: ResizableBox
  setBox: Dispatch<SetStateAction<ResizableBox>>
  limits: ResizeLimits
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function startEdgeResize({
  edge,
  event,
  box,
  setBox,
  limits,
}: ResizeHandleProps & {
  edge: ResizableEdge
  event: PointerEvent<HTMLElement>
}) {
  event.preventDefault()
  event.stopPropagation()

  const startX = event.clientX
  const startY = event.clientY
  const startBox = box
  const viewportMargin = limits.viewportMargin ?? 16
  const minY = limits.minY ?? viewportMargin

  function onPointerMove(pointerEvent: globalThis.PointerEvent) {
    const deltaX = pointerEvent.clientX - startX
    const deltaY = pointerEvent.clientY - startY
    const maxWidth = limits.maxWidth ?? window.innerWidth - viewportMargin * 2
    const maxHeight = limits.maxHeight ?? window.innerHeight - minY - viewportMargin
    const horizontalDelta = edge.includes('e') ? deltaX : edge.includes('w') ? -deltaX : 0
    const verticalDelta = edge.includes('s') ? deltaY : edge.includes('n') ? -deltaY : 0
    const nextWidth = clamp(startBox.width + horizontalDelta, limits.minWidth, Math.min(maxWidth, window.innerWidth - viewportMargin))
    const nextHeight = clamp(startBox.height + verticalDelta, limits.minHeight, Math.min(maxHeight, window.innerHeight - minY))
    const nextX = edge.includes('w') ? startBox.x + (startBox.width - nextWidth) : startBox.x
    const nextY = edge.includes('n') ? startBox.y + (startBox.height - nextHeight) : startBox.y
    const clampedX = clamp(nextX, viewportMargin, window.innerWidth - nextWidth - viewportMargin)
    const clampedY = clamp(nextY, minY, window.innerHeight - nextHeight - viewportMargin)

    setBox({
      x: clampedX,
      y: clampedY,
      width: Math.min(nextWidth, window.innerWidth - clampedX - viewportMargin),
      height: Math.min(nextHeight, window.innerHeight - clampedY - viewportMargin),
    })
  }

  function onPointerUp() {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
  }

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

export function ResizableEdges({ box, setBox, limits }: ResizeHandleProps) {
  return (
    <>
      <span className="absolute inset-x-3 top-0 z-20 h-2 cursor-ns-resize" onPointerDown={(event) => startEdgeResize({ edge: 'n', event, box, setBox, limits })} />
      <span className="absolute inset-x-3 bottom-0 z-20 h-2 cursor-ns-resize" onPointerDown={(event) => startEdgeResize({ edge: 's', event, box, setBox, limits })} />
      <span className="absolute inset-y-3 left-0 z-20 w-2 cursor-ew-resize" onPointerDown={(event) => startEdgeResize({ edge: 'w', event, box, setBox, limits })} />
      <span className="absolute inset-y-3 right-0 z-20 w-2 cursor-ew-resize" onPointerDown={(event) => startEdgeResize({ edge: 'e', event, box, setBox, limits })} />
      <span className="absolute left-0 top-0 z-20 h-4 w-4 cursor-nwse-resize" onPointerDown={(event) => startEdgeResize({ edge: 'nw', event, box, setBox, limits })} />
      <span className="absolute right-0 top-0 z-20 h-4 w-4 cursor-nesw-resize" onPointerDown={(event) => startEdgeResize({ edge: 'ne', event, box, setBox, limits })} />
      <span className="absolute bottom-0 left-0 z-20 h-4 w-4 cursor-nesw-resize" onPointerDown={(event) => startEdgeResize({ edge: 'sw', event, box, setBox, limits })} />
      <span className="absolute bottom-0 right-0 z-20 h-4 w-4 cursor-nwse-resize" onPointerDown={(event) => startEdgeResize({ edge: 'se', event, box, setBox, limits })} />
    </>
  )
}
