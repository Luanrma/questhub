# Feature Spec — Backfill de referências estruturadas PF2e

Status: **READY — escopo revisado**

Card: `QH-EFF-004` — `https://trello.com/c/ROxrd49F/9-qh-eff-004-preservar-refer%C3%AAncias-sem%C3%A2nticas-de-efeitos-no-importador-pf2e`

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: `QH-EFF-001` concluído. Esta entrega prepara `QH-EFF-005`, `QH-EFF-006`, `QH-EFF-007` e `QH-EFF-008`.

## 1. Contexto corrigido

O catálogo PF2e necessário ao QuestHub já foi importado. **Não existem novas rodadas de conteúdo previstas.**

Portanto, preservar referências estruturadas apenas em futuras importações não atende ao produto. O QH-EFF-004 deve enriquecer o catálogo **já versionado**.

A fonte PF2e usada pelas importações está travada em:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

O backfill deve reler exatamente essa fonte e associá-la aos registros já existentes por identidade estrutural persistida.

## 2. Problema

Na fonte PF2e, descrições e Rule Elements podem conter referências explícitas como:

```text
@UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 2}
```

Durante a normalização histórica, o texto apresentado foi corretamente reduzido para algo legível:

```text
Frightened 2
```

mas o UUID foi descartado. O catálogo atual, portanto, preserva a apresentação porém perdeu parte da relação semântica fornecida pela própria fonte.

Não é aceitável reconstruir essa relação por busca textual, regex sobre nomes de Conditions, IA ou tabelas heurísticas.

## 3. Objetivo

Adicionar metadata `sourceReferences` aos `Pathfinder2eOriginalContentRecord` já existentes sempre que o documento original travado possuir uma referência estruturada.

O resultado do PR deve conter o catálogo histórico já enriquecido. O merge não deve depender de uma nova importação nem criar novas entidades do catálogo.

## 4. Fora de escopo

O QH-EFF-004 **não**:

- cria novas rodadas de importação;
- seleciona novos Spells, Items, Creatures ou Hazards;
- altera cobertura editorial;
- cria catálogo de Conditions/Effects — responsabilidade do QH-EFF-005;
- classifica uma referência como Condition, Effect, Affliction, Buff ou Debuff;
- interpreta resultados de save, duração, stacking ou valor mecânico;
- aplica `CampaignActorEffect`;
- altera ficha, Token ou VTT;
- modifica traduções `pt-BR`;
- infere referência pelo texto já normalizado.

## 5. Contrato persistido

`Pathfinder2eOriginalContentRecord` passa a aceitar:

```ts
type Pathfinder2eOriginalContentRecord<TData = unknown> = {
  // campos existentes
  sourceReferences?: readonly Pathfinder2eSourceReference[]
  data: TData
}
```

A metadata é opcional para manter compatibilidade estrutural com registros sem referências.

Uma referência preserva, no mínimo:

```ts
type Pathfinder2eSourceReference = {
  syntax: 'INLINE_UUID' | 'UUID_VALUE'
  sourcePath: string
  sourceIndex: number
  uuid: string
  label: string | null
  target: {
    uuid: string
    package?: string
    sourcePack?: string
    documentType?: string
    compendiumKey?: string
    sourceId?: string
    slug?: string
    name?: string
    type?: string
  }
  owner?: {
    sourceId?: string
    name?: string
    type?: string
  }
}
```

Os campos `target.type`, `sourcePack` e demais metadados continuam sendo identidade da fonte; eles **não** representam classificação mecânica QuestHub.

## 6. Fonte de verdade do backfill

O backfill recebe um checkout local do PF2e e deve validar que `HEAD` é exatamente:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

Commit divergente é erro fatal.

A reconstrução usa somente:

1. `source.sourceId` persistido;
2. `source.slug` quando disponível;
3. `source.sourcePack` e o manifest `system.pf2e.json`;
4. `source.publicationTitle` quando necessário para desambiguação;
5. domínio do registro (`BESTIARY`, `SPELL`, `ITEM`).

O texto normalizado e o `label` da referência nunca são usados para escolher o documento source.

Se a identidade persistida não produzir exatamente um documento source, o backfill falha. Não existe fallback aproximado.

## 7. Cobertura obrigatória

O backfill percorre recursivamente todos os arquivos de conteúdo original versionados no catálogo, não apenas os lotes exaustivos mais recentes.

Inclui:

- pilotos históricos;
- todas as coberturas exaustivas existentes;
- Bestiary;
- Spells;
- Items;
- subdiretórios históricos de Items como armor, weapons, equipment etc.;
- Creatures e Hazards presentes em `BESTIARY`.

Arquivos de tradução, manifests, deliveries e índices não são reescritos pelo backfill.

## 8. Regras de extração

### 8.1. Inline UUID

