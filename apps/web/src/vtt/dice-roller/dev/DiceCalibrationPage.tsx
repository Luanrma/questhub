import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Euler, Group, Quaternion } from 'three'
import { DiceModel } from '../DiceModel'
import type { DiceSides, SerializedQuaternion } from '../types'

const diceOptions = [4, 6, 8, 10, 12, 20] as const
const snapAngles = [-Math.PI, -Math.PI / 2, 0, Math.PI / 2, Math.PI]

function formatQuaternion(quaternion: Quaternion): string {
  const serialized: SerializedQuaternion = [quaternion.x, quaternion.y, quaternion.z, quaternion.w]
  return `[${serialized.map((value) => Number(value.toFixed(6))).join(', ')}]`
}

function DiceCalibrationScene({
  sides,
  rotation,
}: {
  sides: DiceSides
  rotation: { x: number; y: number; z: number }
}) {
  const groupRef = useRef<Group>(null)
  const camera = useThree((state) => state.camera)

  useEffect(() => {
    camera.lookAt(0, 0.85, 0)
    camera.updateProjectionMatrix()
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 7, 5]} intensity={2} />
      <gridHelper args={[8, 8, '#64748b', '#334155']} position={[0, -0.02, 0]} />
      <group ref={groupRef} rotation={[rotation.x, rotation.y, rotation.z]} position={[0, 0.85, 0]}>
        <DiceModel sides={sides} />
      </group>
      <OrbitControls makeDefault target={[0, 0.85, 0]} />
    </>
  )
}

export default function DiceCalibrationPage() {
  const [sides, setSides] = useState<DiceSides>(6)
  const [faceValue, setFaceValue] = useState(1)
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const [lastQuaternion, setLastQuaternion] = useState('')

  async function copyQuaternion(quaternion: Quaternion) {
    const value = formatQuaternion(quaternion)
    setLastQuaternion(value)
    await navigator.clipboard?.writeText(`${faceValue}: ${value},`).catch(() => {})
    console.log(`D${sides} face ${faceValue}: ${value}`)
  }

  function updateRotation(axis: 'x' | 'y' | 'z', value: number) {
    setRotation((current) => ({ ...current, [axis]: value }))
  }

  return (
    <main className="grid min-h-screen grid-cols-[320px_minmax(0,1fr)] bg-[#08090c] text-white">
      <aside className="border-r border-white/10 bg-[#101116] p-5">
        <h1 className="text-lg font-semibold">Dice calibration</h1>
        <p className="mt-2 text-sm text-zinc-400">Dev-only route for copying calibrated face quaternions.</p>

        <label className="mt-6 grid gap-2 text-sm">
          <span className="text-zinc-300">Die</span>
          <select
            className="rounded-md border border-white/10 bg-black/30 px-3 py-2"
            value={sides}
            onChange={(event) => {
              const nextSides = Number(event.target.value) as DiceSides
              setSides(nextSides)
              setFaceValue(1)
            }}
          >
            {diceOptions.map((option) => (
              <option key={option} value={option}>
                D{option}
              </option>
            ))}
          </select>
        </label>

        <label className="mt-4 grid gap-2 text-sm">
          <span className="text-zinc-300">Face value</span>
          <input
            type="number"
            min={1}
            max={sides}
            value={faceValue}
            className="rounded-md border border-white/10 bg-black/30 px-3 py-2"
            onChange={(event) => setFaceValue(Math.min(Math.max(Number(event.target.value), 1), sides))}
          />
        </label>

        {(['x', 'y', 'z'] as const).map((axis) => (
          <label key={axis} className="mt-4 grid gap-2 text-sm">
            <span className="text-zinc-300">Rotation {axis.toUpperCase()}</span>
            <input
              type="range"
              min={-Math.PI * 2}
              max={Math.PI * 2}
              step={0.01}
              value={rotation[axis]}
              className="accent-indigo-500"
              onChange={(event) => updateRotation(axis, Number(event.target.value))}
            />
            <input
              type="number"
              step={0.01}
              value={rotation[axis]}
              className="rounded-md border border-white/10 bg-black/30 px-3 py-2"
              onChange={(event) => updateRotation(axis, Number(event.target.value))}
            />
            <div className="grid grid-cols-5 gap-1">
              {snapAngles.map((angle) => (
                <button
                  key={`${axis}-${angle}`}
                  type="button"
                  className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-200 transition hover:bg-white/10"
                  onClick={() => updateRotation(axis, angle)}
                >
                  {Math.round((angle * 180) / Math.PI)}°
                </button>
              ))}
            </div>
          </label>
        ))}

        <button
          type="button"
          className="mt-5 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
          onClick={() => copyQuaternion(new Quaternion().setFromEuler(new Euler(rotation.x, rotation.y, rotation.z, 'XYZ')))}
        >
          Copy quaternion
        </button>

        {lastQuaternion ? (
          <pre className="mt-4 overflow-auto rounded-md border border-white/10 bg-black/30 p-3 text-xs text-zinc-200">{lastQuaternion}</pre>
        ) : null}
      </aside>

      <section className="min-h-0">
        <Canvas camera={{ position: [0, 5, 8], fov: 50 }}>
          <DiceCalibrationScene sides={sides} rotation={rotation} />
        </Canvas>
      </section>
    </main>
  )
}
