import type { ReactNode } from 'react'

export function FogOverlay({ overlayUrl, masterOpacity }: { overlayUrl: string | null; masterOpacity: number }) {
  if (!overlayUrl && masterOpacity <= 0) return null
  return <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-[18]"
    style={overlayUrl ? {
      backgroundImage: `url(${overlayUrl})`,
      backgroundSize: '100% 100%',
      imageRendering: 'auto',
    } : { backgroundColor: `rgba(0,0,0,${masterOpacity})` }}
  />
}

export function FogVisibleLayer({ maskUrl, children }: { maskUrl: string | null; children: ReactNode }) {
  return <div
    className="pointer-events-none absolute inset-0 z-[4]"
    style={maskUrl ? {
      maskImage: `url(${maskUrl})`,
      WebkitMaskImage: `url(${maskUrl})`,
      maskSize: '100% 100%',
      WebkitMaskSize: '100% 100%',
    } : undefined}
  >{children}</div>
}
