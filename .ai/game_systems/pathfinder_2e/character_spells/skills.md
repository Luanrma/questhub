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
- Alterações publicam invalidação neutra da apresentação do Token e podem
  projetar uma ativação espacial executável pelo contrato genérico
  `TokenPresentation.actions[].activation`.
- A configuração padrão usa a origem `CATALOG_CONTENT`; a sobrescrita por ficha
  usa `CHARACTER_SHEET_ENTRY`. A resolução sempre prioriza a entrada da ficha.
- O modal de sobrescrita deve carregar separadamente a configuração própria e o
  padrão do catálogo. Alterar campos locais não pode repetir consultas HTTP.
- Os campos do editor são compartilhados com o editor da toolbar; o fluxo da
  ficha apenas compõe os campos adicionais de Range e quantidade mínima.
- Abrir o editor pela ficha ou por `Personalizar Area Effect` não emite evento
  de ativação e não altera o estado visual da toolbar.
- O estado visual da associação deve ser projetado pela listagem de magias em
  uma consulta agregada; a UI não deve executar consultas de binding por item.
- A sinalização deve usar a mesma resolução executável da ação de Encounter;
  metadados isolados ou templates que não produzam `activation` não configuram
  visualmente a magia.
- Restaurar o padrão exclui somente a associação `CHARACTER_SHEET_ENTRY`; nunca
  altera ou exclui a associação `CATALOG_CONTENT`.
- Testes devem cobrir Rank `1`, Rank `10`, conteúdo inválido, neutralidade do
  schema compartilhado, construção da apresentação localizada, precedência da
  sobrescrita e restauração do padrão.
