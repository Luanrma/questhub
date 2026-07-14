# Submodulo: Pathfinder 2e Bestiario (Specs & Contracts)

## 1. Responsabilidade
Expor criaturas Pathfinder 2e normalizadas como catalogo de ruleset e fornecer uma ficha simplificada para consulta do Mestre.

## 1.1 Entidades Encontradas nos Packs Foundry
Ao auditar `pf2e-master/packs`, foram encontrados documentos de varios tipos. Para o bestiario atual:

* `npc`: entra no bestiario como categoria `npc` e deve ser extraido completamente.
* `hazard`: entra no bestiario como categoria `hazard`, com contrato interno diferente de criatura e sem criacao de token NPC.
* `action`, `effect`, `character` e `_folders`: nao entram no catalogo de criaturas.

O catalogo completo de criaturas PF2e deve considerar todos os documentos `type = "npc"` disponiveis nos packs locais, incluindo packs oficiais de bestiario, aventuras e galeria de NPCs.

Auditoria atual de `pf2e-master/packs`:

* `npc`: 5.492 documentos extraidos para a categoria `npc`.
* `hazard`: 1.032 documentos extraidos para a categoria `hazard`.
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

Quando o dado gerado nao possuir traducao humana completa, o adapter PF2e pode aplicar uma traducao deterministica por glossario local para campos estruturados da ficha (`actions`, `notes`, `attacks`, `defenses`, `languages`, `movement` e `abilities`). Essa adaptacao deve preservar o texto original no catalogo bruto e no modo `language=original`; o modo `pt-BR` nunca deve sobrescrever os dados fonte.

## 3. Secoes Iniciais PF2e
Cada criatura pode expor:

* `defenses`: percepcao, CA, PV, salvamentos, imunidades, resistencias e fraquezas;
* `attributes`: modificadores de atributos com labels de tres letras no idioma exibido, por exemplo `STR`/`DEX` no original e `FOR`/`DES` em `pt-BR`;
* `skills`: pericias relevantes;
* `movement`: deslocamento base, outros deslocamentos, sentidos e idiomas; deslocamentos em pes devem exibir tambem a conversao aproximada em metros;
* `attacks`: strikes principais com bonus, dano e traits;
* `actions`: acoes, reacoes, free actions e passivas principais;
* `notes`: notas publicas curtas ou informacoes operacionais.

Secoes sem entradas devem ser omitidas.

## 4. Contrato HTTP Existente
`GET /api/campaigns/:campaignId/bestiary` permanece o endpoint de listagem.

Resposta relevante:

