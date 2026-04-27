
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

export interface HeroDetail extends HeroShort {
    order_id:          number;
    bio_loc:           string;
    hype_loc:          string;
    npe_desc_loc:      string;
    facets:            any[];
    str_base:          number;
    str_gain:          number;
    agi_base:          number;
    agi_gain:          number;
    int_base:          number;
    int_gain:          number;
    attack_capability: number;
    role_levels:       number[];
    damage_min:        number;
    damage_max:        number;
    attack_rate:       number;
    attack_range:      number;
    projectile_speed:  number;
    armor:             number;
    magic_resistance:  number;
    movement_speed:    number;
    turn_rate:         number;
    sight_range_day:   number;
    sight_range_night: number;
    max_health:        number;
    health_regen:      number;
    max_mana:          number;
    mana_regen:        number;
    abilities:         Ability[];
    talents:           Ability[];
    facet_abilities:   any[];
}

export interface Ability {
    id:                            number;
    name:                          string;
    name_loc:                      string;
    desc_loc:                      string;
    lore_loc:                      string;
    notes_loc:                     string[];
    shard_loc:                     string;
    scepter_loc:                   string;
    facets_loc:                    string[];
    type:                          number;
    behavior:                      string;
    target_team:                   number;
    target_type:                   number;
    flags:                         number;
    damage:                        number;
    immunity:                      number;
    dispellable:                   number;
    max_level:                     number;
    cast_ranges:                   number[];
    cast_points:                   number[];
    channel_times:                 number[];
    cooldowns:                     number[];
    durations:                     number[];
    damages:                       number[];
    mana_costs:                    number[];
    gold_costs:                    any[];
    health_costs:                  any[];
    is_item:                       boolean;
    ability_has_scepter:           boolean;
    ability_has_shard:             boolean;
    ability_is_granted_by_scepter: boolean;
    ability_is_granted_by_shard:   boolean;
    ability_is_innate:             boolean;
    item_cost:                     number;
    item_initial_charges:          number;
    item_neutral_tier:             number;
    item_stock_max:                number;
    item_stock_time:               number;
    item_quality:                  number;
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
