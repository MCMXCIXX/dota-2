import styles from './Herolist.module.scss';
import {HeroCard} from "../HeroCard/HeroCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../services/store/store.ts";
import {fetchHeroes} from "../../services/redusers/heroReducer.ts";
import {useEffect} from "react";
import type {HeroShort} from "../../types/hero.ts";

interface HeroListProps {
    filter?: (hero: HeroShort) => boolean;
}

export const HeroList = (props: HeroListProps) => {
    const {filter} = props
    const dispatch = useDispatch<AppDispatch>();
    const {heroListShorts, favoriteHeroes, loading, error} = useSelector(
        (state: RootState) => state.heroReducerSlice
    );


    useEffect(() => {
        if (heroListShorts.length === 0) {
            dispatch(fetchHeroes());
        }
    }, []);

    const filteredHeroes = filter ? heroListShorts.filter(filter) : heroListShorts;


    if (loading) {
        return <div className={styles.attention}>Загрузка героев...</div>;
    }
    if (error) {
        return <div className={styles.attention}>Загрузка героев...</div>;
    }

    return (
        <div className={`${styles.heroList}`}>
            {filteredHeroes.map((hero) => {
                const isFavorite = favoriteHeroes.includes(hero.id);
                return <HeroCard isFavorite={isFavorite} hero={hero}/>
            })}

        </div>
    );
};
