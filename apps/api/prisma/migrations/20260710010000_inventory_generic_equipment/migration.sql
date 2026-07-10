-- Replace slot/exclusive-slot persistence with generic equipment option and resource locks.
ALTER TABLE "EquippedItem"
  ADD COLUMN "equipmentOptionKey" TEXT,
  ADD COLUMN "resourceLocks" JSONB,
  ADD COLUMN "systemData" JSONB;

UPDATE "EquippedItem"
SET
  "equipmentOptionKey" = "slot",
  "resourceLocks" = CASE
    WHEN "exclusiveSlotKey" IS NULL THEN '[]'::jsonb
    ELSE jsonb_build_array(jsonb_build_object('resource', 'equipment:' || "exclusiveSlotKey", 'amount', 1, 'exclusive', true))
  END,
  "systemData" = jsonb_build_object('legacySlot', "slot", 'legacyExclusiveSlotKey', "exclusiveSlotKey");

ALTER TABLE "EquippedItem"
  ALTER COLUMN "equipmentOptionKey" SET NOT NULL,
  ALTER COLUMN "resourceLocks" SET NOT NULL;

DROP INDEX "EquippedItem_campaignCharacterId_exclusiveSlotKey_key";
DROP INDEX "EquippedItem_slot_idx";

ALTER TABLE "EquippedItem"
  DROP COLUMN "slot",
  DROP COLUMN "exclusiveSlotKey";

CREATE INDEX "EquippedItem_equipmentOptionKey_idx" ON "EquippedItem"("equipmentOptionKey");
