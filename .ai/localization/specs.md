# Submodulo: Pathfinder 2e Localization (Specs & Contracts)

## 1. Responsabilidade

Definir contratos e regras para traducao/localizacao de todo conteudo Pathfinder 2e do QuestHub usando:

```txt
dados canonicos en-US
+
overlays pt-BR esparsos
+
adapters de resolucao
+
dicionarios globais
```

Este submodulo deve orientar implementacao de localizacao em todos os modulos PF2e: Bestiario, Hazards, Spells, Items, Feats, Conditions e futuras categorias.

## 2. Contrato de Locale

```ts
export type QuestHubLocaleCode = 'en-US' | 'pt-BR'
```

`en-US` e o idioma canonico do conteudo importado.

`pt-BR` e idioma de overlay.

## 3. Contrato Base de Overlay

```ts
export type Pathfinder2eTranslationOverlay<TSheet = unknown> = {
  name?: string
  summary?: string
  description?: string
  sheet?: TSheet
}
```

Cada categoria pode especializar `sheet`.

## 4. Bestiario NPC

### 4.1 Contrato de traducao

```ts
export type Pathfinder2eBestiaryCreatureTranslation = {
  name?: string
  sheet?: {
    notes?: string
    attacks?: Record<string, Pathfinder2eAttackTranslation>
    actions?: Record<string, Pathfinder2eActionTranslation>
  }
}

export type Pathfinder2eAttackTranslation = {
  name?: string
}

export type Pathfinder2eActionTranslation = {
  name?: string
  detail?: string
}
```

### 4.2 Campos traduziveis

* `name`
* `sheet.notes`
* `sheet.attacks[].name`
* `sheet.actions[].name`
* `sheet.actions[].detail`

### 4.3 Campos nao traduziveis no overlay

* `level`
* `rarity`
* `size`
* `traits`
* `armorClass`
* `hitPoints`
* `speed`
* `saves`
* `abilities`
* `skills`
* `movement.land`
* `languages.values`
* `defenses`
* `attacks[].bonus`
* `attacks[].damage`
* `attacks[].traits`
* `actions[].kind`
* `actions[].traits`

Labels desses campos devem vir de dicionarios.

## 5. Hazards

### 5.1 Contrato de traducao

```ts
export type Pathfinder2eHazardTranslation = {
  name?: string
  sheet?: {
    description?: string
    trigger?: string
    disable?: string
    routine?: string
    reset?: string
    effect?: string
    stealthDetail?: string
    actions?: Record<string, Pathfinder2eActionTranslation>
  }
}
```

### 5.2 Campos traduziveis

* `name`
* `sheet.description`
* `sheet.trigger`
* `sheet.disable`
* `sheet.routine`
* `sheet.reset`
* `sheet.effect`
* `sheet.defenses.stealthDetail` ou campo equivalente
* `sheet.actions[].name`
* `sheet.actions[].detail`

### 5.3 Regra especifica

Hazard continua sendo entrada de catalogo, nao criatura. Overlays de Hazard nao devem introduzir token NPC, Character ou estado vivo de cena.

## 6. Spells

### 6.1 Contrato de traducao

```ts
export type Pathfinder2eSpellTranslation = {
  name?: string
  sheet?: {
    description?: string
    heightenedText?: string
    requirements?: string
    trigger?: string
    cost?: string
    rangeText?: string
    targetText?: string
    areaText?: string
    durationText?: string
    defenseText?: string
  }
}
```

### 6.2 Campos traduziveis

* `name`
* `sheet.description`
* `sheet.heightenedText`
* `sheet.requirements`
* `sheet.trigger`
* `sheet.cost`
* `sheet.rangeText`
* `sheet.targetText`
* `sheet.areaText`
* `sheet.durationText`
* `sheet.defenseText`

### 6.3 Campos nao traduziveis no overlay

* `level`
* `traits`
* `traditions`
* `school`
* `rank`
* `cast`
* `range.value`
* `area.value`
* `area.type`
* `duration.value`
* `save`
* `damage`

## 7. Items

### 7.1 Contrato de traducao

```ts
export type Pathfinder2eItemTranslation = {
  name?: string
  sheet?: {
    description?: string
    usage?: string
    activate?: string
    onset?: string
    duration?: string
    effect?: string
    special?: string
    destruction?: string
  }
}
```

### 7.2 Campos traduziveis

* `name`
* `sheet.description`
* `sheet.usage`
* `sheet.activate`
* `sheet.onset`
* `sheet.duration`
* `sheet.effect`
* `sheet.special`
* `sheet.destruction`

