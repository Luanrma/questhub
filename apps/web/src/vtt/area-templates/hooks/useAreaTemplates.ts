import { useCallback, useEffect, useState } from 'react'
import type { Socket } from 'socket.io-client'
import type { AreaTemplateInput, CampaignAreaTemplate, SceneAreaEffect } from '../domain/types'
import { areaTemplatesApi } from '../infrastructure/areaTemplatesApi'

export function useAreaTemplates(campaignId: string | undefined, sceneId: string | undefined, enabled: boolean, socket: Socket | null) {
  const [templates, setTemplates] = useState<CampaignAreaTemplate[]>([])
  const [effects, setEffects] = useState<SceneAreaEffect[]>([])
  const [loading, setLoading] = useState(false)
  const [templateError, setTemplateError] = useState<string | null>(null)
  const [effectsError, setEffectsError] = useState<string | null>(null)

  const loadTemplates = useCallback(async () => {
    if (!campaignId || !enabled) return
    setLoading(true)
    setTemplateError(null)
    try {
      setTemplates(await areaTemplatesApi.listTemplates(campaignId))
    } catch (reason) {
      setTemplateError(reason instanceof Error ? reason.message : 'Nao foi possivel carregar templates de area.')
    } finally {
      setLoading(false)
    }
  }, [campaignId, enabled])

  const loadEffects = useCallback(async () => {
    if (!campaignId || !sceneId || !enabled) {
      setEffects([])
      setEffectsError(null)
      return
    }
    try {
      setEffects(await areaTemplatesApi.listEffects(campaignId, sceneId))
      setEffectsError(null)
    } catch (reason) {
      setEffects([])
      setEffectsError(reason instanceof Error ? reason.message : 'Nao foi possivel carregar areas da cena.')
    }
  }, [campaignId, enabled, sceneId])

  useEffect(() => {
    const task = window.setTimeout(() => void loadTemplates(), 0)
    return () => window.clearTimeout(task)
  }, [loadTemplates])
  useEffect(() => {
    const task = window.setTimeout(() => void loadEffects(), 0)
    return () => window.clearTimeout(task)
  }, [loadEffects])

  useEffect(() => {
    if (!socket || !campaignId) return
    const upsertTemplate = (template: CampaignAreaTemplate) => {
      if (template.campaignId !== campaignId) return
      setTemplates((current) => [...current.filter((item) => item.id !== template.id), template].sort((a, b) => a.name.localeCompare(b.name)))
    }
    const removeTemplate = (payload: { campaignId: string; templateId: string }) => {
      if (payload.campaignId !== campaignId) return
      setTemplates((current) => current.filter((template) => template.id !== payload.templateId))
    }
    socket.on('area-template:created', upsertTemplate)
    socket.on('area-template:updated', upsertTemplate)
    socket.on('area-template:removed', removeTemplate)
    return () => {
      socket.off('area-template:created', upsertTemplate)
      socket.off('area-template:updated', upsertTemplate)
      socket.off('area-template:removed', removeTemplate)
    }
  }, [campaignId, socket])

  useEffect(() => {
    if (!socket || !campaignId || !sceneId) return
    const onCreated = (effect: SceneAreaEffect) => {
      if (effect.campaignId !== campaignId || effect.sceneId !== sceneId) return
      setEffects((current) => [...current.filter((item) => item.id !== effect.id), effect])
    }
    const onRemoved = (payload: { campaignId: string; sceneId: string; effectId: string }) => {
      if (payload.campaignId !== campaignId || payload.sceneId !== sceneId) return
      setEffects((current) => current.filter((effect) => effect.id !== payload.effectId))
    }
    socket.on('area-effect:created', onCreated)
    socket.on('area-effect:updated', onCreated)
    socket.on('area-effect:removed', onRemoved)
    return () => {
      socket.off('area-effect:created', onCreated)
      socket.off('area-effect:updated', onCreated)
      socket.off('area-effect:removed', onRemoved)
    }
  }, [campaignId, sceneId, socket])

  async function saveTemplate(input: AreaTemplateInput, templateId?: string) {
    if (!campaignId) return null
    setTemplateError(null)
    try {
      const saved = templateId
        ? await areaTemplatesApi.updateTemplate(campaignId, templateId, input)
        : await areaTemplatesApi.createTemplate(campaignId, input)
      setTemplates((current) => [...current.filter((template) => template.id !== saved.id), saved].sort((a, b) => a.name.localeCompare(b.name)))
      return saved
    } catch (reason) {
      setTemplateError(reason instanceof Error ? reason.message : 'Nao foi possivel salvar o template.')
      return null
    }
  }

  async function duplicateTemplate(templateId: string) {
    if (!campaignId) return
    try {
      const duplicated = await areaTemplatesApi.duplicateTemplate(campaignId, templateId)
      setTemplates((current) => [...current.filter((template) => template.id !== duplicated.id), duplicated].sort((a, b) => a.name.localeCompare(b.name)))
    } catch (reason) {
      setTemplateError(reason instanceof Error ? reason.message : 'Nao foi possivel duplicar o template.')
    }
  }

  async function deleteTemplate(templateId: string) {
    if (!campaignId) return
    try {
      await areaTemplatesApi.deleteTemplate(campaignId, templateId)
      setTemplates((current) => current.filter((template) => template.id !== templateId))
    } catch (reason) {
      setTemplateError(reason instanceof Error ? reason.message : 'Nao foi possivel excluir o template.')
    }
  }

  async function createEffect(input: { templateId: string; origin: { x: number; y: number }; rotationDegrees: number; scale: number }) {
    if (!campaignId || !sceneId) return null
    try {
      const created = await areaTemplatesApi.createEffect(campaignId, sceneId, input)
      setEffects((current) => [...current.filter((effect) => effect.id !== created.id), created])
      return created
    } catch (reason) {
      setEffectsError(reason instanceof Error ? reason.message : 'Nao foi possivel persistir a area.')
      return null
    }
  }

  async function deleteEffect(effectId: string) {
    if (!campaignId || !sceneId) return
    try {
      await areaTemplatesApi.deleteEffect(campaignId, sceneId, effectId)
      setEffects((current) => current.filter((effect) => effect.id !== effectId))
    } catch (reason) {
      setEffectsError(reason instanceof Error ? reason.message : 'Nao foi possivel remover a area.')
    }
  }

  async function updateEffect(effectId: string, input: { origin?: { x: number; y: number }; rotationDegrees?: number; scale?: number }) {
    if (!campaignId || !sceneId) return null
    try {
      const updated = await areaTemplatesApi.updateEffect(campaignId, sceneId, effectId, input)
      setEffects((current) => current.map((effect) => effect.id === updated.id ? updated : effect))
      return updated
    } catch (reason) {
      setEffectsError(reason instanceof Error ? reason.message : 'Nao foi possivel editar a area.')
      return null
    }
  }

  return { templates, effects, loading, error: templateError, effectsError, setError: setTemplateError, saveTemplate, duplicateTemplate, deleteTemplate, createEffect, updateEffect, deleteEffect, reloadEffects: loadEffects }
}
