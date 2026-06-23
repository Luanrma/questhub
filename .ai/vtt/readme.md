# Modulo: VTT (Product)

## 1. Proposito
O VTT e a experiencia principal dentro de uma campanha. Ao abrir uma campanha, o usuario deve ver a mesa primeiro, com grid full-screen e controles de jogo, enquanto as demais areas aparecem como overlays.

## 2. Decisoes de Produto
* A mesa VTT permanece visivel ao fundo durante a navegacao interna da campanha.
* Em telas grandes, a sidebar e sempre sobreposta; recolhida ou expandida, ela nao reserva largura no layout e nao redimensiona o VTT.
* O canvas VTT deve ocupar toda a largura disponivel desde `left: 0`.
* A sidebar desktop nao deve ocupar 100% da altura; sua altura acompanha a quantidade de menus.
* Em viewports menores que 900px de largura ou 640px de altura, a sidebar muda para uma barra compacta inferior sobreposta para preservar espaco da mesa.
* Telas laterais como jogadores, personagens, diario e configuracoes abrem como paineis flutuantes arrastaveis.
* O Mestre ve `Personagens` para gerenciar personagens da campanha.
* O Player nao ve `Personagens`; no lugar, ve `Minha ficha`.
* `Minha ficha` abre diretamente a ficha do personagem vinculado a campanha usando o modal arrastavel existente.
* `Trocar campanha` exige confirmacao para evitar saida acidental da mesa.

## 3. Escopo Atual
Incluido:
* Grid visual full-screen com celula inicial de 32px.
* Sidebar overlay sem reserva de layout.
* Painel flutuante para rotas internas da campanha que nao sao a mesa.
* Entrada direta na propria ficha para jogadores.

Fora de escopo:
* Persistencia de cena/mapa/tokens.
* Fog of war.
* Medidas sincronizadas.
* Configuracao persistida de tamanho/formato do grid.
