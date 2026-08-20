BEGIN;

INSERT INTO "User" ("id", "email", "passwordHash") VALUES
  ('user-1', 'user1@test.local', 'hash'),
  ('user-2', 'user2@test.local', 'hash'),
  ('user-3', 'user3@test.local', 'hash');

INSERT INTO "Campaign" ("id", "title", "inviteCode", "gameSystem", "createdByUserId", "updatedAt") VALUES
  ('campaign-1', 'Campaign 1', 'TESTC001', 'PATHFINDER_2E', 'user-1', CURRENT_TIMESTAMP),
  ('campaign-2', 'Campaign 2', 'TESTC002', 'PATHFINDER_2E', 'user-2', CURRENT_TIMESTAMP);

INSERT INTO "CampaignMember" ("id", "campaignId", "userId", "role", "status", "joinedAt", "updatedAt") VALUES
  ('member-1', 'campaign-1', 'user-1', 'MASTER', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('member-2', 'campaign-2', 'user-2', 'MASTER', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('member-3', 'campaign-1', 'user-3', 'PLAYER', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO "CampaignScene" ("id", "campaignId", "name", "order", "updatedAt") VALUES
  ('scene-1', 'campaign-1', 'Scene 1', 1, CURRENT_TIMESTAMP),
  ('scene-2', 'campaign-2', 'Scene 2', 1, CURRENT_TIMESTAMP);

INSERT INTO "CampaignActor" ("id", "campaignId", "controllerMemberId", "name", "updatedAt") VALUES
  ('actor-1', 'campaign-1', 'member-1', 'Actor 1', CURRENT_TIMESTAMP),
  ('actor-2', 'campaign-2', 'member-2', 'Actor 2', CURRENT_TIMESTAMP),
  ('actor-3', 'campaign-1', 'member-3', 'Actor 3', CURRENT_TIMESTAMP);

INSERT INTO "Inventory" ("id", "actorId", "updatedAt") VALUES
  ('inventory-1', 'actor-1', CURRENT_TIMESTAMP),
  ('inventory-2', 'actor-2', CURRENT_TIMESTAMP),
  ('inventory-3', 'actor-3', CURRENT_TIMESTAMP);

INSERT INTO "CampaignToken" ("id", "campaignId", "name", "updatedAt") VALUES
  ('token-1', 'campaign-1', 'Token 1', CURRENT_TIMESTAMP),
  ('token-2', 'campaign-2', 'Token 2', CURRENT_TIMESTAMP);

DO $$
BEGIN
  BEGIN
    INSERT INTO "CampaignActor" ("id", "campaignId", "controllerMemberId", "name", "updatedAt")
    VALUES ('actor-cross-controller', 'campaign-1', 'member-2', 'Invalid', CURRENT_TIMESTAMP);
    RAISE EXCEPTION 'Expected cross-campaign actor controller rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    UPDATE "CampaignActor"
    SET "campaignId" = 'campaign-2'
    WHERE "id" = 'actor-1';
    RAISE EXCEPTION 'Expected immutable campaignId rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    UPDATE "CampaignActor"
    SET "archivedAt" = CURRENT_TIMESTAMP,
        "controllerMemberId" = 'member-1'
    WHERE "id" = 'actor-1';
    RAISE EXCEPTION 'Expected archived actor controller rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    UPDATE "CampaignToken"
    SET "actorId" = 'actor-2'
    WHERE "id" = 'token-1';
    RAISE EXCEPTION 'Expected cross-campaign token actor rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

UPDATE "CampaignToken"
SET "actorId" = 'actor-1',
    "controllerMemberId" = 'member-1'
WHERE "id" = 'token-1';

DO $$
BEGIN
  IF (SELECT "controllerMemberId" FROM "CampaignToken" WHERE "id" = 'token-1') IS NOT NULL THEN
    RAISE EXCEPTION 'Token linked to an actor retained a direct controller';
  END IF;
END;
$$;

DO $$
BEGIN
  BEGIN
    INSERT INTO "CampaignTokenPlacement" (
      "id", "tokenId", "sceneId", "positionX", "positionY", "updatedAt"
    ) VALUES (
      'placement-cross', 'token-1', 'scene-2', 0, 0, CURRENT_TIMESTAMP
    );
    RAISE EXCEPTION 'Expected cross-campaign token placement rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    INSERT INTO "CampaignFogExploration" (
      "id", "sceneId", "tokenId", "updatedAt"
    ) VALUES (
      'fog-cross', 'scene-2', 'token-1', CURRENT_TIMESTAMP
    );
    RAISE EXCEPTION 'Expected cross-campaign fog exploration rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    INSERT INTO "CampaignSceneViewState" (
      "id", "campaignId", "masterActiveSceneId", "updatedAt"
    ) VALUES (
      'view-cross', 'campaign-1', 'scene-2', CURRENT_TIMESTAMP
    );
    RAISE EXCEPTION 'Expected cross-campaign scene view rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    INSERT INTO "SceneAreaEffect" (
      "id", "campaignId", "sceneId", "createdByUserId",
      "sourceTokenId", "originX", "originY", "configurationSnapshot"
    ) VALUES (
      'effect-cross', 'campaign-1', 'scene-1', 'user-1',
      'token-2', 0, 0, '{}'
    );
    RAISE EXCEPTION 'Expected cross-campaign area effect rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    INSERT INTO "CampaignActor" ("id", "campaignId", "name", "updatedAt")
    VALUES ('actor-without-inventory', 'campaign-1', 'Invalid', CURRENT_TIMESTAMP);
    SET CONSTRAINTS "CampaignActor_inventory_required" IMMEDIATE;
    RAISE EXCEPTION 'Expected actor without inventory rejection';
  EXCEPTION WHEN check_violation THEN
    SET CONSTRAINTS "CampaignActor_inventory_required" DEFERRED;
  END;
