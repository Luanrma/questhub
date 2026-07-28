ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_actorId_fkey";
ALTER TABLE "ChatMessage" ALTER COLUMN "actorId" DROP NOT NULL;
ALTER TABLE "ChatMessage"
  ADD CONSTRAINT "ChatMessage_actorId_fkey"
  FOREIGN KEY ("actorId") REFERENCES "CampaignActor"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;
