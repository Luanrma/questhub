ALTER TABLE "CampaignScene"
ADD COLUMN "fogConfig" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN "fixedLightSources" JSONB NOT NULL DEFAULT '[]';

ALTER TABLE "CampaignToken"
ADD COLUMN "visionConfig" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN "lightConfig" JSONB NOT NULL DEFAULT '{}';

ALTER TABLE "CampaignTokenPlacement"
ADD COLUMN "blocksVisionAndLight" BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE "CampaignFogExploration" (
    "id" TEXT NOT NULL,
    "sceneId" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,
    "revision" INTEGER NOT NULL DEFAULT 0,
    "mask" BYTEA,
    "maskWidth" INTEGER NOT NULL DEFAULT 0,
    "maskHeight" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignFogExploration_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CampaignFogExploration_sceneId_tokenId_key"
ON "CampaignFogExploration"("sceneId", "tokenId");

CREATE INDEX "CampaignFogExploration_tokenId_idx"
ON "CampaignFogExploration"("tokenId");

ALTER TABLE "CampaignFogExploration"
ADD CONSTRAINT "CampaignFogExploration_sceneId_fkey"
FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "CampaignFogExploration"
ADD CONSTRAINT "CampaignFogExploration_tokenId_fkey"
FOREIGN KEY ("tokenId") REFERENCES "CampaignToken"("id") ON DELETE CASCADE ON UPDATE CASCADE;
