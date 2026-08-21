import { PlanetName, PlanetDetail } from '@/types/planet';

export const PLANET_DETAILS: Record<PlanetName, PlanetDetail> = {
  Mercury: {
    title: "Mercury",
    type: "Solid Planets",
    description: "The Smaller Planets in Solar System at beside The Sun",
    diameter: "4.879 km",
    orbitPeriod: "88 days",
    moon: "None"
  },
  Venus: {
    title: "Venus",
    type: "Solid Planets",
    description: "The Hotters Planet and the people calls stars and twins of the earth, the opposite rotation for all planets, Revolution fastest while a Rotation",
    diameter: "12.104 km",
    orbitPeriod: "225 days",
    moon: "None"
  },
  Earth: {
    title: "Mundi",
    type: "Solid Planets",
    description: "The Planets of Solar System for life the humanity and other",
    diameter: "12.742 km",
    orbitPeriod: "365.25 days",
    moon: "Moon"
  },
  Mars: {
    title: "Marte",
    type: "Solid Planets",
    description: "The Reds planet, the Greek Mythology of the wars",
    diameter: "6.779 km",
    orbitPeriod: "687 days",
    moon: "Phobos and Deimos"
  },
  Jupiter: {
    title: "Jupiter",
    type: "Jovian Planets",
    description: "The Biggest Planet in Solar System, The Giant tornado is greating spot phenomenon, Ganymede is a biggest moon in this planet and solar system",
    diameter: "139.822 km",
    orbitPeriod: "12 years",
    moon: "Ganymede, Callisto, Io, Europa, oth"
  },
  Saturn: {
    title: "Saturno",
    type: "Jovian Planets",
    description: "The Grattest Ring of Solar System and other called the beautifull planet, Titan is the Moon very Biggest at this planet",
    diameter: "116.460 km",
    orbitPeriod: "29.5 years",
    moon: "Titan, Enceladus, Rhea, Iapetus, oth"
  },
  Uranus: {
    title: "Urano",
    type: "Jovian Planets",
    description: "The different rotation for other planets because the rotation from North to South same of Bowling",
    diameter: "50.724 km",
    orbitPeriod: "84 years",
    moon: "Titania, Oberon, Miranda, Ariel, Umbriel, oth"
  },
  Neptune: {
    title: "Neptuno",
    type: "Jovian Planets",
    description: "Planet paling luar di Tata Surya, terkenal dengan warna birunya yang pekat dan angin tercepat di Tata Surya.",
    diameter: "49.244 km",
    orbitPeriod: "165 years",
    moon: "Triton, Proteus, Nereid, oth"
  }
};