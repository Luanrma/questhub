# Modulo: VTT (Product)

## 1. Proposito
O VTT e a experiencia principal dentro de uma campanha. Ao abrir uma campanha, o usuario deve ver a mesa primeiro, com grid full-screen e controles de jogo, enquanto as demais areas aparecem como overlays.

## 2. Decisoes de Produto
* O VTT e generico e nao implementa regras de Pathfinder 2e, D&D 5e ou qualquer outro sistema de RPG.
* Interface, chat, rolagem de dados, criacao e manipulacao de mapa, tokens, movimentacao, cenas e camadas pertencem ao VTT generico.
* Regras como classe, ancestralidade, heranca, background, spells, itens, feats, proficiencias e calculos pertencem a `game_systems`.
* A mesa VTT permanece visivel ao fundo durante a navegacao interna da campanha.
* Em telas grandes, a sidebar e sempre sobreposta; recolhida ou expandida, ela nao reserva largura no layout e nao redimensiona o VTT.
* O canvas VTT deve ocupar toda a largura disponivel desde `left: 0`.
* A sidebar desktop nao deve ocupar 100% da altura; sua altura acompanha a quantidade de menus.
* Em viewports menores que 900px de largura ou 640px de altura, a sidebar muda para uma barra compacta inferior sobreposta para preservar espaco da mesa.
* Telas laterais como jogadores, personagens, diario e configuracoes abrem como paineis flutuantes arrastaveis.
* A navegacao pela sidebar dentro da campanha nao deve recarregar a pagina nem desmontar a mesa.
* Os menus internos da campanha sao tratados como modais/overlays sobre o VTT persistente.
* O Mestre ve `Personagens` para gerenciar personagens da campanha.
* O Player nao ve `Personagens`; no lugar, ve `Minha ficha`.
* `Minha ficha` abre diretamente a ficha do personagem vinculado a campanha usando o modal arrastavel existente.
* `Trocar campanha` exige confirmacao para evitar saida acidental da mesa.

## 3. Escopo Atual
Incluido:
* Grid visual full-screen com celula inicial de 32px.
* Configuracao visual do grid da mesa por modal controlado pelo mestre.
* Grid quadrado e hexagonal com tamanho, espessura e cor ajustaveis.
* Configuracao de grid sincronizada em tempo real com jogadores ativos na sessao.
* Configuracao de grid preservada ao iniciar ou encerrar sessao no cliente do mestre.
* Controle de zoom visual da mesa por botoes de menos/mais, com minimo de 50%, padrao de 100% e maximo de 150%.
* Board finito com area maxima local de 50 colunas por 34 linhas de grid, navegado sem barras de rolagem por ferramenta de mover ou arraste em area vazia.
* Menu `Tokens` para o Mestre abrir um modal com personagens `PLAYER` e `NPC` ativos disponiveis para a mesa.
* Tokens entram no board apenas quando o Mestre arrasta um personagem do modal de tokens e solta no grid.
* Token redondo usando o avatar do personagem do jogador, com fallback visual por inicial.
* Token arrastavel limitado a area de grid visivel da mesa.
* Token posicionado por coordenadas logicas do grid, preservando sua celula/hexagono ao alterar o tamanho do grid.
* Token dimensionado proporcionalmente ao tamanho atual da celula do grid.
* Token sincronizado em tempo real para Mestre e Players online enquanto a sessao esta ativa.
* Controle de movimento do token e concedido ao Player dono apenas apos o drop do Mestre no board.
* Sessao pode ser pausada pelo Mestre; durante a pausa, tudo no VTT fica bloqueado somente para os PLAYERS exceto o chat.
* Mestre pode remover token do board pelo menu contextual de botao direito, devolvendo o personagem para a lista disponivel.
* Mestre pode alternar invisibilidade do token; tokens invisiveis ficam ocultos para Players e visiveis com opacidade reduzida para o Mestre.
* Ferramenta `Medir` sincronizada em tempo real para calcular deslocamento sobre o grid atual.
* Rolagem visual de dado 3D por uma interface propria do VTT.
* Rolagens de dado exibem efeito visual 3D local no cliente que rolou e publicam o resultado compartilhado no chat.
* Rolagens simultaneas de multiplos dados no mesmo overlay, com ciclo visual independente por dado.
* Interface rapida de dados no grid com comando textual e campos por tipo de dado.
* Cor dos dados 3D configuravel localmente por campanha.
* Dados visuais acumulados permanecem na mesa ao fechar a ferramenta de dados e so somem ao clicar em `Limpar Dados` ou ao encerrar a sessao.
* O Mestre pode rolar dados pela interface do VTT mesmo antes de iniciar a sessao da campanha.
* Integracoes visuais de dados 3D, incluindo `@3d-dice/dice-box`, pertencem ao VTT generico e devem ser expostas por uma interface propria do VTT.
* A interface de dados pode iniciar como modal sobreposto ao board quando a biblioteca exigir um container dedicado, mas a orquestracao da rolagem deve continuar no modulo `vtt/dice-roller`.
* A fisica dos dados deve ser fornecida pela engine `@3d-dice/dice-box`, sem duplicar uma segunda simulacao visual no VTT.
* No grid quadrado, a ferramenta mede metros entre ponto A e ponto B considerando a area configurada para cada quadrado.
* No grid quadrado, a cor do tracejado da regua e configurada no modal do grid.
* No grid hexagonal, a ferramenta permite pintar hexagonos completos, escolher a cor da pintura no modal do grid e contar quantos passos foram percorridos.
* Fundo padrao da mesa preserva as cores atuais sem grid estatico hardcoded.
* Sidebar overlay sem reserva de layout.
* Painel flutuante para rotas internas da campanha que nao sao a mesa.
* Entrada direta na propria ficha para jogadores.

Fora de escopo:
* Regras mecanicas de sistemas de RPG.
* Classes, ancestralidades, herancas, backgrounds, spells, itens e feats.
* Dados ou formulas especificas de um game system como regra obrigatoria do VTT.
* Persistencia de cena/mapa/tokens.
* Persistencia ou replay de tokens depois que a sessao termina.
* Persistencia ou replay visual de rolagens de dado apos a sessao ou para usuarios que entram depois.
* Persistencia/replay da simulacao fisica de dados.
* Fog of war.
* Configuracao persistida de tamanho/formato do grid.
* Navegacao do board por setas do teclado.
