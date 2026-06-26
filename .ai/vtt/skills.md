# Modulo: VTT (Skills & Tech)

## 1. Stack Tecnologica
* React e React Router para composicao de layout e rotas.
* React Three Fiber e Three.js para rolagem visual 3D de dados.
* Tailwind CSS e CSS global para grid/overlay responsivo.
* lucide-react para icones de ferramentas e navegacao.
* `CharacterSheetModal` existente para ficha arrastavel.

## 2. Padroes
* Persistent Canvas: o grid VTT pertence ao layout de campanha e nao deve sumir ao abrir paineis.
* Overlay Desktop Navigation: em telas grandes, o menu e sobreposto e nunca reserva espaco da mesa.
* Compact Overlay Navigation: em telas pequenas, o menu vira barra inferior sobreposta.
* Role-aware Navigation: itens do menu variam conforme `Campaign.myRole`.
* Reuse Existing Modal: ficha do jogador usa o modal de ficha ja existente.
* Layout-owned Table State: configuracoes visuais da mesa ficam no `CampaignLayout`, nao em rota filha.
* Session-owned Realtime Tokens: tokens temporarios do MVP ficam em memoria no servidor durante a sessao ativa e sao refletidos no `CampaignLayout`.
* Grid-coordinate Tokens: a posicao do token usa coordenadas logicas do grid, nao percentual de viewport.
* Realtime Table Broadcast: configuracoes de mesa sao propagadas por Socket.IO para a sala da campanha.
* Realtime Token Broadcast: criacao e movimentacao de token sao propagadas por Socket.IO para Mestre e Players online.
* Realtime Measurement Tool: medidas temporarias sao calculadas no cliente, armazenadas em memoria na sessao e sincronizadas por Socket.IO.
* Grid-aware Measurement: grid quadrado converte pixels para metros pela area configurada da celula; grid hexagonal mede quantidade de passos entre centros de hexagonos.
* Grid-owned Measurement Style: cores de medicao pertencem ao modal de configuracao do grid, nao a botoes soltos da toolbar.
* Route-as-Modal-State: rotas internas da campanha indicam qual overlay esta aberto, sem desmontar o canvas VTT.
* Generic Table Engine: mapa, token, chat, dado, cena e movimentacao sao modelados sem campos especificos de ruleset.
* Ephemeral 3D Overlay: dados 3D sao efeitos temporarios do cliente e nao alteram estado persistente da mesa.
* Ruleset Metadata Boundary: metadados especificos podem acompanhar eventos, mas nao podem alterar o contrato base do VTT.

## 3. Restricoes
* Nao adicionar bibliotecas visuais fora de uso concreto no VTT.
* Nao criar estado persistente falso para sessoes ou mapas.
* Nao persistir tokens enquanto nao existir contrato de cena/mapa.
* Nao persistir medidas enquanto nao existir contrato de cena/mapa.
* Nao persistir configuracao de grid no banco ate existir contrato de cena/mapa.
* Nao permitir que jogadores emitam alteracoes de grid.
* Nao permitir que um jogador mova token de outro personagem.
* Nao vincular posicao de token ao tamanho da tela disponivel.
* Nao calcular medidas por percentual de viewport.
* Nao misturar medida de distancia em metros com area da celula.
* Nao aplicar a escala em metros quadrados ao grid hexagonal.
* Nao renderizar rota hexagonal como linha; cada hexagono da rota deve ser pintado por completo.
* Nao duplicar implementacao de ficha.
* Nao bloquear o VTT por dados administrativos que possam carregar em overlay.
* Nao renderizar o VTT como rota filha; ele pertence ao `CampaignLayout` e deve permanecer montado.
* Nao importar modulos internos de `game_systems/pathfinder_2e` ou `game_systems/dnd_5e` diretamente no VTT.
* Nao adicionar campos mecanicos especificos de sistema ao token generico.
* A camada R3F de dados deve ser `pointer-events: none` para nao bloquear grid, tokens, medicoes ou controles.
