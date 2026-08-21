export type PlanetName =
    | 'Mercury'
    | 'Venus'
    | 'Earth'
    | 'Mars'
    | 'Jupiter'
    | 'Saturn'
    | 'Uranus'
    | 'Neptune';

export interface PlanetDetail {
    title: string;
    type: string;
    description: string;
    diameter: string;
    orbitPeriod: string;
    moon: string;
}

export interface PlanetProps {
    onSelect: (planetName: PlanetName) => void;
}