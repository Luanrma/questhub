# QH-EFF-006 — Política de alinhamento de referências de Spell PF2e

Status: **BA READY**

Complementa e refina `spell-effect-mappings.md` no alinhamento entre referências QH-EFF-004 e o texto normalizado `en-US` **e no limite de evidência permitido quando esse alinhamento depende de um UUID sem label explícito**.

Card: `QH-EFF-006`

Source lock: `01114da5851f31404078d8020809b13e4000bc4b`

## Problema confirmado

Foundry permite `@UUID[...]` sem label explícito. Nesses casos, QH-EFF-004 preserva corretamente:

```text
label = null
target.compendiumKey = <nome estrutural contido no UUID>
```

A normalização histórica, porém, mantém no texto legível o nome implícito do target. Isso ocorre nos casos obrigatórios deste card:

```text
Aerial Form
  Clumsy                         -> label null, compendiumKey Clumsy
  Spell Effect: Aerial Form      -> label null, compendiumKey Spell Effect: Aerial Form

Outcast's Curse
  Unfriendly / Indifferent       -> label null, compendiumKey correspondente
  Spell Effect ... (Success)     -> label null, compendiumKey correspondente
  Spell Effect ... (Failure)     -> label null, compendiumKey correspondente
```

Descartar todos esses casos por `label = null` impediria o alinhamento estrutural. Por outro lado, usar o nome implícito como prova mecânica criaria falsos positivos: em `Outcast's Curse`, `Indifferent` aparece como estado comparativo dentro do texto de Success e não deve ser promovido automaticamente só por estar nessa linha.

## Token estrutural de alinhamento

Para localizar a ocorrência correspondente na descrição normalizada, o mapper define:

```text
alignmentToken =
  reference.label, quando label explícito existe;
  caso contrário reference.target.compendiumKey, quando existe estruturalmente no UUID;
  caso contrário null.
```

Regras obrigatórias:

1. `target.compendiumKey` só é usado como **token textual exato de alinhamento**;
2. ele não altera `source.label`, que continua refletindo exatamente o QH-EFF-004 e pode permanecer `null`;
3. não é permitido fallback para tradução `pt-BR`, slug aproximado, nome fuzzy, IA ou pesquisa externa;
4. o token precisa aparecer exatamente na descrição `en-US` para ser alinhado;
5. ambiguidade continua falhando de forma segura para `REFERENCE_ONLY`;
6. `target.compendiumKey` não é usado para determinar Degree of Success; outcome continua vindo somente das regras posicionais da Spec principal;
7. **alinhamento por `compendiumKey` não é, sozinho, evidência suficiente para promover uma referência inline na própria linha de Degree of Success**;
8. uma referência `label = null` pode continuar sendo potencial quando satisfaz uma evidência independente e mais forte, como `STANDALONE_REFERENCE` ou `DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE`.

Logo, em `Outcast's Curse`:

```text
Unfriendly / Indifferent
  -> alinháveis pelo compendiumKey
  -> inline em Success com label null
  -> REFERENCE_ONLY
  -> potential false

Spell Effect: Outcast's Curse (Success)
  -> alinhável pelo compendiumKey
  -> standalone após linha Success
  -> DEGREE_OF_SUCCESS_FOLLOWING_REFERENCE
  -> potential true
```

## Value hint continua mais restrito

O fallback de alinhamento **não** altera a regra de value hint.

`valueHint` exige `reference.label` explícito no formato canônico aprovado:

```text
<canonical condition name> <positive integer>
```

Logo:

```text
label = null + compendiumKey = Frightened
```

não produz value hint.

Essa separação evita transformar um nome implícito do UUID em dado mecânico numérico.

## Critérios adicionais

- **AC27** — referência com `label = null` pode ser alinhada pelo `target.compendiumKey` exato;
- **AC28** — `source.label` permanece `null` nesses mappings;
- **AC29** — fallback por `compendiumKey` não produz value hint;
- **AC30** — ausência de label e compendiumKey mantém a ocorrência não confirmada, sem fuzzy matching;
- **AC31** — o fallback por `compendiumKey` permanece somente alinhamento: referência inline na própria linha de Degree of Success com `label = null` não é promovida por esse fato; `Aerial Form -> Clumsy` e `Outcast's Curse -> Unfriendly/Indifferent` permanecem `REFERENCE_ONLY`, enquanto os Spell Effects standalone de Aerial Form e Outcast's Curse continuam potenciais pelos critérios estruturais da Spec principal, sem exceções por nome.

## Resultado do BA

```text
BA: READY
Architecture review required: YES
Open product questions: 0
```
