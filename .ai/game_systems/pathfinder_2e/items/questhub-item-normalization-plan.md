# QuestHub — Plano de Normalização de Itens, Consumíveis e Equipamentos

## 1. Objetivo

Refatorar o catálogo de itens e o fluxo de inventário/equipamento do QuestHub para que cada item possua uma classificação mecânica clara, previsível e extensível.

A implementação deve resolver, principalmente, os seguintes problemas:

- distinguir uma coroa, elmo ou chapéu de uma armadura;
- distinguir itens vestidos de itens segurados;
- distinguir consumíveis comuns de munições;
- impedir que flechas, virotes e outras munições sejam equipadas nas mãos;
- impedir que consumíveis sem uso corporal sejam tratados como itens `worn`;
- representar corretamente itens de uma mão, duas mãos, escudos e armaduras;
- preservar informações originais do Pathfinder/Foundry sem expor diretamente a estrutura externa ao core do QuestHub;
- preparar o sistema para consumo de munição durante ataques;
- garantir compatibilidade temporária com itens já persistidos no formato legado.

Este documento deve ser utilizado como plano de execução por um agent de IA trabalhando na branch `development`.

---

# 2. Contexto atual

## 2.1. Arquivos principais envolvidos

O agent deve começar revisando, no mínimo, os seguintes arquivos:

```text
scripts/generate-pf2e-item-data.cjs

packages/game-system-pathfinder-2e/src/server/items/models.ts
packages/game-system-pathfinder-2e/src/server/items/index.ts
packages/game-system-pathfinder-2e/src/server/items/data.generated.ts

packages/game-system-pathfinder-2e/src/server/inventory/index.ts
packages/game-system-pathfinder-2e/src/server/inventory/slots.ts

apps/api/src/modules/game_systems/ports.ts
apps/api/src/modules/game_systems/registry.ts

apps/api/src/modules/inventory/domain/types.ts
apps/api/src/modules/inventory/infra/prisma-inventory-repository.ts
apps/api/src/modules/inventory/application/equip-item.use-case.ts
apps/api/src/modules/inventory/application/ports/inventory-repository.ts

apps/api/prisma/schema.prisma

.ai/game_systems/pathfinder_2e/items/readme.md
.ai/game_systems/pathfinder_2e/items/skills.md
.ai/game_systems/pathfinder_2e/items/specs.md

.ai/inventory/readme.md
.ai/inventory/skills.md
.ai/inventory/specs.md
.ai/inventory/todo.md
```

Também devem ser localizados todos os usos de:

```text
equipSlot
itemType
systemData.usage
systemData.category
resourceLocks
equipmentOptionKey
consumable
worn
held
other
main_hand
off_hand
two_hands
armor
shield
```

## 2.2. Estrutura atual simplificada

O catálogo PF2e possui atualmente um modelo equivalente a:

```ts
export type Pathfinder2eCompendiumItem = {
  id: string
  sourcePack: string
  sourceId: string
  name: string
  itemType: Pathfinder2eItemType
  rarity: string
  level: number
  traits: string[]
  bulk: string
  priceMinorUnit: number
  isStackable: boolean
  equipSlot: string | null
  systemData: Pathfinder2eItemSystemData
}
```

O gerador reduz vários dados mecânicos a um único campo:

```ts
function equipSlotFor(document) {
  const type = document.type
  const usage = document.system?.usage?.value

  if (type === 'shield') return 'shield'
  if (type === 'armor') return 'armor'
  if (type === 'weapon') return usage.includes('two-hands') ? 'two_hands' : 'main_hand'
  if (type === 'backpack') return 'backpack'
  if (type === 'consumable') return 'consumable'
  if (usage.startsWith('worn')) return 'worn'
  if (usage.startsWith('held')) return 'held'
  return 'other'
}
```

Esse comportamento elimina informações essenciais.

Exemplos:

```text
wornheadwear -> worn
wornbelt     -> worn
wornboots    -> worn
held-in-one-hand -> held
ammo         -> consumable
```

Após a normalização atual, o sistema deixa de saber:

- qual parte do corpo o item ocupa;
- se o item é munição;
- se o item pode ou não ser equipado;
- quantas mãos o item exige;
- se o item é vestido, segurado, consumido, afixado ou apenas carregado;
- se um consumível deve aparecer no fluxo de equipamento.

---

# 3. Problemas arquiteturais identificados

## 3.1. `itemType` não representa o papel mecânico

O `itemType` do Foundry representa o tipo documental de origem:

```ts
type Pathfinder2eItemType =
  | 'weapon'
  | 'armor'
  | 'equipment'
  | 'consumable'
  | 'treasure'
  | 'backpack'
  | 'shield'
  | 'kit'
```

Ele é útil para:

- filtros do catálogo;
- apresentação;
- fidelidade à origem;
- debugging;
- importação.

Porém, ele não é suficiente para decidir comportamento.

Exemplos:

```text
Flecha:
itemType = consumable

Poção:
itemType = consumable

Pergaminho:
itemType = consumable
```

Todos possuem o mesmo `itemType`, mas papéis mecânicos diferentes.

## 3.2. `equipSlot` mistura conceitos diferentes

Os valores atuais misturam:

- slots reais;
- quantidade de mãos;
- categorias;
- modos de uso;
- fallback genérico.

Exemplos:

```text
main_hand -> posição de mão
off_hand  -> posição de mão
two_hands -> quantidade de recursos ocupados
armor     -> categoria/slot exclusivo
shield    -> categoria e uso de mão
worn      -> modo de uso
held      -> modo de uso
consumable -> tipo documental
other     -> fallback
```

Um campo único não deve representar todas essas dimensões.

## 3.3. Consumíveis são tratados de forma ampla demais

Atualmente qualquer item `consumable` recebe:

```ts
equipSlot = 'consumable'
```

Depois, o adapter decide:

```ts
if (equipSlot === 'consumable') {
  if (usage.startsWith('held')) {
    return opções de mão
  }

  return ['worn']
}
```

Esse fallback é incorreto.

Uma flecha sem `usage` segurado pode virar `worn`.

Uma poção pode acabar agrupada como item preparado ou vestido sem distinção mecânica suficiente.

Um pergaminho pode entrar no fluxo de equipamento mesmo quando deveria apenas permanecer armazenado.

## 3.4. `worn` perdeu a posição corporal

Todos estes itens podem acabar classificados apenas como `worn`:

```text
coroa
elmo
chapéu
óculos
colar
capa
cinto
luvas
botas
anel
```

Sem a posição corporal, o QuestHub não consegue:

- agrupar corretamente a interface;
- evitar conflitos;
- mostrar slots coerentes;
- distinguir coroa de armadura;
- aplicar futuras regras específicas.

## 3.5. Recursos de equipamento incompletos

Atualmente, recursos são gerados principalmente para:

```text
pf2e:hand:main
pf2e:hand:off
pf2e:shield
pf2e:armor
pf2e:investiture
```

Itens classificados como `worn`, `held`, `consumable` ou `other` podem não gerar bloqueio algum.

