# Feature Spec — Mapeamento de efeitos potenciais de Criaturas e Hazards PF2e

Status: **BA READY**

Card: `QH-EFF-008` — https://trello.com/c/aEEUV4Fk/13-qh-eff-008-mapear-efeitos-de-criaturas-e-hazards-pf2e

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: `QH-EFF-004`, `QH-EFF-005`.

Bloqueia: `QH-EFF-009`.

## 1. Objetivo

Criar um mapeamento somente leitura, pertencente ao bounded context PF2e, que relacione referências semânticas de entradas do Bestiário (`CREATURE` e `HAZARD`) às definições `condition`, `effect` ou `affliction` do QH-EFF-005, preservando a origem concreta da referência e marcando como efeito potencial somente ocorrências com evidência estrutural/editorial restrita.

O QH-EFF-008 não executa ataques, ações, rotinas ou passivos e não cria `CampaignActorEffect`.

## 2. Fonte e source lock

Nenhuma nova importação é executada.

O mapper usa exclusivamente:

1. `PATHFINDER_2E_BESTIARY_ENTRIES` já versionado no QuestHub;
2. referências estruturais reconstruídas pelo QH-EFF-004;
3. definições semânticas do QH-EFF-005.

Todos derivam do source PF2e congelado em:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

Não existe acesso ao Foundry/PF2e em runtime.

## 3. Princípio semântico

Uma referência a uma Condition/Effect/Affliction em uma criatura ou hazard não significa automaticamente que uma ação aplique aquela definição.

A referência pode representar, entre outros casos:

- efeito realmente produzido;
- pré-condição;
- comparação;
- imunidade/interação;
- explicação editorial;
- Rule Element ou outro dado estrutural não executado por este card.

Portanto:

```text
semantic reference != potential bestiary effect
```

Todas as referências semânticas resolvidas são contabilizadas; somente evidências explicitamente previstas nesta Spec recebem `potential = true`.

## 4. Contrato

```ts
type Pathfinder2eBestiaryEffectOutcome =
  | 'CRITICAL_SUCCESS'
  | 'SUCCESS'
  | 'FAILURE'
  | 'CRITICAL_FAILURE'
  | null

type Pathfinder2eBestiaryEffectEvidence =
  | 'EXPLICIT_EFFECT_ASSIGNMENT'
  | 'AFFLICTION_STAGE'
  | 'DEGREE_OF_SUCCESS'
  | 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE'
  | 'STANDALONE_REFERENCE'
  | 'REFERENCE_ONLY'
  | 'NON_TEXT_REFERENCE'

type Pathfinder2eBestiaryEffectOrigin = {
  entryType: 'CREATURE' | 'HAZARD'
  kind: 'ACTION' | 'ATTACK' | 'ENTITY' | 'HAZARD_ROUTINE' | 'UNKNOWN_OWNER'
  sourceId: string | null
  name: string | null
  actionKind: 'action' | 'reaction' | 'passive' | null
}

type Pathfinder2eBestiaryEffectMapping = {
  contentId: string
  occurrenceIndex: number
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  potential: boolean
  evidence: Pathfinder2eBestiaryEffectEvidence
  outcome: Pathfinder2eBestiaryEffectOutcome
  valueHint: { value: number; source: 'REFERENCE_LABEL' } | null
  stageHint: { stage: number; source: 'STAGE_LINE' } | null
  origin: Pathfinder2eBestiaryEffectOrigin
  source: {
    sourcePath: string
    sourceIndex: number
    label: string | null
    ownerSourceId: string | null
  }
  schemaVersion: 1
}
```

## 5. Identidade e origem

A entrada usa seu `contentId` existente. A definição usa exclusivamente:

```text
definitionKey = {sourcePack}:{sourceId}
```

Cada ocorrência é preservada individualmente por `occurrenceIndex`.

A origem é resolvida somente por IDs estruturais já versionados:

1. `ownerSourceId` igual ao ID de `data.actions[]` → `ACTION`, preservando nome e `actionKind`;
2. em `CREATURE`, `ownerSourceId` igual ao ID de `data.attacks[]` → `ATTACK`;
3. `ownerSourceId` igual ao `source.sourceId` da própria entrada → `ENTITY`, salvo quando o `sourcePath` é a rotina de um Hazard;
4. em `HAZARD`, path estrutural de rotina pertencente ao owner raiz → `HAZARD_ROUTINE`;
5. owner não reconhecido → `UNKNOWN_OWNER`.

É proibido resolver origem por nome, tradução ou similaridade textual.

## 6. Contextos textuais versionados

O mapper pode alinhar uma referência ao texto normalizado `en-US` somente quando existe correspondência estrutural conhecida:

- owner `ACTION` + `sourcePath` da descrição do embedded item → `action.description`;
- owner raiz + path de descrição da entidade → `data.description`;
- `HAZARD_ROUTINE` → `data.routine`.

