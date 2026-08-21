# Feature Spec — Referências estruturadas PF2e no importador

Status: **READY**

Card: `QH-EFF-004` — `https://trello.com/c/ROxrd49F/9-qh-eff-004-preservar-refer%C3%AAncias-sem%C3%A2nticas-de-efeitos-no-importador-pf2e`

Domínio: `Game System / Pathfinder 2e / Content Catalog / Importer`

Dependências: `QH-EFF-001` concluído. Esta entrega prepara `QH-EFF-005`, `QH-EFF-006`, `QH-EFF-007` e `QH-EFF-008`.

## Objetivo

Impedir que a normalização do catálogo Pathfinder 2e destrua referências estruturadas existentes no source original, principalmente referências utilizadas posteriormente para identificar Conditions, Effects e conceitos relacionados.

O importador deve continuar produzindo texto legível, mas também deve preservar separadamente o vínculo estrutural fornecido pela fonte. O importador não classifica o significado mecânico da referência e não aplica nenhum efeito.

## Problema atual

O importador converte comandos como:

```text
@UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 2}
```

em texto puro:

```text
Frightened 2
```

Essa conversão é correta para apresentação, porém atualmente o UUID é descartado. Depois da importação não é mais possível distinguir, com segurança, entre:

- texto que era um vínculo estrutural;
- texto comum que apenas menciona o mesmo termo.

Também existem referências equivalentes armazenadas diretamente como valores UUID no source, por exemplo Rule Elements com propriedade `uuid`.

## Princípios

1. **Texto e estrutura coexistem.** A descrição legível existente não é substituída por markup do source.
2. **Dado estrutural vence inferência textual.** Um termo escrito no texto não cria referência se o source não forneceu vínculo estruturado.
3. **O importador preserva, não interpreta.** `conditionitems`, `spell-effects`, `equipment-effects` e outros packs permanecem identificadores da fonte; sua classificação mecânica pertence aos cards seguintes.
4. **Todas as ocorrências são preservadas.** Referências repetidas ao mesmo alvo podem ter labels/valores/contextos diferentes e não são deduplicadas.
5. **Determinismo.** A mesma fonte bloqueada e a mesma versão do importador produzem exatamente as mesmas referências e ordem.
6. **Game System only.** Nenhum tipo ou regra PF2e é introduzido no VTT Core.

## Escopo

- criar um contrato PF2e compartilhado para referências estruturadas da fonte;
- preservar ocorrências de `@UUID[...]` existentes em qualquer string do documento source importado;
- preservar valores que já sejam UUIDs estruturados completos, inclusive referências usadas por Rule Elements;
- registrar o caminho estrutural no documento source onde a ocorrência foi encontrada;
- registrar a posição da ocorrência dentro da string source;
- preservar UUID, label explícito e sintaxe original da referência;
- decompor UUIDs de Compendium em package, pack, document type e compendium key quando a sintaxe permitir;
- quando o checkout local da fonte permitir resolver o alvo de forma exata, preservar também `sourceId`, `slug`, nome e tipo do documento alvo;
- preservar a identidade do objeto source mais próximo (`_id`, `name`, `type`) quando a referência estiver dentro de item/objeto incorporado;
- adicionar as referências ao `Pathfinder2eOriginalContentRecord` sem alterar o `data` mecânico nem o overlay de tradução;
- integrar a extração ao importador exaustivo atual;
- incrementar `importerVersion` porque o resultado de importação ganha metadados novos;
- cobrir o extrator/resolver e o contrato por testes determinísticos.

## Fora de escopo

