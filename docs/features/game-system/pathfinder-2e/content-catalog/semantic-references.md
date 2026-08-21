# Feature Spec — Índice semântico de referências PF2e

Status: **READY — escopo revisado para catálogo já importado**

Card: `QH-EFF-004`

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: `QH-EFF-001` concluído. Esta entrega prepara `QH-EFF-005`, `QH-EFF-006`, `QH-EFF-007` e `QH-EFF-008`.

## 1. Contexto

O conteúdo PF2e necessário ao QuestHub já foi integralmente importado. **Não existem novas rodadas de importação previstas.**

A fonte usada pelas importações está travada no commit:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

Na fonte PF2e existem relações explícitas como:

```text
@UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 2}
```

A normalização histórica preservou o texto legível, mas descartou o UUID. Como não haverá novas importações, o QH-EFF-004 precisa reconstruir essas relações para **os registros já existentes**.

## 2. Objetivo

Gerar e versionar um **índice sidecar de referências PF2e**, chaveado pelo `contentId` já existente.

O índice preserva:

1. referências cujo alvo da própria fonte resolve exatamente para `condition`, `effect` ou `affliction`;
2. referências PF2e explícitas cujo alvo não pôde ser resolvido exatamente, mantendo-as sem `target.type` para não destruir informação da fonte nem inferir semântica.

Referências cujo alvo foi resolvido e comprovadamente é outro tipo, como uma Spell ou Equipment comum, não entram no índice destinado ao fluxo de Active Effects.

Os arquivos `original` do catálogo permanecem byte a byte iguais aos da `main`.

O QH-EFF-004 não reimporta conteúdo e não altera o contrato de `Pathfinder2eOriginalContentRecord`.

## 3. Por que sidecar

Uma primeira prova de backfill inline recuperou referências corretamente, mas reescrever os registros originais adicionaria milhões de linhas e misturaria metadata derivada com o conteúdo congelado.

A solução definitiva separa responsabilidades:

```text
OriginalContentRecord existente
        │
        │ contentId
        ▼
PF2e Source Reference Index
        │
        ├── condition
        ├── effect
        ├── affliction
        └── unresolved explicit PF2e reference
```

Consequências:

- os registros importados e seus hashes não mudam;
- traduções não mudam;
- a metadata pode ser regenerada deterministicamente;
- QH-EFF-005/006/007/008 consultam a relação por `contentId`;
- referências explícitas não resolvidas não são perdidas nem classificadas artificialmente;
- o VTT Core continua sem conhecer semântica PF2e.

## 4. Fora de escopo

O QH-EFF-004 **não**:

- cria nova rodada, batch ou delivery de importação;
- seleciona novos Spells, Items, Creatures ou Hazards;
- modifica `data`, `sourceHash`, `translatableHash`, imagens ou traduções;
- cria o catálogo de Conditions/Effects — responsabilidade do QH-EFF-005;
- classifica buff/debuff, polaridade ou consequência mecânica;
- interpreta save, duração, stacking, dano ou valor mecânico;
- aplica `CampaignActorEffect`;
- altera ficha, Token, banco, API do Core ou realtime;
- infere referência por texto normalizado, label, IA ou aproximação nominal;
- trata uma referência não resolvida como Condition/Effect/Affliction sem evidência estrutural.

## 5. Contrato do índice

O contrato do registro original permanece inalterado.

A API interna PF2e expõe:

```ts
export function getPathfinder2eSourceReferences(
  contentId: string,
): readonly Pathfinder2eSourceReference[]
```

Uma referência materializada contém:

```ts
type Pathfinder2eSourceReference = {
  syntax: 'INLINE_UUID' | 'UUID_VALUE'
  sourcePath: string
  sourceIndex: number
  uuid: string
  label: string | null
  ownerSourceId: string | null
  target: {
    uuid: string
    package?: string
    sourcePack?: string
    documentType?: string
    compendiumKey?: string
    sourceId?: string
    slug?: string
    type?: 'condition' | 'effect' | 'affliction'
  }
}
```

`target.type` ausente significa somente que a referência explícita PF2e foi preservada, mas o alvo não foi resolvido com exatidão. Não autoriza interpretação mecânica.

Os arquivos gerados usam uma tupla compacta para evitar expansão desnecessária do repositório. O UUID bruto preserva `package`, `pack`, `documentType` e chave; essas partes são recompostas na leitura.

## 6. Fonte de verdade

O backfill recebe um checkout local da fonte PF2e e o entrypoint valida que `HEAD` seja exatamente:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

Commit divergente é erro fatal.

Para reencontrar o documento que originou cada registro, o algoritmo usa somente identidade estrutural persistida:

1. `source.sourceId`;
2. `source.slug`, quando disponível;
3. `source.sourcePack` + `system.pf2e.json`;
4. `source.publicationTitle`, quando necessário;
5. domínio do registro (`BESTIARY`, `SPELL`, `ITEM`).

Se a identidade não resultar em exatamente um documento source, o processo falha. Não existe fallback aproximado.

## 7. Cobertura

O gerador percorre recursivamente todos os arquivos `original` do catálogo atual, incluindo:

- pilotos históricos;
- lotes exaustivos;
- Bestiary;
- Spells;
- Items;
- subdiretórios históricos de Items;
- Creatures e Hazards presentes no domínio `BESTIARY`.

