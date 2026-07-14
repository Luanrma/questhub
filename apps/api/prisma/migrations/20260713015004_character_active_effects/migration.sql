-- CreateTable
CREATE TABLE "CharacterActiveEffects" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "system" "GameSystem" NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "revision" INTEGER NOT NULL DEFAULT 1,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterActiveEffects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterActiveEffects_characterId_key" ON "CharacterActiveEffects"("characterId");

-- CreateIndex
CREATE INDEX "CharacterActiveEffects_characterId_idx" ON "CharacterActiveEffects"("characterId");

-- AddForeignKey
ALTER TABLE "CharacterActiveEffects" ADD CONSTRAINT "CharacterActiveEffects_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
