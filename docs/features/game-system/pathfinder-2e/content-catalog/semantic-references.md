# Feature Spec — Índice semântico de referências PF2e

Status: **READY — catálogo já importado**

Card: `QH-EFF-004`

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: `QH-EFF-001`. Prepara `QH-EFF-005`, `QH-EFF-006`, `QH-EFF-007` e `QH-EFF-008`.

## 1. Contexto

Todo o conteúdo PF2e necessário ao QuestHub já foi importado. **Não existem novas rodadas de importação previstas.**

A fonte usada nas importações está travada no commit:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

A fonte possui relações explícitas como:

```text
@UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 2}
```

A normalização histórica preservou o texto legível, mas removeu o UUID. O QH-EFF-004 reconstrói essas relações para o catálogo **já existente**.

## 2. Objetivo

Gerar e versionar um **índice sidecar PF2e**, chaveado pelo `contentId` já existente, sem modificar os arquivos `original`.

O índice retém:

1. referências cujo alvo resolve estruturalmente para `condition`, `effect` ou `affliction`;
2. referências PF2e explícitas cujo `documentType` é `Item`, mas cujo alvo não pôde ser resolvido com exatidão. Essas referências ficam sem `target.type` e não são tratadas como efeito confirmado.

O índice exclui referências que a própria estrutura já comprova não serem candidatas a Active Effects, por exemplo:

- target resolvido como `spell` ou equipment comum;
- `RollTable` sem `type`;
- Journal e outros document types que não são `Item`.

Não há inferência por label, texto, IA ou aproximação nominal.

## 3. Sidecar em vez de reimportação

A prova inicial de backfill inline funcionou, mas reescreveria dezenas de arquivos congelados e adicionaria milhões de linhas. A solução definitiva é:

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
        └── unresolved PF2e Item reference
```

Consequências:

- `Pathfinder2eOriginalContentRecord` permanece inalterado;
- originais, hashes e traduções permanecem iguais à `main`;
- metadata é regenerável deterministicamente;
- QH-EFF-005/006/007/008 podem consultar referências por `contentId`;
- VTT Core continua sem conhecer semântica PF2e.

## 4. Fora de escopo

O QH-EFF-004 não:

- cria nova rodada, batch, delivery ou conteúdo;
- altera cobertura editorial;
- altera `data`, `sourceHash`, `translatableHash`, imagens ou traduções;
- cria o catálogo de Conditions/Effects — QH-EFF-005;
- classifica buff/debuff ou polaridade;
- interpreta save, duração, stacking, dano ou modificadores;
- aplica `CampaignActorEffect`;
- altera ficha, Token, banco, API do Core ou realtime;
- promove uma referência não resolvida a Condition/Effect/Affliction.

## 5. Contrato

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

`target.type` ausente significa apenas que um **UUID PF2e de documento `Item`** foi explicitamente preservado, mas o alvo não foi resolvido de forma suficiente para classificá-lo.

Os arquivos gerados usam uma tupla compacta. O UUID bruto preserva package, pack, document type e chave; essas partes são recompostas na leitura.

## 6. Fonte e resolução do registro de origem

O entrypoint valida que o checkout PF2e esteja exatamente em:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

Commit divergente é erro fatal.

Para reencontrar o source document de cada registro já importado, o algoritmo usa somente identidade estrutural persistida:

1. `source.sourceId`;
2. `source.slug`, quando disponível;
3. `source.sourcePack` + `system.pf2e.json`;
4. `source.publicationTitle`, quando necessário;
5. domínio (`BESTIARY`, `SPELL`, `ITEM`).

Se o resultado não for exatamente um source document, o processo falha. Não existe fallback aproximado.

## 7. Cobertura

O gerador percorre recursivamente todos os arquivos `original`, incluindo:

- pilotos históricos;
- lotes exaustivos;
- Bestiary;
- Spells;
- Items e subdiretórios históricos;
- Creatures e Hazards presentes em `BESTIARY`.

Saídas versionadas:

```text
source_reference_index/generated/bestiary.ts
source_reference_index/generated/spells.ts
source_reference_index/generated/items.ts
```

## 8. Extração

### `@UUID[...]` inline

Preserva por ocorrência:

- UUID bruto;
- label;
- JSON Pointer (`sourcePath`);
- posição (`sourceIndex`);
- `ownerSourceId` do documento incorporado mais próximo, quando disponível.

### UUID como valor

Campos cujo valor completo é um UUID Foundry reconhecido também são coletados.

### Duplicidades

Ocorrências repetidas permanecem independentes. Valores/contextos diferentes não são deduplicados.

## 9. Resolução e retenção do target

UUIDs de Compendium são decompostos estruturalmente. O resolver usa `system.pf2e.json`, pois nome lógico de pack e diretório físico podem divergir.

Não existe mapa hardcoded de Conditions, Effects, Afflictions ou nomes de packs mecânicos.

A retenção segue:

```text
resolved type = condition/effect/affliction
  -> RETÉM com type

