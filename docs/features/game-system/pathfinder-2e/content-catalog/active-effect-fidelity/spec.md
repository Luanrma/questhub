# Feature Spec — Fidelidade canônica do catálogo PF2e de Active Effects

Status: **READY**

Card: `QH-EFF-012` — `https://trello.com/c/qocF0dZD/18-qh-eff-012-restaurar-fidelidade-can%C3%B4nica-do-cat%C3%A1logo-pf2e-de-active-effects`

Domínio: `Game System / Pathfinder 2e / Content Catalog / Active Effects`

Dependência: `QH-EFF-005`  
Bloqueia: `QH-EFF-013`

## 1. Objetivo

Restaurar a fidelidade das definições PF2e de `condition`, `effect` e `affliction` já incluídas pelo catálogo semântico do QuestHub, eliminando perda silenciosa de descrição, ícone, publicação, grupo e classificação editorial de polaridade.

Esta entrega corrige a **definição canônica**. Ela não cria novo mecanismo de aplicação, não amplia automaticamente a cobertura de Effects/Afflictions e não executa Rule Elements ou consequências mecânicas.

## 2. Divergência confirmada

`QH-EFF-005` exige que cada definição publicada disponibilize nome, descrição, ícone/fallback e polaridade, além dos metadados estruturais aplicáveis.

A implementação atual diverge dessa intenção:

- Conditions são sintetizadas com `description: null`, `iconUrl: null` e `group: null` mesmo quando a fonte travada contém esses dados;
- Effects não-Condition recebem `NEUTRAL` como fallback pelo simples fato de serem `effect`;
- Afflictions recebem `HARMFUL` pelo simples fato de serem `affliction`;
- testes atuais protegem parte desse comportamento degradado em vez de detectar a perda de fidelidade.

Exemplo verificável na fonte PF2e travada: `Frightened` (`conditionitems:TBSHQspnbcqxsmjL`) contém descrição, imagem, publicação, slug e `system.value` no documento canônico.

## 3. Fonte e reprodutibilidade

A fonte permanece exatamente a definida em `QH-EFF-005`:

```text
repository: foundryvtt/pf2e
commit: 01114da5851f31404078d8020809b13e4000bc4b
```

Não haverá download do PF2e em runtime.

Os metadados utilizados pelo runtime devem permanecer versionados no QuestHub e ser reproduzíveis a partir da fonte travada. Ferramentas de geração/importação podem exigir checkout local da fonte durante desenvolvimento, mas o produto em execução não depende desse checkout.

## 4. Cobertura

### 4.1 Conditions

Preservar as 43 definições reais do pack canônico:

```text
logical pack: conditionitems
physical path: packs/pf2e/conditions
```

Não inventar Conditions a partir de slugs conhecidos pelo runtime quando não houver documento canônico no pack.

### 4.2 Effects e Afflictions

Manter o recorte aprovado em `QH-EFF-005`: somente definições efetivamente referenciadas pelo catálogo QuestHub e estruturalmente resolvidas pelo índice semântico atual.

Este card **não** transforma todos os packs de Effects/Afflictions do PF2e em conteúdo publicado.

## 5. Contrato da definição

Toda definição publicada deve possuir informação de apresentação suficiente para consulta confiável:

```ts
type Pathfinder2eActiveEffectDefinition = {
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  source: {
    sourcePack: string
    sourceId: string
    slug?: string
    publicationTitle?: string
  }
  name: string
  description: string
  iconUrl: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  group: string | null
  conditionValue: {
    isValued: boolean
    baseValue: number | null
  } | null
  schemaVersion: 1
}
```

### 5.1 Descrição

- se o documento canônico publicado possui descrição, ela não pode ser descartada;
- `description` não usa `null` como representação normal de definição publicada;
- nenhuma descrição é inventada a partir do nome, label ou texto de outro conteúdo;
- sanitização/normalização de markup deve preservar o conteúdo editorial, sem executar links ou Rule Elements.

### 5.2 Ícone

- preservar o caminho canônico da fonte como metadado de origem somente quando houver política segura de resolução para asset local;
- o runtime não deve depender de URL externa do Foundry;
- ausência de asset local continua usando fallback visual do QuestHub sem apagar a identidade do ícone original necessária para geração/reconciliação.

### 5.3 Publicação e grupo

Quando a fonte possuir `system.publication.title` ou grupo semântico estrutural, esses dados devem ser preservados no catálogo engine-only conforme o contrato aplicável.

## 6. Polaridade

A polaridade continua sendo metadata editorial do QuestHub; não existe equivalente estrutural universal no PF2e.

Portanto:

- Conditions mantêm o manifesto explícito aprovado em `QH-EFF-005`;
- Effects/Afflictions incluídos precisam de classificação explícita e versionada por `definitionKey` ou identidade estrutural equivalente;
- `kind === 'effect'` **não** implica `NEUTRAL`;
- `kind === 'affliction'` **não** implica `HARMFUL` sem classificação explícita;
- `NEUTRAL` continua válido quando for a decisão editorial aprovada para aquela definição, mas nunca como fallback silencioso;
- definição incluída sem classificação explícita deve falhar deterministicamente durante teste/geração.

