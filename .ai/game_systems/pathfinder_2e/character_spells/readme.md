# Pathfinder 2e — Magias vinculadas à ficha

## Propósito

Permitir que uma ficha completa de Pathfinder 2e registre magias do catálogo da
campanha sem obrigar o QuestHub a validar classe, tradição, preparação, slots ou
qualquer outra regra de legalidade da construção.

A mesa continua decidindo o que o personagem pode usar. O QuestHub oferece
persistência, organização por Rank e uma base estável para futuras automações.

Magias vinculadas também podem publicar uma ação de Encounter associada
manualmente à ferramenta neutra `VTT_AREA_EFFECT`. A associação padrão pertence
ao conteúdo do catálogo dentro da campanha. Uma entrada específica da ficha
pode sobrescrever esse padrão sem alterar o catálogo nem as demais fichas, e a
remoção da sobrescrita restaura o padrão vigente.

A configuração direta pela magia reutiliza o mesmo editor de templates da
toolbar, mantendo o campo de origem, sem abrir, expandir ou ativar a própria
toolbar de Area Effect.

A lista de magias sinaliza visualmente quando existe uma configuração de Area
Effect efetiva. A sinalização diferencia o padrão herdado do catálogo de uma
personalização exclusiva da ficha, enquanto magias sem associação mantêm a
ação visual de configuração inicial.

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

## Limite da automação espacial

O vínculo apenas descreve seleção de alvos ou posicionamento de uma área
efêmera. Ele não resolve dano, cura, salvamento, duração, consumo de recurso ou
qualquer outra consequência mecânica da magia.
