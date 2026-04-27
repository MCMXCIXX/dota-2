import styles from './DetailHero.module.scss';
import {HeroAvatar} from "../../components/HeroAvatar/HeroAvatar.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../services/store/store.ts";
import {loadHeroDetailDataThunk} from "../../services/thunks/heroThunks.ts";
import type {HeroDetail} from "../../types/hero.ts";
import {HeroBio} from "../../components/HeroBio/HeroBio.tsx";


export const DetailHero = () => {
    const {heroID} = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const {heroDetailList, loading, error} = useSelector(
        (state: RootState) => state.heroReducerSlice
    );

    useEffect(() => {
        dispatch(loadHeroDetailDataThunk(Number(heroID)))
    }, [dispatch, heroID]);

    const hero = heroDetailList.find((hero: HeroDetail) => hero.id === Number(heroID));


    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка...</div>;
    if (!hero) return <div>Герой не найден</div>;

    return (
        <div className={'container'}>
            <div className={styles.detailHero}>
                <HeroAvatar className={styles.heroAvatar} {...hero} />
                <HeroBio bioText={hero.bio_loc}/>
            </div>
        </div>

    );
};
