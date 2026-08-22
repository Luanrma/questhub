# QH-EFF-015 — Referências clicáveis de Conditions/Effects em conteúdo PF2e

Status: **IMPLEMENTATION CONTRACT**

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: **QH-EFF-013** e **QH-EFF-014**.

## Objetivo

Transformar referências semânticas já resolvidas por Spell, Item e Bestiary em elementos consultáveis pela UI do catálogo PF2e, abrindo a definição canônica de `condition`, `effect` ou `affliction` sem executar qualquer mecânica.

## Identidade

A identidade continua sendo exclusivamente:

```text
definitionKey = {sourcePack}:{sourceId}
```

`outcome`, `valueHint`, `stageHint`, label de origem e owner/origin pertencem à ocorrência no conteúdo e nunca formam uma nova identidade.

## Fonte das referências

QH-EFF-015 consome somente os mappings estruturais existentes:

- `getPathfinder2eSpellEffectMappings`;
- `getPathfinder2eItemEffectMappings`;
- `getPathfinder2eBestiaryEffectMappings`.

Nenhuma referência é criada por busca fuzzy, proximidade semântica, regex sobre nomes desconhecidos ou tentativa de deduzir uma Condition a partir de texto livre.

`REFERENCE_ONLY` permanece consultiva. `potential` é metadata herdada do mapping e não autoriza aplicação automática.

## Contrato de leitura

```text
GET /api/game-systems/pathfinder-2e/content/active-effect-references/:contentId
```

Query opcional:

- `locale=en-US|pt-BR`, default `pt-BR`.

Cada ocorrência expõe:

- `contentId` e `occurrenceIndex`;
- `definitionKey` e `kind`;
- `displayLabel` localizado;
- `exactLabels`, usados somente para apresentação exata de uma referência já resolvida;
- `potential` e `evidence`;
- contexto de ocorrência: `outcome`, `valueHint`, `stageHint` e `origin` quando disponível;
- coordenadas de origem: `sourcePath`, `sourceIndex`, `label`, `ownerSourceId`;
- `schemaVersion`.

O endpoint é somente leitura.

## Apresentação

Na ficha de conteúdo PF2e:

1. referências explicitamente rotuladas podem ser destacadas inline quando um dos `exactLabels` já associados ao mapping existir literalmente no texto exibido;
2. não há fuzzy matching;
3. todas as ocorrências estruturais também ficam disponíveis em uma área de referências, cobrindo referências não textuais, labels implícitos e Attack mappings;
4. clicar abre a definição exata por `definitionKey`;
5. o modal mostra separadamente definição canônica e contexto da ocorrência;
6. o modal não possui ação de aplicar Effect.

A lista estrutural não é um segundo catálogo: ela contém apenas referências pertencentes ao conteúdo atualmente aberto e resolve os detalhes no catálogo canônico do QH-EFF-013.

## Exemplo obrigatório — Agonizing Despair

`pf2e:spell:spells-srd:agonizing-despair` deve expor três ocorrências:

- `Frightened 1` → `conditionitems:TBSHQspnbcqxsmjL`, `SUCCESS`, valor 1;
- `Frightened 2` → a mesma `definitionKey`, `FAILURE`, valor 2;
- `Frightened 3` → a mesma `definitionKey`, `CRITICAL_FAILURE`, valor 3.

Os três links consultam a mesma definição Frightened. O valor e o resultado aparecem apenas como contexto da ocorrência.

## Fronteiras arquiteturais

- mappings e normalização permanecem em `apps/api/src/game_systems/pathfinder_2e/**`;
- apresentação específica PF2e permanece em `apps/web/src/game-systems/**`;
- VTT Core não recebe conhecimento de Conditions, Effects, Afflictions, packs ou Rule Elements;
- nenhum click cria ou altera `CampaignActorEffect`;
- nenhum save, attack, damage, duration, stacking ou Rule Element é executado;
- o catálogo canônico não é duplicado.

## Critérios de aceite

- **AC01** — Agonizing Despair expõe Frightened 1/2/3 como referências clicáveis para a mesma `definitionKey`;
- **AC02** — o clique abre a definição canônica exata;
- **AC03** — Item e Bestiary Action/Attack usam o mesmo contrato de consulta;
- **AC04** — conteúdo sem mapping estrutural não ganha link por aproximação textual;
- **AC05** — outcome/value/stage/origin permanecem contexto da ocorrência;
- **AC06** — UI consulta a definição canônica e não duplica o catálogo;
- **AC07** — consultar uma referência nunca aplica Effect;
- **AC08** — `REFERENCE_ONLY` continua somente consultivo;
- **AC09** — referências não textuais continuam acessíveis pela lista estrutural;
- **AC10** — testes unitários, `build:web` e gates de arquitetura/documentação permanecem verdes.
