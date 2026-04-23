export const HERO_ATTR = {
    Strength: 1,
    Agility: 2,
    Intelligence: 3,
    Universal: 4,
} as const;

export type HeroPrimaryAttr = (typeof HERO_ATTR)[keyof typeof HERO_ATTR];

export interface HeroShort {
    id: number;
    name: string;
    name_loc: string;
    primary_attr: HeroPrimaryAttr;
    complexity: number;
}

export interface HeroListResponse {
    heroes: HeroShort[],
}
