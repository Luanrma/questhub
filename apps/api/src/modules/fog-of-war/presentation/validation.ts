import { z } from 'zod'

export const fogSceneParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
  sceneId: z.string().trim().min(1),
})

export const fogTokenParamsSchema = z.object({
  campaignId: z.string().trim().min(1),
  tokenId: z.string().trim().min(1),
})

export const fogExplorationParamsSchema = fogSceneParamsSchema.extend({
  tokenId: z.string().trim().min(1),
})

export const configureSceneFogSchema = z.object({
  fogConfig: z.unknown(),
  fixedLightSources: z.unknown().default([]),
})

export const configureTokenVisionSchema = z.object({ visionConfig: z.unknown() })
export const configureTokenLightSchema = z.object({ lightConfig: z.unknown() })
export const configurePlacementOcclusionSchema = z.object({ blocksVisionAndLight: z.boolean() })
export const toggleFogLightSchema = z.object({ enabled: z.boolean() })

export const fogExplorationSyncSchema = z.object({
  campaignId: z.string().trim().min(1),
  sceneId: z.string().trim().min(1),
  tokenId: z.string().trim().min(1),
  revision: z.number().int().min(0),
  width: z.number().int().min(1).max(1024),
  height: z.number().int().min(1).max(1024),
  mask: z.custom<Uint8Array>((value) => value instanceof Uint8Array),
})

export const fogExplorationHttpSyncSchema = fogExplorationSyncSchema.omit({ campaignId: true, sceneId: true, tokenId: true, mask: true }).extend({
  maskBase64: z.string().max(2_000_000),
})

export const fogExplorationResetSchema = z.object({
  campaignId: z.string().trim().min(1),
  sceneId: z.string().trim().min(1),
  tokenId: z.string().trim().min(1).optional(),
})

export const fogSceneConfigureSocketSchema = z.object({
  campaignId: z.string().trim().min(1),
  sceneId: z.string().trim().min(1),
  fogConfig: z.unknown(),
  fixedLightSources: z.unknown().default([]),
})

export const fogTokenVisionSocketSchema = z.object({
  campaignId: z.string().trim().min(1),
  tokenId: z.string().trim().min(1),
  visionConfig: z.unknown(),
})

export const fogLightToggleSocketSchema = z.object({
  campaignId: z.string().trim().min(1),
  tokenId: z.string().trim().min(1),
  enabled: z.boolean(),
})
