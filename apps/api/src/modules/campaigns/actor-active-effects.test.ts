import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const prismaSchemaFile = path.join(root, 'apps', 'api', 'prisma', 'schema.prisma')
const migrationFile = path.join(
  root,
  'apps',
  'api',
  'prisma',
  'migrations',
  '20260820011000_add_campaign_actor_effects',
  'migration.sql',
)

function extractModel(source: string, modelName: string) {
  const start = source.indexOf(`model ${modelName} {`)
  assert.notEqual(start, -1, `${modelName} must exist in Prisma schema`)

  const nextModel = source.indexOf('\nmodel ', start + 1)
  return source.slice(start, nextModel === -1 ? source.length : nextModel)
}

test('CampaignActor owns generic active-effect instances independently from sheet and Token', () => {
  const prismaSource = readFileSync(prismaSchemaFile, 'utf8')
  const actorModel = extractModel(prismaSource, 'CampaignActor')
  const effectModel = extractModel(prismaSource, 'CampaignActorEffect')

  assert.match(actorModel, /activeEffects\s+CampaignActorEffect\[\]/)
  assert.match(effectModel, /actorId\s+String/)
  assert.match(
    effectModel,
    /actor\s+CampaignActor\s+@relation\(fields: \[actorId\], references: \[id\], onDelete: Cascade\)/,
  )
  assert.doesNotMatch(effectModel, /campaignId|userId|characterSheetId|tokenId/)
})

test('active-effect persistence exposes only generic visual identity and opaque system data', () => {
  const prismaSource = readFileSync(prismaSchemaFile, 'utf8')
  const effectModel = extractModel(prismaSource, 'CampaignActorEffect')

  assert.match(prismaSource, /enum CampaignActorEffectPolarity[\s\S]*BENEFICIAL[\s\S]*HARMFUL[\s\S]*NEUTRAL/)
  assert.match(effectModel, /namespace\s+String/)
  assert.match(effectModel, /definitionKey\s+String\?/)
  assert.match(effectModel, /name\s+String/)
  assert.match(effectModel, /description\s+String\?/)
  assert.match(effectModel, /iconUrl\s+String\?/)
  assert.match(effectModel, /polarity\s+CampaignActorEffectPolarity/)
  assert.match(effectModel, /category\s+String\?/)
  assert.match(effectModel, /displayValue\s+String\?/)
  assert.match(effectModel, /schemaVersion\s+Int\s+@default\(1\)/)
  assert.match(effectModel, /payload\s+Json\?/)
  assert.match(effectModel, /origin\s+Json\?/)

  assert.doesNotMatch(effectModel, /PATHFINDER|PF2E|Frightened|Sickened|Slowed|HitPoints|ArmorClass/i)
})

test('Core does not impose stacking or deduplication by effect definition', () => {
  const prismaSource = readFileSync(prismaSchemaFile, 'utf8')
  const effectModel = extractModel(prismaSource, 'CampaignActorEffect')

  assert.match(
    effectModel,
    /@@index\(\[namespace, definitionKey\], map: "CampaignActorEffect_definition_idx"\)/,
  )
  assert.doesNotMatch(effectModel, /@@unique\(\[[^\]]*(namespace|definitionKey)/)
  assert.doesNotMatch(effectModel, /definitionKey\s+String\?\s+@unique/)
})

test('migration enforces actor ownership, cascade deletion and positive schema version', () => {
  const migrationSource = readFileSync(migrationFile, 'utf8')

  assert.match(migrationSource, /CREATE TYPE "CampaignActorEffectPolarity" AS ENUM \('BENEFICIAL', 'HARMFUL', 'NEUTRAL'\)/)
  assert.match(migrationSource, /CREATE TABLE "CampaignActorEffect"/)
  assert.match(
    migrationSource,
    /FOREIGN KEY \("actorId"\) REFERENCES "CampaignActor"\("id"\)[\s\S]*ON DELETE CASCADE/,
  )
  assert.match(
    migrationSource,
    /CONSTRAINT "CampaignActorEffect_schemaVersion_positive" CHECK \("schemaVersion" >= 1\)/,
  )
  assert.match(migrationSource, /CREATE INDEX "CampaignActorEffect_actor_created_idx"/)
  assert.match(migrationSource, /CREATE INDEX "CampaignActorEffect_definition_idx"/)
  assert.doesNotMatch(migrationSource, /UNIQUE[\s\S]*"definitionKey"/)
})

test('active-effect model stores active instances only and does not add removal history', () => {
  const prismaSource = readFileSync(prismaSchemaFile, 'utf8')
  const effectModel = extractModel(prismaSource, 'CampaignActorEffect')

  assert.doesNotMatch(effectModel, /removedAt|endedAt|deletedAt/)
})
