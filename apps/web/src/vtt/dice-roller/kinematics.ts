import { Euler, Quaternion, Vector3 } from 'three'
import type { ActiveDiceRoll } from './types'

const surfaceY = 0
const leftBoundaryX = -7
const diceRadius = 0.8
const gravity = -18
const horizontalFriction = 0.982
const angularFriction = 0.95
const residualWear = 0.055
const settleResidualWear = 0.24
const rollingAngularScale = 1 / diceRadius
const upAxis = new Vector3(0, 1, 0)
const identityRotation = new Quaternion()

export type DiceKinematicBody = {
  position: Vector3
  velocity: Vector3
  rotation: Quaternion
  residualRotation: Quaternion
  angularVelocity: Vector3
  bounceCount: number
  settling: boolean
  settled: boolean
}

export type DiceKinematicSeed = {
  startPosition: Vector3
  initialVelocity: Vector3
  startHeight: number
  initialResidualRotation: Quaternion
  angularVelocity: Vector3
}

export type DiceKinematicStep = {
  body: DiceKinematicBody
  targetQuaternion: Quaternion
  deltaSeconds: number
  frameDirection: Vector3
  frameAxis: Vector3
  frameRotation: Quaternion
  velocityXDelta: number
  velocityZDelta: number
}

function seededValue(seed: number, salt: number) {
  const value = Math.sin(seed * 12.9898 + salt * 78.233) * 43758.5453
  return value - Math.floor(value)
}

function valueBetween(seed: number, salt: number, min: number, max: number) {
  return min + seededValue(seed, salt) * (max - min)
}

function createResidualRotation(seed: number) {
  return new Quaternion().setFromEuler(
    new Euler(
      valueBetween(seed, 21, -Math.PI, Math.PI),
      valueBetween(seed, 22, -Math.PI, Math.PI),
      valueBetween(seed, 23, -Math.PI, Math.PI),
      'XYZ',
    ),
  )
}

export function createDiceKinematicSeed(roll: ActiveDiceRoll): DiceKinematicSeed {
  const slotOffset = (roll.slot % 4) * 0.36
  const startZ = valueBetween(roll.id, 11, -2.65, 2.65)
  const velocityZ = valueBetween(roll.id, 12, -2.2, 2.2)
  const speedX = valueBetween(roll.id, 13, -10.4, -8.4)

  return {
    startPosition: new Vector3(8 + slotOffset, surfaceY, startZ),
    initialVelocity: new Vector3(speedX, valueBetween(roll.id, 14, 5.8, 7.2), velocityZ),
    startHeight: valueBetween(roll.id, 15, 1.2, 1.8),
    initialResidualRotation: createResidualRotation(roll.id),
    angularVelocity: new Vector3(
      valueBetween(roll.id, 24, -9, 9),
      valueBetween(roll.id, 25, -7, 7),
      valueBetween(roll.id, 26, -9, 9),
    ),
  }
}

export function createDiceKinematicBody(seed: DiceKinematicSeed, targetRotation: Quaternion): DiceKinematicBody {
  const rotation = targetRotation.clone().multiply(seed.initialResidualRotation)

  return {
    position: seed.startPosition.clone().setY(surfaceY + seed.startHeight),
    velocity: seed.initialVelocity.clone(),
    rotation,
    residualRotation: seed.initialResidualRotation.clone(),
    angularVelocity: seed.angularVelocity.clone(),
    bounceCount: 0,
    settling: false,
    settled: false,
  }
}

function applyHorizontalFriction(body: DiceKinematicBody, deltaSeconds: number) {
  const friction = horizontalFriction ** (deltaSeconds * 60)
  body.velocity.x *= friction
  body.velocity.z *= friction
}

function applyLeftBoundaryCollision(body: DiceKinematicBody) {
  if (body.position.x > leftBoundaryX) return
  if (body.velocity.x >= 0) return

  body.position.x = leftBoundaryX
  body.velocity.x *= -0.5
  body.velocity.z *= 0.82
}

