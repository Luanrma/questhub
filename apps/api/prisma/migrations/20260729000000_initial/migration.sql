-- Fresh local-development baseline for the current QuestHub schema.

CREATE TYPE "CampaignJoinPolicy" AS ENUM ('PUBLIC', 'PRIVATE');
CREATE TYPE "GameSystem" AS ENUM ('PATHFINDER_2E');
CREATE TYPE "CampaignMemberStatus" AS ENUM ('PENDING', 'ACTIVE', 'REJECTED', 'LEFT');
CREATE TYPE "CampaignMemberRole" AS ENUM ('MASTER', 'PLAYER');
CREATE TYPE "CampaignSceneGridShape" AS ENUM ('SQUARE', 'HEX');
CREATE TYPE "CampaignTokenLayer" AS ENUM ('OBJECT', 'TOKEN', 'OVERLAY');

CREATE TABLE "User" (
  "id" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Campaign" (
  "id" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "inviteCode" TEXT NOT NULL,
  "joinPolicy" "CampaignJoinPolicy" NOT NULL DEFAULT 'PUBLIC',
  "gameSystem" "GameSystem" NOT NULL,
  "createdByUserId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignMember" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "role" "CampaignMemberRole" NOT NULL,
  "status" "CampaignMemberStatus" NOT NULL DEFAULT 'PENDING',
  "joinedAt" TIMESTAMP(3),
  "leftAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignMember_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignActor" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "controllerMemberId" TEXT,
  "name" TEXT NOT NULL,
  "avatarUrl" TEXT,
  "bio" TEXT,
  "archivedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignActor_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Inventory" (
  "id" TEXT NOT NULL,
  "actorId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "InventoryEntry" (
  "id" TEXT NOT NULL,
  "inventoryId" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL DEFAULT 1,
  "slotIndex" INTEGER NOT NULL,
  "catalogNamespace" TEXT,
  "catalogContentId" TEXT,
  "data" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "InventoryEntry_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "InventoryEntry_quantity_positive" CHECK ("quantity" > 0),
  CONSTRAINT "InventoryEntry_slotIndex_non_negative" CHECK ("slotIndex" >= 0),
  CONSTRAINT "InventoryEntry_catalog_reference_complete" CHECK (("catalogNamespace" IS NULL) = ("catalogContentId" IS NULL))
);

CREATE TABLE "CampaignCharacterSheet" (
  "id" TEXT NOT NULL,
  "actorId" TEXT NOT NULL,
  "createdByUserId" TEXT NOT NULL,
  "systemKey" TEXT NOT NULL,
  "schemaVersion" INTEGER NOT NULL DEFAULT 1,
  "data" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignCharacterSheet_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ChatMessage" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "actorId" TEXT,
  "userId" TEXT,
  "authorName" TEXT NOT NULL,
  "authorRole" "CampaignMemberRole" NOT NULL,
  "actorNameSnapshot" TEXT,
  "actorAvatarUrlSnapshot" TEXT,
  "content" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Asset" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "storagePath" TEXT NOT NULL,
  "originalName" TEXT NOT NULL,
  "mimeType" TEXT NOT NULL,
  "size" INTEGER NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignAsset" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "assetId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignAsset_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignScene" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  "assetId" TEXT,
  "backgroundUrl" TEXT,
  "backgroundCacheKey" TEXT,
  "gridVisible" BOOLEAN NOT NULL DEFAULT true,
  "gridShape" "CampaignSceneGridShape" NOT NULL DEFAULT 'SQUARE',
  "gridSize" INTEGER NOT NULL DEFAULT 32,
  "gridOffsetX" INTEGER NOT NULL DEFAULT 0,
  "gridOffsetY" INTEGER NOT NULL DEFAULT 0,
  "metersPerCell" DOUBLE PRECISION NOT NULL DEFAULT 1,
  "squareMeasurementColor" TEXT NOT NULL DEFAULT '#facc15',
  "hexMeasurementColor" TEXT NOT NULL DEFAULT '#38bdf8',
  "gridLineWidth" INTEGER NOT NULL DEFAULT 1,
  "gridColor" TEXT NOT NULL DEFAULT '#ffffff',
  "walls" JSONB NOT NULL DEFAULT '[]',
  "fogConfig" JSONB NOT NULL DEFAULT '{}',
  "fixedLightSources" JSONB NOT NULL DEFAULT '[]',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignScene_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignAreaTemplate" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "createdByUserId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "category" TEXT,
  "tags" JSONB NOT NULL DEFAULT '[]',
  "iconAssetId" TEXT,
  "shape" TEXT NOT NULL,
  "volumeShape" TEXT NOT NULL,
  "dimensions" JSONB NOT NULL,
  "measurementMode" TEXT NOT NULL,
  "measurementUnit" TEXT,
  "originMode" TEXT NOT NULL,
  "placementMode" TEXT NOT NULL,
  "propagationMode" TEXT NOT NULL,
  "persistenceMode" TEXT NOT NULL,
  "movementMode" TEXT NOT NULL,
  "cellInclusionRule" TEXT NOT NULL,
  "tokenIntersectionRule" TEXT NOT NULL,
  "includesOrigin" BOOLEAN NOT NULL DEFAULT true,
  "stopAtFirstObstacle" BOOLEAN NOT NULL DEFAULT false,
  "duration" JSONB,
  "style" JSONB NOT NULL,
  "visibility" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignAreaTemplate_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignToken" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "actorId" TEXT,
  "controllerMemberId" TEXT,
  "name" TEXT NOT NULL,
  "avatarUrl" TEXT,
  "color" TEXT,
  "size" DOUBLE PRECISION NOT NULL DEFAULT 1,
  "canCustomizeAppearance" BOOLEAN NOT NULL DEFAULT false,
  "visionConfig" JSONB NOT NULL DEFAULT '{}',
  "lightConfig" JSONB NOT NULL DEFAULT '{}',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignToken_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CampaignToken_single_controller_source" CHECK ("actorId" IS NULL OR "controllerMemberId" IS NULL)
);

CREATE TABLE "CampaignTokenPlacement" (
  "id" TEXT NOT NULL,
  "tokenId" TEXT NOT NULL,
  "sceneId" TEXT NOT NULL,
  "hidden" BOOLEAN NOT NULL DEFAULT false,
  "positionX" DOUBLE PRECISION NOT NULL,
  "positionY" DOUBLE PRECISION NOT NULL,
  "rotation" DOUBLE PRECISION NOT NULL DEFAULT 0,
  "layer" "CampaignTokenLayer" NOT NULL DEFAULT 'TOKEN',
  "blocksVisionAndLight" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignTokenPlacement_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignFogExploration" (
  "id" TEXT NOT NULL,
  "sceneId" TEXT NOT NULL,
  "tokenId" TEXT NOT NULL,
  "revision" INTEGER NOT NULL DEFAULT 0,
  "mask" BYTEA,
  "maskWidth" INTEGER NOT NULL DEFAULT 0,
  "maskHeight" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignFogExploration_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignSceneViewState" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "masterActiveSceneId" TEXT,
  "forcedSceneId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignSceneViewState_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SceneAreaEffect" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "sceneId" TEXT NOT NULL,
  "templateId" TEXT,
  "createdByUserId" TEXT NOT NULL,
  "sourceTokenId" TEXT,
  "targetTokenId" TEXT,
  "originX" DOUBLE PRECISION NOT NULL,
  "originY" DOUBLE PRECISION NOT NULL,
  "originElevation" DOUBLE PRECISION,
  "rotationDegrees" DOUBLE PRECISION NOT NULL DEFAULT 0,
  "scale" DOUBLE PRECISION NOT NULL DEFAULT 1,
  "configurationSnapshot" JSONB NOT NULL,
  "state" TEXT NOT NULL DEFAULT 'ACTIVE',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "expiresAt" TIMESTAMP(3),
  CONSTRAINT "SceneAreaEffect_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignDiary" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "content" TEXT NOT NULL DEFAULT '',
  "createdById" TEXT NOT NULL,
  "lastEditedBy" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignDiary_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignUserSettings" (
  "id" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "settings" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignUserSettings_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "Campaign_inviteCode_key" ON "Campaign"("inviteCode");
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
CREATE UNIQUE INDEX "Asset_storagePath_key" ON "Asset"("storagePath");
CREATE INDEX "Asset_userId_idx" ON "Asset"("userId");
CREATE UNIQUE INDEX "CampaignAsset_campaignId_assetId_key" ON "CampaignAsset"("campaignId", "assetId");
CREATE INDEX "CampaignAsset_campaignId_idx" ON "CampaignAsset"("campaignId");
CREATE INDEX "CampaignAsset_assetId_idx" ON "CampaignAsset"("assetId");
CREATE UNIQUE INDEX "CampaignScene_campaignId_order_key" ON "CampaignScene"("campaignId", "order");
CREATE INDEX "CampaignScene_campaignId_idx" ON "CampaignScene"("campaignId");
CREATE INDEX "CampaignScene_assetId_idx" ON "CampaignScene"("assetId");
CREATE INDEX "CampaignAreaTemplate_campaignId_name_idx" ON "CampaignAreaTemplate"("campaignId", "name");
CREATE INDEX "CampaignAreaTemplate_createdByUserId_idx" ON "CampaignAreaTemplate"("createdByUserId");
CREATE UNIQUE INDEX "CampaignToken_actorId_key" ON "CampaignToken"("actorId");
CREATE INDEX "CampaignToken_campaignId_idx" ON "CampaignToken"("campaignId");
CREATE INDEX "CampaignToken_controllerMemberId_idx" ON "CampaignToken"("controllerMemberId");
CREATE UNIQUE INDEX "CampaignTokenPlacement_tokenId_key" ON "CampaignTokenPlacement"("tokenId");
CREATE INDEX "CampaignTokenPlacement_sceneId_idx" ON "CampaignTokenPlacement"("sceneId");
CREATE UNIQUE INDEX "CampaignFogExploration_sceneId_tokenId_key" ON "CampaignFogExploration"("sceneId", "tokenId");
CREATE INDEX "CampaignFogExploration_tokenId_idx" ON "CampaignFogExploration"("tokenId");
CREATE UNIQUE INDEX "CampaignSceneViewState_campaignId_key" ON "CampaignSceneViewState"("campaignId");
CREATE INDEX "CampaignSceneViewState_masterActiveSceneId_idx" ON "CampaignSceneViewState"("masterActiveSceneId");
CREATE INDEX "CampaignSceneViewState_forcedSceneId_idx" ON "CampaignSceneViewState"("forcedSceneId");
CREATE INDEX "SceneAreaEffect_campaignId_sceneId_state_idx" ON "SceneAreaEffect"("campaignId", "sceneId", "state");
CREATE INDEX "SceneAreaEffect_templateId_idx" ON "SceneAreaEffect"("templateId");
CREATE INDEX "SceneAreaEffect_createdByUserId_idx" ON "SceneAreaEffect"("createdByUserId");
CREATE INDEX "CampaignDiary_campaignId_idx" ON "CampaignDiary"("campaignId");
CREATE INDEX "CampaignDiary_createdById_idx" ON "CampaignDiary"("createdById");
CREATE UNIQUE INDEX "CampaignUserSettings_campaignId_userId_key" ON "CampaignUserSettings"("campaignId", "userId");
CREATE INDEX "CampaignUserSettings_userId_idx" ON "CampaignUserSettings"("userId");

ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
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
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "CampaignAsset" ADD CONSTRAINT "CampaignAsset_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "CampaignAsset" ADD CONSTRAINT "CampaignAsset_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignScene" ADD CONSTRAINT "CampaignScene_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignScene" ADD CONSTRAINT "CampaignScene_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignAreaTemplate" ADD CONSTRAINT "CampaignAreaTemplate_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignAreaTemplate" ADD CONSTRAINT "CampaignAreaTemplate_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "CampaignActor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_controllerMemberId_fkey" FOREIGN KEY ("controllerMemberId") REFERENCES "CampaignMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignTokenPlacement" ADD CONSTRAINT "CampaignTokenPlacement_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "CampaignToken"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignTokenPlacement" ADD CONSTRAINT "CampaignTokenPlacement_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignFogExploration" ADD CONSTRAINT "CampaignFogExploration_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignFogExploration" ADD CONSTRAINT "CampaignFogExploration_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "CampaignToken"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignSceneViewState" ADD CONSTRAINT "CampaignSceneViewState_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignSceneViewState" ADD CONSTRAINT "CampaignSceneViewState_masterActiveSceneId_fkey" FOREIGN KEY ("masterActiveSceneId") REFERENCES "CampaignScene"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignSceneViewState" ADD CONSTRAINT "CampaignSceneViewState_forcedSceneId_fkey" FOREIGN KEY ("forcedSceneId") REFERENCES "CampaignScene"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "SceneAreaEffect" ADD CONSTRAINT "SceneAreaEffect_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SceneAreaEffect" ADD CONSTRAINT "SceneAreaEffect_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SceneAreaEffect" ADD CONSTRAINT "SceneAreaEffect_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "CampaignAreaTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "SceneAreaEffect" ADD CONSTRAINT "SceneAreaEffect_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "CampaignDiary" ADD CONSTRAINT "CampaignDiary_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignDiary" ADD CONSTRAINT "CampaignDiary_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "CampaignUserSettings" ADD CONSTRAINT "CampaignUserSettings_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignUserSettings" ADD CONSTRAINT "CampaignUserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE FUNCTION assert_campaign_id_immutable() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW."campaignId" IS DISTINCT FROM OLD."campaignId" THEN
    RAISE EXCEPTION 'campaignId is immutable for campaign-scoped records' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER "CampaignMember_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignMember" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "CampaignActor_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignActor" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "ChatMessage_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "ChatMessage" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "CampaignAsset_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignAsset" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "CampaignScene_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignScene" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "CampaignAreaTemplate_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignAreaTemplate" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "CampaignToken_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignToken" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "CampaignSceneViewState_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignSceneViewState" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "SceneAreaEffect_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "SceneAreaEffect" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "CampaignDiary_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignDiary" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();
CREATE TRIGGER "CampaignUserSettings_campaign_immutable" BEFORE UPDATE OF "campaignId" ON "CampaignUserSettings" FOR EACH ROW EXECUTE FUNCTION assert_campaign_id_immutable();

CREATE FUNCTION assert_campaign_actor_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW."archivedAt" IS NOT NULL AND NEW."controllerMemberId" IS NOT NULL THEN
    RAISE EXCEPTION 'Archived CampaignActor cannot have a controller' USING ERRCODE = '23514';
  END IF;
  IF NEW."controllerMemberId" IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM "CampaignMember"
    WHERE "id" = NEW."controllerMemberId" AND "campaignId" = NEW."campaignId"
  ) THEN
    RAISE EXCEPTION 'CampaignActor controller must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "CampaignActor_same_campaign_controller" BEFORE INSERT OR UPDATE OF "controllerMemberId", "archivedAt" ON "CampaignActor" FOR EACH ROW EXECUTE FUNCTION assert_campaign_actor_scope();

CREATE FUNCTION assert_campaign_token_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW."actorId" IS NOT NULL THEN
    NEW."controllerMemberId" := NULL;
    IF NOT EXISTS (
      SELECT 1 FROM "CampaignActor"
      WHERE "id" = NEW."actorId" AND "campaignId" = NEW."campaignId" AND "archivedAt" IS NULL
    ) THEN
      RAISE EXCEPTION 'CampaignToken actor must be active and belong to the same campaign' USING ERRCODE = '23514';
    END IF;
  END IF;
  IF NEW."controllerMemberId" IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM "CampaignMember"
    WHERE "id" = NEW."controllerMemberId" AND "campaignId" = NEW."campaignId"
  ) THEN
    RAISE EXCEPTION 'CampaignToken controller must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "CampaignToken_same_campaign_links" BEFORE INSERT OR UPDATE OF "actorId", "controllerMemberId" ON "CampaignToken" FOR EACH ROW EXECUTE FUNCTION assert_campaign_token_scope();

