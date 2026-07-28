# Chat — Diretrizes técnicas

* Autorizar por `CampaignMember`, nunca por relação direta `CampaignActor.userId`.
* Persistir `actorId` e `userId` para identidade narrativa e auditoria.
* Validar que mensagem, ator e membro pertencem à mesma campanha.
* Não consultar ficha ou inventário.
