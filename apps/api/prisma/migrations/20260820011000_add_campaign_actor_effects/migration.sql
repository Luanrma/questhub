CREATE TYPE "CampaignActorEffectPolarity" AS ENUM ('BENEFICIAL', 'HARMFUL', 'NEUTRAL');

CREATE TABLE "CampaignActorEffect" (
  "id" TEXT NOT NULL,
  "actorId" TEXT NOT NULL,
  "namespace" TEXT NOT NULL,
  "definitionKey" TEXT,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "iconUrl" TEXT,
  "polarity" "CampaignActorEffectPolarity" NOT NULL,
  "category" TEXT,
  "displayValue" TEXT,
  "schemaVersion" INTEGER NOT NULL DEFAULT 1,
  "payload" JSONB,
  "origin" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "CampaignActorEffect_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "CampaignActorEffect_schemaVersion_positive" CHECK ("schemaVersion" >= 1)
);

CREATE INDEX "CampaignActorEffect_actor_created_idx"
ON "CampaignActorEffect"("actorId", "createdAt");

CREATE INDEX "CampaignActorEffect_definition_idx"
ON "CampaignActorEffect"("namespace", "definitionKey");

ALTER TABLE "CampaignActorEffect"
ADD CONSTRAINT "CampaignActorEffect_actorId_fkey"
FOREIGN KEY ("actorId") REFERENCES "CampaignActor"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
