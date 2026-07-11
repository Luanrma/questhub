# Modulo: Opcoes de Personagem Pathfinder 2e (Specs & Contracts)

## 1. Responsabilidade
Definir contratos de catalogo, selecao, escolhas e migracao para Classes, Ancestralidades, Herancas e Backgrounds de Pathfinder 2e.

Este modulo pertence ao ruleset PF2e. O core fornece apenas contratos agnosticos de exposicao.

## 2. Contrato Generico Do Core

```ts
export type GameSystemCharacterOptionKind =
  | 'class'
  | 'ancestry'
  | 'heritage'
  | 'background'

export type GameSystemCharacterOptionSource = {
  pack: string
  id: string
  path?: string
  publication?: string
  license?: string
  remaster?: boolean
}

export type GameSystemCharacterOptionDisplayStat = {
  key: string
  label: string
  value: string
}

export type GameSystemCharacterOptionDisplay = {
  subtitle?: string
  description?: string
  image?: string
  tags: string[]
  stats: GameSystemCharacterOptionDisplayStat[]
}

export type GameSystemCharacterOptionEntry<TSystemData = unknown> = {
  id: string
  system: string
  kind: GameSystemCharacterOptionKind
  slug: string
  name: string
  source: GameSystemCharacterOptionSource
  display: GameSystemCharacterOptionDisplay
  systemData: TSystemData
}

export type GameSystemCharacterOptionListOptions = {
  kind: GameSystemCharacterOptionKind
  search?: string
  limit?: number
  offset?: number
  filters?: Record<string, string | number | boolean>
}

export interface GameSystemCharacterOptionsAdapter {
  system: string

  listEntries(options: GameSystemCharacterOptionListOptions): GameSystemCharacterOptionEntry[]

  countEntries(
    options: Omit<GameSystemCharacterOptionListOptions, 'limit' | 'offset'>,
  ): number

  findEntry(
    kind: GameSystemCharacterOptionKind,
    entryId: string,
  ): GameSystemCharacterOptionEntry | null

  findEntryBySource?(
    kind: GameSystemCharacterOptionKind,
    sourcePack: string,
    sourceId: string,
  ): GameSystemCharacterOptionEntry | null
}
```

Regra: o core nao declara campos mecanicos PF2e como HP, boosts, saving throws, spellcasting, traits, rarity, languages ou vision.

## 3. Base Comum PF2e

```ts
export type Pathfinder2eCharacterOptionKind =
  | 'class'
  | 'ancestry'
  | 'heritage'
  | 'background'

export type Pathfinder2eAttributeSlug =
  | 'str'
  | 'dex'
  | 'con'
  | 'int'
  | 'wis'
  | 'cha'

export type Pathfinder2eRarity =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'unique'
  | string

export type Pathfinder2eDescription = {
  sourceHtml: string
  plainText: string
}

export type Pathfinder2eRuleElement = {
  key: string
  data: Record<string, unknown>
}

export type Pathfinder2eGrantedItemReference = {
  name: string
  image: string | null
  level: number
  uuid: string
  parsedReference: {
    system: string | null
    pack: string | null
    documentType: string | null
    documentIdOrName: string | null
  }
}

export type Pathfinder2eCharacterOptionSource = {
  sourcePack: string
  sourceId: string
  sourcePath: string
  slug: string
  image: string | null
  publication: {
    title: string | null
    license: string | null
    remaster: boolean
  }
}

export type Pathfinder2eCharacterOptionBase = {
  schemaVersion: 1
  id: string
  kind: Pathfinder2eCharacterOptionKind
  slug: string
  name: string
  description: Pathfinder2eDescription
  rarity: Pathfinder2eRarity
  traits: string[]
  rules: Pathfinder2eRuleElement[]
  grantedItems: Pathfinder2eGrantedItemReference[]
  source: Pathfinder2eCharacterOptionSource
  normalizationWarnings: string[]
}
```

## 4. Contratos Especificos PF2e

