'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { PlanetProps } from '@/types/planet';

export function Saturn({ onSelect }: PlanetProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const orbitRadius = 32;
  const orbitSpeed = 0.18;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.7;
      const angle = state.clock.getElapsedTime() * orbitSpeed * 0.2;
      groupRef.current.position.x = Math.cos(angle) * orbitRadius;
      groupRef.current.position.z = Math.sin(angle) * orbitRadius;
    }
  });

  const points: [number, number, number][] = [];
  for (let i = 0; i <= 64; i++) {
    const theta = (i / 64) * Math.PI * 2;
    points.push([Math.cos(theta) * orbitRadius, 0, Math.sin(theta) * orbitRadius]);
  }

  return (
    <>
      <Line points={points} color="#ffffff" opacity={0.15} transparent lineWidth={1} />
      <group
        ref={groupRef}
        onPointerDown={(e) => {
          e.stopPropagation();
          onSelect('Saturn');
        }}
      >
        {/* Body Planet */}
        <mesh>
          <sphereGeometry args={[2.0, 32, 32]} />
          <meshStandardMaterial color="#e2bf7d" roughness={0.6} />
        </mesh>
        {/* Cincin Saturnus */}
        <mesh rotation-x={Math.PI / 2}>
          <ringGeometry args={[2.5, 4.0, 64]} />
          <meshBasicMaterial color="#a68c59" side={THREE.DoubleSide} transparent opacity={0.8} />
        </mesh>
      </group>
    </>
  );
}