- criar o catálogo PF2e de Conditions/Effects;
- afirmar que um pack representa `CONDITION`, `EFFECT`, `AFFLICTION`, buff ou debuff;
- aplicar efeitos a CampaignActor;
- gerar `CampaignActorEffect`;
- alterar HP, CA, saves, atributos, rolagens ou qualquer cálculo;
- inferir referência a partir de palavras como `Frightened`, `Slowed`, `Poison` ou equivalentes;
- interpretar Success/Failure/Critical Failure;
- decidir stacking, duração ou intensidade;
- expor referência estruturada diretamente no VTT Core;
- alterar banco, Prisma, API HTTP ou realtime;
- reescrever traduções `pt-BR`;
- reimportar em massa todos os lotes históricos como efeito colateral desta entrega.

Lotes históricos continuam válidos porque `sourceReferences` é opcional. Ao reproduzir um lote com a fonte bloqueada e a nova versão do importador, as referências passam a ser emitidas deterministicamente sem alterar a seleção congelada nem os campos traduzíveis.

## Contrato

O catálogo PF2e passa a possuir um contrato de referência da fonte semelhante a:

```ts
type Pathfinder2eSourceReferenceSyntax =
  | 'INLINE_UUID'
  | 'UUID_VALUE'

type Pathfinder2eSourceReferenceTarget = {
  uuid: string
  package?: string
  sourcePack?: string
  documentType?: string
  compendiumKey?: string
  sourceId?: string
  slug?: string
  name?: string
  type?: string
}

type Pathfinder2eSourceReferenceOwner = {
  sourceId?: string
  name?: string
  type?: string
}

type Pathfinder2eSourceReference = {
  syntax: Pathfinder2eSourceReferenceSyntax
  sourcePath: string
  sourceIndex: number
  uuid: string
  label: string | null
  target: Pathfinder2eSourceReferenceTarget
  owner?: Pathfinder2eSourceReferenceOwner
}
```

O formato final pode variar apenas em detalhes locais de implementação que não alterem as garantias acima.

### `sourcePath`

`sourcePath` usa JSON Pointer determinístico e aponta para a string no documento source que continha a referência.

Exemplos:

```text
/system/description/value
/items/3/system/description/value
/items/5/system/rules/0/uuid
```

Segmentos escapam `~` como `~0` e `/` como `~1`.

### `sourceIndex`

Para `INLINE_UUID`, representa o índice UTF-16 onde a ocorrência `@UUID[...]` começa na string source original.

Para `UUID_VALUE`, o valor é `0` porque a string inteira é a referência.

### `label`

- `@UUID[...]{Frightened 2}` → `Frightened 2`;
- `@UUID[...]` sem label → `null`;
- UUID armazenado diretamente como valor → `null`.

O label não é usado para identificar ou resolver o alvo.

## Parse de UUID

Para UUIDs de Compendium com formato:

```text
Compendium.<package>.<pack>.<documentType>.<key>
```

o importador preserva:

```text
package       = <package>
sourcePack    = <pack>
documentType  = <documentType>
compendiumKey = <key>
```

O UUID bruto permanece obrigatório mesmo quando a decomposição for possível.

UUIDs que não correspondam a esse formato continuam preservados de forma opaca em `uuid`; o importador não rejeita a entrada apenas porque não conhece a estrutura do destino.

## Resolução exata do alvo

A resolução adicional de `sourceId`/`slug` é oportunista, determinística e baseada exclusivamente no checkout source já bloqueado.

Para uma referência interna `Compendium.pf2e.<pack>...`:

1. localizar o pack correspondente sob o checkout source;
2. indexar documentos por identificadores estruturais disponíveis na própria fonte, como `_id`, nome, slug explícito e chave de arquivo;
3. resolver apenas quando houver correspondência exata e não ambígua;
4. preencher `sourceId`, `slug`, `name` e `type` somente com valores existentes no documento alvo;
5. se o alvo não puder ser resolvido exatamente, manter UUID/pack/key e não inferir nada pelo label.

Uma falha de resolução não apaga a referência original.

## Coleta no documento source

A coleta percorre recursivamente o documento JSON original antes da normalização textual.

### Strings com inline UUID

Todas as ocorrências são extraídas, inclusive mais de uma ocorrência na mesma string.

