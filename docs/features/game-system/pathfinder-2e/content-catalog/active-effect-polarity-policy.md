# QH-EFF-005 — Política de polaridade de definições PF2e

Status: **BA READY**

Complementa e, nos pontos explicitamente tratados abaixo, **refina** `active-effect-definitions.md`.

Card: `QH-EFF-005`

Source lock: `01114da5851f31404078d8020809b13e4000bc4b`

> **Evolução vigente — QH-EFF-012:** as decisões editoriais de polaridade deste documento permanecem válidas, mas a política histórica de apresentação nullable descrita mais abaixo foi substituída pelo QH-EFF-012. O catálogo agora materializa metadados canônicos a partir do source travado e versiona as polaridades por `definitionKey`; não existe fallback de polaridade em runtime. `iconUrl` continua local/fallback, enquanto o caminho canônico da imagem pode ser preservado como metadata de origem.

## Decisão

A polaridade de `CampaignActorEffect` continua sendo metadata visual genérica. O catálogo PF2e não usa texto, Rule Elements, sinais numéricos, nome aproximado, IA ou qualquer outra heurística em runtime para inferi-la.

Para o QH-EFF-005, a classificação editorial das definições segue estas regras explícitas e versionadas:

1. **Conditions canônicas** usam o mapa individual aprovado em `active-effect-definitions.md`.
2. **Afflictions** incluídas por referência estrutural resolvida do QH-EFF-004 são `HARMFUL` no nível de definição. Uma affliction PF2e representa uma progressão adversa sobre o portador; esta classificação é apenas visual e não executa a affliction.
3. **Effects** incluídos por referência estrutural resolvida do QH-EFF-004 são `NEUTRAL` no nível de definição.

A regra 3 é deliberada: `effect` é um documento genérico do PF2e/Foundry e pode representar buff, debuff, transformação, aura, stance ou estado cujo sentido depende de origem, alvo e resultado. O QH-EFF-005 não possui contexto de aplicação suficiente para classificar cada instância sem interpretar a mecânica que pertence aos cards QH-EFF-006/007/008/009.

`NEUTRAL` aqui **não é fallback silencioso**. É a classificação editorial explícita de toda definição cujo `kind = effect` neste card. No estado vigente após QH-EFF-012, essa decisão é materializada individualmente em manifesto versionado por `definitionKey`; novos targets sem classificação explícita falham na geração.

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

## Metadados de apresentação — comportamento histórico do QH-EFF-005

A identidade estrutural é obrigatória e nunca depende do nome:

```text
definitionKey = {sourcePack}:{sourceId}
```

No momento da entrega original do QH-EFF-005, o catálogo ainda não rematerializava os documentos do source PF2e. Por isso, quando a metadata completa do target não estava versionada localmente, a implementação admitia `description`, `iconUrl` e `group` ausentes/`null`.

**Esse comportamento de apresentação foi substituído pelo QH-EFF-012.** O estado vigente é:

- nome, descrição canônica disponível, publicação, grupo, valor de Condition e caminho da imagem de origem são materializados deterministicamente a partir do source travado;
- `description` permanece uma string; quando o documento canônico realmente não possui descrição, a ausência é preservada sem inventar conteúdo;
- `iconUrl` continua `null` até existir resolução segura para asset local do QuestHub; o caminho da imagem canônica é apenas metadata de origem;
- não existe acesso ao Foundry/PF2e em runtime;
- nenhum dado de apresentação é fabricado por aproximação, scraping, IA ou inferência textual.

Para Conditions canônicas, `conditionValue` permanece metadata explícita versionada a partir da estrutura congelada do source PF2e; não se extrai intensidade de labels como `Frightened 2`.

## Critérios adicionais

- **AC19** — toda definição `effect` incluída pelo QH-EFF-004 recebe explicitamente `NEUTRAL` no catálogo-base;
- **AC20** — toda definição `affliction` incluída pelo QH-EFF-004 recebe explicitamente `HARMFUL` no catálogo-base;
- **AC21** — nenhum target `effect`/`affliction` exige inferência textual para entrar no catálogo;
- **AC22 (histórico QH-EFF-005)** — a ausência de metadata ainda não importada não autorizava fabricação de dados; QH-EFF-012 posteriormente passou a materializar a metadata canônica disponível;
- **AC23** — cards posteriores podem escolher polaridade de instância por mapeamento explícito sem alterar a polaridade editorial da definição-base;
- **AC24** — nenhum comportamento dessa política é implementado no VTT Core;
- **AC25** — uma definição semanticamente válida não é descartada somente porque metadata opcional de apresentação não havia sido importada historicamente; após QH-EFF-012 a metadata canônica disponível é preservada.

## Resultado do BA

```text
BA: READY
Architecture review required: YES
Open product questions: 0
```
