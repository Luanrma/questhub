# Submodulo: Pathfinder 2e Character Spells (Specs & Contracts)

## 1. Responsabilidade
Persistir e expor, por personagem, o estado de spellcasting (entradas de conjuracao, magias conhecidas/preparadas, slots, foco, usos inatos, rituais), com validacao de formato e controle de concorrencia otimista. Nao executa conjuracao.

## 2. Contrato generico (core)

```ts
// packages/game-system-core/src/server/character-spells
type CharacterSpellbookEnvelope = {
  system: string
  version: number
  data: Record<string, unknown>
}

type CharacterSpellbookSystemAdapter<TSpellbook> = {
  system: string
  dataKey: string
  version: number
  defaultSpellbook: TSpellbook
  schema: z.ZodType<TSpellbook>
}
```

`GameSystemAdapter` (`apps/api/src/modules/game_systems/ports.ts`) ganha o campo opcional:

```ts
characterSpellbook?: CharacterSpellbookSystemAdapter<unknown>
```

## 3. Contrato Pathfinder 2e

```ts
// packages/game-system-pathfinder-2e/src/server/character-spells
type Pathfinder2eSpellcastingCategory = 'PREPARED' | 'SPONTANEOUS' | 'INNATE' | 'FOCUS' | 'ITEMS' | 'RITUAL'

type Pathfinder2ePreparationStyle = 'STANDARD' | 'FLEXIBLE'

type Pathfinder2eSpellSlotRank = {
  rank: number // 0-10
  max: number
  // Slots ja gastos neste rank (conjuracao espontanea, .ai/spell_casting/).
  // Opcional para compatibilidade com spellbooks anteriores; ausente = 0.
  used?: number
}

type Pathfinder2eKnownSpell = {
  spellId: string
  name: string
  rank: number
}

type Pathfinder2ePreparedSpellSlot = {
  rank: number
  slotIndex: number
  spellId: string | null
  name: string | null
  expended: boolean
}

type Pathfinder2eFocusPool = {
  points: number
  max: number
}

type Pathfinder2eInnateSpellUse = {
  spellId: string
  name: string
  usesPerDay: number | 'at-will'
  used: number
}

type Pathfinder2eRitualEntry = {
  spellId: string
  name: string
}

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

type Pathfinder2eSpellcastingEntry = {
  id: string
  name: string
  category: Pathfinder2eSpellcastingCategory
  tradition: string
  ability: string
  proficiencyRank: number
  preparationStyle?: Pathfinder2ePreparationStyle
  slots: Pathfinder2eSpellSlotRank[]
  known: Pathfinder2eKnownSpell[]
  prepared: Pathfinder2ePreparedSpellSlot[]
  focusPool?: Pathfinder2eFocusPool
  innateUses: Pathfinder2eInnateSpellUse[]
  signatureSpellIds: string[]
}

type Pathfinder2eCharacterSpellbookData = {
  entries: Pathfinder2eSpellcastingEntry[]
  rituals: Pathfinder2eRitualEntry[]
  // Ledger transacional usado por .ai/spell_casting/ para replay idempotente.
  // Opcional para compatibilidade; limitado aos 20 recibos mais recentes.
  recentCasts?: Pathfinder2eRecentCast[]
}
```

`pathfinder2eCharacterSpellbookAdapter: CharacterSpellbookSystemAdapter<Pathfinder2eCharacterSpellbookData>` usa `system: 'PATHFINDER_2E'`, `dataKey: 'pathfinder2e'`, `version: 1`, `defaultSpellbook: { entries: [], rituals: [] }`.

## 4. Persistencia

```prisma
model CharacterSpellbook {
  id          String   @id @default(cuid())
  characterId String   @unique
  system      GameSystem
  version     Int      @default(1)
  revision    Int      @default(1)
  data        Json
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  character Character @relation(fields: [characterId], references: [id])

  @@index([characterId])
}
```

`Character` ganha a relacao inversa `spellbook CharacterSpellbook?`.

## 5. Contrato HTTP

`GET /api/characters/:characterId/spellbook`

* Acesso: dono do personagem OU Mestre ativo de uma campanha a que o personagem pertence (mesma checagem de `GET /api/characters/:characterId/sheet`).
* Se nao existir registro, responde com um envelope padrao (`revision: 0`, ainda nao persistido) em vez de `404` — o cliente decide se quer criar na primeira escrita.

```ts
type GetCharacterSpellbookResponse = {
  characterId: string
  system: string
  revision: number // 0 quando ainda nao existe registro
  spellbook: CharacterSpellbookEnvelope
}
```

`PUT /api/characters/:characterId/spellbook`

* Acesso: mesma regra do GET.
* Corpo:

```ts
type PutCharacterSpellbookBody = {
  revision: number // revision que o cliente acredita ser a atual (0 para criar pela primeira vez)
  spellbook: CharacterSpellbookEnvelope
}
```

* Resposta de sucesso (`200`): `{ characterId, system, revision, spellbook }` com a `revision` incrementada.
* Erros:
  * `400`: personagem invalido, corpo invalido ou envelope que falha na validacao do adapter do sistema;
  * `404`: personagem nao encontrado **ou** usuario nao e dono nem Mestre ativo da campanha (mesma escolha ja feita por `GET/PUT /api/characters/:characterId/sheet`: nao diferenciar "nao existe" de "sem permissao" evita confirmar a um usuario nao autorizado que o personagem existe);
  * `409`: `revision` enviada nao bate com a persistida (conflito de concorrencia — o cliente deve reler antes de tentar novamente).

