'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { PlanetName } from '@/types/planet';
import { SATELLITE_DATA } from '@/data/satelliteData';

interface SatelliteGroupProps {
  planetName: PlanetName;
}

export function SatelliteGroup({ planetName }: SatelliteGroupProps) {
  const satellites = SATELLITE_DATA[planetName] || [];
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Animasi pergerakan setiap satelit mengelilingi planetnya
    groupRef.current.children.forEach((child, index) => {
      // Melewati Mesh garis orbit
      if (child.type === 'Line') return; 

      const satData = satellites[Math.floor(index / 2)]; // Pasangan orbit line & mesh
      if (satData) {
        const angle = time * satData.orbitSpeed;
        child.position.x = Math.cos(angle) * satData.orbitRadius;
        child.position.z = Math.sin(angle) * satData.orbitRadius;
        child.rotation.y += delta * 0.8;
      }
    });
  });

  if (satellites.length === 0) return null;

  return (
    <group ref={groupRef}>
      {satellites.map((sat) => {
        // Buat garis lintasan orbit satelit
        const points: [number, number, number][] = [];
        for (let i = 0; i <= 32; i++) {
          const theta = (i / 32) * Math.PI * 2;
          points.push([Math.cos(theta) * sat.orbitRadius, 0, Math.sin(theta) * sat.orbitRadius]);
        }

        return (
          <group key={sat.name}>
            {/* Garis lintasan orbit di sekeliling planet */}
            <Line points={points} color="#ffffff" opacity={0.1} transparent lineWidth={1} />

            {/* Mesh Satelit/Bulan */}
            <mesh>
              <sphereGeometry args={[sat.radius, 16, 16]} />
              <meshStandardMaterial color={sat.color} roughness={0.8} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
