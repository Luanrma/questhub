import {
  hasPathfinder2eIdentityChanged,
  isPathfinder2eIdentityComplete,
} from './pathfinder_2e/character_sheet'

type Pathfinder2eIdentityWritePolicyInput = {
  previousSheet: unknown
  nextSheet: unknown
  isOwner: boolean
  isMaster: boolean
}

type Pathfinder2eIdentityWritePolicyResult =
  | { ok: true }
  | { ok: false; status: 400 | 403; message: string }

export function validatePathfinder2eIdentityWritePolicy({
  previousSheet,
  nextSheet,
  isOwner,
  isMaster,
}: Pathfinder2eIdentityWritePolicyInput): Pathfinder2eIdentityWritePolicyResult {
  if (isMaster) return { ok: true }
  if (!isOwner) {
    return { ok: false, status: 403, message: 'Apenas o dono do personagem ou o Mestre pode salvar esta ficha' }
  }

  if (!isPathfinder2eIdentityComplete(previousSheet)) {
    if (!isPathfinder2eIdentityComplete(nextSheet)) {
      return { ok: false, status: 400, message: 'Preencha Classe, Ancestralidade, Heranca e Background antes de salvar' }
    }

    return { ok: true }
  }

  if (hasPathfinder2eIdentityChanged(previousSheet, nextSheet)) {
    return { ok: false, status: 403, message: 'A identidade da ficha ja foi definida. Apenas o Mestre pode altera-la' }
  }

  return { ok: true }
}
