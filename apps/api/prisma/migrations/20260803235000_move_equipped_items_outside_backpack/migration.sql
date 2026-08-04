ALTER TABLE "InventoryEntry"
DROP CONSTRAINT IF EXISTS "InventoryEntry_slotIndex_non_negative";

WITH equipped_entries AS (
  SELECT
    "id",
    -ROW_NUMBER() OVER (
      PARTITION BY "inventoryId"
      ORDER BY "slotIndex", "createdAt", "id"
    )::INTEGER AS "equippedSlotIndex"
  FROM "InventoryEntry"
  WHERE "slotIndex" >= 0
    AND "state" -> 'equipment' ->> 'systemKey' = 'PATHFINDER_2E'
    AND "state" -> 'equipment' ->> 'carryMode' IN ('HELD', 'WORN')
)
UPDATE "InventoryEntry" AS entry
SET "slotIndex" = equipped_entries."equippedSlotIndex"
FROM equipped_entries
WHERE entry."id" = equipped_entries."id";
