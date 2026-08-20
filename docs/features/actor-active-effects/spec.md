# Feature Spec — Active Effects de CampaignActor

Status: **READY**

Card: `QH-EFF-001` — `https://trello.com/c/keanIRRe/6-qh-eff-001-modelar-active-effects-no-campaignactor`  
Domínio: `VTT Core / CampaignActor`

## Objetivo

Criar a persistência agnóstica de efeitos atualmente ativos sobre um `CampaignActor`, permitindo que qualquer ator da Campaign mantenha zero, um ou vários efeitos simultâneos sem que o VTT Core interprete regras de um Game System.

Esta feature cria somente a base estrutural. Ela não cria endpoints de mutação, UI, automação mecânica ou resolução de regras.

## Problema

Hoje o QuestHub não possui uma entidade própria para representar estados temporários ou persistentes que estejam atuando sobre um ator. Como consequência, não existe um local agnóstico onde futuros fluxos possam registrar que um personagem, NPC, criatura, familiar ou outro ator está sob um ou vários efeitos.

Persistir esse estado dentro da ficha ou do Token criaria ownership incorreto: a ficha é opcional e mecânica; o Token é uma representação visual com ciclo de vida independente. O estado deve acompanhar o `CampaignActor`.

## Escopo

- introduzir uma entidade genérica de efeito ativo vinculada a exatamente um `CampaignActor`;
- permitir zero, uma ou várias instâncias simultâneas por ator;
- permitir efeitos ad hoc/manuais e efeitos originados por um Game System sem criar colunas específicas de ruleset;
- persistir dados genéricos necessários à futura representação visual: nome, descrição opcional, ícone opcional, polaridade, categoria opcional e valor de exibição opcional;
- persistir identificação opaca de definição/origem quando existir;
- permitir payload/metadados opacos, versionados e interpretados somente pelo responsável do namespace;
- preservar efeitos quando o ator é arquivado;
- excluir os efeitos por cascade quando o ator é excluído definitivamente;
- garantir que o efeito permaneça dentro da Campaign por meio do ator ao qual pertence.

## Fora de escopo

- endpoints para criar, editar ou remover efeitos;
- permissões de Mestre/jogador para manipular efeitos;
- UI na ficha;
- indicadores no Token/VTT;
- catálogo de Conditions/Effects de Pathfinder 2e;
- interpretar spells, itens, criaturas ou hazards;
- aplicar modificadores em CA, HP, saves, atributos, rolagens ou qualquer outra mecânica;
- decidir stacking, substituição, deduplicação ou intensidade segundo regras de um Game System;
- duração automática por turno/rodada;
- histórico/auditoria de efeitos já removidos.

## Personas / permissões

Este card não expõe operações de usuário. As permissões para criar, editar e remover instâncias serão definidas em `QH-EFF-002`.

A persistência não pode depender de o ator possuir controlador, ficha, inventário ou Token.

## Regras

1. Um efeito ativo pertence a exatamente um `CampaignActor`.
2. Um `CampaignActor` pode possuir zero, um ou vários efeitos ativos.
3. Um efeito pode existir em ator sem `CampaignCharacterSheet` e sem `CampaignToken`.
4. O Core não deduplica efeitos por `namespace`, `definitionKey`, nome ou categoria. Duas instâncias iguais podem coexistir; regras de stacking pertencem ao Game System.
5. A polaridade é exclusivamente uma classificação visual genérica: `BENEFICIAL`, `HARMFUL` ou `NEUTRAL`.
6. `category`, quando presente, é uma chave opaca de classificação e não pode ser interpretada pelo Core como regra mecânica.
7. `namespace` identifica de forma opaca quem define/interpreta o efeito. O Core pode transportar e filtrar essa chave, mas não executar lógica concreta a partir dela.
8. `definitionKey`, quando presente, identifica de forma opaca a definição que originou a instância e não é único dentro de um ator.
9. `displayValue`, quando presente, é texto curto para representação futura e não possui semântica matemática no Core.
10. `payload` e `origin` são dados opacos. Seu schema pertence ao `namespace`; o Core apenas persiste/transporta.
11. `schemaVersion` versiona o formato opaco associado ao namespace e deve ser positivo.
12. Arquivar um ator não remove nem altera implicitamente seus efeitos.
13. Excluir definitivamente o ator exclui suas instâncias de efeito por cascade.
14. A Campaign do efeito é a mesma Campaign do ator; nenhum efeito possui identidade global reutilizável entre Campaigns.
15. Esta entidade representa somente instâncias atualmente ativas. Retenção histórica após remoção não faz parte desta feature.

## Fluxo principal

1. Um `CampaignActor` já existe dentro de uma Campaign.
2. Uma camada posterior cria uma ou mais instâncias de efeito vinculadas ao ator.
3. As instâncias persistem independentemente da existência de ficha ou Token.
4. Camadas posteriores consultam essas instâncias para apresentação ou integração com Game Systems.
5. Quando o ator é arquivado, as instâncias permanecem anexadas ao ator.
6. Quando o ator é excluído definitivamente, suas instâncias são removidas por cascade.

## Estados e erros relevantes

- `ator inexistente`: não é possível persistir efeito órfão;
- `ator arquivado`: efeitos existentes permanecem persistidos; criação/mutação em ator arquivado será decidida no card de API;
- `namespace/definitionKey desconhecido`: a persistência genérica não valida semântica de Game System;
- `schemaVersion inválido`: valor menor que 1 é inválido;
- `polaridade inválida`: somente os três valores genéricos são aceitos.

