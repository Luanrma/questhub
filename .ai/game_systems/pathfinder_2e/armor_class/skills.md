# Submodulo: Armor Class Pathfinder 2e (Skills & Tech)

## 1. Stack
* TypeScript puro para a formula (funcao pura, sem React/DOM/Prisma/Socket).
* Zod para validacao dos novos campos de ficha (`armorProficiencies`, `armorClass.manualAdjustment`).
* Fastify (via modulo `inventory` existente) para os endpoints HTTP novos.
* Socket.io (via infraestrutura de eventos `inventory` existente) para reatividade — nenhum canal novo.

## 2. Padroes
* **Single Source of Formula:** a formula de AC vive em uma unica funcao pura, `calculateArmorClass`, em `packages/game-system-pathfinder-2e/src/shared/armor-class.ts`. Backend e frontend importam a mesma funcao; a formula nunca e duplicada.
* **Facts, Not Totals:** o backend nunca calcula nem persiste o total de AC. Ele resolve e expoe "fatos de equipamento" (categoria, bonus, dex cap, escudo erguido) a partir do inventario; quem aplica a formula e sempre `calculateArmorClass`, chamada no lado que precisa do valor.
* **Adapter Owns Mechanics:** o modulo `inventory` nunca interpreta armadura/escudo. Toda leitura de `systemData` de item equipado passa por uma capacidade opcional do `InventorySystemAdapter` (`resolveArmorClassEquipment`), implementada apenas em `packages/game-system-pathfinder-2e`.
* **Reuse Realtime, Don't Invent:** a reatividade de AC reaproveita os eventos `inventory:changed`/`inventory:item-transferred` e o hook `useInventoryRealtime` ja existentes no frontend. Nao existe um evento `character:updated` ou equivalente so para AC.
* **Safe Fallback for Legacy Data:** dado mecanico ausente (item de campanha clonado antes desta feature, ou item custom sem os campos novos) nunca lanca erro; sempre cai em um valor neutro (sem cap, sem bonus, escudo abaixado).

## 3. Contrato da Formula

```ts
export type Pathfinder2eArmorCategory = 'unarmored' | 'light' | 'medium' | 'heavy'

export type Pathfinder2eArmorProficiencies = {
  unarmored: Pathfinder2eProficiencyRank
  light: Pathfinder2eProficiencyRank
  medium: Pathfinder2eProficiencyRank
  heavy: Pathfinder2eProficiencyRank
}

export type Pathfinder2eEquippedArmorFacts = {
  category: Pathfinder2eArmorCategory
  itemBonus: number
  dexCap: number | null // null = sem limite
} | null

export type Pathfinder2eEquippedShieldFacts = {
  itemBonus: number
  raised: boolean
} | null

export type Pathfinder2eArmorClassInput = {
  level: number
  dexterityModifier: number
  armorProficiencies: Pathfinder2eArmorProficiencies
  equippedArmor: Pathfinder2eEquippedArmorFacts
  equippedShield: Pathfinder2eEquippedShieldFacts
  manualAdjustment: number
}

export type Pathfinder2eArmorClassBreakdown = {
  total: number
  base: 10
  armorCategory: Pathfinder2eArmorCategory
  proficiencyRank: Pathfinder2eProficiencyRank
  proficiencyBonus: number
  dexterityModifier: number
  dexterityCap: number | null
  dexterityModifierApplied: number
  itemBonus: number
  shieldBonus: number
  manualAdjustment: number
}

export function calculateArmorClass(input: Pathfinder2eArmorClassInput): Pathfinder2eArmorClassBreakdown
```

Regras de implementacao:
* categoria default `'unarmored'` quando `equippedArmor` for `null`;
* `proficiencyBonus = rank === 0 ? 0 : level + rank` (mesma regra de skills/saves);
* `dexterityModifierApplied = dexCap === null ? dexterityModifier : Math.min(dexterityModifier, dexCap)` — nunca usar `Math.max(0, ...)`, pois Destreza negativa deve poder reduzir o AC mesmo com cap;
* `shieldBonus = equippedShield?.raised ? equippedShield.itemBonus : 0`;
* `total = base + dexterityModifierApplied + proficiencyBonus + itemBonus + shieldBonus + manualAdjustment`.

## 4. Restricoes
* Nao persistir `total`/breakdown calculado em nenhum banco — sempre derivado em tempo de leitura.
* Nao duplicar a formula no frontend (`Pathfinder2eSheetForm.tsx`) nem no backend; ambos importam `calculateArmorClass` do pacote.
* Nao adicionar `if (system === 'PATHFINDER_2E')` dentro do modulo `inventory` (`apps/api/src/modules/inventory`); toda logica PF2e-especifica fica atras de `InventorySystemAdapter.resolveArmorClassEquipment`.
* Nao criar canal de socket novo; reaproveitar `inventory:changed`.
* Nao migrar em massa `ItemDefinition`/`EquippedItem` de campanhas existentes; o fallback de dados legados e a estrategia de compatibilidade.
* `packages/game-system-pathfinder-2e/src/shared/` nao deve importar React, DOM, Prisma, Fastify ou Socket.io.

## 5. Endpoints (implementados no modulo `inventory`, documentados em `.ai/inventory/specs.md`)
* `GET /api/campaigns/:campaignId/characters/:characterId/armor-class-equipment` — fatos de equipamento resolvidos (armadura/escudo).
* `PATCH /api/campaigns/:campaignId/equipped-items/:equippedItemId/shield` — alterna `raised` do escudo equipado.

Contrato completo (payload, permissoes, erros) em `.ai/inventory/specs.md` secoes 6.13 e 6.14.
