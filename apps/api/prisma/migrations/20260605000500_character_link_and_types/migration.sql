-- CreateEnum
CREATE TYPE "CharacterType" AS ENUM ('PC', 'NPC');

-- AlterTable
ALTER TABLE "CampaignMember" ADD COLUMN     "characterId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "CampaignMember_characterId_key" ON "CampaignMember"("characterId");

-- AlterTable
ALTER TABLE "Character"
ADD COLUMN     "type" "CharacterType" NOT NULL DEFAULT 'PC',
ADD COLUMN     "role" "CampaignRole" NOT NULL DEFAULT 'PLAYER',
ADD COLUMN     "status" "CampaignMemberStatus" NOT NULL DEFAULT 'ACTIVE';

-- AddForeignKey
ALTER TABLE "CampaignMember" ADD CONSTRAINT "CampaignMember_characterId_fkey"
FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;
