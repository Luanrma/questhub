# Modulo: Encounter Movement — Contratos

## 1. Responsabilidade
Definir o contrato de limite de movimento por acao durante um encontro ativo: modelo de dados em memoria, calculo de distancia, validacao/clamp, previsao no cliente, contrato de socket e permissoes. Ver `readme.md` para regras de negocio (inclui a revisao pos-teste em mesa, secao 8) e `skills.md` para stack/restricoes.

**Revisao 2 (pos-teste em mesa) em vigor:** o orcamento nao e mais "um total de metros por turno". Cada participante `creature` tem **3 acoes de movimento por turno**; cada acao da direito a andar ate a velocidade da criatura; o sobrante de uma acao nao usada nao acumula pra proxima. Mestre agora tambem e limitado pela distancia (deixou de ser so um aviso).

## 2. Tipos TypeScript (dominio, agnostico)

```ts
// apps/api/src/modules/encounter_movement/domain/types.ts
export type GridPoint = { x: number; y: number }

export type MovementBudget = {
  maxMetersPerAction: number | null   // null = velocidade desconhecida (sem ficha/sem catalogo valido)
  actionsRemaining: number            // 0 a 3
  metersUsedThisAction: number        // consumido dentro da acao atual, ainda nao "commitada"
}

export type MovementValidationResult =
  | { allowed: true; position: GridPoint; metersUsedThisAction: number }
  | { allowed: false; reason: 'NOT_ACTIVE_TURN' | 'TOKEN_NOT_IN_ENCOUNTER' | 'NO_ACTIONS_REMAINING' }
  | { allowed: 'clamped'; position: GridPoint; metersUsedThisAction: number; requestedPosition: GridPoint }
```

`allowed: 'clamped'` e o caso "tentou ir alem do restante da acao atual": devolve a posicao maxima alcancavel (nao a posicao pedida), com `metersUsedThisAction = maxMetersPerAction` (acao atual totalmente gasta, mas ainda **nao commitada** — so vira "acao consumida" quando o gesto termina, ver secao 4.2).

## 3. Calculo de Distancia (`domain/movement-distance.ts`, puro — sem mudanca)

```ts
export function cellDistance(from: GridPoint, to: GridPoint, cellSizePx: number): number {
  const dx = Math.abs(to.x - from.x) / cellSizePx
  const dy = Math.abs(to.y - from.y) / cellSizePx
  return Math.max(dx, dy) // diagonal conta como 1 celula, igual ortogonal
}

export function cellsToMeters(cells: number, metersPerCell: number): number {
  return cells * metersPerCell
}

export function feetToMeters(feet: number, metersPerCell: number): number {
  const cells = feet / 5 // PF2e: 1 quadrado = 5 pes
  return cellsToMeters(cells, metersPerCell)
}
```

## 4. Validacao e Commit (`domain/movement-validation.ts`, puro)

### 4.1. `validateMovement` — chamado a cada posicao candidata (tique de arraste ou movimento medido)

```ts
export function validateMovement(input: {
  from: GridPoint
  to: GridPoint
  cellSizePx: number
  metersPerCell: number
  budget: MovementBudget
}): MovementValidationResult {
  if (input.budget.maxMetersPerAction === null) {
    return { allowed: true, position: input.to, metersUsedThisAction: input.budget.metersUsedThisAction }
  }
  if (input.budget.actionsRemaining <= 0) {
    return { allowed: false, reason: 'NO_ACTIONS_REMAINING' }
  }

  const distanceMeters = cellsToMeters(cellDistance(input.from, input.to, input.cellSizePx), input.metersPerCell)
  const remaining = input.budget.maxMetersPerAction - input.budget.metersUsedThisAction

  if (distanceMeters <= remaining) {
    return { allowed: true, position: input.to, metersUsedThisAction: input.budget.metersUsedThisAction + distanceMeters }
  }

  const ratio = remaining <= 0 ? 0 : remaining / distanceMeters
  const clampedPosition: GridPoint = {
    x: input.from.x + (input.to.x - input.from.x) * ratio,
    y: input.from.y + (input.to.y - input.from.y) * ratio,
  }
  return {
    allowed: 'clamped',
    position: clampedPosition,
    metersUsedThisAction: input.budget.maxMetersPerAction,
    requestedPosition: input.to,
  }
}
```

Essa funcao so decide "quanto da pra andar dentro da acao atual" — nunca decide sozinha se uma acao foi gasta. Chamada em toda posicao candidata: cada tique de um arraste continuo, ou o destino final de um movimento medido.

### 4.2. `commitMovementAction` — chamado quando o gesto de movimento termina

