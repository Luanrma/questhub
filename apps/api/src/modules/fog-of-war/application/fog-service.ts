import type { FogRepository } from './ports/fog-repository'
import {
  normalizeFixedLightSources,
  normalizeFogLightSource,
  normalizeSceneFogConfig,
  normalizeTokenVisionConfig,
} from '../domain/config'
import { resetFogExplorationMask, unionFogExplorationMasks, validateFogExplorationMask, type FogExplorationMask } from '../domain/exploration-mask'

export type FogServiceResult<T = undefined> =
  | { ok: true; data: T }
  | { ok: false; code: string; message: string }

export class FogService {
  constructor(private readonly repository: FogRepository) {}

  private async requireAccess(campaignId: string, userId: string) {
    return this.repository.findAccess(campaignId, userId)
  }

  async configureScene(input: { campaignId: string; sceneId: string; userId: string; fogConfig: unknown; fixedLightSources: unknown }): Promise<FogServiceResult<{ fogConfig: unknown; fixedLightSources: unknown }>> {
    const access = await this.requireAccess(input.campaignId, input.userId)
    if (access?.role !== 'MASTER') return { ok: false, code: 'FORBIDDEN', message: 'Apenas o Mestre pode configurar o FOG' }
    if (!(await this.repository.sceneExists(input.campaignId, input.sceneId))) return { ok: false, code: 'SCENE_NOT_FOUND', message: 'Cena nao encontrada' }
    const fogConfig = normalizeSceneFogConfig(input.fogConfig)
    const fixedLightSources = normalizeFixedLightSources(input.fixedLightSources)
    await this.repository.updateScene({ sceneId: input.sceneId, fogConfig, fixedLightSources })
    return { ok: true, data: { fogConfig, fixedLightSources } }
  }

  async configureTokenVision(input: { campaignId: string; tokenId: string; userId: string; visionConfig: unknown }): Promise<FogServiceResult<{ visionConfig: unknown }>> {
    const access = await this.requireAccess(input.campaignId, input.userId)
    if (access?.role !== 'MASTER') return { ok: false, code: 'FORBIDDEN', message: 'Apenas o Mestre pode configurar visao' }
    const token = await this.repository.findToken(input.campaignId, input.tokenId)
    if (!token) return { ok: false, code: 'TOKEN_NOT_FOUND', message: 'Token nao encontrado' }
    const visionConfig = normalizeTokenVisionConfig(input.visionConfig)
    await this.repository.updateTokenVision(token.id, visionConfig)
    return { ok: true, data: { visionConfig } }
  }

  async configureTokenLight(input: { campaignId: string; tokenId: string; userId: string; lightConfig: unknown }): Promise<FogServiceResult<{ lightConfig: unknown }>> {
    const access = await this.requireAccess(input.campaignId, input.userId)
    if (access?.role !== 'MASTER') return { ok: false, code: 'FORBIDDEN', message: 'Apenas o Mestre pode configurar luz' }
    const token = await this.repository.findToken(input.campaignId, input.tokenId)
    if (!token) return { ok: false, code: 'TOKEN_NOT_FOUND', message: 'Token nao encontrado' }
    const lightConfig = normalizeFogLightSource(input.lightConfig, `token-light:${token.id}`)
    await this.repository.updateTokenLight(token.id, lightConfig)
    return { ok: true, data: { lightConfig } }
  }

  async toggleTokenLight(input: { campaignId: string; tokenId: string; userId: string; enabled: boolean }): Promise<FogServiceResult<{ lightConfig: unknown }>> {
    const [access, token] = await Promise.all([
      this.requireAccess(input.campaignId, input.userId),
      this.repository.findToken(input.campaignId, input.tokenId),
    ])
    if (!access) return { ok: false, code: 'FORBIDDEN', message: 'Acesso nao liberado' }
    if (!token) return { ok: false, code: 'TOKEN_NOT_FOUND', message: 'Token nao encontrado' }
    const lightConfig = normalizeFogLightSource(token.lightConfig, `token-light:${token.id}`)
    const allowed = access.role === 'MASTER' || Boolean(access.memberId && lightConfig.permission.allowedControllerMemberIds.includes(access.memberId))
    if (!allowed) return { ok: false, code: 'FORBIDDEN', message: 'Sem permissao para controlar esta luz' }
    const updated = { ...lightConfig, enabled: input.enabled }
    await this.repository.updateTokenLight(token.id, updated)
    return { ok: true, data: { lightConfig: updated } }
  }