```ts
type CampaignBestiaryEntryCategory = 'npc' | 'hazard'

type CampaignBestiaryEntryDto = {
  id: string
  system: string
  category: CampaignBestiaryEntryCategory
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

Durante a migracao, a resposta de listagem pode manter `creatures` como alias de compatibilidade, mas novas telas devem consumir `entries`.

Query opcional da listagem:

```ts
type CampaignBestiaryListQuery = {
  category?: 'npc' | 'hazard' | 'all'
}
```

`GET /api/campaigns/:campaignId/bestiary/:creatureId` retorna uma unica entrada localizada no mesmo formato de `CampaignBestiaryEntryDto`.

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
* `category`, quando informada, deve ser `npc`, `hazard` ou `all`.

## 6. Criterios de Aceitacao
* A lista do bestiario exibe os cards atuais sem quebrar busca, filtro, paginacao, drag-and-drop e toolbar de tokens preparados para NPCs.
* A lista do bestiario permite alternar entre NPCs, Hazards e todas as categorias importadas.
* Cada card com `display.sheet` pode abrir a ficha simplificada em um modal proprio.
* O modal deve seguir `.ai/game_systems/bestiary_guide.md`: janela global montada via portal no `document.body`, arrastavel, redimensionavel, com fechar visivel, seletor de idioma, papel claro, marca do sistema e miolo renderizado pelo package PF2e.
* Tokens de bestiario no VTT devem expor a opcao `Ficha` somente no menu de contexto do Mestre.
* Players nao podem visualizar ficha de criatura do bestiario.
* A ficha mostra secoes renderizadas a partir de `display.sheet`, sem layout inline no card do bestiario.
* A ficha em `pt-BR` usa `sheet.translations.ptBR` para traduzir labels, valores textuais, tags, detalhes e notas da ficha.
* Quando `sheet.translations.ptBR` nao trouxer conteudo especifico, a ficha em `pt-BR` aplica o glossario local do adapter para traduzir termos estruturados sem alterar o texto original armazenado.
* A ficha em `original` preserva os textos originais do catalogo PF2e.
* O seletor de idioma dentro da ficha nao persiste alteracao em preferencias gerais; ele apenas recarrega o detalhe da criatura com `language`.
* O core continua sem campos mecanicos especificos de Pathfinder.
* Tokens criados a partir do bestiario continuam contendo referencia `bestiaryCreatureId`, imagem e metadados visuais.
* Hazards nao exibem acao de adicionar token e nao sao arrastaveis para o VTT no fluxo atual.
* Testes do registry cobrem a existencia da ficha simplificada em criatura PF2e.
* Testes do registry cobrem que a extracao completa possui a quantidade esperada de NPCs extraidos dos packs locais.
* Testes do registry cobrem que hazards sao listados e contados como categoria propria.

## 7. Entidade: Hazard
Hazards encontrados nos packs nao devem ser modelados como criaturas, mas pertencem ao bestiario como categoria filtravel.

Contrato futuro esperado:

```ts
type Pathfinder2eHazardCatalogEntry = {
  id: string
  system: 'PATHFINDER_2E'
  category: 'hazard'
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

## 8. Customizacao de NPC pelo Mestre (`CampaignNpcDefinition`) — implementado em 2026-07-13

**Status: ✅ implementado nesta rodada** (migration `20260713194318_add_campaign_npc_definition` aplicada; CRUD em `apps/api/src/modules/npc_definitions/routes.ts`). Ver `.ai/game_systems/pathfinder_2e/npc_spellcasting/` para o consumo desses dados por conjuracao/resolucao.

### Problema
O Mestre precisa poder preparar magias para uma criatura do bestiario (ex.: "este Goblin Warchanter conhece Guidance e Heal") e reaproveitar essa mesma criatura customizada em varias cenas/encontros diferentes, sem repetir a configuracao a cada vez — e sem alterar o catalogo original (`pf2e-master/packs`), que continua sendo dado de referencia imutavel do compendio.

### Decisao (2026-07-13, confirmada com o usuario)
Mesmo padrao ja usado para itens customizados do Mestre (`CampaignItemDefinition`, `.ai/inventory/specs.md` secao 3.2): uma entidade **por campanha**, clonada a partir do catalogo (nunca o catalogo em si e mutado), que os tokens de cena referenciam. Alternativas descartadas: customizacao por token individual (nao reaproveitavel entre cenas — motivo explicito do usuario para rejeitar) e um modelo hibrido com override por token (escopo maior, adiado para uma evolucao futura caso surja necessidade real).

### Modelo de Dados (Prisma, implementado)

```prisma
enum NpcDefinitionSource {
  SYSTEM_CATALOG // clonado de uma entrada real do bestiario (fluxo unico previsto nesta fatia)
  CUSTOM         // criatura montada do zero pelo Mestre, sem origem no catalogo (fora de escopo nesta fatia, campo reservado para simetria com ItemDefinitionSource)
}

model CampaignNpcDefinition {
  id                 String              @id @default(cuid())
  campaignId         String
  system             GameSystem
  source             NpcDefinitionSource @default(SYSTEM_CATALOG)
  sourcePack         String?             // pack Foundry de origem, quando source = SYSTEM_CATALOG
  bestiaryCreatureId String              // sempre aponta para a entrada original do catalogo — nunca mutada; usada para herdar defesas/ataques/PV base (mesma leitura que um token "cru" ja faz hoje)
  name               String              // nome customizado exibido (ex.: "Goblin Warchanter — Xamã da Tribo"), pode divergir do nome do catalogo
  spellbook          Json?               // Pathfinder2eNpcSpellbookData — null = sem magias preparadas

  createdByUserId String?
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  campaign    Campaign             @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  sceneTokens CampaignSceneToken[]

  @@unique([campaignId, source, sourcePack, bestiaryCreatureId, name])
  @@index([campaignId])
}
```

`CampaignSceneToken` ganha um campo novo, opcional, aditivo (nao substitui `bestiaryCreatureId`, que continua a fonte de defesas/ataques/PV como hoje):

```prisma
model CampaignSceneToken {
  // campos existentes...
  campaignNpcDefinitionId String?
  campaignNpcDefinition   CampaignNpcDefinition? @relation(fields: [campaignNpcDefinitionId], references: [id])
}
```

`campaignNpcDefinitionId` so e valido quando `source = BESTIARY`. Token sem esse campo (todo dado existente hoje) continua funcionando exatamente como antes — a customizacao e estritamente aditiva, sem migracao de dado existente.

### Regras de Negocio
* O catalogo (`pf2e-master/packs`, dados extraidos em `Pathfinder2eBestiaryCreatureData`) nunca e escrito — `CampaignNpcDefinition` e sempre uma copia/extensao por campanha, igual ao principio ja registrado para itens (`.ai/inventory/skills.md` secao 13: nunca seed/import em massa do compendio).
* Deduplicacao: customizar a mesma criatura do catalogo mais de uma vez na mesma campanha com o mesmo nome reaproveita a `CampaignNpcDefinition` existente (chave `[campaignId, source, sourcePack, bestiaryCreatureId, name]`), nao cria duplicata — mesmo principio de `CampaignItemDefinition`. Nomes diferentes para a mesma criatura de origem criam definicoes distintas (ex.: dois xamas goblin diferentes, ambos baseados no mesmo `bestiaryCreatureId`).
* Um `CampaignNpcDefinition` pode ser instanciado (via `campaignNpcDefinitionId`) em quantos tokens/cenas o Mestre quiser — todos compartilham o mesmo `spellbook`. Editar o spellbook da definicao afeta todas as instancias ja colocadas (mesmo padrao de "editar a fonte, nao a copia" usado em outros catalogos deste projeto).
* PV continua por instancia de token (`CampaignSceneTokenHealth`, `.ai/combat/specs.md`), nao pela definicao — dois goblins xamas na mesma cena tem vidas independentes mesmo compartilhando spellbook.
* Apenas o Mestre ativo da campanha pode criar, editar ou excluir `CampaignNpcDefinition` (mesma regra de posse de `CampaignItemDefinition`).
* **Decisao tomada na implementacao**: excluir uma `CampaignNpcDefinition` que ainda tem tokens instanciados retorna `409` e nao apaga nada — o Mestre precisa remover os tokens da cena primeiro. Mais simples e mais seguro que desvincular silenciosamente; pode ser revisto se se provar incomodo no uso real.

### Contrato HTTP (implementado)

```ts
GET    /api/campaigns/:campaignId/npc-definitions                     // lista, Mestre-only
POST   /api/campaigns/:campaignId/npc-definitions                     // body: {bestiaryCreatureId, name} -> upsert dedup pela chave unica
PATCH  /api/campaigns/:campaignId/npc-definitions/:definitionId       // body: {name}
DELETE /api/campaigns/:campaignId/npc-definitions/:definitionId       // 409 se houver token instanciado
PUT    /api/campaigns/:campaignId/npc-definitions/:definitionId/spellbook  // body: Pathfinder2eCharacterSpellbookData bruto (sem envelope, sem revision — so o Mestre edita, sem concorrencia otimista)
```

Cada resposta serializa `spellbook` sempre como `Pathfinder2eCharacterSpellbookData` valido (nunca o Json bruto) — `parseNpcSpellbook` (`apps/api/src/modules/npc_definitions/routes.ts`) cai para o spellbook vazio (`DEFAULT_PATHFINDER_2E_CHARACTER_SPELLBOOK`) se o dado salvo nao passar no schema, nunca retorna erro 500 por dado corrompido.

### Colocacao de token (implementado)

`vtt:token:place` (evento existente, `.ai/vtt/specs.md`) ganhou um campo opcional `campaignNpcDefinitionId` no branch `source: 'bestiary'` (`apps/api/src/modules/campaign-presence/contracts.ts`). Quando presente, o servidor busca a definicao (deve pertencer a mesma campanha e ao mesmo `bestiaryCreatureId` — nunca confia no nome/spellbook que o cliente diria ter), usa `definition.name` como nome do token e grava `campaignNpcDefinitionId` no token persistido. `GET /api/campaigns/:campaignId/token-candidates` (`apps/api/src/modules/campaigns/routes.ts`) inclui automaticamente todo `CampaignNpcDefinition` da campanha como candidato arrastavel — diferente do catalogo bruto, NPCs customizados nao precisam ser "preparados" primeiro (ja sao uma lista curada pelo proprio Mestre ao cria-los).