Isso permite múltiplos itens teoricamente exclusivos na mesma posição corporal.

## 3.6. O adapter PF2e está implementado no registry genérico

A lógica do inventário Pathfinder está dentro de:

```text
apps/api/src/modules/game_systems/registry.ts
```

Esse arquivo contém:

- classificação de grupos;
- validação de equipamentos;
- compatibilidade de slots;
- geração de recursos;
- regras de investidura;
- regras específicas de PF2e.

Essa responsabilidade deve ser movida para:

```text
packages/game-system-pathfinder-2e/src/server/inventory/
```

O registry genérico deve apenas registrar o adapter.

---

# 4. Princípios obrigatórios da solução

## 4.1. Não inferir comportamento pelo nome

É proibido usar regras como:

```ts
if (item.name === 'Arrows')
```

ou:

```ts
if (item.name.includes('Crown'))
```

O comportamento deve ser derivado de dados estruturados.

## 4.2. Preservar o dado bruto

O valor original de `system.usage.value` deve ser preservado.

Exemplo:

```ts
usage: {
  raw: 'wornheadwear',
  mode: 'worn',
  placement: 'head',
  hands: 0,
}
```

O parser pode evoluir futuramente sem precisar reimportar a origem.

## 4.3. Falhar de forma segura

Quando o item não puder ser classificado com segurança:

```ts
equipment: {
  equippable: false,
  options: [],
}
```

Também deve ser registrado um warning de normalização.

Nunca transformar silenciosamente um valor desconhecido em um equipamento válido.

## 4.4. O core permanece agnóstico

O core pode transportar strings e estruturas genéricas, mas não deve implementar regras como:

```text
cabeça
Pathfinder
investidura
munição
armadura
```

Essas regras pertencem ao adapter PF2e.

## 4.5. Não transformar `two_hands` em slot

Duas mãos representam dois recursos ocupados:

```text
pf2e:hand:main
pf2e:hand:off
```

A opção pode se chamar `held-two-hands`, mas `two_hands` não deve continuar sendo tratada como posição corporal.

## 4.6. Munição não é equipamento

Flechas, virotes e outras munições:

- permanecem no inventário;
- podem ser empilháveis;
- podem ser consumidas;
- não devem aparecer como opções de equipamento;
- não devem ocupar mão;
- futuramente devem ser associadas a armas compatíveis.

---

# 5. Modelo normalizado alvo

## 5.1. Tipo documental

Manter:

```ts
export type Pathfinder2eItemType =
  | 'weapon'
  | 'armor'
  | 'equipment'
  | 'consumable'
  | 'treasure'
  | 'backpack'
  | 'shield'
  | 'kit'
```

Esse campo deve continuar representando a origem.

## 5.2. Papel mecânico

Adicionar:

```ts
export type Pathfinder2eItemRole =
  | 'weapon'
  | 'armor'
  | 'shield'
  | 'wearable'
  | 'held-equipment'
  | 'ammunition'
  | 'consumable'
  | 'container'
  | 'attachment'
  | 'treasure'
  | 'kit'
  | 'other'
```

## 5.3. Modo de uso

Adicionar:

```ts
export type Pathfinder2eUsageMode =
  | 'none'
  | 'held'
  | 'worn'
  | 'consumed'
  | 'ammunition'
  | 'affixed'
  | 'stowed'
```

## 5.4. Posição corporal

Adicionar:

```ts
export type Pathfinder2eBodyPlacement =
  | 'head'
  | 'eyes'
  | 'neck'
  | 'shoulders'
  | 'torso'
  | 'waist'
  | 'hands'
  | 'feet'
  | 'ring'
  | 'armor'
  | 'back'
  | 'other'
```

## 5.5. Categoria de munição

Adicionar:

```ts
export type Pathfinder2eAmmunitionKind =
  | 'arrow'
  | 'bolt'
  | 'sling-bullet'
  | 'firearm-round'
  | 'dart'
  | 'other'
```

A lista pode ser ampliada conforme os dados reais encontrados no compêndio.

## 5.6. Opção de equipamento

```ts
export type Pathfinder2eEquipmentOption = {
  key: string
  label: string
  resourceUsage: Array<{
    resource: string
    amount: number
    exclusive?: boolean
  }>
  metadata?: unknown
}
```

## 5.7. Estrutura final sugerida

```ts
export type Pathfinder2eCompendiumItem = {
  schemaVersion: 2

  id: string
  sourcePack: string
  sourceId: string
  name: string

  itemType: Pathfinder2eItemType

  classification: {
    role: Pathfinder2eItemRole
    subtype: string | null
  }

  rarity: string
  level: number
  traits: string[]
  bulk: string
  priceMinorUnit: number

  stack: {
    stackable: boolean
  }

  usage: {
    raw: string | null
    mode: Pathfinder2eUsageMode
    hands: 0 | 1 | 2
    placement: Pathfinder2eBodyPlacement | null
  }

  equipment: {
    equippable: boolean
    options: Pathfinder2eEquipmentOption[]
  }

  consumable?: {
    category: string
  }

  ammunition?: {
    kind: Pathfinder2eAmmunitionKind
  }

  weapon?: {
    group?: string
    category?: string
    damage?: string
    hands: 1 | 2
    ammunition?: {
      required: boolean
      acceptedKinds: Pathfinder2eAmmunitionKind[]
      quantityPerAttack: number
    }
  }

  armor?: {
    category?: string
    group?: string
    ac?: number
  }

  systemData: {
    description?: string
    publicationTitle?: string
    remaster?: boolean
    license?: string
  }

  normalizationWarnings?: string[]
}
```

---

# 6. Exemplos obrigatórios de normalização

## 6.1. Coroa

```ts
{
  itemType: 'equipment',

  classification: {
    role: 'wearable',
    subtype: 'headwear',
  },

  usage: {
    raw: 'wornheadwear',
    mode: 'worn',
    hands: 0,
    placement: 'head',
  },

  equipment: {
    equippable: true,
    options: [
      {
        key: 'worn-head',
        label: 'Cabeça',
        resourceUsage: [
          {
            resource: 'pf2e:body:head',
            amount: 1,
            exclusive: true,
          },
        ],
      },
    ],
  },
}
```

## 6.2. Elmo

```ts
{
  itemType: 'equipment',

  classification: {
    role: 'wearable',
    subtype: 'headwear',
  },

  usage: {
    raw: 'wornheadwear',
    mode: 'worn',
    hands: 0,
    placement: 'head',
  },

  equipment: {
    equippable: true,
    options: [
      {
        key: 'worn-head',
        label: 'Cabeça',
        resourceUsage: [
          {
            resource: 'pf2e:body:head',
            amount: 1,
            exclusive: true,
          },
        ],
      },
    ],
  },
}
```

## 6.3. Armadura

```ts
{
  itemType: 'armor',

  classification: {
    role: 'armor',
    subtype: 'light',
  },

  usage: {
    raw: null,
    mode: 'worn',
    hands: 0,
    placement: 'armor',
  },

  equipment: {
    equippable: true,
    options: [
      {
        key: 'worn-armor',
        label: 'Armadura',
        resourceUsage: [
          {
            resource: 'pf2e:armor',
            amount: 1,
            exclusive: true,
          },
        ],
      },
    ],
  },
}
```

