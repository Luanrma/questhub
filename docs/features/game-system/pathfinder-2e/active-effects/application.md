# QH-EFF-009 — Aplicar e remover efeitos PF2e em alvos

Status: **DEVELOPMENT**

Card: `https://trello.com/c/Py27ORM3/14-qh-eff-009-aplicar-e-remover-efeitos-pf2e-em-alvos`

Dependências: `QH-EFF-002`, `QH-EFF-003`, `QH-EFF-005`, `QH-EFF-006`, `QH-EFF-007`, `QH-EFF-008`.

## Objetivo

Permitir que o Game System Pathfinder 2e transforme uma definição semântica conhecida em uma instância ativa de `CampaignActorEffect`, sempre por ação explícita e sem executar consequências mecânicas.

O Core continua responsável por ownership, persistência, autorização estrutural e realtime. O PF2e resolve somente a semântica da definição e entrega um contrato neutro à camada de composição.

## Fronteira arquitetural

```text
PF2e engine
  -> resolve definição / candidato
  -> Composition Root
  -> serviço genérico CampaignActorEffect
  -> persistência Core
```

Regras obrigatórias:

- `apps/api/src/game_systems/**` não importa `apps/api/src/modules/**`;
- `apps/api/src/modules/**` não importa implementação concreta de Game System;
- a integração que conhece ambos vive em `apps/api/src/composition/**`;
- nenhum módulo do VTT interpreta Condition, Spell, Item, Creature ou Hazard;
- a Campaign permanece a fronteira do mundo.

## Namespace

Instâncias PF2e criadas por esta feature usam:

```text
questhub:pathfinder-2e:active-effects:v1
```

`definitionKey` permanece a identidade semântica produzida por `QH-EFF-005`.

## Origens suportadas

Uma aplicação PF2e registra uma das origens abaixo:

- `MANUAL`: Mestre escolhe explicitamente uma definição do catálogo PF2e;
- `SPELL`: definição vem de um mapeamento potencial de `QH-EFF-006`;
- `ITEM`: definição vem de um mapeamento potencial de `QH-EFF-007`;
- `CREATURE`: definição vem de um mapeamento potencial de criatura de `QH-EFF-008`;
- `HAZARD`: definição vem de um mapeamento potencial de hazard de `QH-EFF-008`.

Para origens de conteúdo, `contentId` e `occurrenceIndex` identificam a ocorrência semântica exata. Referências classificadas como não potenciais não podem ser promovidas no momento da aplicação.

Creature/Hazard também preservam o `structuralOrigin` produzido pelo mapeador do Bestiário, incluindo ação, ataque, rotina ou entidade quando disponível.

## Valor de Conditions

Para Conditions valorizadas:

1. um valor explícito informado pelo Mestre vence;
2. sem valor explícito, usa-se `valueHint` estrutural da ocorrência, quando houver;
3. caso contrário, usa-se o `baseValue` canônico da definição.

Valores devem ser inteiros maiores que zero.

Definições não valorizadas rejeitam um valor numérico explícito. O sistema não infere limites ou regras adicionais além do contrato semântico já conhecido.

## Sem automação mecânica

Aplicar um efeito cria exclusivamente estado visual/semântico em `CampaignActorEffect`.

Não altera:

- HP;
- CA;
- atributos;
- perícias;
- saves;
- iniciativa;
- rolagens;
- ações;
- posição ou estado de Token;
- qualquer outro dado mecânico da ficha.

O sistema também não executa ataque, save, Degree of Success ou resolução de dano. `outcome`, `evidence` e `stage` são apenas metadados de origem quando já conhecidos pelos mapeadores anteriores.

## Duplicidade e stacking

Não existe deduplicação ou stacking automático nesta entrega.

Aplicar duas vezes a mesma definição cria duas instâncias distintas. A decisão sobre coexistência, substituição ou stacking fica para uma feature posterior.

## Permissões

- Mestre ativo: pode aplicar efeitos PF2e em qualquer `CampaignActor` ativo da própria Campaign;
- Player: não pode aplicar por esta API;
- ator arquivado: não recebe nova instância;
- IDs de outra Campaign nunca atravessam a fronteira.

A remoção usa o endpoint genérico já existente de `QH-EFF-002` e continua restrita ao Mestre.

## API de composição

### GET `/api/campaigns/:campaignId/game-system-effects/definitions`

Lista definições do Game System para seleção explícita.

Query:

- `q`: busca opcional por nome, slug ou `definitionKey`;
- `limit`: 1–100, padrão 50.

### GET `/api/campaigns/:campaignId/game-system-effects/candidates`

