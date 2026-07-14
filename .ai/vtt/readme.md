# Modulo: VTT (Product)

## 1. Proposito
O VTT e a experiencia principal dentro de uma campanha. Ao abrir uma campanha, o usuario deve ver a mesa primeiro, com grid full-screen e controles de jogo, enquanto as demais areas aparecem como overlays.

## 2. Decisoes de Produto
* O VTT e generico e nao implementa regras de Pathfinder 2e, D&D 5e ou qualquer outro sistema de RPG.
* Interface, chat, rolagem de dados, criacao e manipulacao de mapa, tokens, movimentacao, cenas e camadas pertencem ao VTT generico.
* Estado persistido de cena, grid e tokens pertence ao modulo `campaign_scene`; o VTT renderiza e manipula esse estado.
* Diarios livres da campanha pertencem ao modulo `campaign_diary` e abrem como modal sem desmontar a mesa.
* Regras como classe, ancestralidade, heranca, background, spells, itens, feats, proficiencias e calculos pertencem a `game_systems`.
* A mesa VTT permanece visivel ao fundo durante a navegacao interna da campanha.
* O header superior da mesa deve ser compacto e pouco intrusivo para preservar area visual do mapa.
* Em telas grandes, a sidebar e sempre sobreposta; recolhida ou expandida, ela nao reserva largura no layout e nao redimensiona o VTT.
* Quando recolhida, a sidebar esquerda contrai para o topo e exibe apenas uma seta roxa compacta para baixo alinhada ao header superior, sem manter uma coluna de icones reduzidos.
* Quando expandida, o controle da sidebar esquerda permanece no mesmo ponto visual e muda a seta para cima para indicar recolhimento.
* O canvas VTT deve ocupar toda a largura disponivel desde `left: 0`.
* A sidebar desktop nao deve ocupar 100% da altura; sua altura acompanha a quantidade de menus.
* Em viewports menores que 900px de largura ou 640px de altura, a sidebar muda para uma barra compacta inferior sobreposta para preservar espaco da mesa.
* Telas laterais como jogadores, personagens, diario e configuracoes abrem como paineis flutuantes arrastaveis.
* Paineis flutuantes podem ser redimensionados para ocupar menos espaco da mesa sem desmontar o conteudo.
* Modais e paineis flutuantes devem ser redimensionaveis por qualquer borda ou canto, nao apenas por um handle isolado.
* A navegacao pela sidebar dentro da campanha nao deve recarregar a pagina nem desmontar a mesa.
* Os menus internos da campanha sao tratados como modais/overlays sobre o VTT persistente.
* O Mestre ve `Personagens` para gerenciar personagens da campanha.
* O Player nao ve `Personagens`; no lugar, ve `Minha ficha`.
* `Minha ficha` abre diretamente a ficha do personagem vinculado a campanha usando o modal arrastavel existente.
* `Trocar campanha` exige confirmacao para evitar saida acidental da mesa.
* O Mestre pode criar tokens efemeros a partir do bestiario do ruleset da campanha.
* Tokens de bestiario sao NPCs de cena, nao possuem dono jogador e nao sao controlados por Players.
* O Bestiario deve funcionar bem em paineis estreitos, alternando para uma coluna de cards quando o modal for reduzido.
* O Bestiario deve encolher sem gerar barra de rolagem horizontal.
* O Bestiario permite filtrar criaturas por nivel e raridade quando o ruleset expuser esses metadados.
* O Bestiario deve paginar resultados no modal, exibindo 10 criaturas por pagina por padrao e permitindo ao Mestre configurar ate 20 por pagina.
* O Mestre pode adicionar e remover criaturas do bestiario da toolbar de tokens pelo card da criatura.
* O Mestre pode desenhar paredes e portas na cena ativa pela toolbar da mesa.
* Paredes e portas pertencem ao VTT generico: bloqueiam deslocamento de tokens, mas nao carregam regras mecanicas de sistema.
* Portas abertas nao bloqueiam movimento; portas fechadas bloqueiam e podem estar trancadas, obstruidas ou apenas encostadas.
* O Mestre pode preparar ou editar paredes e portas antes, durante ou depois da sessao; esse estado pertence a cena e deve estar persistido ao iniciar a sessao.
* Paredes e portas possuem cor visual configuravel pelo Mestre, persistida como metadado generico da cena.

