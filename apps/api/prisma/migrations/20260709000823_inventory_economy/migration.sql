-- CreateEnum
CREATE TYPE "ItemDefinitionSource" AS ENUM ('CUSTOM', 'PF2E_COMPENDIUM');

-- CreateEnum
CREATE TYPE "InventoryItemState" AS ENUM ('STORED', 'EQUIPPED', 'DROPPED', 'CONSUMED', 'DESTROYED', 'TRANSFERRED');

-- CreateEnum
CREATE TYPE "InventoryLedgerType" AS ENUM ('GRANT', 'REMOVE', 'ADJUST_QUANTITY', 'TRANSFER_IN', 'TRANSFER_OUT', 'EQUIP', 'UNEQUIP', 'CONSUME', 'SPLIT_STACK', 'MERGE_STACK', 'PURCHASE', 'SALE', 'LOOT', 'REWARD', 'CORRECTION');

-- CreateEnum
CREATE TYPE "WalletLedgerType" AS ENUM ('SET_BALANCE', 'ADJUSTMENT', 'TRANSFER_IN', 'TRANSFER_OUT', 'PURCHASE', 'SALE', 'LOOT', 'REWARD', 'CORRECTION');

-- CreateTable
CREATE TABLE "CampaignItemDefinition" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "system" "GameSystem" NOT NULL,
    "source" "ItemDefinitionSource" NOT NULL DEFAULT 'CUSTOM',
    "sourcePack" TEXT,
    "sourceId" TEXT,
    "name" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "rarity" TEXT,
    "level" INTEGER,
    "traits" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "bulk" TEXT,
    "priceMinorUnit" INTEGER,
    "equipSlot" TEXT,
    "isStackable" BOOLEAN NOT NULL DEFAULT false,
    "systemData" JSONB,
    "createdByUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignItemDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "campaignCharacterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "itemDefinitionId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "state" "InventoryItemState" NOT NULL DEFAULT 'STORED',
    "customName" TEXT,
    "notes" TEXT,
    "systemData" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquippedItem" (
    "id" TEXT NOT NULL,
    "campaignCharacterId" TEXT NOT NULL,
    "inventoryItemId" TEXT NOT NULL,
    "slot" TEXT NOT NULL,
    "exclusiveSlotKey" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EquippedItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "campaignCharacterId" TEXT NOT NULL,
    "balanceMinorUnit" INTEGER NOT NULL DEFAULT 0,
    "currencySystem" TEXT NOT NULL DEFAULT 'PF2E',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryLedger" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,
    "inventoryItemId" TEXT,
    "itemDefinitionId" TEXT,
    "actorUserId" TEXT,
    "actorCharacterId" TEXT,
    "counterpartyInventoryId" TEXT,
    "operationId" TEXT,
    "type" "InventoryLedgerType" NOT NULL,
    "deltaQuantity" INTEGER,
    "before" JSONB,
    "after" JSONB,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryLedger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletLedger" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "actorUserId" TEXT,
    "actorCharacterId" TEXT,
    "counterpartyWalletId" TEXT,
    "operationId" TEXT,
    "type" "WalletLedgerType" NOT NULL,
    "deltaMinorUnit" INTEGER NOT NULL,
    "balanceBeforeMinorUnit" INTEGER NOT NULL,
    "balanceAfterMinorUnit" INTEGER NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletLedger_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CampaignItemDefinition_campaignId_idx" ON "CampaignItemDefinition"("campaignId");

-- CreateIndex
CREATE INDEX "CampaignItemDefinition_campaignId_name_idx" ON "CampaignItemDefinition"("campaignId", "name");

-- CreateIndex
CREATE INDEX "CampaignItemDefinition_campaignId_itemType_idx" ON "CampaignItemDefinition"("campaignId", "itemType");

