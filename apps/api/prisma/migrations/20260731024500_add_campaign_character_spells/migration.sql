CREATE TABLE "CampaignCharacterSpell" (
  "id" TEXT NOT NULL,
  "characterSheetId" TEXT NOT NULL,
  "catalogNamespace" TEXT NOT NULL,
  "catalogContentId" TEXT NOT NULL,
  "baseRank" INTEGER NOT NULL,
  "data" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignCharacterSpell_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CampaignCharacterSpell_baseRank_range" CHECK ("baseRank" BETWEEN 0 AND 10)
);

CREATE UNIQUE INDEX "CampaignCharacterSpell_characterSheetId_catalogNamespace_catalogContentId_key"
  ON "CampaignCharacterSpell"("characterSheetId", "catalogNamespace", "catalogContentId");

CREATE INDEX "CampaignCharacterSpell_characterSheetId_baseRank_createdAt_idx"
  ON "CampaignCharacterSpell"("characterSheetId", "baseRank", "createdAt");

CREATE INDEX "CampaignCharacterSpell_catalogNamespace_catalogContentId_idx"
  ON "CampaignCharacterSpell"("catalogNamespace", "catalogContentId");

ALTER TABLE "CampaignCharacterSpell"
  ADD CONSTRAINT "CampaignCharacterSpell_characterSheetId_fkey"
  FOREIGN KEY ("characterSheetId") REFERENCES "CampaignCharacterSheet"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
