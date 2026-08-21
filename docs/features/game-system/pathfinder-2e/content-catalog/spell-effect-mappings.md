# Feature Spec — Mapeamento de efeitos potenciais de Spells PF2e

Status: **BA READY**

Card: `QH-EFF-006` — https://trello.com/c/E1yRhqol/11-qh-eff-006-mapear-efeitos-potenciais-de-spells-pf2e

Domínio: `Game System / Pathfinder 2e / Content Catalog`

Dependências: `QH-EFF-004`, `QH-EFF-005`.

Bloqueia: `QH-EFF-009`.

Refinamento obrigatório de alinhamento: `spell-effect-alignment-policy.md`.

## 1. Objetivo

Criar um mapeamento somente leitura, pertencente ao bounded context PF2e, que relacione cada Spell já existente no catálogo QuestHub às definições `condition`, `effect` ou `affliction` que ela **pode produzir com evidência estrutural suficiente**, preservando contexto de grau de sucesso e valores sugeridos quando esses dados podem ser recuperados de forma determinística.

O QH-EFF-006 não aplica nenhum efeito e não resolve nenhum save, ataque, duração, stacking ou consequência mecânica.

## 2. Fonte e dados já existentes

Nenhuma nova importação é executada.

O mapeamento usa exclusivamente dados já versionados no QuestHub:

1. Spells `en-US` normalizadas do catálogo atual;
2. referências estruturais reconstruídas pelo QH-EFF-004;
3. definições semânticas resolvidas pelo QH-EFF-005.

Todos derivam do source PF2e congelado em:

```text
01114da5851f31404078d8020809b13e4000bc4b
```

Não existe acesso ao Foundry/PF2e em runtime.

## 3. Problema de semântica

Uma referência a uma Condition/Effect dentro de uma Spell não significa automaticamente que a Spell aplique aquela definição.

Exemplo canônico: `Aerial Form` referencia `Clumsy` apenas para explicar que determinado ataque é baseado em Dexterity para fins da Condition; isso não significa que conjurar `Aerial Form` aplique `Clumsy`. A mesma Spell possui uma referência standalone para `Spell Effect: Aerial Form`, que representa um efeito potencial da própria Spell.

Portanto:

```text
semantic reference != potential effect
```

O mapeamento precisa preservar também referências semanticamente conhecidas que não possuem evidência suficiente para serem tratadas como efeito potencial, sem promovê-las silenciosamente.

## 4. Contrato

```ts
type Pathfinder2eSpellEffectOutcome =
  | 'CRITICAL_SUCCESS'
  | 'SUCCESS'
  | 'FAILURE'
  | 'CRITICAL_FAILURE'
  | null

type Pathfinder2eSpellEffectEvidence =
  | 'DEGREE_OF_SUCCESS'
  | 'DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE'
  | 'STANDALONE_REFERENCE'
  | 'REFERENCE_ONLY'
  | 'NON_DESCRIPTION_REFERENCE'

type Pathfinder2eSpellEffectValueHint = {
  value: number
  source: 'REFERENCE_LABEL'
} | null

type Pathfinder2eSpellEffectMapping = {
  contentId: string
  occurrenceIndex: number
  definitionKey: string
  kind: 'condition' | 'effect' | 'affliction'
  potential: boolean
  evidence: Pathfinder2eSpellEffectEvidence
  outcome: Pathfinder2eSpellEffectOutcome
  valueHint: Pathfinder2eSpellEffectValueHint
  source: {
    sourcePath: string
    sourceIndex: number
    label: string | null
    ownerSourceId: string | null
  }
  schemaVersion: 1
}
```

A forma física pode variar se o Architect aprovar outra representação equivalente, mas os significados acima precisam permanecer disponíveis.

## 5. Identidade

A Spell é identificada pelo `contentId` já existente.

A definição é identificada exclusivamente pelo contrato do QH-EFF-005:

```text
definitionKey = {sourcePack}:{sourceId}
```

Nenhum relacionamento é resolvido por nome traduzido, slug aproximado ou fuzzy matching.

`occurrenceIndex` preserva cada ocorrência separadamente dentro da mesma Spell. Duas referências à mesma definição em resultados diferentes não são deduplicadas.

## 6. Classificação conservadora de evidência

### 6.1. Degree of Success na própria linha

