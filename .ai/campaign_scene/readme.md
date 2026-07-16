# Campaign Scene

## O que e por que
`campaign_scene` transforma cenas em containers persistidos de estado do VTT. Uma cena guarda imagem, grid, tokens, paredes, portas e regras de exibicao independentes, permitindo que o Mestre prepare a mesa antes da sessao e conduza jogadores por areas diferentes da campanha.

Antes deste modulo, a cena funcionava como troca de imagem de background. A partir daqui, ela passa a ser a fonte da verdade persistida para o estado de mesa relacionado a cena.

## Personas e casos de uso
* Mestre prepara cenas antes de iniciar a campanha.
* Mestre configura grid, escala em metros do grid quadrado e, opcionalmente, imagem por cena.
* Mestre cria e posiciona tokens genericos em cenas especificas antes ou durante a sessao, sem depender de ficha ou sistema de jogo.
* Mestre desenha paredes e portas, escolhe sua visibilidade e altera portas entre abertas e fechadas.
* Mestre remove tokens individualmente, todos os tokens da cena atual ou todos os tokens da campanha por acoes explicitas no painel de tokens.
* Mestre troca a propria cena ativa sem revelar automaticamente a cena nova aos jogadores.
* Mestre mostra uma cena para todos quando quiser compartilhar uma visao comum.
* Mestre move tokens entre cenas por menu contextual ou por modal de distribuicao na sidebar direita.
* Jogador ve a cena onde seu token esta, exceto quando o Mestre forca uma cena para todos.

## Regras de produto
* Cenas persistem estado independente.
* Durante uma sessao online, alteracoes de grid e tokens sao estado vivo da sessao: ficam em memoria/cache realtime e sao transmitidas por websocket.
* Drop, criacao, movimento, remocao e invisibilidade de tokens durante sessao online nao devem depender de insert/update imediato no banco; o servidor atualiza o estado vivo, transmite deltas por websocket e marca o snapshot como pendente de persistencia.
* O estado vivo da sessao e persistido no banco em pontos controlados como autosave eventual, encerramento da sessao e novamente ao iniciar a sessao, para preservar preparacoes feitas pelo Mestre antes de colocar a campanha online.
* Drop ou movimento de token durante sessao online nao deve disparar loading global nem reaplicar snapshot completo da cena para os sockets conectados.
* A troca de cena pelo Mestre pausa automaticamente a sessao quando ela esta online.
* A cena nova nao e revelada automaticamente para todos; a visao dos jogadores continua seguindo `forcedSceneId` ou a cena do proprio token.
* Sem cena forcada, a visao do jogador e derivada da cena do proprio token.
* Com cena forcada, todos veem a cena escolhida pelo Mestre ate ele desativar esse modo.
* Diarios nao pertencem a `campaign_scene`; eles pertencem ao modulo `campaign_diary`.
* Uma cena pode existir sem imagem de background; nesses casos o VTT continua oferecendo grid, tokens e ferramentas sobre uma superficie neutra.
* O fluxo `Preparar cena` cria cenas vazias sem obrigar upload.
* Vincular imagem a uma cena e uma acao separada, acionada por menu proprio da cena.
* Redimensionar ou alterar o formato do grid nao remove tokens e nao deve exibir aviso de remocao.
* Tokens so sao removidos por acoes explicitas do Mestre.
* Tokens podem ser avulsos ou associados opcionalmente a uma identidade (`Character`) para controle de jogador.
* Associar token a ficha, bestiario, inventario, PV, magia, hazard mecanico ou ruleset pertence a extensoes opcionais e nao ao `campaign_scene`.
* Paredes e portas persistem como segmentos da cena e sao sincronizadas em tempo real.
* Paredes e portas fechadas impedem que jogadores atravessem seus segmentos; portas abertas liberam passagem.
* Imagens devem usar cache no client e requisitar novamente apenas quando necessario.
* A ausencia de imagem nao impede a composicao de paredes e portas sobre a superficie neutra.
* Preparacao e selecao de cenas ficam integradas a aba `Cenas` da sidebar direita, mantendo o mapa visivel.

## Relacoes com outros modulos
* `vtt`: renderiza a mesa, ferramentas, tokens e grid usando o snapshot da cena.
* `campaign_presence`: fornece estado online, pausa, retomada e autenticacao da sala realtime.
* `assets`: armazena imagens de cena e renova URLs assinadas quando necessario.
* `campaign_diary`: gerencia diarios livres da campanha, sem vinculo com cenas.
* `chat`: continua independente; pausa de sessao nao bloqueia chat.
* Extensoes mecanicas nao devem ser importadas por `campaign_scene` nem ser pre-requisito para criar, testar ou mover tokens.
