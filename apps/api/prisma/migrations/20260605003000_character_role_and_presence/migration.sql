-- Character role aligned with spec: MASTER / PLAYER / NPC

-- CreateEnum
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'CharacterRole') THEN
    CREATE TYPE "CharacterRole" AS ENUM ('MASTER', 'PLAYER', 'NPC');
  END IF;
END $$;

-- AlterTable: Character
ALTER TABLE "Character" ADD COLUMN IF NOT EXISTS "role_new" "CharacterRole" NOT NULL DEFAULT 'PLAYER';

-- Data migration from old columns (if they exist)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Character' AND column_name='type')
     AND EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Character' AND column_name='role') THEN
    EXECUTE '
      UPDATE "Character"
      SET "role_new" =
        CASE
          WHEN "type" = ''NPC'' THEN ''NPC''
          WHEN "role" = ''GM'' THEN ''MASTER''
          ELSE ''PLAYER''
        END::"CharacterRole"
    ';
  ELSIF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Character' AND column_name='role') THEN
    -- fallback: GM -> MASTER, else PLAYER
    EXECUTE '
      UPDATE "Character"
      SET "role_new" =
        CASE
          WHEN "role" = ''GM'' THEN ''MASTER''
          ELSE ''PLAYER''
        END::"CharacterRole"
    ';
  END IF;
END $$;

-- Drop old columns and rename new
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Character' AND column_name='type') THEN
    EXECUTE 'ALTER TABLE "Character" DROP COLUMN "type"';
  END IF;
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='Character' AND column_name='role') THEN
    EXECUTE 'ALTER TABLE "Character" DROP COLUMN "role"';
  END IF;
  EXECUTE 'ALTER TABLE "Character" RENAME COLUMN "role_new" TO "role"';
END $$;

-- CampaignMember: drop old role column if exists
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='CampaignMember' AND column_name='role') THEN
    EXECUTE 'ALTER TABLE "CampaignMember" DROP COLUMN "role"';
  END IF;
END $$;

-- Drop old enums if unused
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'CampaignRole') THEN
    BEGIN
      DROP TYPE "CampaignRole";
    EXCEPTION WHEN dependent_objects_still_exist THEN
      -- ignore
    END;
  END IF;
  IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'CharacterType') THEN
    BEGIN
      DROP TYPE "CharacterType";
    EXCEPTION WHEN dependent_objects_still_exist THEN
      -- ignore
    END;
  END IF;
END $$;
