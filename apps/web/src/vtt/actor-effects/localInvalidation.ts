export type LocalActorEffectsChangedPayload = {
  campaignId: string
  actorId: string
}

export const LOCAL_ACTOR_EFFECTS_CHANGED_EVENT = 'questhub:vtt:actor-effects:changed'

export function publishLocalActorEffectsChanged(payload: LocalActorEffectsChangedPayload) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent<LocalActorEffectsChangedPayload>(LOCAL_ACTOR_EFFECTS_CHANGED_EVENT, {
    detail: payload,
  }))
}

export function subscribeLocalActorEffectsChanged(
  listener: (payload: LocalActorEffectsChangedPayload) => void,
) {
  if (typeof window === 'undefined') return () => undefined

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<LocalActorEffectsChangedPayload>
    if (!customEvent.detail) return
    listener(customEvent.detail)
  }

  window.addEventListener(LOCAL_ACTOR_EFFECTS_CHANGED_EVENT, handler)
  return () => window.removeEventListener(LOCAL_ACTOR_EFFECTS_CHANGED_EVENT, handler)
}
