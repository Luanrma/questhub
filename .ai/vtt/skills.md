# Modulo: VTT (Skills & Tech)

## 1. Stack Tecnologica
* React e React Router para composicao de layout e rotas.
* Tailwind CSS e CSS global para grid/overlay responsivo.
* lucide-react para icones de ferramentas e navegacao.
* `CharacterSheetModal` existente para ficha arrastavel.

## 2. Padroes
* Persistent Canvas: o grid VTT pertence ao layout de campanha e nao deve sumir ao abrir paineis.
* Pushed Desktop Navigation: em telas grandes, o menu participa do fluxo para nao cobrir a mesa.
* Compact Overlay Navigation: em telas pequenas, o menu vira barra inferior sobreposta.
* Role-aware Navigation: itens do menu variam conforme `Campaign.myRole`.
* Reuse Existing Modal: ficha do jogador usa o modal de ficha ja existente.

## 3. Restricoes
* Nao adicionar biblioteca de canvas antes de haver manipulacao real de mapa/tokens.
* Nao criar estado persistente falso para sessoes ou mapas.
* Nao duplicar implementacao de ficha.
* Nao bloquear o VTT por dados administrativos que possam carregar em overlay.
