export type ModalBounds = {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

export function calculateBounds(modal: HTMLDivElement | null): ModalBounds {
  const margin = 12
  const width = modal?.offsetWidth ?? Math.min(window.innerWidth - margin * 2, 860)
  const height = modal?.offsetHeight ?? Math.min(window.innerHeight - margin * 2, 760)

  return {
    minX: margin,
    maxX: Math.max(margin, window.innerWidth - width - margin),
    minY: margin,
    maxY: Math.max(margin, window.innerHeight - height - margin),
  }
}
