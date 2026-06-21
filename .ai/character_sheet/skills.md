# Modulo: Ficha de Personagem (Skills & Tech)

## 1. Stack Tecnologica
* **Frontend:** React para formularios de ficha e estados de edicao/visualizacao.
* **Backend:** Node.js/Fastify com Zod para validacao do envelope comum.
* **Persistencia:** Prisma. A ficha pode ser armazenada em `Character.sheet` como JSON validado.

## 2. Padroes Aplicaveis
* **Strategy:** Selecionar validador de sistema a partir de `system`.
* **Registry:** Registrar adaptadores de ficha por sistema sem acoplamento direto no modulo base.
* **Composite Schema:** Validar primeiro o envelope comum e depois delegar o bloco de dados ao modulo de sistema.
* **Guard Clauses:** Bloquear persistencia quando personagem, sistema ou bloco de dados forem incoerentes.

## 3. Restricoes Arquiteturais
* O modulo depende de um `Character` existente, mas nao cria personagem.
* O modulo nao cria nem altera vinculos de campanha, exceto por consultas de compatibilidade quando necessario.
* O modulo nao deve depender diretamente do canvas/tabuleiro.
* O modulo base nao conhece campos internos de sistemas especificos.
* O modulo base nao calcula regras de sistemas especificos.
* Submodulos de sistema devem receber o envelope ja validado e validar apenas o proprio bloco de dados.

## 4. Integracoes
* `character_creation`: fornece `Character` e regras de disponibilidade/vinculo.
* `campaign_creation`: pode fornecer o sistema exigido pela campanha para compatibilidade.
* Submodulos internos de ficha: fornecem schemas, defaults, validadores e futuras calculadoras especificas de sistema.

## 5. Organizacao De Codigo Esperada
* Envelope de ficha: `character_sheet`.
* Contratos base: `character_sheet`.
* Roteamento por sistema: `character_sheet`.
* UI estrutural comum, quando existir: `character_sheet`.
* Campos, labels, defaults, validacoes e calculos de sistema: submodulo especifico.
