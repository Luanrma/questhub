ALTER TABLE "InventoryEntry"
  ADD COLUMN "slotIndex" INTEGER,
  ADD COLUMN "catalogContentId" TEXT;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM "InventoryEntry"
    GROUP BY "inventoryId"
    HAVING COUNT(*) > 256
  ) THEN
    RAISE EXCEPTION 'Inventory exceeds the 256 slot grid capacity';
  END IF;
END $$;

WITH ranked_entries AS (
  SELECT
    "id",
    ROW_NUMBER() OVER (
      PARTITION BY "inventoryId"
      ORDER BY "createdAt", "id"
    ) - 1 AS "nextSlotIndex"
  FROM "InventoryEntry"
)
UPDATE "InventoryEntry" AS entry
SET "slotIndex" = ranked_entries."nextSlotIndex"
FROM ranked_entries
WHERE entry."id" = ranked_entries."id";

ALTER TABLE "InventoryEntry"
  ALTER COLUMN "slotIndex" SET NOT NULL,
  ADD CONSTRAINT "InventoryEntry_slotIndex_range"
    CHECK ("slotIndex" >= 0 AND "slotIndex" < 256);

ALTER TABLE "InventoryEntry"
  ADD CONSTRAINT "InventoryEntry_inventoryId_slotIndex_key"
  UNIQUE ("inventoryId", "slotIndex")
  DEFERRABLE INITIALLY DEFERRED;

CREATE INDEX "InventoryEntry_catalogContentId_idx"
  ON "InventoryEntry"("catalogContentId");
