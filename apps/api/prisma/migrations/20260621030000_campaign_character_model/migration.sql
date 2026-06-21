-- CreateEnum
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'GameSystem') THEN
    CREATE TYPE "GameSystem" AS ENUM ('DND_5E', 'PATHFINDER_2E');
  END IF;
END $$;

-- CreateEnum
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'CampaignCharacterStatus') THEN
    CREATE TYPE "CampaignCharacterStatus" AS ENUM ('PENDING', 'ACTIVE', 'REJECTED', 'LEFT', 'DEAD');
  END IF;
END $$;

-- CreateEnum
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'CampaignCharacterRole') THEN
    CREATE TYPE "CampaignCharacterRole" AS ENUM ('MASTER', 'PLAYER', 'NPC');
  END IF;
END $$;

-- Campaign: replace direct GM fields with audit creator and mandatory game system.
ALTER TABLE "Campaign"
  ADD COLUMN "system" "GameSystem",
  ADD COLUMN "createdByUserId" TEXT,
  ADD COLUMN "updatedAt" TIMESTAMP(3);

UPDATE "Campaign"
SET
  "system" = 'DND_5E',
  "createdByUserId" = "gmUserId",
  "updatedAt" = COALESCE("createdAt", CURRENT_TIMESTAMP);

ALTER TABLE "Campaign"
  ALTER COLUMN "system" SET NOT NULL,
  ALTER COLUMN "createdByUserId" SET NOT NULL,
  ALTER COLUMN "updatedAt" SET NOT NULL;

-- Character: move campaign-specific state into CampaignCharacter.
ALTER TABLE "Character"
  ADD COLUMN "avatarUrl" TEXT,
  ADD COLUMN "bio" TEXT,
  ADD COLUMN "system" "GameSystem",
  ADD COLUMN "deletedAt" TIMESTAMP(3),
  ADD COLUMN "updatedAt" TIMESTAMP(3);

UPDATE "Character"
SET "updatedAt" = COALESCE("createdAt", CURRENT_TIMESTAMP);

ALTER TABLE "Character"
  ALTER COLUMN "updatedAt" SET NOT NULL;

-- CreateTable
CREATE TABLE "CampaignCharacter" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "role" "CampaignCharacterRole" NOT NULL,
    "status" "CampaignCharacterStatus" NOT NULL DEFAULT 'PENDING',
    "joinedAt" TIMESTAMP(3),
    "leftAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignCharacter_pkey" PRIMARY KEY ("id")
);

-- Backfill campaign-character links from the old Character campaign fields.
INSERT INTO "CampaignCharacter" (
  "id",
  "campaignId",
  "characterId",
  "role",
  "status",
  "joinedAt",
  "leftAt",
  "createdAt",
  "updatedAt"
)
SELECT
  'cc_' || "id",
  "campaignId",
  "id",
  ("role"::text)::"CampaignCharacterRole",
  ("status"::text)::"CampaignCharacterStatus",
  CASE WHEN "status"::text = 'ACTIVE' THEN "createdAt" ELSE NULL END,
  NULL,
  "createdAt",
  "updatedAt"
FROM "Character";

-- CreateIndex
CREATE UNIQUE INDEX "CampaignCharacter_characterId_key" ON "CampaignCharacter"("characterId");

-- CreateIndex
CREATE INDEX "CampaignCharacter_campaignId_idx" ON "CampaignCharacter"("campaignId");

-- CreateIndex
CREATE INDEX "CampaignCharacter_status_idx" ON "CampaignCharacter"("status");

-- CreateIndex
CREATE INDEX "CampaignCharacter_role_idx" ON "CampaignCharacter"("role");

-- CreateIndex
CREATE INDEX "Character_deletedAt_idx" ON "Character"("deletedAt");

-- AddForeignKey
ALTER TABLE "Campaign" DROP CONSTRAINT IF EXISTS "Campaign_gmUserId_fkey";

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_createdByUserId_fkey"
FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignCharacter" ADD CONSTRAINT "CampaignCharacter_campaignId_fkey"
FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignCharacter" ADD CONSTRAINT "CampaignCharacter_characterId_fkey"
FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Drop old CampaignMember relation and old Character campaign fields.
ALTER TABLE "CampaignMember" DROP CONSTRAINT IF EXISTS "CampaignMember_campaignId_fkey";
ALTER TABLE "CampaignMember" DROP CONSTRAINT IF EXISTS "CampaignMember_userId_fkey";
ALTER TABLE "CampaignMember" DROP CONSTRAINT IF EXISTS "CampaignMember_characterId_fkey";
DROP TABLE "CampaignMember";

DROP INDEX IF EXISTS "Character_campaignId_idx";
ALTER TABLE "Character" DROP CONSTRAINT IF EXISTS "Character_campaignId_fkey";
ALTER TABLE "Character"
  DROP COLUMN "campaignId",
  DROP COLUMN "active",
  DROP COLUMN "role",
  DROP COLUMN "status";

ALTER TABLE "Campaign"
  DROP COLUMN "gmName",
  DROP COLUMN "gmUserId";

-- Drop old enums if no longer used.
DROP TYPE IF EXISTS "CharacterRole";
DROP TYPE IF EXISTS "CampaignMemberStatus";