```ts
export function commitMovementAction(budget: MovementBudget): MovementBudget {
  if (budget.actionsRemaining <= 0 || budget.metersUsedThisAction <= 0) return budget

  return {
    ...budget,
    actionsRemaining: budget.actionsRemaining - 1,
    metersUsedThisAction: 0,
  }
}
```

So consome 1 acao se de fato houve deslocamento nela (`metersUsedThisAction > 0`) — soltar o token sem mover, ou so clicar, nao gasta acao. Depois do commit, a proxima acao comeca com o teto cheio de novo (`metersUsedThisAction` volta a 0, `maxMetersPerAction` continua o mesmo).

## 5. Leitura de Velocidade (repositories — sem mudanca)

### 5.1. NPC/bestiario
`apps/api/src/modules/encounter_movement/repositories/bestiary-speed.ts`: `getCatalogSpeedFeet(campaignId, bestiaryCreatureId): Promise<number | null>`. Mesma forma de `combat/repositories/bestiary-health.ts::getCatalogHealth`.

### 5.2. Personagem de jogador
`apps/api/src/modules/encounter_movement/repositories/character-speed.ts`: `getCharacterSpeedMeters(characterId): Promise<number | null>`, via `adapter.movement.read(sheet).meters`.

### 5.3. Adapter de sistema (`packages/game-system-core/.../character-sheet/models.ts`, sem mudanca)
`CharacterSheetMovementAccessor<TSheet>` / `CharacterSheetSystemAdapter.movement?`. `pathfinder2eSheetAdapter.movement.read(sheet)` retorna `{ meters: sheet.general.movementMeters }`.

## 6. Estado em Memoria — `VttEncounterCreatureParticipant`

```ts
// apps/api/src/modules/campaign-presence/contracts.ts
export type VttMovementBudget = MovementBudget // { maxMetersPerAction, actionsRemaining, metersUsedThisAction }

export type VttEncounterCreatureParticipant = {
  // campos existentes...
  movement: VttMovementBudget
}
```

Hidratado ao iniciar o encontro: `maxMetersPerAction` vem de `getCatalogSpeedFeet`/`getCharacterSpeedMeters` (NPC convertido pra metros via `feetToMeters`), `actionsRemaining: 3`, `metersUsedThisAction: 0`.

## 7. Contrato de Socket

### 7.1. `vtt:token:move` (evento existente, comportamento estendido — payload de entrada inalterado)

1. Resolve o token e a cena, como hoje.
2. Se **nao ha** encontro ativo → comportamento identico ao atual (sem limite).
3. Se **ha** encontro ativo e o token e participante `creature`:
   * Jogador: exige que seja o dono do token **e** `encounter.participants[encounter.activeTurnIndex].tokenId === token.id`; caso contrario, `return` sem mover nada.
   * Mestre: pode mover o token mesmo fora do turno dele (sem a checagem de `isActiveTurn`).
   * Em ambos os casos (jogador no seu turno, ou Mestre a qualquer momento): chama `validateMovement` com o orcamento atual do participante. `allowed: false` (`NO_ACTIONS_REMAINING`) → nao move nada. `allowed: 'clamped'` → persiste a posicao truncada. `allowed: true` → persiste a posicao pedida. Em ambos os casos de sucesso/clamp, atualiza `participant.movement.metersUsedThisAction` no `VttEncounterState` e reemite `vtt:encounter:changed`.
4. Se o token **nao** e participante `creature` do encontro: jogador e bloqueado (como antes); Mestre continua livre, sem limite (esse token esta fora do sistema de acoes, nao ha orcamento pra aplicar).

### 7.2. `vtt:combat:movement:commit` (novo, cliente -> servidor)

```ts
const vttCombatMovementCommitSchema = z.object({
  campaignId: z.string().min(1),
  tokenId: z.string().min(1),
})
```

Disparado pelo cliente quando um gesto de movimento termina: ao soltar um arraste (`onMovementPathComplete`) ou ao confirmar um movimento medido (barra de espaco, `confirmMeasuredTokenMove`). Servidor: acha o participante `creature` pelo `tokenId`, aplica `commitMovementAction` no `movement` dele, reemite `vtt:encounter:changed`. Permissao: Mestre sempre; jogador so se for dono do token **e** for o turno ativo dele (mesma regra de quem pode mover).

Este evento **nunca** avanca turno — so consome 1 acao do participante. Avancar turno continua exclusivamente via `vtt:encounter:next-turn`, disparado manualmente pelo Mestre.

### 7.3. `vtt:combat:movement:reset` (Mestre reseta as acoes de um participante — sem mudanca de assinatura, mudanca de efeito)

```ts
const vttCombatMovementResetSchema = z.object({
  campaignId: z.string().min(1),
  participantId: z.string().min(1),
})
```

So Mestre. Restaura o participante indicado para `{ actionsRemaining: 3, metersUsedThisAction: 0 }` (turno de movimento "zerado" de novo) e reemite `vtt:encounter:changed`.

