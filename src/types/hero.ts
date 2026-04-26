
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


export const ATTR_NAMES: Record<HeroPrimaryAttr, string> = {
    [HERO_ATTR.Strength]: 'Сила',
    [HERO_ATTR.Agility]: 'Ловкость',
    [HERO_ATTR.Intelligence]: 'Интеллект',
    [HERO_ATTR.Universal]: 'Универсальный'
}

export const ATTR_COLORS: Record<HeroPrimaryAttr, string> = {
    [HERO_ATTR.Strength]: '#e74c3c',
    [HERO_ATTR.Agility]: '#2ecc71',
    [HERO_ATTR.Intelligence]: '#3498db',
    [HERO_ATTR.Universal]: '#9b59b6',
};

export const ATTR_ICON: Record<HeroPrimaryAttr, string> = {
    [HERO_ATTR.Strength]: '/icons/attributes/hero_strength.png',
    [HERO_ATTR.Agility]: '/icons/attributes/hero_agility.png',
    [HERO_ATTR.Intelligence]: '/icons/attributes/hero_intelligence.png',
    [HERO_ATTR.Universal]: '/icons/attributes/hero_universal.png',
};

// const COMPLEXITY_NAMES: Record<HeroComplexity, string> = {
//     [HERO_COMPLEXITY.Normal]: 'Легкий',
//     [HERO_COMPLEXITY.Medium]: 'Средний',
//     [HERO_COMPLEXITY.Hard]: 'Сложный',
// };