## 6.4. Lanterna segurada em uma mão

```ts
{
  itemType: 'equipment',

  classification: {
    role: 'held-equipment',
    subtype: null,
  },

  usage: {
    raw: 'held-in-one-hand',
    mode: 'held',
    hands: 1,
    placement: null,
  },

  equipment: {
    equippable: true,
    options: [
      {
        key: 'held-main-hand',
        label: 'Mão principal',
        resourceUsage: [
          {
            resource: 'pf2e:hand:main',
            amount: 1,
            exclusive: true,
          },
        ],
      },
      {
        key: 'held-off-hand',
        label: 'Mão secundária',
        resourceUsage: [
          {
            resource: 'pf2e:hand:off',
            amount: 1,
            exclusive: true,
          },
        ],
      },
    ],
  },
}
```

## 6.5. Arco de duas mãos

```ts
{
  itemType: 'weapon',

  classification: {
    role: 'weapon',
    subtype: 'bow',
  },

  usage: {
    raw: 'held-in-two-hands',
    mode: 'held',
    hands: 2,
    placement: null,
  },

  equipment: {
    equippable: true,
    options: [
      {
        key: 'held-two-hands',
        label: 'Duas mãos',
        resourceUsage: [
          {
            resource: 'pf2e:hand:main',
            amount: 1,
            exclusive: true,
          },
          {
            resource: 'pf2e:hand:off',
            amount: 1,
            exclusive: true,
          },
        ],
      },
    ],
  },

  weapon: {
    hands: 2,
    ammunition: {
      required: true,
      acceptedKinds: ['arrow'],
      quantityPerAttack: 1,
    },
  },
}
```

## 6.6. Flechas

```ts
{
  itemType: 'consumable',

  classification: {
    role: 'ammunition',
    subtype: 'arrow',
  },

  stack: {
    stackable: true,
  },

  usage: {
    raw: null,
    mode: 'ammunition',
    hands: 0,
    placement: null,
  },

  equipment: {
    equippable: false,
    options: [],
  },

  consumable: {
    category: 'ammo',
  },

  ammunition: {
    kind: 'arrow',
  },
}
```

## 6.7. Virotes

```ts
{
  itemType: 'consumable',

  classification: {
    role: 'ammunition',
    subtype: 'bolt',
  },

  usage: {
    raw: null,
    mode: 'ammunition',
    hands: 0,
    placement: null,
  },

  equipment: {
    equippable: false,
    options: [],
  },

  ammunition: {
    kind: 'bolt',
  },
}
```

## 6.8. Poção

Uma poção somente deve ser equipável em mão quando o dado bruto indicar uso segurado.

```ts
{
  itemType: 'consumable',

  classification: {
    role: 'consumable',
    subtype: 'potion',
  },

  usage: {
    raw: 'held-in-one-hand',
    mode: 'held',
    hands: 1,
    placement: null,
  },

  equipment: {
    equippable: true,
    options: [
      {
        key: 'held-main-hand',
        label: 'Mão principal',
        resourceUsage: [
          {
            resource: 'pf2e:hand:main',
            amount: 1,
            exclusive: true,
          },
        ],
      },
      {
        key: 'held-off-hand',
        label: 'Mão secundária',
        resourceUsage: [
          {
            resource: 'pf2e:hand:off',
            amount: 1,
            exclusive: true,
          },
        ],
      },
    ],
  },

  consumable: {
    category: 'potion',
  },
}
```

Quando a poção não possuir uso segurado confiável:

```ts
equipment: {
  equippable: false,
  options: [],
}
```

## 6.9. Pergaminho

```ts
{
  itemType: 'consumable',

  classification: {
    role: 'consumable',
    subtype: 'scroll',
  },

  usage: {
    raw: null,
    mode: 'consumed',
    hands: 0,
    placement: null,
  },

  equipment: {
    equippable: false,
    options: [],
  },
}
```

## 6.10. Talismã ou runa afixada

```ts
{
  classification: {
    role: 'attachment',
    subtype: 'talisman',
  },

  usage: {
    raw: 'affixed-to-armor',
    mode: 'affixed',
    hands: 0,
    placement: null,
  },

  equipment: {
    equippable: false,
    options: [],
  },
}
```

O fluxo de anexar itens deve ser tratado futuramente como ação diferente de equipar.

---

# 7. Regras de classificação

## 7.1. Ordem de precedência

A classificação deve seguir uma ordem explícita.

```ts
function classifyItem(document: RawPathfinderItem) {
  const itemType = normalizeToken(document.type)
  const category = normalizeToken(document.system?.category)
  const usage = normalizeUsage(document.system?.usage?.value)

  if (itemType === 'armor') {
    return classifyArmor(document)
  }

  if (itemType === 'shield') {
    return classifyShield(document)
  }

  if (itemType === 'weapon') {
    return classifyWeapon(document)
  }

  if (itemType === 'consumable' && isAmmunitionCategory(category, document)) {
    return classifyAmmunition(document)
  }

  if (usage.mode === 'affixed') {
    return classifyAttachment(document)
  }

  if (usage.mode === 'worn') {
    return classifyWearable(document)
  }

  if (usage.mode === 'held') {
    return classifyHeldEquipment(document)
  }

  if (itemType === 'backpack') {
    return classifyContainer(document)
  }

  if (itemType === 'consumable') {
    return classifyConsumable(document)
  }

  if (itemType === 'treasure') {
    return classifyTreasure(document)
  }

  if (itemType === 'kit') {
    return classifyKit(document)
  }

  return classifyOther(document)
}
```

Munição deve ser reconhecida antes de aplicar regras genéricas de consumível.

## 7.2. Normalização de tokens

```ts
function normalizeToken(value: unknown): string {
  if (typeof value !== 'string') return ''

  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
}
```

## 7.3. Parser de `usage`

O parser deve:

- preservar o valor original;
- normalizar variações de hífen, underscore e espaços;
- identificar modo;
- identificar quantidade de mãos;
- identificar posição corporal;
- produzir warnings para valores não reconhecidos.

Exemplo:

```ts
type ParsedUsage = {
  raw: string | null
  normalized: string
  mode: Pathfinder2eUsageMode
  hands: 0 | 1 | 2
  placement: Pathfinder2eBodyPlacement | null
  warnings: string[]
}
```

## 7.4. Mapeamento corporal mínimo

O agent deve inspecionar os valores reais do compêndio antes de finalizar o mapa.

Base inicial:

```ts
const BODY_PLACEMENT_RULES = [
  {
    values: ['wornheadwear', 'wornhelmet', 'wornhat', 'worncrown'],
    placement: 'head',
  },
  {
    values: ['worneyepiece', 'worneye', 'wornmask'],
    placement: 'eyes',
  },
  {
    values: ['wornnecklace', 'wornneck', 'wornamulet'],
    placement: 'neck',
  },
  {
    values: ['worncloak', 'wornshoulders', 'worncape'],
    placement: 'shoulders',
  },
  {
    values: ['wornbelt', 'wornwaist'],
    placement: 'waist',
  },
  {
    values: ['worngloves', 'wornhands', 'worngauntlets'],
    placement: 'hands',
  },
  {
    values: ['wornshoes', 'wornboots', 'wornfeet'],
    placement: 'feet',
  },
  {
    values: ['wornring'],
    placement: 'ring',
  },
  {
    values: ['wornback', 'wornbackpack'],
    placement: 'back',
  },
] as const
```

Não adicionar valores inventados sem verificar se existem no conjunto real.

## 7.5. Valores desconhecidos

Quando um `usage` for desconhecido:

```ts
{
  classification: {
    role: 'other',
    subtype: null,
  },
  equipment: {
    equippable: false,
    options: [],
  },
  normalizationWarnings: [
    `Unmapped usage: ${rawUsage}`,
  ],
}
```

---

# 8. Recursos de equipamento

## 8.1. Recursos exclusivos

Base inicial:

```text
pf2e:hand:main
pf2e:hand:off
pf2e:armor
pf2e:shield
pf2e:body:head
pf2e:body:eyes
pf2e:body:neck
pf2e:body:shoulders
pf2e:body:torso
pf2e:body:waist
pf2e:body:hands
pf2e:body:feet
pf2e:body:back
```

## 8.2. Anéis

Não assumir imediatamente que existe apenas um slot de anel.

Opções possíveis:

```text
pf2e:body:ring:left
pf2e:body:ring:right
```

ou capacidade genérica:

```text
pf2e:body:ring
capacity = 2
```

A decisão deve ser registrada na especificação antes da implementação.

## 8.3. Investidura

Itens com trait `invested` devem adicionar:

```ts
{
  resource: 'pf2e:investiture',
  amount: 1,
  exclusive: false,
}
```

O limite permanece 10.

## 8.4. Escudo

O escudo normalmente deve consumir:

```ts
[
  {
    resource: 'pf2e:shield',
    amount: 1,
    exclusive: true,
  },
  {
    resource: 'pf2e:hand:off',
    amount: 1,
    exclusive: true,
  },
]
```

A regra deve permanecer no adapter PF2e.

---

# 9. Contrato genérico do inventário

O contrato atual usa:

```ts
equipSlot: string | null
```

Esse campo deve ser substituído gradualmente.

Estrutura sugerida:

```ts
export type UniversalItemDefinition = {
  schemaVersion: number

  name: string
  itemType: string

  classification: {
    role: string
    subtype: string | null
  }

  rarity: string | null
  level: number | null
  traits: string[]
  bulk: string | null
  priceMinorUnit: number | null

  stackable: boolean

  usage: {
    raw: string | null
    mode: string
    hands: number
    placement: string | null
  }

  equipment: {
    equippable: boolean
    options: EquipmentOption[]
  }

  systemData: unknown
}
```

## 9.1. Alteração do adapter

Contrato recomendado:

```ts
export interface InventorySystemAdapter {
  getEquipmentOptions(
    item: UniversalItemDefinition,
  ): EquipmentOption[]

  listEquippedGroups(
    input: EquipmentGroupingInput,
  ): EquipmentGroup[]

  validateEquipment(
    input: EquipmentValidationInput,
  ): EquipmentValidationResult

  normalizeItemData(
    input: unknown,
  ): UniversalItemDefinition
}
```

O método global:

```ts
listEquipmentOptions()
```

não é suficiente porque as opções válidas dependem do item.

Exemplos:

```ts
adapter.getEquipmentOptions(arrow)
// []

adapter.getEquipmentOptions(crown)
// [worn-head]

adapter.getEquipmentOptions(armor)
// [worn-armor]

adapter.getEquipmentOptions(lantern)
// [held-main-hand, held-off-hand]
```

---

# 10. Organização de código recomendada

```text
packages/game-system-pathfinder-2e/src/server/items/
  models.ts
  normalize-item.ts
  normalize-usage.ts
  normalize-consumable.ts
  normalize-weapon.ts
  normalize-wearable.ts
  equipment-profile.ts
  normalization-summary.ts
  index.ts
  data.generated.ts

packages/game-system-pathfinder-2e/src/server/inventory/
  adapter.ts
  equipment-options.ts
  equipment-resources.ts
  equipment-groups.ts
  equipment-conflicts.ts
  legacy-compatibility.ts
  money.ts
  index.ts
```

O arquivo:

```text
apps/api/src/modules/game_systems/registry.ts
```

deve ser reduzido a composição e registro.

Exemplo:

```ts
import {
  pathfinder2eInventoryAdapter,
  pathfinder2eItemAdapter,
} from './pathfinder_2e'

const gameSystemAdapters = new Map([
  [
    'PATHFINDER_2E',
    {
      id: 'PATHFINDER_2E',
      inventory: pathfinder2eInventoryAdapter,
      items: pathfinder2eItemAdapter,
    },
  ],
])
```

---

# 11. Persistência

## 11.1. Manter JSON

`CampaignItemDefinition.itemData` pode continuar como JSON.

Não é necessário transformar cada campo em coluna relacional.

A decisão permite:

- suporte a múltiplos sistemas;
- evolução independente por ruleset;
- preservação de dados mecânicos específicos;
- redução do acoplamento com Prisma.

## 11.2. Versionar o formato

Adicionar:

```ts
schemaVersion: 2
```

Exemplo:

```json
{
  "schemaVersion": 2,
  "name": "Arrows",
  "itemType": "consumable",
  "classification": {
    "role": "ammunition",
    "subtype": "arrow"
  },
  "stackable": true,
  "usage": {
    "raw": null,
    "mode": "ammunition",
    "hands": 0,
    "placement": null
  },
  "equipment": {
    "equippable": false,
    "options": []
  },
  "systemData": {
    "consumable": {
      "category": "ammo"
    },
    "ammunition": {
      "kind": "arrow"
    }
  }
}
```

## 11.3. Compatibilidade com formato legado

O parser deve aceitar temporariamente:

```ts
{
  equipSlot,
  isStackable,
  systemData,
}
```

Exemplo:

```ts
function parseItemData(input: unknown): UniversalItemDefinition {
  if (isItemDataV2(input)) {
    return parseV2(input)
  }

  return migrateLegacyItemData(input)
}
```

## 11.4. Política de legado

Durante o período de transição:

- ler itens V1;
- converter em memória para V2;
- escrever novos itens somente em V2;
- registrar warning quando um item legado for carregado;
- não permitir que itens legados ambíguos sejam equipados livremente;
- remover o fallback permissivo em que `equipSlot = null` aceita qualquer opção;
- definir data ou milestone para remoção do parser V1.

---

# 12. Migração de itens já equipados

Itens persistidos em `EquippedItem` podem possuir:

```text
main_hand
off_hand
two_hands
armor
shield
worn
held
consumable
other
```