O modelo atual de `attacks[]` não preserva descrição textual completa do embedded Strike. Referências cujo owner é `ATTACK` continuam contabilizadas com origem correta, porém sem inventar uma projeção textual inexistente.

Outros `sourcePath` não são reinterpretados como texto mecânico.

## 7. Alinhamento textual restrito

Token de alinhamento:

```text
reference.label, quando existe label explícito;
caso contrário reference.target.compendiumKey;
caso contrário null.
```

Regras:

1. correspondência textual exata;
2. ordem monotônica por `sourceIndex` dentro do mesmo contexto textual;
3. ambiguidade ou impossibilidade de alinhamento resulta em `REFERENCE_ONLY`;
4. `target.compendiumKey` é somente token de alinhamento e não substitui `source.label`;
5. nenhuma tradução reversa, fuzzy matching, IA ou consulta externa;
6. `target.compendiumKey` não produz `valueHint`.

## 8. Evidências potenciais

### 8.1. EXPLICIT_EFFECT_ASSIGNMENT

Parsing textual só é usado como fallback **restrito e testável** em `ACTION` ou `HAZARD_ROUTINE`.

Uma referência alinhada recebe `EXPLICIT_EFFECT_ASSIGNMENT` quando o token participa de uma construção causativa exata suportada, ignorando apenas whitespace:

```text
become(s) <token>
becoming <token>
knocked <token>
rendered <token>
land(s) <token>
gain(s) <token>
is <token> by ...
are <token> by ...
```

O parser não usa sinônimos livres, stemming, tradução, IA ou interpretação semântica da frase.

Exemplos canônicos do source congelado:

```text
Confounding Portal / Confounding Misdirection:
  "The creature is Confused by the illusions"
  -> EXPLICIT_EFFECT_ASSIGNMENT

Steam Vents / Steam Blast:
  "Creatures that critically fail ... are knocked Prone"
  -> EXPLICIT_EFFECT_ASSIGNMENT
```

A evidência significa que a origem **pode produzir** a definição; condições condicionais de save/ataque continuam sem ser resolvidas por este card.

### 8.2. AFFLICTION_STAGE

Uma referência recebe `AFFLICTION_STAGE` somente quando:

- está em contexto textual conhecido;
- possui label explícito;
- sua linha/bloco começa exatamente com `Stage <positive integer>`;
- a referência ocorre nessa linha.

Resultado:

```text
potential = true
stageHint = { stage: N, source: 'STAGE_LINE' }
```

`label = null` na linha de Stage não é suficiente para promoção.

### 8.3. DEGREE_OF_SUCCESS

Uma referência recebe `DEGREE_OF_SUCCESS` somente quando:

- está em contexto textual conhecido;
- possui label explícito;
- sua linha começa exatamente com `Critical Success`, `Success`, `Failure` ou `Critical Failure`.

O outcome corresponde ao marcador. Referência implícita (`label = null`) na mesma linha não é promovida por esse fato isolado.

### 8.4. DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE

Uma referência standalone imediatamente após uma linha não vazia iniciada por um Degree of Success recebe:

```text
potential = true
evidence = DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE
outcome = outcome da linha imediatamente anterior
```

A associação é puramente posicional; palavras no nome do target não determinam outcome.

### 8.5. STANDALONE_REFERENCE

Quando a linha contém somente o token estrutural exato:

```text
potential = true
evidence = STANDALONE_REFERENCE
```

### 8.6. REFERENCE_ONLY

Referência de contexto textual que não satisfaz nenhuma evidência anterior é preservada como não potencial.

### 8.7. NON_TEXT_REFERENCE

Referência resolvida fora dos contextos textuais conhecidos é preservada como:

```text
potential = false
evidence = NON_TEXT_REFERENCE
```

Isso inclui Rule Elements e referências de `ATTACK` cuja descrição completa não existe no modelo normalizado atual. O QH-EFF-008 não executa nem interpreta Rule Elements.

## 9. Conditions valorizadas

`valueHint` existe somente quando:

1. definição é `condition`;
2. QH-EFF-005 informa `conditionValue.isValued = true`;
3. existe label explícito;
4. label segue exatamente `<canonical definition name> <positive integer>`.

O hint não materializa a Condition e não resolve save/ataque.

## 10. Criaturas e Hazards no mesmo contrato

`CREATURE` e `HAZARD` usam `Pathfinder2eBestiaryEffectMapping` comum, preservando `origin.entryType`.

Diferenças de domínio permanecem visíveis:

- criatura pode originar referência em `ATTACK`;
- hazard pode originar referência em `HAZARD_ROUTINE`;
- ambos podem possuir `ACTION`/`reaction`/`passive`.

Nenhum tipo é convertido no outro.

## 11. Cobertura

Toda referência do Bestiário resolvida pelo QH-EFF-004 como `condition`, `effect` ou `affliction` deve ser contabilizada exatamente uma vez.

Targets unresolved ficam fora do conjunto semântico confirmado e nunca são promovidos.

Invariante:

```text
resolved semantic bestiary references == mapped bestiary occurrences
```

## 12. API interna PF2e

Expor leitura interna equivalente a:

```ts
getPathfinder2eBestiaryEffectMappings(contentId)
listPathfinder2ePotentialBestiaryEffects(contentId)
```

Nenhuma rota HTTP pública é criada.

## 13. Localização e imutabilidade

Classificação usa somente `en-US` original normalizado e metadata estrutural QH-EFF-004/QH-EFF-005.

`pt-BR` não participa da decisão mecânica. Originais e traduções não são modificados.

## 14. Permissões

O mapper é somente leitura e não possui operação mutável de usuário. Aplicação/remoção e suas permissões pertencem ao QH-EFF-009.

## 15. Fora de escopo

QH-EFF-008 não:

- executa ação, reação, passivo, ataque ou rotina;
- decide se ataque acertou;
- decide Degree of Success de save;
- aplica/remove `CampaignActorEffect`;
- altera HP, CA, saves, atributos ou rolagens;
- executa Rule Elements;
- calcula duração, stacking, imunidade, onset ou progressão de affliction;
- transforma dano instantâneo em efeito ativo;
- usa NLP, fuzzy matching ou IA para classificar referência;
- promove target unresolved;
- cria nova importação;
- cria UI pública;
- altera VTT Core.

## 16. Arquitetura

Toda semântica permanece em:

```text
apps/api/src/game_systems/pathfinder_2e/
```

O VTT Core não conhece Conditions, Effects, Afflictions, Degree of Success, Stage, UUID Foundry nem gramática editorial PF2e.

QH-EFF-008 prepara metadata engine-only para QH-EFF-009.

ADR aplicável: `ADR-0005`. Architecture Review obrigatório.

## 17. Critérios de aceite

- **AC01** — usa somente Bestiário importado + QH-EFF-004 + QH-EFF-005;
- **AC02** — source lock é `01114da5851f31404078d8020809b13e4000bc4b`;
- **AC03** — toda referência resolvida `condition/effect/affliction` é contabilizada exatamente uma vez;
- **AC04** — target unresolved nunca é promovido;
- **AC05** — `definitionKey = sourcePack:sourceId`;
- **AC06** — ocorrências repetidas não são deduplicadas;
- **AC07** — origem é resolvida por IDs estruturais, nunca por nome;
- **AC08** — contrato comum preserva `entryType` CREATURE/HAZARD;
- **AC09** — owner de action preserva nome e `actionKind`;
- **AC10** — owner de attack é identificado sem inventar descrição textual;
- **AC11** — hazard routine é distinguida de descrição/ação;
- **AC12** — owner desconhecido permanece `UNKNOWN_OWNER`;
- **AC13** — alinhamento usa label ou compendiumKey exato e é monotônico;
- **AC14** — ambiguidade cai para `REFERENCE_ONLY`, sem fuzzy/IA;
- **AC15** — compendiumKey é alignment-only e não gera value hint;
- **AC16** — `EXPLICIT_EFFECT_ASSIGNMENT` usa somente a gramática fechada desta Spec;
- **AC17** — Confounding Portal / Confounding Misdirection mapeia Confused como potencial sem resolver o save;
- **AC18** — Steam Vents / Steam Blast mapeia Prone como potencial sem resolver o critical failure;
- **AC19** — Stage N exige label explícito e produz `stageHint`;
- **AC20** — Degree same-line exige label explícito;
- **AC21** — standalone imediatamente após Degree preserva outcome apenas por posição;
- **AC22** — standalone puro pode ser potencial;
- **AC23** — referência textual sem evidência permanece `REFERENCE_ONLY`;
- **AC24** — referência fora de contexto textual conhecido permanece `NON_TEXT_REFERENCE`;
- **AC25** — Rule Elements não são executados nem automaticamente promovidos;
- **AC26** — Conditions valorizadas usam somente label explícito canônico;
- **AC27** — Affliction mantém `kind = affliction`;
- **AC28** — nenhum dano instantâneo vira Active Effect;
- **AC29** — nenhum ataque/save/ação é resolvido e nenhum `CampaignActorEffect` é criado;
- **AC30** — originais e traduções permanecem inalterados;
- **AC31** — resultado é determinístico;
- **AC32** — API interna lista todos os mappings e somente os potenciais;
- **AC33** — nenhuma semântica PF2e vaza para VTT Core;
- **AC34** — testes cobrem criatura e hazard, ação/passivo/ataque quando houver referência estrutural, e ao menos um caso não potencial;
- **AC35** — `npm run check:architecture` e Game System Boundaries permanecem verdes.

## 18. Questões abertas

Nenhuma questão de produto bloqueante.

A política é deliberadamente conservadora: quando o catálogo normalizado não preserva contexto textual suficiente, a referência continua contabilizada e não potencial em vez de ser inferida.

```text
BA: READY
Architecture review required: YES
Open product questions: 0
```
