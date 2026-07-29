export type TokenImagePickerBoundaryEvent = {
  target: EventTarget
  currentTarget: EventTarget
  stopPropagation: () => void
}

export function stopTokenImagePickerClickPropagation(
  event: Pick<TokenImagePickerBoundaryEvent, 'stopPropagation'>,
): void {
  event.stopPropagation()
}

export function handleTokenImagePickerBackdropMouseDown(
  event: TokenImagePickerBoundaryEvent,
  saving: boolean,
  onCancel: () => void,
): void {
  event.stopPropagation()
  if (event.target === event.currentTarget && !saving) onCancel()
}
