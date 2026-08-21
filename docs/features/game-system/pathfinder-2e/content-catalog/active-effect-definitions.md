# Feature Spec — Catálogo PF2e de Conditions, Effects e Afflictions

Status: **BA READY**

Card: `QH-EFF-005` — https://trello.com/c/gwdxe0WW/10-qh-eff-005-criar-cat%C3%A1logo-pf2e-de-conditions-e-effects

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: `QH-EFF-001`, `QH-EFF-004`.

Bloqueia: `QH-EFF-006`, `QH-EFF-007`, `QH-EFF-008` e fornece definições para `QH-EFF-009`.

## 1. Objetivo

Criar um catálogo semântico versionado, pertencente exclusivamente ao Game System Pathfinder 2e, capaz de resolver uma definição PF2e de `condition`, `effect` ou `affliction` por identidade estrutural estável e fornecer os metadados necessários para apresentação e aplicação futura em `CampaignActorEffect` sem transferir semântica PF2e para o VTT Core.

O catálogo não aplica efeitos e não executa Rule Elements nesta entrega.

## 2. Fonte travada

O catálogo é derivado do mesmo source PF2e utilizado pelo QH-EFF-004:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

Não existe download ou consulta ao Foundry/PF2e em runtime. As definições necessárias são versionadas no QuestHub e devem ser reproduzíveis a partir desse commit.

## 3. Cobertura aprovada

### 3.1. Conditions

Incluir **todas as definições existentes no pack canônico de Conditions** do source travado:

```text
logical pack: conditionitems
physical path: packs/pf2e/conditions
```

A cobertura é determinada pelos documentos reais do pack, não por toda string aceita internamente pelo código do Foundry.

Consequência importante: `CONDITION_SLUGS` contém `malevolence`, mas `malevolence` não é uma definição do pack canônico `conditions`; ela pertence a conteúdo específico de campanha e não entra no catálogo-base apenas por existir como slug reconhecido pelo runtime.

Da mesma forma, estados técnicos sem documento de Condition no pack não devem ser inventados como definições.

### 3.2. Effects e Afflictions

Incluir somente definições `effect` e `affliction` que sejam **efetivamente referenciadas pelo catálogo QuestHub atual** e tenham sido resolvidas estruturalmente pelo QH-EFF-004.

Não importar em massa `spell-effects`, `equipment-effects`, `feat-effects`, `bestiary-effects`, `campaign-effects`, `other-effects` ou outros packs apenas porque existem no source.

Uma referência PF2e `Item` preservada pelo QH-EFF-004 com `target.type` ausente **não entra** no catálogo como definição confirmada. Ela permanece não resolvida até investigação posterior.

## 4. Identidade da definição

A definição não é identificada pelo nome traduzido, label da referência ou slug aproximado.

A identidade canônica segue o contrato já vigente do catálogo PF2e:

```text
{sourcePack}:{sourceId}
```

Esse valor é a `definitionKey` estável dentro do namespace PF2e.

Exemplos conceituais:

```text
conditionitems:TBSHQspnbcqxsmjL
spell-effects:mvMWmP3m9Xawbwpx
equipment-effects:<sourceId>
```

`sourcePack` e `sourceId` devem permanecer disponíveis separadamente para rastreabilidade.

## 5. Contrato semântico mínimo

