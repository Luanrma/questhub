# Pathfinder 2e — Magias vinculadas à ficha

## Propósito

Permitir que uma ficha completa de Pathfinder 2e registre magias do catálogo da
campanha sem obrigar o QuestHub a validar classe, tradição, preparação, slots ou
qualquer outra regra de legalidade da construção.

A mesa continua decidindo o que o personagem pode usar. O QuestHub oferece
persistência, organização por Rank e uma base estável para futuras automações.

## Decisão

Uma magia é uma extensão mecânica da `CampaignCharacterSheet`, materializada
pela persistência compartilhada de entradas da ficha.

```text
CampaignActor
└── CampaignCharacterSheet
    └── CampaignCharacterSheetEntry[]
        └── namespace = questhub:pathfinder_2e
            typeKey = spell
```

A magia não pertence diretamente a `CampaignActor` e nunca pertence a
`CampaignToken`.

O vínculo não fica dentro do JSON versionado da ficha. Adicionar ou remover uma
magia não substitui o documento principal da ficha.

A tabela compartilhada também não conhece o conceito de magia. O provider PF2e
seleciona e interpreta somente entradas com seu namespace e seu `typeKey`.

## Rank

O Rank original é armazenado somente no snapshot PF2e em `data.rank`.

- o catálogo Remaster usa Ranks `1` a `10`;
- truques possuem Rank `1` e são identificados pela trait `cantrip`;
- o Rank é sempre obtido do catálogo; o cliente não pode escolhê-lo;
- nenhuma coluna relacional compartilhada representa Rank;
- `data.rank` não representa o Rank usado em uma conjuração elevada.

Uma futura fonte de conjuração poderá usar `state` ou outras entradas PF2e para
registrar preparação, Rank de lançamento, slots, repertório ou heightening sem
alterar o contrato genérico do QuestHub.
