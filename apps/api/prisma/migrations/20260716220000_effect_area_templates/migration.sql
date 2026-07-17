CREATE TABLE "CampaignAreaTemplate" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "createdByUserId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "tags" JSONB NOT NULL DEFAULT '[]',
    "iconAssetId" TEXT,
    "shape" TEXT NOT NULL,
    "volumeShape" TEXT NOT NULL,
    "dimensions" JSONB NOT NULL,
    "measurementMode" TEXT NOT NULL,
    "measurementUnit" TEXT,
    "originMode" TEXT NOT NULL,
    "placementMode" TEXT NOT NULL,
    "propagationMode" TEXT NOT NULL,
    "persistenceMode" TEXT NOT NULL,
    "movementMode" TEXT NOT NULL,
    "cellInclusionRule" TEXT NOT NULL,
    "tokenIntersectionRule" TEXT NOT NULL,
    "includesOrigin" BOOLEAN NOT NULL DEFAULT true,
    "stopAtFirstObstacle" BOOLEAN NOT NULL DEFAULT false,
    "duration" JSONB,
    "style" JSONB NOT NULL,
    "visibility" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "CampaignAreaTemplate_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "SceneAreaEffect" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "sceneId" TEXT NOT NULL,
    "templateId" TEXT,
    "createdByUserId" TEXT NOT NULL,
    "sourceTokenId" TEXT,
    "targetTokenId" TEXT,
    "originX" DOUBLE PRECISION NOT NULL,
    "originY" DOUBLE PRECISION NOT NULL,
    "originElevation" DOUBLE PRECISION,
    "rotationDegrees" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "scale" DOUBLE PRECISION NOT NULL DEFAULT 1,
    "configurationSnapshot" JSONB NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    CONSTRAINT "SceneAreaEffect_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "CampaignAreaTemplate_campaignId_name_idx" ON "CampaignAreaTemplate"("campaignId", "name");
CREATE INDEX "CampaignAreaTemplate_createdByUserId_idx" ON "CampaignAreaTemplate"("createdByUserId");
CREATE INDEX "SceneAreaEffect_campaignId_sceneId_state_idx" ON "SceneAreaEffect"("campaignId", "sceneId", "state");
CREATE INDEX "SceneAreaEffect_templateId_idx" ON "SceneAreaEffect"("templateId");
CREATE INDEX "SceneAreaEffect_createdByUserId_idx" ON "SceneAreaEffect"("createdByUserId");

ALTER TABLE "CampaignAreaTemplate" ADD CONSTRAINT "CampaignAreaTemplate_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "CampaignAreaTemplate" ADD CONSTRAINT "CampaignAreaTemplate_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "SceneAreaEffect" ADD CONSTRAINT "SceneAreaEffect_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SceneAreaEffect" ADD CONSTRAINT "SceneAreaEffect_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "CampaignScene"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "SceneAreaEffect" ADD CONSTRAINT "SceneAreaEffect_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "CampaignAreaTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "SceneAreaEffect" ADD CONSTRAINT "SceneAreaEffect_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
