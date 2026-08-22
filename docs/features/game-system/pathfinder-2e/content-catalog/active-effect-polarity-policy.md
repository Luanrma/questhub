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

A decisão é resolvida por `definitionKey = {sourcePack}:{sourceId}`. O runtime não interpreta nome, descrição, Rule Elements, sinais numéricos ou IA para decidir polaridade.

## Cobertura vigente

Para a revisão PF2e travada acima, o **conjunto completo de Effects publicados** é definido pelo source canônico gerado. Cada uma dessas chaves já possui uma polaridade baseline explícita e versionada proveniente de `active-effect-polarity.json`.

QH-EFF-012 mantém esse inventário completo e sobrepõe, por chave exata, decisões editoriais materializadas para os Effects semanticamente inequívocos que não podem permanecer no baseline histórico `NEUTRAL`. Effects mistos, contextuais ou ambíguos preservam explicitamente o baseline `NEUTRAL` até que exista evidência editorial suficiente para uma decisão diferente.

Os overrides ficam materializados como dados estáticos nos manifests de `active-effect-polarity-editorial/` e são agregados por `active-effect-polarity-editorial.ts` sobre o conjunto canônico completo.

O guard editorial usado durante desenvolvimento detecta Effects ainda `NEUTRAL` cuja descrição apresenta sinais unilateralmente benéficos ou prejudiciais. Ele é somente uma ferramenta de triagem: uma sugestão heurística **não pode sobrescrever uma decisão contextual já revisada**. O resultado editorial aprovado é materializado no repositório por `definitionKey`; esse detector não participa da classificação em runtime. Além dele, um teste exige igualdade exata entre o conjunto final de chaves editoriais resolvidas e o conjunto de Effects publicados.

## Exemplos de NEUTRAL explícito

`bestiary-effects:1toVzNVJZx0RwG1v` — **Effect: Darivan's Bloodline Magic** permanece `NEUTRAL`: a mesma definição pode conceder bônus de Diplomacy a Darivan ou impor penalidade de Will a outro alvo.

`bestiary-effects:5w675gmnZqbND0mt` — **Effect: Flesh Mutation** permanece `NEUTRAL`: a decisão contextual já revisada prevalece mesmo quando o detector de desenvolvimento encontra um sinal textual unilateral.

`bestiary-effects:6E8bOkwFzFuQ3ZAw` — **Effect: Lurker's Glow (Critical Failure)** permanece `NEUTRAL`: iluminação é contextual e não constitui, por si só, vantagem ou prejuízo universal para o portador/alvo.

Esses são exemplos representativos, não uma enumeração exaustiva de todos os Effects contextuais. Isso é diferente do comportamento rejeitado em Human Validation, no qual praticamente todos os `effect` permaneciam `NEUTRAL` por uma política blanket.

## Materialização vigente

O carregamento do catálogo:

- parte do conjunto completo de decisões baseline versionadas no source canônico;
- aplica overrides editoriais somente por chave exata;
- valida que todo override aponta para uma definição publicada de `kind = effect`;
- exige cobertura final exata de todo Effect publicado;
- não possui inferência do tipo `effect → NEUTRAL`, `effect → BENEFICIAL`, `effect → HARMFUL` ou `affliction → HARMFUL` em runtime;
- preserva a classificação explicitamente versionada fora do domínio `effect` conforme o manifesto canônico.

A ausência de uma chave publicada no conjunto final é erro de regressão, não autorização para inferência em runtime.

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

- o conjunto final de chaves editoriais deve ser exatamente igual ao conjunto de Effects publicados;
- deve existir ao menos um `effect` publicado `BENEFICIAL`;
- deve existir ao menos um `effect` publicado `HARMFUL`;
- deve existir ao menos um `effect` explicitamente `NEUTRAL` por contexto misto;
- Oceanic Armor é representante `BENEFICIAL`;
- Swarming Bites é representante `HARMFUL`;
- Darivan's Bloodline Magic, Flesh Mutation e Lurker's Glow são regressões explícitas de `NEUTRAL` contextual;
- todo override editorial deve apontar para uma chave publicada exata;
- nenhuma inferência de polaridade deve ocorrer no VTT Core ou no runtime genérico.
