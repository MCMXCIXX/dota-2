import styles from './HeroCard.module.scss';
import {
    ATTR_COLORS, ATTR_ICON,
    ATTR_NAMES,
    type HeroShort
} from "../../types/hero.ts";
import {ComplexityDiamonds} from "../ComplexityDiamonds/ComplexityDiamonds.tsx";
import {HeroName} from "../HeroName/HeroName.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {getClearName} from "../../services/utils.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../services/store/store.ts";
import {addToFavoriteHero, deleteFromFavoriteHero} from "../../services/redusers/heroReducer.ts";

interface HeroCardProps {
    hero: HeroShort;
    isFavorite?: boolean;
}




export const HeroCard = (props: HeroCardProps) => {

    const {hero, isFavorite} = props;
    const imageURL = `https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/${getClearName(hero.name)}.png`
    const navigate = useNavigate()
    const location = useLocation()

    const dispatch = useDispatch<AppDispatch>()

    const favoriteOnClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        if(isFavorite) {
            dispatch(deleteFromFavoriteHero(hero.id))
        } else {
            dispatch(addToFavoriteHero(hero.id))
        }


    }


    return (
        <div className={styles['hero-card']} onClick={() => {navigate(`/hero/${hero.id}`, { state: { background: location } });}}>
            <div className={styles['hero-card__image-wrapper']}>
                <img className={styles['hero-card__image']} src={imageURL} alt={hero.name_loc}/>
            </div>
            <div className={styles['hero-card__text']}>
                <HeroName>{hero.name_loc}</HeroName>
                <ul className={styles['hero-card__list']}>
                    <li className={styles['hero-card__item']}>
                        <img className={styles['hero-card__attr-icon']} src={ATTR_ICON[hero.primary_attr]}
                             alt={ATTR_NAMES[hero.primary_attr]}/> <span
                        style={{color: ATTR_COLORS[hero.primary_attr]}}>{ATTR_NAMES[hero.primary_attr]}</span>
                    </li>
                    <li className={styles['hero-card__item']}>
                        Сложность:
                    </li>
                    <li className={styles['hero-card__item']}>
                        <ComplexityDiamonds complexity={hero.complexity} />
                    </li>

                </ul>
                <button onClick={favoriteOnClick} className={styles['hero-card__icon-wrapper']}>
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
