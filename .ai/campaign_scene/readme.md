# Campaign Scene

## O que e por que
`campaign_scene` transforma cenas em containers persistidos de estado do VTT. Uma cena guarda imagem, grid, tokens, diario e regras de exibicao independentes, permitindo que o Mestre prepare encontros antes da sessao e conduza jogadores por areas diferentes da campanha.

Antes deste modulo, a cena funcionava como troca de imagem de background. A partir daqui, ela passa a ser a fonte da verdade persistida para o estado de mesa relacionado a cena.

## Personas e casos de uso
* Mestre prepara cenas antes de iniciar a campanha.
* Mestre configura grid, escala em metros do grid quadrado e imagem por cena.
* Mestre posiciona tokens em cenas especificas antes ou durante a sessao.
* Mestre troca a propria cena ativa sem revelar automaticamente a cena nova aos jogadores.
* Mestre mostra uma cena para todos quando quiser compartilhar uma visao comum.
* Mestre move tokens entre cenas por menu contextual ou por modal de distribuicao na sidebar direita.
* Jogador ve a cena onde seu token esta, exceto quando o Mestre forca uma cena para todos.
* Mestre escreve diarios de cena e diario global, privados por default, podendo torna-los visiveis para todos.

## Regras de produto
* Cenas persistem estado independente.
* A troca de cena pelo Mestre pausa automaticamente a sessao.
* Retomar sessao nao revela automaticamente a cena nova.
* Sem cena forcada, a visao do jogador e derivada da cena do proprio token.
* Com cena forcada, todos veem a cena escolhida pelo Mestre ate ele desativar esse modo.
* Diario de cena e diario global sao `MASTER_ONLY` por default.
* O Mestre pode tornar um diario individual ou todos os diarios visiveis para todos.
* Diarios salvam apenas por acao explicita no botao `Salvar`.
* Imagens devem usar cache no client e requisitar novamente apenas quando necessario.

## Relacoes com outros modulos
* `vtt`: renderiza a mesa, ferramentas, tokens e grid usando o snapshot da cena.
* `campaign_presence`: fornece estado online, pausa, retomada e autenticacao da sala realtime.
* `assets`: armazena imagens de cena e renova URLs assinadas quando necessario.
* `chat`: continua independente; pausa de sessao nao bloqueia chat.
* `game_systems`: nao deve ser importado por `campaign_scene`; regras mecanicas ficam fora deste modulo.
