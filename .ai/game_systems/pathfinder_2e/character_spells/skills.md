# Pathfinder 2e — Magias vinculadas à ficha — Restrições técnicas

- Implementação exclusiva em `apps/api/src/game_systems/pathfinder_2e/**` e
  `apps/web/src/features/pathfinder-2e/**`, além da persistência Prisma.
- O VTT Core não importa componentes, rotas, tipos ou regras desta capacidade.
- A chave mecânica é `catalogContentId`; nomes traduzidos nunca são persistidos
  como identidade da magia.
- O backend resolve `baseRank` diretamente da definição canônica do catálogo.
- Ranks aceitos ficam entre `1` e `10`; truques são reconhecidos pela trait
  `cantrip`, não por Rank `0`.
- A API rejeita conteúdo inexistente ou pertencente a outro domínio.
- O snapshot persistido usa os dados originais em `en-US`; locale afeta somente
  a apresentação retornada.
- O namespace inicial é `questhub:pathfinder_2e:spells:v1`.
- A relação é exclusiva por `characterSheetId + catalogNamespace + catalogContentId`.
- A camada de interface não modifica `CampaignCharacterSheet.data` para incluir
  ou remover magias.
- Alterações podem publicar invalidação neutra da apresentação do Token, mas não
  criam ações executáveis nesta entrega.
- Testes devem cobrir truques de Rank `1`, Rank `10`, conteúdo inválido e
  construção da apresentação localizada.
