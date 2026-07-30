type VttWindowRegistration = {
  id: string
  getZIndex: () => number
  close: () => void
  isVisible: () => boolean
}

const registeredWindows = new Map<string, VttWindowRegistration>()

export function registerVttWindow(registration: VttWindowRegistration) {
  registeredWindows.set(registration.id, registration)

  return () => {
    if (registeredWindows.get(registration.id) === registration) {
      registeredWindows.delete(registration.id)
    }
  }
}

export function closeAllVttWindows() {
  const visibleWindows = [...registeredWindows.values()]
    .filter((registration) => registration.isVisible())
    .sort((left, right) => right.getZIndex() - left.getZIndex())

  visibleWindows.forEach((registration) => registration.close())
  return visibleWindows.length
}
