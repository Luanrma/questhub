DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM "InventoryEntry"
    GROUP BY "inventoryId"
    HAVING COUNT(*) > 100
  ) THEN
    RAISE EXCEPTION 'Inventory exceeds the 100 slot grid capacity';
  END IF;
END $$;

ALTER TABLE "InventoryEntry"
  DROP CONSTRAINT "InventoryEntry_slotIndex_range";

WITH ranked_entries AS (
  SELECT
    "id",
    ROW_NUMBER() OVER (
      PARTITION BY "inventoryId"
      ORDER BY "slotIndex", "createdAt", "id"
    ) - 1 AS "nextSlotIndex"
  FROM "InventoryEntry"
)
UPDATE "InventoryEntry" AS entry
SET "slotIndex" = ranked_entries."nextSlotIndex"
FROM ranked_entries
WHERE entry."id" = ranked_entries."id";

ALTER TABLE "InventoryEntry"
  ADD CONSTRAINT "InventoryEntry_slotIndex_range"
    CHECK ("slotIndex" >= 0 AND "slotIndex" < 100);