## 3. Escopo Atual
Incluido:
* Grid visual full-screen com celula inicial de 32px.
* Configuracao visual do grid da cena por modal controlado pelo mestre.
* Grid quadrado e hexagonal com tamanho, espessura e cor ajustaveis.
* Configuracao de grid sincronizada em tempo real com usuarios autorizados a visualizar a cena.
* Configuracao de grid mantida em estado vivo durante a sessao e persistida por cena nos pontos de ciclo de vida definidos em `campaign_scene`.
* Controle de zoom visual da mesa por botoes de menos/mais, com minimo de 50%, padrao de 100% e maximo de 150%.
* Board finito com area maxima local de 50 colunas por 34 linhas de grid, navegado sem barras de rolagem por ferramenta de mover ou arraste em area vazia.
* Menu `Tokens` para o Mestre abrir um modal com personagens `PLAYER` e `NPC` ativos disponiveis para a mesa, mesmo com a sessao offline.
* O mesmo menu tambem pode listar criaturas do bestiario do sistema da campanha.
* Tokens de jogadores aparecem primeiro na toolbar de Tokens; NPCs e tokens de bestiario aparecem abaixo, separados por um divisor visual sutil.
* Tokens entram no board apenas quando o Mestre arrasta um personagem do modal de tokens e solta no grid.
* Criaturas do bestiario tambem podem ser arrastadas do card de bestiario para o board.
* Token redondo usando o avatar do personagem do jogador, com fallback visual por inicial.
* Token arrastavel limitado a area de grid visivel da mesa.
* Token posicionado por coordenadas logicas do grid, preservando sua celula/hexagono ao alterar o tamanho do grid.
* Token dimensionado proporcionalmente ao tamanho atual da celula do grid.
* Token sincronizado em tempo real para Mestre e Players online enquanto a sessao esta ativa.
* Token mantido em estado vivo durante a sessao e persistido por cena nos pontos de ciclo de vida definidos em `campaign_scene`.
* Controle de movimento do token e concedido ao Player dono apenas apos o drop do Mestre no board.
* Sessao pode ser pausada pelo Mestre; durante a pausa, tudo no VTT fica bloqueado somente para os PLAYERS exceto o chat, enquanto o Mestre ainda pode preparar/controlar a mesa e mover tokens.
* Mestre pode remover token do board pelo menu contextual de botao direito, devolvendo o personagem para a lista disponivel.
* Mestre pode alternar invisibilidade do token; tokens invisiveis ficam ocultos para Players e visiveis com opacidade reduzida para o Mestre.
* Mestre pode abrir a ficha de personagens e criaturas pelo menu contextual do token.
* Player pode abrir apenas a propria ficha pelo menu contextual do proprio token.
* Fichas de criaturas do bestiario sao visiveis somente para o Mestre.
* Ferramenta `Medir` sincronizada em tempo real para calcular deslocamento sobre o grid atual.
* Tracker simples de Encounter Mode no painel lateral direito, iniciado pelo Mestre a partir dos tokens nao ocultos da cena atual.
* Encontro MVP com iniciativa manual, rodada atual, participante ativo e avancar/voltar turno sem desmontar a mesa.
* Rolagem visual de dado 3D por uma interface propria do VTT.
* Rolagens de dado exibem efeito visual 3D local no cliente que rolou e publicam o resultado compartilhado no chat.
* Rolagens simultaneas de multiplos dados no mesmo overlay, com ciclo visual independente por dado.
* Preparacao de cenas visivel apenas para Mestre no painel lateral direito.
* Modal de preparacao de cenas com cards sequenciais `Cena1`, `Cena2` etc., criando ou atualizando `CampaignScene`.
* Upload de imagem no card da cena usa `Asset`, enquanto o estado da cena persiste `assetId`, `backgroundUrl` e `backgroundCacheKey`.
* Miniaturas de cenas preparadas aparecem na opcao `Cenas` do painel lateral direito do Mestre; selecionar uma cena altera `masterActiveSceneId`, pausa automaticamente a sessao online e renderiza o snapshot da cena.
* Players veem a cena do proprio token, ou a cena forcada pelo Mestre enquanto `forcedSceneId` estiver ativo.
* O antigo rodape de cenas nao deve ser exibido sobre a mesa.
* A acao `+ Preparar Cena` fica abaixo das miniaturas de cenas na opcao `Cenas` do painel lateral direito.
* Painel lateral de jogadores, sessao e chat pode ser recolhido/expandido para liberar area visual da mesa sem desmontar o chat.
* O painel lateral direito deve iniciar recolhido por padrao, mostrando apenas a rail de controles essenciais.
* O painel lateral expandido usa um header interno de icones para alternar a area principal entre opcoes, sem empilhar todos os paineis ao mesmo tempo.
* Cada opcao do painel lateral direito ocupa a area principal inteira quando selecionada.
* A rail direita exibe primeiro um indicador passivo de estado da sessao; `ON` permanece verde, `OFF` e vermelho e `PAUSED` usa icone de pausa amarelo.
* O Encounter Mode usa o icone de espadas na rail direita, nao texto.
* O chat aparece como ultima opcao do header interno, preserva o comportamento atual e pode ser destacado como modal padrao.
* Em dimensoes grandes, o chat encaixado na lateral ocupa no maximo um quarto da altura disponivel do painel direito.
* Interface rapida de dados no grid com comando textual e campos por tipo de dado.
* Cor dos dados 3D configuravel localmente por campanha.
* Tempo de permanencia dos dados 3D e exibicao do popup de resultado configuraveis em `Configuracoes`, pela sidebar esquerda, para Mestre e Players.
* Dados visuais acumulados permanecem na mesa ao fechar a ferramenta de dados. Por padrao somem 3 segundos apos o fim da animacao; o usuario pode escolher 3 a 10 segundos ou `Permanente`.
* No modo `Permanente`, os dados so somem ao clicar em `Limpar Dados` ou ao encerrar a sessao; em modos com timer, o botao `Limpar Dados` nao aparece.
* A limpeza automatica dos dados deve usar fade suave antes de limpar o canvas 3D.
* O popup central de resultado aparece localmente no cliente que rolou e some sempre 3 segundos apos aparecer.
* Dados 3D devem respeitar uma zona segura ampla da mesa para nao cobrir toolbars, painel de dados, controles de zoom ou rodape de cenas.
* A primeira rolagem visual deve animar da mesma forma que as rolagens seguintes.
* O Mestre pode rolar dados pela interface do VTT mesmo antes de iniciar a sessao da campanha.
* Integracoes visuais de dados 3D, incluindo `@3d-dice/dice-box`, pertencem ao VTT generico e devem ser expostas por uma interface propria do VTT.
* A interface de dados pode iniciar como modal sobreposto ao board quando a biblioteca exigir um container dedicado, mas a orquestracao da rolagem deve continuar no modulo `vtt/dice-roller`.
* A fisica dos dados deve ser fornecida pela engine `@3d-dice/dice-box`, sem duplicar uma segunda simulacao visual no VTT.
* No grid quadrado, a ferramenta mede metros entre ponto A e ponto B considerando `metersPerCell`.
* No grid quadrado, a cor do tracejado da regua e configurada no modal do grid.
* No grid hexagonal, a ferramenta permite pintar hexagonos completos, escolher a cor da pintura no modal do grid e contar quantos passos foram percorridos.
* Fundo padrao da mesa preserva as cores atuais sem grid estatico hardcoded.
* Sidebar overlay sem reserva de layout.
* Painel flutuante para rotas internas da campanha que nao sao a mesa.
* Entrada direta na propria ficha para jogadores.
* Ferramenta `Paredes` para Mestre desenhar segmentos bloqueadores e portas na cena ativa.
* Ferramenta `Selecao por area` para o Mestre selecionar varios tokens da cena ativa por retangulo em um estado local de multiselecao.
* Atalho de selecao por area: `Ctrl` + botao esquerdo em ponto vazio do grid e arraste abre um retangulo de selecao de tokens.
* Multiselecao por area usa destaque proprio discreto no token e nao usa as setas vermelhas de alvo de combate.
* A toolbar de ferramentas da mesa pode ser recolhida para um botao compacto de ferramentas e reexpandida por esse mesmo botao.
* Menu contextual de porta para alternar Aberta, Trancada, Obstruida e Encostada, garantindo que porta aberta nao mantenha outros status.
* Colisao cliente-side entre o segmento de movimento do token e paredes/portas fechadas da cena ativa.
* Portas devem ser criadas conectadas a duas paredes existentes, ou pela conversao de um trecho de uma parede existente em porta.
* No modo Parede, `Ctrl` + arrastar cria um retangulo/quadrado composto por quatro paredes.
* Mestre pode escolher a cor usada para novas paredes e novas portas na ferramenta de paredes.

Fora de escopo:
* Regras mecanicas de sistemas de RPG.
* Classes, ancestralidades, herancas, backgrounds, spells, itens e feats.
* Dados ou formulas especificas de um game system como regra obrigatoria do VTT.
* Regras mecanicas de cena e persistencia de mesa, que pertencem a `campaign_scene`.
* Regras de diario livre da campanha, que pertencem a `campaign_diary`.
* Persistencia ou replay visual de rolagens de dado apos a sessao ou para usuarios que entram depois.
* Persistencia/replay da simulacao fisica de dados.
* Regras mecanicas de encontro, iniciativa automatica, PV, CA, condicoes e economia de acoes.
* Fog of war.
* Navegacao do board por setas do teclado.
* Visao dinamica/fog of war baseada em paredes.
* Som, armadilhas, chaves, permissao de abrir porta por personagem ou testes mecanicos para destrancar/forcar portas.
