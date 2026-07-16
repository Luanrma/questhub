# VTT: Contratos

* Mestre ativo pode criar e editar cenas e tokens.
* Jogador ativo acessa a mesa enquanto o mestre esta online.
* Token armazena posicao, tamanho, visibilidade, rotacao, camada, nome visual e imagem/cor opcional.
* Associacao com identidade/personagem e opcional; token generico sem `characterId` e valido.
* Cena armazena mapa, grid, configuracao visual, paredes e portas.
* Paredes e portas usam coordenadas da cena, persistem com ela e sincronizam por websocket.
* Paredes e portas fechadas bloqueiam movimento de jogadores; portas abertas nao bloqueiam.
* A visibilidade visual de um segmento para jogadores e independente de sua colisao.
* A toolbar exibe a ferramenta de regua para Mestre e jogadores com acesso a mesa, independentemente das ferramentas administrativas exclusivas do Mestre.
* A troca do formato do grid entre quadrado e hexagonal aplica e persiste o novo formato no primeiro clique.
* `Ctrl+arraste` com a ferramenta Parede ativa cria um retangulo composto por quatro segmentos; o arraste comum cria um unico segmento.
* Portas sao inseridas sobre segmentos de parede quando houver intersecao/proximidade valida e podem ser abertas, trancadas, obstruidas ou encostadas pelo menu contextual.
* Abrir uma porta limpa automaticamente os estados trancada, obstruida e encostada.
* Camera por campanha e persistida separadamente.
* Nenhum payload base contem campos mecanicos, ruleset, ficha, bestiario, inventario, economia, PV, CA, magia, condicao ou efeito ativo.
* O menu esquerdo abre mais de um painel flutuante sem navegar para fora nem desmontar a mesa.
* Cada painel flutuante pode receber foco, ser movido, redimensionado, minimizado e fechado de forma independente.
* `Escape` fecha o menu esquerdo quando ele estiver aberto e limpa a selecao/ferramenta ativa da mesa quando o foco nao estiver em campo editavel.
* Segurar `Alt` ativa navegacao temporaria do mapa; soltar `Alt` restaura a ferramenta anterior.
* `Ctrl+Z` ou `Cmd+Z` desfaz a ultima criacao de parede enquanto a ferramenta de paredes estiver ativa.
* `Ctrl+clique` em um token inicia medicao de deslocamento no grid quadrado e `Espaco` confirma o destino medido quando o usuario pode controlar o token.
* A toolbar pode ser recolhida para um unico botao e, ao recolher, limpa ferramentas e overlays transitorios.
* A sidebar direita abre recolhida e usa abas para combate, participantes, sessao, cenas e chat.
* A aba de cenas e exclusiva do Mestre e e a entrada principal para selecionar e preparar cenas.

## Tokens agnósticos e controle

A especificação detalhada está em [token-architecture.md](./token-architecture.md).

* Token é uma entidade da campanha e pode existir sem `characterId`.
* O vínculo opcional entre Token e `Character` é exclusivo nos dois sentidos: um Token referencia no máximo um `Character`, e um `Character` não pode estar vinculado a mais de um Token.
* Para o VTT Core, `Character` é somente uma identidade; o módulo não acessa nem valida ficha, `GameSystem`, Package, bestiário ou ruleset.
* Token pode ocupar no máximo uma cena por vez e sua associação com cena é opcional.
* Alterar a cena ativa ou visualizada não move Tokens automaticamente.
* Somente o Mestre pode transferir um Token entre cenas; a transferência move a mesma entidade, sem duplicá-la.
* O Mestre controla todos os Tokens da campanha.
* Um jogador pode controlar vários Tokens, mas cada Token possui no máximo um jogador controlador além do Mestre.
* O controle pertence ao jogador participante da campanha, é persistido entre sessões e permanece durante transferências entre cenas.
* Um Token sem `characterId` também pode possuir um jogador controlador persistente.
* Vincular ou desvincular um `Character` não remove automaticamente o controlador existente.
* Conceder o controle a outro jogador substitui o controlador anterior.
* O controle-base permite selecionar, movimentar, rotacionar, medir deslocamento e usar interações operacionais permitidas no tabuleiro.
* O controle-base não permite alterar nome, imagem, tamanho, camada, visibilidade, vínculo, controlador, cena ou excluir o Token.
* O Mestre pode conceder ao jogador controlador uma permissão adicional para alterar nome e imagem.
* O jogador controlador não pode transferir o Token entre cenas.
* O jogador do Main Character recebe automaticamente o controle do Token vinculado; o Mestre pode transferir esse controle sem alterar a propriedade do `Character`.
* Controlar um Token não concede automaticamente permissão para editar o `Character` nem dados mantidos por módulos externos.
