# VTT

O VTT oferece mesa, cenas, mapas, grid, tokens genericos, paredes, portas, camera, chat, dados, presenca e controle de sessao. Todos os contratos sao independentes de regras.

O VTT core deve funcionar sem sistema de jogo implementado. Criar campanha, abrir mesa, preparar cena, criar token, mover token, ocultar token, medir, rolar dados visuais e testar paredes/portas nao pode depender de ficha, bestiario, inventario, combate, PV ou qualquer ruleset.

No backend, `apps/api/src/server.ts` monta exclusivamente capacidades do VTT. A
ativacao de sistemas de jogo ocorre fora desse arquivo, no bootstrap da
aplicacao. O VTT pode no maximo conhecer descritores neutros com os nomes/chaves
dos sistemas suportados.

Personagens podem funcionar como identidades e controladores de tokens, mas essa associacao e opcional. Um token generico com nome, imagem/cor e posicao e valido por si so. O menu da campanha expoe apenas capacidades do VTT, sem atalho ou dependencia de ficha mecanica.

A biblioteca de Tokens aceita entradas materializadas por extensoes da
aplicacao. O VTT apenas recebe a identidade visual, a disponibilidade do Token e
acoes neutras como duplicar; a origem em catalogo e a ficha simplificada
permanecem fora do VTT.

Paredes, portas e janelas pertencem a cena. O Mestre pode desenhar segmentos e retangulos, definir sua visibilidade e configurar passagens abertas, trancadas, obstruidas ou encostadas em tempo real. Segmentos fechados bloqueiam o deslocamento de jogadores; o Mestre preserva controle total durante a preparacao.

O FOG e uma capacidade opcional da cena e permanece agnostico de ruleset. Quando ativo, combina visao individual por Token, geometria bloqueadora, iluminacao e memoria de exploracao persistente. Os contratos canonicos pertencem ao modulo [`fog_of_war`](../fog_of_war/readme.md).

A medicao de deslocamento pertence ao Token controlavel, sem ferramenta de regua na toolbar. `Ctrl` + botao esquerdo no Token ativa o modo de movimentacao; depois disso, cada clique simples no grid fixa uma nova secao, sem manter `Ctrl`, segurar ou arrastar o mouse. Antes da confirmacao, `Escape` ou um novo `Ctrl` + botao esquerdo no mesmo Token cancelam o trajeto e encerram o modo. `Espaco` confirma um movimento suave e sincronizado, e a linha permanece visivel ate o Token concluir o trajeto. A configuracao de grid troca entre quadrado e hexagonal no primeiro clique, sem exigir uma segunda interacao.

A configuracao do grid separa o tamanho visual em pixels da escala fisica de cada celula. O Mestre ajusta a distancia por quadrado/hexagono em uma escala discreta de metros coerente com VTTs: `0,5m`, inteiros ate `10m`, dezenas ate `100m` e centenas ate `1000m`. Metros continuam sendo a unidade canonica usada por medicao, visao, luz e areas de efeito, enquanto pes aparecem apenas na equivalencia informativa.

Tokens controlaveis possuem tres estados locais distintos. O clique esquerdo simples cria a selecao operacional, indicada por um anel sutil. Ao arrastar o botao esquerdo a partir de uma area vazia do mapa com a ferramenta de selecao ativa, o usuario cria uma caixa que aplica esse anel a um ou mais Tokens visiveis. O duplo clique esquerdo ativa separadamente os controles de redimensionamento e giro somente no Token acionado.

Cada usuario tambem pode manter alvos locais independentes da selecao e das areas de efeito. `T` alterna como alvo todos os Tokens da selecao operacional. No painel `Configuracoes` da campanha, o Mestre escolhe o layout compartilhado do indicador de alvo durante a sessao: quatro setas vermelhas apontadas para o centro, que e o padrao, ou uma mira circular. O duplo clique direito preserva o atalho individual de alvo, sem publicar quais Tokens cada usuario marcou.

A selecao operacional multipla tambem define o escopo de acoes coletivas: arrastar qualquer Token selecionado move o grupo pelo mesmo delta; `Enviar para encontro` e `Remover da cena`, quando acionados pelo menu contextual de um membro selecionado, aplicam-se a todo o grupo.

A camera aceita `Ctrl` + roda do mouse e `Numpad +`/`Numpad -` para zoom. `Numpad 0` restaura 100% e recentraliza a cena. A tecla `Escape` funciona como fechamento global da interface: cancela um trajeto de movimentacao ainda nao confirmado, deseleciona todos os Tokens, remove todos os alvos manuais, fecha menus e janelas abertas e recolhe os paineis expansivos da mesa. Ela nunca abre um novo menu nem altera a ferramenta ativa ou o estado do toolbar.

O menu contextual de configuracoes do Token concentra identidade, controle e configuracoes individuais de FOG. O Mestre define ali o alcance maximo de visao e a fonte de luz propria do Token. Tamanho e rotacao permanecem nos controles diretos do tabuleiro; camada nao e exposta nesse menu.

A mesa pode iniciar sem cenas preparadas. O Mestre cria cenas explicitamente quando quiser preparar mapa, grid, paredes, portas ou tokens; o VTT nao deve gerar uma cena obrigatoria por padrao.

A mesa preserva o contexto visual enquanto ferramentas administrativas sao abertas. O menu esquerdo abre paineis flutuantes independentes sobre o VTT; a sidebar direita concentra combate, participantes, sessao, cenas e chat em abas; e a toolbar pode ser recolhida sem desmontar a cena.
