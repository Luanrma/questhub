import type { ReactNode } from 'react'

export function CampaignCommunicationPanelSlot({ active, children }: {
  active: boolean
  children: ReactNode
}) {
  return (
    <div aria-hidden={!active} className={active ? 'h-full min-h-0' : 'hidden'}>
      {children}
    </div>
  )
}