### Strings que são UUID integral

Uma string que representa integralmente um UUID estruturado é registrada como `UUID_VALUE`. Isso cobre contratos source como Rule Elements sem depender do nome da propriedade.

### Objeto proprietário

Durante a travessia, o extrator mantém o objeto ancestral mais próximo que possua identidade source (`_id`, `name` ou `type`). Quando existir, essa identidade é copiada para `owner`.

O objetivo é permitir que cards posteriores saibam que a referência veio, por exemplo, de uma ação incorporada específica, sem o QH-EFF-004 precisar interpretar a ação.

## Ordem e duplicidade

O array final é ordenado deterministicamente por:

1. `sourcePath`;
2. `sourceIndex`;
3. ordem da ocorrência quando necessário para desempate.

Não há deduplicação por UUID, target ou label.

Exemplo válido:

```text
Success          -> Frightened 1
Failure          -> Frightened 2
Critical Failure -> Frightened 3
```

pode produzir três referências distintas ao mesmo `compendiumKey`, preservando três labels distintos.

## Integração com OriginalContentRecord

O contrato passa a aceitar:

```ts
type Pathfinder2eOriginalContentRecord<TData = unknown> = {
  contentId: string
  domain: Pathfinder2eContentDomain
  locale: 'en-US'
  source: Pathfinder2eSourceIdentity
  image?: Pathfinder2eContentImage
  sourceHash: string
  translatableHash: string
  sourceReferences?: readonly Pathfinder2eSourceReference[]
  data: TData
}
```

Regras:

- `sourceReferences` é metadata da importação, não campo traduzível;
- `translatableHash` continua derivado apenas dos dados traduzíveis/mecânicos já usados pelo importador;
- `sourceHash` continua representando o source original e, portanto, já detecta alteração nos UUIDs de origem;
- ausência de referências omite `sourceReferences` em vez de gerar ruído com array vazio;
- registros históricos sem o campo continuam válidos.

## Texto normalizado

A função atual que gera descrição legível continua convertendo UUID inline para seu label explícito ou fallback legível.

A nova coleta ocorre **antes** dessa conversão.

Consequência:

```text
source:
The target is @UUID[Compendium.pf2e.conditionitems.Item.Frightened]{Frightened 2}.

normalized description:
The target is Frightened 2.

sourceReferences:
- uuid: Compendium.pf2e.conditionitems.Item.Frightened
  label: Frightened 2
```

Não é permitido manter markup `@UUID` dentro do texto apresentado apenas para preservar a referência.

## Comportamento por domínio

A coleta é aplicada ao documento source inteiro antes da criação de cada `OriginalContentRecord`:

- `SPELL`: documento completo da spell;
- `ITEM`: documento completo do item;
- `BESTIARY`: documento completo da criatura ou hazard, incluindo objetos incorporados.

Portanto, a preservação não depende de o campo já possuir representação visual no catálogo atual.

## Determinismo e source lock

- o extrator não usa rede;
- a resolução consulta apenas o checkout local recebido pelo importador;
- nenhuma resolução depende de locale, tradução ou estado da Campaign;
- chaves de índice são construídas deterministicamente;
- correspondências ambíguas não são escolhidas arbitrariamente;
- `importerVersion` deve ser incrementada;
- seleção congelada, `contentId`, `source.sourceId` e `source.slug` permanecem inalterados.

## Compatibilidade

- nenhuma migration de banco;
- nenhuma alteração de API pública do VTT;
- nenhum registro antigo deixa de compilar por ausência de `sourceReferences`;
- providers atuais podem ignorar o novo campo;
- cards QH-EFF-005/006/007/008 passam a poder consumir a metadata diretamente dentro do módulo PF2e.

## Regras

