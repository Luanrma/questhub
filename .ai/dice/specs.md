# Modulo: Dice (Specs & Contracts)

## 1. Parsing

```ts
// packages/game-system-core/src/shared/dice/dice-formula.ts

export type DiceFormula =
  | { kind: 'dice'; count: number; sides: number; bonus: number }
  | { kind: 'flat'; amount: number }

export function parseDiceFormula(raw: string): DiceFormula | null
```

* `"6d6"` -> `{ kind: 'dice', count: 6, sides: 6, bonus: 0 }`;
* `"1d8+4"` -> `{ kind: 'dice', count: 1, sides: 8, bonus: 4 }`;
* `"10"` -> `{ kind: 'flat', amount: 10 }`;
* `count <= 0` ou `sides <= 0` -> `null`;
* qualquer outro formato (`"@item.rank"`, `"1d6-2"`, `"2d6+1d4"`, vazio) -> `null`, nunca aproximado.

## 2. Rolagem (autoritativa, server-side)

```ts
// packages/game-system-core/src/server/dice/roll-dice-formula.ts

export type DiceRollResult = { total: number; rolls: number[] }

export function rollDiceFormula(formula: DiceFormula, rollDie?: (sides: number) => number): DiceRollResult
export function rollD20(rollDie?: (sides: number) => number): number
```

* `rollDie` default: `crypto.randomInt(1, sides + 1)` (`node:crypto`, inclusivo dos dois lados).
* `rollDiceFormula` com `formula.kind === 'flat'` retorna `{ total: formula.amount, rolls: [] }` (nenhum dado fisico rolado).
* `rollDiceFormula` com `formula.kind === 'dice'` rola `count` dados de `sides` lados, soma `bonus`; `rolls` guarda cada resultado individual (para exibir no chat/log, ex.: "3 + 5 + 2 + 4 = 14").
* `rollD20()` e um atalho para `rollDiceFormula({kind:'dice', count:1, sides:20, bonus:0}, rollDie).total` — usado por checks/salvamentos.

## 3. Criterios de Aceitacao
1. `parseDiceFormula` e puro — nenhuma dependencia de `crypto`/Node, roda em testes sem mock.
2. `rollDiceFormula`/`rollD20` com `rollDie` fixo (ex.: sempre retorna 3) produzem resultado deterministico, testado.
3. `rollDiceFormula`/`rollD20` sem `rollDie` (RNG real) produzem valores sempre dentro de `[count, count*sides+bonus]` (dado) ou `[1,20]` (d20) — teste estatistico de bounds, nao de valor exato.
4. Nenhuma funcao deste modulo lanca excecao — parsing invalido retorna `null`, nunca `throw`.
