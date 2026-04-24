export const HERO_ATTR = {
    Strength: 0,
    Agility: 1,
    Intelligence: 2,
    Universal: 3,
} as const;

export type HeroPrimaryAttr = (typeof HERO_ATTR)[keyof typeof HERO_ATTR];

export const HERO_COMPLEXITY = {
    Normal: 1,
    Medium: 2,
    Hard: 3,
} as const;

export type HeroComplexity = (typeof HERO_COMPLEXITY)[keyof typeof HERO_COMPLEXITY];

export interface HeroShort {
    id: number;
    name: string;
    name_loc: string;
    primary_attr: HeroPrimaryAttr;
    complexity: HeroComplexity;
}

export interface HeroListResponse {
    heroes: HeroShort[],
}
