import { PATHFINDER_2E_DATA_KEY, PATHFINDER_2E_SYSTEM } from './constants'

type Pathfinder2eSelectionLike = {
  source?: unknown
  id?: unknown
  name?: unknown
}

type Pathfinder2eSheetEnvelopeLike = {
  system?: unknown
  data?: Record<string, unknown>
}

type Pathfinder2eSheetLike = {
  identity?: Record<string, unknown>
}

const IDENTITY_FIELDS = ['class', 'ancestry', 'heritage', 'background'] as const

function getPathfinder2eSheet(input: unknown): Pathfinder2eSheetLike | null {
  if (!input || typeof input !== 'object') return null

  const envelope = input as Pathfinder2eSheetEnvelopeLike
  if (envelope.system !== PATHFINDER_2E_SYSTEM || !envelope.data || typeof envelope.data !== 'object') return null

  const sheet = envelope.data[PATHFINDER_2E_DATA_KEY]
  if (!sheet || typeof sheet !== 'object') return null

  return sheet as Pathfinder2eSheetLike
}

function normalizeIdentityText(value: unknown) {
  return typeof value === 'string' ? value.trim().toLocaleLowerCase() : ''
}

function selectionSignature(selection: unknown) {
  if (!selection || typeof selection !== 'object') return ''

  const value = selection as Pathfinder2eSelectionLike
  if (value.source === 'catalog' && typeof value.id === 'string') return `catalog:${value.id}`
  return `custom:${normalizeIdentityText(value.name)}`
}

function fieldSignature(identity: Record<string, unknown>, field: (typeof IDENTITY_FIELDS)[number]) {
  if (field === 'class' && typeof identity.className === 'string') return `custom:${normalizeIdentityText(identity.className)}`

  const value = identity[field]
  if (typeof value === 'string') return `custom:${normalizeIdentityText(value)}`
  return selectionSignature(value)
}

export function getPathfinder2eIdentitySignature(input: unknown) {
  const sheet = getPathfinder2eSheet(input)
  if (!sheet?.identity) return null

  return IDENTITY_FIELDS.reduce<Record<string, string>>((signature, field) => ({
    ...signature,
    [field]: fieldSignature(sheet.identity ?? {}, field),
  }), {})
}

export function isPathfinder2eIdentityComplete(input: unknown) {
  const signature = getPathfinder2eIdentitySignature(input)
  if (!signature) return false
  return IDENTITY_FIELDS.every((field) => Boolean(signature[field]))
}

export function hasPathfinder2eIdentityChanged(previous: unknown, next: unknown) {
  const previousSignature = getPathfinder2eIdentitySignature(previous)
  const nextSignature = getPathfinder2eIdentitySignature(next)
  if (!previousSignature || !nextSignature) return false

  return IDENTITY_FIELDS.some((field) => previousSignature[field] !== nextSignature[field])
}
