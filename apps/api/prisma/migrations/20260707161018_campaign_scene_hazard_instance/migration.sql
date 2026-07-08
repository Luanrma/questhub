-- CreateEnum
CREATE TYPE "CampaignSceneHazardVisibility" AS ENUM ('HIDDEN', 'HINTED', 'REVEALED');

-- CreateEnum
CREATE TYPE "CampaignSceneHazardState" AS ENUM ('ARMED', 'TRIGGERED', 'DISABLED', 'EXPIRED');

-- CreateTable
CREATE TABLE "CampaignSceneHazard" (
    "id" TEXT NOT NULL,
    "sceneId" TEXT NOT NULL,
    "system" "GameSystem" NOT NULL,
    "hazardEntryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "positionX" DOUBLE PRECISION NOT NULL,
    "positionY" DOUBLE PRECISION NOT NULL,
    "visibility" "CampaignSceneHazardVisibility" NOT NULL DEFAULT 'HIDDEN',
    "state" "CampaignSceneHazardState" NOT NULL DEFAULT 'ARMED',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignSceneHazard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CampaignSceneHazard_sceneId_idx" ON "CampaignSceneHazard"("sceneId");

-- CreateIndex
CREATE INDEX "CampaignSceneHazard_system_hazardEntryId_idx" ON "CampaignSceneHazard"("system", "hazardEntryId");

-- AddForeignKey
ALTER TABLE "CampaignSceneHazard" ADD CONSTRAINT "CampaignSceneHazard_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE CASCADE ON UPDATE CASCADE;