-- CreateIndex
CREATE INDEX "CampaignItemDefinition_campaignId_source_sourcePack_sourceI_idx" ON "CampaignItemDefinition"("campaignId", "source", "sourcePack", "sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_campaignCharacterId_key" ON "Inventory"("campaignCharacterId");

-- CreateIndex
CREATE INDEX "Inventory_campaignId_idx" ON "Inventory"("campaignId");

-- CreateIndex
CREATE INDEX "Inventory_campaignCharacterId_idx" ON "Inventory"("campaignCharacterId");

-- CreateIndex
CREATE INDEX "InventoryItem_inventoryId_idx" ON "InventoryItem"("inventoryId");

-- CreateIndex
CREATE INDEX "InventoryItem_itemDefinitionId_idx" ON "InventoryItem"("itemDefinitionId");

-- CreateIndex
CREATE INDEX "InventoryItem_state_idx" ON "InventoryItem"("state");

-- CreateIndex
CREATE UNIQUE INDEX "EquippedItem_inventoryItemId_key" ON "EquippedItem"("inventoryItemId");

-- CreateIndex
CREATE INDEX "EquippedItem_campaignCharacterId_idx" ON "EquippedItem"("campaignCharacterId");

-- CreateIndex
CREATE INDEX "EquippedItem_slot_idx" ON "EquippedItem"("slot");

-- CreateIndex
CREATE UNIQUE INDEX "EquippedItem_campaignCharacterId_exclusiveSlotKey_key" ON "EquippedItem"("campaignCharacterId", "exclusiveSlotKey");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_campaignCharacterId_key" ON "Wallet"("campaignCharacterId");

-- CreateIndex
CREATE INDEX "Wallet_campaignId_idx" ON "Wallet"("campaignId");

-- CreateIndex
CREATE INDEX "Wallet_campaignCharacterId_idx" ON "Wallet"("campaignCharacterId");

-- CreateIndex
CREATE INDEX "InventoryLedger_campaignId_createdAt_idx" ON "InventoryLedger"("campaignId", "createdAt");

-- CreateIndex
CREATE INDEX "InventoryLedger_inventoryId_createdAt_idx" ON "InventoryLedger"("inventoryId", "createdAt");

-- CreateIndex
CREATE INDEX "InventoryLedger_inventoryItemId_idx" ON "InventoryLedger"("inventoryItemId");

-- CreateIndex
CREATE INDEX "InventoryLedger_operationId_idx" ON "InventoryLedger"("operationId");

-- CreateIndex
CREATE INDEX "WalletLedger_campaignId_createdAt_idx" ON "WalletLedger"("campaignId", "createdAt");

-- CreateIndex
CREATE INDEX "WalletLedger_walletId_createdAt_idx" ON "WalletLedger"("walletId", "createdAt");

-- CreateIndex
CREATE INDEX "WalletLedger_operationId_idx" ON "WalletLedger"("operationId");

-- AddForeignKey
ALTER TABLE "CampaignItemDefinition" ADD CONSTRAINT "CampaignItemDefinition_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_campaignCharacterId_fkey" FOREIGN KEY ("campaignCharacterId") REFERENCES "CampaignCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_itemDefinitionId_fkey" FOREIGN KEY ("itemDefinitionId") REFERENCES "CampaignItemDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquippedItem" ADD CONSTRAINT "EquippedItem_campaignCharacterId_fkey" FOREIGN KEY ("campaignCharacterId") REFERENCES "CampaignCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EquippedItem" ADD CONSTRAINT "EquippedItem_inventoryItemId_fkey" FOREIGN KEY ("inventoryItemId") REFERENCES "InventoryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_campaignCharacterId_fkey" FOREIGN KEY ("campaignCharacterId") REFERENCES "CampaignCharacter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLedger" ADD CONSTRAINT "InventoryLedger_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryLedger" ADD CONSTRAINT "InventoryLedger_inventoryItemId_fkey" FOREIGN KEY ("inventoryItemId") REFERENCES "InventoryItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletLedger" ADD CONSTRAINT "WalletLedger_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
