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

## 4. Compatibilidade de Ficha
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

## 5. Regras
* O adapter Pathfinder 2e deve ser descoberto pelo registry de `game_systems`.
* A ficha Pathfinder 2e deve ser tratada como uma capacidade do ruleset.
* Classes, ancestralidades, herancas, backgrounds, feats, spells e itens devem ser adicionados como modulos/capacidades do ruleset Pathfinder 2e, nao como modulos globais.
* O VTT pode receber labels e metadados opcionais de rolagem, mas deve continuar persistindo rolagens como dado generico.

## 6. Criterios de Aceitacao
* E possivel evoluir ficha Pathfinder 2e sem alterar o modelo de VTT.
* E possivel adicionar catalogos Pathfinder 2e sem alterar `campaigns`.
* E possivel adicionar D&D 5e como ruleset separado usando o mesmo contrato de registry.