function applyVerticalMotion(body: DiceKinematicBody, deltaSeconds: number) {
  body.velocity.y += gravity * deltaSeconds
  body.position.y += body.velocity.y * deltaSeconds

  if (body.position.y > surfaceY) return

  body.position.y = surfaceY
  if (Math.abs(body.velocity.y) < 1.05 || body.bounceCount >= 3) {
    body.velocity.y = 0
    return
  }

  const restitution = body.bounceCount === 0 ? 0.56 : 0.42
  body.velocity.y = -body.velocity.y * restitution
  body.bounceCount += 1
}

function horizontalSpeed(body: DiceKinematicBody) {
  return Math.hypot(body.velocity.x, body.velocity.z)
}

function shouldStartSettling(body: DiceKinematicBody) {
  const verticalAtRest = body.position.y === surfaceY && Math.abs(body.velocity.y) < 0.05
  return verticalAtRest && horizontalSpeed(body) < 0.95
}

function applyResidualRotation(step: DiceKinematicStep, deltaRotation: Quaternion) {
  step.body.residualRotation.premultiply(deltaRotation)
}

function applyTranslationDrivenRotation(step: DiceKinematicStep) {
  const horizontalDistance = Math.hypot(step.velocityXDelta, step.velocityZDelta)
  if (horizontalDistance <= 0.0001) return
  if (step.body.position.y > surfaceY + 0.18) return

  step.frameDirection.set(step.velocityXDelta, 0, step.velocityZDelta).normalize()
  step.frameAxis.crossVectors(upAxis, step.frameDirection).normalize()
  step.frameRotation.setFromAxisAngle(step.frameAxis, horizontalDistance * rollingAngularScale)
  applyResidualRotation(step, step.frameRotation)
}

function applyChaoticAngularVelocity(step: DiceKinematicStep) {
  const angularSpeed = step.body.angularVelocity.length()
  if (angularSpeed <= 0.001) return

  step.frameAxis.copy(step.body.angularVelocity).normalize()
  step.frameRotation.setFromAxisAngle(step.frameAxis, angularSpeed * step.deltaSeconds)
  applyResidualRotation(step, step.frameRotation)

  const friction = angularFriction ** (step.deltaSeconds * 60)
  step.body.angularVelocity.multiplyScalar(friction)
}

function applyResidualWear(step: DiceKinematicStep) {
  const baseWear = step.body.settling ? settleResidualWear : residualWear
  const wear = 1 - (1 - baseWear) ** (step.deltaSeconds * 60)
  step.body.residualRotation.slerp(identityRotation, wear)
}

function composeRotation(step: DiceKinematicStep) {
  step.body.rotation.copy(step.targetQuaternion).multiply(step.body.residualRotation)
}

function residualIsSpent(body: DiceKinematicBody) {
  return body.residualRotation.angleTo(identityRotation) < 0.01 && body.angularVelocity.lengthSq() < 0.0001
}

export function stepDiceKinematics(step: DiceKinematicStep) {
  if (step.body.settled) return

  const previousX = step.body.position.x
  const previousZ = step.body.position.z

  if (step.body.settling) {
    applyResidualWear(step)
    composeRotation(step)

    if (!residualIsSpent(step.body)) return

    step.body.residualRotation.copy(identityRotation)
    step.body.rotation.copy(step.targetQuaternion)
    step.body.settled = true
    return
  }

  applyHorizontalFriction(step.body, step.deltaSeconds)
  step.body.position.x += step.body.velocity.x * step.deltaSeconds
  step.body.position.z += step.body.velocity.z * step.deltaSeconds
  applyLeftBoundaryCollision(step.body)
  applyVerticalMotion(step.body, step.deltaSeconds)

  step.velocityXDelta = step.body.position.x - previousX
  step.velocityZDelta = step.body.position.z - previousZ
  applyTranslationDrivenRotation(step)
  applyChaoticAngularVelocity(step)
  applyResidualWear(step)
  composeRotation(step)

  if (!shouldStartSettling(step.body)) return

  step.body.velocity.set(0, 0, 0)
  step.body.position.y = surfaceY
  step.body.settling = true
}