Cada definição precisa expor semanticamente, independentemente da forma física escolhida pelo Developer/Architect:

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
  iconUrl?: string | null
  polarity: 'BENEFICIAL' | 'HARMFUL' | 'NEUTRAL'
  group?: string | null
  conditionValue?: {
    isValued: boolean
    baseValue: number | null
  } | null
  schemaVersion: 1
}
```

Regras:

- `kind` é a categoria semântica primária da definição;
- `group`, quando existir no source, é preservado sem reinterpretá-lo no Core;
- `conditionValue` existe somente para `condition` e deriva diretamente de `system.value`;
- `iconUrl` deve apontar para asset local do QuestHub quando houver correspondência segura; caso contrário é omitido e a UI usa fallback genérico;
- dados mecânicos adicionais necessários a cards posteriores podem permanecer engine-only/opacos, mas não são executados neste card.

## 6. Conditions valorizadas

A informação de intensidade vem exclusivamente da estrutura oficial:

```text
system.value.isValued
system.value.value
```

Exemplo: `Frightened` é uma única definição valorizada. `Frightened 1`, `Frightened 2` e `Frightened 3` não são três definições diferentes.

```text
Definition: Frightened
Instance value: 1 | 2 | 3 | ...
```

O label preservado pelo QH-EFF-004 pode ser evidência de uma ocorrência, mas o QH-EFF-005 não extrai valor mecânico por regex de labels.

`Persistent Damage` é uma Condition oficial não valorizada pelo campo `system.value`; o dano persistente concreto possui fórmula/tipo próprios em instância mecânica. O catálogo não deve fingir que esse conceito é uma Condition inteira valorizada numericamente.

## 7. Polaridade

### 7.1. Natureza da polaridade

`BENEFICIAL | HARMFUL | NEUTRAL` é **metadata visual/editorial do QuestHub**, conforme o contrato genérico de `CampaignActorEffect`. Ela não altera regra, stacking, duração, cálculo ou aplicação.

O source PF2e/Foundry não possui um campo estrutural equivalente de polaridade em `condition`, `effect` ou `affliction`.

Portanto é proibido determinar polaridade em runtime por:

- nome;
- descrição;
- label;
- presença de palavras positivas/negativas;
- Rule Elements;
- sinal numérico de modificadores;
- pack de origem;
- IA ou heurística textual.

A polaridade é uma classificação **explícita, versionada e revisável dentro do bounded context PF2e**.

### 7.2. Regra editorial

A classificação descreve o impacto predominante sobre o **portador da definição**, somente para apresentação:

- `BENEFICIAL`: definição inequivocamente vantajosa ao portador;
- `HARMFUL`: definição inequivocamente adversa ao portador ou cujo efeito predominante é uma restrição/penalidade;
- `NEUTRAL`: estado relacional, informacional, contextual, misto ou cuja direção não é intrínseca à definição.

`NEUTRAL` não é fallback silencioso. É uma classificação explícita.

### 7.3. Mapa aprovado das Conditions canônicas

#### BENEFICIAL

```text
invisible
quickened
```

#### NEUTRAL

```text
concealed
friendly
helpful
hidden
hostile
indifferent
observed
undetected
unfriendly
unnoticed
```

As Conditions de atitude são relacionais a outro personagem/criatura; estados de detecção também dependem do observador/contexto. Por isso não são tratados como buff/debuff global.

#### HARMFUL

```text
blinded
broken
clumsy
confused
controlled
cursebound
dazzled
deafened
doomed
drained
dying
encumbered
enfeebled
fascinated
fatigued
fleeing
frightened
grabbed
immobilized
off-guard
paralyzed
persistent-damage
petrified
prone
restrained
sickened
slowed
stunned
stupefied
unconscious
wounded
```

`prone` permanece `HARMFUL` porque seu impacto predominante sobre o portador é restritivo/adverso, ainda que situações específicas possam explorar benefícios circunstanciais. A polaridade não tenta representar todas as possibilidades táticas.

### 7.4. Effects e Afflictions

Cada `effect`/`affliction` incluído pela cobertura do item 3.2 deve possuir uma classificação explícita no catálogo.

A geração/validação deve falhar se uma definição incluída não possuir polaridade aprovada.

Para definições mistas, transformações, auras, estados contextuais ou efeitos cuja direção não seja intrínseca, a classificação explícita é `NEUTRAL`.

Nenhum Developer deve decidir a polaridade de um novo target como efeito colateral da implementação; a inclusão de um target novo exige atualização consciente do manifesto/classificação PF2e.

## 8. Localização e apresentação

O catálogo segue a política bilíngue já vigente no conteúdo PF2e:

- fonte mecânica/original em `en-US`;
- apresentação `pt-BR` por overlay/localização;
- IDs, slugs, source IDs, Rule Elements e demais chaves mecânicas não são traduzidos;
- ausência de tradução não altera identidade da definição;
- fallback de apresentação para `en-US` é permitido conforme o contrato vigente do catálogo, sem reescrever o original.

A implementação não deve armazenar URLs externas do Foundry como dependência de runtime.

## 9. Relação com QH-EFF-004

O QH-EFF-004 responde:

> “este conteúdo referencia estruturalmente este target PF2e”.

O QH-EFF-005 responde:

> “esta é a definição semântica conhecida desse target”.

Fluxo:

```text
contentId
  -> PF2e Source Reference Index (QH-EFF-004)
  -> target.sourcePack + target.sourceId + target.type
  -> PF2e Active Effect Definition Catalog (QH-EFF-005)
