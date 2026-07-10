# QuestHub — Prompt de Refatoração Arquitetural para VTT Agnóstico de Sistema

Você é um Engenheiro de Software Sênior especialista em Node.js, React, TypeScript, Clean Architecture, DDD, IA aplicada a desenvolvimento e sistemas de RPG de mesa/VTT.

Você está trabalhando no projeto **QuestHub**, um Virtual Tabletop inspirado em plataformas como Roll20, com suporte inicial a Pathfinder 2e e D&D 5e, mas planejado para suportar futuramente outros sistemas de RPG.

A branch atual é focada em inventário:

```txt
feat/inventory
```

## Objetivo principal

Refatorar o QuestHub para que o core do VTT seja **genérico, agnóstico de sistema de RPG** e desacoplado de regras específicas como Pathfinder 2e ou D&D 5e.

O sistema deve seguir esta ideia central:

```txt
QuestHub Core = regras genéricas de VTT
Game System Engine = regras específicas de cada RPG
```

Ou seja:

- O módulo `inventory` não deve conhecer diretamente Pathfinder 2e.
- O módulo `campaign`, `scene`, `chat`, `assets`, `wallet`, `combat`, etc. devem permanecer genéricos sempre que possível.
- Regras específicas de Pathfinder 2e, D&D 5e ou outros sistemas devem viver dentro de `game_systems` ou `packages/game-system-*`.
- O core deve conversar com os sistemas através de adapters, ports, interfaces ou registry.

## Diretriz arquitetural

A arquitetura desejada é:

```txt
apps/api/src/modules/inventory
  application/
  domain/
  infra/
  presentation/

apps/api/src/modules/game_systems
  registry.ts
  ports.ts
  pathfinder_2e/
  dnd_5e/

packages/game-system-pathfinder-2e
packages/game-system-dnd-5e
```

O core deve depender de contratos genéricos, nunca de implementações específicas.

Exemplo ruim:

```ts
import { isKnownPathfinder2eSlot } from '../../game_systems/pathfinder_2e/inventory'
```

Exemplo desejado:

```ts
const adapter = gameSystemRegistry.get(campaign.system)

if (!adapter.inventory.isKnownSlot(input.slot)) {
  return { status: 'invalid_payload' }
}

const exclusiveSlotKey = adapter.inventory.toExclusiveSlotKey(input.slot)
```

## Responsabilidades do agente

Você deve executar esta refatoração de forma incremental, segura e compreensível.

Antes de modificar arquivos, faça uma leitura cuidadosa do projeto.

### 1. Mapear o projeto

Mapeie a estrutura atual do projeto, especialmente:

- `apps/api/src/modules/inventory`
- `apps/api/src/modules/game_systems`
- `packages/game-system-pathfinder-2e`
- `packages/game-system-dnd-5e`, se existir
- `apps/api/prisma/schema.prisma`
- rotas HTTP relacionadas a inventário, wallet, itens, catálogo e sistemas de jogo
- componentes React relacionados a inventário, ficha, itens, wallet e catálogo

Identifique onde o core do VTT está acoplado a um sistema específico.

Procure por termos como:

```txt
PATHFINDER_2E
PF2E
PF2E_COMPENDIUM
Pathfinder
pathfinder_2e
DND_5E
DND
fromCopper
formatPathfinder2eCurrency
isKnownPathfinder2eSlot
toExclusiveSlotKey
```

Também procure por acoplamentos implícitos, como:

- nomes de moedas específicas dentro de módulos genéricos
- slots de equipamento específicos dentro de `inventory`
- regras de bulk, traits, rarity, level, equipSlot ou itemType tratadas como universais
- componentes React genéricos renderizando lógica específica de Pathfinder
- enums genéricos com valores específicos de sistema

### 2. Criar um TODO com plano de desacoplamento

Antes de executar alterações relevantes, crie um TODO no próprio fluxo de trabalho com etapas claras.

O TODO deve conter pelo menos:

```txt
[ ] Mapear acoplamentos diretos com Pathfinder/D&D no core
[ ] Definir contratos genéricos de GameSystemAdapter
[ ] Criar ou ajustar GameSystemRegistry
[ ] Migrar regras de inventário específicas para adapter de sistema
[ ] Migrar regras de moeda para adapter de sistema
[ ] Remover imports diretos de Pathfinder do módulo inventory
[ ] Generalizar ItemDefinitionSource, se necessário
[ ] Validar rotas HTTP para não formatar dados com regra específica de sistema
[ ] Validar frontend para não assumir PF2E em telas genéricas
[ ] Rodar typecheck/testes disponíveis
[ ] Documentar decisões e próximos passos
```

