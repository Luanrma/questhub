# PF2e Active Effects — Política editorial de polaridade

Status: **VIGENTE — QH-EFF-012**  
Source lock: `01114da5851f31404078d8020809b13e4000bc4b`

Este documento substitui, para o catálogo vigente, a política histórica do QH-EFF-005 que tratava todo documento PF2e `effect` como `NEUTRAL` no catálogo-base.

## Decisão de produto — 2026-08-22

A polaridade de `CampaignActorEffect` continua sendo metadata visual genérica do QuestHub. O PF2e não fornece um campo universal equivalente a `BENEFICIAL | HARMFUL | NEUTRAL`, portanto a classificação é editorial e versionada pelo QuestHub.

A decisão aprovada é **classificação individual por definição**:

1. **BENEFICIAL** — a definição representa de forma semanticamente inequívoca uma vantagem para o portador/alvo da instância: bônus, proteção, resistência, mitigação ou outra melhoria sem contrapartida adversa relevante descrita pela própria definição.
2. **HARMFUL** — a definição representa de forma semanticamente inequívoca uma desvantagem para o portador/alvo: penalidade, fraqueza, restrição, Condition adversa ou outra piora sem benefício relevante descrito pela própria definição.
3. **NEUTRAL** — reservado a definições realmente mistas, contextuais ou ambíguas, nas quais a mesma definição pode beneficiar ou prejudicar dependendo de alvo, resultado ou uso.

A decisão é registrada por `definitionKey = {sourcePack}:{sourceId}`. O runtime não interpreta nome, descrição, Rule Elements, sinais numéricos ou IA para decidir polaridade.

## Exemplo de NEUTRAL válido

`bestiary-effects:1toVzNVJZx0RwG1v` — **Effect: Darivan's Bloodline Magic** permanece `NEUTRAL` por decisão explícita. A própria definição pode conceder bônus de Diplomacy a Darivan **ou** impor penalidade de Will a outro alvo. Não existe uma única polaridade correta no nível da definição.

Isso é diferente do comportamento rejeitado em Human Validation, no qual praticamente todos os `effect` permaneciam `NEUTRAL` por uma política blanket.

## Materialização vigente

O catálogo continua contendo uma classificação explícita para toda definição publicada. Sobre a base materializada pelo gerador, `active-effect-polarity-editorial.ts` registra decisões individuais revisadas para Effects semanticamente inequívocos e para casos neutros deliberados.

O carregamento do catálogo:

- aplica somente decisões por chave exata;
- valida que toda decisão editorial aponta para uma definição publicada de `kind = effect`;
- não possui fallback do tipo `effect → NEUTRAL` ou `affliction → HARMFUL`;
- preserva a classificação base explicitamente versionada quando não existe uma revisão editorial adicional para aquela chave.

A ausência de override não é autorização para inferência em runtime. Novas definições continuam exigindo entrada explícita no manifesto de materialização antes de serem publicadas.

## Conditions

As 43 Conditions canônicas mantêm a classificação individual já aprovada e versionada. Exemplos:

- `Frightened` → `HARMFUL`;
- `Quickened` → `BENEFICIAL`;
- `Concealed` → `NEUTRAL`.

## Afflictions

Afflictions atualmente publicadas continuam com suas decisões explícitas versionadas. `kind = affliction` não é usado em runtime como regra para produzir `HARMFUL`.

## Regras de segurança arquitetural

- nenhuma classificação executa regra PF2e;
- nenhuma classificação altera dano, AC, saves, HP, duração, stacking ou Rule Elements;
- o VTT Core recebe somente a enum genérica `BENEFICIAL | HARMFUL | NEUTRAL`;
- semântica e decisões concretas permanecem na engine PF2e;
- classificação contextual de uma **instância** futura pode ser refinada por Spell/Item/Creature/Hazard sem mudar automaticamente a definição-base.

## Regressões obrigatórias

Os testes devem impedir retorno à política blanket:

- deve existir ao menos um `effect` publicado `BENEFICIAL`;
- deve existir ao menos um `effect` publicado `HARMFUL`;
- deve existir ao menos um `effect` explicitamente `NEUTRAL` por contexto misto;
- Oceanic Armor é representante `BENEFICIAL`;
- Swarming Bites é representante `HARMFUL`;
- Darivan's Bloodline Magic é representante `NEUTRAL`;
- toda decisão editorial deve apontar para uma chave publicada exata;
- nenhuma inferência de polaridade deve ocorrer no VTT Core ou no runtime genérico.
