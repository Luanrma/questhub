ALTER TABLE "InventoryEntry"
  ADD COLUMN "state" JSONB;

ALTER TABLE "InventoryEntry"
  ADD CONSTRAINT "InventoryEntry_state_quantity_check"
  CHECK ("state" IS NULL OR "quantity" = 1);
