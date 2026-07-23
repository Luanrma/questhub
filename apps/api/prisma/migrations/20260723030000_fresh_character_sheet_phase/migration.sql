-- This phase intentionally starts the character sheet storage from zero.
-- Any CharacterSheet table created by the discarded branch is removed together
-- with its test data before the clean model is created.
DROP TABLE IF EXISTS "CharacterSheet";

CREATE TABLE "CharacterSheet" (
  "id" TEXT NOT NULL,
  "characterId" TEXT NOT NULL,
  "systemKey" TEXT NOT NULL,
  "schemaVersion" INTEGER NOT NULL DEFAULT 1,
  "data" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "CharacterSheet_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CharacterSheet_characterId_key" ON "CharacterSheet"("characterId");
CREATE INDEX "CharacterSheet_systemKey_idx" ON "CharacterSheet"("systemKey");

ALTER TABLE "CharacterSheet"
  ADD CONSTRAINT "CharacterSheet_characterId_fkey"
  FOREIGN KEY ("characterId") REFERENCES "Character"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
