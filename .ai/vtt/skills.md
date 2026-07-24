# VTT: Skills

* React e estado local para interacao visual.
* Socket.IO para presenca, chat e eventos de mesa.
* Prisma para cenas, tokens e estado persistido.
* Canvas 2D/OffscreenCanvas para FOG e iluminacao por mascara, encapsulados pelo modulo `fog_of_war` e fora dos componentes visuais da mesa.
* Com a sessao offline, comandos administrativos do Mestre devem validar sua associacao persistida com a campanha, sem depender de `socket.data.characterRole`, preenchido pelo fluxo da sessao online.
* Coordenadas, grid, zoom e movimentacao permanecem genericos.
* Nenhum componente do VTT importa regras, fichas, bestiarios, inventario, economia, combate mecanico ou rulesets.
* `apps/api/src/server.ts` e o composition root exclusivo do VTT e nao importa
  registradores de `game_systems`; a composicao executavel externa pertence a
  `apps/api/src/main.ts`.
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
* Linha de visao, iluminacao, exploracao e filtros noturnos seguem os contratos de `.ai/fog_of_war/`; o VTT apenas integra suas camadas e comandos.
* Atualizacoes de FOG durante movimento nao podem causar rerender completo de `CampaignOverviewPage` nem escrita no banco por frame.
* Controles de grid devem calcular e publicar o proximo estado de forma atomica para evitar atualizacoes com props defasadas.
* Escala fisica do grid usa `metersPerCell` como fonte canonica para quadrados e hexagonos. O dominio restringe e normaliza o valor para a lista discreta `0.5`, `1..10`, `20..100` em dezenas e `200..1000` em centenas. Pes sao somente apresentacao convertida por `1ft = 0.3048m`, reutilizando o mesmo dominio de conversao de `Effect Area`; pixels representam apenas calibracao visual sobre o mapa.
* Paineis administrativos flutuantes devem ser arrastaveis, redimensionaveis, minimizaveis e independentes entre si.
* Controles de transformacao de Token usam preview local durante o arraste e publicam uma unica alteracao confirmada ao soltar o ponteiro; tamanho e limitado e quantizado no dominio. A rotacao acumula deltas angulares continuos durante o gesto e e normalizada entre 0 e 359 graus apenas na confirmacao.
