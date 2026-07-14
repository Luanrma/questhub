-- CreateTable
CREATE TABLE "CharacterSpellbook" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "system" "GameSystem" NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "revision" INTEGER NOT NULL DEFAULT 1,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterSpellbook_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSpellbook_characterId_key" ON "CharacterSpellbook"("characterId");

-- CreateIndex
CREATE INDEX "CharacterSpellbook_characterId_idx" ON "CharacterSpellbook"("characterId");

-- AddForeignKey
ALTER TABLE "CharacterSpellbook" ADD CONSTRAINT "CharacterSpellbook_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
