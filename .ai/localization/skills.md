# Submodulo: Pathfinder 2e Localization (Skills & Tech)

## 1. Stack Tecnologica

* TypeScript no package `packages/game-system-pathfinder-2e`.
* Dados canonicos gerados ou mantidos em `en-US`.
* Overlays de traducao em arquivos TypeScript separados.
* Adapters server-side para resolver locale antes da resposta.
* React/Vite recebendo DTOs com strings simples.
* Dicionarios globais para labels mecanicas repetiveis.
* Scripts Node para validar cobertura e consistencia dos overlays.

## 2. Caminhos Recomendados

Estrutura recomendada:

```txt
packages/game-system-pathfinder-2e/src/
  localization/
    locales.ts
    resolve.ts
    dictionaries/
      rarity.ts
      size.ts
      traits.ts
      skills.ts
      saves.ts
      abilities.ts
      damage-types.ts
      action-kinds.ts
      item-categories.ts
      spell-traditions.ts
      spell-schools.ts
      conditions.ts
    content/
      pt-BR/
        bestiary.ts
        hazards.ts
        spells.ts
        items.ts
        feats.ts
        conditions.ts
        actions.ts
        ancestries.ts
        classes.ts
        backgrounds.ts
```

Arquivos canonicos continuam nos modulos de dados:

```txt
packages/game-system-pathfinder-2e/src/server/bestiary/data.generated.ts
packages/game-system-pathfinder-2e/src/server/spells/data.generated.ts
packages/game-system-pathfinder-2e/src/server/items/data.generated.ts
```

Se uma categoria ainda nao existir como modulo separado, criar overlay apenas quando o catalogo existir.

## 3. Padroes Aplicados

* **Canonical Source:** arquivo principal permanece em `en-US`.
* **Sparse Overlay:** overlay contem apenas textos traduzidos.
* **No Mechanical Duplication:** dados mecanicos nao sao copiados para arquivos de traducao.
* **Adapter Resolution:** traducao e fallback acontecem no adapter, nao nos componentes.
* **Dictionary Labels:** termos repetiveis usam dicionarios, nao overlays por entrada.
* **Incremental Translation:** traducao por lotes pequenos e verificaveis.
* **Ruleset Boundary:** regras de PF2e ficam no package PF2e; core generico recebe DTO ja resolvido.
* **Regeneration Safe:** regenerar dados canonicos nao deve apagar overlays.
* **Stable Key Preference:** overlays devem preferir ids estaveis para subitens quando existirem.

## 4. Contratos Base

```ts
export type QuestHubLocaleCode = 'en-US' | 'pt-BR'
```

```ts
export type Pathfinder2eContentTranslationOverlay<TSheet = unknown> = {
  name?: string
  summary?: string
  description?: string
  sheet?: TSheet
}
```

Cada categoria pode definir seu proprio shape de `sheet`.

Exemplo para Bestiario:

```ts
export type Pathfinder2eBestiaryCreatureTranslation = {
  name?: string
  sheet?: {
    notes?: string
    attacks?: Record<string, {
      name?: string
    }>
    actions?: Record<string, {
      name?: string
      detail?: string
    }>
  }
}
```

Exemplo para Hazards:

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
    actions?: Record<string, {
      name?: string
      detail?: string
    }>
  }
}
```

Exemplo para Spells:

```ts
export type Pathfinder2eSpellTranslation = {
  name?: string
  sheet?: {
    description?: string
    heightenedText?: string
    requirements?: string
    rangeText?: string
    targetText?: string
    areaText?: string
    durationText?: string
  }
}
```

Exemplo para Items:

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
  }
}
```

## 5. Formato de Overlay

Overlays devem ser `Record<entryId, translation>`.

Exemplo:

```ts
export const PATHFINDER_2E_BESTIARY_PT_BR_TRANSLATIONS = {
  'pf2e:extinction-curse-bestiary:abberton-ruffian': {
    name: 'Arruaceiro de Abberton',
    sheet: {
      attacks: {
        Dagger: { name: 'Adaga' },
        Fist: { name: 'Punho' },
        'Thrown Bottle': { name: 'Garrafa Arremessada' },
      },
      actions: {
        'Opening Threat': {
          name: 'Ameaca Inicial',
          detail: 'Requisitos: o arruaceiro ainda nao agiu em seu turno. Efeito: ...',
        },
      },
    },
  },
} satisfies Record<string, Pathfinder2eBestiaryCreatureTranslation>
```

## 6. Chaves de Subitens

Para subitens como ataques, acoes, efeitos, variants e entries aninhadas, preferir a chave mais estavel disponivel.

Ordem recomendada:

1. `sourceId` do subitem, quando o normalizador expuser;
2. `slug` estavel gerado a partir do nome original;
3. nome original em `en-US`.

Hoje, se o normalizador nao expuser `sourceId` em ataques/acoes, usar nome original como chave.

Exemplo atual aceitavel:

```ts
actions: {
  'Opening Threat': {
    name: 'Ameaca Inicial',
    detail: '...',
  },
}
```

Evolucao recomendada:

```ts
actions: {
  'item:opening-threat:abc123': {
    name: 'Ameaca Inicial',
    detail: '...',
  },
}
```

## 7. Helper de Overlay

```ts
export function getTranslation<TTranslation>(
  translations: Record<string, TTranslation>,
  entryId: string,
): TTranslation | undefined {
  return translations[entryId]
}
```

## 8. Helper de Fallback

```ts
export function translatedOrSource(
  translated: string | undefined,
  source: string | undefined,
): string | undefined {
  return translated?.trim() ? translated : source
}
```