```ts
export type Pathfinder2eAttributeChoice = {
  key: string
  options: Pathfinder2eAttributeSlug[]
  count: number
  free: boolean
}

export type Pathfinder2eClassEntry =
  Pathfinder2eCharacterOptionBase & {
    kind: 'class'
    hitPointsPerLevel: number
    keyAbility: { options: Pathfinder2eAttributeSlug[] }
    proficiencies: {
      perception: number
      savingThrows: { fortitude: number; reflex: number; will: number }
      attacks: {
        simple: number
        martial: number
        advanced: number
        unarmed: number
        other: { name: string; rank: number }
      }
      defenses: { unarmored: number; light: number; medium: number; heavy: number }
      spellcasting: number
    }
    trainedSkills: { fixed: string[]; additional: number }
    progression: {
      ancestryFeatLevels: number[]
      classFeatLevels: number[]
      generalFeatLevels: number[]
      skillFeatLevels: number[]
      skillIncreaseLevels: number[]
    }
  }

export type Pathfinder2eLanguageProfile = {
  granted: string[]
  additional: {
    count: number
    options: string[]
    custom: string | null
  }
}

export type Pathfinder2eAncestryEntry =
  Pathfinder2eCharacterOptionBase & {
    kind: 'ancestry'
    hitPoints: number
    speedFeet: number
    size: string
    hands: number
    reachFeet: number
    vision: string
    languages: Pathfinder2eLanguageProfile
    attributes: {
      boosts: Pathfinder2eAttributeChoice[]
      flaws: Pathfinder2eAttributeChoice[]
      alternateBoosts: Pathfinder2eAttributeSlug[]
    }
  }

export type Pathfinder2eHeritageAncestryReference = {
  name: string
  slug: string
  uuid: string
  sourceId: string | null
}

export type Pathfinder2eHeritageEntry =
  Pathfinder2eCharacterOptionBase & {
    kind: 'heritage'
    ancestry: Pathfinder2eHeritageAncestryReference | null
    versatile: boolean
  }

export type Pathfinder2eBackgroundEntry =
  Pathfinder2eCharacterOptionBase & {
    kind: 'background'
    attributes: { boosts: Pathfinder2eAttributeChoice[] }
    trainedSkills: { skills: string[]; lore: string[] }
  }
```

## 5. Compatibilidade De Heranca

```ts
export function isCompatibleHeritage(
  heritage: Pathfinder2eHeritageEntry,
  ancestry: Pathfinder2eAncestryEntry,
): boolean {
  return heritage.versatile || heritage.ancestry?.slug === ancestry.slug
}
```

Regra: `versatile = ancestry === null`.

## 6. Selecao Persistida Na Ficha V2

```ts
export type Pathfinder2eCatalogSelection = {
  source: 'catalog'
  id: string
  sourcePack: string
  sourceId: string
  slug: string
  name: string
}

export type Pathfinder2eCustomSelection = {
  source: 'custom'
  name: string
}

export type Pathfinder2eCharacterSelection =
  | Pathfinder2eCatalogSelection
  | Pathfinder2eCustomSelection

export type Pathfinder2eIdentityV2 = {
  level: number
  ancestry: Pathfinder2eCharacterSelection | null
  heritage: Pathfinder2eCharacterSelection | null
  background: Pathfinder2eCharacterSelection | null
  class: Pathfinder2eCharacterSelection | null
}
```

## 7. Build Choices

```ts
export type Pathfinder2eBuildChoices = {
  ancestry: {
    boosts: Record<string, Pathfinder2eAttributeSlug>
    flaws: Record<string, Pathfinder2eAttributeSlug>
    alternateBoostsEnabled: boolean
    additionalLanguages: string[]
    ruleSelections: Record<string, string>
  }
  heritage: {
    ruleSelections: Record<string, string>
  }
  background: {
    boosts: Record<string, Pathfinder2eAttributeSlug>
    ruleSelections: Record<string, string>
  }
  class: {
    keyAbility: Pathfinder2eAttributeSlug | null
    trainedSkills: string[]
    ruleSelections: Record<string, string>
  }
}
```

Regras:

* `buildChoices` persiste escolhas feitas pelo usuario a partir das opcoes catalogadas.
* selecoes de Classe podem preencher `class.keyAbility` e `class.trainedSkills`;
* selecoes de Ancestralidade podem preencher `ancestry.boosts`, `ancestry.flaws`, `alternateBoostsEnabled` e `additionalLanguages`;
* selecoes de Background podem preencher `background.boosts`;
* slots de boosts e flaws usam chave estavel derivada da regra normalizada;
* limpar um select remove o slot correspondente do registro persistido;
* `buildChoices` gera uma sugestao mecanica minima de atributos a partir de base 10;
* cada boost selecionado soma 2 ao atributo correspondente;
* cada flaw selecionada subtrai 2 do atributo correspondente;
* o atributo-chave de Classe, quando selecionado, soma 2 ao atributo correspondente;
* a sugestao mecanica minima so altera a ficha quando o usuario aciona aplicacao explicita;
* a aplicacao explicita atualiza os atributos finais e recalcula pericias derivadas.

