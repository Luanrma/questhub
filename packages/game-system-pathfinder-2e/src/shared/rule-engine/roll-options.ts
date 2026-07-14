export type RollOptions = ReadonlySet<string>

export function createRollOptions(options: Iterable<string> = []): RollOptions {
  return new Set(options)
}

export function mergeRollOptions(...sets: RollOptions[]): RollOptions {
  const merged = new Set<string>()
  for (const set of sets) {
    for (const option of set) merged.add(option)
  }
  return merged
}