### 7.3 Campos nao traduziveis no overlay

* `level`
* `traits`
* `category`
* `price`
* `bulk`
* `quantity`
* `hardness`
* `hitPoints`
* `rarity`
* `usage.key`
* qualquer dado numerico ou mecanico.

## 8. Feats

### 8.1 Contrato de traducao

```ts
export type Pathfinder2eFeatTranslation = {
  name?: string
  sheet?: {
    description?: string
    prerequisites?: string
    trigger?: string
    requirements?: string
    special?: string
  }
}
```

## 9. Conditions

### 9.1 Contrato de traducao

```ts
export type Pathfinder2eConditionTranslation = {
  name?: string
  sheet?: {
    description?: string
    summary?: string
    valueText?: string
    overrides?: string
  }
}
```

## 10. Actions Gerais

### 10.1 Contrato de traducao

```ts
export type Pathfinder2eGeneralActionTranslation = {
  name?: string
  sheet?: {
    description?: string
    requirements?: string
    trigger?: string
    success?: string
    criticalSuccess?: string
    failure?: string
    criticalFailure?: string
  }
}
```

## 11. Demais Categorias

Para categorias ainda nao detalhadas, usar contrato minimo:

```ts
export type Pathfinder2eGenericEntryTranslation = {
  name?: string
  summary?: string
  description?: string
  sheet?: Record<string, string | Record<string, unknown> | undefined>
}
```

Esse contrato generico deve ser substituido por contrato especifico quando a categoria ganhar renderer proprio.

## 12. Arquivo de Registro de Overlays

Criar um ponto unico para carregar traducoes:

```ts
export const PATHFINDER_2E_PT_BR_TRANSLATION_REGISTRY = {
  npc: PATHFINDER_2E_BESTIARY_PT_BR_TRANSLATIONS,
  hazard: PATHFINDER_2E_HAZARD_PT_BR_TRANSLATIONS,
  spell: PATHFINDER_2E_SPELL_PT_BR_TRANSLATIONS,
  item: PATHFINDER_2E_ITEM_PT_BR_TRANSLATIONS,
  feat: PATHFINDER_2E_FEAT_PT_BR_TRANSLATIONS,
  condition: PATHFINDER_2E_CONDITION_PT_BR_TRANSLATIONS,
} as const
```

Se uma categoria ainda nao tiver overlay, usar objeto vazio.

## 13. Resolucao de Locale

```ts
export function localizePathfinder2eCatalogEntry(
  entry: Pathfinder2eCatalogEntry,
  locale: QuestHubLocaleCode,
): Pathfinder2eCatalogEntry {
  if (locale === 'en-US') return entry

  if (locale === 'pt-BR') {
    return localizeWithPtBrOverlay(entry)
  }

  return entry
}
```

## 14. Fallback

Regra universal:

```txt
valor traduzido pt-BR existe e nao esta vazio => usa pt-BR
caso contrario => usa en-US canonico
```

Implementacao:

```ts
export function textWithFallback(source: string | undefined, translated: string | undefined): string | undefined {
  if (translated && translated.trim().length > 0) return translated
  return source
}
```

## 15. Dicionarios Globais

Dicionarios devem seguir este formato:

```ts
export type Pathfinder2eDictionary = Record<QuestHubLocaleCode, Record<string, string>>
```

Exemplo:

```ts
export const PF2E_SKILL_LABELS = {
  'en-US': {
    athletics: 'Athletics',
    thievery: 'Thievery',
  },
  'pt-BR': {
    athletics: 'Atletismo',
    thievery: 'Ladinagem',
  },
} satisfies Pathfinder2eDictionary
```

Categorias minimas de dicionario:

* rarity;
* size;
* traits;
* saves;
* skills;
* abilities;
* damage types;
* action kinds;
* spell traditions;
* spell schools;
* item categories;
* conditions;
* currencies;
* area types;
* range units.

## 16. Regras de Traducao

A traducao deve preservar mecanica e sentido original.

Glossario inicial recomendado:

* `Strike` => `Golpe`
* `Reflex save` => `salvaguarda de Reflexos`
* `Fortitude save` => `salvaguarda de Fortitude`
* `Will save` => `salvaguarda de Vontade`
* `critical success` => `sucesso critico`
* `success` => `sucesso`
* `failure` => `falha`
* `critical failure` => `falha critica`
* `persistent damage` => `dano persistente`
* `piercing damage` => `dano perfurante`
* `bludgeoning damage` => `dano contundente`
* `slashing damage` => `dano cortante`
* `unarmed Strike` => `Golpe desarmado`
* `melee Strike` => `Golpe corpo a corpo`
* `ranged Strike` => `Golpe a distancia`
* `Stride` => `Andar`
* `Interact` => `Interagir`
* `Effect` => `Efeito`
* `Requirements` => `Requisitos`
* `Trigger` => `Gatilho`
* `Frequency` => `Frequencia`

