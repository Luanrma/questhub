-- Token identity belongs to the campaign; placement belongs to a scene.
CREATE TYPE "CampaignTokenLayer" AS ENUM ('OBJECT', 'TOKEN', 'OVERLAY');

CREATE TABLE "CampaignMember" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignMember_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignToken" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "characterId" TEXT,
    "controllerMemberId" TEXT,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "color" TEXT,
    "size" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "canCustomizeAppearance" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignToken_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CampaignTokenPlacement" (
    "id" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,
    "sceneId" TEXT NOT NULL,
    "hidden" BOOLEAN NOT NULL DEFAULT false,
    "positionX" DOUBLE PRECISION NOT NULL,
    "positionY" DOUBLE PRECISION NOT NULL,
    "rotation" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "layer" "CampaignTokenLayer" NOT NULL DEFAULT 'TOKEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignTokenPlacement_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CampaignMember_campaignId_userId_key" ON "CampaignMember"("campaignId", "userId");
CREATE INDEX "CampaignMember_campaignId_idx" ON "CampaignMember"("campaignId");
CREATE INDEX "CampaignMember_userId_idx" ON "CampaignMember"("userId");
CREATE UNIQUE INDEX "CampaignToken_characterId_key" ON "CampaignToken"("characterId");
CREATE INDEX "CampaignToken_campaignId_idx" ON "CampaignToken"("campaignId");
CREATE INDEX "CampaignToken_controllerMemberId_idx" ON "CampaignToken"("controllerMemberId");
CREATE UNIQUE INDEX "CampaignTokenPlacement_tokenId_key" ON "CampaignTokenPlacement"("tokenId");
CREATE INDEX "CampaignTokenPlacement_sceneId_idx" ON "CampaignTokenPlacement"("sceneId");

ALTER TABLE "CampaignMember" ADD CONSTRAINT "CampaignMember_campaignId_fkey"
    FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignMember" ADD CONSTRAINT "CampaignMember_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_campaignId_fkey"
    FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_characterId_fkey"
    FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignToken" ADD CONSTRAINT "CampaignToken_controllerMemberId_fkey"
    FOREIGN KEY ("controllerMemberId") REFERENCES "CampaignMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CampaignTokenPlacement" ADD CONSTRAINT "CampaignTokenPlacement_tokenId_fkey"
    FOREIGN KEY ("tokenId") REFERENCES "CampaignToken"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignTokenPlacement" ADD CONSTRAINT "CampaignTokenPlacement_sceneId_fkey"
    FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Preserve current campaign participation and existing positioned tokens.
INSERT INTO "CampaignMember" ("id", "campaignId", "userId", "createdAt", "updatedAt")
SELECT
    'member_' || md5(cc."campaignId" || ':' || cc."userId"),
    cc."campaignId",
    cc."userId",
    MIN(cc."createdAt"),
    MAX(cc."updatedAt")
FROM "CampaignCharacter" cc
GROUP BY cc."campaignId", cc."userId";

INSERT INTO "CampaignToken" (
    "id", "campaignId", "characterId", "controllerMemberId", "name", "avatarUrl",
    "createdAt", "updatedAt"
)
SELECT
    old."id",
    scene."campaignId",
    old."characterId",
    CASE WHEN cc."role" = 'PLAYER'
        THEN 'member_' || md5(scene."campaignId" || ':' || cc."userId")
        ELSE NULL
    END,
    character."name",
    character."avatarUrl",
    old."createdAt",
    old."updatedAt"
FROM "CampaignSceneToken" old
JOIN "CampaignScene" scene ON scene."id" = old."sceneId"
JOIN "Character" character ON character."id" = old."characterId"
LEFT JOIN "CampaignCharacter" cc
    ON cc."campaignId" = scene."campaignId"
    AND cc."characterId" = old."characterId"
    AND cc."status" = 'ACTIVE';

INSERT INTO "CampaignTokenPlacement" (
    "id", "tokenId", "sceneId", "hidden", "positionX", "positionY",
    "rotation", "layer", "createdAt", "updatedAt"
)
SELECT
    old."id",
    old."id",
    old."sceneId",
    old."hidden",
    old."positionX",
    old."positionY",
    0,
    'TOKEN'::"CampaignTokenLayer",
    old."createdAt",
    old."updatedAt"
FROM "CampaignSceneToken" old;

DROP TABLE "CampaignSceneToken";