O resultado é dividido em três arquivos sidecar gerados:

```text
source_reference_index/generated/bestiary.ts
source_reference_index/generated/spells.ts
source_reference_index/generated/items.ts
```

## 8. Extração de referências

### 8.1. `@UUID[...]` inline

Para cada ocorrência são preservados:

- UUID bruto;
- label, quando existir;
- JSON Pointer (`sourcePath`);
- posição da ocorrência (`sourceIndex`);
- `ownerSourceId` do documento incorporado mais próximo, quando existir.

### 8.2. UUID como valor

Campos cujo valor completo é um UUID Foundry reconhecido também são coletados.

### 8.3. Duplicidades

Ocorrências repetidas permanecem independentes. Uma Spell com `Frightened 1`, `Frightened 2` e `Frightened 3` preserva as três referências e respectivos contextos.

## 9. Resolução e retenção do target

UUIDs de Compendium são decompostos estruturalmente.

O resolver usa o manifest `system.pf2e.json` porque o nome lógico do Compendium pode divergir do diretório físico da fonte.

Não existe mapa hardcoded de nomes de Conditions, Effects ou packs mecânicos.

Após a resolução estrutural, existem três casos:

1. **Target resolvido como `condition`, `effect` ou `affliction`**: a referência entra no sidecar com o tipo comprovado pela fonte.
2. **Target PF2e explícito não resolvido**: a referência entra no sidecar com UUID/contexto preservados e `target.type` ausente.
3. **Target resolvido como outro tipo**, por exemplo `spell` ou equipment comum: a referência é excluída do sidecar de Active Effects porque já existe evidência estrutural de que não pertence a esse conjunto.

O label textual nunca é usado para promover ou classificar uma referência.

Uma referência não resolvida é **informação preservada**, não um efeito confirmado. Cards posteriores só podem utilizá-la como efeito após obter evidência estrutural suficiente.

## 10. Invariantes

O backfill definitivo não reescreve arquivos `original`.

Devem permanecer idênticos à `main`:

- `contentId`;
- `domain`;
- `locale`;
- `source`;
- `image`;
- `sourceHash`;
- `translatableHash`;
- `data`;
- overlays `pt-BR`.

As únicas saídas versionadas do backfill são os arquivos do índice sidecar.

## 11. Idempotência

Com o mesmo catálogo e o mesmo source commit, uma segunda execução deve produzir:

```text
changedFileCount = 0
```

O modo de validação é:

```text
node scripts/backfill-pf2e-source-references.mjs .tmp/pf2e-source --check
```

Se o índice versionado estiver divergente do resultado determinístico, o comando termina com erro.

## 12. Relação com o importador histórico

O importador histórico permanece intocado.

O comando de backfill não executa seleção, importação, tradução ou cobertura editorial. Ele apenas reconstrói o índice a partir de:

```text
catálogo já existente + fonte travada
```

## 13. Arquitetura

Toda a implementação pertence ao bounded context PF2e:

```text
apps/api/src/game_systems/pathfinder_2e/content_catalog/
scripts/*pf2e-source-references*
```

O VTT Core não conhece UUID Foundry, Conditions PF2e ou o índice.

ADR aplicável: `ADR-0005`.

Não há mudança de ownership, Campaign boundary, CampaignActor, Token ou `CampaignActorEffect`. Não é necessário novo ADR.

## 14. Critérios de aceitação

- **AC01** — `Pathfinder2eOriginalContentRecord` permanece inalterado.
- **AC02** — o backfill aceita somente o source commit travado.
- **AC03** — todo o catálogo original existente é percorrido recursivamente.
- **AC04** — Bestiary, Spells e Items são cobertos, incluindo diretórios históricos aninhados.
- **AC05** — `@UUID[...]` inline é extraído estruturalmente.
- **AC06** — UUID armazenado diretamente como valor também é extraído.
- **AC07** — JSON Pointer, posição, label e owner source ID são preservados.
- **AC08** — ocorrências duplicadas permanecem independentes.
- **AC09** — Compendium é decomposto estruturalmente.
- **AC10** — resolução de pack usa `system.pf2e.json`, sem mapa mecânico hardcoded.
- **AC11** — documento source ambíguo aborta o backfill.
- **AC12** — nenhum target é inferido por label ou texto.
- **AC13** — targets resolvidos como `condition`, `effect` ou `affliction` são retidos; referências PF2e explícitas não resolvidas também são preservadas sem tipo, enquanto targets comprovadamente não semânticos são excluídos.
- **AC14** — arquivos `original` e traduções permanecem intocados.
- **AC15** — nenhuma nova rodada ou conteúdo é importado.
- **AC16** — segunda execução é idempotente (`changedFileCount = 0`).
- **AC17** — nenhuma regra PF2e vaza para VTT Core.
- **AC18** — o PR contém o índice sidecar gerado para o catálogo atual antes de Human Approval.

## 15. Gates

Antes de Human Approval:

1. Development concluído com sidecar gerado e originais restaurados;
2. Architecture revalidation;
3. Code Review;
4. Documentation Audit;
5. QA cobrindo os 18 critérios;
6. `Game System Boundaries` e `Quality` verdes.

O merge permanece responsabilidade exclusiva do owner do repositório.
