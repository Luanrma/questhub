CREATE TYPE "GameSystem" AS ENUM ('PATHFINDER_2E');

ALTER TABLE "Campaign"
ADD COLUMN "gameSystem" "GameSystem" NOT NULL DEFAULT 'PATHFINDER_2E';

ALTER TABLE "Character"
ADD COLUMN "gameSystem" "GameSystem" NOT NULL DEFAULT 'PATHFINDER_2E';

CREATE INDEX "Character_gameSystem_idx" ON "Character"("gameSystem");

CREATE OR REPLACE FUNCTION "questhub_validate_campaign_character_game_system"()
RETURNS TRIGGER AS $$
DECLARE
  campaign_system "GameSystem";
  character_system "GameSystem";
BEGIN
  SELECT "gameSystem" INTO campaign_system
  FROM "Campaign"
  WHERE "id" = NEW."campaignId";

  SELECT "gameSystem" INTO character_system
  FROM "Character"
  WHERE "id" = NEW."characterId";

  IF campaign_system IS NULL OR character_system IS NULL THEN
    RAISE EXCEPTION 'Campaign or character not found while validating game system';
  END IF;

  IF campaign_system <> character_system THEN
    RAISE EXCEPTION 'Character game system (%) does not match campaign game system (%)', character_system, campaign_system;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "CampaignCharacter_gameSystem_guard"
BEFORE INSERT OR UPDATE OF "campaignId", "characterId"
ON "CampaignCharacter"
FOR EACH ROW
EXECUTE FUNCTION "questhub_validate_campaign_character_game_system"();

CREATE OR REPLACE FUNCTION "questhub_prevent_linked_game_system_change"()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW."gameSystem" = OLD."gameSystem" THEN
    RETURN NEW;
  END IF;

  IF TG_TABLE_NAME = 'Campaign' AND EXISTS (
    SELECT 1 FROM "CampaignCharacter" WHERE "campaignId" = OLD."id"
  ) THEN
    RAISE EXCEPTION 'Game system cannot be changed after characters are linked to the campaign';
  END IF;

  IF TG_TABLE_NAME = 'Character' AND EXISTS (
    SELECT 1 FROM "CampaignCharacter" WHERE "characterId" = OLD."id"
  ) THEN
    RAISE EXCEPTION 'Game system cannot be changed after the character is linked to a campaign';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "Campaign_gameSystem_immutable_when_linked"
BEFORE UPDATE OF "gameSystem"
ON "Campaign"
FOR EACH ROW
EXECUTE FUNCTION "questhub_prevent_linked_game_system_change"();

CREATE TRIGGER "Character_gameSystem_immutable_when_linked"
BEFORE UPDATE OF "gameSystem"
ON "Character"
FOR EACH ROW
EXECUTE FUNCTION "questhub_prevent_linked_game_system_change"();
