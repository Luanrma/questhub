import { Prisma, type CampaignAreaTemplate } from '@prisma/client'
import { z } from 'zod'
import {
  createAreaTemplateSchema,
  type AreaTemplateInput,
} from '../area-effect/validation'

export const AREA_EFFECT_TOOL_KEY = 'VTT_AREA_EFFECT'
export const AREA_EFFECT_TOOL_BINDING_CATEGORY = '__QUESTHUB_TOOL_BINDING__'
export const CHARACTER_SHEET_ENTRY_SOURCE_NAMESPACE = 'questhub:character-sheet-entry'
export const TOKEN_ACTION_SOURCE_NAMESPACE = 'questhub:vtt:token-action'

export const toolBindingSourceSchema = z.object({
  kind: z.enum(['CATALOG_CONTENT', 'CHARACTER_SHEET_ENTRY', 'TOKEN_ACTION']),
  namespace: z.string().trim().min(1).max(160),
  id: z.string().trim().min(1).max(240),
}).strict()

export type ToolBindingSource = z.infer<typeof toolBindingSourceSchema>

const optionalDistanceSchema = z.number().finite().positive().max(100_000).optional()

function normalizeBindingTemplate(value: unknown) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return value
  const template = value as Record<string, unknown>
  const normalizedName = typeof template.name === 'string'
    ? template.name.trim().slice(0, 60)
    : template.name

  if (template.shape === 'ORTHOGONAL') {
    return {
      ...template,
      name: normalizedName,
      originMode: 'GRID_CELL',
      placementMode: 'POINT',
    }
  }

  return {
    ...template,
    name: normalizedName,
  }
}

const bindingTemplateSchema = z.preprocess(
  normalizeBindingTemplate,
  createAreaTemplateSchema,
)

export const areaEffectToolBindingConfigurationSchema = z.object({
  template: bindingTemplateSchema,
  minimumTargets: z.number().int().min(0).max(100).optional(),
  maximumDistance: optionalDistanceSchema,
  maximumOriginDistance: optionalDistanceSchema,
}).strict()

export type AreaEffectToolBindingConfiguration = z.infer<
  typeof areaEffectToolBindingConfigurationSchema
>

const metadataSchema = z.object({
  schemaVersion: z.literal(1),
  toolKey: z.literal(AREA_EFFECT_TOOL_KEY),
  source: toolBindingSourceSchema,
  minimumTargets: z.number().int().min(0).max(100).optional(),
  maximumDistance: optionalDistanceSchema,
  maximumOriginDistance: optionalDistanceSchema,
}).strict()

export type AreaEffectToolBindingMetadata = z.infer<typeof metadataSchema>

function json(value: unknown): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue
}

function optionalJson(value: unknown): Prisma.InputJsonValue | typeof Prisma.JsonNull {
  return value === undefined ? Prisma.JsonNull : json(value)
}

export function toolBindingMetadata(input: {
  source: ToolBindingSource
  configuration: AreaEffectToolBindingConfiguration
}): AreaEffectToolBindingMetadata {
  return {
    schemaVersion: 1,
    toolKey: AREA_EFFECT_TOOL_KEY,
    source: input.source,
    ...(input.configuration.minimumTargets !== undefined
      ? { minimumTargets: input.configuration.minimumTargets }
      : {}),
    ...(input.configuration.maximumDistance !== undefined
      ? { maximumDistance: input.configuration.maximumDistance }
      : {}),
    ...(input.configuration.maximumOriginDistance !== undefined
      ? { maximumOriginDistance: input.configuration.maximumOriginDistance }
      : {}),
  }
}

export function serializeToolBindingMetadata(metadata: AreaEffectToolBindingMetadata) {
  return JSON.stringify(metadata)
}

export function parseToolBindingMetadata(template: Pick<CampaignAreaTemplate, 'category' | 'description'>) {
  if (template.category !== AREA_EFFECT_TOOL_BINDING_CATEGORY || !template.description) return null
  try {
    const parsed = metadataSchema.safeParse(JSON.parse(template.description))
    return parsed.success ? parsed.data : null
  } catch {
    return null
  }
}

export function isAreaEffectToolBindingTemplate(
  template: Pick<CampaignAreaTemplate, 'category' | 'description'>,
) {
  return parseToolBindingMetadata(template) !== null
}

export function storedAreaTemplateInput(template: CampaignAreaTemplate): AreaTemplateInput | null {
  const parsed = createAreaTemplateSchema.safeParse({
    name: template.name,
    tags: [],
    shape: template.shape,
    volumeShape: template.volumeShape,
    dimensions: template.dimensions,
    measurementMode: template.measurementMode,
    measurementUnit: template.measurementUnit ?? undefined,
    originMode: template.originMode,
    placementMode: template.placementMode,
    propagationMode: template.propagationMode,
    persistenceMode: template.persistenceMode,
    movementMode: template.movementMode,
    cellInclusionRule: template.cellInclusionRule,
    tokenIntersectionRule: template.tokenIntersectionRule,
    includesOrigin: template.includesOrigin,
    stopAtFirstObstacle: template.stopAtFirstObstacle,
    duration: template.duration ?? undefined,
    style: template.style,
    visibility: template.visibility,
  })
  return parsed.success ? parsed.data : null
}

export function presentAreaEffectToolBinding(template: CampaignAreaTemplate) {
  const metadata = parseToolBindingMetadata(template)
  const storedTemplate = storedAreaTemplateInput(template)
  if (!metadata || !storedTemplate) return null

  return {
    id: template.id,
    toolKey: metadata.toolKey,
    source: metadata.source,
    schemaVersion: metadata.schemaVersion,
    configuration: {
      template: storedTemplate,
      ...(metadata.minimumTargets !== undefined
        ? { minimumTargets: metadata.minimumTargets }
        : {}),
      ...(metadata.maximumDistance !== undefined
        ? { maximumDistance: metadata.maximumDistance }
        : {}),
      ...(metadata.maximumOriginDistance !== undefined
        ? { maximumOriginDistance: metadata.maximumOriginDistance }
        : {}),
    },
    updatedAt: template.updatedAt,
  }
}

export function areaEffectToolBindingTemplateData(input: {
  name: string
  source: ToolBindingSource
  configuration: AreaEffectToolBindingConfiguration
}) {
  const template = input.configuration.template
  const metadata = toolBindingMetadata({
    source: input.source,
    configuration: input.configuration,
  })

  return {
    name: input.name.trim().slice(0, 60),
    description: serializeToolBindingMetadata(metadata),
    category: AREA_EFFECT_TOOL_BINDING_CATEGORY,
    tags: json([`tool:${AREA_EFFECT_TOOL_KEY}`]),
    iconAssetId: null,
    shape: template.shape,
    volumeShape: template.volumeShape,
    dimensions: json(template.dimensions),
    measurementMode: template.measurementMode,
    measurementUnit: template.measurementUnit ?? null,
    originMode: template.originMode,
    placementMode: template.placementMode,
    propagationMode: template.propagationMode,
    persistenceMode: template.persistenceMode,
    movementMode: template.movementMode,
    cellInclusionRule: template.cellInclusionRule,
    tokenIntersectionRule: template.tokenIntersectionRule,
    includesOrigin: template.includesOrigin,
    stopAtFirstObstacle: template.stopAtFirstObstacle,
    duration: optionalJson(template.duration),
    style: json(template.style),
    visibility: template.visibility,
  }
}

export function sameToolBindingSource(
  left: ToolBindingSource,
  right: ToolBindingSource,
) {
  return left.kind === right.kind
    && left.namespace === right.namespace
    && left.id === right.id
}
