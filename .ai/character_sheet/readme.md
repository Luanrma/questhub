# Modulo: Ficha de Personagem (Product)

## 1. Proposito
Fornecer uma experiencia para criar, editar, validar e visualizar a ficha mecanica de um personagem.

O modulo `character_creation` cria e vincula personagens. Este modulo cuida da ficha mecanica associada a um `Character` existente, incluindo o sistema escolhido e os dados de jogo.

## 2. Personas
* **Jogador:** Preenche e atualiza a ficha mecanica do proprio personagem.
* **Mestre/GM:** Revisa fichas de personagens vinculados a sua campanha, consulta dados mecanicos e cria fichas de NPCs.

## 3. Sistemas Suportados no MVP
* `DND_5E`
* `PATHFINDER_2E`

No MVP, os sistemas existem como enum/placeholder para selecao e compatibilidade. As regras mecanicas completas entram em modulos especificos posteriores.

## 4. Modelo de Produto
* Personagem pode existir sem ficha e sem sistema.
* Personagem pode receber ficha antes de entrar em campanha.
* Campanha possui sistema obrigatorio.
* Personagem com ficha so pode entrar em campanha compativel.
* Personagem sem ficha pode herdar o sistema da campanha ao ser vinculado.
* Se houver incompatibilidade, o usuario pode apagar definitivamente a ficha atual com alerta ou duplicar o personagem sem ficha.

## 5. Escopo Futuro
* Definir identidade mecanica como raca, classe, background e nivel.
* Distribuir e validar atributos.
* Calcular modificadores e estatisticas derivadas.
* Controlar HP, defesa, iniciativa, pericias, inventario e recursos.
* Aplicar regras configuradas por campanha ou sistema de RPG.
* Encaminhar validacoes especificas para `dnd_5e_sheet` e `pathfinder_2e_sheet`.

## 6. Fora de Escopo
* Criacao da entidade `Character`.
* Vinculo personagem-campanha (`CampaignCharacter`).
* Controle de entrada em campanha.
* Presenca online e token no tabuleiro.
