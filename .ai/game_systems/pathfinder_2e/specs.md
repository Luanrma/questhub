# Submodulo: Pathfinder 2e (Specs & Contracts)

## 1. Responsabilidade
Definir o adapter Pathfinder 2e e os limites para crescimento do ruleset.

## 2. Identificador

```ts
const PATHFINDER_2E_SYSTEM_ID = 'PATHFINDER_2E'
```

## 3. Capacidades Iniciais

```ts
const pathfinder2eAdapter = {
  id: 'PATHFINDER_2E',
  label: 'Pathfinder 2e',
  version: 1,
  status: 'PLAYABLE',
  characterSheet: {
    dataKey: 'pathfinder2e',
    version: 1
  },
  catalogs: {
    ancestries: false,
    heritages: false,
    backgrounds: false,
    classes: false,
    feats: false,
    spells: false,
    items: false
  }
}
```

Os catalogos aparecem como capacidades conhecidas, mas permanecem `false` ate existirem contratos e implementacao.

O bestiario Pathfinder 2e e uma capacidade de catalogo ativa no package interno. Ele expoe criaturas normalizadas e ficha simplificada conforme `.ai/game_systems/pathfinder_2e/bestiary/specs.md`.

Hazards Pathfinder 2e sao entradas especializadas do Bestiario/Compendio e possuem regras proprias em `.ai/game_systems/pathfinder_2e/hazards/`. Eles nao devem ser tratados como criaturas nem como tokens NPC.

## 4. Inventario e Equipamento

O adapter PF2e de inventario deve traduzir as regras do sistema para o contrato generico `InventorySystemAdapter`, sem exigir que o modulo `inventory` conheca regras PF2e.

### 4.1 Usage PF2e

```ts
type Pathfinder2eCarryingUsage = 'held' | 'worn' | 'stowed'
```

* `held`: item nas maos. Armas, escudos, varinhas, cajados, focos e ferramentas em uso ativo consomem uma ou duas maos.
* `worn`: item vestido ou preparado no corpo para acesso rapido. Armadura, roupas magicas, mochilas, bandoleiras, bolsos e bainhas entram neste grupo.
* `stowed`: item guardado em mochila/conteiner fechado. Conta para inventario/bulk, mas nao deve ser tratado como pronto para combate.

### 4.2 Opcoes de Equipamento Expostas ao Core

```ts
type Pathfinder2eEquipmentOptionKey =
  | 'main_hand'
  | 'off_hand'
  | 'two_hands'
  | 'armor'
  | 'shield'
  | 'worn'
  | 'backpack'
  | 'consumable'
  | 'other'
```

Notas:

* `main_hand` e `off_hand` representam as duas maos disponiveis.
* `two_hands` consome as duas maos.
* `shield` representa um escudo ativo e tambem consome uma mao.
* `armor` representa a armadura vestida.
* `worn` representa inventario rapido/readied ou itens magicos vestidos.
* `backpack` representa mochila/conteiner como item carregado. Itens stowed dentro de mochila/conteiner continuam no inventario geral (`InventoryItem.state = STORED`) ate existir fluxo proprio de containers.
* `consumable` e compatibilidade de catalogo; consumiveis devem ser tratados como `worn` para acesso rapido ou `held` quando usados.
* `other` cobre anexos/affixed, runas, talismas, gadgets e casos que precisam de fluxo especifico futuro.

### 4.3 Recursos Consumidos

O adapter deve retornar `resourceUsage` opaco para o core:

```ts
main_hand -> [{ resource: 'pf2e:hand:main', amount: 1, exclusive: true }]
off_hand  -> [{ resource: 'pf2e:hand:off', amount: 1, exclusive: true }]
two_hands -> [
  { resource: 'pf2e:hand:main', amount: 1, exclusive: true },
  { resource: 'pf2e:hand:off', amount: 1, exclusive: true }
]
shield    -> [
  { resource: 'pf2e:shield', amount: 1, exclusive: true },
  { resource: 'pf2e:hand:off', amount: 1, exclusive: true }
]
armor     -> [{ resource: 'pf2e:armor', amount: 1, exclusive: true }]
invested item -> { resource: 'pf2e:investiture', amount: 1, exclusive: false }
```

O adapter PF2e deve bloquear:

* arma/objeto de duas maos junto com qualquer outro item em `main_hand` ou `off_hand`;
* escudo junto com outro item na mao secundaria;
* segunda armadura ativa;
* segundo escudo ativo;
* 11o item com trait `invested`.

### 4.4 Limites Fora do Escopo Atual

Ainda nao ha automacao completa de:

* trocar item entre `worn` e `held` consumindo acoes;
* abrir/remover mochila para acessar itens stowed em containers persistentes;
* anexar talisma/gadget/runa a arma ou armadura especifica;
* aplicar bonus mecanicos de armadura, escudo, runas, cajados, varinhas ou itens investidos na ficha.

### 4.5 Grupos de Apresentacao

O adapter PF2e deve devolver grupos de equipamento para a UI generica. A interface nao deve agrupar nem exibir chaves tecnicas como `main_hand`, `off_hand`, `armor` ou `shield`.

Grupos iniciais:

```ts
[
  { id: 'held', label: 'Segurados', itemIds: [...] },
  { id: 'worn', label: 'Vestidos', itemIds: [...] },
  { id: 'invested', label: 'Investidos', itemIds: [...], metadata: { limit: 10 } },
  { id: 'prepared', label: 'Preparados', itemIds: [...] },
]
```

Regras de classificacao inicial:

* `main_hand`, `off_hand`, `two_hands`, `shield` ou recursos `pf2e:hand:*` -> `Segurados`;
* itens com trait `invested` -> `Investidos`;
* `consumable` -> `Preparados`;
* demais itens equipados/worn, incluindo armaduras, mochilas e roupas magicas nao investidas -> `Vestidos`;
* `other`/affixed pode ficar em `Vestidos` ate existir fluxo proprio de anexos.

A mesma lista persistida de `EquippedItem` continua existindo para mutacoes e auditoria; os grupos sao uma projecao de apresentacao.

## 5. Compatibilidade de Ficha
O envelope atual deve continuar valido:

```json
{
  "system": "PATHFINDER_2E",
  "version": 1,
  "data": {
    "pathfinder2e": {}
  }
}
```

## 6. Regras
* O adapter Pathfinder 2e deve ser descoberto pelo registry de `game_systems`.
* A ficha Pathfinder 2e deve ser tratada como uma capacidade do ruleset.
* Classes, ancestralidades, herancas, backgrounds, feats, spells e itens devem ser adicionados como modulos/capacidades do ruleset Pathfinder 2e, nao como modulos globais.
* O VTT pode receber labels e metadados opcionais de rolagem, mas deve continuar persistindo rolagens como dado generico.

## 7. Criterios de Aceitacao
* E possivel evoluir ficha Pathfinder 2e sem alterar o modelo de VTT.
* E possivel adicionar catalogos Pathfinder 2e sem alterar `campaigns`.
* E possivel adicionar D&D 5e como ruleset separado usando o mesmo contrato de registry.