Uma referência é `DEGREE_OF_SUCCESS` quando:

- está em `system.description.value` na fonte reconstruída; e
- sua ocorrência correspondente na descrição normalizada `en-US` está na mesma linha/bloco textual iniciado por exatamente um dos marcadores canônicos:

```text
Critical Success
Success
Failure
Critical Failure
```

Mapeamento:

```text
Critical Success  -> CRITICAL_SUCCESS
Success           -> SUCCESS
Failure           -> FAILURE
Critical Failure  -> CRITICAL_FAILURE
```

Esse reconhecimento é um parser estrutural restrito do formato editorial PF2e, não uma inferência livre sobre o significado da frase.

Uma referência `DEGREE_OF_SUCCESS` é `potential = true`.

### 6.2. Referência standalone imediatamente após Degree of Success

O source PF2e também possui Spells em que o texto do resultado vem em uma linha e o link para o Effect correspondente aparece sozinho na linha imediatamente seguinte.

Exemplo normalizado de `Outcast's Curse`:

```text
Success For 10 minutes, ...
Spell Effect: Outcast's Curse (Success)
Failure As success, but the effect is permanent.
Spell Effect: Outcast's Curse (Failure)
```

Uma referência é `DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE` somente quando:

1. sua própria linha contém apenas o token estrutural de alinhamento da referência;
2. a linha não vazia imediatamente anterior começa com exatamente um dos quatro marcadores canônicos do item 6.1;
3. não existe qualquer outra linha/conteúdo intermediário.

O token estrutural é definido em `spell-effect-alignment-policy.md`: label explícito quando existe; caso contrário, `target.compendiumKey` exato. Isso serve somente para alinhamento e nunca reescreve `source.label`.

Nesse caso:

```text
potential = true
outcome = outcome da linha imediatamente anterior
```

A associação é puramente posicional/editorial. O mapper não usa `(Success)`/`(Failure)` presente no nome do Effect para inferir o outcome.

Se a linha anterior não satisfizer exatamente essa regra, a referência volta à regra standalone genérica do item 6.3.

### 6.3. Referência standalone sem Degree of Success associado

Uma referência é `STANDALONE_REFERENCE` quando, após normalização de whitespace, a linha/bloco em que ela aparece contém somente o token estrutural exato da referência e ela não satisfaz o item 6.2.

Exemplos típicos:

```text
Spell Effect: Aerial Form
Spell Effect: Untamed Shift
```

Uma referência standalone resolvida como `condition`, `effect` ou `affliction` é `potential = true` e recebe `outcome = null`.

### 6.4. Referência inline sem evidência suficiente

Uma referência dentro de descrição que não satisfaz 6.1, 6.2 nem 6.3 é `REFERENCE_ONLY` e recebe:

```text
potential = false
outcome = null
```

Isso não afirma que a referência seja irrelevante. Significa apenas que o QH-EFF-006 não possui evidência estrutural suficiente para promovê-la a efeito potencial sem interpretar linguagem natural.

`Aerial Form -> Clumsy` é o caso de regressão obrigatório dessa categoria.

### 6.5. Referência fora da descrição

Uma referência semântica resolvida cujo `sourcePath` não corresponde à descrição é `NON_DESCRIPTION_REFERENCE` e não é promovida automaticamente:

```text
potential = false
outcome = null
```

Cards posteriores podem definir política específica para um campo estruturado concreto. O QH-EFF-006 não interpreta Rule Elements ou outros campos apenas por conterem UUIDs.

## 7. Associação entre referência e descrição normalizada

O QH-EFF-004 preserva a ordem das ocorrências e a identidade estrutural. A normalização histórica removeu o UUID, mas preservou o texto legível e a ordem editorial.

Para referências de `system.description.value`, o mapper:

1. ordena referências por `sourceIndex`;
2. determina o token estrutural exato conforme `spell-effect-alignment-policy.md`;
3. percorre a descrição original `en-US` da Spell na mesma ordem;
4. localiza cada token de forma sequencial, nunca retrocedendo na string;
5. determina a linha/bloco textual da ocorrência;
6. quando a linha é standalone, pode observar somente a linha não vazia imediatamente anterior para a regra 6.2;
7. falha de forma segura para `REFERENCE_ONLY` se não puder alinhar exatamente a ocorrência.

