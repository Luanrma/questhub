# QH-EFF-015 — Referências clicáveis de Conditions/Effects em conteúdo PF2e

Status: **IMPLEMENTATION CONTRACT**

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: **QH-EFF-013** e **QH-EFF-014**.

## Objetivo

Transformar referências semânticas já resolvidas por Spell, Item e Bestiary em elementos consultáveis pela UI do catálogo PF2e, abrindo a definição canônica de `condition`, `effect` ou `affliction` sem executar qualquer mecânica.

Após feedback de Human Approval, o contrato também determina que uma instância canônica já aplicada a um Actor/Token reutilize **o mesmo componente visual de detalhe** usado pela referência de conteúdo. Não devem existir dois cards concorrentes para apresentar a mesma definição canônica.

## Identidade

A identidade continua sendo exclusivamente:

```text
definitionKey = {sourcePack}:{sourceId}
```

`outcome`, `valueHint`, `stageHint`, label de origem e owner/origin pertencem à ocorrência no conteúdo e nunca formam uma nova identidade.

Uma instância de `CampaignActorEffect` que possua `definitionKey` pode consultar novamente a definição canônica para apresentação. A instância não passa a ser a fonte de verdade da definição.

## Fonte das referências

QH-EFF-015 consome somente os mappings estruturais existentes:

- `getPathfinder2eSpellEffectMappings`;
- `getPathfinder2eItemEffectMappings`;
- `getPathfinder2eBestiaryEffectMappings`.

Nenhuma referência é criada por busca fuzzy, proximidade semântica, regex sobre nomes desconhecidos ou tentativa de deduzir uma Condition a partir de texto livre.

`REFERENCE_ONLY` permanece consultiva. `potential` é metadata herdada do mapping e não autoriza aplicação automática.

## Contratos de leitura

A navegação a partir de conteúdo usa:

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

Para um efeito canônico aplicado em uma campanha, o VTT consulta a camada de composição, sem conhecer Pathfinder diretamente:

```text
GET /api/campaigns/:campaignId/game-system-effects/definitions/:definitionKey?locale=pt-BR|en-US
```

Essa rota valida a campanha e devolve uma projeção de apresentação genérica. Para campanhas PF2e, a Composition Root resolve internamente a definição PF2e.

Ambos os contratos são somente leitura.

## Apresentação unificada

Na ficha de conteúdo PF2e:

1. referências explicitamente rotuladas podem ser destacadas inline quando um dos `exactLabels` já associados ao mapping existir literalmente no texto exibido;
2. não há fuzzy matching;
3. todas as ocorrências estruturais também ficam disponíveis em uma área de referências, cobrindo referências não textuais, labels implícitos e Attack mappings;
4. clicar abre a definição exata por `definitionKey`;
5. o detalhe mostra separadamente definição canônica e contexto da ocorrência;
6. o detalhe não possui ação de aplicar Effect.

No Token:

1. o indicador continua sendo um elemento genérico do VTT;
2. ao selecionar uma instância com `definitionKey`, a UI consulta a definição pela Composition Root;
3. o detalhe é renderizado pelo **mesmo `ActiveEffectDefinitionModal`** usado pela referência de conteúdo;
4. não existe um segundo layout escuro específico para o detalhe do Token;
5. uma instância manual ou sem definição canônica continua usando o mesmo shell visual, mas em fallback de apresentação e sem alegar identidade canônica.

A lista estrutural não é um segundo catálogo: ela contém apenas referências pertencentes ao conteúdo atualmente aberto e resolve os detalhes no catálogo canônico.

## Idioma e fidelidade de tradução

Definições canônicas oferecem seleção explícita entre:

- `pt-BR`;
- `en-US`.

A localização é resolvida campo a campo. Uma tradução só substitui `name` ou `description` quando existe valor revisado para aquele campo. Na ausência de tradução, o campo permanece em `en-US` e a UI informa que houve fallback parcial. Não é permitido resumir, completar por inferência ou apresentar uma tradução inexistente como canônica.

O overlay PT-BR usa correspondência estrutural exata por source pack + nome canônico, nunca fuzzy matching. O conjunto importado/revisado é versionado pela revisão da fonte de tradução utilizada na implementação.

## Descrição segura e legível

A definição canônica entregue para apresentação não expõe markup cru do source pack.

Antes de chegar ao componente visual:

- `<p>`, listas, quebras e demais tags HTML são convertidos em blocos de texto;
- `script` e `style` são descartados;
- entidades HTML são decodificadas;
- referências Foundry como `@Compendium[...]`, `@UUID[...]` e `@Check[...]` são convertidas para labels/texto legível quando possível;
- a UI recebe `descriptionBlocks` e renderiza texto React normal;
- `dangerouslySetInnerHTML` não é usado.

Portanto, tags como `<p>` e comandos como `@Check[...]` não devem aparecer literalmente no card final.

## Exemplo obrigatório — Agonizing Despair

`pf2e:spell:spells-srd:agonizing-despair` deve expor três ocorrências:

- `Frightened 1` → `conditionitems:TBSHQspnbcqxsmjL`, `SUCCESS`, valor 1;
- `Frightened 2` → a mesma `definitionKey`, `FAILURE`, valor 2;
- `Frightened 3` → a mesma `definitionKey`, `CRITICAL_FAILURE`, valor 3.

Os três links consultam a mesma definição Frightened. O valor e o resultado aparecem apenas como contexto da ocorrência.

Em `pt-BR`, a definição de Frightened pode ser apresentada como **Assustado** quando a tradução revisada estiver disponível, sem alterar sua `definitionKey`.

## Fronteiras arquiteturais

- mappings, catálogo, localização e normalização PF2e permanecem em `apps/api/src/game_systems/pathfinder_2e/**`;
- a Composition Root pode transformar a definição específica do sistema em DTO de apresentação genérico;
- o shell visual compartilhado permanece agnóstico e recebe somente nome, descrição, tags, polaridade, locale e contexto já resolvidos;
- VTT Core não recebe conhecimento de Conditions, Effects, Afflictions, packs, Rule Elements ou identificadores PF2e;
- o Token não importa módulo PF2e e não resolve semântica PF2e;
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
- **AC10** — testes unitários, `build:web` e gates de arquitetura/documentação permanecem verdes;
- **AC11** — detalhe canônico aberto a partir do Token e detalhe aberto por referência de conteúdo usam o mesmo componente visual compartilhado;
- **AC12** — definição canônica permite alternar entre `pt-BR` e `en-US`;
- **AC13** — fallback de localização é explícito por campo e nunca é tratado como tradução existente;
- **AC14** — descrição apresentada não contém HTML cru nem comandos Foundry não resolvidos suportados pelo formatador;
- **AC15** — instâncias manuais/sem `definitionKey` continuam consultáveis no mesmo shell, com fallback genérico e sem falsa identidade canônica.
