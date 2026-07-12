# Submodulo: Vida Maxima Pathfinder 2e (Skills & Tech)

## 1. Stack
* TypeScript puro para a formula (funcao pura, sem React/DOM/Prisma/Socket) — mesmo padrao de `armor-class.ts`.
* Zod para validacao do novo campo de ficha (`hitPoints.manualAdjustment`), com `.default(0)` para compatibilidade retroativa.
* `node:test` + `node:assert/strict` para os testes da formula, seguindo o runner ja usado em `shared/armor-class.test.ts`.

## 2. Padroes
* **Single Source of Formula:** a formula de vida maxima vive em uma unica funcao pura, `calculateMaximumHitPoints`, em `packages/game-system-pathfinder-2e/src/shared/hit-points.ts`. Frontend importa essa funcao; a formula nunca e duplicada.
* **Persisted Snapshot, Not Derived-on-Read:** ao contrario de Armor Class, `hitPoints.maximum` e um valor persistido, recalculado pelo frontend a cada mudanca relevante e salvo como parte normal da ficha — o mesmo padrao ja usado para `skills`/`savingThrows`/`perception` (`.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 8: "backend nao calcula valores derivados... apenas valida e persiste o snapshot calculado pelo frontend"). O backend so valida `maximum >= 0` (ja existente) e `manualAdjustment` inteiro (novo); nunca recalcula.
* **Ability Modifier as Input:** `calculateMaximumHitPoints` recebe `constitutionModifier` ja calculado, nao o score bruto — mesmo estilo de `calculateArmorClass`, que recebe `dexterityModifier` pronto. O calculo do modificador (`Math.floor((score - 10) / 2)`) continua onde ja existe hoje, no componente da ficha.
* **Two Reconciliation Triggers:** mudanca de `identity.level` aciona `applyMaximumHitPointsIncrease` (soma o delta positivo ao `current`, simulando o ganho de HP do level-up). Qualquer outra mudanca de insumo da formula (Constituicao, ancestralidade, classe, `manualAdjustment`) aciona `initializeCurrentHitPoints` (so inicializa `current` na primeira vez; caso contrario, apenas garante `current <= maximum`, nunca cura). Nao existe um terceiro caminho generico — misturar os dois esconderia cura acidental.
* **Catalog Facts, Not Duplicated Numbers:** HP de ancestralidade (`Pathfinder2eAncestryEntry.hitPoints`) e HP por nivel de classe (`Pathfinder2eClassEntry.hitPointsPerLevel`) ja existem no catalogo (`.ai/game_systems/pathfinder_2e/character_options/specs.md` secao 4) — nao sao redefinidos aqui. O frontend ja busca a entrada completa de ancestralidade/classe selecionada (`useCharacterOptionDetails`, usado por `BuildChoicesPanel`); o calculo de vida reaproveita a mesma busca.
* **GM Override Survives Until Next Recalculation:** Mestre pode digitar `hitPoints.maximum` diretamente na ficha (campo habilitado apenas para Mestre) ou via editor de combate (`vtt:combat:health:set`, ja gated por `canControlCampaignAsMaster`). Esse valor fica de pe ate a proxima mudanca de nivel/Constituicao/ancestralidade/classe/ajuste manual, quando a formula recalcula por cima. Nao existe flag de "override travado" — e um comportamento simples de ultima-escrita-vence nos insumos da formula.

## 3. Contrato da Formula

```ts
export type Pathfinder2eMaximumHitPointsInput = {
  level: number
  ancestryHitPoints: number
  classHitPointsPerLevel: number
  constitutionModifier: number
  manualAdjustment: number
}

export type Pathfinder2eMaximumHitPointsBreakdown = {
  maximum: number
  ancestryHitPoints: number
  classHitPointsPerLevel: number
  classTotal: number
  constitutionModifier: number
  constitutionTotal: number
  manualAdjustment: number
}

export function calculateMaximumHitPoints(
  input: Pathfinder2eMaximumHitPointsInput,
): Pathfinder2eMaximumHitPointsBreakdown

export function initializeCurrentHitPoints(
  current: number,
  previousMaximum: number,
  newMaximum: number,
): number

export function applyMaximumHitPointsIncrease(
  current: number,
  previousMaximum: number,
  newMaximum: number,
): number
```

Regras de implementacao:
* `classTotal = level * classHitPointsPerLevel`;
* `constitutionTotal = level * constitutionModifier`;
* `maximum = Math.max(1, ancestryHitPoints + classTotal + constitutionTotal + manualAdjustment)`;
* `initializeCurrentHitPoints`: se `current === 0 && previousMaximum === 0`, retorna `newMaximum` (primeira inicializacao); senao retorna `Math.min(current, newMaximum)` (clamp, nunca cura);
* `applyMaximumHitPointsIncrease`: `delta = Math.max(0, newMaximum - previousMaximum)`; retorna `Math.min(current + delta, newMaximum)`.

## 4. Restricoes
* Nao persistir o breakdown detalhado (so `maximum` final entra em `hitPoints`); o breakdown e recalculado sob demanda para exibicao (tooltip), nunca salvo.
* Nao duplicar a formula no frontend nem em qualquer backend; toda leitura importa `calculateMaximumHitPoints` do pacote.
* Nao adicionar `permanentBonuses` como campo separado — nao existe modelagem de dados para isso hoje; `manualAdjustment` e o unico insumo manual da formula.
* Nao criar nova versao de envelope de ficha (`PATHFINDER_2E_SHEET_VERSION`) nem migracao dedicada — a adicao de `manualAdjustment` e aditiva e resolvida com `.default(0)` no schema.
* Nao alterar `apps/api/src/modules/combat` — a permissao de Mestre para sobrescrever `maximum` durante combate ja existe e e suficiente.
* `packages/game-system-pathfinder-2e/src/shared/` nao deve importar React, DOM, Prisma, Fastify ou Socket.io.

## 5. Testes
Arquivo `packages/game-system-pathfinder-2e/src/shared/hit-points.test.ts`, cobrindo no minimo:
* nivel 1 e nivel 3 com valores tipicos de ancestralidade/classe/Constituicao;
* Constituicao negativa reduzindo o total;
* `manualAdjustment` positivo e negativo;
* piso de `1` mesmo com todos os insumos zerados ou negativos;
* `initializeCurrentHitPoints` na primeira inicializacao (`0,0 -> newMaximum`);
* `initializeCurrentHitPoints` nao curando ao recalcular (`current` menor que `previousMaximum` permanece igual, exceto clamp se `newMaximum` for menor);
* `initializeCurrentHitPoints` fazendo clamp quando `newMaximum` diminui abaixo de `current`;
* `applyMaximumHitPointsIncrease` somando o delta positivo ao subir de nivel.
