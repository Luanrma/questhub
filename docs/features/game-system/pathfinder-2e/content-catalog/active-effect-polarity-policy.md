# QH-EFF-005 — Política de polaridade de definições PF2e

Status: **BA READY**

Complementa: `active-effect-definitions.md`

Card: `QH-EFF-005`

## Decisão

A polaridade de `CampaignActorEffect` continua sendo metadata visual genérica. O catálogo PF2e não usa texto, Rule Elements, sinais numéricos, nome aproximado, IA ou qualquer outra heurística em runtime para inferi-la.

Para o QH-EFF-005, a classificação editorial das definições segue estas regras explícitas e versionadas:

1. **Conditions canônicas** usam o mapa individual aprovado em `active-effect-definitions.md`.
2. **Afflictions** incluídas por referência estrutural resolvida do QH-EFF-004 são `HARMFUL` no nível de definição. Uma affliction PF2e representa uma progressão adversa sobre o portador; esta classificação é apenas visual e não executa a affliction.
3. **Effects** incluídos por referência estrutural resolvida do QH-EFF-004 são `NEUTRAL` no nível de definição.

A regra 3 é deliberada: `effect` é um documento genérico do PF2e/Foundry e pode representar buff, debuff, transformação, aura, stance ou estado cujo sentido depende de origem, alvo e resultado. O QH-EFF-005 não possui contexto de aplicação suficiente para classificar cada instância sem interpretar a mecânica que pertence aos cards QH-EFF-006/007/008/009.

`NEUTRAL` aqui **não é fallback silencioso**. É a classificação editorial explícita de toda definição cujo `kind = effect` neste card.

## Polaridade da instância futura

Quando QH-EFF-006/007/008 mapearem como uma Spell, Item, Creature ou Hazard produz um efeito e QH-EFF-009 materializar `CampaignActorEffect`, o Game System PF2e poderá definir a polaridade da **instância** com base naquele mapeamento explícito. Essa decisão contextual não altera a definição-base e não pertence ao QH-EFF-005.

Exemplo conceitual:

```text
Definition: spell-effects:<sourceId>
kind: effect
polarity: NEUTRAL

Mapping futuro de uma Spell:
resultado X -> aplicar definitionKey Y ao alvo -> instance polarity HARMFUL
```

O VTT Core continua recebendo apenas `BENEFICIAL | HARMFUL | NEUTRAL`; nunca interpreta a razão da classificação.

## Metadados de apresentação

A identidade estrutural é obrigatória e nunca depende do nome:

```text
definitionKey = {sourcePack}:{sourceId}
```

Para targets `effect`/`affliction` que não possuem documento completo importado no catálogo QuestHub, QH-EFF-005 pode expor:

- `name` derivado do `compendiumKey` preservado no UUID estrutural;
- `description = null` quando a descrição do target não está versionada no QuestHub;
- `iconUrl = null` quando não existe asset local seguro;
- `group = null` quando não há metadata estrutural versionada disponível.

Não é permitido preencher esses campos por aproximação, scraping ou acesso ao Foundry em runtime. A ausência é preferível a dados inventados.

Para Conditions canônicas, `conditionValue` permanece metadata explícita derivada da estrutura congelada do source PF2e; não se extrai intensidade de labels como `Frightened 2`.

## Critérios adicionais

- **AC19** — toda definição `effect` incluída pelo QH-EFF-004 recebe explicitamente `NEUTRAL` no catálogo-base;
- **AC20** — toda definição `affliction` incluída pelo QH-EFF-004 recebe explicitamente `HARMFUL` no catálogo-base;
- **AC21** — nenhum target `effect`/`affliction` exige inferência textual para entrar no catálogo;
- **AC22** — ausência de descrição/ícone/group em target não importado é representada por `null`, nunca por dado fabricado;
- **AC23** — cards posteriores podem escolher polaridade de instância por mapeamento explícito sem alterar a polaridade editorial da definição-base;
- **AC24** — nenhum comportamento dessa política é implementado no VTT Core.

## Resultado do BA

```text
BA: READY
Architecture review required: YES
Open product questions: 0
```
