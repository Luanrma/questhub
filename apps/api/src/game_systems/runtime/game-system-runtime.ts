import type {
  CharacterSheetRuntimeAdapter,
  CharacterSheetRuntimeResult,
} from './contracts'

export class GameSystemRuntime {
  resolveCharacterSheet<TData, TDerived>(
    adapter: CharacterSheetRuntimeAdapter<TData, TDerived>,
    input?: unknown,
  ): CharacterSheetRuntimeResult<TData, TDerived> {
    const migrated = input === undefined
      ? adapter.createDefault()
      : adapter.migrate(input)
    const data = adapter.parse(migrated)
    const result = adapter.derive(data)

    return {
      systemKey: adapter.systemKey,
      schemaVersion: adapter.schemaVersion,
      data,
      derived: result.derived,
      warnings: result.warnings,
    }
  }
}

export const gameSystemRuntime = new GameSystemRuntime()
