
import {HeroList} from "../../components/Herolist/HeroList.tsx";
import type {RootState} from "../../services/store/store.ts";
import {useSelector} from "react-redux";



export const FavoriteHeroes = () => {
    const favoriteHeroes = useSelector((state: RootState) => state.heroReducerSlice.favoriteHeroes);


    return (
        <div className={'container'}>
            <HeroList filter={(hero) => favoriteHeroes.includes(hero.id)}/>
        </div>
    );
};
