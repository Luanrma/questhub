# Submodulo: Pathfinder 2e Spell Casting (Specs & Contracts)

## 1. Responsabilidade
Contratos das funcoes puras PF2e usadas pelos endpoints genericos de `.ai/spell_casting/specs.md`.

## 2. Consumo

```ts
// packages/game-system-pathfinder-2e/src/server/spell-casting/consume.ts

export type Pathfinder2eCastSource =
  | { kind: 'prepared'; rank: number; slotIndex: number }
  | { kind: 'spontaneous'; rank: number }
  | { kind: 'focus' }
  | { kind: 'innate' }
  | { kind: 'cantrip' }

export type Pathfinder2eCastRequest = {
  entryId: string
  spellId: string
  source: Pathfinder2eCastSource
}

export type Pathfinder2eCastResult =
  | { ok: true; spellbook: Pathfinder2eCharacterSpellbookData; spellName: string; consumed: string }
  | { ok: false; error: string }

export function applyPathfinder2eCast(
  spellbook: Pathfinder2eCharacterSpellbookData,
  request: Pathfinder2eCastRequest,
): Pathfinder2eCastResult
```

Regras (cada uma com teste proprio):
* entrada inexistente → erro; magia fora da entrada (known/prepared/innate) → erro;
* `prepared`: slot (rank, slotIndex) deve existir, conter a magia e nao estar `expended`; consome marcando `expended: true`;
* `spontaneous`: rank deve ter slot configurado e `used < max`; consome incrementando `used` (campo opcional, ausente = 0);
* `focus`: `focusPool.points >= 1`; consome decrementando;
* `innate`: uso da magia deve existir; `at-will` nao altera nada; numerico exige `used < usesPerDay`;
* `cantrip`: valida apenas presenca da magia na entrada (known/prepared/innate); nunca altera o spellbook;
* categorias `RITUAL`/`ITEMS` → erro legivel (fora do fluxo nesta fase).

```ts
export function applyPathfinder2eRest(spellbook): Pathfinder2eCharacterSpellbookData
// expended=false em todos os slots preparados; used=0 em slots espontaneos e usos inatos; focus points = max.

export function applyPathfinder2eRefocus(spellbook): Pathfinder2eCharacterSpellbookData
// +1 focus point em cada entrada com focusPool (min(points+1, max)). Sem pool: no-op.
```

## 3. Cast Options

## 2.1. Ledger idempotente persistido

O contrato do spellbook PF2e aceita um campo opcional `recentCasts` para armazenar recibos recentes da rota generica `POST /api/characters/:characterId/cast`:

```ts
type Pathfinder2eRecentCast = {
  clientCastId: string
  requestKey: string
  response: {
    characterId: string
    revision: number
    spellName: string
    consumed: string
    entryId?: string
    spellId?: string
    castRank?: number
  }
  createdAt: string
}
```

O ledger e limitado aos ultimos 20 casts. Ele nao e regra mecanica do PF2e; existe principalmente para garantir idempotencia duravel da transacao generica. Os campos opcionais `entryId`, `spellId` e `castRank` sao salvos em casts novos para que a resolucao PF2e consiga aplicar heightening de dano e validar que o `clientCastId` pertence a mesma magia/entrada. Funcoes puras de consumo continuam recebendo `Pathfinder2eCastRequest` sem `clientCastId`.

## 2.2. Custo de acoes PF2e

`parsePathfinder2eCastActionCost(time)` interpreta somente tempos estruturados simples. Formato real auditado em `pf2e-master/packs/spells` (`system.time.value`, 1341 das ~1716 magias do snapshot): o campo e o **digito puro** (`"1"`, `"2"`, `"3"`), nao a forma por extenso — corrigido apos uma rodada em que o parser assumia `"2 actions"` e a economia de acao ficava inerte para quase todo o catalogo real. A forma por extenso continua aceita (sufixo `action(s)` opcional) para nao quebrar se algum dado vier formatado diferente:
* `"1"`/`"1 action"` -> `{ kind: 'actions', actions: 1 }` (mesma logica para `2`/`3`);
* `reaction` -> `{ kind: 'reaction' }`;
* `free action`/`free` -> `{ kind: 'free' }`;
* qualquer tempo variavel ou longo (`"1 to 3"`, `"2 or 3"`, minutos, horas, dias) -> `{ kind: 'unsupported' }`, sem chute.