É necessário decidir como tratar cada grupo.

## 12.1. Mapeamentos determinísticos

```text
main_hand -> held-main-hand
off_hand  -> held-off-hand
two_hands -> held-two-hands
armor     -> worn-armor
shield    -> held-shield
```

## 12.2. Mapeamentos ambíguos

```text
worn
held
consumable
other
```

Esses registros devem ser:

1. recalculados com base na definição V2;
2. mantidos apenas se a opção resultante for única e válida;
3. desequipados automaticamente quando não houver correspondência segura;
4. registrados em ledger como `UNEQUIP` ou `CORRECTION`;
5. reportados em log de migração.

## 12.3. Banco

Como o formato principal está em JSON, talvez não seja necessária uma migration de schema Prisma.

Ainda assim, pode ser necessário:

- script de migração de dados;
- comando administrativo;
- rotina temporária de correção;
- migration SQL apenas se novos campos relacionais forem introduzidos.

Não criar migration vazia.

---

# 13. Consumíveis

## 13.1. Subtipos mínimos

Inspecionar `system.category` nos dados reais e consolidar os valores.

Esperados inicialmente:

```text
ammo
potion
oil
scroll
talisman
elixir
bomb
snare
other
```

A lista final deve ser baseada na auditoria do compêndio.

## 13.2. Regras

### Munição

```text
role = ammunition
equippable = false
stackable = true
usage.mode = ammunition
```

### Poção

```text
role = consumable
subtype = potion
```

Somente pode gerar opções de mão quando o `usage.raw` indicar mão.

### Pergaminho

```text
role = consumable
subtype = scroll
equippable = false
```

A menos que uma regra explícita do sistema indique o contrário.

### Talismã

```text
role = attachment
usage.mode = affixed
equippable = false
```

Não confundir `affix` com `equip`.

### Bombas

Bombas podem ter uso de mão, mas continuam consumíveis.

```text
role = consumable
subtype = bomb
usage.mode = held
hands = 1
```

### Consumível desconhecido

```text
role = consumable
equippable = false
```

Falhar de forma segura.

---

# 14. Armas e munição

## 14.1. Contrato

```ts
weapon: {
  hands: 1 | 2
  ammunition?: {
    required: boolean
    acceptedKinds: Pathfinder2eAmmunitionKind[]
    quantityPerAttack: number
  }
}
```

## 14.2. Exemplos

```text
Longbow:
acceptedKinds = [arrow]

Crossbow:
acceptedKinds = [bolt]

Sling:
acceptedKinds = [sling-bullet]
```

## 14.3. Escopo desta refatoração

A normalização deve preparar o contrato de munição.

O consumo automático durante ataques pode ser executado em etapa posterior.

Nesta entrega, no mínimo:

- munições corretamente identificadas;
- armas com perfil de munição quando possível;
- munições não equipáveis;
- contrato pronto para consulta pelo combate.

---

# 15. Fluxo futuro de ataque com munição

Quando integrado ao combate:

1. identificar a arma usada;
2. verificar se a arma requer munição;
3. localizar uma stack compatível no inventário;
4. validar quantidade disponível;
5. impedir o ataque quando não houver munição;
6. confirmar a ação;
7. consumir `quantityPerAttack`;
8. registrar `InventoryLedgerType.CONSUME`;
9. emitir `inventory:changed`;
10. não consumir munição apenas por abrir modal ou selecionar arma.

A redução de quantidade deve ocorrer no momento transacional correto da resolução do ataque.

---

# 16. Agrupamento de equipamentos na UI

Grupos sugeridos:

```text
Mãos
Armadura
Cabeça
Olhos
Pescoço
Ombros
Cintura
Mãos/Vestíveis
Pés
Costas
Anéis
Investidos
Preparados
Anexados
Outros
```

Não agrupar todos os `consumable` como `Preparados`.

O agrupamento deve utilizar:

```text
classification.role
usage.mode
usage.placement
equipmentOptionKey
resourceLocks
```

Não usar somente `itemType`.

---

# 17. Auditoria do catálogo

O gerador deve produzir um resumo de normalização.

```ts
export const PATHFINDER_2E_ITEM_NORMALIZATION_SUMMARY = {
  totalItems: 0,

  byItemType: {},
  byRole: {},
  byUsageMode: {},
  byPlacement: {},
  byConsumableCategory: {},
  byAmmunitionKind: {},

  unmappedUsageValues: [],
  unmappedConsumableCategories: [],
  unmappedWeaponAmmunition: [],
  warnings: [],
} as const
```

## 17.1. Regras de auditoria

- listas de valores desconhecidos devem ser únicas;
- ordenar alfabeticamente para facilitar diff;
- não gerar milhares de warnings duplicados;
- incluir contagem por warning;
- falhar o teste quando valores críticos surgirem;
- permitir warning não bloqueante para valores ainda não suportados;
- nunca classificar silenciosamente como item equipável.

## 17.2. Relatório humano

Opcionalmente gerar:

```text
.tmp/pf2e-item-normalization-report.json
```

ou:

```text
.tmp/pf2e-item-normalization-report.md
```

Não commitar arquivos temporários se a convenção do projeto não permitir.

---

# 18. Validação de equipamento

## 18.1. Regra principal

```ts
if (!item.equipment.equippable) {
  return {
    ok: false,
    code: 'ITEM_NOT_EQUIPPABLE',
    message: 'Este item não pode ser equipado',
  }
}
```

## 18.2. Opção válida

```ts
const option = item.equipment.options.find(
  candidate => candidate.key === input.optionKey,
)

if (!option) {
  return {
    ok: false,
    code: 'INVALID_EQUIPMENT_OPTION',
    message: 'Opção de equipamento incompatível com o item',
  }
}
```

## 18.3. Recursos

Usar diretamente:

```ts
option.resourceUsage
```

Não recalcular recursos a partir de chaves genéricas quando os dados já estiverem normalizados.

## 18.4. Stack

Itens em stack com quantidade superior a 1:

- não devem ser equipados diretamente;
- devem ser divididos quando aplicável;
- munição não deve entrar neste fluxo;
- consumíveis seguráveis precisam seguir a regra existente de split.

---

# 19. Itens customizados

A API de criação de item customizado também precisa adotar o novo contrato.

Formato sugerido:

```ts
type CreateCampaignItemDefinitionRequest = {
  name: string
  itemType: string

  classification: {
    role: string
    subtype?: string | null
  }

  rarity?: string
  level?: number
  traits?: string[]
  bulk?: string
  priceMinorUnit?: number
  stackable?: boolean

  usage?: {
    mode: string
    hands?: number
    placement?: string | null
  }

  equipment?: {
    equippable: boolean
    options?: EquipmentOption[]
  }

  systemData?: unknown
}
```

## 19.1. Validação de custom items

- `equippable = false` exige `options = []`;
- `equippable = true` exige ao menos uma opção;
- opções não podem ter chaves duplicadas;
- recursos não podem ter `amount <= 0`;
- munição não pode ser equipável;
- `hands = 2` deve bloquear duas mãos;
- `role = armor` deve possuir opção de armadura;
- `placement = head` deve usar recurso de cabeça;
- payload inválido deve retornar erro de validação, não ser aceito parcialmente.

