UPDATE "CampaignAreaTemplate"
SET "shape" = 'LINE'
WHERE "shape" = 'RECTANGLE';

UPDATE "SceneAreaEffect"
SET "configurationSnapshot" = jsonb_set("configurationSnapshot", '{shape}', '"LINE"'::jsonb)
WHERE "configurationSnapshot"->>'shape' = 'RECTANGLE';
