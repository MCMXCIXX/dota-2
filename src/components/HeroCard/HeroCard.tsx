import styles from './HeroCard.module.scss';
import type {HeroShort} from "../../types/hero.ts";

interface HeroCardProps extends HeroShort {
    isFavorite: boolean;
}
export const HeroCard = (props: HeroCardProps) => {

    const { name_loc, primary_attr, isFavorite, complexity, name } = props;
    const imageURL = `https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.toLowerCase().replace('npc_dota_hero_', '')}.png`
    return (
        <div className={styles['hero-card']}>
            <div className={styles['hero-card__image-wrapper']}>
                <img className={styles['hero-card__image']} src={imageURL} alt={name_loc}/>
            </div>
            <h2 className={styles['hero-card__name']}>{name_loc}</h2>
            <ul className={styles['hero-card__list']}>
                <li className={styles['hero-card__item']}>
                    Основной атрибут: {primary_attr}
                </li>
                <li className={styles['hero-card__item']}>
                    Сложность персонажа: {complexity}
                </li>
            </ul>
            <div className={styles['hero-card__icon-wrapper']}>
                {isFavorite ?
                    (<img className={styles['hero-card__icon']}  src="/heart-favorite.svg" alt="Добавить в избранное"/>) :
                    (<img className={styles['hero-card__icon']} src="/heart-no-favorite.svg" alt="Убрать из избраного"/>)
                }
            </div>
        </div>
    );
};
