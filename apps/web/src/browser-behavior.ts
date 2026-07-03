import { questhubBestiaryDragType, questhubCharacterDragType } from './vtt/table/config/constants'

const questhubDragTypes = new Set([questhubBestiaryDragType, questhubCharacterDragType])

function hasQuesthubDragType(dataTransfer: DataTransfer) {
  return Array.from(dataTransfer.types).some((type) => questhubDragTypes.has(type))
}

export function disableNativeBrowserDrag() {
  window.addEventListener('dragstart', (event) => {
    if (event.dataTransfer && hasQuesthubDragType(event.dataTransfer)) return
    event.preventDefault()
  })
}
