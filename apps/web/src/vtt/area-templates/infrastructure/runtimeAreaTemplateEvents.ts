import type { CampaignAreaTemplate } from '../domain/types'

export const runtimeAreaTemplateRequestedEvent = 'vtt:runtime-area-template:requested'

export type RuntimeAreaTemplateRequested = {
  template: CampaignAreaTemplate
}

export function requestRuntimeAreaTemplate(template: CampaignAreaTemplate) {
  window.dispatchEvent(new CustomEvent<RuntimeAreaTemplateRequested>(
    runtimeAreaTemplateRequestedEvent,
    { detail: { template } },
  ))
}
