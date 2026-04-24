import styles from './HeroCard.module.scss';
import {
    HERO_ATTR,
    type HeroPrimaryAttr,
    type HeroShort
} from "../../types/hero.ts";
import {ComplexityDiamonds} from "../ComplexityDiamonds/ComplexityDiamonds.tsx";

interface HeroCardProps extends HeroShort {
    isFavorite: boolean;
}

const ATTR_NAMES: Record<HeroPrimaryAttr, string> = {
    [HERO_ATTR.Strength]: 'Сила',
    [HERO_ATTR.Agility]: 'Ловкость',
    [HERO_ATTR.Intelligence]: 'Интеллект',
    [HERO_ATTR.Universal]: 'Универсальный'
}

const ATTR_COLORS: Record<HeroPrimaryAttr, string> = {
    [HERO_ATTR.Strength]: '#e74c3c',
    [HERO_ATTR.Agility]: '#2ecc71',
    [HERO_ATTR.Intelligence]: '#3498db',
    [HERO_ATTR.Universal]: '#9b59b6',
};

const ATTR_ICON: Record<HeroPrimaryAttr, string> = {
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


export const HeroCard = (props: HeroCardProps) => {

    const {name_loc, primary_attr, isFavorite, complexity, name} = props;
    const imageURL = `https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.toLowerCase().replace('npc_dota_hero_', '')}.png`



    return (
        <div className={styles['hero-card']}>
            <div className={styles['hero-card__image-wrapper']}>
                <img className={styles['hero-card__image']} src={imageURL} alt={name_loc}/>
            </div>
            <div className={styles['hero-card__text']}>
                <h2 className={styles['hero-card__name']}>{name_loc}</h2>
                <ul className={styles['hero-card__list']}>
                    <li className={styles['hero-card__item']}>
                        <img className={styles['hero-card__attr-icon']} src={ATTR_ICON[primary_attr]}
                             alt={ATTR_NAMES[primary_attr]}/> <span
                        style={{color: ATTR_COLORS[primary_attr]}}>{ATTR_NAMES[primary_attr]}</span>
                    </li>
                    <li className={styles['hero-card__item']}>
                        Сложность:
                    </li>
                    <li className={styles['hero-card__item']}>
                        <ComplexityDiamonds complexity={complexity} />
                    </li>

                </ul>
                <button className={styles['hero-card__icon-wrapper']}>
                    {isFavorite ?
                        (<img className={styles['hero-card__icon']} src="/heart-no-favorite.svg"
                              alt="Добавить в избранное"/>) :
                        (<img className={styles['hero-card__icon']} src="/heart-favorite.svg"
                              alt="Убрать из избраного"/>)
                    }
                </button>
            </div>

        </div>
    );
};
