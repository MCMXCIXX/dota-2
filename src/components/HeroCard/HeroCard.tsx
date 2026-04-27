import styles from './HeroCard.module.scss';
import {
    ATTR_COLORS, ATTR_ICON,
    ATTR_NAMES,
    type HeroShort
} from "../../types/hero.ts";
import {ComplexityDiamonds} from "../ComplexityDiamonds/ComplexityDiamonds.tsx";
import {HeroName} from "../HeroName/HeroName.tsx";

interface HeroCardProps extends HeroShort {
    isFavorite: boolean;
}




export const HeroCard = (props: HeroCardProps) => {

    const {name_loc, primary_attr, isFavorite, complexity, name} = props;
    const imageURL = `https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.toLowerCase().replace('npc_dota_hero_', '')}.png`



    return (
        <div className={styles['hero-card']}>
            <div className={styles['hero-card__image-wrapper']}>
                <img className={styles['hero-card__image']} src={imageURL} alt={name_loc}/>
            </div>
            <div className={styles['hero-card__text']}>
                <HeroName>{name_loc}</HeroName>
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