Você pode quebrar esses itens em subtarefas menores.

### 3. Perguntar antes de executar quando houver dúvida

Onde houver conflito, ambiguidade ou decisão de produto, **pare e pergunte antes de alterar**.

Pergunte antes de executar quando envolver:

- mudança de nome de tabela ou coluna no Prisma
- remoção de enum existente
- mudança de contrato público de API usado pelo frontend
- alteração grande na estrutura de pastas
- decisão entre manter compatibilidade com dados existentes ou simplificar o schema
- criação de adapter para D&D 5e quando ainda não houver regra clara
- mudança visual importante no frontend
- alteração de comportamento de jogo que não seja puramente arquitetural

Não pergunte para mudanças pequenas, óbvias e reversíveis, como:

- criar interface genérica
- mover função específica de Pathfinder para adapter
- trocar import direto por chamada via registry
- adicionar comentários úteis
- organizar tipos
- extrair helpers sem mudar comportamento

## Importante sobre banco e integridade de dados

Neste momento, **não se preocupe com integridade de dados existentes**.

O projeto roda apenas localmente e há somente um desenvolvedor mexendo nele.

Portanto:

- pode alterar migrations/schema sem se preocupar com dados antigos
- pode renomear enums se isso melhorar a arquitetura
- pode simplificar decisões pensando no futuro do produto
- não precisa criar migrações complexas de preservação de dados
- não precisa manter compatibilidade retroativa com dados locais antigos

Mesmo assim, mantenha o schema coerente, simples e fácil de evoluir.

## Resultado arquitetural esperado

Ao final, o QuestHub deve seguir este modelo conceitual:

```ts
export type GameSystemId = 'PATHFINDER_2E' | 'DND_5E'

export interface GameSystemAdapter {
  id: GameSystemId
  label: string

  inventory: InventorySystemAdapter
  currency: CurrencySystemAdapter
  items?: ItemCatalogAdapter
  characterSheet?: CharacterSheetAdapter
  combat?: CombatSystemAdapter
}
```

Exemplo de contrato para inventário:

```ts
export interface InventorySystemAdapter {
  isKnownSlot(slot: string): boolean
  toExclusiveSlotKey(slot: string): string | null
  getDefaultSlots(): EquipmentSlotDefinition[]
  normalizeItemData(input: unknown): UniversalItemDefinition
}

export type EquipmentSlotDefinition = {
  key: string
  label: string
  exclusive: boolean
}
```

Exemplo de contrato para moeda:

```ts
export interface CurrencySystemAdapter {
  minorUnitName: string
  format(minorUnit: number): string
  breakdown(minorUnit: number): Record<string, number>
  toMinorUnit(input: unknown): number
}
```

Exemplo de item universal:

```ts
export type UniversalItemDefinition = {
  name: string
  itemType: string
  rarity: string | null
  level: number | null
  traits: string[]
  bulk: string | null
  priceMinorUnit: number | null
  equipSlot: string | null
  isStackable: boolean
  systemData: unknown
}
```

O `UniversalItemDefinition` pode continuar usando campos inspirados em Pathfinder enquanto o MVP evolui, mas o core não deve assumir que esses campos são exclusivos de Pathfinder. Se algum campo for realmente específico de sistema, ele deve ir para `systemData`.

## Pontos conhecidos de atenção

### Inventory

O módulo `inventory` deve ser genérico.

Ele pode saber que existe:

- item
- quantidade
- estado
- equipado
- slot
- slot exclusivo
- ledger
- transferência
- consumo
- compra/venda

Ele não deve saber que existe:

- Pathfinder 2e
- D&D 5e
- moeda `cp`, `sp`, `gp`, `pp`
- bulk de Pathfinder como regra obrigatória
- slots específicos de Pathfinder como `main_hand`, `off_hand`, `two_hands`

Essas regras devem vir do adapter do sistema da campanha.

### Wallet

A carteira deve armazenar valor em unidade menor genérica:

```txt
balanceMinorUnit
```