Expõe somente ocorrências potenciais conhecidas dos mapeadores anteriores.

Query:

- `sourceType`: `SPELL | ITEM | CREATURE | HAZARD`;
- `contentId`: identidade do conteúdo no catálogo.

O endpoint não aplica nada por conta própria.

### POST `/api/campaigns/:campaignId/actors/:actorId/game-system-effects`

Mestre aplica explicitamente uma definição resolvida.

Exemplo manual:

```json
{
  "source": {
    "type": "MANUAL",
    "definitionKey": "conditionitems:TBSHQspnbcqxsmjL"
  },
  "value": 2
}
```

Exemplo vindo de Spell:

```json
{
  "source": {
    "type": "SPELL",
    "contentId": "pf2e:spell:spells-srd:agonizing-despair",
    "occurrenceIndex": 1
  }
}
```

Após persistência bem-sucedida, a composição publica o mesmo evento genérico do Core:

```text
vtt:actor-effects:changed
{ campaignId, actorId }
```

A UI refaz a leitura autenticada e não usa o payload do socket como fonte de verdade.

## Integração visual

A ficha continua usando o painel genérico de Active Effects do VTT. O registro do renderer PF2e adiciona um compositor específico do Game System ao lado desse painel somente para o Mestre.

Fluxo manual inicial:

1. Mestre abre a ficha completa;
2. clica em **Aplicar efeito PF2e**;
3. busca e seleciona uma definição;
4. informa valor quando a Condition é valorizada;
5. confirma a aplicação;
6. o efeito aparece na lista genérica de efeitos ativos via realtime;
7. remoção continua pelo comando **Remover** do painel genérico.

## Critérios de aceite

### AC-01 — Aplicação explícita
Nenhuma definição é persistida sem uma ação explícita de aplicação.

### AC-02 — Mestre autorizado
Somente Mestre ativo pode aplicar um efeito PF2e.

### AC-03 — Campaign scope
O alvo precisa ser um `CampaignActor` ativo da mesma Campaign.

### AC-04 — Definição canônica
A aplicação manual só aceita `definitionKey` existente em `QH-EFF-005`.

### AC-05 — Spell potencial
Origem `SPELL` só aplica ocorrência classificada como potencial por `QH-EFF-006`.

### AC-06 — Item potencial
Origem `ITEM` só aplica ocorrência classificada como potencial por `QH-EFF-007`.

### AC-07 — Bestiário potencial
Origem `CREATURE`/`HAZARD` só aplica ocorrência potencial de `QH-EFF-008` e valida o `entryType`.

### AC-08 — Valor explícito
Mestre pode escolher valor positivo para Condition valorizada.

### AC-09 — Hint preservado
Sem override, `valueHint` da ocorrência é preservado quando existir.

### AC-10 — Base canônica
Sem override ou hint, Condition valorizada usa `baseValue` da definição.

### AC-11 — Valor não inventado
Definição não valorizada rejeita valor explícito.

### AC-12 — Origem persistida
A instância registra Game System e origem concreta sem o Core interpretar esses dados.

### AC-13 — Duplicidade permitida
Aplicações repetidas continuam capazes de gerar instâncias distintas.

### AC-14 — Realtime genérico
Aplicação bem-sucedida publica `vtt:actor-effects:changed`.

### AC-15 — Remoção genérica
Efeito PF2e pode ser removido pelo ciclo de vida genérico já existente.

### AC-16 — Zero automação mecânica
Aplicar/remover não altera qualquer recurso mecânico do personagem ou Token.

### AC-17 — UI composta
Somente campanhas PF2e registram o compositor PF2e; o painel genérico permanece sem semântica de sistema concreto.

### AC-18 — Fronteira de dependência
A engine PF2e não importa módulos do VTT e o Core não importa a engine PF2e.

## Testes esperados

- Condition valorizada manual com base e override;
- rejeição de valor em definição não valorizada;
- Spell potencial com outcome/value hint preservados;
- Spell não potencial rejeitada;
- Item potencial aplicável;
- Hazard preserva origem estrutural;
- tentativa de usar Hazard como Creature rejeitada;
- busca de definições determinística e limitada;
- ausência de campos mecânicos no contrato produzido;
- `npm run check:architecture`;
- `npm run test:unit`;
- `npm run build:web`.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADRs existentes: `ADR-0002`, `ADR-0003`, `ADR-0005`
- [ ] Exige novo ADR

A composição segue a direção explicitamente reservada por `QH-EFF-002` para o `QH-EFF-009`; nenhum novo ownership, schema ou bounded context é introduzido.