PF2e + documentType = Item + target sem type resolvido
  -> RETÉM sem type

resolved como outro tipo OU documentType não-Item sem type
  -> EXCLUI
```

O label nunca participa dessa decisão.

## 10. Invariantes

O backfill não reescreve arquivos `original`.

Permanecem idênticos à `main`:

- `contentId`;
- `domain`;
- `locale`;
- `source`;
- `image`;
- `sourceHash`;
- `translatableHash`;
- `data`;
- overlays `pt-BR`.

As únicas saídas versionadas do backfill são os três arquivos sidecar.

## 11. Idempotência

Com o mesmo catálogo e source commit, uma segunda execução deve retornar:

```text
changedFileCount = 0
```

Validação:

```text
node scripts/backfill-pf2e-source-references.mjs .tmp/pf2e-source --check
```

Se o sidecar versionado divergir do resultado determinístico, o comando falha.

## 12. Arquitetura

Toda a implementação pertence ao bounded context PF2e:

```text
apps/api/src/game_systems/pathfinder_2e/content_catalog/
scripts/*pf2e-source-references*
```

O importador histórico permanece intocado. O VTT Core não conhece UUID Foundry, Conditions PF2e ou esse índice.

ADR aplicável: `ADR-0005`. Não há mudança de ownership, Campaign boundary, CampaignActor, Token ou `CampaignActorEffect`; nenhum novo ADR é necessário.

## 13. Critérios de aceitação

- **AC01** — `Pathfinder2eOriginalContentRecord` permanece inalterado.
- **AC02** — somente o source commit travado é aceito.
- **AC03** — todo o catálogo original existente é percorrido recursivamente.
- **AC04** — Bestiary, Spells e Items, inclusive diretórios históricos, são cobertos.
- **AC05** — `@UUID[...]` inline é extraído estruturalmente.
- **AC06** — UUID armazenado diretamente como valor também é extraído.
- **AC07** — JSON Pointer, posição, label e owner source ID são preservados.
- **AC08** — ocorrências duplicadas permanecem independentes.
- **AC09** — Compendium é decomposto estruturalmente.
- **AC10** — pack é resolvido via `system.pf2e.json`, sem mapa mecânico hardcoded.
- **AC11** — source document ambíguo aborta o backfill.
- **AC12** — nenhum target é inferido por label ou texto.
- **AC13** — resolved `condition/effect/affliction` é retido; PF2e `Item` explícito não resolvido é preservado sem tipo; target comprovadamente não semântico ou document type não-Item é excluído.
- **AC14** — originais e traduções permanecem intocados.
- **AC15** — nenhuma nova importação é executada.
- **AC16** — segunda execução é idempotente (`changedFileCount = 0`).
- **AC17** — nenhuma regra PF2e vaza para VTT Core.
- **AC18** — o PR contém o sidecar gerado para o catálogo atual antes de Human Approval.

## 14. Gates

Antes de Human Approval:

1. Development concluído com sidecar gerado e originais restaurados;
2. Architecture revalidation;
3. Code Review;
4. Documentation Audit;
5. QA cobrindo AC01–AC18;
6. `Game System Boundaries` e `Quality` verdes.

O merge permanece responsabilidade exclusiva do owner do repositório.
