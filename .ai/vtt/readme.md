# VTT

O VTT oferece mesa, cenas, mapas, grid, tokens genericos, paredes, portas, camera, chat, dados, presenca e controle de sessao. Todos os contratos sao independentes de regras.

O VTT core deve funcionar sem sistema de jogo implementado. Criar campanha, abrir mesa, preparar cena, criar token, mover token, ocultar token, medir, rolar dados visuais e testar paredes/portas nao pode depender de ficha, bestiario, inventario, combate, PV ou qualquer ruleset.

No backend, `apps/api/src/server.ts` monta exclusivamente capacidades do VTT. A
ativacao de sistemas de jogo ocorre fora desse arquivo, no bootstrap da
aplicacao. O VTT pode no maximo conhecer descritores neutros com os nomes/chaves
dos sistemas suportados.

Personagens podem funcionar como identidades e controladores de tokens, mas essa associacao e opcional. Um token generico com nome, imagem/cor e posicao e valido por si so. O menu da campanha expoe apenas capacidades do VTT, sem atalho ou dependencia de ficha mecanica.

Paredes, portas e janelas pertencem a cena. O Mestre pode desenhar segmentos e retangulos, definir sua visibilidade e configurar passagens abertas, trancadas, obstruidas ou encostadas em tempo real. Segmentos fechados bloqueiam o deslocamento de jogadores; o Mestre preserva controle total durante a preparacao.

O FOG e uma capacidade opcional da cena e permanece agnostico de ruleset. Quando ativo, combina visao individual por Token, geometria bloqueadora, iluminacao e memoria de exploracao persistente. Os contratos canonicos pertencem ao modulo [`fog_of_war`](../fog_of_war/readme.md).

A medicao de deslocamento pertence ao Token controlavel, sem ferramenta de regua na toolbar. `Ctrl` + botao esquerdo no Token ativa o modo de movimentacao; depois disso, cada clique simples no grid fixa uma nova secao, sem manter `Ctrl`, segurar ou arrastar o mouse. `Espaco` confirma um movimento suave e sincronizado, e a linha permanece visivel ate o Token concluir o trajeto. A configuracao de grid troca entre quadrado e hexagonal no primeiro clique, sem exigir uma segunda interacao.

A configuracao do grid separa o tamanho visual em pixels da escala fisica de cada celula. O Mestre ajusta a distancia por quadrado/hexagono em uma escala discreta de metros coerente com VTTs: `0,5m`, inteiros ate `10m`, dezenas ate `100m` e centenas ate `1000m`. Metros continuam sendo a unidade canonica usada por medicao, visao, luz e areas de efeito, enquanto pes aparecem apenas na equivalencia informativa.

Tokens controlaveis podem ser selecionados com duplo clique esquerdo independentemente da ultima ferramenta ou painel acionado. A selecao apresenta controles diretos sobre o tabuleiro para redimensionamento proporcional pelo Mestre e rotacao pelo Mestre ou jogador controlador.

O menu contextual de configuracoes do Token concentra identidade, controle e configuracoes individuais de FOG. O Mestre define ali o alcance maximo de visao e a fonte de luz propria do Token. Tamanho e rotacao permanecem nos controles diretos do tabuleiro; camada nao e exposta nesse menu.

A mesa pode iniciar sem cenas preparadas. O Mestre cria cenas explicitamente quando quiser preparar mapa, grid, paredes, portas ou tokens; o VTT nao deve gerar uma cena obrigatoria por padrao.

A mesa preserva o contexto visual enquanto ferramentas administrativas sao abertas. O menu esquerdo abre paineis flutuantes independentes sobre o VTT; a sidebar direita concentra combate, participantes, sessao, cenas e chat em abas; e a toolbar pode ser recolhida sem desmontar a cena.