## 8. Envelope V2 Da Ficha PF2e

```json
{
  "system": "PATHFINDER_2E",
  "version": 2,
  "data": {
    "pathfinder2e": {
      "identity": {},
      "buildChoices": {}
    }
  }
}
```

Regras:

* novas fichas PF2e devem ser gravadas como version 2 quando este modulo for integrado;
* backend deve aceitar version 1 e version 2 durante a transicao;
* edicoes de fichas V1 devem migrar para V2 antes da escrita final;
* writes novos nao devem manter `className`, `ancestry`, `heritage` e `background` como unica fonte canonica.

## 9. Migracao V1 Para V2
Matching para cada campo antigo:

1. trim;
2. normalizar case;
3. normalizar espacos;
4. buscar nome exato;
5. buscar slug exato;
6. exigir resultado unico.

Resultado unico:

```ts
Pathfinder2eCatalogSelection
```

Sem resultado ou ambiguo:

```ts
Pathfinder2eCustomSelection
```

Issues:

```ts
export type Pathfinder2eMigrationIssue = {
  field: 'class' | 'ancestry' | 'heritage' | 'background'
  value: string
  reason: 'not_found' | 'ambiguous' | 'incompatible'
}
```

Texto antigo nunca deve ser descartado.

## 10. API HTTP Alvo

```text
GET /api/game-systems/:system/character-options?kind=class&q=&rarity=&ancestryId=&page=&limit=
GET /api/game-systems/:system/character-options/:kind/:entryId
GET /api/game-systems/:system/character-options/heritages?ancestryId=&q=&rarity=&page=&limit=
```

Regras:

* `system` deve validar ruleset registrado.
* `kind` deve ser um dos kinds conhecidos.
* `page` e `limit` devem ter limites definidos.
* filtro por `rarity` deve ser suportado.
* filtro de Heranca por `ancestryId` deve incluir Herancas versateis.
* 404 quando entrada nao existir.
* payloads de erro seguem o padrao HTTP existente do projeto.

## 11. Contrato Frontend Da Ficha

A ficha PF2e deve expor seletores pesquisaveis para:

* Classe;
* Ancestralidade;
* Heranca;
* Background.

Regras:

* o seletor consulta a API HTTP de character options do ruleset PF2e;
* a chamada frontend deve respeitar a mesma base HTTP configurada para o app web (`VITE_API_URL`, com fallback local);
* texto digitado livremente continua sendo persistido como selecao customizada;
* selecionar uma entrada do catalogo persiste `source: 'catalog'`, `id`, `sourcePack`, `sourceId`, `slug` e `name`;
* a busca de Herancas deve enviar `ancestryId` quando a Ancestralidade selecionada vier do catalogo;
* falhas de busca nao devem impedir edicao manual;
* a UI nao deve conhecer campos mecanicos internos de Classe, Ancestralidade, Heranca ou Background.
* quando um personagem PF2e vinculado a campanha ainda nao tiver Classe, Ancestralidade, Heranca e Background preenchidos, o jogador deve completar esses campos antes de salvar;
* depois de completar os quatro campos de identidade, o jogador nao pode altera-los;
* o Mestre pode editar identidade completa de personagens vinculados a sua campanha.

## 12. Criterios De Aceitacao
* O modulo `.ai/game_systems/pathfinder_2e/character_options` existe com `readme.md`, `skills.md`, `specs.md` e `todo.md`.
* Os quatro packs oficiais sao extraidos da copia local `pf2e-master`.
* A revisao da fonte e registrada no summary.
* Todos os documentos possuem ID estavel e source metadata.
* Descricoes, rules e granted items sao preservados.
* Herancas versateis usam `ancestry = null`.
* Herancas especificas apontam para Ancestralidade quando resolvivel.
* Core permanece agnostico.
* Ficha V2 preserva selecoes oficiais e customizadas.
* Migracao V1 nao perde texto antigo.
* Tests cobrem gerador, normalizadores, adapter, API, migracao e UI relevante.
