# Modulo: Criacao de Campanha (Skills & Tech)

## 1. Stack Tecnologica
* **Frontend:** React para formulario de criacao de campanha, selecao de sistema, politica de entrada e personagem mestre.
* **Backend:** Node.js/Fastify para contratos HTTP e autorizacao.
* **Validacao:** Zod para payloads de entrada.
* **Persistencia:** Prisma com `Campaign`, `Character` e `CampaignCharacter`.

## 2. Padroes Aplicados
* **Transaction Script:** Criacao de campanha e vinculo `MASTER` devem ocorrer na mesma transacao.
* **Policy/Guard:** Validar ownership, disponibilidade e compatibilidade do personagem mestre antes de criar a campanha.
* **Repository Boundary:** O acesso a Prisma deve ser isolado futuramente em repositorios/casos de uso.
* **Idempotency Guard no Frontend:** O formulario deve bloquear duplo submit para evitar criacoes duplicadas por clique rapido.

## 3. Restricoes Arquiteturais
* Nao usar `CampaignMember`.
* Nao persistir `gmName` ou `gmUserId` em `Campaign`.
* Nao acoplar criacao de campanha a regras mecanicas internas de ficha.
* Nao criar ficha mecanica no fluxo de campanha; apenas herdar `GameSystem` quando o personagem nao possuir sistema.
* Nao permitir que um personagem ja vinculado seja reutilizado para nova campanha.

## 4. Integracoes
* `character_creation`: consulta personagens livres e cria/vincula o personagem mestre.
* `game_systems`: fornece `GameSystem`, registry de rulesets e compatibilidade de ficha.
* `login`: fornece usuario autenticado.
* `campaign_presence`: marca campanha online quando o mestre entra.

## 5. Cuidados Tecnicos
* Usar constraint unica em `CampaignCharacter.characterId` como protecao final contra reutilizacao de personagem.
* Tratar erro de conflito quando dois requests tentarem usar o mesmo personagem mestre.
* O frontend deve enviar `masterCharacterId` para personagem existente ou `masterCharacterName` para criar novo.
* O dashboard pode receber `gmName` derivado do personagem `MASTER` para manter compatibilidade visual.
