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
  minX?: number
  minY?: number
}

type ResizeHandleProps = {
  box: ResizableBox
  setBox: Dispatch<SetStateAction<ResizableBox>>
  limits: ResizeLimits
  edges?: readonly ResizableEdge[]
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function startEdgeResize({
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
  const minX = limits.minX ?? viewportMargin
  const minY = limits.minY ?? viewportMargin

  function onPointerMove(pointerEvent: globalThis.PointerEvent) {
    const deltaX = pointerEvent.clientX - startX
    const deltaY = pointerEvent.clientY - startY
    const viewportMaxWidth = Math.max(1, window.innerWidth - minX - viewportMargin)
    const viewportMaxHeight = Math.max(1, window.innerHeight - minY - viewportMargin)
    const maxWidth = Math.max(1, Math.min(limits.maxWidth ?? viewportMaxWidth, viewportMaxWidth))
    const maxHeight = Math.max(1, Math.min(limits.maxHeight ?? viewportMaxHeight, viewportMaxHeight))
    const minWidth = Math.min(limits.minWidth, maxWidth)
    const minHeight = Math.min(limits.minHeight, maxHeight)
    const horizontalDelta = edge.includes('e') ? deltaX : edge.includes('w') ? -deltaX : 0
    const verticalDelta = edge.includes('s') ? deltaY : edge.includes('n') ? -deltaY : 0
    const nextWidth = clamp(startBox.width + horizontalDelta, minWidth, maxWidth)
    const nextHeight = clamp(startBox.height + verticalDelta, minHeight, maxHeight)
    const nextX = edge.includes('w') ? startBox.x + (startBox.width - nextWidth) : startBox.x
    const nextY = edge.includes('n') ? startBox.y + (startBox.height - nextHeight) : startBox.y
    const maxX = Math.max(minX, window.innerWidth - nextWidth - viewportMargin)
    const maxY = Math.max(minY, window.innerHeight - nextHeight - viewportMargin)
    const clampedX = clamp(nextX, minX, maxX)
    const clampedY = clamp(nextY, minY, maxY)

    setBox({
      x: clampedX,
      y: clampedY,
      width: Math.min(nextWidth, Math.max(1, window.innerWidth - clampedX - viewportMargin)),
      height: Math.min(nextHeight, Math.max(1, window.innerHeight - clampedY - viewportMargin)),
    })
  }

  function onPointerUp() {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
  }

  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

const allResizableEdges: readonly ResizableEdge[] = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw']

export function ResizableEdges({ box, setBox, limits, edges = allResizableEdges }: ResizeHandleProps) {
  const enabled = (edge: ResizableEdge) => edges.includes(edge)
  return (
    <>
      {enabled('n') ? <span className="absolute inset-x-3 top-0 z-20 h-2 cursor-ns-resize" onPointerDown={(event) => startEdgeResize({ edge: 'n', event, box, setBox, limits })} /> : null}
      {enabled('s') ? <span className="absolute inset-x-3 bottom-0 z-20 h-2 cursor-ns-resize" onPointerDown={(event) => startEdgeResize({ edge: 's', event, box, setBox, limits })} /> : null}
      {enabled('w') ? <span className="absolute inset-y-3 left-0 z-20 w-2 cursor-ew-resize" onPointerDown={(event) => startEdgeResize({ edge: 'w', event, box, setBox, limits })} /> : null}
      {enabled('e') ? <span className="absolute inset-y-3 right-0 z-20 w-2 cursor-ew-resize" onPointerDown={(event) => startEdgeResize({ edge: 'e', event, box, setBox, limits })} /> : null}
      {enabled('nw') ? <span className="absolute left-0 top-0 z-20 h-4 w-4 cursor-nwse-resize" onPointerDown={(event) => startEdgeResize({ edge: 'nw', event, box, setBox, limits })} /> : null}
      {enabled('ne') ? <span className="absolute right-0 top-0 z-20 h-4 w-4 cursor-nesw-resize" onPointerDown={(event) => startEdgeResize({ edge: 'ne', event, box, setBox, limits })} /> : null}
      {enabled('sw') ? <span className="absolute bottom-0 left-0 z-20 h-4 w-4 cursor-nesw-resize" onPointerDown={(event) => startEdgeResize({ edge: 'sw', event, box, setBox, limits })} /> : null}
      {enabled('se') ? <span className="absolute bottom-0 right-0 z-20 h-4 w-4 cursor-nwse-resize" onPointerDown={(event) => startEdgeResize({ edge: 'se', event, box, setBox, limits })} /> : null}
    </>
  )
}
