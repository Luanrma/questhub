ALTER TABLE "CampaignEncounter"
ADD COLUMN "name" TEXT NOT NULL DEFAULT 'Encontro',
ADD COLUMN "privateNotes" TEXT;

CREATE UNIQUE INDEX "CampaignEncounter_one_active_per_campaign"
ON "CampaignEncounter"("campaignId")
WHERE "endedAt" IS NULL;
