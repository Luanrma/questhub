CREATE TABLE "CampaignCharacterSheet" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "createdByUserId" TEXT NOT NULL,
    "assignedUserId" TEXT,
    "tokenId" TEXT,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "bio" TEXT,
    "systemKey" TEXT NOT NULL,
    "schemaVersion" INTEGER NOT NULL DEFAULT 1,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignCharacterSheet_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CampaignCharacterSheet_tokenId_key"
    ON "CampaignCharacterSheet"("tokenId");
CREATE INDEX "CampaignCharacterSheet_campaignId_createdAt_idx"
    ON "CampaignCharacterSheet"("campaignId", "createdAt");
CREATE INDEX "CampaignCharacterSheet_assignedUserId_idx"
    ON "CampaignCharacterSheet"("assignedUserId");
CREATE INDEX "CampaignCharacterSheet_systemKey_idx"
    ON "CampaignCharacterSheet"("systemKey");

ALTER TABLE "CampaignCharacterSheet"
    ADD CONSTRAINT "CampaignCharacterSheet_campaignId_fkey"
    FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "CampaignCharacterSheet"
    ADD CONSTRAINT "CampaignCharacterSheet_createdByUserId_fkey"
    FOREIGN KEY ("createdByUserId") REFERENCES "User"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "CampaignCharacterSheet"
    ADD CONSTRAINT "CampaignCharacterSheet_assignedUserId_fkey"
    FOREIGN KEY ("assignedUserId") REFERENCES "User"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "CampaignCharacterSheet"
    ADD CONSTRAINT "CampaignCharacterSheet_tokenId_fkey"
    FOREIGN KEY ("tokenId") REFERENCES "CampaignToken"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;
