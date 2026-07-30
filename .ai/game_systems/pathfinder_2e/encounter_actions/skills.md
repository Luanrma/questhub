# Pathfinder 2e — Ações no Encounter — Restrições técnicas

- Implementação em `apps/api/src/game_systems/pathfinder_2e/automation/`.
- Funções puras transformam dados validados em `TokenActionPresentation[]`.
- Ficha PLAYER é resolvida pelo `gameSystemRuntime`; totais derivados nunca são
  confiados ao cliente.
- NPC de catálogo é localizado pelo `contentId` do envelope produzido pelo
  próprio PF2e.
- Traduções de NPC usam o overlay `pt-BR` já pareado ao registro do catálogo.
- Ações mecânicas usam `OWNER_AND_MASTER`; informações privadas não são
  publicadas para observadores.
- Perícias gerais usam somente o contexto neutro `REFERENCE`.
- Ataques, habilidades e magias de NPC usam o contexto neutro `ENCOUNTER`.
- O módulo não importa React, Canvas, Socket.io ou `apps/api/src/modules/**`.
- Nenhuma alteração de banco ou schema é necessária.