---

# 20. Testes obrigatórios

## 20.1. Testes unitários do parser de uso

Cobrir:

```text
wornheadwear
worn-headwear
worn_headwear
held-in-one-hand
held-in-two-hands
heldinonehand
affixed-to-armor
valor vazio
valor null
valor desconhecido
```

## 20.2. Testes de classificação

Tabela mínima:

```text
Coroa              -> wearable / head
Elmo mágico         -> wearable / head
Chapéu              -> wearable / head
Armadura de couro   -> armor / armor
Armadura pesada     -> armor / armor
Botas mágicas       -> wearable / feet
Cinto               -> wearable / waist
Luvas               -> wearable / hands
Colar               -> wearable / neck
Capa                -> wearable / shoulders
Lanterna            -> held-equipment / one hand
Cajado de duas mãos -> weapon ou held-equipment / two hands
Escudo              -> shield / off hand
Flechas             -> ammunition / not equippable
Virotes             -> ammunition / not equippable
Balas de funda      -> ammunition / not equippable
Poção               -> consumable
Bomba               -> consumable / held one hand
Pergaminho          -> consumable / not equippable
Talismã             -> attachment / not equippable
Runa                 -> attachment / not equippable
Mochila              -> container
Tesouro              -> treasure / not equippable
Usage desconhecido   -> other / not equippable / warning
```

## 20.3. Testes do adapter de inventário

Cobrir:

```text
não permite equipar munição
não permite equipar item com equippable=false
permite coroa apenas em worn-head
impede duas coroas no mesmo recurso exclusivo
permite armadura em worn-armor
impede duas armaduras
permite item de uma mão na mão principal
permite item de uma mão na mão secundária
impede ocupar mão já bloqueada
item de duas mãos bloqueia ambas
escudo bloqueia recurso de escudo e mão secundária
invested consome investiture
11º item invested falha
opção inexistente falha
item legado ambíguo não recebe permissão ampla
```

## 20.4. Testes de persistência

Cobrir:

```text
salva item V2
lê item V2
lê item V1 e converte em memória
novo item não grava equipSlot legado
item clonado do catálogo preserva schemaVersion
resourceLocks persistidos correspondem à opção normalizada
```

## 20.5. Testes do gerador

Cobrir:

```text
gera o mesmo resultado deterministicamente
não produz ids duplicados
não produz sourcePack/sourceId duplicados
todos os itens têm schemaVersion
todos os itens têm classification
todos os itens têm usage
todos os itens têm equipment
munições não são equipáveis
armaduras são equipáveis
itens worn conhecidos possuem placement
warnings desconhecidos aparecem no summary
```

---

# 21. Critérios de aceite

A entrega somente está concluída quando:

- [ ] `equipSlot` não é mais a fonte principal de decisão mecânica.
- [ ] O catálogo normalizado possui `schemaVersion`.
- [ ] Cada item possui `classification.role`.
- [ ] Cada item possui `usage.mode`.
- [ ] Cada item possui `equipment.equippable`.
- [ ] Cada item equipável possui opções explícitas.
- [ ] Coroas e elmos são classificados como `wearable/head`.
- [ ] Coroas e armaduras possuem recursos distintos.
- [ ] Itens segurados possuem opções de mão.
- [ ] Itens de duas mãos bloqueiam ambas as mãos.
- [ ] Flechas são classificadas como munição.
- [ ] Flechas não possuem opções de equipamento.
- [ ] Virotes não possuem opções de equipamento.
- [ ] Consumíveis não são convertidos automaticamente para `worn`.
- [ ] Valores desconhecidos falham de forma segura.
- [ ] O adapter PF2e não permanece implementado no registry genérico.
- [ ] Itens V1 continuam legíveis durante a transição.
- [ ] Novos itens são persistidos apenas no formato V2.
- [ ] Testes cobrem classificação, equipamento, persistência e geração.
- [ ] A documentação `.ai` reflete o contrato novo.
- [ ] O catálogo gerado é regenerado e validado.
- [ ] Nenhum item é identificado por comparação de nome.
- [ ] O build e os testes do projeto passam.

---

# 22. Todo list de execução

## Fase 0 — Preparação e auditoria

- [ ] Criar branch de trabalho a partir de `development`.
- [ ] Ler `AGENTS.md` e todas as especificações do módulo de inventário e itens.
- [ ] Confirmar as regras de arquitetura modular.
- [ ] Localizar todos os usos de `equipSlot`.
- [ ] Localizar todos os usos de `systemData.usage`.
- [ ] Localizar todos os usos de `systemData.category`.
- [ ] Localizar todos os usos de `listEquipmentOptions`.
- [ ] Localizar todos os usos de `resourceLocks`.
- [ ] Localizar todos os usos de `equipmentOptionKey`.
- [ ] Inventariar valores reais de `document.system.usage.value`.
- [ ] Inventariar valores reais de `document.system.category`.
- [ ] Inventariar categorias reais de consumíveis.
- [ ] Identificar como flechas, virotes e balas aparecem no compêndio.
- [ ] Identificar como coroas, elmos, chapéus, botas, cintos e luvas aparecem no compêndio.
- [ ] Registrar os valores reais encontrados na documentação.
- [ ] Não iniciar implementação antes de concluir essa auditoria.

## Fase 1 — Atualização das especificações

- [ ] Atualizar `.ai/game_systems/pathfinder_2e/items/readme.md`.
- [ ] Atualizar `.ai/game_systems/pathfinder_2e/items/skills.md`.
- [ ] Atualizar `.ai/game_systems/pathfinder_2e/items/specs.md`.
- [ ] Atualizar `.ai/inventory/readme.md`.
- [ ] Atualizar `.ai/inventory/skills.md`.
- [ ] Atualizar `.ai/inventory/specs.md`.
- [ ] Atualizar `.ai/inventory/todo.md`.
- [ ] Documentar a separação entre `itemType`, `role`, `usage` e `equipment`.
- [ ] Documentar o formato V2.
- [ ] Documentar a compatibilidade V1.
- [ ] Documentar a política para valores desconhecidos.
- [ ] Documentar munições como não equipáveis.
- [ ] Documentar posições corporais.
- [ ] Documentar recursos exclusivos.
- [ ] Documentar o futuro consumo de munição.
- [ ] Registrar ADR caso o projeto exija decisão arquitetural formal.

## Fase 2 — Novos modelos PF2e

