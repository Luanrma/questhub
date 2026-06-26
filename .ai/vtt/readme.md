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
* Acao `Token` para Player posicionar seu proprio token no centro da area de grid.
* Token redondo usando o avatar do personagem do jogador, com fallback visual por inicial.
* Token arrastavel limitado a area de grid visivel da mesa.
* Token posicionado por coordenadas logicas do grid, preservando sua celula/hexagono ao alterar o tamanho do grid.
* Token dimensionado proporcionalmente ao tamanho atual da celula do grid.
* Token do Player sincronizado em tempo real para Mestre e Players online enquanto a sessao esta ativa.
* Ferramenta `Medir` sincronizada em tempo real para calcular deslocamento sobre o grid atual.
* Rolagem visual de dado 3D sobre a mesa quando o usuario executa uma rolagem rapida.
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
* Persistencia de cena/mapa/tokens.
* Persistencia ou replay de tokens depois que a sessao termina.
* Persistencia ou replay visual de rolagens de dado.
* Fog of war.
* Configuracao persistida de tamanho/formato do grid.
