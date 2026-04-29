import styles from './FavoriteHeroes.module.scss';
import {HeroList} from "../../components/Herolist/HeroList.tsx";
import type {RootState} from "../../services/store/store.ts";
import {useSelector} from "react-redux";


export const FavoriteHeroes = () => {
    const favoriteHeroes = useSelector((state: RootState) => state.heroReducerSlice.favoriteHeroes);


    return (
        <div className={styles.container}>
            <HeroList filter={(hero) => favoriteHeroes.includes(hero.id)}/>
        </div>
    );
};
