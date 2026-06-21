# Modulo: Criacao de Personagem (Skills & Tech)

## 1. Stack Tecnologica
* **Frontend:** React para telas de listagem, criacao e edicao basica de personagem.
* **Backend:** Node.js/Fastify para API de persistencia e validacao de permissoes.
* **Validacao:** Zod para contratos de entrada e resposta.
* **Persistencia:** Prisma usando o modelo `Character` existente.

## 2. Padroes Aplicados
* **Clean Architecture / Bounded Context:** O modulo deve expor casos de uso de personagem sem conhecer regras internas da ficha.
* **Policy/Guard:** Regras de permissao devem ficar explicitas para diferenciar jogador, mestre e NPC.
* **Repository Boundary:** A persistencia via Prisma deve ser acessada por funcoes/casos de uso pequenos e testaveis.

## 3. Restricoes Arquiteturais
* Este modulo nao deve validar atributos, HP, classe, raca, nivel ou formulas de sistema de RPG.
* O campo `Character.sheet` nao deve ser manipulado por este modulo, exceto para permanecer `null` ou intocado.
* O modulo nao deve ser acoplado ao canvas/tabuleiro. Ele apenas fornece dados basicos que outros modulos podem consumir.
* Personagens devem estar sempre associados a uma campanha.

## 4. Integracoes
* `campaign`: validacao de existencia da campanha e permissao de mestre/jogador.
* `login`: usuario autenticado para ownership e auditoria.
* `character_sheet`: criacao e edicao futura da ficha mecanica.
