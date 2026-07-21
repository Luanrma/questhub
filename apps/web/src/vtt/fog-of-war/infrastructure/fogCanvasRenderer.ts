import { hasFogBit } from '../domain/mask'

function renderMask(width: number, height: number, pixel: (index: number) => [number, number, number, number]) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  if (!context) return null
  const image = context.createImageData(width, height)
  for (let index = 0; index < width * height; index += 1) {
    const [red, green, blue, alpha] = pixel(index)
    const offset = index * 4
    image.data[offset] = red
    image.data[offset + 1] = green
    image.data[offset + 2] = blue
    image.data[offset + 3] = alpha
  }
  context.putImageData(image, 0, 0)
  return canvas.toDataURL('image/png')
}

export function renderCurrentVisionMask(width: number, height: number, current: Uint8Array) {
  return renderMask(width, height, (index) => hasFogBit(current, index) ? [255, 255, 255, 255] : [0, 0, 0, 0])
}

export function renderPlayerFogOverlay(input: {
  width: number
  height: number
  current: Uint8Array
  explored: Uint8Array
  unexploredOpacity: number
  exploredOpacity: number
}) {
  return renderMask(input.width, input.height, (index) => {
    if (hasFogBit(input.current, index)) return [0, 0, 0, 0]
    const opacity = hasFogBit(input.explored, index) ? input.exploredOpacity : input.unexploredOpacity
    return [0, 0, 0, Math.round(opacity * 255)]
  })
}

