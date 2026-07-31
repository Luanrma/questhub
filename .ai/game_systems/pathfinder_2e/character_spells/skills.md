# Pathfinder 2e — Magias vinculadas à ficha — Restrições técnicas

- Implementação exclusiva em `apps/api/src/game_systems/pathfinder_2e/**` e
  `apps/web/src/features/pathfinder-2e/**`, além da persistência Prisma genérica.
- O VTT Core não importa componentes, rotas, tipos ou regras desta capacidade.
- A persistência compartilhada é `CampaignCharacterSheetEntry` e não possui
  colunas específicas de magia, Rank, tradição, slots ou classes.
- O provider PF2e identifica suas entradas por:
  - `namespace = questhub:pathfinder_2e`;
  - `typeKey = spell`;
  - `catalogNamespace = questhub:pathfinder_2e:spells:v1`.
- A chave mecânica é `catalogContentId`; nomes traduzidos nunca são persistidos
  como identidade da magia.
- O backend resolve `data.rank` diretamente da definição canônica do catálogo.
- A API rejeita conteúdo inexistente ou pertencente a outro domínio.
- O snapshot persistido usa os dados originais em `en-US`; locale afeta somente
  a apresentação retornada.
- A relação é exclusiva por ficha, namespace, tipo e identidade de catálogo.
- A camada de interface não modifica `CampaignCharacterSheet.data` para incluir
  ou remover magias.
- Alterações podem publicar invalidação neutra da apresentação do Token, mas não
  criam ações executáveis nesta entrega.
- Testes devem cobrir Rank `1`, Rank `10`, conteúdo inválido, neutralidade do
  schema compartilhado e construção da apresentação localizada.
