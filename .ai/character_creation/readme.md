# Modulo: Criacao de Personagem (Product)

## 1. Proposito
Fornecer uma interface simples e validada para criar, listar, editar e desativar personagens dentro de uma campanha.

Este modulo trata o personagem como uma entidade narrativa e operacional da campanha. Ele nao define atributos, classe, raca, HP, defesa, pericias ou qualquer regra mecanica de ficha. Essas regras pertencem ao modulo `character_sheet`.

## 2. Personas
* **Jogador:** Cria e gerencia o proprio personagem dentro de uma campanha.
* **Mestre/GM:** Gerencia personagens da campanha, cria NPCs e pode administrar personagens de jogadores quando permitido pelo produto.

## 3. Escopo do Modulo
Incluido:
* Criar personagem associado a uma campanha e a um usuario.
* Definir nome publico do personagem.
* Definir papel operacional do personagem na campanha: `MASTER`, `PLAYER` ou `NPC`.
* Controlar status de entrada/uso do personagem conforme a participacao na campanha.
* Marcar personagem como ativo ou inativo.
* Associar avatar ou token basico quando o modulo de assets estiver disponivel.

Fora de escopo:
* Atributos mecanicos.
* Raca, classe, background e nivel.
* HP, defesa, iniciativa, pericias, inventario, magias e formulas.
* Validacao de regras de sistema de RPG.
* Editor completo de ficha.

## 4. Casos de Uso Principais
* Criar um personagem de jogador dentro de uma campanha.
* Criar um NPC pelo mestre.
* Listar personagens de uma campanha.
* Editar dados basicos de personagem, como nome e avatar.
* Desativar personagem sem remover historico da campanha.
* Vincular o personagem a uma participacao de campanha quando aplicavel.

## 5. Relacao com Outros Modulos
* `campaign`: define a campanha onde o personagem existe e as permissoes de participacao.
* `login`: identifica o usuario dono ou criador do personagem.
* `character_sheet`: guarda e valida a ficha mecanica do personagem.
* `canvas` ou `vtt`: consome dados basicos do personagem para representar tokens no tabuleiro.
