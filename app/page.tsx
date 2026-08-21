'use client';

import dynamic from 'next/dynamic';

const SolarSystem = dynamic(() => import('@/components/SolarSystem'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center text-white font-mono">
      Memuat Tata Surya 3D...
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <SolarSystem />
    </main>
  );
}