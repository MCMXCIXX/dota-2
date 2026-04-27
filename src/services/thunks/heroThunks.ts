import type {HeroDetail} from "../../types/hero.ts";
import type {AppDispatch, RootState} from "../store/store.ts";
import {fetchHeroDetail} from "../redusers/heroReducer.ts";

type Hero = HeroDetail | boolean;

export const loadHeroDetailDataThunk  = (heroID: number) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {

        const state = getState();
        const hero: Hero = state.heroReducerSlice.heroDetailList.find((hero: HeroDetail) => hero.id === heroID) || false;

        if(hero){
            return hero;
        } else {
           return dispatch(fetchHeroDetail(heroID)).unwrap();
        }


    }
}