## 6. Regras de Validacao
* `system` do envelope deve corresponder ao `Character.system` do personagem alvo.
* `version` deve ser uma das versoes suportadas pelo adapter (`1` nesta fase).
* `data[dataKey]` deve validar contra o schema Zod do adapter (`pathfinder2eCharacterSpellbookSchema`).
* `Pathfinder2eSpellSlotRank.rank`, `Pathfinder2eKnownSpell.rank`, `Pathfinder2ePreparedSpellSlot.rank` devem ser inteiros entre `0` e `10`.
* `Pathfinder2eSpellcastingEntry.category` deve ser um dos valores do enum.
* Escrita rejeita quando `revision` do corpo diverge da `revision` persistida (ou de `0` quando ainda nao existe registro).
* UI de preparacao de slots preparados deve chamar busca de catalogo com `category: 'spell'` e gravar no slot apenas `spellId`/`name`, mantendo `rank` e `slotIndex` do slot. Rituais ficam exclusivamente em `rituals`.
* A lista principal de uso deve ser derivada do spellbook, agrupada por rank, e nunca exigir que o jogador abra o painel de preparacao para consultar magias prontas.

## 7. Criterios de Aceitacao
* `GET` sem registro existente retorna `revision: 0` e o envelope padrao (`entries: [], rituals: []`), sem criar linha no banco.
* `PUT` com `revision: 0` sobre um personagem sem registro cria a linha com `revision: 1`.
* `PUT` com `revision` desatualizada retorna `409` e nao altera o registro persistido.
* `PUT` com envelope invalido (formato incorreto, `system` diferente do personagem, categoria fora do enum) retorna `400` e nao altera o registro.
* Jogador dono consegue ler/escrever o proprio spellbook; outro jogador (nao Mestre) recebe `404`.
* Mestre ativo da campanha consegue ler/escrever o spellbook de qualquer personagem da campanha.
* `Character.sheet` permanece inalterado por este submodulo — nenhuma escrita aqui toca a coluna `sheet`.
* Testes cobrem: schema valido/invalido do bloco PF2e (`packages/game-system-pathfinder-2e/src/server/character-spells/schema.test.ts`), e end-to-end manual (criacao via `revision 0`, releitura, conflito de `revision`, envelope invalido, atualizacao valida, acesso negado a usuario nao relacionado) validado contra uma instancia real da API + Postgres de desenvolvimento.

## 8. Adendo de Contrato: `focusPool` Global

O contrato PF2e passa a incluir `focusPool?: Pathfinder2eFocusPool` em `Pathfinder2eCharacterSpellbookData`.

`Pathfinder2eSpellcastingEntry.focusPool` fica deprecated: o schema ainda aceita esse campo para nao invalidar registros antigos, mas qualquer cast/rest/refocus deve gravar o estado atualizado em `spellbook.focusPool` e remover pools por entry do resultado.

Regras:

* `Pathfinder2eCharacterSpellbookData.focusPool`, quando presente, representa o unico reservatorio de Pontos de Foco do personagem.
* O maximo normal deve respeitar o documento normativo de magias, Parte I K.1 e Parte II 7.1-7.3: `min(3, quantidade de magias de foco conhecidas que custam ponto)`, com excecoes de classe/habilidade quando modeladas.
* Enquanto o custo estruturado de cada magia de foco ainda nao estiver no spellbook, a normalizacao de compatibilidade pode derivar um maximo legado a partir de `entry.focusPool.max`, sempre limitado a 3.
* Uma magia de foco consumida em qualquer entry reduz o mesmo `spellbook.focusPool.points`; conjurar por outra entry deve falhar quando esse reservatorio global esta em `0`.
* Descanso restaura `spellbook.focusPool.points` para `spellbook.focusPool.max`.
* Refocar restaura exatamente `1` ponto no `spellbook.focusPool`, respeitando o maximo, e pode ser repetido.

## 9. Correcao de UI: Entradas e Slots Derivados

Correcao de 2026-07-14: a UI nao deve oferecer criacao manual de entrada por nome livre nem botao de "adicionar slot" com rank arbitrario. Entradas de classe devem nascer a partir do perfil de classe do adapter PF2e; slots preparados devem ser sincronizados a partir de `entry.slots`/progressao conhecida, preservando magias ja preparadas quando possivel.

A busca manual continua existindo apenas para escolher uma magia do catalogo em uma colecao/slot ja pertencente ao personagem.

O painel normal de preparo nao deve exibir metadados estruturais da entrada (`proficiencyRank`, `tradition`, `ability`) nem controles de recursos por rank. Esses dados pertencem ao perfil da classe/adapter e a uma futura area avancada de correcao pelo Mestre, nao ao fluxo comum de vincular/preparar magias.

A lista principal deve manter a coluna de magias compacta e priorizar o painel de detalhe. Como as linhas ja sao agrupadas por header de rank/tipo, cada linha nao deve repetir `Rank X`, `Truques` ou `Rituais` antes do nome da magia; a linha deve exibir somente o nome e o estado operacional necessario (por exemplo, slot ou usos).
