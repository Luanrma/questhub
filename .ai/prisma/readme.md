# Prisma

Prisma persiste entidades do VTT core: usuarios, identidades opcionais, campanhas, vinculos, chat, assets, cenas, tokens genericos, camera e diario.

O schema do core nao armazena fichas nem regras mecanicas. Tokens persistidos no core nao exigem `actorId`, bestiario, inventario, combate ou sistema de jogo. Extensoes futuras devem manter persistencia separada e opcional.
