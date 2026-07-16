# VTT: Skills

* React e estado local para interacao visual.
* Socket.IO para presenca, chat e eventos de mesa.
* Prisma para cenas, tokens e estado persistido.
* Coordenadas, grid, zoom e movimentacao permanecem genericos.
* Nenhum componente do VTT importa regras, fichas, bestiarios, inventario, economia, combate mecanico ou rulesets.
* Fluxos de teste do VTT devem conseguir criar tokens genericos sem `characterId` e sem qualquer modulo de sistema de jogo.
* Atalhos globais devem ignorar inputs, textareas, selects e conteudo editavel.
* Paineis administrativos flutuantes devem ser arrastaveis, redimensionaveis, minimizaveis e independentes entre si.