CREATE FUNCTION assert_chat_message_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW."actorId" IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM "CampaignActor"
    WHERE "id" = NEW."actorId" AND "campaignId" = NEW."campaignId" AND "archivedAt" IS NULL
  ) THEN
    RAISE EXCEPTION 'ChatMessage actor must be active and belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "ChatMessage_same_campaign_actor" BEFORE INSERT OR UPDATE OF "actorId" ON "ChatMessage" FOR EACH ROW EXECUTE FUNCTION assert_chat_message_scope();

CREATE FUNCTION assert_token_placement_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
DECLARE token_campaign TEXT; scene_campaign TEXT;
BEGIN
  SELECT "campaignId" INTO token_campaign FROM "CampaignToken" WHERE "id" = NEW."tokenId";
  SELECT "campaignId" INTO scene_campaign FROM "CampaignScene" WHERE "id" = NEW."sceneId";
  IF token_campaign IS NULL OR scene_campaign IS NULL OR token_campaign <> scene_campaign THEN
    RAISE EXCEPTION 'CampaignTokenPlacement token and scene must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "CampaignTokenPlacement_same_campaign" BEFORE INSERT OR UPDATE OF "tokenId", "sceneId" ON "CampaignTokenPlacement" FOR EACH ROW EXECUTE FUNCTION assert_token_placement_scope();