```text
@UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 2}
```

preserva UUID, label, JSON Pointer do campo e índice da ocorrência.

### 8.2. UUID como valor

Campos cujo valor completo é um UUID Foundry reconhecido também são preservados.

### 8.3. Duplicidades

Referências repetidas não são deduplicadas.

Exemplo:

```text
Success: Frightened 1
Failure: Frightened 2
Critical Failure: Frightened 3
```

pode produzir três referências ao mesmo target com labels/posições diferentes.

### 8.4. Owner

Quando uma referência está dentro de um documento incorporado com `_id`, a identidade desse objeto é preservada como `owner`.

Objetos internos sem `_id` não podem substituir um owner source já identificado.

## 9. Resolução do target

UUIDs de Compendium são decompostos estruturalmente:

```text
Compendium.pf2e.conditionitems.Item.Frightened
```

em package, source pack, document type e compendium key.

Para localizar o target source, o resolver usa o manifest da própria fonte PF2e. Isso é necessário porque o nome lógico do Compendium pode divergir do diretório físico, por exemplo:

```text
conditionitems -> packs/conditions
```

Nenhum mapa de Conditions ou Effects é hardcoded no QuestHub.

Se o target não puder ser resolvido de forma única, o UUID bruto e suas partes estruturais permanecem preservados, mas campos de target resolvido são omitidos.

## 10. Invariantes de dados

Para cada registro existente, o backfill pode alterar **somente** `sourceReferences`.

Devem permanecer byte-semanticamente equivalentes:

- `contentId`;
- `domain`;
- `locale`;
- `source`;
- `image`;
- `sourceHash`;
- `translatableHash`;
- `data`.

Nenhum overlay `pt-BR` é modificado.

O backfill deve verificar essa invariância durante a execução e falhar se outro campo mudar.

## 11. Idempotência

Após o catálogo ter sido enriquecido, uma segunda execução com a mesma fonte travada deve resultar em:

```text
changedFileCount = 0
```

Isso é critério obrigatório para QA.

## 12. Relação com o importador histórico

O importador histórico não é a operação de backfill.

Executar o backfill:

```text
node scripts/backfill-pf2e-source-references.mjs .tmp/pf2e-source
```

não deve:

- executar seleção de conteúdo;
- criar batch;
- criar delivery;
- alterar roadmap;
- criar tradução;
- incrementar cobertura.

O objetivo desta entrega é corrigir os dados já existentes, não reabrir o programa de importação.

## 13. Arquitetura

Toda a implementação pertence a:

```text
apps/api/src/game_systems/pathfinder_2e/content_catalog/
scripts/*pf2e-source-references*
```

O VTT Core não conhece UUID Foundry, Conditions PF2e ou catálogo PF2e.

ADR aplicável: `ADR-0005`.

Não há alteração de ownership, Campaign boundary, Actor, Token ou `CampaignActorEffect`. Não é necessário novo ADR.

## 14. Critérios de aceitação

- **AC01** — `sourceReferences` é metadata opcional do registro original PF2e.
- **AC02** — o backfill usa exclusivamente o source commit travado.
- **AC03** — todo o catálogo original existente é percorrido recursivamente.
- **AC04** — Bestiary, Spells e Items são cobertos, incluindo diretórios históricos aninhados.
- **AC05** — `@UUID[...]` inline é preservado antes de qualquer inferência textual.
- **AC06** — UUID armazenado diretamente como valor também é preservado.
- **AC07** — JSON Pointer, posição, label e owner são preservados.
- **AC08** — duplicidades permanecem independentes.
- **AC09** — Compendium é decomposto estruturalmente sem classificação mecânica.
- **AC10** — resolução de pack usa `system.pf2e.json`, não mapa hardcoded de Conditions/Effects.
- **AC11** — documento source ambíguo aborta o backfill.
- **AC12** — target não resolvido não gera inferência; UUID bruto continua preservado.
- **AC13** — nenhum campo do registro além de `sourceReferences` pode mudar.
- **AC14** — traduções `pt-BR` permanecem intocadas.
- **AC15** — nenhuma nova rodada ou conteúdo é importado.
- **AC16** — segunda execução é idempotente (`changedFileCount = 0`).
- **AC17** — nenhuma regra PF2e é aplicada ao VTT/Core.
- **AC18** — o PR contém o resultado do backfill do catálogo existente antes de Human Approval.

## 15. Gates

Antes de retornar a Human Approval:

1. Architecture revalidation;
2. backfill efetivamente executado e versionado na branch;
3. execução `--check` contra a fonte travada retornando zero mudanças;
4. Code Review;
5. Documentation Audit;
6. QA com os 18 critérios;
7. Game System Boundaries e Quality verdes.

O merge continua sendo responsabilidade exclusiva do owner do repositório.
