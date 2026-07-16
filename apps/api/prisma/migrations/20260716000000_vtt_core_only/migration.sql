-- Characters are VTT identities, not system-specific sheets.
ALTER TABLE "Character" ADD COLUMN IF NOT EXISTS "bio" TEXT;

ALTER TABLE "Campaign" DROP COLUMN IF EXISTS "system";
ALTER TABLE "Character" DROP COLUMN IF EXISTS "system", DROP COLUMN IF EXISTS "sheet";

DROP TYPE IF EXISTS "GameSystem";