Nesta fatia, a rota generica debita apenas `{ kind: 'actions' }` do `actionsRemaining` do participante ativo no Encounter Mode. Reactions/free actions/sustain/quickened/slowed/stunned ficam para a fase de Effects/Action Economy completa.

```ts
// packages/game-system-pathfinder-2e/src/server/spell-casting/cast-options.ts
export function buildPathfinder2eCastOptions(
  spellbook: Pathfinder2eCharacterSpellbookData,
  findSpell: (spellId: string) => Pathfinder2eSpellDefinition | null,
): Pathfinder2eCastOptionsEntry[]
```

* Uma entrada de saida por spellcasting entry (exceto `RITUAL`/`ITEMS`, omitidas).
* Magias listadas: uniao de `known` + magias presentes em `prepared` + `innateUses`, sem duplicar `spellId`.
* `isCantrip`: trait `cantrip` no catalogo; quando a magia nao resolve no catalogo, `rank === 0` do known e o fallback.
* Perfil geometrico por magia: `area` (`{type, valueFeet}` direto do catalogo), `rangeKind`/`rangeFeet` via `parsePathfinder2eSpellRange`, `time`, `targetProfile` via `parsePathfinder2eSpellTargetCount(definition?.target)` (secao 4.1).
* `resource` por categoria conforme `.ai/spell_casting/specs.md` secao 2.1.

## 4. Distancia e Area
Ver `packages/game-system-pathfinder-2e/src/shared/spell-area.ts`:
* `pathfinder2eFeetToCells(feet, metersPerCell)` — 5 pes = 1.5 m;
* `parsePathfinder2eSpellRange(raw)` — formatos reais auditados;
* `buildPathfinder2eAreaShape(area, origin, directionRadians, metersPerCell)` — mapeia os 7 tipos reais para `SceneAreaShape`; desconhecido → `null`.

Na rota generica de cast, a validação server-side usa o mesmo perfil PF2e:
* area `burst`/`cylinder` espera `BURST`/`CYLINDER` com raio convertido;
* `emanation` espera centro igual ao token conjurador;
* `cone`/`line` esperam origem igual ao token conjurador e comprimento/largura convertidos;
* `square`/`cube` esperam tamanho convertido;
* range em pes mede do centro do token ate o ponto de ancoragem da forma — distancia euclidiana (`distanceInCells`) em cena de grid quadrado, distancia hexagonal em passos inteiros (`hexDistanceInCells`) em cena de grid hexagonal; `touch`, `unlimited`, `unsupported` e `none` nao bloqueiam por distancia nesta fatia;
* em cena de grid hexagonal, apenas `burst`/`emanation`/`cylinder` sao aceitos (`isAreaShapeSupportedOnHexGrid`, `.ai/scene_geometry/specs.md` secao 7); `cone`/`line`/`square`/`cube` retornam erro de validacao explicito.

## 4.1. Selecao de Alvo

```ts
// packages/game-system-pathfinder-2e/src/shared/spell-target.ts

export type Pathfinder2eSpellTargetProfile =
  | { kind: 'none' }
  | { kind: 'count'; min: number; max: number }
  | { kind: 'unsupported'; raw: string }

export function parsePathfinder2eSpellTargetCount(raw: string | undefined | null): Pathfinder2eSpellTargetProfile
```

