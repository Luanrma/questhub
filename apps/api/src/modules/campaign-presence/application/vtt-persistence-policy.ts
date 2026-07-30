export const canonicalVttPersistenceEvents = [
  'presence:session:start',
  'presence:session:pause',
  'presence:session:resume',
  'presence:session:end',
  'vtt:scene:select',
] as const

export type CanonicalVttPersistenceEvent = (typeof canonicalVttPersistenceEvents)[number]

export type VttPersistenceTrigger =
  | {
      kind: 'CANONICAL'
      event: CanonicalVttPersistenceEvent
    }
  | {
      kind: 'FORCED'
      reason: string
    }

export function canonicalVttPersistenceTrigger(event: CanonicalVttPersistenceEvent): VttPersistenceTrigger {
  return { kind: 'CANONICAL', event }
}

export function forcedVttPersistenceTrigger(reason: string): VttPersistenceTrigger {
  const normalizedReason = reason.trim()
  if (!normalizedReason) throw new Error('A persistencia forcada do VTT exige uma razao')
  return { kind: 'FORCED', reason: normalizedReason }
}
