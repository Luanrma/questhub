-- CreateEnum
CREATE TYPE "CampaignSceneHazardScope" AS ENUM ('POINT', 'AREA', 'SCENE', 'TARGET');

-- CreateEnum
CREATE TYPE "CampaignSceneHazardTriggerMode" AS ENUM ('MANUAL', 'ON_TOKEN_ENTER', 'ALWAYS_ON');

-- CreateEnum
CREATE TYPE "CampaignSceneHazardExecutionMode" AS ENUM ('INSTANT', 'ONGOING', 'ENCOUNTER_PARTICIPANT');

-- AlterEnum
ALTER TYPE "CampaignSceneHazardState" ADD VALUE 'ACTIVE';

-- AlterTable
ALTER TABLE "CampaignSceneHazard" ADD COLUMN     "area" JSONB,
ADD COLUMN     "executionMode" "CampaignSceneHazardExecutionMode" NOT NULL DEFAULT 'INSTANT',
ADD COLUMN     "scope" "CampaignSceneHazardScope" NOT NULL DEFAULT 'POINT',
ADD COLUMN     "targetCharacterId" TEXT,
ADD COLUMN     "targetTokenId" TEXT,
ADD COLUMN     "triggerMode" "CampaignSceneHazardTriggerMode" NOT NULL DEFAULT 'MANUAL',
ALTER COLUMN "positionX" DROP NOT NULL,
ALTER COLUMN "positionY" DROP NOT NULL;