## 9. Adapter de Bestiario

```ts
export function localizeBestiaryCreature(
  creature: Pathfinder2eBestiaryCreatureData,
  translations: Record<string, Pathfinder2eBestiaryCreatureTranslation>,
): Pathfinder2eBestiaryCreatureData {
  const translation = translations[creature.id]

  if (!translation) return creature

  return {
    ...creature,
    name: translatedOrSource(translation.name, creature.name) ?? creature.name,
    sheet: {
      ...creature.sheet,
      notes: translatedOrSource(translation.sheet?.notes, creature.sheet.notes),
      attacks: creature.sheet.attacks.map((attack) => {
        const translatedAttack = translation.sheet?.attacks?.[attack.name]

        return {
          ...attack,
          name: translatedOrSource(translatedAttack?.name, attack.name) ?? attack.name,
        }
      }),
      actions: creature.sheet.actions.map((action) => {
        const translatedAction = translation.sheet?.actions?.[action.name]

        return {
          ...action,
          name: translatedOrSource(translatedAction?.name, action.name) ?? action.name,
          detail: translatedOrSource(translatedAction?.detail, action.detail),
        }
      }),
    },
  }
}
```

## 10. Adapter Global por Locale

```ts
export function localizePathfinder2eEntry<TEntry>(
  entry: TEntry,
  locale: QuestHubLocaleCode,
): TEntry {
  if (locale === 'en-US') return entry

  switch ((entry as { category?: string }).category) {
    case 'npc':
      return localizeBestiaryCreature(
        entry as Pathfinder2eBestiaryCreatureData,
        PATHFINDER_2E_BESTIARY_PT_BR_TRANSLATIONS,
      ) as TEntry

    case 'hazard':
      return localizeHazard(
        entry as Pathfinder2eBestiaryHazardData,
        PATHFINDER_2E_HAZARD_PT_BR_TRANSLATIONS,
      ) as TEntry

    case 'spell':
      return localizeSpell(
        entry as Pathfinder2eSpellData,
        PATHFINDER_2E_SPELL_PT_BR_TRANSLATIONS,
      ) as TEntry

    case 'item':
      return localizeItem(
        entry as Pathfinder2eItemData,
        PATHFINDER_2E_ITEM_PT_BR_TRANSLATIONS,
      ) as TEntry

    default:
      return entry
  }
}
```

## 11. Dicionarios Globais

Termos repetiveis devem ser resolvidos por dicionarios.

Exemplo:

```ts
export const PF2E_RARITY_LABELS = {
  'en-US': {
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    unique: 'Unique',
  },
  'pt-BR': {
    common: 'Comum',
    uncommon: 'Incomum',
    rare: 'Raro',
    unique: 'Unico',
  },
} satisfies Record<QuestHubLocaleCode, Record<string, string>>
```

Helper:

```ts
export function resolveDictionaryLabel(
  dictionary: Record<QuestHubLocaleCode, Record<string, string>>,
  key: string,
  locale: QuestHubLocaleCode,
): string {
  return dictionary[locale]?.[key] ?? dictionary['en-US']?.[key] ?? key
}
```

## 12. Performance

A localizacao deve ocorrer uma vez por entrada carregada ou por resposta de API.

Evitar:

* resolver overlay em cada render React;
* percorrer o catalogo inteiro a cada componente;
* fazer deep merge generico em runtime sem necessidade;
* duplicar arrays grandes de dados mecanicos nos overlays.

Preferir:

* mapa de traducoes por `entry.id`;
* merge manual por categoria;
* fallback simples `translated ?? source`;
* DTO pronto para UI;
* lazy import de overlays por modulo se o bundle crescer.

## 13. Validacao Tecnica

Criar script opcional:

```txt
scripts/check-pf2e-localization.cjs
```

Validacoes esperadas:

* overlay referencia ids existentes;
* overlay nao referencia campos inexistentes quando validacao for possivel;
* entradas com traducao parcial sao listadas;
* entradas completas sao contadas;
* textos vazios em `pt-BR` sao alertados;
* acoes/ataques referenciados por chave existem na entrada canonica;
* nao ha dados mecanicos duplicados no overlay;
* percentual de cobertura por categoria e exibido.

Exemplo de saida:

```txt
PF2e Localization Coverage

bestiary:
  total: 3214
  translated: 120
  partial: 8
  missing: 3086

hazards:
  total: 240
  translated: 0
  partial: 0
  missing: 240
```

## 14. Fluxo de Agente para Lotes

O agente de traducao deve:

1. ler `readme.md`, `skills.md` e `specs.md`;
2. localizar arquivo canonico da categoria;
3. localizar overlay `pt-BR`;
4. calcular cobertura;
5. escolher ate 10 entradas pendentes;
6. traduzir apenas textos especificos de entrada;
7. adicionar traducoes ao overlay;
8. nao alterar dados canonicos;
9. validar tipos;
10. apresentar resumo;
11. perguntar se deve continuar.

## 15. Restricoes Tecnicas

* Nao mover textos canonicos para fora do arquivo principal.
* Nao copiar dados mecanicos para overlays.
* Nao sobrescrever traducoes existentes sem motivo explicito.
* Nao traduzir chaves mecanicas como `traits`, `rarity`, `size`, `damageType`.
* Nao alterar o gerador de dados para produzir `pt-BR`.
* Nao misturar traducoes de NPC e Hazard no mesmo contrato se os shapes forem diferentes.
* Nao exigir traducao completa para renderizar uma entrada.
* Nao fazer chamada externa de traducao em runtime.