CREATE FUNCTION assert_fog_exploration_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
DECLARE token_campaign TEXT; scene_campaign TEXT;
BEGIN
  SELECT "campaignId" INTO token_campaign FROM "CampaignToken" WHERE "id" = NEW."tokenId";
  SELECT "campaignId" INTO scene_campaign FROM "CampaignScene" WHERE "id" = NEW."sceneId";
  IF token_campaign IS NULL OR scene_campaign IS NULL OR token_campaign <> scene_campaign THEN
    RAISE EXCEPTION 'CampaignFogExploration token and scene must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "CampaignFogExploration_same_campaign" BEFORE INSERT OR UPDATE OF "tokenId", "sceneId" ON "CampaignFogExploration" FOR EACH ROW EXECUTE FUNCTION assert_fog_exploration_scope();

CREATE FUNCTION assert_scene_view_state_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NEW."masterActiveSceneId" IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM "CampaignScene" WHERE "id" = NEW."masterActiveSceneId" AND "campaignId" = NEW."campaignId"
  ) THEN
    RAISE EXCEPTION 'Master active scene must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  IF NEW."forcedSceneId" IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM "CampaignScene" WHERE "id" = NEW."forcedSceneId" AND "campaignId" = NEW."campaignId"
  ) THEN
    RAISE EXCEPTION 'Forced scene must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "CampaignSceneViewState_same_campaign" BEFORE INSERT OR UPDATE OF "masterActiveSceneId", "forcedSceneId" ON "CampaignSceneViewState" FOR EACH ROW EXECUTE FUNCTION assert_scene_view_state_scope();