A falha de alinhamento não autoriza busca fuzzy, tradução reversa ou inferência por IA.

A linha anterior só pode fornecer **contexto estrutural de Degree of Success** para uma referência standalone. Ela não pode transformar uma referência inline arbitrária em efeito potencial.

## 8. Valores de Conditions valorizadas

O QH-EFF-006 pode preservar um **value hint**, mas não cria a instância ativa.

O hint só existe quando:

1. a definição do QH-EFF-005 é `condition`;
2. `conditionValue.isValued = true`;
3. o **label explícito preservado** segue exatamente:

```text
<canonical definition name> <positive integer>
```

Exemplo:

```text
Frightened 1 -> valueHint 1
Frightened 2 -> valueHint 2
Frightened 3 -> valueHint 3
```

A origem fica explícita como `REFERENCE_LABEL`.

O fallback por `target.compendiumKey` definido na política de alinhamento não participa de value hints.

Não existe regex genérica sobre qualquer número da descrição. Conditions não valorizadas nunca recebem value hint por esse mecanismo.

O hint não é aplicado automaticamente e QH-EFF-009 continua responsável por definir o fluxo de materialização da instância.

## 9. Exemplos obrigatórios

### Agonizing Despair

Esperado:

```text
Frightened 1 -> potential, SUCCESS, valueHint 1
Frightened 2 -> potential, FAILURE, valueHint 2
Frightened 3 -> potential, CRITICAL_FAILURE, valueHint 3
```

`Critical Success` não possui referência e, portanto, não gera mapping artificial.

### Aerial Form

Esperado:

```text
Clumsy                    -> REFERENCE_ONLY, potential false
Spell Effect: Aerial Form -> STANDALONE_REFERENCE, potential true, outcome null
```

As duas referências usam UUID sem label explícito no source congelado; o alinhamento ocorre pelo `target.compendiumKey`, enquanto `source.label` permanece `null`.

Isso impede o falso positivo de aplicar `Clumsy` por conjurar a Spell.

### Outcast's Curse

Esperado para os links standalone associados aos resultados:

```text
Spell Effect: Outcast's Curse (Success)
  -> DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE
  -> potential true
  -> SUCCESS

Spell Effect: Outcast's Curse (Failure)
  -> DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE
  -> potential true
  -> FAILURE
```

Essas referências também possuem label explícito ausente no source congelado e são alinhadas pelo `target.compendiumKey` exato.

O texto `(Success)`/`(Failure)` do token não participa da classificação; a evidência vem exclusivamente da linha de Degree of Success imediatamente anterior.

## 10. Cobertura

Toda Spell do catálogo atual que possua referência QH-EFF-004 resolvida como `condition`, `effect` ou `affliction` deve ter cada ocorrência contabilizada por exatamente um mapping.

Referências QH-EFF-004 sem `target.type` continuam fora do conjunto semântico confirmado e não são promovidas.

A cobertura deve ser verificável por teste:

```text
semantic resolved spell references == mapped occurrences
```

A métrica separa:

- `potential = true`;
- `potential = false` por evidência insuficiente.

O segundo grupo não é descartado silenciosamente.

## 11. API interna PF2e

Expor uma leitura interna equivalente a:

```ts
getPathfinder2eSpellEffectMappings(contentId)
listPathfinder2ePotentialSpellEffects(contentId)
```

A primeira retorna todas as ocorrências semânticas contabilizadas; a segunda retorna apenas `potential = true`.

Nenhuma rota HTTP pública é necessária neste card.

## 12. Localização

Contexto e classificação são produzidos a partir do conteúdo mecânico/original `en-US`.

A tradução `pt-BR` não participa da resolução, classificação, outcome ou value hint.

Isso evita que uma mudança editorial de tradução altere mecânica ou identidade.

## 13. Permissões

O mapeamento é conteúdo somente leitura da engine PF2e e não possui operação mutável de usuário.

Permissões para aplicar/remover instâncias pertencem ao QH-EFF-009.

## 14. Fora de escopo

O QH-EFF-006 não:

