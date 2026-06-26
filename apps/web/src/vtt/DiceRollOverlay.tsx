import { useMemo, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Physics, RigidBody, CuboidCollider, RapierRigidBody } from '@react-three/rapier';

export type DiceRollAnimation = {
  id: number;
  sides: number;
  value: number;
};

const getDiceModelPath = (sides: number): string => {
  switch (sides) {
    case 4: return '/models/D4_3D_Red.glb';
    case 6: return '/models/D6_3D_Red.glb';
    case 8: return '/models/D8_3D_Red.glb';
    case 10: return '/models/D10_3D_Red.glb';
    case 12: return '/models/D12_3D_Red.glb';
    case 20:
    default: return '/models/D20_3D_Red.glb';
  }
};

function PhysicsDice({ onFinished, sides }: { onFinished: () => void, sides: number }) {
  const rigidBodyRef = useRef<RapierRigidBody>(null);
  const modelPath = getDiceModelPath(sides);
  const { scene } = useGLTF(modelPath, true); 
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  const hasImpulsed = useRef(false);

  useFrame(() => {
    // Verifica se o corpo existe e se ainda não aplicamos o impulso
    if (rigidBodyRef.current && !hasImpulsed.current) {
      
      // Força o objeto a acordar antes de aplicar a força
      rigidBodyRef.current.wakeUp();

      rigidBodyRef.current.applyImpulse({ 
        x: (Math.random() - 0.5) * 5, 
        y: 5, 
        z: (Math.random() - 0.5) * 5 
      }, true);
      
      rigidBodyRef.current.applyTorqueImpulse({ 
        x: Math.random() * 2, 
        y: Math.random() * 2, 
        z: Math.random() * 2 
      }, true);

      // Marca como feito
      hasImpulsed.current = true;
    }
  });

  return (
    <RigidBody 
      ref={rigidBodyRef}
      onSleep={() => onFinished()}
      colliders="hull" 
      restitution={0.4} 
      friction={0.6}
      position={[0, 2, 0]} // Começa um pouco acima do chão
    >
      {scene ? (
        <primitive object={copiedScene} scale={0.8} />
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
    <div className="absolute inset-0 z-50">
      <Canvas 
          camera={{ position: [0, 5, 8], fov: 50 }}
          style={{ pointerEvents: 'none' }} // Adicione esta linha aqui
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        
        {/* Gravidade normal, puxando apenas para baixo */}
        <Physics gravity={[-0.5, -9.81, -0.5]}>
          
          {/* Chão centralizado e maior */}
          <RigidBody type="fixed" position={[0, -1, 0]}>
            <CuboidCollider args={[10, 0.5, 10]} />
          </RigidBody>
          
          <PhysicsDice onFinished={onComplete} sides={roll.sides} />
        </Physics>
      </Canvas>
    </div>
  );
}