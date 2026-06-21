# Modulo: Ficha de Personagem (Skills & Tech)

## 1. Stack Tecnologica
* **Frontend:** React para formularios reativos e recalculo imediato de valores derivados.
* **Backend:** Node.js/Fastify com Zod para validacao dos contratos comuns de ficha.
* **Persistencia:** Prisma. No MVP, a ficha pode ser armazenada em `Character.sheet` como JSON validado por contrato.

## 2. Padroes Aplicaveis
* **Value Objects:** Encapsular valores com regras proprias, como `AttributeScore` e `HitPoints`.
* **Strategy:** Selecionar validador por `GameSystem`.
* **Interpreter:** Avaliar formulas configuraveis quando houver suporte completo a multiplos sistemas.
* **Observer / Pub-Sub:** Atualizar componentes dependentes no frontend quando campos base mudarem.

## 3. Restricoes Arquiteturais
* O modulo depende de um `Character` existente, mas nao cria personagem.
* O modulo nao cria nem altera `CampaignCharacter`, exceto por consultas de compatibilidade quando necessario.
* Regras mecanicas devem ser validadas tambem no backend.
* O modulo nao deve depender diretamente do canvas/tabuleiro.
* Validacoes especificas devem ser isoladas por sistema.

## 4. Integracoes
* `character_creation`: fornece `Character` e regras de disponibilidade/vinculo.
* `campaign`: fornece `Campaign.system` para compatibilidade.
* `dnd_5e_sheet`: validador especifico futuro para `DND_5E`.
* `pathfinder_2e_sheet`: validador especifico futuro para `PATHFINDER_2E`.