  async configurePlacementOcclusion(input: { campaignId: string; tokenId: string; userId: string; blocksVisionAndLight: boolean }): Promise<FogServiceResult> {
    const access = await this.requireAccess(input.campaignId, input.userId)
    if (access?.role !== 'MASTER') return { ok: false, code: 'FORBIDDEN', message: 'Apenas o Mestre pode configurar bloqueio' }
    const token = await this.repository.findToken(input.campaignId, input.tokenId)
    if (!token?.placement) return { ok: false, code: 'TOKEN_NOT_FOUND', message: 'Token posicionado nao encontrado' }
    await this.repository.updatePlacementOcclusion(token.id, input.blocksVisionAndLight)
    return { ok: true, data: undefined }
  }

  async loadExploration(input: { campaignId: string; sceneId: string; tokenId: string; userId: string }): Promise<FogServiceResult<FogExplorationMask | null>> {
    const [access, token, sceneExists] = await Promise.all([
      this.requireAccess(input.campaignId, input.userId),
      this.repository.findToken(input.campaignId, input.tokenId),
      this.repository.sceneExists(input.campaignId, input.sceneId),
    ])
    if (!access || !sceneExists) return { ok: false, code: 'FORBIDDEN', message: 'Acesso nao liberado' }
    if (!token) return { ok: false, code: 'TOKEN_NOT_FOUND', message: 'Token nao encontrado' }
    if (access.role !== 'MASTER' && token.controllerMemberId !== access.memberId) return { ok: false, code: 'FORBIDDEN', message: 'Token nao controlado' }
    return { ok: true, data: await this.repository.getExploration(input.sceneId, input.tokenId) }
  }

  async syncExploration(input: { campaignId: string; sceneId: string; tokenId: string; userId: string; exploration: FogExplorationMask }): Promise<FogServiceResult<{ revision: number }>> {
    const validation = validateFogExplorationMask(input.exploration)
    if (!validation.ok) return { ok: false, code: validation.code, message: 'Mascara de exploracao invalida' }
    const access = await this.requireAccess(input.campaignId, input.userId)
    const token = await this.repository.findToken(input.campaignId, input.tokenId)
    if (!access || !token || token.placement?.sceneId !== input.sceneId) return { ok: false, code: 'FORBIDDEN', message: 'Token nao autorizado nesta cena' }
    if (access.role !== 'MASTER' && token.controllerMemberId !== access.memberId) return { ok: false, code: 'FORBIDDEN', message: 'Token nao controlado' }
    const current = await this.repository.getExploration(input.sceneId, input.tokenId)
    const merged = unionFogExplorationMasks(current, input.exploration)
    if (!merged.ok) return { ok: false, code: merged.code, message: 'Nao foi possivel combinar a exploracao' }
    await this.repository.saveExploration(input.sceneId, input.tokenId, merged.value)
    return { ok: true, data: { revision: merged.value.revision } }
  }

  async resetExploration(input: { campaignId: string; sceneId: string; tokenId?: string; userId: string }): Promise<FogServiceResult<{ revisions: Array<{ tokenId: string; revision: number }> }>> {
    const access = await this.requireAccess(input.campaignId, input.userId)
    if (access?.role !== 'MASTER') return { ok: false, code: 'FORBIDDEN', message: 'Apenas o Mestre pode apagar exploracao' }
    if (!(await this.repository.sceneExists(input.campaignId, input.sceneId))) return { ok: false, code: 'SCENE_NOT_FOUND', message: 'Cena nao encontrada' }
    if (input.tokenId) {
      const token = await this.repository.findToken(input.campaignId, input.tokenId)
      if (!token || token.placement?.sceneId !== input.sceneId) return { ok: false, code: 'TOKEN_NOT_FOUND', message: 'Token nao encontrado nesta cena' }
    }
    const targets = input.tokenId
      ? [{ tokenId: input.tokenId, exploration: await this.repository.getExploration(input.sceneId, input.tokenId) }]
      : await this.repository.listSceneExplorations(input.sceneId)
    const revisions: Array<{ tokenId: string; revision: number }> = []
    for (const target of targets) {
      if (!target.exploration) {
        revisions.push({ tokenId: target.tokenId, revision: 0 })
        continue
      }
      const reset = resetFogExplorationMask(target.exploration)
      await this.repository.saveExploration(input.sceneId, target.tokenId, reset)
      revisions.push({ tokenId: target.tokenId, revision: reset.revision })
    }
    return { ok: true, data: { revisions } }
  }
}
