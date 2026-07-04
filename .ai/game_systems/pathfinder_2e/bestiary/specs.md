# Submodulo: Pathfinder 2e Bestiario (Specs & Contracts)

## 1. Responsabilidade
Expor criaturas Pathfinder 2e normalizadas como catalogo de ruleset e fornecer uma ficha simplificada para consulta do Mestre.

## 1.1 Entidades Encontradas nos Packs Foundry
Ao auditar `pf2e-master/packs`, foram encontrados documentos de varios tipos. Para o bestiario atual:

* `npc`: entra no catalogo de criaturas e deve ser extraido completamente.
* `hazard`: representa perigos, armadilhas e hazards; requer catalogo proprio futuro, com contrato diferente de criatura.
* `action`, `effect`, `character` e `_folders`: nao entram no catalogo de criaturas.

O catalogo completo de criaturas PF2e deve considerar todos os documentos `type = "npc"` disponiveis nos packs locais, incluindo packs oficiais de bestiario, aventuras e galeria de NPCs.

Auditoria atual de `pf2e-master/packs`:

* `npc`: 2.141 documentos extraidos para o catalogo de criaturas.
* `hazard`: 239 documentos mapeados como entidade futura.
* Demais tipos (`action`, `effect`, `character`, itens e `_folders`): fora do catalogo de criaturas.

## 2. Contrato de Apresentacao
A ficha simplificada deve ser adaptada para um contrato neutro no core:

```ts
type GameSystemBestiarySheet = {
  sections: GameSystemBestiarySheetSection[]
}

type GameSystemBestiarySheetSection = {
  key: string
  title: string
  entries: GameSystemBestiarySheetEntry[]
}

type GameSystemBestiarySheetEntry = {
  key: string
  label: string
  value?: string
  detail?: string
  tags?: string[]
}
```

O package PF2e decide quais campos mecanicos entram em cada secao. O app web apenas renderiza secoes, entradas, valores, detalhes e tags.

No dado bruto do package PF2e, `sheet` deve possuir traducoes proprias no mesmo padrao das demais informacoes da criatura:

```ts
type Pathfinder2eBestiarySheet = {
  // campos mecanicos do ruleset
  translations?: {
    ptBR?: Pathfinder2eBestiarySheetTranslation
  }
}
```

Essas traducoes pertencem ao package `packages/game-system-pathfinder-2e` e devem cobrir titulos de secoes, labels, sentidos, idiomas, defesas, ataques, acoes, traits, detalhes e notas quando disponiveis. O adapter PF2e deve converter a `sheet` original ou traduzida para `display.sheet`; o core nao deve conhecer os campos mecanicos nem o formato interno de `Pathfinder2eBestiarySheetTranslation`.

## 3. Secoes Iniciais PF2e
Cada criatura pode expor:

* `defenses`: percepcao, CA, PV, salvamentos, imunidades, resistencias e fraquezas;
* `attributes`: modificadores de atributos;
* `skills`: pericias relevantes;
* `movement`: deslocamento base, outros deslocamentos, sentidos e idiomas;
* `attacks`: strikes principais com bonus, dano e traits;
* `actions`: acoes, reacoes, free actions e passivas principais;
* `notes`: notas publicas curtas ou informacoes operacionais.

Secoes sem entradas devem ser omitidas.

## 4. Contrato HTTP Existente
`GET /api/campaigns/:campaignId/bestiary` permanece o endpoint de listagem.

Resposta relevante:

```ts
type CampaignBestiaryCreatureDto = {
  id: string
  system: string
  name: string
  display: {
    subtitle?: string
    level?: { label: string; value: string }
    stats: Array<{ key: string; label: string; value: string }>
    tags: string[]
    sheet?: GameSystemBestiarySheet
  }
  token: {
    imageUrl: string | null
    fallbackInitials: string
    borderColor: string
  }
}
```

`GET /api/campaigns/:campaignId/bestiary/:creatureId` retorna uma unica criatura localizada no mesmo formato de `CampaignBestiaryCreatureDto`.

Query opcional:

```ts
type CampaignBestiaryCreatureDetailQuery = {
  language?: 'pt-BR' | 'original'
}
```

Quando `language` for informado no endpoint de detalhe, ele vale apenas para essa resposta e nao altera preferencias persistidas da campanha.

Erros:

* `403`: usuario nao e Mestre ativo da campanha;
* `404`: sistema nao possui bestiario ou a criatura nao existe no ruleset da campanha.

## 5. Regras de Validacao
* Apenas Mestre ativo da campanha pode listar o bestiario.
* `page` deve ser inteiro maior ou igual a 1.
* `limit` deve ficar entre 1 e 20.
* `q` deve ter no maximo 80 caracteres.
* `level` deve ser inteiro quando informado.
* `rarity` deve ter no maximo 40 caracteres.

## 6. Criterios de Aceitacao
* A lista do bestiario exibe os cards atuais sem quebrar busca, filtro, paginacao, drag-and-drop e toolbar de tokens preparados.
* Cada card pode abrir a ficha simplificada em um modal proprio.
* O modal deve seguir `.ai/game_systems/bestiary_guide.md`: janela global montada via portal no `document.body`, arrastavel, redimensionavel, com fechar visivel, seletor de idioma, papel claro, marca do sistema e miolo renderizado pelo package PF2e.
* Tokens de bestiario no VTT devem expor a opcao `Ficha` somente no menu de contexto do Mestre.
* Players nao podem visualizar ficha de criatura do bestiario.
* A ficha mostra secoes renderizadas a partir de `display.sheet`, sem layout inline no card do bestiario.
* A ficha em `pt-BR` usa `sheet.translations.ptBR` para traduzir labels, valores textuais, tags, detalhes e notas da ficha.
* A ficha em `original` preserva os textos originais do catalogo PF2e.
* O seletor de idioma dentro da ficha nao persiste alteracao em preferencias gerais; ele apenas recarrega o detalhe da criatura com `language`.
* O core continua sem campos mecanicos especificos de Pathfinder.
* Tokens criados a partir do bestiario continuam contendo referencia `bestiaryCreatureId`, imagem e metadados visuais.
* Testes do registry cobrem a existencia da ficha simplificada em criatura PF2e.
* Testes do registry cobrem que a extracao completa possui a quantidade esperada de NPCs extraidos dos packs locais.

## 7. Entidade Futura: Hazard
Hazards encontrados nos packs nao devem ser modelados como criaturas.

Contrato futuro esperado:

```ts
type Pathfinder2eHazardCatalogEntry = {
  id: string
  system: 'PATHFINDER_2E'
  sourcePack: string
  sourceId: string
  name: string
  level: number
  rarity: string
  traits: string[]
  source: {
    title: string
    license: string
    remaster: boolean
  }
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

Antes de implementar hazards, criar submodulo/documentacao propria em `.ai/game_systems/pathfinder_2e/hazards/` ou equivalente.
