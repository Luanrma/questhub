-- CreateEnum
CREATE TYPE "NpcDefinitionSource" AS ENUM ('SYSTEM_CATALOG', 'CUSTOM');

-- AlterTable
ALTER TABLE "CampaignSceneToken" ADD COLUMN     "campaignNpcDefinitionId" TEXT;

-- CreateTable
CREATE TABLE "CampaignNpcDefinition" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "system" "GameSystem" NOT NULL,
    "source" "NpcDefinitionSource" NOT NULL DEFAULT 'SYSTEM_CATALOG',
    "sourcePack" TEXT,
    "bestiaryCreatureId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "spellbook" JSONB,
    "createdByUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignNpcDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CampaignNpcDefinition_campaignId_idx" ON "CampaignNpcDefinition"("campaignId");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignNpcDefinition_campaignId_source_sourcePack_bestiary_key" ON "CampaignNpcDefinition"("campaignId", "source", "sourcePack", "bestiaryCreatureId", "name");

-- CreateIndex
CREATE INDEX "CampaignSceneToken_campaignNpcDefinitionId_idx" ON "CampaignSceneToken"("campaignNpcDefinitionId");

-- AddForeignKey
ALTER TABLE "CampaignSceneToken" ADD CONSTRAINT "CampaignSceneToken_campaignNpcDefinitionId_fkey" FOREIGN KEY ("campaignNpcDefinitionId") REFERENCES "CampaignNpcDefinition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignNpcDefinition" ADD CONSTRAINT "CampaignNpcDefinition_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
