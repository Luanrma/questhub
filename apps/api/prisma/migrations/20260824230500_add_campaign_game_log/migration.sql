-- CreateTable
CREATE TABLE "CampaignEncounter" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "sceneId" TEXT,
    "sceneNameSnapshot" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),
    "endReason" TEXT,

    CONSTRAINT "CampaignEncounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignGameLogEntry" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CampaignGameLogEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CampaignEncounter_campaignId_startedAt_idx" ON "CampaignEncounter"("campaignId", "startedAt");
CREATE INDEX "CampaignEncounter_campaignId_endedAt_idx" ON "CampaignEncounter"("campaignId", "endedAt");
CREATE INDEX "CampaignEncounter_sceneId_idx" ON "CampaignEncounter"("sceneId");
CREATE UNIQUE INDEX "CampaignEncounter_id_campaignId_key" ON "CampaignEncounter"("id", "campaignId");
CREATE INDEX "CampaignGameLogEntry_campaignId_createdAt_idx" ON "CampaignGameLogEntry"("campaignId", "createdAt");
CREATE INDEX "CampaignGameLogEntry_encounterId_createdAt_idx" ON "CampaignGameLogEntry"("encounterId", "createdAt");

-- AddForeignKey
ALTER TABLE "CampaignEncounter" ADD CONSTRAINT "CampaignEncounter_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignEncounter" ADD CONSTRAINT "CampaignEncounter_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignGameLogEntry" ADD CONSTRAINT "CampaignGameLogEntry_encounterId_campaignId_fkey" FOREIGN KEY ("encounterId", "campaignId") REFERENCES "CampaignEncounter"("id", "campaignId") ON DELETE CASCADE ON UPDATE CASCADE;
