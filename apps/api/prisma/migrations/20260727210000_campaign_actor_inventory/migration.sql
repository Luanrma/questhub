CREATE TABLE "CampaignActor" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "bio" TEXT,
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
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryEntry_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "InventoryEntry_quantity_check" CHECK ("quantity" > 0)
);

CREATE INDEX "CampaignActor_campaignId_createdAt_idx"
    ON "CampaignActor"("campaignId", "createdAt");

CREATE UNIQUE INDEX "Inventory_actorId_key"
    ON "Inventory"("actorId");

CREATE INDEX "InventoryEntry_inventoryId_createdAt_idx"
    ON "InventoryEntry"("inventoryId", "createdAt");

ALTER TABLE "CampaignActor"
    ADD CONSTRAINT "CampaignActor_campaignId_fkey"
    FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Inventory"
    ADD CONSTRAINT "Inventory_actorId_fkey"
    FOREIGN KEY ("actorId") REFERENCES "CampaignActor"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "InventoryEntry"
    ADD CONSTRAINT "InventoryEntry_inventoryId_fkey"
    FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
