import styles from './Herolist.module.scss';
import {HeroCard} from "../HeroCard/HeroCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../services/store/store.ts";
import {fetchHeroes, updateSearchInput} from "../../services/redusers/heroReducer.ts";
import {useEffect} from "react";
import type {HeroShort} from "../../types/hero.ts";

interface HeroListProps {
    filter?: (hero: HeroShort) => boolean;
}

export const HeroList = (props: HeroListProps) => {
    const {filter} = props
    const dispatch = useDispatch<AppDispatch>();
    const {heroListShorts, favoriteHeroes, loading, error, searchInput, customHero} = useSelector(
        (state: RootState) => state.heroReducerSlice
    );


    useEffect(() => {
        if (heroListShorts.length === 0) {
            dispatch(fetchHeroes());
        }
        return () => {
            dispatch(updateSearchInput(''))
        }
    }, []);

    const filteredHeroes = heroListShorts.filter((hero) => {
        const matchesSearch = hero.name_loc.toLowerCase().includes(searchInput.toLowerCase());
        const matchesFilter = filter ? filter(hero) : true;
        return matchesSearch && matchesFilter;
    });


    if (loading) {
        return <div className={styles.attention}>Загрузка героев...</div>;
    }
    if (error) {
        return <div className={styles.attention}>Загрузка героев...</div>;
    }

    return (
        <>
            <div className={`${styles.heroList}`}>
                {filteredHeroes.map((hero) => {
                    const isFavorite = favoriteHeroes.includes(hero.id);
                    return <HeroCard key={hero.id} isFavorite={isFavorite} hero={hero}/>
                })}
            </div>

            {(customHero.length> 0 &&

                <>
                    <h2 className={styles.title}>Кастомные герои</h2>
                    <div className={`${styles.heroList}`}>
                        {customHero.map((hero) => {
                            const isFavorite = favoriteHeroes.includes(hero.id);
                            return <HeroCard key={hero.id} isFavorite={isFavorite} hero={hero}/>
                        })}
                    </div>
                </>

            )}

        </>
    )
        ;
};
