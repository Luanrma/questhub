-- Development-only reset. Databases using superseded pre-release migrations must be reset.
DROP TABLE IF EXISTS "ChatMessage" CASCADE;
DROP TABLE IF EXISTS "CampaignCharacterSheet" CASCADE;
DROP TABLE IF EXISTS "CharacterSheet" CASCADE;
DROP TABLE IF EXISTS "CampaignCharacter" CASCADE;
DROP TABLE IF EXISTS "CampaignMember" CASCADE;
DROP TABLE IF EXISTS "Character" CASCADE;

ALTER TABLE "CampaignToken" DROP COLUMN IF EXISTS "characterId";
ALTER TABLE "CampaignToken" DROP COLUMN IF EXISTS "actorId";
ALTER TABLE "CampaignToken" DROP COLUMN IF EXISTS "controllerMemberId";
ALTER TABLE "CampaignToken" ADD COLUMN "actorId" TEXT;
ALTER TABLE "CampaignToken" ADD COLUMN "controllerMemberId" TEXT;

DROP TYPE IF EXISTS "CampaignCharacterStatus";
DROP TYPE IF EXISTS "CampaignCharacterRole";
DROP TYPE IF EXISTS "CampaignMemberStatus";
DROP TYPE IF EXISTS "CampaignMemberRole";
CREATE TYPE "CampaignMemberStatus" AS ENUM ('PENDING', 'ACTIVE', 'REJECTED', 'LEFT');
CREATE TYPE "CampaignMemberRole" AS ENUM ('MASTER', 'PLAYER');

CREATE TABLE "CampaignMember" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "campaignId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "role" "CampaignMemberRole" NOT NULL,
  "status" "CampaignMemberStatus" NOT NULL DEFAULT 'PENDING',
  "joinedAt" TIMESTAMP(3),
  "leftAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "CampaignActor" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "campaignId" TEXT NOT NULL,
  "controllerMemberId" TEXT,
  "name" TEXT NOT NULL,
  "avatarUrl" TEXT,
  "bio" TEXT,
  "archivedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "Inventory" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "actorId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "InventoryEntry" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "inventoryId" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL DEFAULT 1,
  "slotIndex" INTEGER NOT NULL,
  "catalogNamespace" TEXT,
  "catalogContentId" TEXT,
  "data" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "InventoryEntry_quantity_positive" CHECK ("quantity" > 0),
  CONSTRAINT "InventoryEntry_slotIndex_non_negative" CHECK ("slotIndex" >= 0),
  CONSTRAINT "InventoryEntry_catalog_reference_complete" CHECK (("catalogNamespace" IS NULL) = ("catalogContentId" IS NULL))
);

CREATE TABLE "CampaignCharacterSheet" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "actorId" TEXT NOT NULL,
  "createdByUserId" TEXT NOT NULL,
  "systemKey" TEXT NOT NULL,
  "schemaVersion" INTEGER NOT NULL DEFAULT 1,
  "data" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE TABLE "ChatMessage" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "campaignId" TEXT NOT NULL,
  "actorId" TEXT,
  "userId" TEXT,
  "authorName" TEXT NOT NULL,
  "authorRole" "CampaignMemberRole" NOT NULL,
  "actorNameSnapshot" TEXT,
  "actorAvatarUrlSnapshot" TEXT,
  "content" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "CampaignMember_campaignId_userId_key" ON "CampaignMember"("campaignId", "userId");
CREATE INDEX "CampaignMember_campaignId_idx" ON "CampaignMember"("campaignId");
CREATE INDEX "CampaignMember_userId_idx" ON "CampaignMember"("userId");
CREATE INDEX "CampaignMember_status_idx" ON "CampaignMember"("status");
CREATE INDEX "CampaignMember_role_idx" ON "CampaignMember"("role");
CREATE INDEX "CampaignActor_campaignId_archivedAt_createdAt_idx" ON "CampaignActor"("campaignId", "archivedAt", "createdAt");
CREATE INDEX "CampaignActor_controllerMemberId_idx" ON "CampaignActor"("controllerMemberId");
CREATE UNIQUE INDEX "Inventory_actorId_key" ON "Inventory"("actorId");
ALTER TABLE "InventoryEntry" ADD CONSTRAINT "InventoryEntry_inventoryId_slotIndex_key" UNIQUE ("inventoryId", "slotIndex") DEFERRABLE INITIALLY DEFERRED;
CREATE INDEX "InventoryEntry_inventoryId_createdAt_idx" ON "InventoryEntry"("inventoryId", "createdAt");
CREATE INDEX "InventoryEntry_catalogNamespace_catalogContentId_idx" ON "InventoryEntry"("catalogNamespace", "catalogContentId");
CREATE UNIQUE INDEX "CampaignCharacterSheet_actorId_key" ON "CampaignCharacterSheet"("actorId");
CREATE INDEX "CampaignCharacterSheet_systemKey_idx" ON "CampaignCharacterSheet"("systemKey");
CREATE INDEX "CampaignCharacterSheet_createdByUserId_idx" ON "CampaignCharacterSheet"("createdByUserId");
CREATE INDEX "ChatMessage_campaignId_createdAt_idx" ON "ChatMessage"("campaignId", "createdAt");
CREATE INDEX "ChatMessage_actorId_idx" ON "ChatMessage"("actorId");
CREATE INDEX "ChatMessage_userId_idx" ON "ChatMessage"("userId");
CREATE UNIQUE INDEX "CampaignToken_actorId_key" ON "CampaignToken"("actorId");