Se houver glossario oficial ou decisao posterior do projeto, o glossario do projeto prevalece.

## 17. Criterio para Entrada Traduzida

Uma entrada e considerada traduzida quando todos os campos principais definidos para sua categoria possuem traducao `pt-BR` no overlay.

Para NPC:

* `name` traduzido;
* todos os `attacks[].name` traduzidos;
* todos os `actions[].name` traduzidos;
* todos os `actions[].detail` existentes traduzidos;
* `sheet.notes`, se existir, traduzido.

Campos ausentes nao contam como pendencia.

Entrada parcialmente traduzida:

* possui overlay, mas falta algum campo principal existente.

Entrada nao traduzida:

* nao possui overlay, ou overlay nao possui nenhum campo principal traduzido.

## 18. Ordem de Lotes

Processo de selecao:

1. carregar todas as entradas canonicas da categoria;
2. carregar overlay `pt-BR`;
3. classificar cada entrada como `translated`, `partial` ou `untranslated`;
4. ignorar `translated`;
5. selecionar primeiro `partial`;
6. depois selecionar `untranslated`;
7. manter ordem original do arquivo;
8. limitar a 10 entradas por rodada.

## 19. Relatorio de Rodada

Ao final de cada lote, o agente deve reportar:

```txt
Categoria:
Total:
Traduzidas:
Parciais antes da rodada:
Nao traduzidas antes da rodada:
Traduzidas nesta rodada:
Arquivos modificados:
Problemas encontrados:
```

E perguntar:

```txt
Deseja que eu traduza as proximas 10 entradas?
```

## 20. Validacoes de Overlay

Validacoes obrigatorias ou recomendadas:

* todo `entryId` do overlay deve existir no catalogo canonico;
* overlay nao deve conter dados mecanicos;
* strings vazias devem gerar alerta;
* subchaves de `attacks` devem existir na entrada canonica;
* subchaves de `actions` devem existir na entrada canonica;
* uma traducao existente nao deve ser sobrescrita sem pedido;
* arquivo deve passar typecheck;
* se TypeScript nao conseguir validar por categoria, usar `satisfies Record<string, ...>`.

## 21. Integracao com API

O endpoint pode receber ou inferir locale:

```txt
GET /api/campaigns/:campaignId/bestiary?locale=pt-BR
GET /api/campaigns/:campaignId/bestiary/:entryId?locale=pt-BR
```

Ou usar preferencia do usuario/campanha.

A resposta deve ser DTO ja localizado.

O core generico nao deve precisar saber se a traducao veio de overlay.

## 22. Contrato de Display

Apos resolucao, o display deve conter strings simples.

Exemplo:

```ts
type GameSystemBestiaryEntry = {
  id: string
  system: string
  category: string
  name: string
  display: {
    subtitle?: string
    level?: { label: string; value: string }
    stats: Array<{ key: string; label: string; value: string }>
    tags: string[]
    sheet?: GameSystemBestiarySheet
  }
  systemData: unknown
}
```

`display.name`, `display.sheet`, `stats.label`, `tagsLabel` e campos similares devem estar resolvidos.

## 23. Criterios de Aceitacao

* `en-US` permanece como arquivo canonico.
* `pt-BR` fica em overlays esparsos.
* Overlays nao duplicam dados mecanicos.
* Entradas sem overlay usam fallback para ingles.
* Entradas parcialmente traduzidas funcionam.
* React recebe strings simples.
* Dicionarios globais resolvem labels repetiveis.
* O padrao cobre Bestiario, Hazards, Spells, Items, Feats, Conditions e futuras categorias.
* Agente consegue traduzir por lotes de 10.
* Regenerar `data.generated.ts` nao apaga traducoes.
* TypeScript detecta shape errado nos overlays.
* Validacao consegue calcular cobertura por categoria.

## 24. Decisao Final

A localizacao PF2e no QuestHub deve seguir este modelo:

```txt
data.generated.ts ou catalogo canonico = en-US
localization/content/pt-BR/*.ts = overlays esparsos
dictionaries/*.ts = labels mecanicas repetiveis
adapters = aplicam fallback e geram DTO
React = renderiza strings simples
```
