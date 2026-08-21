'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { PlanetName } from '@/types/planet';
import PlanetUI from './PlanetUI';

import { Mercury } from './planets/Mercury';
import { Venus } from './planets/Venus';
import { Earth } from './planets/Earth';
import { Mars } from './planets/Mars';
import { Jupiter } from './planets/Jupiter';
import { Saturn } from './planets/Saturn';
import { Uranus } from './planets/Uranus';
import { Neptune } from './planets/Neptune';

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[4, 32, 32]} />
      <meshBasicMaterial color="#ffcc00" />
      <pointLight intensity={3} distance={300} decay={0} />
    </mesh>
  );
}

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetName | null>(null);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* UI Overlay */}
      <PlanetUI 
        selectedPlanet={selectedPlanet} 
        onClose={() => setSelectedPlanet(null)} 
      />

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 30, 60], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Sun />
        
        {/* Render 8 Planet */}
        <Mercury onSelect={setSelectedPlanet} />
        <Venus onSelect={setSelectedPlanet} />
        <Earth onSelect={setSelectedPlanet} />
        <Mars onSelect={setSelectedPlanet} />
        <Jupiter onSelect={setSelectedPlanet} />
        <Saturn onSelect={setSelectedPlanet} />
        <Uranus onSelect={setSelectedPlanet} />
        <Neptune onSelect={setSelectedPlanet} />

        <OrbitControls makeDefault enableDamping dampingFactor={0.05} />
      </Canvas>
    </div>
  );
}