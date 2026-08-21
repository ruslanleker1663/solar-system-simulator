'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { PlanetProps } from '@/types/planet';

export function Venus({ onSelect }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const orbitRadius = 11;
  const orbitSpeed = 0.65;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      const angle = state.clock.getElapsedTime() * orbitSpeed * 0.2;
      meshRef.current.position.x = Math.cos(angle) * orbitRadius;
      meshRef.current.position.z = Math.sin(angle) * orbitRadius;
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
      <mesh
        ref={meshRef}
        onPointerDown={(e) => {
          e.stopPropagation();
          onSelect('Venus');
        }}
      >
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial color="#e3bb76" roughness={0.6} />
      </mesh>
    </>
  );
}