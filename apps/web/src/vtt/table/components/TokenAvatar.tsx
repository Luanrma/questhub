import { useState } from 'react'
import { defaultTokenColor, tokenFallbackLetter } from '../domain/tokenAppearance'

type TokenAvatarProps = {
  avatarUrl: string | null
  name: string
  fallbackSeed?: string
  color?: string | null
  className?: string
}

export function TokenAvatar({
  avatarUrl,
  name,
  fallbackSeed,
  color,
  className = 'h-full w-full object-contain',
}: TokenAvatarProps) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null)
  const imageAvailable = Boolean(avatarUrl && failedUrl !== avatarUrl)

  return (
    <span
      className="grid h-full w-full place-items-center overflow-hidden"
      style={{ backgroundColor: imageAvailable ? color ?? 'transparent' : color ?? defaultTokenColor }}
    >
      {imageAvailable ? (
        <img
          src={avatarUrl ?? undefined}
          alt=""
          className={className}
          draggable={false}
          onError={() => setFailedUrl(avatarUrl)}
        />
      ) : (
        tokenFallbackLetter(fallbackSeed ?? name)
      )}
    </span>
  )
}