## Contratos

### Persistência estrutural

Modelo conceitual esperado:

```ts
type CampaignActorEffect = {
  id: string
  actorId: string
  namespace: string
  definitionKey: string | null
  name: string
  description: string | null
  iconUrl: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  category: string | null
  displayValue: string | null
  schemaVersion: number
  payload: unknown | null
  origin: unknown | null
  createdAt: Date
  updatedAt: Date
}
```

Observações:

- o nome do modelo/campos físicos pode ser ajustado pelo Architect/Developer sem alterar a semântica acima;
- não deve existir constraint de unicidade por definição, nome ou categoria;
- a relação com `CampaignActor` deve usar exclusão por cascade;
- isolamento por Campaign pode ser derivado de `actorId`, pois o efeito não referencia outro recurso de Campaign neste card;
- índices devem priorizar consulta por ator e, quando útil, por namespace/definition key sem criar semântica de ruleset.

### HTTP / realtime

Nenhum contrato HTTP ou realtime é criado neste card.

### Integração VTT/Game System

O Core conhece apenas a instância genérica e os campos de apresentação/identificação opaca. Conditions concretas, regras, duração, stacking e significado de `payload`/`origin` pertencem ao Game System responsável pelo namespace.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0002`, `ADR-0003`, `ADR-0005`
- [ ] Exige novo ADR

Architecture Review: **APPROVED**. Os ADRs existentes cobrem ownership no `CampaignActor`, isolamento por Campaign e a fronteira VTT/Game System; nenhum novo ADR é necessário para `QH-EFF-001`.

A feature adiciona persistência estrutural subordinada a `CampaignActor`. Ela não altera a separação Member/Actor, não torna Token ou Sheet donos do estado e não introduz semântica de Pathfinder no Core.

## Segurança / isolamento

- o efeito nunca existe fora de um `CampaignActor` válido;
- a Campaign é herdada pela relação com o ator;
- operações futuras que combinem `campaignId` e `actorId` deverão validar a pertença no backend;
- este card não cria autorização de escrita nem endpoint público.

## Realtime

Não aplicável neste card, pois nenhuma operação HTTP/realtime é introduzida. O card que criar mutações deverá avaliar invalidação/eventos para estado compartilhado da mesa.

## Critérios de aceite

### AC-01 — Efeito pertence ao Actor

Dado um `CampaignActor`, quando uma instância de efeito é persistida, então ela referencia exatamente esse ator e não pode existir órfã.

### AC-02 — Múltiplos efeitos simultâneos

Dado um ator existente, quando várias instâncias são persistidas, então todas coexistem sem limite ou deduplicação baseada em definição/nome.

### AC-03 — Duplicidade permitida pelo Core

Dado um ator com um efeito de determinado `namespace` e `definitionKey`, quando uma segunda instância com os mesmos identificadores é persistida, então o banco não a rejeita por regra de unicidade mecânica.

### AC-04 — Independência de ficha e Token

Dado um ator sem ficha e sem Token, quando um efeito é persistido, então a operação estrutural continua válida.

### AC-05 — Polaridade genérica

Dado um efeito, quando sua polaridade é persistida, então somente `BENEFICIAL`, `HARMFUL` ou `NEUTRAL` são valores estruturados pelo Core.

### AC-06 — Dados de Game System permanecem opacos

Dado um efeito com `payload`, `origin`, `category`, `namespace` e `definitionKey`, quando ele é persistido, então o Core não interpreta esses valores como regra mecânica.

### AC-07 — Arquivamento preserva estado

Dado um ator com efeitos ativos, quando `archivedAt` é definido no ator, então seus efeitos não são removidos nem alterados implicitamente.

### AC-08 — Exclusão definitiva remove efeitos

Dado um ator com efeitos ativos, quando o ator é excluído definitivamente, então suas instâncias de efeito são excluídas por cascade.

### AC-09 — Isolamento de Campaign

Dado um efeito vinculado a um ator, então seu mundo é necessariamente a Campaign desse ator e ele não pode ser reutilizado como estado mutável global entre Campaigns.

### AC-10 — Sem automação mecânica

Dado qualquer efeito persistido, então nenhuma coluna, trigger ou lógica desta feature altera atributos, HP, CA, saves, rolagens ou qualquer regra de Game System.

## Testes esperados

- invariante de banco para vínculo obrigatório com `CampaignActor`;
- persistência de múltiplos efeitos no mesmo ator;
- persistência de duas instâncias com o mesmo `namespace`/`definitionKey`;
- persistência em ator sem ficha e sem Token;
- validação estrutural da polaridade;
- validação de `schemaVersion >= 1` no contrato aplicável;
- preservação das instâncias ao arquivar ator;
- cascade ao excluir definitivamente o ator;
- `npm run check:architecture` após implementação.

## Dependências

- `CampaignActor` existente;
- `ADR-0002` — Campaign como fronteira dos dados;
- `ADR-0003` — separação Member/Actor;
- `ADR-0005` — fronteira VTT/Game System.

## Decisões relacionadas

- `ADR-0002` — efeitos permanecem dentro da Campaign;
- `ADR-0003` — estado pertence à entidade do mundo e não ao membership;
- `ADR-0005` — Core pode persistir/transportar dados genéricos/opacos sem interpretar regras concretas.

## Questões abertas

Nenhuma questão de produto bloqueante para `QH-EFF-001`.
