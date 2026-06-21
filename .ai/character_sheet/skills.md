# Modulo: Ficha de Personagem (Skills & Tech)

## 1. Stack Tecnologica
* **Frontend:** React para formularios reativos e recalculo imediato de valores derivados.
* **Backend:** Node.js/Fastify com Zod para validacao dos contratos de ficha.
* **Persistencia:** Prisma. No MVP, a ficha pode ser armazenada em `Character.sheet` como JSON validado por contrato.

## 2. Padroes Aplicaveis
* **Value Objects:** Encapsular valores com regras proprias, como `AttributeScore` e `HitPoints`.
* **Strategy / Interpreter:** Avaliar formulas configuraveis quando houver suporte a multiplos sistemas de RPG.
* **Observer / Pub-Sub:** Atualizar componentes dependentes no frontend quando campos base mudarem.

## 3. Restricoes Arquiteturais
* O modulo de ficha depende de um personagem existente, mas nao cria personagem.
* Regras mecanicas devem ser validadas tambem no backend.
* O modulo nao deve depender diretamente do canvas/tabuleiro.
