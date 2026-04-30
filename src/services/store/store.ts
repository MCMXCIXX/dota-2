import {configureStore} from "@reduxjs/toolkit";
import {heroReducerSlice} from "../redusers/heroReducer.ts";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const store = configureStore({
    reducer: {
        heroReducerSlice: heroReducerSlice.reducer
    }
});


store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('favoriteHeroes', JSON.stringify(state.heroReducerSlice.favoriteHeroes));
    localStorage.setItem('customHero', JSON.stringify(state.heroReducerSlice.customHero));
})
