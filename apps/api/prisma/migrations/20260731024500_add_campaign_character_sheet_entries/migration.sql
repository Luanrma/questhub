CREATE TABLE "CampaignCharacterSheetEntry" (
  "id" TEXT NOT NULL,
  "characterSheetId" TEXT NOT NULL,
  "namespace" TEXT NOT NULL,
  "typeKey" TEXT NOT NULL,
  "catalogNamespace" TEXT,
  "catalogContentId" TEXT,
  "schemaVersion" INTEGER NOT NULL DEFAULT 1,
  "data" JSONB NOT NULL,
  "state" JSONB,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CampaignCharacterSheetEntry_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CampaignCharacterSheetEntry_schemaVersion_positive" CHECK ("schemaVersion" > 0),
  CONSTRAINT "CampaignCharacterSheetEntry_sortOrder_non_negative" CHECK ("sortOrder" >= 0),
  CONSTRAINT "CampaignCharacterSheetEntry_catalog_reference_complete" CHECK (("catalogNamespace" IS NULL) = ("catalogContentId" IS NULL))
);

CREATE UNIQUE INDEX "CampaignCharacterSheetEntry_identity_key"
  ON "CampaignCharacterSheetEntry"(
    "characterSheetId",
    "namespace",
    "typeKey",
    "catalogNamespace",
    "catalogContentId"
  );

CREATE INDEX "CampaignCharacterSheetEntry_sheet_type_order_idx"
  ON "CampaignCharacterSheetEntry"(
    "characterSheetId",
    "namespace",
    "typeKey",
    "sortOrder",
    "createdAt"
  );

CREATE INDEX "CampaignCharacterSheetEntry_catalog_reference_idx"
  ON "CampaignCharacterSheetEntry"("catalogNamespace", "catalogContentId");

ALTER TABLE "CampaignCharacterSheetEntry"
  ADD CONSTRAINT "CampaignCharacterSheetEntry_characterSheetId_fkey"
  FOREIGN KEY ("characterSheetId") REFERENCES "CampaignCharacterSheet"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
