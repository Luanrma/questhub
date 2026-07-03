-- CreateEnum
CREATE TYPE "CampaignSceneTokenSource" AS ENUM ('CHARACTER', 'BESTIARY');

-- AlterTable
ALTER TABLE "CampaignSceneToken" ADD COLUMN "avatarUrl" TEXT,
ADD COLUMN "bestiaryCreatureId" TEXT,
ADD COLUMN "bestiarySystem" "GameSystem",
ADD COLUMN "name" TEXT,
ADD COLUMN "source" "CampaignSceneTokenSource" NOT NULL DEFAULT 'CHARACTER',
ADD COLUMN "tokenBorderColor" TEXT,
ALTER COLUMN "characterId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "CampaignSceneToken_bestiarySystem_bestiaryCreatureId_idx" ON "CampaignSceneToken"("bestiarySystem", "bestiaryCreatureId");