CREATE FUNCTION assert_area_effect_scope() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM "CampaignScene" WHERE "id" = NEW."sceneId" AND "campaignId" = NEW."campaignId") THEN
    RAISE EXCEPTION 'SceneAreaEffect scene must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  IF NEW."templateId" IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM "CampaignAreaTemplate" WHERE "id" = NEW."templateId" AND "campaignId" = NEW."campaignId"
  ) THEN
    RAISE EXCEPTION 'SceneAreaEffect template must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  IF NEW."sourceTokenId" IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM "CampaignToken" WHERE "id" = NEW."sourceTokenId" AND "campaignId" = NEW."campaignId"
  ) THEN
    RAISE EXCEPTION 'SceneAreaEffect source token must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  IF NEW."targetTokenId" IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM "CampaignToken" WHERE "id" = NEW."targetTokenId" AND "campaignId" = NEW."campaignId"
  ) THEN
    RAISE EXCEPTION 'SceneAreaEffect target token must belong to the same campaign' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER "SceneAreaEffect_same_campaign" BEFORE INSERT OR UPDATE OF "sceneId", "templateId", "sourceTokenId", "targetTokenId" ON "SceneAreaEffect" FOR EACH ROW EXECUTE FUNCTION assert_area_effect_scope();

CREATE FUNCTION assert_campaign_actor_inventory() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM "CampaignActor" WHERE "id" = NEW."id")
     AND NOT EXISTS (SELECT 1 FROM "Inventory" WHERE "actorId" = NEW."id") THEN
    RAISE EXCEPTION 'CampaignActor must be created with an Inventory' USING ERRCODE = '23514';
  END IF;
  RETURN NEW;
END;
$$;
CREATE CONSTRAINT TRIGGER "CampaignActor_inventory_required" AFTER INSERT ON "CampaignActor" DEFERRABLE INITIALLY DEFERRED FOR EACH ROW EXECUTE FUNCTION assert_campaign_actor_inventory();

CREATE FUNCTION prevent_orphaned_campaign_actor_inventory() RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM "CampaignActor" WHERE "id" = OLD."actorId")
     AND NOT EXISTS (SELECT 1 FROM "Inventory" WHERE "actorId" = OLD."actorId") THEN
    RAISE EXCEPTION 'CampaignActor cannot remain without an Inventory' USING ERRCODE = '23514';
  END IF;
  RETURN OLD;
END;
$$;
CREATE CONSTRAINT TRIGGER "Inventory_actor_required" AFTER DELETE OR UPDATE ON "Inventory" DEFERRABLE INITIALLY DEFERRED FOR EACH ROW EXECUTE FUNCTION prevent_orphaned_campaign_actor_inventory();
