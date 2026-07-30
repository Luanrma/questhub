export const encounterCarouselCardSpacing = 138
export const encounterCarouselMaximumVisibleCards = 10

const encounterCarouselEdgeCardHalfWidth = 63
const encounterCarouselActiveCardHalfWidth = 72
const encounterCarouselNavigationWidth = 36
const encounterCarouselNavigationGap = 10

export function circularEncounterOffset(
  index: number,
  activeIndex: number,
  participantCount: number,
) {
  const forward = (index - activeIndex + participantCount) % participantCount
  const backward = forward - participantCount
  return Math.abs(forward) <= Math.abs(backward) ? forward : backward
}

export function encounterCarouselWindow(
  participantCount: number,
  viewportWidth: number,
  navigationVisible = false,
) {
  const maximumLimit = Math.max(
    1,
    Math.min(encounterCarouselMaximumVisibleCards, participantCount),
  )
  let visibleLimit = maximumLimit

  while (
    visibleLimit > 1 &&
    encounterCarouselRequiredWidth(visibleLimit, navigationVisible) > viewportWidth
  ) {
    visibleLimit -= 1
  }

  const sideCardCount = Math.max(0, visibleLimit - 1)
  const leftSlots = Math.floor(sideCardCount / 2)

  return {
    visibleLimit,
    leftSlots,
    rightSlots: sideCardCount - leftSlots,
  }
}

function encounterCarouselRequiredWidth(
  visibleLimit: number,
  navigationVisible: boolean,
) {
  const sideCardCount = Math.max(0, visibleLimit - 1)
  const leftSlots = Math.floor(sideCardCount / 2)
  const rightSlots = sideCardCount - leftSlots
  const edgeHalfWidth = visibleLimit === 1
    ? encounterCarouselActiveCardHalfWidth
    : encounterCarouselEdgeCardHalfWidth
  const navigationExtent = navigationVisible
    ? encounterCarouselNavigationWidth + encounterCarouselNavigationGap
    : 0
  const largestSide = Math.max(leftSlots, rightSlots)

  return 2 * (
    largestSide * encounterCarouselCardSpacing +
    edgeHalfWidth +
    navigationExtent
  )
}

export function isEncounterCarouselOffsetVisible(
  offset: number,
  leftSlots: number,
  rightSlots: number,
) {
  return offset >= -leftSlots && offset <= rightSlots
}

export function encounterCarouselDisplayOffset(
  offset: number,
  leftSlots: number,
  rightSlots: number,
) {
  if (isEncounterCarouselOffsetVisible(offset, leftSlots, rightSlots)) {
    return offset
  }
  return offset < -leftSlots ? -leftSlots - 1 : rightSlots + 1
}

export function encounterCarouselCardProminence(
  offset: number,
) {
  if (offset === 0) return 1
  const maximumDistance = encounterCarouselMaximumVisibleCards / 2
  const normalizedDistance = Math.min(
    1,
    Math.abs(offset) / maximumDistance,
  )
  return 1 - 0.65 * normalizedDistance ** 1.7
}
