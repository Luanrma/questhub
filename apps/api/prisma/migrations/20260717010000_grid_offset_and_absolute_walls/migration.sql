ALTER TABLE "CampaignScene"
ADD COLUMN "gridOffsetX" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "gridOffsetY" INTEGER NOT NULL DEFAULT 0;

UPDATE "CampaignScene"
SET "walls" = COALESCE(
  (
    SELECT jsonb_agg(
      jsonb_set(
        jsonb_set(
          jsonb_set(
            jsonb_set(
              wall,
              '{start,x}',
              to_jsonb(((wall #>> '{start,x}')::double precision * "CampaignScene"."gridSize"))
            ),
            '{start,y}',
            to_jsonb(((wall #>> '{start,y}')::double precision * "CampaignScene"."gridSize"))
          ),
          '{end,x}',
          to_jsonb(((wall #>> '{end,x}')::double precision * "CampaignScene"."gridSize"))
        ),
        '{end,y}',
        to_jsonb(((wall #>> '{end,y}')::double precision * "CampaignScene"."gridSize"))
      )
    )
    FROM jsonb_array_elements("CampaignScene"."walls") AS wall
  ),
  '[]'::jsonb
);