Interpreta `system.target.value` (346 valores distintos auditados em `pf2e-master/packs/spells`, ~860 magias com texto de alvo real):
* string vazia (856 magias, maioria com area ou auto-alvo) -> `{ kind: 'none' }` — nenhuma selecao exigida;
* `"N creature(s)"`/`"N ally"`/etc. (674 magias, formato mais comum) -> `{ kind: 'count', min: N, max: N }`;
* `"up to N creatures"` (38 magias) -> `{ kind: 'count', min: 1, max: N }`;
* `"N or M creatures"` (5 magias) -> `{ kind: 'count', min: N, max: M }`;
* `"one"`/`"two"`/`"three"` por extenso (20 magias) -> mesma logica do numero;
* clausula composta detectada por `" and "` (ex.: `"1 ally and 1 enemy"`) -> `{ kind: 'unsupported' }` **antes** de cair no padrao generico de numero-no-inicio (bug real encontrado e corrigido durante a auditoria: sem essa checagem, o parser devolvia `{min:1,max:1}` para uma magia que na verdade exige 2 alvos de tipos diferentes);
* `"N or more"` e qualquer outro formato (traits `willing`/`ally`/`enemy`, `"any number of"`, referencias narrativas como `"the triggering creature"`) -> `{ kind: 'unsupported' }`, nunca adivinhado.

Na rota generica de cast (`resolveNonAreaCastContext`, `.ai/spell_casting/specs.md` secao 2.2): quando `targetProfile.kind === 'count'`, `targets` (ids de token) e obrigatorio com tamanho em `[min, max]`; cada token e resolvido na mesma cena do `caster` (uma unica query incluindo o token conjurador e todos os alvos) e validado contra o alcance da magia com a mesma politica de distancia (euclidiana ou hexagonal) usada por `placement`. O nome de cada alvo (`token.name` ou nome do personagem vinculado) e devolvido para compor o anuncio de chat/log.

## 5. Sugestao de Entrada por Classe
Ver `packages/game-system-pathfinder-2e/src/shared/spellcasting-suggestion.ts`:
* `getPathfinder2eCasterClassProfile(classIdOrSlug)` — tabela auditada das 11 classes conjuradoras (`wizard`, `cleric`, `druid`, `bard`, `oracle`, `sorcerer`, `witch`, `psychic`, `magus`, `summoner`, `animist`); tradicao `null` = escolha do jogador (feiticeiro/bruxa/invocador), atributo `null` = escolha (psiquico);
* `buildPathfinder2eSuggestedSlots(progression, level)` — progressoes-base das tabelas E.1–E.3 do doc normativo de regras (`pathfinder-2e-regras-de-magias-questhub.md`, Parte I): `three` (Mago/Clerigo/Druida/Bruxa/Bardo — destrava com 2 no nivel impar, teto 3 no par, 5 truques), `four` (Feiticeiro/Oraculo — destrava com 3, teto 4, 5 truques), `psychic` (destrava com 1, teto 2, 3 truques escolhidos — os 3 psi cantrips da mente consciente sao grants fixos fora da capacidade, regra E.7.5, adicionados manualmente por enquanto); rank 10 apenas nivel 19+ (1 slot especial, regra E.6); conjuradores em onda (`magus`/`summoner`/`animist`, tabelas E.4/E.5) nao recebem tabela sugerida. **Corrigido em 2026-07-13 (2o loop de auditoria):** antes, feiticeiro/oraculo usavam a progressao de 3 slots e o psiquico destravava com 2 slots e 5 truques — valores errados contra E.2/E.3.
* Divergencia documentada (regra A.1 do doc normativo): a tabela e copia manual auditada, nao gerada do snapshot. Geracao automatica de progressoes/grants e item futuro do plano canonico (secao 22).

## 6. Criterios de Aceitacao
Ver `.ai/spell_casting/specs.md` secao 4 (os criterios de consumo/erro/409 valem aqui) mais:
* `buildPathfinder2eCastOptions` nunca lanca com spellbook vazio ou magia ausente do catalogo (perfil `unavailable`);
* `parsePathfinder2eSpellTargetCount('1 ally and 1 enemy')` retorna `unsupported`, nunca `{min:1,max:1}`;
* nenhuma funcao deste submodulo importa Prisma, Fastify, React ou Socket.io.
