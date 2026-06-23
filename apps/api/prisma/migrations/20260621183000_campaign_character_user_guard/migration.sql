-- Add the user owner directly to CampaignCharacter so the database can enforce
-- one active/pending user participation per campaign.
ALTER TABLE "CampaignCharacter" ADD COLUMN "userId" TEXT;

UPDATE "CampaignCharacter" AS "campaignCharacter"
SET "userId" = "character"."userId"
FROM "Character" AS "character"
WHERE "campaignCharacter"."characterId" = "character"."id";

ALTER TABLE "CampaignCharacter" ALTER COLUMN "userId" SET NOT NULL;

CREATE INDEX "CampaignCharacter_userId_idx" ON "CampaignCharacter"("userId");

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM "CampaignCharacter"
    WHERE "status" IN ('ACTIVE', 'PENDING')
    GROUP BY "campaignId", "userId"
    HAVING COUNT(*) > 1
  ) THEN
    RAISE EXCEPTION 'Cannot enforce one active/pending character per user per campaign: duplicate CampaignCharacter rows exist';
  END IF;
END $$;

CREATE UNIQUE INDEX "CampaignCharacter_campaignId_userId_active_pending_key"
ON "CampaignCharacter"("campaignId", "userId")
WHERE "status" IN ('ACTIVE', 'PENDING');

ALTER TABLE "CampaignCharacter" ADD CONSTRAINT "CampaignCharacter_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
