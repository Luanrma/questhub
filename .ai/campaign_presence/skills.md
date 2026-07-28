# Campaign Presence — Diretrizes

* Validar presença por `CampaignMember` ativo.
* Aceitar somente o `actorId` principal do membro para entrada na sessão.
* Não derivar usuário a partir de `CampaignActor`.
* Manter estado realtime em memória e persistência de cena separada.