ALTER TABLE "CampaignMember" ADD CONSTRAINT "CampaignMember_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignMember" ADD CONSTRAINT "CampaignMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignActor" ADD CONSTRAINT "CampaignActor_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignActor" ADD CONSTRAINT "CampaignActor_controllerMemberId_fkey" FOREIGN KEY ("controllerMemberId") REFERENCES "CampaignMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "CampaignActor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "InventoryEntry" ADD CONSTRAINT "InventoryEntry_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignCharacterSheet" ADD CONSTRAINT "CampaignCharacterSheet_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "CampaignActor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignCharacterSheet" ADD CONSTRAINT "CampaignCharacterSheet_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "CampaignActor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "CampaignActor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_controllerMemberId_fkey" FOREIGN KEY ("controllerMemberId") REFERENCES "CampaignMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_single_controller_source" CHECK ("actorId" IS NULL OR "controllerMemberId" IS NULL);

CREATE FUNCTION assert_campaign_actor_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW."controllerMemberId" IS NOT NULL AND NOT EXISTS (SELECT 1 FROM "CampaignMember" WHERE "id" = NEW."controllerMemberId" AND "campaignId" = NEW."campaignId") THEN
    RAISE EXCEPTION 'CampaignActor controller must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "CampaignActor_same_campaign_controller" BEFORE INSERT OR UPDATE OF "campaignId", "controllerMemberId" ON "CampaignActor" FOR EACH ROW EXECUTE FUNCTION assert_campaign_actor_scope();

CREATE FUNCTION assert_campaign_token_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW."actorId" IS NOT NULL THEN
    NEW."controllerMemberId" := NULL;
    IF NOT EXISTS (SELECT 1 FROM "CampaignActor" WHERE "id" = NEW."actorId" AND "campaignId" = NEW."campaignId" AND "archivedAt" IS NULL) THEN
      RAISE EXCEPTION 'CampaignToken actor must be active and belong to the same campaign' USING ERRCODE = '23514';
    END IF;
  END IF;
  IF NEW."controllerMemberId" IS NOT NULL AND NOT EXISTS (SELECT 1 FROM "CampaignMember" WHERE "id" = NEW."controllerMemberId" AND "campaignId" = NEW."campaignId") THEN
    RAISE EXCEPTION 'CampaignToken controller must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "CampaignToken_same_campaign_links" BEFORE INSERT OR UPDATE OF "campaignId", "actorId", "controllerMemberId" ON "CampaignToken" FOR EACH ROW EXECUTE FUNCTION assert_campaign_token_scope();

CREATE FUNCTION assert_chat_message_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW."actorId" IS NOT NULL AND NOT EXISTS (SELECT 1 FROM "CampaignActor" WHERE "id" = NEW."actorId" AND "campaignId" = NEW."campaignId") THEN
    RAISE EXCEPTION 'ChatMessage actor must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "ChatMessage_same_campaign_actor" BEFORE INSERT OR UPDATE OF "campaignId", "actorId" ON "ChatMessage" FOR EACH ROW EXECUTE FUNCTION assert_chat_message_scope();

CREATE FUNCTION assert_campaign_actor_inventory() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM "CampaignActor" WHERE "id" = NEW."id") AND NOT EXISTS (SELECT 1 FROM "Inventory" WHERE "actorId" = NEW."id") THEN
    RAISE EXCEPTION 'CampaignActor must be created with an Inventory' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE CONSTRAINT TRIGGER "CampaignActor_inventory_required" AFTER INSERT ON "CampaignActor" DEFERRABLE INITIALLY DEFERRED FOR EACH ROW EXECUTE FUNCTION assert_campaign_actor_inventory();

CREATE FUNCTION prevent_orphaned_campaign_actor_inventory() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM "CampaignActor" WHERE "id" = OLD."actorId") AND NOT EXISTS (SELECT 1 FROM "Inventory" WHERE "actorId" = OLD."actorId") THEN
    RAISE EXCEPTION 'CampaignActor cannot remain without an Inventory' USING ERRCODE = '23514';
  END IF;
  RETURN OLD;
END;
$$;
CREATE CONSTRAINT TRIGGER "Inventory_actor_required" AFTER DELETE OR UPDATE ON "Inventory" DEFERRABLE INITIALLY DEFERRED FOR EACH ROW EXECUTE FUNCTION prevent_orphaned_campaign_actor_inventory();
