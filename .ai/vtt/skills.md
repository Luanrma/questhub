# Modulo: VTT (Skills & Tech)

## 1. Stack Tecnologica
* React e React Router para composicao de layout e rotas.
* `@3d-dice/dice-box` para rolagem visual 3D de dados com fisica.
* Tailwind CSS e CSS global para grid/overlay responsivo.
* lucide-react para icones de ferramentas e navegacao.
* `CharacterSheetModal` existente para ficha arrastavel.

## 2. Padroes
* Persistent Canvas: o grid VTT pertence ao layout de campanha e nao deve sumir ao abrir paineis.
* Collapsible Table Overlays: overlays do VTT podem reduzir sua area ocupada sem desmontar estado local importante, como chat, cenas preparadas ou ferramentas ativas.
* Overlay Desktop Navigation: em telas grandes, o menu e sobreposto e nunca reserva espaco da mesa.
* Compact Overlay Navigation: em telas pequenas, o menu vira barra inferior sobreposta.
* Role-aware Navigation: itens do menu variam conforme `Campaign.myRole`.
* Reuse Existing Modal: ficha do jogador usa o modal de ficha ja existente.
* Scene-owned Table State: configuracoes visuais da mesa, tokens e cena ativa devem vir de `campaign_scene`.
* Layout-mounted Scene Renderer: `CampaignLayout` mantem a mesa montada, mas consome snapshots de cena em vez de possuir estado persistente proprio.
* Master-owned Token Placement: o Mestre instancia tokens no board por drag and drop a partir de modal proprio; Players nao criam nem recentralizam tokens.
* Owner-only Token Movement: apos o drop do Mestre, apenas o Player dono pode mover o proprio token enquanto a sessao estiver ativa, o Mestre poderá mover todos os tokens se a sessao estiver `PAUSED`.
* Session Pause State: a sessao em memoria tem estado `ACTIVE` ou `PAUSED`; `PAUSED` bloqueia interacoes VTT em tempo real exceto chat, mas mantém TUDO desbloqueado para o Mestre.
* Grid-coordinate Tokens: a posicao do token usa coordenadas logicas do grid, nao percentual de viewport.
* Realtime Table Broadcast: configuracoes de cena sao propagadas por Socket.IO para sockets autorizados a visualizar a cena.
* Realtime Token Broadcast: criacao e movimentacao de token sao propagadas por Socket.IO para Mestre e Players autorizados.
* Lifecycle Table Persistence: grid e tokens alterados durante a sessao sao persistidos apenas no inicio/encerramento da sessao, nao em cada evento realtime.
* Master Token Toolbar: menu contextual de token pertence ao Mestre e emite acoes validadas no servidor.
* Realtime Measurement Tool: medidas temporarias sao calculadas no cliente, armazenadas em memoria na sessao e sincronizadas por Socket.IO.
* Grid-aware Measurement: grid quadrado converte pixels para metros por `metersPerCell`; grid hexagonal mede quantidade de passos entre centros de hexagonos.
* Grid-owned Measurement Style: cores de medicao pertencem ao modal de configuracao do grid, nao a botoes soltos da toolbar.
* Route-as-Modal-State: rotas internas da campanha indicam qual overlay esta aberto, sem desmontar o canvas VTT.
* Generic Table Engine: mapa, token, chat, dado, cena e movimentacao sao modelados sem campos especificos de ruleset.
* Ephemeral 3D Overlay: dados 3D sao efeitos temporarios sincronizados por Socket.IO e nao alteram estado persistente da mesa.
* Dice Box Engine: a fisica e renderizacao dos dados 3D sao responsabilidade de `@3d-dice/dice-box`.
* Overlay-owned Dice State: o estado da animacao de dado pertence ao overlay 3D, nao ao `CampaignLayout`, para evitar re-renderizar a arvore principal da campanha.
* Persistent Dice Overlay: fechar a ferramenta de dados oculta apenas o painel de controle; o overlay 3D permanece montado e preserva os dados acumulados ate limpeza explicita ou encerramento da sessao.
* Dice Roller Module: tipos, wrappers e modal de dados pertencem a `apps/web/src/vtt/dice-roller`.
* Single Dice Implementation: nao manter uma segunda engine visual de dados paralela a `@3d-dice/dice-box`.
* Ruleset Metadata Boundary: metadados especificos podem acompanhar eventos, mas nao podem alterar o contrato base do VTT.

## 3. Restricoes
* Nao adicionar bibliotecas visuais fora de uso concreto no VTT.
* Nao criar estado persistente falso para sessoes.
* Nao perder o estado vivo de tokens ao encerrar sessao; persistir o snapshot final em `campaign_scene`.
* Nao persistir medidas enquanto nao existir contrato de cena/mapa.
* Nao perder configuracao viva de grid ao encerrar sessao; persistir o snapshot final em `campaign_scene`.
* Nao permitir que jogadores emitam alteracoes de grid.
* Nao permitir que um jogador crie, recentralize, remova, oculte ou mova token de outro personagem.
* Nao permitir que o Mestre mova token de Player durante sessao ativa; O Meste pode mover token durante sessao pausada.
* Nao persistir estado `ACTIVE`/`PAUSED` da sessao no banco neste MVP.
* Nao vincular posicao de token ao tamanho da tela disponivel.
* Nao calcular medidas por percentual de viewport.
* Nao usar `squareMeters` como escala canonica; a escala do grid quadrado e `metersPerCell`.
* Nao aplicar a escala em metros quadrados ao grid hexagonal.
* Nao renderizar rota hexagonal como linha; cada hexagono da rota deve ser pintado por completo.
* Nao duplicar implementacao de ficha.
* Nao bloquear o VTT por dados administrativos que possam carregar em overlay.
* Nao renderizar o VTT como rota filha; ele pertence ao `CampaignLayout` e deve permanecer montado.
* Nao importar modulos internos de `game_systems/pathfinder_2e` ou `game_systems/dnd_5e` diretamente no VTT.
* Nao adicionar campos mecanicos especificos de sistema ao token generico.
* A camada de dados deve usar `pointer-events: none` quando estiver sobre a mesa para nao bloquear grid, tokens, medicoes ou controles.
* Rolagens de dado nao devem depender de estado visual no layout principal.
* Fechar a ferramenta de dados nao deve destruir a engine `@3d-dice/dice-box` nem limpar os dados visiveis.
* Assets da `dice-box` devem ser servidos por `apps/web/public/assets/dice-box`.
* Nao criar `node_modules`, `package.json` ou app demo dentro de `apps/web/public`.
