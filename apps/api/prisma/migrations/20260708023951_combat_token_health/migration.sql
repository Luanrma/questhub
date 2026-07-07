-- CreateEnum
CREATE TYPE "CombatHealthOperation" AS ENUM ('DAMAGE', 'HEAL', 'SET_CURRENT', 'SET_MAX', 'SET_TEMPORARY', 'CLEAR_TEMPORARY');

-- CreateTable
CREATE TABLE "CampaignSceneTokenHealth" (
    "id" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,
    "currentHitPoints" INTEGER NOT NULL,
    "maxHitPoints" INTEGER NOT NULL,
    "temporaryHitPoints" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignSceneTokenHealth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaignSceneTokenHealthLog" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "sceneId" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,
    "actorUserId" TEXT,
    "actorCharacterId" TEXT,
    "operation" "CombatHealthOperation" NOT NULL,
    "amount" INTEGER,
    "before" JSONB NOT NULL,
    "after" JSONB NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CampaignSceneTokenHealthLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CampaignSceneTokenHealth_tokenId_key" ON "CampaignSceneTokenHealth"("tokenId");

-- CreateIndex
CREATE INDEX "CampaignSceneTokenHealth_tokenId_idx" ON "CampaignSceneTokenHealth"("tokenId");

-- CreateIndex
CREATE INDEX "CampaignSceneTokenHealthLog_campaignId_createdAt_idx" ON "CampaignSceneTokenHealthLog"("campaignId", "createdAt");

-- CreateIndex
CREATE INDEX "CampaignSceneTokenHealthLog_sceneId_createdAt_idx" ON "CampaignSceneTokenHealthLog"("sceneId", "createdAt");

-- CreateIndex
CREATE INDEX "CampaignSceneTokenHealthLog_tokenId_createdAt_idx" ON "CampaignSceneTokenHealthLog"("tokenId", "createdAt");

-- AddForeignKey
ALTER TABLE "CampaignSceneTokenHealth" ADD CONSTRAINT "CampaignSceneTokenHealth_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "CampaignSceneToken"("id") ON DELETE CASCADE ON UPDATE CASCADE;