END;
$$;

INSERT INTO "InventoryEntry" (
  "id", "inventoryId", "quantity", "slotIndex", "data", "state", "updatedAt"
) VALUES (
  'equipped-item-valid',
  'inventory-1',
  1,
  NULL,
  '{"name":"Longsword"}',
  '{"equipment":{"systemKey":"PATHFINDER_2E","carryMode":"HELD"}}',
  CURRENT_TIMESTAMP
);

DO $$
BEGIN
  BEGIN
    INSERT INTO "InventoryEntry" (
      "id", "inventoryId", "quantity", "slotIndex", "data", "state", "updatedAt"
    ) VALUES (
      'inventory-negative-slot',
      'inventory-1',
      1,
      -1,
      '{"name":"Invalid"}',
      NULL,
      CURRENT_TIMESTAMP
    );
    RAISE EXCEPTION 'Expected negative inventory slot rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    INSERT INTO "InventoryEntry" (
      "id", "inventoryId", "quantity", "slotIndex", "data", "state", "updatedAt"
    ) VALUES (
      'equipped-item-stack',
      'inventory-1',
      2,
      NULL,
      '{"name":"Longsword"}',
      '{"equipment":{"systemKey":"PATHFINDER_2E","carryMode":"HELD"}}',
      CURRENT_TIMESTAMP
    );
    RAISE EXCEPTION 'Expected stateful inventory quantity rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

INSERT INTO "CampaignActor" ("id", "campaignId", "name", "updatedAt")
VALUES ('actor-effects', 'campaign-1', 'Effects Actor', CURRENT_TIMESTAMP);

INSERT INTO "Inventory" ("id", "actorId", "updatedAt")
VALUES ('inventory-effects', 'actor-effects', CURRENT_TIMESTAMP);

INSERT INTO "CampaignActorEffect" (
  "id", "actorId", "namespace", "definitionKey", "name", "polarity",
  "category", "displayValue", "schemaVersion", "payload", "origin", "updatedAt"
) VALUES
  (
    'actor-effect-1', 'actor-effects', 'test:system', 'same-definition', 'Effect One', 'BENEFICIAL',
    'test-category', '1', 1, '{"opaque":true}', '{"source":"test"}', CURRENT_TIMESTAMP
  ),
  (
    'actor-effect-2', 'actor-effects', 'test:system', 'same-definition', 'Effect Two', 'HARMFUL',
    'test-category', '2', 1, '{"opaque":true}', '{"source":"test"}', CURRENT_TIMESTAMP
  );

DO $$
BEGIN
  IF (SELECT COUNT(*) FROM "CampaignActorEffect" WHERE "actorId" = 'actor-effects') <> 2 THEN
    RAISE EXCEPTION 'Expected duplicate effect definitions to coexist on the same actor';
  END IF;
END;
$$;

DO $$
BEGIN
  BEGIN
    INSERT INTO "CampaignActorEffect" (
      "id", "actorId", "namespace", "name", "polarity", "schemaVersion", "updatedAt"
    ) VALUES (
      'actor-effect-invalid-version', 'actor-effects', 'test:system', 'Invalid Version', 'NEUTRAL', 0, CURRENT_TIMESTAMP
    );
    RAISE EXCEPTION 'Expected non-positive actor effect schemaVersion rejection';
  EXCEPTION WHEN check_violation THEN
    NULL;
  END;
END;
$$;

DO $$
BEGIN
  BEGIN
    INSERT INTO "CampaignActorEffect" (
      "id", "actorId", "namespace", "name", "polarity", "updatedAt"
    ) VALUES (
      'actor-effect-orphan', 'missing-actor', 'test:system', 'Orphan', 'NEUTRAL', CURRENT_TIMESTAMP
    );
    RAISE EXCEPTION 'Expected orphan actor effect rejection';
  EXCEPTION WHEN foreign_key_violation THEN
    NULL;
  END;
END;
$$;

UPDATE "CampaignActor"
SET "archivedAt" = CURRENT_TIMESTAMP
WHERE "id" = 'actor-effects';

DO $$
BEGIN
  IF (SELECT COUNT(*) FROM "CampaignActorEffect" WHERE "actorId" = 'actor-effects') <> 2 THEN
    RAISE EXCEPTION 'Archiving an actor unexpectedly removed or changed its active effects';
  END IF;
END;
$$;

DELETE FROM "CampaignActor" WHERE "id" = 'actor-effects';

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM "CampaignActorEffect" WHERE "actorId" = 'actor-effects') THEN
    RAISE EXCEPTION 'Deleting an actor did not cascade-delete its active effects';
  END IF;
END;
$$;

INSERT INTO "ChatMessage" (
  "id", "campaignId", "actorId", "userId", "authorName", "authorRole",
  "actorNameSnapshot", "actorAvatarUrlSnapshot", "content"
) VALUES (
  'chat-1', 'campaign-1', 'actor-3', 'user-3', 'Actor 3', 'PLAYER',
  'Actor 3', 'avatar-3', 'Message preserved after deletion'
);

DELETE FROM "User" WHERE "id" = 'user-3';
DELETE FROM "CampaignActor" WHERE "id" = 'actor-3';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM "ChatMessage"
    WHERE "id" = 'chat-1'
      AND "userId" IS NULL
      AND "actorId" IS NULL
      AND "authorName" = 'Actor 3'
      AND "actorNameSnapshot" = 'Actor 3'
      AND "actorAvatarUrlSnapshot" = 'avatar-3'
  ) THEN
    RAISE EXCEPTION 'Chat authorship snapshot was not preserved';
  END IF;
END;
$$;

ROLLBACK;