```

Não existe resolução por label ou aproximação nominal entre as duas etapas.

## 10. Fora de escopo

O QH-EFF-005 não:

- aplica uma definição a `CampaignActor`;
- cria/remove `CampaignActorEffect`;
- interpreta qual resultado de save aplica qual Condition;
- extrai `Frightened 2` de texto para gerar valor mecânico;
- executa Rule Elements;
- calcula modificadores;
- implementa stacking/override/duração automática;
- cria indicador no Token;
- altera ficha;
- resolve as referências PF2e `Item` que permaneceram sem `target.type` no QH-EFF-004;
- importa todos os Effects/Afflictions existentes no ecossistema PF2e.

## 11. Personas e permissões

Não há operação mutável de usuário neste card. O catálogo é conteúdo do Game System e é somente leitura em runtime.

Permissões de aplicação/remoção serão definidas nos cards que materializam `CampaignActorEffect`.

## 12. Arquitetura

O catálogo pertence exclusivamente a:

```text
apps/api/src/game_systems/pathfinder_2e/
```

ou estrutura equivalente aprovada pelo Architect dentro do bounded context PF2e.

O VTT Core não conhece:

- `Frightened`;
- `conditionitems`;
- UUIDs Foundry;
- Rule Elements;
- Conditions valorizadas do PF2e;
- manifesto de polaridade PF2e.

`CampaignActorEffect.polarity` continua sendo apenas o contrato genérico já aceito. O significado/classificação da definição concreta pertence ao engine PF2e.

ADR aplicável: `ADR-0005`.

O BA não identifica necessidade de novo ADR, mas o gate de Architecture Review permanece obrigatório por tocar a fronteira Game System -> contrato genérico de Active Effects.

## 13. Critérios de aceite

- **AC01** — o source utilizado é exatamente `01114da5851f31404078d8020809b13e4000bc4b`;
- **AC02** — todas as definições reais do pack canônico `conditionitems`/`packs/pf2e/conditions` estão cobertas;
- **AC03** — slugs reconhecidos pelo runtime sem definição no pack canônico não são inventados como Condition-base;
- **AC04** — Effects/Afflictions entram somente quando referenciados e resolvidos pelo QH-EFF-004;
- **AC05** — target do QH-EFF-004 sem `target.type` não é promovido a definição;
- **AC06** — `definitionKey` deriva de `{sourcePack}:{sourceId}` e não de nome/label;
- **AC07** — `kind`, identidade, nome, descrição, ícone/fallback e polaridade estão disponíveis para cada definição;
- **AC08** — `system.value.isValued` e valor-base são preservados estruturalmente para Conditions;
- **AC09** — `Frightened` permanece uma definição única; valores de instância não criam definições duplicadas;
- **AC10** — Persistent Damage não é tratado como Condition numérica valorizada apenas por possuir quantidade/fórmula em instâncias concretas;
- **AC11** — nenhuma polaridade é inferida por texto, label, Rule Elements, sinal de modificador ou pack;
- **AC12** — todas as definições incluídas possuem polaridade explicitamente classificada; cobertura incompleta falha em teste/geração;
- **AC13** — Conditions relacionais/contextuais listadas nesta Spec permanecem `NEUTRAL`;
- **AC14** — conteúdo mecânico permanece no bounded context PF2e e nenhuma Condition concreta vaza para VTT Core;
- **AC15** — nenhum Rule Element é executado por esta feature;
- **AC16** — catálogo é somente leitura em runtime e não cria `CampaignActorEffect`;
- **AC17** — apresentação respeita o contrato bilíngue vigente sem traduzir IDs/chaves mecânicas;
- **AC18** — geração/saída é determinística para o mesmo source commit e mesmo manifesto editorial de polaridade.

## 14. Testes esperados

- cobertura integral do pack canônico de Conditions;
- prova de que `malevolence` não é incluído apenas por estar em `CONDITION_SLUGS`;
- `Frightened`: `isValued = true` e definição única;
- `Concealed`: `NEUTRAL`;
- `Quickened`: `BENEFICIAL`;
- `Prone`: `HARMFUL`;
- `Friendly`: `NEUTRAL` e grupo `attitudes` preservado quando exposto;
- `Persistent Damage`: `HARMFUL` e não valorizado pelo campo `system.value`;
- `Spell Effect: Aerial Form`: resolução por `spell-effects:<sourceId>`, nunca pelo nome;
- target unresolved do QH-EFF-004 ausente do catálogo confirmado;
- validação que falha quando uma definição incluída não possui polaridade explícita;
- idempotência/determinismo do catálogo gerado;
- `npm run check:architecture`.

## 15. Questões abertas

Nenhuma questão de produto bloqueante identificada pelo BA.

```text
BA: READY
Architecture review required: YES
Open product questions: 0
```
