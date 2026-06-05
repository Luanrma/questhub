-- CreateEnum
CREATE TYPE "CampaignJoinPolicy" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "CampaignMemberStatus" AS ENUM ('PENDING', 'ACTIVE', 'REJECTED');

-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "joinPolicy" "CampaignJoinPolicy" NOT NULL DEFAULT 'PUBLIC';

-- AlterTable
ALTER TABLE "CampaignMember" ADD COLUMN     "status" "CampaignMemberStatus" NOT NULL DEFAULT 'ACTIVE',
ADD COLUMN     "decidedAt" TIMESTAMP(3);

-- Data migration: map old active flag (if exists) to status
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_name='CampaignMember' AND column_name='active'
  ) THEN
    -- Active=true => ACTIVE, Active=false => REJECTED (mantém histórico)
    EXECUTE 'UPDATE "CampaignMember" SET "status" = (CASE WHEN "active" THEN ''ACTIVE'' ELSE ''REJECTED'' END)::"CampaignMemberStatus"';
    EXECUTE 'ALTER TABLE "CampaignMember" DROP COLUMN "active"';
  END IF;
END $$;
