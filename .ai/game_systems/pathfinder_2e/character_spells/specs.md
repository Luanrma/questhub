# Pathfinder 2e — Magias vinculadas à ficha — Especificação

## Modelo

```text
CampaignActor 1 ── owns ── 0..1 CampaignCharacterSheet
CampaignCharacterSheet 1 ── owns ── N CampaignCharacterSheetEntry
```

Uma magia PF2e utiliza a entidade compartilhada com:

```ts
{
  namespace: 'questhub:pathfinder_2e'
  typeKey: 'spell'
  catalogNamespace: 'questhub:pathfinder_2e:spells:v1'
  catalogContentId: string
  schemaVersion: 1
  data: Pathfinder2eSpellData
  state: null
}
```

`Pathfinder2eSpellData` contém `rank`, traits, tradições, descrição e demais
propriedades específicas. Nenhuma dessas propriedades vira coluna da tabela
compartilhada.

## Invariantes

1. O vínculo pertence a uma `CampaignCharacterSheet` completa de Pathfinder 2e.
2. Fichas simplificadas originadas do Bestiário não recebem este vínculo.
3. Uma mesma definição do catálogo aparece no máximo uma vez por ficha,
   namespace e tipo.
4. `catalogContentId` deve identificar uma entrada do domínio `SPELL`.
5. `data.rank` é derivado do catálogo e deve estar entre `1` e `10`.
6. Truques possuem Rank `1` e trait `cantrip`.
7. O registro mantém um snapshot canônico dos dados originais da magia.
8. Nome e descrição localizados são resolvidos no momento da leitura.
9. Excluir Token, remover controlador ou trocar o Token vinculado preserva as magias.
10. Excluir definitivamente a ficha exclui suas entradas por cascade.
11. Arquivar o ator preserva a ficha e seus vínculos.
12. O vínculo não declara que a magia está preparada, conhecida, autorizada ou disponível para uso.
13. Classe, tradição, slots, repertório, foco e heightening não bloqueiam a inclusão no MVP.
14. A persistência compartilhada não possui coluna de Rank, magia ou regra PF2e.

## Permissões

- Mestre ativo da campanha pode listar, adicionar e remover.
- Player ativo pode operar somente a ficha do ator que controla.
- Toda consulta valida campanha, ficha, sistema e arquivamento do ator.
- O cliente nunca envia Rank, snapshot, namespace, tipo ou sistema.

## Endpoints PF2e

```text
GET    /api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells
GET    /api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells/catalog
POST   /api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells
DELETE /api/campaigns/:campaignId/character-sheets/:sheetId/pathfinder-2e/spells/:spellId
```

A inclusão recebe somente:

```ts
{ contentId: string }
```

A consulta de catálogo aceita busca, Rank opcional, locale, página e limite.
O filtro por Rank pertence à rota PF2e e é aplicado sobre o catálogo/snapshot,
não sobre uma coluna genérica.

## Interface

A ficha completa registra uma página `Magias`.

- magias vinculadas são agrupadas por Rank;
- truques são destacados dentro do Rank `1`;
- o catálogo pode ser filtrado por Rank `1` a `10`;
- a busca não remove magias já vinculadas, mas desabilita nova inclusão;
- cada vínculo pode ser removido individualmente;
- a descrição pode ser consultada sem sair da ficha;
- a interface informa que a legalidade é decidida pela mesa.

## Fora do escopo

- fontes de conjuração;
- tradição obrigatória;
- validação de classe;
- slots e preparação;
- repertório espontâneo;
- pontos de foco;
- conjuração inata;
- heightening e Rank efetivo de lançamento;
- execução de ação, rolagem, dano ou área de efeito;
- projeção das magias em `TokenPresentation.actions`.

## Critérios de aceite

1. uma ficha completa adiciona uma magia pelo catálogo;
2. o backend ignora qualquer Rank informado pelo cliente;
3. a magia reaparece após recarregar a página;
4. Ranks `1..10` são separados visualmente e truques são destacados;
5. a mesma magia não pode ser vinculada duas vezes à mesma ficha;
6. duas fichas podem possuir a mesma magia independentemente;
7. remover uma magia não altera o catálogo nem outra ficha;
8. um Bárbaro pode receber uma magia sem bloqueio de regra;
9. um usuário de outra campanha ou sem controle recebe rejeição;
10. excluir o Token preserva os vínculos;
11. o VTT Core não recebe imports ou vocabulário específico de magias;
12. o schema compartilhado não contém `baseRank`, `spellLevel` ou equivalente.
