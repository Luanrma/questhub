declare module '@3d-dice/dice-box' {
  export type DiceBoxNotation =
    | string
    | {
        qty?: number
        sides: number | '100' | 'fate'
        modifier?: number
        groupId?: number | string
        rollId?: number | string
        theme?: string
        themeColor?: string
      }

  export type DiceBoxRollResult = {
    qty: number
    sides: number | '100' | 'fate'
    value: number
    rolls: Array<{
      sides: number | '100' | 'fate'
      groupId: number | string
      rollId: number | string
      theme: string
      themeColor: string
      value: number
    }>
  }

  export type DiceBoxOptions = {
    container: string
    assetPath: string
    origin?: string
    meshFile?: string
    theme?: string
    themeColor?: string
    offscreen?: boolean
    scale?: number
    onRollComplete?: (results: DiceBoxRollResult[]) => void
    onDieComplete?: (result: DiceBoxRollResult['rolls'][number]) => void
    onRemoveComplete?: (result: DiceBoxRollResult['rolls'][number]) => void
    onThemeConfigLoaded?: (themeData: unknown) => void
    onThemeLoaded?: (themeData: unknown) => void
  }

  export default class DiceBox {
    onRollComplete?: (results: DiceBoxRollResult[]) => void
    onDieComplete?: (result: DiceBoxRollResult['rolls'][number]) => void
    onRemoveComplete?: (result: DiceBoxRollResult['rolls'][number]) => void
    onThemeConfigLoaded?: (themeData: unknown) => void
    onThemeLoaded?: (themeData: unknown) => void
    constructor(options: DiceBoxOptions)
    init(): Promise<this>
    roll(notation: DiceBoxNotation | DiceBoxNotation[]): Promise<DiceBoxRollResult[]>
    add(notation: DiceBoxNotation | DiceBoxNotation[]): Promise<DiceBoxRollResult[]>
    clear(): this
    hide(): this
    show(): this
    destroy(): void
    updateConfig(options: Partial<DiceBoxOptions>): Promise<this>
  }
}