A classificação não executa regra e não deve ser inferida em runtime por IA, descrição, nome, Rule Elements ou sinal numérico.

## 7. Localização

A fonte mecânica permanece `en-US`.

Quando houver overlay `pt-BR` versionado e confiável para a definição, a camada PF2e pode resolvê-lo para apresentação. A ausência de tradução deve fazer fallback para o original, nunca produzir descrição vazia.

Este card não exige tradução editorial completa de todo o catálogo como pré-condição para restaurar o original canônico.

## 8. Relação com CampaignActorEffect

`CampaignActorEffect` não muda de ownership nem de responsabilidade.

Este card corrige somente o catálogo que alimenta a resolução PF2e. A aplicação continua podendo copiar apresentação e metadados resolvidos para a instância ativa conforme o contrato existente.

Revisões de API de consulta e apresentação ponta a ponta pertencem respectivamente a `QH-EFF-013` e `QH-EFF-014`.

## 9. Fora de escopo

- ampliar indiscriminadamente todos os packs de Effects/Afflictions;
- aplicar automaticamente Effects ao lançar Spells;
- Degree of Success automático;
- stacking, substituição ou deduplicação;
- duração e expiração;
- dano, cura, HP ou modificadores;
- execução de Rule Elements;
- mudança de ownership de `CampaignActorEffect`;
- semântica PF2e no VTT Core;
- criação do menu Compêndio.

## 10. Arquitetura

A implementação permanece em `apps/api/src/game_systems/pathfinder_2e/**` e tooling associado.

O Composition Root e o Core não passam a interpretar Conditions, Effects ou Afflictions.

ADRs aplicáveis:

- `ADR-0002` — isolamento por Campaign quando a definição vier a ser aplicada;
- `ADR-0003` — Effect ativo pertence ao Actor, não ao Member;
- `ADR-0005` — semântica concreta permanece na engine PF2e.

**Architecture Review:** não é necessário novo ADR. O card corrige dados dentro do bounded context já definido e não altera ownership, contrato estrutural entre domínios ou fronteira VTT/Game System.

## 11. Critérios de aceite

- **AC01 — Fonte travada:** geração/manifesto continua rastreável ao commit `01114da5851f31404078d8020809b13e4000bc4b`.
- **AC02 — Conditions completas:** as 43 Conditions canônicas continuam resolvidas deterministicamente.
- **AC03 — Descrição preservada:** toda definição publicada com descrição no documento canônico retorna descrição não vazia.
- **AC04 — Frightened:** `Frightened` preserva descrição canônica, `HARMFUL`, `isValued = true` e valor-base 1.
- **AC05 — Metadados:** slug/publicação/grupo/ícone de origem disponíveis na fonte não são descartados silenciosamente pelo pipeline de definição.
- **AC06 — Sem fallback de polaridade por kind:** nenhuma definição `effect` ou `affliction` recebe polaridade apenas por seu `kind`.
- **AC07 — Classificação total:** toda definição publicada possui polaridade explicitamente versionada e validada.
- **AC08 — Neutral explícito:** uma definição classificada `NEUTRAL` permanece válida quando houver entrada explícita no manifesto.
- **AC09 — Identidade estável:** `definitionKey = {sourcePack}:{sourceId}` permanece inalterada.
- **AC10 — Cobertura não ampliada acidentalmente:** Effects/Afflictions continuam limitados ao recorte de `QH-EFF-005`.
- **AC11 — Sem regra executada:** nenhum Rule Element, modificador, dano, duração ou stacking é executado.
- **AC12 — VTT agnóstico:** Core e frontend genérico continuam sem imports/vocabulário concreto de PF2e.
- **AC13 — Regressão protegida:** testes falham se descrição voltar a ser descartada ou se fallback blanket de polaridade for reintroduzido.
- **AC14 — Qualidade:** `npm run check:architecture` e `npm run test:unit` passam.

## 12. Testes esperados

- cobertura das 43 Conditions;
- `Frightened` com descrição canônica, valor e polaridade;
- pelo menos uma Condition relacional `NEUTRAL` preservada;
- pelo menos uma Condition `BENEFICIAL` preservada;
- Effects/Afflictions sem classificação explícita causam falha determinística;
- representante `effect` resolve descrição/metadados da fonte;
- representante `affliction` resolve descrição/metadados da fonte;
- identidade por sourcePack/sourceId continua estável;
- ausência de tradução usa original, não string vazia;
- nenhuma dependência runtime com checkout/URL externa do PF2e;
- architecture guard.

## 13. Questões não bloqueantes

A cobertura futura de um Compêndio completo de Effects e a estratégia final de tradução/revisão editorial permanecem fora deste card e devem ser tratadas separadamente.
