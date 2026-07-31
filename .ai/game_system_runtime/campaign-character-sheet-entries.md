# Campaign Character Sheet Entries

## Decisão

Coleções mecânicas que crescem independentemente do documento principal da ficha
são persistidas como entradas genéricas vinculadas a `CampaignCharacterSheet`.

```text
CampaignActor
└── CampaignCharacterSheet
    └── CampaignCharacterSheetEntry[]
```

A entidade compartilhada não conhece magias, talentos, poderes, Ranks, círculos,
slots, mana ou qualquer outra regra de um game system.

## Modelo conceitual

```ts
type CampaignCharacterSheetEntry = {
  id: string
  characterSheetId: string
  namespace: string
  typeKey: string
  catalogNamespace: string | null
  catalogContentId: string | null
  schemaVersion: number
  data: unknown
  state: unknown | null
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}
```

## Semântica

- `namespace` identifica o módulo ou sistema responsável pela entrada.
- `typeKey` é uma chave opaca cujo significado pertence ao namespace.
- `catalogNamespace` e `catalogContentId` formam uma referência opcional e
  indivisível para a definição de catálogo que originou a entrada.
- `schemaVersion` versiona o formato específico armazenado em `data` e `state`.
- `data` guarda o snapshot mecânico interpretado pelo game system.
- `state` guarda estado mutável e opcional daquela entrada na ficha.
- `sortOrder` permite ordenação persistida sem conhecer a semântica do conteúdo.

## Responsabilidades do Core

O Core pode:

- persistir e excluir entradas junto com a ficha;
- garantir integridade da referência de catálogo;
- limitar escopo por ficha e campanha;
- transportar `data` e `state` como JSON opaco;
- ordenar e paginar usando campos genéricos.

O Core não pode:

- interpretar `typeKey` para executar regras;
- consultar propriedades internas como Rank ou custo;
- validar legalidade mecânica;
- criar colunas específicas para apenas um game system;
- expor dados mecânicos diretamente ao VTT sem projeção do provider.

## Responsabilidades do game system

Cada provider define:

- namespaces e tipos que reconhece;
- schemas de `data` e `state`;
- criação e migração dos snapshots;
- filtros e projeções de leitura;
- regras de autorização adicionais;
- automações e ações derivadas.

Sistemas personalizados podem registrar namespaces próprios e usar a mesma
persistência, sem migrations ou tabelas exclusivas.

## Invariantes

1. A entrada pertence a exatamente uma `CampaignCharacterSheet`.
2. Excluir definitivamente a ficha exclui suas entradas por cascade.
3. Referências de catálogo possuem ambos os campos preenchidos ou ambos nulos.
4. `schemaVersion` é positivo.
5. `sortOrder` não é negativo.
6. Nenhuma coluna compartilhada representa regra de um sistema concreto.
7. Entradas originadas da mesma identidade de catálogo são únicas por ficha,
   namespace e tipo.

## Exemplo PF2e

```json
{
  "namespace": "questhub:pathfinder_2e",
  "typeKey": "spell",
  "catalogNamespace": "questhub:pathfinder_2e:spells:v1",
  "catalogContentId": "pf2e:spell:spells-srd:electric-arc",
  "schemaVersion": 1,
  "data": {
    "name": "Electric Arc",
    "rank": 1,
    "traits": ["cantrip", "electricity"]
  },
  "state": null
}
```

Neste exemplo, `rank` e `cantrip` pertencem ao JSON interpretado pelo provider
PF2e. Eles não fazem parte do contrato relacional compartilhado.
