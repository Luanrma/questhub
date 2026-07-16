# VTT: Skills

* React e estado local para interacao visual.
* Socket.IO para presenca, chat e eventos de mesa.
* Prisma para cenas, tokens e estado persistido.
* Coordenadas, grid, zoom e movimentacao permanecem genericos.
* Nenhum componente do VTT importa regras, fichas, bestiarios, inventario, economia, combate mecanico ou rulesets.
* Fluxos de teste do VTT devem conseguir criar tokens genericos sem `characterId` e sem qualquer modulo de sistema de jogo.
* Atalhos globais devem ignorar inputs, textareas, selects e conteudo editavel.
* `Ctrl+arraste` na ferramenta de paredes cria os quatro segmentos de um retangulo.
* Estados de porta devem ser normalizados: uma porta aberta nao pode permanecer trancada, obstruida ou encostada.
* Controles de grid devem calcular e publicar o proximo estado de forma atomica para evitar atualizacoes com props defasadas.
* Paineis administrativos flutuantes devem ser arrastaveis, redimensionaveis, minimizaveis e independentes entre si.
