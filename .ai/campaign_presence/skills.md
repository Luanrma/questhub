# Campaign Presence — Diretrizes

* Validar presença por `CampaignMember` ativo.
* Autorizar entrada por usuário e `CampaignMember`, sem exigir ator.
* Não derivar usuário a partir de `CampaignActor`.
* Manter estado realtime em memória e persistência de cena separada.
