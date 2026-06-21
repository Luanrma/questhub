# Modulo: Navegacao Inicial (Skills & Tech)

## 1. Stack Tecnologica
* **Frontend:** React Router para rotas autenticadas.
* **UI:** React + Tailwind CSS, usando componentes existentes.

## 2. Padroes Aplicados
* **Route Composition:** Rotas autenticadas ficam sob `AuthedLayout`.
* **Context Selection:** A tela inicial escolhe o contexto de trabalho, sem misturar responsabilidades dos modulos.

## 3. Restricoes Tecnicas
* Nao carregar listas pesadas na home inicial.
* Nao duplicar a lista de campanhas fora da home de campanhas.
* Nao duplicar a lista de personagens fora da home de personagens.

## 4. Integracoes
* `campaign_creation`: fornece a home de campanhas em `/campaigns`.
* `character_creation`: fornece a home de personagens em `/characters`.
* `login`: redireciona usuario autenticado para `/home`.
