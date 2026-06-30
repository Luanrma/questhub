-- CreateEnum
CREATE TYPE "CampaignSceneGridShape" AS ENUM ('SQUARE', 'HEX');

-- CreateTable
CREATE TABLE "CampaignScene" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "assetId" TEXT,
    "backgroundUrl" TEXT,
    "backgroundCacheKey" TEXT,
    "gridVisible" BOOLEAN NOT NULL DEFAULT true,
    "gridShape" "CampaignSceneGridShape" NOT NULL DEFAULT 'SQUARE',
    "gridSize" INTEGER NOT NULL DEFAULT 32,
    "metersPerCell" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "squareMeasurementColor" TEXT NOT NULL DEFAULT '#facc15',
    "hexMeasurementColor" TEXT NOT NULL DEFAULT '#38bdf8',
    "gridLineWidth" INTEGER NOT NULL DEFAULT 1,
    "gridColor" TEXT NOT NULL DEFAULT '#ffffff',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignScene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignSceneToken" (
    "id" TEXT NOT NULL,
    "sceneId" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "positionX" DOUBLE PRECISION NOT NULL,
    "positionY" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignSceneToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignSceneViewState" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "masterActiveSceneId" TEXT,
    "forcedSceneId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignSceneViewState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignDiary" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "createdById" TEXT NOT NULL,
    "lastEditedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignDiary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CampaignScene_campaignId_order_key" ON "CampaignScene"("campaignId", "order");

-- CreateIndex
CREATE INDEX "CampaignScene_campaignId_idx" ON "CampaignScene"("campaignId");

-- CreateIndex
CREATE INDEX "CampaignScene_assetId_idx" ON "CampaignScene"("assetId");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignSceneToken_characterId_key" ON "CampaignSceneToken"("characterId");

-- CreateIndex
CREATE INDEX "CampaignSceneToken_sceneId_idx" ON "CampaignSceneToken"("sceneId");

-- CreateIndex
CREATE INDEX "CampaignSceneToken_characterId_idx" ON "CampaignSceneToken"("characterId");

-- CreateIndex
CREATE UNIQUE INDEX "CampaignSceneViewState_campaignId_key" ON "CampaignSceneViewState"("campaignId");

-- CreateIndex
CREATE INDEX "CampaignSceneViewState_masterActiveSceneId_idx" ON "CampaignSceneViewState"("masterActiveSceneId");

-- CreateIndex
CREATE INDEX "CampaignSceneViewState_forcedSceneId_idx" ON "CampaignSceneViewState"("forcedSceneId");

-- CreateIndex
CREATE INDEX "CampaignDiary_campaignId_idx" ON "CampaignDiary"("campaignId");

-- CreateIndex
CREATE INDEX "CampaignDiary_createdById_idx" ON "CampaignDiary"("createdById");

-- AddForeignKey
ALTER TABLE "CampaignScene" ADD CONSTRAINT "CampaignScene_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignScene" ADD CONSTRAINT "CampaignScene_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignSceneToken" ADD CONSTRAINT "CampaignSceneToken_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignSceneToken" ADD CONSTRAINT "CampaignSceneToken_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignSceneViewState" ADD CONSTRAINT "CampaignSceneViewState_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignSceneViewState" ADD CONSTRAINT "CampaignSceneViewState_masterActiveSceneId_fkey" FOREIGN KEY ("masterActiveSceneId") REFERENCES "CampaignScene"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignSceneViewState" ADD CONSTRAINT "CampaignSceneViewState_forcedSceneId_fkey" FOREIGN KEY ("forcedSceneId") REFERENCES "CampaignScene"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignDiary" ADD CONSTRAINT "CampaignDiary_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampaignDiary" ADD CONSTRAINT "CampaignDiary_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
