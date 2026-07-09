-- Generalize catalog item sources and wallet currency defaults without mutating the original inventory migration.
ALTER TYPE "ItemDefinitionSource" RENAME TO "ItemDefinitionSource_old";

CREATE TYPE "ItemDefinitionSource" AS ENUM ('CUSTOM', 'SYSTEM_CATALOG', 'IMPORTED');

ALTER TABLE "CampaignItemDefinition"
  ALTER COLUMN "source" DROP DEFAULT;

ALTER TABLE "CampaignItemDefinition"
  ALTER COLUMN "source" TYPE "ItemDefinitionSource"
  USING (
    CASE "source"::text
      WHEN 'PF2E_COMPENDIUM' THEN 'SYSTEM_CATALOG'
      ELSE "source"::text
    END
  )::"ItemDefinitionSource";

ALTER TABLE "CampaignItemDefinition"
  ALTER COLUMN "source" SET DEFAULT 'CUSTOM';

DROP TYPE "ItemDefinitionSource_old";

ALTER TABLE "Wallet"
  ALTER COLUMN "currencySystem" SET DEFAULT 'CAMPAIGN_SYSTEM';