- [ ] Atualizar `packages/game-system-pathfinder-2e/src/server/items/models.ts`.
- [ ] Criar `Pathfinder2eItemRole`.
- [ ] Criar `Pathfinder2eUsageMode`.
- [ ] Criar `Pathfinder2eBodyPlacement`.
- [ ] Criar `Pathfinder2eAmmunitionKind`.
- [ ] Criar `Pathfinder2eEquipmentOption`.
- [ ] Criar estrutura `classification`.
- [ ] Criar estrutura `usage`.
- [ ] Criar estrutura `equipment`.
- [ ] Criar estrutura `consumable`.
- [ ] Criar estrutura `ammunition`.
- [ ] Criar estrutura `weapon`.
- [ ] Criar estrutura `armor`.
- [ ] Adicionar `schemaVersion: 2`.
- [ ] Adicionar `normalizationWarnings`.
- [ ] Remover `equipSlot` do modelo novo.
- [ ] Manter tipo legado apenas em contrato temporário de leitura.

## Fase 3 — Parser de uso

- [ ] Criar `normalize-usage.ts`.
- [ ] Implementar normalização de token.
- [ ] Preservar `raw`.
- [ ] Identificar `held`.
- [ ] Identificar uma mão.
- [ ] Identificar duas mãos.
- [ ] Identificar `worn`.
- [ ] Identificar `affixed`.
- [ ] Identificar posição `head`.
- [ ] Identificar posição `eyes`.
- [ ] Identificar posição `neck`.
- [ ] Identificar posição `shoulders`.
- [ ] Identificar posição `waist`.
- [ ] Identificar posição `hands`.
- [ ] Identificar posição `feet`.
- [ ] Identificar posição `ring`.
- [ ] Identificar posição `back`.
- [ ] Gerar warning para valores desconhecidos.
- [ ] Adicionar testes de tabela.
- [ ] Garantir comportamento determinístico.

## Fase 4 — Classificação de consumíveis

- [ ] Criar `normalize-consumable.ts`.
- [ ] Mapear categorias reais do compêndio.
- [ ] Identificar munição.
- [ ] Identificar poções.
- [ ] Identificar óleos.
- [ ] Identificar pergaminhos.
- [ ] Identificar bombas.
- [ ] Identificar talismãs.
- [ ] Identificar elixires.
- [ ] Identificar outros consumíveis.
- [ ] Munição deve ser `equippable=false`.
- [ ] Consumível desconhecido deve ser `equippable=false`.
- [ ] Consumível somente gera mão quando `usage` confirmar.
- [ ] Consumível nunca vira `worn` por fallback.
- [ ] Adicionar testes para flecha, virote, poção, bomba, pergaminho e talismã.

## Fase 5 — Classificação de vestíveis

- [ ] Criar `normalize-wearable.ts`.
- [ ] Classificar coroa como `wearable/head`.
- [ ] Classificar elmo como `wearable/head`.
- [ ] Classificar chapéu como `wearable/head`.
- [ ] Classificar óculos/máscara quando os dados permitirem.
- [ ] Classificar colar como `wearable/neck`.
- [ ] Classificar capa como `wearable/shoulders`.
- [ ] Classificar cinto como `wearable/waist`.
- [ ] Classificar luvas como `wearable/hands`.
- [ ] Classificar botas como `wearable/feet`.
- [ ] Classificar anéis.
- [ ] Criar opções de equipamento por posição.
- [ ] Criar recursos exclusivos por posição.
- [ ] Adicionar testes de conflito corporal.

## Fase 6 — Armas, armaduras e escudos

- [ ] Criar `normalize-weapon.ts`.
- [ ] Derivar quantidade de mãos.
- [ ] Gerar opção de uma mão.
- [ ] Gerar opção de duas mãos.
- [ ] Classificar arcos.
- [ ] Classificar bestas.
- [ ] Classificar fundas.
- [ ] Preparar `weapon.ammunition`.
- [ ] Criar `normalize-armor.ts` ou equivalente.
- [ ] Armadura deve usar `pf2e:armor`.
- [ ] Escudo deve usar `pf2e:shield` e mão secundária.
- [ ] Preservar AC, grupo e categoria.
- [ ] Adicionar testes.

## Fase 7 — Gerador do catálogo

- [ ] Refatorar `scripts/generate-pf2e-item-data.cjs`.
- [ ] Substituir `equipSlotFor`.
- [ ] Criar pipeline de normalização.
- [ ] Gerar `schemaVersion`.
- [ ] Gerar `classification`.
- [ ] Gerar `usage`.
- [ ] Gerar `equipment`.
- [ ] Gerar dados de consumível.
- [ ] Gerar dados de munição.
- [ ] Gerar dados de arma.
- [ ] Gerar dados de armadura.
- [ ] Gerar warnings.
- [ ] Gerar summary de auditoria.
- [ ] Garantir ordenação determinística.
- [ ] Regenerar `data.generated.ts`.
- [ ] Revisar diff do arquivo gerado.
- [ ] Confirmar que flechas não são equipáveis.
- [ ] Confirmar que coroas possuem `placement=head`.
- [ ] Confirmar que armaduras possuem recurso próprio.
- [ ] Confirmar que itens de mão possuem opções coerentes.

## Fase 8 — Contratos genéricos

- [ ] Atualizar `apps/api/src/modules/game_systems/ports.ts`.
- [ ] Remover dependência principal de `equipSlot`.
- [ ] Adicionar `schemaVersion`.
- [ ] Adicionar `classification`.
- [ ] Adicionar `usage`.
- [ ] Adicionar `equipment`.
- [ ] Trocar `listEquipmentOptions()` por `getEquipmentOptions(item)`.
- [ ] Atualizar tipos de validação.
- [ ] Atualizar agrupamento.
- [ ] Manter o core sem regras PF2e.
- [ ] Atualizar todos os consumidores TypeScript.

## Fase 9 — Adapter PF2e

- [ ] Criar `packages/game-system-pathfinder-2e/src/server/inventory/adapter.ts`.
- [ ] Mover regras PF2e para o package.
- [ ] Implementar `getEquipmentOptions(item)`.
- [ ] Implementar `validateEquipment`.
- [ ] Implementar conflitos.
- [ ] Implementar investidura.
- [ ] Implementar agrupamento.
- [ ] Implementar compatibilidade legada.
- [ ] Exportar adapter no `index.ts`.
- [ ] Reduzir `apps/api/src/modules/game_systems/registry.ts`.
- [ ] Garantir que o registry apenas registre adapters.

## Fase 10 — Domínio e persistência

- [ ] Atualizar `ItemDefinitionSnapshot`.
- [ ] Atualizar `InventoryItemDefinitionView`.
- [ ] Atualizar presenters.
- [ ] Atualizar repository ports.
- [ ] Atualizar `prisma-inventory-repository.ts`.
- [ ] Criar tipo `ItemDataV2`.
- [ ] Criar parser V2.
- [ ] Criar parser/migrador V1.
- [ ] Escrever novos itens somente como V2.
- [ ] Ler itens V1 durante a transição.
- [ ] Remover fallback permissivo de item sem slot.
- [ ] Adicionar validação estrutural.
- [ ] Considerar Zod para o envelope V2.
- [ ] Garantir que item clonado do catálogo preserve V2.
- [ ] Atualizar fakes e testes de repositório.

## Fase 11 — Migração de itens equipados

