# Feature Spec — Mapeamento de efeitos potenciais de Itens PF2e

Status: **BA READY**

Card: `QH-EFF-007` — https://trello.com/c/FNkVUuia/12-qh-eff-007-mapear-efeitos-potenciais-de-itens-pf2e

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: `QH-EFF-004`, `QH-EFF-005`.

Bloqueia: `QH-EFF-009`.

## 1. Objetivo

Criar um mapeamento somente leitura, pertencente ao bounded context PF2e, que relacione cada Item já existente no catálogo QuestHub às definições `condition`, `effect` ou `affliction` que ele **pode produzir com evidência estrutural suficiente**.

O card preserva contexto editorial relevante, como estágio de uma affliction, Degree of Success e valor explícito de Condition quando esses dados podem ser obtidos de forma determinística.

O QH-EFF-007 não equipa, usa, ativa nem consome Item; não aplica `CampaignActorEffect`; não altera ficha; não executa Rule Elements.

## 2. Fonte e source lock

Nenhuma nova importação é executada.

O mapper usa exclusivamente:

1. `PATHFINDER_2E_ITEM_ENTRIES`, já versionado no QuestHub;
2. referências estruturais reconstruídas por QH-EFF-004;
3. definições semânticas do QH-EFF-005.

Todos derivam do source PF2e congelado em:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

Não existe acesso ao Foundry/PF2e em runtime.

## 3. Princípio semântico

Uma referência a Condition/Effect/Affliction dentro da descrição de um Item não significa automaticamente que usar, portar ou equipar o Item aplique aquela definição.

Exemplos de referências que podem existir sem representar aplicação direta:

- comparação com outro estado;
- imunidade ou resistência a uma Condition;
- explicação de como uma Condition interage com o Item;
- pré-requisito ou estado que impede uma ativação;
- referência histórica ou descritiva.

Portanto:

```text
semantic reference != potential item effect
```

O mapper preserva todas as referências semânticas resolvidas, mas somente marca `potential = true` quando existe uma das evidências editoriais restritas desta Spec.

## 4. Contrato

```ts
type Pathfinder2eItemEffectOutcome =
  | 'CRITICAL_SUCCESS'
  | 'SUCCESS'
  | 'FAILURE'
  | 'CRITICAL_FAILURE'
  | null

 type Pathfinder2eItemEffectEvidence =
  | 'AFFLICTION_STAGE'
  | 'DEGREE_OF_SUCCESS'
  | 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE'
  | 'STANDALONE_REFERENCE'
  | 'REFERENCE_ONLY'
  | 'NON_DESCRIPTION_REFERENCE'

 type Pathfinder2eItemEffectValueHint = {
  value: number
  source: 'REFERENCE_LABEL'
} | null

 type Pathfinder2eItemEffectStageHint = {
  stage: number
  source: 'STAGE_LINE'
} | null

 type Pathfinder2eItemEffectMapping = {
  contentId: string
  occurrenceIndex: number
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  potential: boolean
  evidence: Pathfinder2eItemEffectEvidence
  outcome: Pathfinder2eItemEffectOutcome
  valueHint: Pathfinder2eItemEffectValueHint
  stageHint: Pathfinder2eItemEffectStageHint
  source: {
    sourcePath: string
    sourceIndex: number
    label: string | null
    ownerSourceId: string | null
  }
  schemaVersion: 1
}
```

A representação física pode variar se preservar exatamente esses significados.

## 5. Identidade

Item usa o `contentId` existente.

Definição usa exclusivamente:

```text
definitionKey = {sourcePack}:{sourceId}
```

Nenhum relacionamento é resolvido por tradução, slug aproximado ou fuzzy matching.

Cada ocorrência é preservada individualmente por `occurrenceIndex`; referências repetidas à mesma definição não são deduplicadas.

## 6. Alinhamento textual restrito

Para referências provenientes de `/system/description/value`, o mapper alinha a referência ao texto normalizado `en-US`.

Token de alinhamento:

```text
reference.label, quando existe label explícito;
caso contrário reference.target.compendiumKey;
caso contrário null.
```

Regras:

1. o token deve ser encontrado por correspondência textual exata;
2. a ordem global deve ser monotônica em relação a `sourceIndex`;
3. ambiguidade ou impossibilidade de alinhamento resulta em `REFERENCE_ONLY`;
4. `target.compendiumKey` é somente um token estrutural de alinhamento e nunca substitui `source.label`;
5. não existe tradução reversa, fuzzy matching, IA ou consulta externa;
6. `target.compendiumKey` não produz `valueHint`.

## 7. Evidências que podem produzir `potential = true`

### 7.1. AFFLICTION_STAGE