### 7.4. Reset automatico por turno
Em `vtt:encounter:next-turn`, `vtt:encounter:previous-turn` e `vtt:encounter:start`: o participante que passa a ser o ativo tem `movement` restaurado para `{ actionsRemaining: 3, metersUsedThisAction: 0 }` antes de emitir `vtt:encounter:changed`.

### 7.5. Evento removido: `vtt:combat:movement:warning`
Nao existe mais. Era o mecanismo de "aviso pro Mestre quando excede sem bloquear" da Revisao 1 — obsoleto porque agora o Mestre e clampado igual ao jogador (nao precisa de aviso separado, o proprio clamp/previsao no cliente ja deixa visivel).

## 8. Previsao no Cliente (correcao do bug critico da Revisao 1)

Contrato espelhado em `apps/web/src/vtt/table/domain/movementPrediction.ts` (novo, puro — mesmas assinaturas de `cellDistance`/`cellsToMeters`/`validateMovement` acima, sem depender de React/DOM/Socket, seguindo `AGENTS.md` 5.1.4).

Fluxo no `PlayerToken` (`BoardOverlays.tsx`):
1. Recebe novas props: `movementBudget: VttMovementBudget | null` (o orcamento do participante correspondente a esse token, ou `null` se o token nao esta em um encontro ativo com limite) e `gridSize`/`metersPerCell` da cena.
2. Ao iniciar um arraste (`pointerdown`), guarda a posicao de referencia da acao atual (a posicao persistida do token) num ref local.
3. A cada `pointermove`, calcula a posicao candidata como hoje, mas **antes** de chamar `onMove`, roda a mesma `validateMovement` localmente contra `movementBudget`. Se `allowed !== true`, usa a posicao clampada (ou a posicao de referencia, se `NO_ACTIONS_REMAINING`) em vez da posicao crua do mouse — o token visualmente para de seguir o cursor no limite exato, no mesmo tique, sem esperar o servidor.
4. Ao soltar (`pointerup`), continua chamando `onMovementPathComplete` como hoje, e adicionalmente emite `vtt:combat:movement:commit`.
5. O servidor continua validando cada `vtt:token:move` de forma independente (nunca confia soh no clamp do cliente) — a previsao no cliente e so uma otimizacao de UX, a fonte de verdade final continua sendo o servidor.

O mesmo calculo e aplicado no fluxo de movimento medido (`confirmMeasuredTokenMove`): a pre-visualizacao da regua pode ultrapassar o limite livremente (e so uma medida), mas ao confirmar (barra de espaco), o destino enviado ja e clampado pelo mesmo `validateMovement` antes de emitir, e o commit e disparado logo em seguida.

## 9. Permissoes e Visibilidade
* `movement` e visivel para todos os papeis dentro do `VttEncounterCreatureParticipant` — nao e informacao sensivel como HP de NPC, nao passa por mascara de papel.
* Escrita (`vtt:token:move` durante encontro, `vtt:combat:movement:commit`, `vtt:combat:movement:reset`) segue as regras da secao 7 e `readme.md` secao 3.

## 10. Fora de Escopo Nesta Etapa
Ver `readme.md` secao 6.

## 11. Criterios de Aceitacao
1. Fora de encontro, movimento continua livre (nenhuma regressao).
2. Durante encontro ativo, jogador so move o token do participante ativo, e so o proprio, sem exceder a acao atual.
3. Mestre move qualquer token a qualquer momento (sem esperar turno), mas tambem nao excede a velocidade daquele token quando ele e participante do encontro.
4. Uma acao (`Investida`) da direito a andar ate a velocidade da criatura; o sobrante nao usado se perde ao terminar o gesto (nao acumula pra proxima acao).
5. Terminar um movimento (soltar arraste, confirmar medicao) nunca avanca o turno sozinho.
6. Quando as 3 acoes de movimento se esgotam, nenhum movimento adicional e permitido naquele turno.
7. O cliente reflete o limite **durante** o arraste (nao so depois) — nao ha mais "arrasta livre e volta pra tras" ao soltar.
8. NPC usa velocidade do bestiario (pes -> metros via quadrado de 5ft * metersPerCell da cena).
9. Personagem de jogador usa `movementMeters` da ficha diretamente (sem conversao).
10. O orcamento (3 acoes cheias) reseta quando o participante volta a ser o ativo ou quando o encontro comeca.
11. Mestre consegue resetar manualmente as acoes de movimento de um participante.
12. Hazards continuam sem limite de movimento (nao sao participantes `creature`).
13. Calculo de distancia/validacao/commit fica em `domain/`, puro e testavel, sem logica de movimento espalhada no socket; a copia no frontend tambem e pura, sem depender de React/Socket/DOM.
