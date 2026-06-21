# Modulo: Navegacao Inicial (Product)

## 1. Proposito
Definir a entrada pos-login do QuestHub como uma home simples de selecao entre os dois contextos principais do produto: Campanhas e Personagens.

## 2. Personas
* **Usuario autenticado:** Escolhe rapidamente se quer gerenciar campanhas ou personagens.

## 3. Escopo
Incluido:
* Rota `/home` como primeira tela depois do login/cadastro.
* Rota `/` redirecionando para `/home` quando autenticado.
* Home inicial com apenas dois menus principais: `Campanhas` e `Personagens`.
* Cada menu direciona para a home do seu modulo:
  * `Campanhas` -> `/campaigns`
  * `Personagens` -> `/characters`

Fora de escopo:
* Listas detalhadas de campanhas na home inicial.
* Listas detalhadas de personagens na home inicial.
* Acoes profundas como criar campanha ou criar personagem diretamente na home inicial.

## 4. Regras de Produto
* A home inicial deve ser uma decisao de contexto, nao um dashboard misto.
* Campanhas e personagens devem ter suas proprias paginas index/home.
* O logout pode ficar acessivel na home inicial.
* Apos login ou cadastro, o usuario deve ser direcionado para `/home`.
