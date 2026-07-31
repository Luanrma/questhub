# Pathfinder 2e — Magias vinculadas à ficha — Especificação

## Modelo

```text
CampaignActor 1 ── owns ── 0..1 CampaignCharacterSheet
CampaignCharacterSheet 1 ── owns ── N CampaignCharacterSpell
```

```ts
type CampaignCharacterSpell = {
  id: string
  characterSheetId: string
  catalogNamespace: string
  catalogContentId: string
  baseRank: number
  data: unknown
  createdAt: Date
  updatedAt: Date
}
```

## Invariantes

1. O vínculo pertence a uma `CampaignCharacterSheet` completa de Pathfinder 2e.
2. Fichas simplificadas originadas do Bestiário não recebem este vínculo.
3. Uma mesma definição do catálogo aparece no máximo uma vez por ficha.
4. `catalogContentId` deve identificar uma entrada do domínio `SPELL`.
5. `baseRank` é derivado do catálogo e deve estar entre `0` e `10`.
6. O registro mantém um snapshot canônico dos dados originais da magia.
7. Nome e descrição localizados são resolvidos no momento da leitura.
8. Excluir Token, remover controlador ou trocar o Token vinculado preserva as magias.
9. Excluir definitivamente a ficha exclui seus vínculos por cascade.
10. Arquivar o ator preserva a ficha e seus vínculos.
11. O vínculo não declara que a magia está preparada, conhecida, autorizada ou disponível para uso.
12. Classe, tradição, slots, repertório, foco e heightening não bloqueiam a inclusão no MVP.

## Permissões

- Mestre ativo da campanha pode listar, adicionar e remover.
- Player ativo pode operar somente a ficha do ator que controla.
- Toda consulta valida campanha, ficha, sistema e arquivamento do ator.
- O cliente nunca envia Rank, snapshot, namespace ou sistema.

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

## Interface

A ficha completa registra uma página `Magias`.

- magias vinculadas são agrupadas por Rank;
- Rank `0` é apresentado como `Truques`;
- o catálogo pode ser filtrado por Rank `0` a `10`;
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
4. truques e Ranks `1..10` são separados visualmente;
5. a mesma magia não pode ser vinculada duas vezes à mesma ficha;
6. duas fichas podem possuir a mesma magia independentemente;
7. remover uma magia não altera o catálogo nem outra ficha;
8. um Bárbaro pode receber uma magia sem bloqueio de regra;
9. um usuário de outra campanha ou sem controle recebe rejeição;
10. excluir o Token preserva os vínculos;
11. o VTT Core não recebe imports ou vocabulário específico de magias.
