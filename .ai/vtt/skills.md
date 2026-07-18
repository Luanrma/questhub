# VTT: Skills

* React e estado local para interacao visual.
* Socket.IO para presenca, chat e eventos de mesa.
* Prisma para cenas, tokens e estado persistido.
* Com a sessao offline, comandos administrativos do Mestre devem validar sua associacao persistida com a campanha, sem depender de `socket.data.characterRole`, preenchido pelo fluxo da sessao online.
* Coordenadas, grid, zoom e movimentacao permanecem genericos.
* Nenhum componente do VTT importa regras, fichas, bestiarios, inventario, economia, combate mecanico ou rulesets.
* Fluxos de teste do VTT devem conseguir criar tokens genericos sem `characterId` e sem qualquer modulo de sistema de jogo.
* O catalogo de imagens locais de Token deve ser consultado dinamicamente pelo modulo `assets` e nunca embutido no bundle; remover um arquivo local deve remove-lo da proxima abertura do seletor.
* O drag-and-drop nativo de Tokens deve usar a mesma operacao em `DataTransfer.effectAllowed` e `DataTransfer.dropEffect`; combinacoes incompativeis podem impedir o evento `drop` no navegador.
* Atalhos globais devem ignorar inputs, textareas, selects e conteudo editavel.
* Movimento medido usa um comando WebSocket autoritativo com trajeto completo, instante de inicio e duracao calculada no servidor; os clientes interpolam a mesma timeline sem publicar cada frame.
* A duracao Smooth e adaptativa: trajetos curtos permanecem legiveis e trajetos longos aceleram progressivamente, com limite superior para evitar animacoes excessivamente demoradas.
* Colisao de paredes para movimento medido deve validar cada segmento do trajeto no backend.
* O cliente tambem valida o novo segmento antes de criar um waypoint, oferecendo resposta imediata; essa verificacao nunca substitui a validacao autoritativa do backend.
* `Ctrl+arraste` na ferramenta de paredes cria os quatro segmentos de um retangulo.
* Estados de porta devem ser normalizados: uma porta aberta nao pode permanecer trancada, obstruida ou encostada.
* Controles de grid devem calcular e publicar o proximo estado de forma atomica para evitar atualizacoes com props defasadas.
* Paineis administrativos flutuantes devem ser arrastaveis, redimensionaveis, minimizaveis e independentes entre si.
