# Submodulo: Armor Class Pathfinder 2e (Specs & Contracts)

## 1. Responsabilidade
Definir o contrato de calculo de AC: a formula pura, os fatos de equipamento que ela consome, e como a ficha (`character_sheet`) e o inventario (`inventory`) se conectam para produzir o valor exibido.

## 2. Formula

```text
AC = 10
   + min(modificadorDestreza, dexCapDaArmadura)   // ou modificadorDestreza se sem armadura ou sem cap
   + bonusDeProficiencia(nivel, rankDaCategoriaDeArmaduraEquipada)
   + bonusDeItemDaArmadura
   + (escudoErguido ? bonusDeItemDoEscudo : 0)
   + ajusteManual
   + bonusDoRuleEngine
```

Onde `bonusDeProficiencia(nivel, rank) = rank === 0 ? 0 : nivel + rank`, identico a regra ja usada por pericias e saves (`.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 6).

`bonusDoRuleEngine` e um termo opcional adicionado por `.ai/game_systems/pathfinder_2e/character_effects/` (efeitos ativos do personagem): soma dos `FlatModifier` com `selector: 'ac'` encontrados nos Rule Elements dos efeitos ativos do personagem, apos a regra real de stacking do PF2e (`.ai/game_systems/pathfinder_2e/rule_engine/`). Quando o personagem nao tem efeitos ativos (ou a chamada nao passa `ruleElements`), esse termo e `0` e a formula e identica a versao anterior a essa integracao — ver `.ai/game_systems/pathfinder_2e/character_effects/specs.md` secao 4 para o contrato completo. Este termo e somado **fora** da regra de stacking dos demais (`itemBonus`/`shieldBonus`/`manualAdjustment` continuam somados incondicionalmente, sem reclassificacao — decisao registrada em `character_effects/skills.md` secao 2).

Contrato TypeScript completo em `.ai/game_systems/pathfinder_2e/armor_class/skills.md` secao 3.

## 3. Ficha: proficiencias de armadura e ajuste manual

A ficha PF2e (`.ai/game_systems/pathfinder_2e/character_sheet`) ganha, a partir da versao 3 do envelope:

```ts
type Pathfinder2eArmorProficiencies = {
  unarmored: Pathfinder2eProficiencyRank
  light: Pathfinder2eProficiencyRank
  medium: Pathfinder2eProficiencyRank
  heavy: Pathfinder2eProficiencyRank
}

type Pathfinder2eArmorClassManual = {
  manualAdjustment: number
}
```

`Pathfinder2eSheet.armorClass` deixa de ser `number` e passa a ser `Pathfinder2eArmorClassManual`. `Pathfinder2eSheet.armorProficiencies` e adicionado. O total de AC **nunca** e persistido — e sempre recalculado em tempo de leitura combinando esses dois campos com os fatos de equipamento (secao 4).

Defaults de ficha nova: `armorProficiencies = { unarmored: TRAINED(2), light: UNTRAINED(0), medium: UNTRAINED(0), heavy: UNTRAINED(0) }`, `armorClass = { manualAdjustment: 0 }`. Documentado como valor de conveniencia (a maioria das classes comeca treinada em Desarmado), nao uma regra universal — o jogador pode ajustar.

Migracao: fichas `version 1`/`version 2` com `armorClass: number` migram para `version 3` descartando o numero antigo (era so um valor digitado, sem breakdown a preservar) e aplicando os defaults acima. Contrato completo de versionamento em `.ai/game_systems/pathfinder_2e/character_sheet/specs.md` secao 9.

## 4. Fatos de Equipamento

Resolvidos pelo adapter de inventario PF2e (`packages/game-system-pathfinder-2e/src/server/inventory/adapter.ts`), nunca pelo modulo `inventory` diretamente:

```ts
type ArmorClassEquipmentResolution = {
  armor: { equippedItemId: string; category: string; itemBonus: number; dexCap: number | null } | null
  shield: { equippedItemId: string; itemBonus: number; raised: boolean } | null
}
```

`equippedItemId` identifica o registro `EquippedItem` de origem — necessario para o frontend chamar o endpoint de alternar escudo erguido (secao 6.2) sem precisar de outra consulta.

Resolucao:
* `armor` e `null` quando nao ha item com `classification.role === 'armor'` equipado;
* `armor.category` vem de `systemData.category` do item equipado; valor ausente/desconhecido cai em `'unarmored'`;
* `armor.itemBonus` vem de `systemData.ac` (default `0` se ausente);
* `armor.dexCap` vem de `systemData.dexCap` (default `null` = sem limite, se ausente);
* `shield` e `null` quando nao ha item com `classification.role === 'shield'` equipado;
* `shield.itemBonus` vem de `systemData.ac` do escudo (default `0` se ausente);
* `shield.raised` vem de `EquippedItem.systemData.shieldRaised` (default `false` se ausente).

Estes campos (`dexCap`, `ac`, `category`) sao capturados no pipeline de catalogo — ver `.ai/game_systems/pathfinder_2e/items/specs.md` secao 1.1.1 (blocos `armor`/`shield`) e sobrevivem a clonagem porque residem em `systemData`, o unico campo copiado integralmente de `CampaignItemDefinition` para `EquippedItem`/`InventoryItem`.

## 5. Escudo Erguido

Estado transitorio, nao uma propriedade do item. Persistido em `EquippedItem.systemData.shieldRaised` (booleano, opaco para o core, interpretado apenas pelo adapter PF2e). Alternado via endpoint dedicado (secao 6).

## 6. Endpoints (implementados em `apps/api/src/modules/inventory`, registrados junto aos demais endpoints de inventario)

Estas duas secoes sao a fonte canonica; espelhadas em `.ai/inventory/specs.md` secoes 6.13/6.14 para manter o catalogo de endpoints do modulo `inventory` completo.

### 6.1. Fatos de equipamento para AC

```txt
GET /api/campaigns/:campaignId/characters/:characterId/armor-class-equipment
```

Permissao: mesma de "Ver inventario" — Mestre ativo sempre; dono jogador ativo para o proprio personagem; nenhum outro jogador.

Resposta:
```ts
type ArmorClassEquipmentResponse = {
  system: string
  armor: { equippedItemId: string; category: string; itemBonus: number; dexCap: number | null } | null
  shield: { equippedItemId: string; itemBonus: number; raised: boolean } | null
}
```

Erros: `401` nao autenticado; `403 FORBIDDEN` sem permissao; `404 CAMPAIGN_CHARACTER_NOT_FOUND` personagem nao encontrado na campanha.

### 6.2. Alternar escudo erguido

```txt
PATCH /api/campaigns/:campaignId/equipped-items/:equippedItemId/shield
```

Payload:
```ts
type ToggleShieldRaisedRequest = { raised: boolean }
```

Regras:
* item alvo deve ter `classification.role === 'shield'`, senao `400 INVALID_PAYLOAD`;
* item deve pertencer ao personagem do ator (dono ativo) ou o ator deve ser o Mestre ativo, senao `403 FORBIDDEN`;
* grava `raised` em `EquippedItem.systemData.shieldRaised`;
* emite `inventory:changed` com `reason: 'ITEM_UPDATED'` (reason ja existente, sem novo valor no union) e `changedItemIds: [inventoryItemId]`.

Erros: `401` nao autenticado; `403 FORBIDDEN`; `404 EQUIPPED_ITEM_NOT_FOUND`; `400 INVALID_PAYLOAD` (item nao e escudo, ou payload invalido).

## 7. Reatividade Frontend

Nenhum evento de socket novo. `CharacterSheetModal` passa a receber `campaignId`/`socket` (mesmo padrao ja usado por `InventoryModal`) e um hook novo busca os fatos de equipamento via HTTP, reassinando `inventory:changed`/`inventory:item-transferred` atraves do hook `useInventoryRealtime` ja existente (`apps/web/src/inventory/hooks/useInventoryRealtime.ts`). Ao receber o evento, refaz o `GET` da secao 6.1 e recalcula via `calculateArmorClass`.

O AC tambem recalcula, sem round-trip ao servidor, quando o jogador edita atributos ou proficiencias de armadura na propria ficha antes de salvar — usando os ultimos fatos de equipamento ja carregados.

## 8. Dados Legados / Fallback

Itens equipados clonados antes desta feature (ou itens `CUSTOM` sem os campos novos) nao tem `dexCap`/`checkPenalty`/`speedPenaltyFeet`/`shieldRaised` em `systemData`. O calculo trata isso como "sem limite de Destreza" e "escudo abaixado" — nunca lanca erro. Nao ha migracao retroativa em massa de `ItemDefinition`/`EquippedItem` existentes nesta entrega; o dado so passa a existir quando o item e re-obtido do catalogo (removido e re-adicionado) ou editado manualmente pelo Mestre.

## 9. Criterios de Aceitacao
* Personagem sem armadura equipada tem AC = `10 + Destreza + proficiencia unarmored + ajuste manual`, sem limite de Destreza.
* Personagem com armadura media (`dexCap` definido) tem a Destreza aplicada limitada corretamente, mesmo quando o modificador de Destreza for maior que o cap.
* Personagem com Destreza negativa e armadura com `dexCap` positivo aplica a Destreza negativa integralmente (nao trava em `0`).
* Equipar/desequipar/trocar armadura ou escudo reflete no AC exibido na ficha aberta sem reload manual (via evento `inventory:changed`).
* Alternar "erguer escudo" soma/remove o bonus do escudo imediatamente.
* Editar rank de proficiencia de armadura ou atributo de Destreza recalcula o AC exibido antes mesmo de salvar a ficha.
* Fichas antigas (`armorClass: number`) migram automaticamente para o formato novo ao serem salvas, sem erro.
* Item equipado sem os campos mecanicos novos (dado legado) nao trava o calculo; resolve com fallback neutro.
* `packages/game-system-core` nao ganha nenhum campo ou tipo especifico de AC/armadura/escudo.
* `apps/api/src/modules/inventory` nao ganha nenhum condicional especifico de sistema; toda interpretacao passa por `InventorySystemAdapter.resolveArmorClassEquipment`.
