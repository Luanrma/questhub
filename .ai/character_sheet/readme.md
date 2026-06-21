# Modulo: Ficha de Personagem (Product)

## 1. Proposito
Fornecer a base de produto para criar, editar, validar e visualizar a ficha mecanica associada a um `Character` existente.

Este modulo nao define regras de nenhum sistema de RPG. Ele define apenas o ciclo de vida comum da ficha, o envelope de persistencia, a compatibilidade entre personagem/campanha e o ponto de extensao para modulos de sistema.

## 2. Papel Arquitetural
`character_sheet` e o modulo base de fichas. Ele existe para que qualquer sistema de RPG possa plugar seu proprio formato sem espalhar regras especificas pelo produto.

Tudo que depender de um sistema especifico deve ficar em um submodulo dentro de `character_sheet`.

Estrutura esperada:

```text
.ai/character_sheet/
  readme.md
  skills.md
  specs.md
  <system_sheet>/
    readme.md
    skills.md
    specs.md
```

## 3. Personas
* **Jogador:** Preenche, consulta e atualiza a ficha do proprio personagem.
* **Mestre/GM:** Revisa fichas de personagens vinculados a sua campanha e consulta dados mecanicos durante a mesa.

## 4. Modelo de Produto Base
* Personagem pode existir sem ficha.
* Personagem pode receber ficha antes ou depois de entrar em campanha.
* Campanha pode definir um sistema obrigatorio.
* Personagem com ficha so pode entrar em campanha compativel com o mesmo sistema.
* Personagem sem ficha pode herdar o sistema da campanha ao ser vinculado, se o fluxo de campanha exigir isso.
* Ficha incompativel com campanha deve bloquear o vinculo ate que o usuario escolha uma acao explicita definida pelo fluxo de personagem/campanha.

## 5. Escopo Do Modulo Base
* Definir ciclo de vida da ficha.
* Definir envelope comum de persistencia.
* Definir metadados narrativos genericos da ficha, como `bio`, quando nao dependerem de um sistema de RPG.
* Definir compatibilidade entre ficha, personagem e campanha.
* Definir registro/roteamento para validadores de sistema.
* Fornecer uma experiencia de ficha reutilizavel em modal, sem abrir nova pagina ou janela.
* Garantir que cada sistema tenha um bloco de dados proprio dentro do envelope.
* Garantir que campos especificos nao vazem para o modulo base.

## 6. Fora De Escopo
* Criacao da entidade `Character`.
* Vinculo personagem-campanha.
* Regras mecanicas de sistemas de RPG.
* Campos de ficha de sistemas especificos.
* Calculos de atributos, proficiencias, pontos de vida, defesa, magias, pericias, inventario ou acoes.
* Presenca online e token no tabuleiro.
