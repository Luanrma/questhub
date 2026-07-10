-- DropIndex
DROP INDEX "CampaignItemDefinition_campaignId_itemType_idx";

-- DropIndex
DROP INDEX "CampaignItemDefinition_campaignId_name_idx";

-- DropIndex
DROP INDEX "CampaignItemDefinition_campaignId_source_sourcePack_sourceI_idx";

-- AlterTable
ALTER TABLE "CampaignItemDefinition" DROP COLUMN "bulk",
DROP COLUMN "equipSlot",
DROP COLUMN "isStackable",
DROP COLUMN "itemType",
DROP COLUMN "level",
DROP COLUMN "name",
DROP COLUMN "priceMinorUnit",
DROP COLUMN "rarity",
DROP COLUMN "systemData",
DROP COLUMN "traits",
ADD COLUMN     "itemData" JSONB;

-- CreateIndex
CREATE UNIQUE INDEX "CampaignItemDefinition_campaignId_source_sourcePack_sourceI_key" ON "CampaignItemDefinition"("campaignId", "source", "sourcePack", "sourceId");
