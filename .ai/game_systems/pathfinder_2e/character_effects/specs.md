# Submodulo: Pathfinder 2e Character Active Effects (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato de persistencia dos efeitos ativos de um personagem e a forma exata como o calculo de CA (`.ai/game_systems/pathfinder_2e/armor_class/`) consome os `FlatModifier`s desses efeitos atraves do Rule Engine (`.ai/game_systems/pathfinder_2e/rule_engine/`).

## 2. Contrato de Dados

### 2.1. Core (`packages/game-system-core/src/server/character-effects`)

```ts
export const characterActiveEffectsEnvelopeSchema = z
  .object({
    system: z.string().trim().min(1),
    version: z.number().int().positive(),
    data: z.record(z.string(), z.unknown()),
  })
  .strict()

export type CharacterActiveEffectsEnvelope = z.infer<typeof characterActiveEffectsEnvelopeSchema>

export type CharacterActiveEffectsSystemAdapter<TData> = {
  system: string
  dataKey: string
  version: number
  defaultData: TData
  schema: z.ZodType<TData>
}
```

Identico em forma ao par ja existente para `character-spells` (`.ai/game_systems/pathfinder_2e/character_spells/specs.md`), com `defaultSpellbook` renomeado para `defaultData` (nome mais correto para o conteudo generico deste recurso).

### 2.2. PF2e (`packages/game-system-pathfinder-2e/src/server/character-effects`)

```ts
const pathfinder2eRuleElementSourceSchema = z
  .object({ key: z.string().trim().min(1) })
  .catchall(z.unknown())

export type Pathfinder2eRuleElementSource = z.infer<typeof pathfinder2eRuleElementSourceSchema>

const pathfinder2eActiveEffectSchema = z
  .object({
    id: z.string().trim().min(1),
    label: z.string().trim().min(1),
    rules: z.array(pathfinder2eRuleElementSourceSchema),
  })
  .strict()

export type Pathfinder2eActiveEffect = z.infer<typeof pathfinder2eActiveEffectSchema>

export const pathfinder2eCharacterActiveEffectsSchema = z
  .object({
    effects: z.array(pathfinder2eActiveEffectSchema),
  })
  .strict()

export type Pathfinder2eCharacterActiveEffectsData = z.infer<typeof pathfinder2eCharacterActiveEffectsSchema>

export const DEFAULT_PATHFINDER_2E_CHARACTER_ACTIVE_EFFECTS: Pathfinder2eCharacterActiveEffectsData = { effects: [] }
```

`pathfinder2eRuleElementSourceSchema` e deliberadamente permissivo (`.catchall(z.unknown())`) porque reproduz o mesmo formato de Rule Element bruto ja usado, sem schema Zod formal, pelo catalogo de magias (`Pathfinder2eRuleElementSource` em `packages/game-system-pathfinder-2e/src/server/spells/models.ts`). Este e o primeiro lugar do codebase onde esse formato ganha um schema Zod, porque e o primeiro lugar onde ele chega via input HTTP de usuario (o catalogo de magias e gerado offline, nunca recebe isso via API).

### 2.3. Prisma (`apps/api/prisma/schema.prisma`)

```prisma
model CharacterActiveEffects {
  id          String     @id @default(cuid())
  characterId String     @unique
  system      GameSystem
  version     Int        @default(1)
  revision    Int        @default(1)
  data        Json
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  character Character @relation(fields: [characterId], references: [id])

  @@index([characterId])
}
```

`Character` ganha `activeEffects CharacterActiveEffects?`. Identico em forma a `CharacterSpellbook`.

## 3. Endpoints (`apps/api/src/modules/character_effects/routes.ts`)

### 3.1. Leitura

```txt
GET /api/characters/:characterId/active-effects
```

Permissao: dono do personagem OU Mestre ativo da campanha a que o personagem pertence (mesma query de `getCharacterAccess` ja usada por `apps/api/src/modules/character_spells/routes.ts`, duplicada aqui por consistencia com o padrao ja estabelecido no projeto — cada modulo de recurso de personagem resolve seu proprio acesso).

Resposta (200), quando o registro ainda nao existe (personagem nunca teve efeitos ativos):
```ts
{
  characterId: string
  system: string
  revision: 0
  activeEffects: CharacterActiveEffectsEnvelope // default do adapter, effects: []
}
```

Resposta (200), quando ja existe:
```ts
{
  characterId: string
  system: string
  revision: number
  activeEffects: CharacterActiveEffectsEnvelope
}
```

Erros: `401` nao autenticado; `400` personagem invalido; `404` personagem nao encontrado ou sem acesso; `404` sistema sem adapter de active effects (nao acontece para PF2e).

### 3.2. Escrita (substituicao completa)

```txt
PUT /api/characters/:characterId/active-effects
```

Payload:
```ts
{
  revision: number
  activeEffects: CharacterActiveEffectsEnvelope
}
```

Regras:
* `revision` deve bater com a revision persistida atual, senao `409`;
* `activeEffects.system` deve bater com `Character.system`, senao `400`;
* `activeEffects.data[adapter.dataKey]` deve validar contra `pathfinder2eCharacterActiveEffectsSchema`, senao `400`;
* cria o registro na primeira escrita (`revision` esperada = `0`), atualiza nas seguintes; corrida de criacao concorrente tratada via `Prisma.PrismaClientKnownRequestError` codigo `P2002` -> `409` (mesmo padrao do spellbook).

Resposta (200): mesma forma da leitura, com a `revision` incrementada.

Erros: `401`; `400` payload/personagem/sistema invalido; `404` personagem nao encontrado; `409` conflito de revision.