1. Nenhuma palavra-chave cria referência.
2. `label` nunca é usado para localizar o alvo.
3. Referência não resolvida continua preservada.
4. Referência repetida continua repetida.
5. A coleta ocorre antes de `plainText()` destruir o markup.
6. A apresentação textual atual permanece legível e sem runtime markup.
7. O VTT Core não importa o novo contrato.
8. Nenhum efeito é aplicado automaticamente.
9. Nenhum conteúdo mecânico é modificado a partir da referência.
10. O importador não converte pack em classificação mecânica.

## Critérios de aceite

### AC-01 — Inline UUID preservado

Um `@UUID[...]` existente no source produz `Pathfinder2eSourceReference` e o texto normalizado continua legível.

### AC-02 — UUID value preservado

Um UUID armazenado diretamente como valor source também é preservado sem depender do nome da propriedade.

### AC-03 — Múltiplas ocorrências

Duas ou mais referências na mesma string são preservadas separadamente e na ordem determinística.

### AC-04 — Duplicidade intencional

Referências repetidas ao mesmo UUID com labels diferentes não são deduplicadas.

### AC-05 — Nenhuma inferência textual

Texto `Frightened 2` sem referência estruturada não gera `sourceReference`.

### AC-06 — Target de Compendium

UUID interno de Compendium preserva package, pack, document type e compendium key.

### AC-07 — Resolução exata

Quando o alvo existir no checkout source e puder ser identificado sem ambiguidade, `sourceId` e `slug` são preservados a partir do documento alvo.

### AC-08 — Falha segura de resolução

Quando o alvo não existir ou for ambíguo, UUID e partes sintáticas permanecem preservados e nenhum ID/slug é inventado.

### AC-09 — Source path

A referência registra JSON Pointer correto até a string original.

### AC-10 — Embedded owner

Referência em objeto incorporado preserva a identidade source do objeto ancestral quando disponível.

### AC-11 — Três domínios

Spell, Item e Bestiary/Hazard utilizam o mesmo coletor source-level.

### AC-12 — OriginalContentRecord compatível

`sourceReferences` é opcional no contrato; registros históricos permanecem válidos.

### AC-13 — Hash de tradução inalterado

Adicionar metadata de referência não transforma referência em campo traduzível e não altera a regra vigente de `translatableHash`.

### AC-14 — Importer version

A versão do importador é incrementada para registrar a mudança de output.

### AC-15 — Sem classificação mecânica

O extrator não contém lista de Conditions concretas nem mapeamento de packs para buff/debuff/condition/effect/affliction.

### AC-16 — Sem vazamento para Core

Nenhum módulo genérico do VTT passa a importar o contrato PF2e.

### AC-17 — Sem automação

Nenhuma referência preservada cria ou altera `CampaignActorEffect`, ficha, Token ou cálculo.

## Testes esperados

- extrator puro com inline UUID e label;
- UUID integral;
- múltiplas referências/repetições;
- texto sem UUID não produz metadata;
- parse de Compendium;
- JSON Pointer/owner incorporado;
- resolver com pack fixture contendo `_id`, slug e nome;
- alvo inexistente/ambíguo não é inferido;
- teste estrutural verificando integração do coletor nos três normalizadores;
- teste do contrato opcional em `Pathfinder2eOriginalContentRecord`;
- teste garantindo que `plainText()` continua removendo markup runtime;
- teste garantindo ausência de nomes de Conditions concretas no extrator;
- `npm run check:architecture`;
- `npm run test:unit`;
- `npm run build:web`.

## Impacto arquitetural

- [ ] Nenhum
- [x] Usa arquitetura existente de Game System e catálogo PF2e
- [ ] Exige novo ADR

Architecture Review required: **YES**, porque `Pathfinder2eOriginalContentRecord` é um contrato compartilhado dentro do bounded context do catálogo PF2e e será ampliado com metadata estruturada de origem.

A revisão deve confirmar que essa extensão permanece inteiramente dentro do Game System e não cria novo contrato estrutural VTT ↔ Game System.

## Questões abertas

Nenhuma questão de produto bloqueante para QH-EFF-004.
