# Pathfinder 2e — Magias vinculadas à ficha

## Propósito

Permitir que uma ficha completa de Pathfinder 2e registre magias do catálogo da
campanha sem obrigar o QuestHub a validar classe, tradição, preparação, slots ou
qualquer outra regra de legalidade da construção.

A mesa continua decidindo o que o personagem pode usar. O QuestHub oferece
persistência, organização por Rank e uma base estável para futuras automações.

## Decisão

Uma magia é uma extensão mecânica de `CampaignCharacterSheet`.

```text
CampaignActor
└── CampaignCharacterSheet
    └── CampaignCharacterSpell[]
```

A magia não pertence diretamente a `CampaignActor` e nunca pertence a
`CampaignToken`.

O vínculo é persistido em registros próprios e não dentro do JSON versionado da
ficha. Dessa forma, adicionar ou remover uma magia não substitui o documento
completo da ficha e não exige uma nova versão do schema mecânico.

## Rank

`CampaignCharacterSpell.baseRank` registra o Rank original da definição da
magia no catálogo.

- O catálogo Remaster utilizado pelo QuestHub trabalha com Ranks `1` a `10`.
- Truques possuem Rank `1` e são distinguidos pela trait mecânica `cantrip`.
- O Rank é sempre obtido do catálogo; o cliente não pode escolhê-lo.
- `baseRank` não representa o Rank usado em uma conjuração elevada.

Uma futura fonte de conjuração poderá registrar preparação, Rank de lançamento,
slots, repertório ou heightening sem alterar o significado deste vínculo inicial.