## 4. Integracao com o calculo de CA

`calculateArmorClass` (`packages/game-system-pathfinder-2e/src/shared/armor-class.ts`) ganha dois campos opcionais em `Pathfinder2eArmorClassInput`:

```ts
type Pathfinder2eArmorClassInput = {
  // ... campos existentes, inalterados ...
  ruleElements?: UnknownRuleElement[]
  rollOptions?: RollOptions
}
```

Comportamento:
1. Se `ruleElements` for omitido ou `[]`, o calculo e **byte-a-byte identico** ao existente hoje (nenhum teste/chamador atual muda de resultado).
2. Caso contrario: `resolveFlatModifiers(ruleElements, rollOptions ?? createRollOptions([]))` resolve os `FlatModifier`s validos (ignora dinamicos/com predicate nao satisfeito, mesma regra ja documentada em `.ai/game_systems/pathfinder_2e/rule_engine/readme.md`); filtra o resultado para `selector === 'ac'`; aplica `applyStackingRules` sobre esse subconjunto.
3. O `total` retornado por `applyStackingRules` e somado ao total de CA existente, **fora** da formula hand-rolled atual (nao substitui nem reclassifica `itemBonus`/`shieldBonus`/`manualAdjustment` — esses continuam somados incondicionalmente como hoje, sem participar da regra de stacking do Rule Engine; ver `skills.md` secao 2 para a razao dessa decisao: reclassificar campos existentes mudaria o CA de personagens ja criados, fora de escopo).

`Pathfinder2eArmorClassBreakdown` ganha:
```ts
{
  // ... campos existentes ...
  ruleEngineBonus: number        // soma dos FlatModifiers de selector 'ac' apos stacking; 0 quando ruleElements omitido
  ruleEngineModifiers: Modifier[] // os que efetivamente contaram (para tooltip/breakdown)
}
```

No frontend, `Pathfinder2eSheetForm.tsx` monta `ruleElements` achatando `rules` de todos os efeitos ativos carregados pelo hook `useCharacterActiveEffects` (`effects.flatMap(effect => effect.rules)`) e passa para `calculateArmorClass` junto com os demais insumos ja existentes.

## 4.1. Integracao com o calculo de Salvamentos

`calculateSavingThrow` (`packages/game-system-pathfinder-2e/src/shared/saving-throws.ts`, `.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 6.1) recebe os mesmos `ruleElements?`/`rollOptions?` opcionais em `Pathfinder2eSavingThrowInput`, com o mesmo comportamento aditivo (omitido/`[]` = identico a formula basica). A diferenca em relacao a CA: o filtro de selector e por salvamento (`selector === key || selector === 'saving-throw'`), onde `key` e `'fortitude'`/`'reflex'`/`'will'` e `'saving-throw'` e o selector real do PF2e que se aplica aos tres ao mesmo tempo (auditado em `pf2e-master/packs`, nao inventado).

`Pathfinder2eSavingThrowBreakdown` tem os mesmos campos `ruleEngineBonus`/`ruleEngineModifiers` de `Pathfinder2eArmorClassBreakdown`.

`Pathfinder2eSheetForm.tsx` chama `calculateSavingThrow` uma vez por salvamento (`getSavingThrowBreakdown`), passando o mesmo `ruleElements` achatado dos efeitos ativos usado por CA — um unico `flatMap` reutilizado nas quatro chamadas (CA + 3 salvamentos) por render.

## 5. Reatividade Frontend

Sem eventos de socket novos (mesma decisao do spellbook). O hook `useCharacterActiveEffects` busca a lista via `GET` no mount e apos cada `PUT` bem-sucedido; a UI (`ActiveEffectsCard`) chama `save` com a lista completa apos adicionar/remover um item (substituicao total, sem PATCH parcial). CA e salvamentos recalculam localmente assim que o estado do hook muda, sem round-trip adicional.

## 6. Criterios de Aceitacao
* Personagem sem nenhum efeito ativo tem CA e salvamentos identicos ao calculado antes desta feature existir.
* Adicionar um efeito com `FlatModifier` `{selector: 'ac', type: 'circumstance', value: 2}` soma +2 ao CA exibido.
* Adicionar dois efeitos `circumstance` diferentes de CA (ex.: +2 e +1) so aplica o melhor (+2) — regra real de stacking, nao soma os dois.
* Adicionar um efeito `circumstance` de +2 e outro `untyped` de +1 aplica os dois (+3 total) — tipos diferentes sempre se acumulam.
* Remover um efeito ativo recalcula o CA/salvamento imediatamente removendo sua contribuicao.
* Adicionar um efeito com `FlatModifier` `{selector: 'will', type: 'status', value: 1}` soma +1 apenas a Vontade, nao a Fortitude/Reflexo.
* Adicionar um efeito com `FlatModifier` `{selector: 'saving-throw', type: 'status', value: 1}` soma +1 aos tres salvamentos ao mesmo tempo.
* Um efeito de `selector: 'will'` e outro de `selector: 'saving-throw'`, ambos `status`, nao se acumulam em Vontade (mesmo tipo nomeado) — só o melhor conta.
* Efeito com Rule Element de `selector` diferente de `'ac'` (ex.: um `FlatModifier` de `perception`) nao contribui para o CA, mas continua salvo no personagem sem erro.
* `revision` desatualizada no PUT retorna `409` e nao aplica a escrita.
* `packages/game-system-core` nao ganha nenhum campo especifico de PF2e (Rule Element, FlatModifier, stacking) — tudo isso vive em `packages/game-system-pathfinder-2e`.
