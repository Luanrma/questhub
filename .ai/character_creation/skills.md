# Modulo: Criacao de Personagem (Skills & Tech)

## 1. Stack Tecnologica
* **Frontend:** React para "Meus Personagens", secao compacta no dashboard, fluxo de criar campanha com personagem `MASTER` e fluxo de entrada em campanha com personagem.
* **Backend:** Node.js/Fastify para API de persistencia, autorizacao e transacoes.
* **Validacao:** Zod para contratos de entrada e resposta.
* **Persistencia:** Prisma com `Character` e `CampaignCharacter`.

## 2. Padroes Aplicados
* **Clean Architecture / Bounded Context:** Casos de uso de personagem nao devem conhecer regras internas de D&D 5e ou Pathfinder 2e.
* **Policy/Guard:** Permissoes devem ser explicitas para dono do personagem, `MASTER` ativo e fluxo de NPC.
* **Repository Boundary:** Prisma deve ficar atras de repositorios/casos de uso pequenos.
* **Transaction Script:** Criacao de campanha + vinculo `MASTER`, entrada em campanha publica e criacao de NPC devem ser transacionais.
* **State Machine:** `CampaignCharacter.status` deve ter transicoes controladas.

## 3. Restricoes Arquiteturais
* `CampaignMember` nao deve ser usado pelo novo modelo.
* `Character` nao deve carregar role de campanha.
* Disponibilidade de personagem e derivada da ausencia de `CampaignCharacter` e de `deletedAt`.
* `Character.sheet` nao deve ser validado por este modulo.
* Este modulo pode verificar compatibilidade simples entre `Character.system` e `Campaign.system`, mas nao valida regras mecanicas.
* O modulo nao deve depender diretamente do canvas/tabuleiro.
* Nao ha upload de avatar no MVP; `avatarUrl` e apenas uma string opcional.

## 4. Integracoes
* `campaign`: criacao de campanha exige sistema e personagem `MASTER`.
* `login`: usuario autenticado define ownership do `Character`.
* `character_sheet`: define `Character.system` e `Character.sheet` quando houver ficha.
* `dnd_5e_sheet` e `pathfinder_2e_sheet`: validadores especificos futuros.
* `canvas` ou `vtt`: deve consumir apenas `CampaignCharacter` com status `ACTIVE`.

## 5. Regras Tecnicas Importantes
* Usar transacao ao criar campanha e `CampaignCharacter` do mestre.
* Usar transacao ao criar NPC e vinculo de campanha.
* Usar constraint unica em `CampaignCharacter.characterId` para impedir reutilizacao do personagem.
* Validar por aplicacao que existe apenas um `MASTER` ativo por campanha.
* Bio deve ser validada com limite de 2.000 caracteres no backend e frontend.
* Delete fisico so deve ser permitido para personagem livre e sem restricoes de ficha/historico definidas pelo produto.
* Arquivamento de personagem livre usa `deletedAt`.
