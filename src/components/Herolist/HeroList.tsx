import styles from './Herolist.module.scss';
import {HeroCard} from "../HeroCard/HeroCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../services/store/store.ts";
import {fetchHeroes} from "../../services/redusers/heroReducer.ts";
import {useEffect} from "react";



export const HeroList = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {heroListShorts, loading, error} = useSelector(
        (state: RootState) => state.heroReducerSlice
    );

    useEffect(() => {
        dispatch(fetchHeroes())
    }, []);


    if (loading) {
        return <div className={styles.attention}>Загрузка героев...</div>;
    }
    if (error) {
        return <div className={styles.attention}>Загрузка героев...</div>;
    }
    return (
        <div className={`${styles.heroList}`}>
            {heroListShorts.map(({id, name_loc, primary_attr, name, complexity}) => (
                <HeroCard  key={id} id={id} name={name} isFavorite={false} name_loc={name_loc}
                          primary_attr={primary_attr} complexity={complexity}/>
            ))}

        </div>
    );
};
