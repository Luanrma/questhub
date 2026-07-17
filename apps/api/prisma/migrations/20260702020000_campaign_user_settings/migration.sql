CREATE TABLE "CampaignUserSettings" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "settings" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaignUserSettings_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CampaignUserSettings_campaignId_userId_key" ON "CampaignUserSettings"("campaignId", "userId");
CREATE INDEX "CampaignUserSettings_userId_idx" ON "CampaignUserSettings"("userId");

ALTER TABLE "CampaignUserSettings"
ADD CONSTRAINT "CampaignUserSettings_campaignId_fkey"
FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "CampaignUserSettings"
ADD CONSTRAINT "CampaignUserSettings_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
