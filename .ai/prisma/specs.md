# Prisma: Contratos

* `Campaign` nao possui identificador de regras.
* `Character` persiste somente identidade, ownership e ciclo de vida.
* `CampaignCharacter` concentra papel, status e vinculo de campanha.
* Cenas e tokens armazenam apenas estado visual e operacional.
* Migracoes devem suportar banco novo e a atualizacao do estado anterior.