PF2e expressa efeitos progressivos de venenos, doenças e outras afflictions por estágios editoriais.

Uma ocorrência recebe `AFFLICTION_STAGE` somente quando:

1. está na descrição;
2. possui **label explícito** preservado pelo QH-EFF-004;
3. sua linha/bloco começa, após trim, com exatamente `Stage <positive integer>`;
4. a ocorrência está nessa mesma linha/bloco;
5. a definição é `condition`, `effect` ou `affliction` resolvida pelo QH-EFF-005.

Resultado:

```text
potential = true
stageHint = { stage: N, source: 'STAGE_LINE' }
outcome = null
```

O número do estágio vem apenas do prefixo estrutural `Stage N`.

Uma referência implícita (`label = null`) dentro de uma linha de Stage pode ser alinhada, mas **não** é promovida somente por isso. Ela permanece `REFERENCE_ONLY`, salvo se satisfizer outra evidência independente, como standalone.

### 7.2. DEGREE_OF_SUCCESS

Itens podem possuir ativações ou efeitos que usam os quatro Degrees of Success canônicos do PF2e.

Uma ocorrência recebe `DEGREE_OF_SUCCESS` quando:

1. está na descrição;
2. possui label explícito;
3. sua linha/bloco começa exatamente com um dos marcadores:

```text
Critical Success
Success
Failure
Critical Failure
```

Mapeamento:

```text
Critical Success -> CRITICAL_SUCCESS
Success          -> SUCCESS
Failure          -> FAILURE
Critical Failure -> CRITICAL_FAILURE
```

Resultado:

```text
potential = true
stageHint = null
outcome = <correspondente>
```

Referência `label = null` na própria linha de Degree of Success não é promovida por esse fato isolado.

### 7.3. DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE

Quando uma referência aparece sozinha na linha imediatamente posterior a uma linha não vazia iniciada por um dos quatro Degrees of Success:

```text
potential = true
evidence = DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE
outcome = outcome da linha anterior
```

Essa associação é somente posicional/editorial. Palavras como `(Success)` presentes no nome do target não podem determinar o outcome.

### 7.4. STANDALONE_REFERENCE

Quando a linha/bloco contém somente o token estrutural exato da referência:

```text
potential = true
evidence = STANDALONE_REFERENCE
outcome = null
stageHint = null
```

Essa regra permite preservar Effects de equipamento/consumível explicitamente destacados pelo próprio conteúdo sem interpretar a mecânica interna do target.

### 7.5. REFERENCE_ONLY

Toda referência de descrição que não satisfaz as regras anteriores é preservada como:

```text
potential = false
evidence = REFERENCE_ONLY
outcome = null
stageHint = null
```

Isso é comportamento deliberadamente conservador, não descarte de informação.

### 7.6. NON_DESCRIPTION_REFERENCE

Referência resolvida fora da descrição é preservada como:

```text
potential = false
evidence = NON_DESCRIPTION_REFERENCE
outcome = null
stageHint = null
```

QH-EFF-007 não interpreta Rule Elements ou outro campo estrutural apenas porque contém um UUID. Uma política específica futura pode promover um sourcePath concreto após refinamento próprio.

## 8. Conditions valorizadas

`valueHint` somente existe quando:

1. definição é `condition`;
2. QH-EFF-005 declara `conditionValue.isValued = true`;
3. existe label explícito;
4. label segue exatamente:

```text
<canonical definition name> <positive integer>
```

Exemplos estruturais já existentes no sidecar de Items incluem `Sickened 1`, `Sickened 2`, `Doomed 1` e `Stupefied 2`.

O valor é apenas hint para QH-EFF-009. QH-EFF-007 não cria instância ativa.

## 9. Afflictions

Uma definição `kind = affliction` permanece `affliction`.

É proibido:

- converter poison/disease/affliction em uma Condition genérica inventada;
- expandir automaticamente os estágios mecânicos internos de uma affliction não importada como se fossem Conditions independentes;
- executar DC, onset, duration ou stage progression.

Se uma referência resolvida para uma Affliction satisfizer uma evidência desta Spec, ela pode ser `potential = true` mantendo sua identidade própria.

## 10. Cobertura

Toda referência de Item resolvida pelo QH-EFF-004 como `condition`, `effect` ou `affliction` deve ser contabilizada exatamente uma vez.

Referências unresolved do QH-EFF-004 ficam fora do conjunto semântico confirmado e nunca são promovidas.

Invariante verificável:

```text
resolved semantic item references == mapped item occurrences
```

A leitura deve permitir distinguir `potential = true` de `potential = false` sem perder as ocorrências não confirmadas.

## 11. API interna PF2e

Expor leitura interna equivalente a:

```ts
getPathfinder2eItemEffectMappings(contentId)
listPathfinder2ePotentialItemEffects(contentId)
```

Nenhuma rota HTTP pública é criada neste card.

## 12. Localização

Alinhamento, stage, Degree of Success e value hints usam somente conteúdo original `en-US` e metadata estrutural QH-EFF-004/QH-EFF-005.

`pt-BR` não participa da classificação mecânica.

Originais e traduções não são modificados.

## 13. Permissões

O catálogo é somente leitura e não recebe operação mutável de usuário.

Permissões para aplicar/remover efeito pertencem ao QH-EFF-009.

## 14. Fora de escopo

QH-EFF-007 não:

- equipa Item;
- ativa/usa/consome Item;
- aplica ou remove `CampaignActorEffect`;
- altera CA, HP, atributos, saves, rolagens ou outras propriedades de ficha;
- resolve save/attack;
- executa Rule Elements;
- calcula onset, duração, stage progression, imunidade ou stacking;
- interpreta linguagem natural para recuperar referências ambíguas;
- usa IA/fuzzy matching para decidir efeito;
- promove target unresolved;
- cria nova importação;
- cria UI pública;
- altera VTT Core.

## 15. Arquitetura

Toda semântica fica em:

```text
apps/api/src/game_systems/pathfinder_2e/
```

O VTT Core não conhece:

- nomes de Conditions/Effects/Afflictions PF2e;
- Stage de poison/disease;
- Degree of Success PF2e;
- UUID/Compendium Foundry;
- value hints específicos do ruleset;
- critérios editoriais deste mapper.

QH-EFF-007 prepara metadata engine-only para QH-EFF-009.

ADR aplicável: `ADR-0005`.

Architecture Review é obrigatório.

## 16. Critérios de aceite

- **AC01** — usa somente Items já importados, QH-EFF-004 e QH-EFF-005;
- **AC02** — source lock é `01114da5851f31404078d8020809b13e4000bc4b`;
- **AC03** — toda referência resolvida `condition/effect/affliction` de Item é contabilizada exatamente uma vez;
- **AC04** — target unresolved nunca é promovido;
- **AC05** — `definitionKey = sourcePack:sourceId`;
- **AC06** — ocorrências repetidas não são deduplicadas;
- **AC07** — alinhamento usa label explícito ou, somente como fallback textual exato, `target.compendiumKey`;
- **AC08** — alinhamento é monotônico em relação à ordem das referências;
- **AC09** — ambiguidade cai para `REFERENCE_ONLY`; não existe fuzzy/IA;
- **AC10** — linha `Stage N` com label explícito pode produzir `AFFLICTION_STAGE` e `stageHint N`;
- **AC11** — `label = null` em Stage não é suficiente para promover referência inline;
- **AC12** — Degree of Success reconhece somente os quatro marcadores canônicos;
- **AC13** — same-line Degree exige label explícito;
- **AC14** — referência standalone imediatamente após Degree preserva outcome somente pela posição;
- **AC15** — referência standalone resolvida é potencial sem interpretar o target;
- **AC16** — referência inline sem evidência suficiente permanece `REFERENCE_ONLY`;
- **AC17** — referência fora da descrição permanece `NON_DESCRIPTION_REFERENCE`;
- **AC18** — Conditions valorizadas recebem hint somente de label explícito canônico;
- **AC19** — Condition não valorizada não recebe hint por número textual;
- **AC20** — `target.compendiumKey` não produz value hint;
- **AC21** — Affliction mantém `kind = affliction` e não é convertida para Condition artificial;
- **AC22** — nenhuma progressão de Affliction é executada;
- **AC23** — nenhum Item é usado/equipado/consumido pelo mapper;
- **AC24** — nenhum `CampaignActorEffect` é criado;
- **AC25** — originais e traduções permanecem inalterados;
- **AC26** — resultado é determinístico para os mesmos dados versionados;
- **AC27** — API interna lista todos os mappings e somente os potenciais;
- **AC28** — nenhuma semântica PF2e vaza para VTT Core;
- **AC29** — testes cobrem ao menos um Item com Effect standalone, um Item com Condition valorizada e um caso de referência preservada como não potencial;
- **AC30** — `npm run check:architecture` e os checks de Game System boundaries permanecem verdes.

## 17. Questões abertas

Nenhuma questão de produto bloqueante.

A política é deliberadamente conservadora: referências que o conteúdo atual não permite classificar estruturalmente permanecem registradas como não potenciais. QH-EFF-009 não poderá tratar `REFERENCE_ONLY` como efeito aplicável sem refinamento explícito posterior.

```text
BA: READY
Architecture review required: YES
Open product questions: 0
```