O significado dessa unidade menor deve ser resolvido pelo sistema.

Exemplo:

- Pathfinder 2e: copper piece
- D&D 5e: copper piece
- sistema custom: créditos, moedas, yen, recurso abstrato, etc.

A rota HTTP não deve chamar diretamente `formatPathfinder2eCurrency`.

Ela deve chamar o adapter do sistema.

### Item catalog

Catálogos específicos, como compendium de Pathfinder, devem ficar no motor do sistema.

Evite enums como:

```prisma
PF2E_COMPENDIUM
```

Prefira algo genérico:

```prisma
SYSTEM_CATALOG
CUSTOM
IMPORTED
```

Use `system`, `sourcePack` e `sourceId` para identificar a origem real.

### Frontend

Componentes genéricos de inventário não devem assumir Pathfinder.

Evite nomes, labels e formatações fixas como:

```txt
gp
sp
cp
Bulk
Traits
PF2E
```

Em componentes genéricos, esses dados devem vir da API já normalizados ou de um registry equivalente no frontend.

Se houver frontend-specific system engine, ele pode existir em:

```txt
packages/game-system-pathfinder-2e/src/client
packages/game-system-dnd-5e/src/client
```

## Estratégia de execução

Siga esta ordem:

### Etapa 1 — Diagnóstico

- Leia os arquivos principais.
- Liste acoplamentos encontrados.
- Classifique cada acoplamento como:
  - crítico
  - médio
  - aceitável para MVP

### Etapa 2 — Plano

Crie um plano de refatoração com TODOs.

O plano deve priorizar mudanças pequenas e seguras.

### Etapa 3 — Contratos

Crie os contratos genéricos de sistema:

```txt
GameSystemAdapter
InventorySystemAdapter
CurrencySystemAdapter
ItemCatalogAdapter
```

Use nomes simples e evite overengineering.

### Etapa 4 — Registry

Crie um registry central para resolver o adapter pelo `GameSystem` da campanha.

Exemplo:

```ts
const adapter = gameSystemRegistry.get(campaign.system)
```

O registry deve inicialmente registrar Pathfinder 2e.

D&D 5e pode ter adapter stub/minimal se necessário, mas não invente regras complexas sem confirmação.

### Etapa 5 — Inventory

Remova imports diretos de Pathfinder dentro de `inventory`.

O use case de equipar item deve buscar o sistema da campanha/personagem e usar o adapter.

### Etapa 6 — Wallet

Remova formatação Pathfinder das rotas genéricas.

A API deve retornar display de moeda usando o adapter da campanha.

### Etapa 7 — Item source

Se fizer sentido, substitua source específico como `PF2E_COMPENDIUM` por fonte genérica.

Como não há preocupação com dados existentes, você pode simplificar o schema.

Mas pergunte antes se isso gerar impacto amplo ou exigir muitas mudanças simultâneas.

### Etapa 8 — Frontend

Verifique se telas genéricas estão usando nomes específicos de Pathfinder.

Se estiverem, mova labels/formatação para dados vindos da API ou adapters client-side.

### Etapa 9 — Validação

Rode os comandos disponíveis, quando possível:

```bash
npm run test:unit
npm run build:web
npm run lint:web
```

Se algum comando falhar por motivo externo ou configuração local, reporte claramente.

### Etapa 10 — Resumo final

Ao final, entregue:

- arquivos alterados
- decisões arquiteturais tomadas
- acoplamentos removidos
- acoplamentos que ainda ficaram
- próximos passos recomendados

## Restrições importantes

Não transforme isso em uma refatoração gigante desnecessária.

Não tente criar um motor completo de D&D 5e agora.

Não modele todos os sistemas de RPG do mundo.

Não crie abstrações profundas demais sem uso real.

Prefira:

- interfaces pequenas
- adapters simples
- evolução incremental
- core limpo
- comportamento atual preservado sempre que possível

## Critério de sucesso

A refatoração será considerada bem-sucedida se:

- `inventory` não importar diretamente `pathfinder_2e`
- wallet/currency não formatar moeda Pathfinder em rota genérica
- regras específicas de slot/moeda/item estiverem no motor do sistema
- o core conseguir chamar regras via adapter/registry
- o projeto continuar simples para MVP
- adicionar D&D 5e no futuro não exigir espalhar `if system === ...` pelo core
