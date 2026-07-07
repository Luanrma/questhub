# Modulo: Combat (Controle de Vida em Combate)

## 1. Proposito
Controlar HP (vida atual, maxima e temporaria) de tokens em cena durante o combate, de forma persistente, generica e independente de sistema de RPG.

Este modulo pertence ao **Core Engine** do QuestHub (nao a um `game-system-*`), porque HP de token e estado de VTT — todo sistema de RPG (PF2e, D&D 5e, etc.) precisa de alguma forma de controlar vida em combate, mesmo que a formula exata de calculo (resistencia, fraqueza, cura, dano) varie por sistema.

## 2. Problema Resolvido
Hoje o Encounter Mode ja existe (participantes `creature` e `hazard`, iniciativa, estado em memoria), mas nao ha nenhum controle persistente de vida. O Mestre precisa poder aplicar dano/cura em qualquer token durante o combate, com o valor sobrevivendo a refresh/reconexao, remocao/recriacao de token e troca de cena, sem que isso:

* altere o catalogo do Bestiario (NPCs sao instancias; dois goblins iguais podem e devem ter HP diferente, pois sao criaturas independentes — cada uma com seu proprio token e sua propria vida);
* transforme Hazard em criatura (Hazards nao ganham HP nesta etapa).

## 3. Regras de Negocio — duas fontes de verdade, por tipo de token

**Decisao confirmada com o usuario (2026-07-07):** vida de personagem de jogador e vida de NPC/criatura do bestiario nao compartilham a mesma fonte de dados. Cada tipo de token tem seu proprio "dono" de HP:

* **Token de jogador (`source: 'character'`):** a vida pertence a **ficha do personagem** (`Character.sheet`, campo `hitPoints` dentro do bloco especifico do sistema — ex.: `Pathfinder2eSheet.hitPoints.{current,maximum,temporary}`). Isso e proposital: a ficha e unica por personagem (um personagem pertence a uma unica campanha, `CampaignCharacter.characterId` e `@unique`), entao a vida sobrevive mesmo se o token dele for removido do mapa e recolocado depois — nao ha uma segunda tabela de vida para jogador.
* **Token de NPC/bestiario (`source: 'bestiary'`):** a vida pertence a **instancia do token de cena** (`CampaignSceneTokenHealth`, tabela nova, 1:1 com `CampaignSceneToken`). Cada token de NPC e uma criatura independente; remover o token remove a vida junto (correto — a criatura deixou de existir na cena).
* Em ambos os casos, quando um token muda de cena (ex.: perseguicao entre dois andares de um mesmo combate), e o **mesmo token** que e reposicionado (o backend atualiza `sceneId` do registro existente, nao cria um novo) — a vida acompanha a troca de cena automaticamente, sem logica adicional.
* O participante de encontro (`VttEncounterCreatureParticipant.health`) e sempre um **snapshot** lido da fonte correta (ficha ou `CampaignSceneTokenHealth`) no momento da leitura/alteracao — nunca e escrito diretamente.
* Dano consome `temporaryHitPoints` antes de `currentHitPoints`.
* `currentHitPoints` nunca fica abaixo de 0. Cura nunca ultrapassa `maxHitPoints`.
* Reduzir `maxHitPoints` abaixo do HP atual reduz o HP atual junto.
* `state` (`OK`/`DOWN`) e sempre derivado de `currentHitPoints`, nunca armazenado independentemente.
* Hazards nao possuem HP nesta etapa — dano/dureza de Hazard e um modulo futuro separado.
* Toda alteracao de HP (de jogador ou de NPC) gera um registro em `CampaignSceneTokenHealthLog` (auditoria/historico por cena/campanha), independente de onde o valor vivo esteja guardado e independente de o Mestre optar por anunciar ou nao no chat.
* A leitura/escrita da vida de personagem **nunca** hardcoda nomes de campo especificos de um sistema (como `hitPoints.maximum`) dentro do modulo `combat`. Isso passa por um adapter por sistema (ver secao 6 e `skills.md`), o mesmo padrao ja usado por `apps/api/src/modules/game_systems/registry.ts` para ler/validar a ficha inteira.

## 4. Personas
* **Mestre:** aplica dano/cura em qualquer token, ve HP exato de todos, define HP maximo/temporario.
* **Jogador:** ve HP exato do proprio personagem; ve NPCs apenas por faixa percentual textual (sem numero exato), nesta etapa nao edita HP de ninguem (nem o proprio) — ver `specs.md` secao de permissoes.

## 5. Casos de Uso
* Iniciar um encontro e ver o HP de cada participante criatura ja carregado.
* Aplicar dano/cura pelo card de iniciativa (icone de coracao no `EncounterTrackerPanel`, area de participantes do Encounter Mode) ou pela barra de HP no token do mapa.
* Definir HP inicial de um token sem HP conhecido ("HP nao definido").
* Consultar o log de alteracoes de HP de uma cena/campanha (uso interno do Mestre).
* Acompanhar dano/cura aplicados durante um encontro ativo pelo Log de Batalha, visivel tambem para Jogadores (`.ai/encounter/specs.md` secao 2.1).

## 6. Limites
Pertence a este modulo:

* estado persistente de HP de NPC/bestiario por token de cena (`CampaignSceneTokenHealth`);
* orquestracao de leitura/escrita de HP de personagem na ficha, via adapter de sistema (sem conhecer os nomes de campo do sistema);
* regras puras de calculo de dano/cura/set (`health-rules.ts`), agnosticas de onde o valor esta guardado;
* eventos Socket.IO de ajuste/leitura de HP;
* apresentacao de HP por papel (Mestre/dono/jogador vendo NPC).

Nao pertence a este modulo (fica para modulos/etapas futuras):

* automacao de ataque, dano por tipo, resistencia, fraqueza, imunidade;
* dureza/hardness, condicoes (`dying`, `wounded`, morte, estabilizacao — PF2e ja tem esses campos na ficha, mas esta etapa nao os manipula);
* HP/dureza de Hazard;
* mana, stamina, spell slots ou outros recursos;
* o formato exato do bloco de HP dentro da ficha de cada sistema (isso e definido e mantido por `packages/game-system-*`, este modulo so consome via adapter — ver `skills.md`).

## 7. Decisao de Produto
MVP: apenas o Mestre edita HP; jogadores somente visualizam (o proprio PC com numero exato, aliados e NPCs conforme regra de visibilidade). Edicao pelo dono do token fica para uma iteracao futura (`allowPlayerHealthEdit`).
