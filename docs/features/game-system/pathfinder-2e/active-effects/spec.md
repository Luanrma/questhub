# Feature Spec — Aplicar e remover efeitos PF2e em alvos

Status: **READY**

Card: `QH-EFF-009` — `https://trello.com/c/Py27ORM3/14-qh-eff-009-aplicar-e-remover-efeitos-pf2e-em-alvos`  
Domínio: `Game System / Pathfinder 2e / Active Effects`

## Objetivo

Permitir que o Game System Pathfinder 2e transforme uma definição semântica conhecida em uma instância ativa de `CampaignActorEffect`, sempre por ação explícita e sem executar consequências mecânicas.

O Core permanece responsável por ownership, persistência, autorização estrutural e realtime. O PF2e resolve somente a semântica e entrega um contrato neutro à camada de composição.

## Problema

`QH-EFF-002` criou o ciclo de vida genérico de Active Effects e `QH-EFF-005`–`008` construíram o catálogo e os mapeamentos semânticos PF2e. Ainda falta a ponte controlada que permita aplicar uma dessas definições a um ator real da Campaign sem fazer o VTT conhecer regras de Pathfinder e sem transformar uma referência potencial em automação de regra.

## Escopo

- aplicação manual explícita de uma definição PF2e conhecida;
- aplicação explícita a partir de ocorrência potencial de Spell, Item, Creature ou Hazard;
- escolha de valor para Conditions valorizadas;
- persistência de origem semântica da aplicação;
- coexistência de múltiplas instâncias, sem deduplicação automática;
- atualização realtime pela infraestrutura genérica de Active Effects;
- integração do compositor PF2e à seção de efeitos da ficha;
- remoção pelo ciclo de vida genérico já existente.

## Fora de escopo

- resolver ataque, save ou Degree of Success;
- calcular ou aplicar dano;
- alterar HP, CA, atributos, perícias, saves, iniciativa ou ações;
- stacking, substituição ou deduplicação de efeitos;
- duração automática, expiração por rodada ou combate;
- integração automática de todas as telas de Spell/Item/Bestiary com botão de aplicação; este card entrega o contrato reutilizável para esses fluxos.

## Personas / permissões

- `MASTER`: pode aplicar e remover efeitos em qualquer `CampaignActor` ativo da própria Campaign;
- `PLAYER`: pode visualizar conforme as permissões genéricas existentes, mas não aplica/remove por este fluxo;
- ator arquivado: não recebe nova instância.

## Regras

1. Toda aplicação exige uma ação explícita.
2. A definição deve existir no catálogo semântico PF2e.
3. Origens `SPELL`, `ITEM`, `CREATURE` e `HAZARD` só podem usar ocorrências marcadas como `potential` pelos mapeadores anteriores.
4. `CREATURE` e `HAZARD` precisam corresponder ao `entryType` do Bestiário; o cliente não pode forjar o tipo.
5. Para Condition valorizada, valor explícito do Mestre vence; sem override usa-se `valueHint`; sem hint usa-se `baseValue` canônico.
6. Valores devem ser inteiros maiores que zero.
7. Definição não valorizada rejeita valor numérico explícito.
8. Aplicações repetidas não são deduplicadas.
9. O efeito persistido registra apenas estado visual/semântico e metadados de origem.
10. O Core não interpreta `payload` nem `origin` PF2e.

## Fluxo principal

1. Mestre abre uma ficha PF2e completa.
2. Clica em **Aplicar efeito PF2e**.
3. Busca e seleciona uma definição.
4. Informa valor quando necessário.
5. Confirma a aplicação.
6. A engine PF2e resolve a definição.
7. A camada de composição entrega o contrato resolvido ao serviço genérico `CampaignActorEffect`.
8. O Core persiste a instância e publica `vtt:actor-effects:changed`.
9. A UI refaz a leitura e exibe o efeito no painel genérico.
10. A remoção usa o comando **Remover** e o DELETE genérico existente.

## Estados e erros relevantes

- definição inexistente: `404`;
- origem/ocorrência inexistente: `404`;
- ocorrência sem evidência potencial: `409`;
- Creature/Hazard incompatível com o conteúdo: `409`;
- valor inválido: `400`;
- usuário não Mestre: `403`;
- ator inexistente, arquivado ou de outra Campaign: `404`;
- Game System não suportado pelo compositor: `409`.

## Contratos

### Fronteira de composição

```text
PF2e engine
  -> resolve definição / candidato
  -> apps/api/src/composition/**
  -> serviço genérico CampaignActorEffect
  -> persistência Core
```

A engine em `apps/api/src/game_systems/**` não importa `apps/api/src/modules/**`. Módulos do Core também não importam implementação concreta de Game System.

### Namespace

```text
questhub:pathfinder-2e:active-effects:v1
```

### Origens

- `MANUAL`: `definitionKey` explícita;
- `SPELL`: `contentId` + `occurrenceIndex`;
- `ITEM`: `contentId` + `occurrenceIndex`;
- `CREATURE`: `contentId` + `occurrenceIndex`;
- `HAZARD`: `contentId` + `occurrenceIndex`.

Creature/Hazard preservam também o `structuralOrigin` produzido por `QH-EFF-008`.

### GET `/api/campaigns/:campaignId/game-system-effects/definitions`

Lista definições para seleção explícita. Query opcional `q` e `limit` de 1–100.

### GET `/api/campaigns/:campaignId/game-system-effects/candidates`

Lista somente candidatos potenciais conhecidos para `sourceType=SPELL|ITEM|CREATURE|HAZARD` e `contentId`.

Esse endpoint não aplica nada.

### POST `/api/campaigns/:campaignId/actors/:actorId/game-system-effects`

Aplicação manual:

```json
{
  "source": {
    "type": "MANUAL",
    "definitionKey": "conditionitems:TBSHQspnbcqxsmjL"
  },
  "value": 2
}
```

Aplicação oriunda de Spell:

```json
{
  "source": {
    "type": "SPELL",
    "contentId": "pf2e:spell:spells-srd:agonizing-despair",
    "occurrenceIndex": 1
  }
}
```

O contrato persistido contém `namespace`, `definitionKey`, apresentação, `payload` semântico e `origin` opaco. Não contém mutações mecânicas.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa ADR existente: `ADR-0002`, `ADR-0003`, `ADR-0005`
- [ ] Exige novo ADR

A camada `apps/api/src/composition/game-system-active-effects` é o composition root reservado por `QH-EFF-002` para integrar engine concreta e Core sem import invertido. Nenhum novo ownership, tabela ou bounded context é criado.

## Segurança / isolamento

- autenticação obrigatória em todos os endpoints;
- leitura de catálogo/candidatos exige membro ativo da Campaign;
- aplicação exige membro ativo `MASTER`;
- `actorId` é resolvido junto com `campaignId` e `archivedAt: null`;
- nenhum ID de ator de outra Campaign é aceito;
- o servidor resolve novamente a definição/origem; o cliente não envia um `CampaignActorEffect` pronto para persistência.

## Realtime

Aplicação bem-sucedida publica:

```text
vtt:actor-effects:changed
{ campaignId, actorId }
```

O evento apenas invalida o estado local. A UI refaz o GET autenticado; não usa o payload do socket como fonte de verdade e não introduz polling.

## Critérios de aceite

### AC-01 — Aplicação explícita
Dado um Mestre autorizado, quando ele confirma uma definição PF2e, então uma instância é criada somente após essa confirmação.

### AC-02 — Autorização
Dado um Player, quando tenta aplicar um efeito PF2e, então recebe `403` e nenhuma instância é criada.

### AC-03 — Campaign scope
Dado um ator fora da Campaign ou arquivado, quando a aplicação é solicitada, então o alvo não é alterado.

### AC-04 — Definição canônica
Dada uma aplicação manual, quando `definitionKey` não existe em `QH-EFF-005`, então a aplicação é rejeitada.

### AC-05 — Spell potencial
Dada uma ocorrência de Spell não potencial, quando ela é usada como origem, então a aplicação é rejeitada.

### AC-06 — Item potencial
Dado um Item, quando uma ocorrência potencial de `QH-EFF-007` é selecionada, então a definição correspondente pode ser aplicada.

### AC-07 — Bestiário tipado
Dado um Hazard, quando o cliente o declara como Creature, então a aplicação é rejeitada.

### AC-08 — Condition valorizada
Dada uma Condition valorizada, quando o Mestre informa valor positivo, então esse valor é persistido como apresentação/semântica da instância.

### AC-09 — Hints preservados
Dada uma ocorrência com `valueHint`, quando não há override, então o hint conhecido é usado.

### AC-10 — Valor não inventado
Dada uma definição não valorizada, quando recebe valor explícito, então a aplicação é rejeitada.

### AC-11 — Origem preservada
Dada uma origem Spell, Item, Creature ou Hazard, quando aplicada, então `origin` preserva `contentId` e `occurrenceIndex`; Bestiary preserva também origem estrutural quando disponível.

### AC-12 — Duplicidade permitida
Dada a mesma definição, quando aplicada duas vezes, então o sistema não força deduplicação ou stacking.

### AC-13 — Realtime
Dada uma aplicação persistida, quando ela conclui, então `vtt:actor-effects:changed` é publicado para a Campaign.

### AC-14 — Remoção genérica
Dado um efeito PF2e ativo, quando o Mestre usa **Remover**, então o DELETE genérico de Active Effects remove a instância.

### AC-15 — Zero automação mecânica
Dada qualquer aplicação/remoção desta feature, quando ela conclui, então HP, CA, atributos, saves, rolagens, ações e Tokens permanecem mecanicamente inalterados.

### AC-16 — UI composta
Dada uma ficha PF2e completa, quando aberta por Mestre, então o compositor PF2e aparece junto ao painel genérico; para Player ele não aparece.

### AC-17 — VTT agnóstico
Dado o código genérico de Active Effects, quando inspecionado, então ele continua sem semântica concreta de Pathfinder.

### AC-18 — Fronteira de dependência
Dado o guard arquitetural, quando executado, então a engine PF2e não importa módulos Core e módulos Core não importam a engine PF2e.

## Testes esperados

- resolvedor manual de Condition com base e override;
- rejeição de valor em definição não valorizada;
- Spell potencial preservando outcome/value hint;
- Spell não potencial rejeitada;
- Item potencial aplicável;
- Hazard preservando origem estrutural;
- tentativa Hazard → Creature rejeitada;
- busca determinística/limitada de definições;
- contrato sem campos mecânicos;
- rota de composição carregável na suíte TypeScript;
- compositor PF2e registrado apenas no shell de Game System;
- `npm run check:architecture`;
- `npm run test:unit`;
- `npm run build:web`.

## Dependências

- `QH-EFF-002`
- `QH-EFF-003`
- `QH-EFF-005`
- `QH-EFF-006`
- `QH-EFF-007`
- `QH-EFF-008`

Bloqueia `QH-EFF-010`.

## Decisões relacionadas

- `ADR-0002` — Game System separado do VTT/Core;
- `ADR-0003` — persistência estrutural e fronteiras de domínio;
- `ADR-0005` — integração/automação sem vazamento de regra concreta;
- contrato de `QH-EFF-002` — composition root é responsável por persistir dados resolvidos pela engine.

## Questões abertas

Nenhuma questão aberta bloqueia `READY`.
