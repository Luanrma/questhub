# Campaign Scene

## O que e por que
`campaign_scene` transforma cenas em containers persistidos de estado do VTT. Uma cena guarda imagem, grid, tokens e regras de exibicao independentes, permitindo que o Mestre prepare encontros antes da sessao e conduza jogadores por areas diferentes da campanha.

Antes deste modulo, a cena funcionava como troca de imagem de background. A partir daqui, ela passa a ser a fonte da verdade persistida para o estado de mesa relacionado a cena.

## Personas e casos de uso
* Mestre prepara cenas antes de iniciar a campanha.
* Mestre configura grid, escala em metros do grid quadrado e, opcionalmente, imagem por cena.
* Mestre posiciona tokens em cenas especificas antes ou durante a sessao.
* Mestre remove tokens individualmente, todos os tokens da cena atual ou todos os tokens da campanha por acoes explicitas no painel de tokens.
* Mestre troca a propria cena ativa sem revelar automaticamente a cena nova aos jogadores.
* Mestre mostra uma cena para todos quando quiser compartilhar uma visao comum.
* Mestre move tokens entre cenas por menu contextual ou por modal de distribuicao na sidebar direita.
* Jogador ve a cena onde seu token esta, exceto quando o Mestre forca uma cena para todos.

## Regras de produto
* Cenas persistem estado independente.
* Durante uma sessao online, alteracoes de grid e tokens sao estado vivo da sessao: ficam em memoria/cache realtime e sao transmitidas por websocket.
* O estado vivo da sessao e persistido no banco no encerramento da sessao e novamente ao iniciar a sessao, para preservar preparacoes feitas pelo Mestre antes de colocar a campanha online.
* A troca de cena pelo Mestre pausa automaticamente a sessao.
* Retomar sessao nao revela automaticamente a cena nova.
* Sem cena forcada, a visao do jogador e derivada da cena do proprio token.
* Com cena forcada, todos veem a cena escolhida pelo Mestre ate ele desativar esse modo.
* Diarios nao pertencem a `campaign_scene`; eles pertencem ao modulo `campaign_diary`.
* Uma cena pode existir sem imagem de background; nesses casos o VTT continua oferecendo grid, tokens e ferramentas sobre uma superficie neutra.
* O fluxo `Preparar cena` cria cenas vazias sem obrigar upload.
* Vincular imagem a uma cena e uma acao separada, acionada por menu proprio da cena.
* Redimensionar ou alterar o formato do grid nao remove tokens e nao deve exibir aviso de remocao.
* Tokens so sao removidos por acoes explicitas do Mestre.
* Imagens devem usar cache no client e requisitar novamente apenas quando necessario.
* A ausencia de imagem preserva espaco para o futuro fluxo `Construir cena`, onde o Mestre podera compor paredes, chao, portas, janelas, escadas, buracos e elementos de colisao.

## Relacoes com outros modulos
* `vtt`: renderiza a mesa, ferramentas, tokens e grid usando o snapshot da cena.
* `campaign_presence`: fornece estado online, pausa, retomada e autenticacao da sala realtime.
* `assets`: armazena imagens de cena e renova URLs assinadas quando necessario.
* `campaign_diary`: gerencia diarios livres da campanha, sem vinculo com cenas.
* `chat`: continua independente; pausa de sessao nao bloqueia chat.
* `game_systems`: nao deve ser importado por `campaign_scene`; regras mecanicas ficam fora deste modulo.
