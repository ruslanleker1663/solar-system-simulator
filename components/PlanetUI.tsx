'use client';

import { PLANET_DETAILS } from '@/data/planetData';
import { PlanetName } from '@/types/planet';
import { X } from 'lucide-react';

interface PlanetUIProps {
  selectedPlanet: PlanetName | null;
  onClose: () => void;
}

export default function PlanetUI({ selectedPlanet, onClose }: PlanetUIProps) {
  if (!selectedPlanet) return null;

  const info = PLANET_DETAILS[selectedPlanet];

  return (
    <div className="absolute top-6 right-6 w-80 bg-black/80 backdrop-blur-md text-white p-6 rounded-2xl border border-white/10 shadow-2xl transition-all animate-in fade-in slide-in-from-right-4 z-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-wide">{info.title}</h2>
          <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">{info.type}</span>
        </div>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <p className="text-sm text-gray-300 mb-6 leading-relaxed">
        {info.description}
      </p>

      <div className="space-y-2 border-t border-white/10 pt-4 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-400">Diameter:</span>
          <span className="font-mono font-medium">{info.diameter}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Orbit Periods:</span>
          <span className="font-mono font-medium">{info.orbitPeriod}</span>
        </div>
        <div className="flex justify-between">
            <span className='text-gray-400'>Moons or Satelit</span>
            <span className='font-mono font-medium'>{info.moon}</span>
        </div>
      </div>
    </div>
  );
}