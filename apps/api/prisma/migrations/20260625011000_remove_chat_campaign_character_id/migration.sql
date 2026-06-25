DROP INDEX IF EXISTS "ChatMessage_campaignCharacterId_idx";

ALTER TABLE "ChatMessage" DROP CONSTRAINT IF EXISTS "ChatMessage_campaignCharacterId_fkey";

ALTER TABLE "ChatMessage" DROP COLUMN IF EXISTS "campaignCharacterId";
