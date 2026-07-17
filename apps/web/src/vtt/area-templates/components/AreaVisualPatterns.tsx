import { areaVisualPatternId, type AnimatedAreaVisualEffect } from './areaVisualConfig'

function PatternArtwork({ effect, gradientId }: { effect: AnimatedAreaVisualEffect; gradientId: string }) {
  if (effect === 'FIRE') return <>
    <rect width="72" height="72" fill="#450a0a" />
    <g className="questhub-area-fire-flow">
      <path d="M-6 74 C2 49 15 55 19 31 C32 42 27 58 37 63 C42 40 58 35 55 14 C75 32 79 55 74 74 Z" fill={`url(#${gradientId})`} />
      <path d="M-8 146 C4 121 15 128 22 101 C35 114 30 129 41 136 C47 112 62 106 57 86 C78 104 80 128 77 146 Z" fill={`url(#${gradientId})`} />
      <path d="M10 74 C19 60 21 50 19 41 C34 54 36 65 31 74 Z" fill="#fef08a" fillOpacity="0.82" />
    </g>
  </>

  if (effect === 'ELECTRIC') return <>
    <rect width="72" height="72" fill="#081a3a" />
    <g className="questhub-area-electric-flow" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 -8 L29 14 L18 28 L40 35 L23 52 L35 78" stroke="#67e8f9" strokeWidth="4" />
      <path d="M55 -5 L45 17 L59 26 L47 43 L65 56 L57 78" stroke="#dbeafe" strokeWidth="2" />
      <path d="M1 47 L13 42 L18 54" stroke="#38bdf8" strokeWidth="2" />
    </g>
    <g className="questhub-area-electric-sparks" fill="#ffffff"><circle cx="18" cy="28" r="3" /><circle cx="59" cy="26" r="2.5" /><circle cx="47" cy="43" r="2" /></g>
  </>

  if (effect === 'HEALING') return <>
    <rect width="72" height="72" fill="#053b31" />
    <g className="questhub-area-healing-rise" fill="none" stroke="#bbf7d0" strokeLinecap="round">
      <circle cx="18" cy="22" r="10" stroke="#34d399" strokeWidth="2" />
      <path d="M18 15 V29 M11 22 H25" strokeWidth="4" />
      <circle cx="54" cy="59" r="11" stroke="#6ee7b7" strokeWidth="2" />
      <path d="M54 51 V67 M46 59 H62" strokeWidth="4" />
      <path d="M36 5 V13 M32 9 H40" stroke="#ffffff" strokeWidth="2" />
    </g>
  </>

  if (effect === 'EARTH') return <>
    <rect width="72" height="72" fill="#3f291c" />
    <g className="questhub-area-earth-shake">
      <path d="M0 8 L19 2 L32 14 L52 5 L72 12 V34 L54 29 L43 43 L23 34 L8 46 L0 39 Z" fill="#795239" />
      <path d="M0 48 L15 39 L30 51 L45 42 L72 54 V72 H0 Z" fill="#5b3a29" />
      <path d="M32 -4 L29 17 L38 24 L27 34 L35 43 L28 76 M64 8 L55 19 L61 28 L52 37" fill="none" stroke="#fbbf7a" strokeOpacity="0.85" strokeWidth="2.5" />
      <path d="M8 46 L20 52 L15 63 M43 43 L49 53 L42 61" fill="none" stroke="#1c120d" strokeWidth="3" />
    </g>
  </>

  if (effect === 'VINES') return <>
    <rect width="72" height="72" fill="#062d18" />
    <g className="questhub-area-vines-grow" fill="none" strokeLinecap="round">
      <path d="M-8 62 C11 58 7 30 29 33 C50 36 43 8 80 12" stroke="#4d7c0f" strokeWidth="5" />
      <path d="M8 78 C27 58 18 45 43 45 C60 45 57 25 77 24" stroke="#84cc16" strokeWidth="3" />
      <path d="M18 43 Q8 28 20 19 M49 31 Q61 18 57 8" stroke="#65a30d" strokeWidth="3" />
    </g>
    <g className="questhub-area-vines-leaves" fill="#a3e635">
      <ellipse cx="18" cy="20" rx="4" ry="8" transform="rotate(-35 18 20)" /><ellipse cx="30" cy="34" rx="4" ry="8" transform="rotate(50 30 34)" /><ellipse cx="57" cy="9" rx="4" ry="8" transform="rotate(35 57 9)" /><ellipse cx="51" cy="45" rx="4" ry="8" transform="rotate(-45 51 45)" />
    </g>
  </>

  return <>
    <rect width="72" height="72" fill="#123c28" />
    <g className="questhub-area-leaves-gust">
      <path d="M5 18 Q17 5 27 15 Q16 28 5 18 Z" fill="#bef264" transform="rotate(18 16 17)" />
      <path d="M38 9 Q48 -1 58 10 Q48 22 38 9 Z" fill="#4ade80" transform="rotate(-28 48 10)" />
      <path d="M22 51 Q35 38 46 50 Q34 64 22 51 Z" fill="#84cc16" transform="rotate(32 34 51)" />
      <path d="M61 39 Q72 28 82 40 Q72 52 61 39 Z" fill="#86efac" transform="rotate(-15 71 40)" />
      <path d="M-22 51 Q-9 38 2 50 Q-10 64 -22 51 Z" fill="#84cc16" />
      <path d="M7 19 Q16 17 25 15 M40 10 Q48 10 56 10 M24 51 Q34 51 44 50" fill="none" stroke="#166534" strokeWidth="1.5" />
    </g>
  </>
}

export function AreaVisualPattern({ effect, id, rotationDegrees }: { effect: AnimatedAreaVisualEffect; id: string; rotationDegrees: number }) {
  const gradientId = `area-${effect.toLowerCase()}-gradient-${id}`
  const patternId = areaVisualPatternId(effect, id)
  return <defs>
    {effect === 'FIRE' ? <linearGradient id={gradientId} x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#7f1d1d" /><stop offset="0.42" stopColor="#ea580c" /><stop offset="0.76" stopColor="#facc15" /><stop offset="1" stopColor="#fff7ae" /></linearGradient> : null}
    <pattern id={patternId} width="72" height="72" patternUnits="userSpaceOnUse" patternTransform={effect === 'LEAVES' ? `rotate(${rotationDegrees})` : undefined}>
      <PatternArtwork effect={effect} gradientId={gradientId} />
    </pattern>
  </defs>
}
