ALTER TABLE "InventoryEntry"
DROP CONSTRAINT IF EXISTS "InventoryEntry_slotIndex_non_negative";

ALTER TABLE "InventoryEntry"
ALTER COLUMN "slotIndex" DROP NOT NULL;

UPDATE "InventoryEntry"
SET "slotIndex" = NULL
WHERE "state" -> 'equipment' ->> 'systemKey' = 'PATHFINDER_2E'
  AND "state" -> 'equipment' ->> 'carryMode' IN ('HELD', 'WORN');

ALTER TABLE "InventoryEntry"
ADD CONSTRAINT "InventoryEntry_slotIndex_null_or_non_negative"
CHECK ("slotIndex" IS NULL OR "slotIndex" >= 0);
