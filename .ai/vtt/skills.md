# Modulo: VTT (Skills & Tech)

## 1. Stack Tecnologica
* React e React Router para composicao de layout e rotas.
* React Three Fiber, Three.js e `@react-three/rapier` para rolagem visual 3D de dados.
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
* Ephemeral 3D Overlay: dados 3D sao efeitos temporarios sincronizados por Socket.IO e nao alteram estado persistente da mesa.
* Persistent Dice Canvas: a camada React Three Fiber de dados deve permanecer montada durante a mesa para evitar recriar WebGL, Three.js, Rapier e modelos GLB a cada rolagem.
* Overlay-owned Dice State: o estado da animacao de dado pertence ao overlay 3D, nao ao `CampaignLayout`, para evitar re-renderizar a arvore principal da campanha.
* Dice Roller Module: modelos, tipos, calibracao, controlador e overlay de dados pertencem a `apps/web/src/vtt/dice-roller`.
* Generated GLTF Components: modelos GLB de dados devem ser convertidos para componentes declarativos via `gltfjsx` para evitar `scene.clone()` durante rolagens.
* Multi Dice Controller: rolagens ativas sao uma colecao; cada dado possui maquina de estados local (`idle`, `rolling`, `settled`, `fading`) controlada por refs e `useFrame`.
* Persistent Rapier Physics: o container `<Physics>` permanece montado junto do Canvas e recebe dados dinamicos sem recriar o mundo de fisica.
* Impulse-driven Dice Roll: cada dado aplica `applyImpulse` e `applyTorqueImpulse` uma unica vez ao nascer para gerar movimento fisico natural.
* Post-Physics Authoritative Alignment: ao detectar repouso pelo Rapier, a malha visual faz alinhamento suave para o quaternion calibrado da face autoritativa.
* Quaternion Face Mapping: o resultado autoritativo do backend deve animar ate o quaternion calibrado da face correspondente.
* Dev-only Dice Calibration: a rota `/dev/dice-calibration` existe apenas em `import.meta.env.DEV` para calibrar quaternions visualmente.
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
* Rolagens de dado nao devem montar/desmontar o `Canvas` R3F nem depender de estado visual no layout principal.
* A fisica Rapier de dados deve ficar isolada no modulo `dice-roller` e nao pode desmontar/remontar o Canvas ou o mundo `<Physics>` por rolagem.
* A animacao de dados nao deve depender de estado React atualizado por frame; leitura de velocidades, alinhamento, fade e maquina de estados devem ocorrer em `useFrame` por refs.
* Codigo de calibracao de dados nao deve ser exposto em producao.
