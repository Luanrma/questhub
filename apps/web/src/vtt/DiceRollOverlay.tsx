import { useMemo, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Physics, RigidBody, CuboidCollider, RapierRigidBody } from '@react-three/rapier';

// Define the type that matches what's in CampaignLayout
export type DiceRollAnimation = {
  id: number;
  sides: number;
  value: number;
};

function PhysicsDice({ onFinished }: { onFinished: () => void }) {
  const rigidBodyRef = useRef<RapierRigidBody>(null);
  // Note: We'll use a placeholder model for now - in real use, you'd need to add the .glb file to public/models
  const { scene } = useGLTF('/models/D20_3D_Red.glb', true); // true = use fallback if not found
  const copiedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    if (rigidBodyRef.current) {
      rigidBodyRef.current.applyImpulse({ 
        x: (Math.random() - 0.5) * 10, 
        y: 8, 
        z: (Math.random() - 0.5) * 10 
      }, true);
      rigidBodyRef.current.applyTorqueImpulse({ 
        x: Math.random() * 5, 
        y: Math.random() * 5, 
        z: Math.random() * 5 
      }, true);
    }
    const timer = setTimeout(onFinished, 3000);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <RigidBody ref={rigidBodyRef} colliders="hull" restitution={0.4} friction={0.6}>
      {/* If model isn't available, show a simple d20 shape */}
      {scene ? (
        <primitive object={copiedScene} scale={0.5} />
      ) : (
        <mesh>
          <dodecahedronGeometry args={[1]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
      )}
    </RigidBody>
  );
}

export function DiceRollOverlay({ 
  roll, 
  onComplete 
}: { 
  roll: DiceRollAnimation | null;
  onComplete: () => void;
}) {
  if (!roll) return null;

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 5, 8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <Physics gravity={[0, -9.81, 0]}>
          <RigidBody type="fixed" position={[0, -1, 0]}>
            <CuboidCollider args={[10, 0.5, 10]} />
          </RigidBody>
          <PhysicsDice onFinished={onComplete} />
        </Physics>
      </Canvas>
      {/* Show the result while the animation plays */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[60] bg-black/80 border border-white/10 px-6 py-3 rounded-xl backdrop-blur">
        <div className="text-center">
          <div className="text-xs uppercase text-zinc-400 mb-1">Resultado</div>
          <div className="text-4xl font-bold text-white">D{roll.sides}: {roll.value}</div>
        </div>
      </div>
    </div>
  );
}