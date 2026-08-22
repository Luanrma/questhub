# QH-EFF-013 — Consulta confiável de Active Effect Definitions PF2e

Status: **IMPLEMENTATION CONTRACT**

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependência: **QH-EFF-012**.  
Bloqueia: **QH-EFF-014** e **QH-EFF-015**.

## Objetivo

Expor o catálogo canônico de `condition`, `effect` e `affliction` restaurado pelo QH-EFF-012 por um contrato somente leitura, estável e consumível pela UI e por futuras composições do Game System.

O card não aplica Effects e não executa mecânica PF2e.

## Identidade

A única identidade de uma definição continua sendo:

```text
definitionKey = {sourcePack}:{sourceId}
```

A consulta de detalhe é exata por `definitionKey`. Nome, descrição, slug, tradução ou resultado de busca nunca substituem essa identidade.

A busca textual é apenas descoberta de candidatos e sempre retorna as respectivas `definitionKey` para qualquer navegação posterior.

## Contrato de leitura

Cada definição consultável expõe:

- `definitionKey`;
- `kind = condition | effect | affliction`;
- `source.sourcePack` e `source.sourceId`;
- metadata canônica disponível em `source` (`slug`, publicação e `imagePath` quando existentes);
- `name` e `description` resolvidos para apresentação;
- `iconUrl` e indicação explícita de fallback quando não existe asset QuestHub local;
- `polarity`;
- `group`;
- `conditionValue` quando aplicável;
- `schemaVersion`;
- metadata de localização indicando o locale solicitado e o locale efetivamente usado em `name` e `description`.

Nenhum payload mecânico opaco, Rule Element ou interpretação de regra é adicionado por este contrato.

## Localização

Locales suportados: `en-US` e `pt-BR`.

- `en-US` é a fonte canônica materializada;
- `pt-BR` usa overlay por `definitionKey` quando uma tradução revisada estiver disponível;
- fallback é feito por campo: nome e descrição podem resolver para locales diferentes;
- a resposta informa `requestedLocale`, `nameLocale` e `descriptionLocale`;
- ausência de overlay não autoriza tradução automática nem texto inventado;
- QH-EFF-013 não cria traduções de Active Effects apenas para satisfazer a API.

## Endpoints

### Listagem / descoberta

```text
GET /api/game-systems/pathfinder-2e/content/active-effects
```

Query params opcionais:

- `locale=en-US|pt-BR` — default `pt-BR`;
- `kind=condition|effect|affliction`;
- `q=<texto>` — busca normalizada por nome de apresentação, nome original, `definitionKey` ou slug;
- `offset>=0`;
- `limit=1..100` — default 50.

A busca não faz fuzzy matching nem promove o texto encontrado a identidade. Os resultados permanecem ordenados deterministicamente pelo inventário canônico e paginados.

Resposta:

```ts
{
  items: Pathfinder2eActiveEffectDefinitionView[]
  page: {
    offset: number
    limit: number
    total: number
    hasMore: boolean
  }
}
```

### Detalhe exato

```text
GET /api/game-systems/pathfinder-2e/content/active-effects/:definitionKey
```

`definitionKey` é tratada como chave estrutural exata. Uma string como `Frightened` não é resolvida por aproximação nominal.

## Erros

- query/params inválidos → `400`;
- `definitionKey` válida em formato, porém ausente do catálogo → `404`;
- autenticação segue o mesmo contrato de leitura já usado pelo Content Catalog PF2e.

## Fronteiras arquiteturais

- implementação permanece em `apps/api/src/game_systems/pathfinder_2e/content_catalog/**`;
- VTT Core não conhece `Frightened`, packs, UUIDs, Rule Elements ou classificação PF2e;
- nenhuma rota mutável é criada;
- nenhuma consulta cria, altera ou remove `CampaignActorEffect`;
- nenhum endpoint executa save, attack, damage, duration, stacking ou Rule Element;
- ADR-0005 permanece aplicável e não requer alteração.

## Fora de escopo

- aplicar uma definição a um Actor;
- refresh/apresentação de Effects já aplicados — QH-EFF-014;
- hyperlinks dentro de Spell/Item/Bestiary — QH-EFF-015;
- automação Spell/Item/Attack → Effect;
- tradução automática do catálogo;
- resolver referências por nome aproximado.

## Critérios de aceite

- **AC01** — Frightened é recuperável por `conditionitems:TBSHQspnbcqxsmjL` com descrição, `HARMFUL` e metadata de valor preservadas;
- **AC02** — Conditions, Effects e Afflictions publicados são listáveis pelo mesmo contrato;
- **AC03** — detalhe usa somente `definitionKey` exata e não resolve `Frightened` por nome;
- **AC04** — filtros de `kind` e busca textual não alteram identidade semântica;
- **AC05** — listagem é paginada, determinística e limitada a no máximo 100 itens por resposta;
- **AC06** — `pt-BR` usa overlay por chave quando existir e fallback `en-US` por campo quando necessário;
- **AC07** — a resposta informa de qual locale vieram nome e descrição;
- **AC08** — `iconUrl = null` continua acionando fallback de apresentação sem dependência externa;
- **AC09** — entradas inexistentes retornam `404` no endpoint de detalhe;
- **AC10** — API é somente leitura e não cria rotas POST/PUT/PATCH/DELETE para o catálogo;
- **AC11** — nenhum Rule Element ou mecânica PF2e é executado;
- **AC12** — unit tests, `build:web` e gates de arquitetura/documentação permanecem verdes.
