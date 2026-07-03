# Modulo: Sistemas de Jogo (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato de registro e integracao de rulesets no QuestHub.

Um ruleset encapsula dados, validacoes, defaults, calculos e componentes de UI especificos de um sistema de RPG.

Ficha de personagem e uma capacidade de ruleset. O envelope comum existe para padronizar persistencia em `Character.sheet`, mas regras, defaults, validacoes e componentes de ficha pertencem a `game_systems/[system]/character_sheet`.

## 2. Identificadores

```ts
type GameSystemId = 'PATHFINDER_2E' | 'DND_5E'
```

Novos sistemas devem ser adicionados apenas por meio do registry.

Nem todo identificador registrado implica que todos os fluxos de produto estao habilitados. Um ruleset pode existir como identificador reservado, mas so deve ser oferecido em criacao de personagem/campanha quando expuser as capacidades necessarias.

## 3. Contrato de Adapter

```ts
type GameSystemAdapter = {
  id: GameSystemId
  label: string
  version: number
  status: 'PLAYABLE' | 'RESERVED'
  characterSheet?: CharacterSheetSystemAdapter
  catalogs?: GameSystemCatalogCapabilities
  dice?: GameSystemDiceCapabilities
}

type CharacterSheetEnvelope = {
  system: GameSystemId
  version: number
  metadata?: CharacterSheetMetadata
  data: Record<string, unknown>
}

type CharacterSheetMetadata = {
  bio?: string | null
}

type CharacterSheetSystemAdapter = {
  dataKey: string
  version: number
  defaultSheet: unknown
  validate: (input: unknown) => unknown
}

type GameSystemCatalogCapabilities = {
  bestiary?: boolean
  ancestries?: boolean
  heritages?: boolean
  backgrounds?: boolean
  classes?: boolean
  feats?: boolean
  spells?: boolean
  items?: boolean
}

type GameSystemDiceCapabilities = {
  shortcuts?: string[]
}
```

Contratos compartilhados de bestiario devem permanecer agnosticos:

```ts
type GameSystemBestiaryCreature<TSystemData = unknown> = {
  id: string
  system: string
  name: string
  source?: GameSystemBestiarySource
  display: {
    subtitle?: string
    level?: { label: string; value: string }
    stats: Array<{ key: string; label: string; value: string }>
    tags: string[]
  }
  token: GameSystemBestiaryToken
  systemData: TSystemData
}
```

Campos mecanicos como `armorClass`, `hitPoints`, `traits`, `rarity`, `speed`, `spellSlots`, `savingThrows` e equivalentes nao pertencem ao core. Eles devem ficar em `systemData` tipado pelo package do sistema e ser convertidos para `display` quando a aplicacao generica precisar renderiza-los.

## 3.1 Contrato de Package Interno
Cada package de sistema deve expor capacidades por area, separando server e web:

```txt
packages/game-system-[system]/
  src/server/character-sheet
  src/server/bestiary
  src/web/character-sheet
  src/shared
```

O package pode exportar apenas as capacidades que implementar. A aplicacao deve registrar essas capacidades por registry/facade.

Packages especificos de sistema devem depender de `packages/game-system-core` para contratos compartilhados. Eles nao devem importar arquivos de `apps/api` ou `apps/web`.

## 4. Regras
* Todo `Campaign.system` deve apontar para um `GameSystemAdapter` registrado.
* Todo `Character.system`, quando existir, deve apontar para um `GameSystemAdapter` registrado.
* Todo `Character.sheet.system` deve ser igual a `Character.system`.
* O registry deve ser a unica porta para descobrir metadados e capacidades de sistema.
* Modulos genericos podem conhecer `GameSystemId`, mas nao podem importar modelos internos de ruleset.
* Apps podem manter facades de compatibilidade durante migracao, mas essas facades devem reexportar packages internos em vez de receber codigo novo especifico.
* `packages/game-system-core` nao deve modelar Pathfinder 2e, D&D 5e ou qualquer outro sistema indiretamente por campos mecanicos.
* Dados especificos persistidos devem continuar dentro do envelope de ficha ou catalogos do ruleset.
* `metadata.bio`, quando informado, e texto narrativo generico e nao pertence a nenhum sistema especifico.
* Cada ruleset deve possuir seu proprio bloco dentro de `CharacterSheetEnvelope.data`.
* Fluxos que criam ficha mecanica devem aceitar apenas rulesets com `status = PLAYABLE` e `characterSheet` definido.
* No codigo atual, apenas `PATHFINDER_2E` possui ficha jogavel. `DND_5E` existe como identificador reservado no schema, mas nao deve ser tratado como fluxo funcional de criacao.

## 5. Criterios de Aceitacao
* A campanha consegue listar sistemas suportados sem importar Pathfinder ou D&D diretamente.
* O registry consegue criar default sheet por sistema quando o ruleset expuser `characterSheet`.
* O VTT consegue exibir tokens e rolagens sem depender de campos especificos de ficha.
* Regras de Pathfinder 2e podem crescer para classes, ancestralidades, herancas, backgrounds, feats, spells e itens sem alterar contratos de VTT.
* Regras de D&D 5e podem ser adicionadas como outro adapter, sem alterar o modulo Pathfinder 2e.
* Bestiarios pertencem ao ruleset e devem expor dados normalizados sem exigir que o VTT conheca campos mecanicos.
* Entradas de bestiario devem preservar texto original e podem fornecer traducoes por idioma.
* A preferencia de idioma de conteudo de sistema e por usuario, com default `pt-BR`.
* Tokens criados a partir de bestiario nao criam `Character`; eles carregam referencia `bestiaryCreatureId` e metadados visuais suficientes para o VTT.