- [ ] Criar estratégia de migração.
- [ ] Mapear `main_hand`.
- [ ] Mapear `off_hand`.
- [ ] Mapear `two_hands`.
- [ ] Mapear `armor`.
- [ ] Mapear `shield`.
- [ ] Recalcular `worn`.
- [ ] Recalcular `held`.
- [ ] Recalcular `consumable`.
- [ ] Recalcular `other`.
- [ ] Desequipar registros ambíguos.
- [ ] Registrar correção no ledger.
- [ ] Gerar log da migração.
- [ ] Garantir idempotência.
- [ ] Testar com banco vazio.
- [ ] Testar com itens legados.

## Fase 12 — Rotas e validação

- [ ] Atualizar criação de item customizado.
- [ ] Atualizar schemas de payload.
- [ ] Validar `classification`.
- [ ] Validar `usage`.
- [ ] Validar `equipment`.
- [ ] Bloquear munição equipável.
- [ ] Bloquear opções duplicadas.
- [ ] Bloquear recursos inválidos.
- [ ] Atualizar rota de equipar.
- [ ] Retornar erro `ITEM_NOT_EQUIPPABLE`.
- [ ] Retornar erro `INVALID_EQUIPMENT_OPTION`.
- [ ] Atualizar mensagens de erro.
- [ ] Atualizar testes HTTP.

## Fase 13 — Interface

- [ ] Atualizar tipos do frontend.
- [ ] Exibir papel mecânico.
- [ ] Exibir posição corporal.
- [ ] Não mostrar botão de equipar para munição.
- [ ] Não mostrar botão de equipar para consumível sem opções.
- [ ] Mostrar opções de mão para itens seguráveis.
- [ ] Mostrar `Cabeça` para coroa/elmo.
- [ ] Mostrar `Armadura` separadamente.
- [ ] Atualizar grupos de equipados.
- [ ] Atualizar labels.
- [ ] Evitar usar ícone como fonte de verdade.
- [ ] Adicionar testes de UI quando aplicável.

## Fase 14 — Testes e qualidade

- [ ] Criar testes unitários de uso.
- [ ] Criar testes de classificação.
- [ ] Criar testes de consumíveis.
- [ ] Criar testes de munição.
- [ ] Criar testes de vestíveis.
- [ ] Criar testes de armas.
- [ ] Criar testes de armaduras.
- [ ] Criar testes de escudo.
- [ ] Criar testes de adapter.
- [ ] Criar testes de conflitos.
- [ ] Criar testes de investidura.
- [ ] Criar testes de persistência V2.
- [ ] Criar testes de compatibilidade V1.
- [ ] Criar testes de migração.
- [ ] Criar testes do gerador.
- [ ] Rodar `npm run test:unit`.
- [ ] Rodar build da API.
- [ ] Rodar `npm run build:web`.
- [ ] Rodar lint do frontend.
- [ ] Corrigir todos os erros.
- [ ] Não desabilitar testes para concluir a entrega.

## Fase 15 — Validação final

- [ ] Inspecionar manualmente uma coroa.
- [ ] Inspecionar manualmente um elmo.
- [ ] Inspecionar manualmente uma armadura.
- [ ] Inspecionar manualmente uma lanterna.
- [ ] Inspecionar manualmente um arco.
- [ ] Inspecionar manualmente flechas.
- [ ] Inspecionar manualmente virotes.
- [ ] Inspecionar manualmente uma poção.
- [ ] Inspecionar manualmente um pergaminho.
- [ ] Inspecionar manualmente um talismã.
- [ ] Confirmar ausência de `equipSlot` nas novas definições.
- [ ] Confirmar que o catálogo permanece consultivo.
- [ ] Confirmar que nenhum seed em massa foi introduzido.
- [ ] Confirmar que o core continua agnóstico.
- [ ] Confirmar que a documentação está atualizada.
- [ ] Preparar resumo técnico da alteração.
- [ ] Listar pendências futuras separadamente.

---

# 23. Não fazer

- Não classificar itens por nome.
- Não usar ícone como fonte de verdade.
- Não criar uma lista fixa de exceções por item.
- Não continuar usando `equipSlot` como contrato principal.
- Não transformar todo consumível em `worn`.
- Não permitir equipar munição.
- Não tratar `two_hands` como posição corporal.
- Não colocar regras PF2e no core genérico.
- Não manter o adapter PF2e dentro do registry genérico.
- Não apagar suporte legado sem migração.
- Não criar migration Prisma desnecessária.
- Não popular o banco inteiro com o catálogo PF2e.
- Não alterar módulos não relacionados.
- Não introduzir dependência do Foundry no frontend.
- Não ignorar valores desconhecidos silenciosamente.
- Não concluir sem testes.

---

# 24. Entregáveis esperados

Ao final, o agent deve entregar:

1. especificações `.ai` atualizadas;
2. modelo normalizado V2;
3. parser de uso;
4. classificadores de consumível, munição, vestível, arma, armadura e escudo;
5. gerador refatorado;
6. catálogo regenerado;
7. summary de auditoria;
8. adapter PF2e movido para o package correto;
9. contratos genéricos atualizados;
10. parser de persistência V2;
11. compatibilidade temporária com V1;
12. estratégia de migração de itens equipados;
13. validação correta de equipamentos;
14. frontend sem opção de equipar munição;
15. suíte de testes;
16. documentação da mudança;
17. relatório final com arquivos alterados, testes executados e pendências.

---

# 25. Pendências futuras fora do escopo principal

Estas tarefas devem ser registradas, mas não precisam bloquear a normalização inicial:

- consumo automático de munição em ataques;
- seleção manual entre diferentes stacks de munição;
- munições especiais ou mágicas;
- recuperação de flechas após combate;
- aljavas e containers específicos;
- capacidade de aljava;
- ação de sacar item;
- regras de mãos livres durante combate;
- itens anexados a armas e armaduras;
- runas e talismãs;
- múltiplos slots de anel;
- equipamentos com mais de uma posição válida;
- equipamentos que não são exclusivos;
- efeitos mecânicos de itens equipados;
- sincronização de bônus com a ficha;
- regras específicas de D&D 5e;
- editor visual avançado de itens customizados.

---

# 26. Resultado esperado

Após a refatoração, o sistema deve responder de forma inequívoca:

```text
Coroa:
tipo documental = equipment
papel = wearable
posição = head
equipável = sim

Armadura:
tipo documental = armor
papel = armor
posição = armor
equipável = sim

Lanterna:
tipo documental = equipment
papel = held-equipment
mãos = 1
equipável = sim

Arco:
tipo documental = weapon
papel = weapon
mãos = 2
munição aceita = arrow
equipável = sim

Flechas:
tipo documental = consumable
papel = ammunition
tipo de munição = arrow
equipável = não
empilhável = sim

Poção:
tipo documental = consumable
papel = consumable
equipável = somente quando o uso bruto permitir mão
```

A regra arquitetural final é:

```text
itemType != role != usage.mode != usage.placement != equipment
```

Cada campo deve possuir uma responsabilidade única.

Esse padrão deve ser aplicado antes de expandir combate, consumo de munição, efeitos de itens ou novos sistemas de RPG.
