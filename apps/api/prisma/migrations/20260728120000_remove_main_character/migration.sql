UPDATE "CampaignActor"
SET "controllerMemberId" = "CampaignMember"."id"
FROM "CampaignMember"
WHERE "CampaignMember"."actorId" = "CampaignActor"."id"
  AND "CampaignActor"."controllerMemberId" IS NULL;

DELETE FROM "CampaignActor"
USING "CampaignMember"
WHERE "CampaignMember"."actorId" = "CampaignActor"."id"
  AND NOT EXISTS (
    SELECT 1 FROM "CampaignCharacterSheet"
    WHERE "CampaignCharacterSheet"."actorId" = "CampaignActor"."id"
  )
  AND NOT EXISTS (
    SELECT 1 FROM "CampaignToken"
    WHERE "CampaignToken"."actorId" = "CampaignActor"."id"
  )
  AND NOT EXISTS (
    SELECT 1 FROM "ChatMessage"
    WHERE "ChatMessage"."actorId" = "CampaignActor"."id"
  )
  AND NOT EXISTS (
    SELECT 1
    FROM "Inventory"
    JOIN "InventoryEntry" ON "InventoryEntry"."inventoryId" = "Inventory"."id"
    WHERE "Inventory"."actorId" = "CampaignActor"."id"
  );

ALTER TABLE "CampaignMember" DROP CONSTRAINT "CampaignMember_actorId_fkey";
DROP INDEX "CampaignMember_actorId_key";
ALTER TABLE "CampaignMember" DROP COLUMN "actorId";