- resolve saving throw ou spell attack;
- decide qual Degree of Success ocorreu;
- aplica `CampaignActorEffect`;
- altera ficha, Actor ou Token;
- executa Rule Elements;
- calcula duração, stacking, imunidade ou override;
- interpreta referência inline ambígua por linguagem natural;
- usa IA para classificar referências;
- infere outcome por palavras existentes dentro do nome/label de um Effect;
- promove Item unresolved do QH-EFF-004;
- altera Spells originais ou traduções;
- cria nova importação de conteúdo;
- implementa UI pública.

## 15. Arquitetura

Toda semântica permanece em:

```text
apps/api/src/game_systems/pathfinder_2e/
```

O VTT Core não conhece:

- Degree of Success do PF2e;
- `Frightened`;
- `Spell Effect:*`;
- UUID/Compendium Foundry;
- value hints PF2e;
- regras de classificação desta Spec.

QH-EFF-006 apenas prepara metadata engine-only para QH-EFF-009.

ADR aplicável: `ADR-0005`.

O BA não identifica nova decisão estrutural além da fronteira já aceita, mas Architecture Review permanece obrigatório após refinamentos de contexto posicional/alinhamento.

## 16. Critérios de aceite

- **AC01** — usa exclusivamente Spells já importadas, QH-EFF-004 e QH-EFF-005; nenhuma nova importação;
- **AC02** — source lock permanece `01114da5851f31404078d8020809b13e4000bc4b`;
- **AC03** — toda referência de Spell resolvida como `condition/effect/affliction` é contabilizada exatamente uma vez;
- **AC04** — target unresolved do QH-EFF-004 não é promovido;
- **AC05** — `definitionKey` é `{sourcePack}:{sourceId}`;
- **AC06** — ocorrências repetidas da mesma definição não são deduplicadas;
- **AC07** — Degree of Success é reconhecido somente pelos quatro marcadores canônicos definidos nesta Spec;
- **AC08** — referência na própria linha de Degree of Success é `potential = true` com outcome correspondente;
- **AC09** — referência standalone imediatamente após linha de Degree of Success herda o outcome somente por essa relação posicional e usa `DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE`;
- **AC10** — referência standalone sem Degree de Success associado é `potential = true`, `STANDALONE_REFERENCE`, `outcome = null`;
- **AC11** — referência inline sem evidência suficiente é preservada como `REFERENCE_ONLY`, nunca promovida automaticamente;
- **AC12** — referência semântica fora da descrição é preservada como `NON_DESCRIPTION_REFERENCE`, sem interpretar Rule Element;
- **AC13** — `Agonizing Despair` produz três mappings de Frightened com SUCCESS/FAILURE/CRITICAL_FAILURE;
- **AC14** — os três labels de Agonizing Despair preservam value hints 1/2/3;
- **AC15** — `Aerial Form -> Clumsy` não é efeito potencial;
- **AC16** — `Spell Effect: Aerial Form` é efeito potencial standalone com `outcome = null`;
- **AC17** — `Outcast's Curse (Success)` e `(Failure)` preservam outcomes SUCCESS e FAILURE pela linha imediatamente anterior;
- **AC18** — o texto `(Success)`/`(Failure)` presente no token não é usado para inferir outcome;
- **AC19** — Conditions não valorizadas não recebem value hint por número textual;
- **AC20** — falha de alinhamento não aciona fuzzy matching/IA e não gera falso positivo;
- **AC21** — nenhum save/ataque é resolvido e nenhum efeito é aplicado;
- **AC22** — originais e traduções permanecem byte-identical;
- **AC23** — nenhuma semântica PF2e nova vaza para VTT Core;
- **AC24** — resultado é determinístico para os mesmos dados versionados;
- **AC25** — API interna permite listar todos os mappings e somente os potenciais;
- **AC26** — testes e CI cobrem regressões de Aerial Form, Agonizing Despair e Outcast's Curse;
- **AC27–AC31** — critérios adicionais de UUID sem label explícito são definidos em `spell-effect-alignment-policy.md` e fazem parte obrigatória do aceite deste card.

## 17. Questões abertas

Nenhuma questão de produto bloqueante após os refinamentos de Outcast's Curse e UUID sem label explícito.

A política continua deliberadamente conservadora: referências inline ambíguas permanecem visíveis como não confirmadas em vez de serem adivinhadas. Cobertura semântica total das referências é obrigatória; recall de aplicações não estruturadas pode ser refinado posteriormente sem quebrar o contrato.

```text
BA: READY
Architecture review required: YES
Open product questions: 0
```
