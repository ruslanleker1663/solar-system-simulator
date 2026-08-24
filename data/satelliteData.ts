import { PlanetName } from '@/types/planet';

export interface SatelliteConfig {
  name: string;
  radius: number;          // Ukuran visual satelit
  orbitRadius: number;     // Jarak dari induk planet
  orbitSpeed: number;      // Kecepatan revolusi mengelilingi planet
  color: string;           // Warna visual
  description: string;
}

export const SATELLITE_DATA: Record<PlanetName, SatelliteConfig[]> = {
  Mercury: [], // Tidak memiliki satelit alami
  Venus: [],   // Tidak memiliki satelit alami

  // 1. Earth
  Earth: [
    {
      name: 'Lunar (Moon)',
      radius: 0.3,
      orbitRadius: 2.2,
      orbitSpeed: 2.0,
      color: '#dddddd',
      description: 'the one moon of Earth, cycles of revolution 30 days per month, giving effect for tidal wave at the sea, 5th Grattest moon in Solar System'
    }
  ],

  // 2. Mars
  Mars: [
    {
      name: 'Phobos',
      radius: 0.12,
      orbitRadius: 1.3,
      orbitSpeed: 3.5,
      color: '#8c7c6d',
      description: 'Satelit terbesar Mars yang berbentuk tidak beraturan dan mengorbit sangat dekat dengan Mars.'
    },
    {
      name: 'Deimos',
      radius: 0.08,
      orbitRadius: 1.8,
      orbitSpeed: 2.2,
      color: '#a39281',
      description: 'Satelit luar Mars yang lebih kecil dan tampak mirip dengan asteroid yang terperangkap gravitasi.'
    }
  ],

  // 3. Jupiter (Galilean Moons)
  Jupiter: [
    {
      name: 'Io',
      radius: 0.28,
      orbitRadius: 3.6,
      orbitSpeed: 3.0,
      color: '#f5d442',
      description: 'Active vulcano activity at Solar System and Jupiter affect from higest tidal wave, The 4th Gratest Moon in Solar System'
    },
    {
      name: 'Europa',
      radius: 0.24,
      orbitRadius: 4.5,
      orbitSpeed: 2.4,
      color: '#c2d2e3',
      description: 'Have a crystal ice at outer and liquid very cold at the core moon'
    },
    {
      name: 'Ganymede',
      radius: 0.42,
      orbitRadius: 5.6,
      orbitSpeed: 1.8,
      color: '#9e978e',
      description: 'The Gratest moon in Solar System and Jupiter - the diameter > mercury'
    },
    {
      name: 'Callisto',
      radius: 0.38,
      orbitRadius: 6.8,
      orbitSpeed: 1.2,
      color: '#635e58',
      description: '3rd grattest moon in Solar System'
    }
  ],

  // 4. Saturnus
  Saturn: [
    {
      name: 'Enceladus',
      radius: 0.2,
      orbitRadius: 4.8, // Di luar cincin utama
      orbitSpeed: 2.6,
      color: '#ffffff',
      description: 'Satelit es cerah yang menyemburkan geyser air cair ke luar angkasa dari laut di bawah permukaannya.'
    },
    {
      name: 'Rhea',
      radius: 0.26,
      orbitRadius: 5.8,
      orbitSpeed: 1.7,
      color: '#b0a8a0',
      description: 'The Saturn second gratest satellite'
    },
    {
      name: 'Titan',
      radius: 0.4,
      orbitRadius: 7.0,
      orbitSpeed: 1.1,
      color: '#d49b4b',
      description: 'The Grattest moon at Saturn, The Characteristic same with Earth and 2nd Grattest Moon after Ganymede in Solar System'
    }
  ],

  // 5. Uranus
  Uranus: [
    {
      name: 'Miranda',
      radius: 0.15,
      orbitRadius: 2.2,
      orbitSpeed: 3.2,
      color: '#bfae9e',
      description: 'Memiliki bukit dan ngarai raksasa yang tidak teratur, tampak seperti kepingan puzzle yang disatukan kembali.'
    },
    {
      name: 'Ariel',
      radius: 0.22,
      orbitRadius: 2.8,
      orbitSpeed: 2.5,
      color: '#d6c8b8',
      description: 'Satelit paling cerah di antara satelit Uranus lainnya.'
    },
    {
      name: 'Umbriel',
      radius: 0.22,
      orbitRadius: 3.4,
      orbitSpeed: 1.9,
      color: '#5e5852',
      description: 'Satelit tertua dan paling gelap milik Uranus.'
    },
    {
      name: 'Titania',
      radius: 0.3,
      orbitRadius: 4.2,
      orbitSpeed: 1.4,
      color: '#a39d96',
      description: 'Satelit terbesar Uranus yang ditandai dengan ngarai-ngarai besar (chasmata).'
    },
    {
      name: 'Oberon',
      radius: 0.28,
      orbitRadius: 5.0,
      orbitSpeed: 1.0,
      color: '#877f76',
      description: 'Satelit paling luar dari lima satelit utama Uranus.'
    }
  ],

  // 6. Neptunus
  Neptune: [
    {
      name: 'Proteus',
      radius: 0.18,
      orbitRadius: 2.0,
      orbitSpeed: 2.8,
      color: '#706b65',
      description: 'Satelit dalam Neptunus yang berukuran paling besar namun tidak cukup masif untuk membentuk bola sempurna.'
    },
    {
      name: 'Triton',
      radius: 0.32,
      orbitRadius: 3.2,
      orbitSpeed: -1.5, // Orbit retrograd (berlawanan arah rotasi Neptunus)
      color: '#9bbec7',
      description: 'Satelit raksasa unik dengan orbit retrograd (mundur) dan kryovolkanisme (gunung es).'
    },
    {
      name: 'Nereid',
      radius: 0.15,
      orbitRadius: 4.8,
      orbitSpeed: 0.7,
      color: '#7f8d91',
      description: 'Memiliki lintasan orbit paling lonjong (eksentrik) di antara seluruh satelit di Tata Surya.'
    }
  ]
};