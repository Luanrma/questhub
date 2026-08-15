# Pathfinder 2e — Moedas — Diretrizes técnicas

- Código exclusivo em `apps/api/src/game_systems/pathfinder_2e/currency` e
  `apps/web/src/features/pathfinder-2e/currency`.
- O saldo usa `CampaignCharacterSheetEntry`, modelo neutro já existente, sem
  migration nem coluna PF2e no schema Prisma.
- A entrada é identificada por namespace, `typeKey` e referência canônica fixa;
  o VTT não interpreta `data`.
- A transferência ocorre em uma transação Prisma serializável e valida todos os
  saldos antes de gravar origem e destino.
- A UI não calcula autorização nem autoriza valor: o backend valida campanha,
  sistema, ficha completa, membro ativo, controle do ator e saldo.
- Testes unitários cobrem validação, saldo insuficiente, delta e transferência.
