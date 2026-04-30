import type {HeroComplexity, HeroDetail, HeroPrimaryAttr} from "../types/hero.ts";

export const getClearName = (name: string) => {
    return name.toLowerCase().replace('npc_dota_hero_', '')
}


interface DebouncedFunction {
    (...args: any[]): any;
    cancel: () => void;
}

export function debounce(func: (...args: any[]) => void, delay: number): DebouncedFunction {
    let timeoutId: ReturnType<typeof setTimeout>; // идентификатор текущего таймера

    // Возвращаем обёртку, которая будет вызываться вместо оригинальной функции
    const debouncedFn = function (...args: any[]) {
        // Если таймер уже был запущен, сбрасываем его
        clearTimeout(timeoutId);

        // Устанавливаем новый таймер, который вызовет func через delay мс
        timeoutId = setTimeout(() => {
            func(...args); // вызываем оригинальную функцию с сохранением контекста и аргументов
        }, delay);
    } as DebouncedFunction;

    debouncedFn.cancel = () => {               // ← добавляем cancel
        clearTimeout(timeoutId);
    };

    return debouncedFn
}

export const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const buildFullHero = (data: {
    name_loc: string;
    primary_attr: HeroPrimaryAttr;
    complexity: HeroComplexity;
    bio_loc: string;
}, id: number): HeroDetail => ({
    id,
    name: 'npc_dota_hero_pudge', // всегда pudge — для рендера фото
    name_loc: data.name_loc,
    primary_attr: data.primary_attr,
    complexity: data.complexity,
    order_id: id,
    bio_loc: data.bio_loc,
    hype_loc: '',
    npe_desc_loc: data.bio_loc.slice(0, 100),
    facets: [],
    str_base: random(15, 30),
    str_gain: random(1, 4),
    agi_base: random(15, 30),
    agi_gain: random(1, 4),
    int_base: random(15, 30),
    int_gain: random(1, 4),
    attack_capability: 1,
    role_levels: [random(0, 3), random(0, 3), random(0, 3), random(0, 3), random(0, 3)],
    damage_min: random(40, 60),
    damage_max: random(60, 80),
    attack_rate: 1.7,
    attack_range: random(150, 600),
    projectile_speed: 900,
    armor: random(0, 5),
    magic_resistance: 25,
    movement_speed: random(280, 320),
    turn_rate: 0.6,
    sight_range_day: 1800,
    sight_range_night: 800,
    max_health: random(500, 700),
    health_regen: random(1, 3),
    max_mana: random(200, 400),
    mana_regen: random(0, 2),
    abilities: [],
    talents: [],
    facet_abilities: [],
});
