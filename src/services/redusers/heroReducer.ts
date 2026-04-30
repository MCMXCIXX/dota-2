import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {CreateHeroPayload, HeroDetail, HeroShort} from "../../types/hero.ts";
import {request} from "../api.ts";


interface HeroState {
    heroListShorts: HeroShort[];
    heroDetailList: HeroDetail[];
    favoriteHeroes: number[];
    customHero: HeroDetail[];
    searchInput: string;
    loading: boolean;
    error: string | null;
}

const loadFromStorage = <T>(key: string, fallback: T): T => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
}

const initialState: HeroState = {
    heroListShorts: [],
    heroDetailList: [],
    favoriteHeroes: loadFromStorage('favoriteHeroes', []),
    customHero: loadFromStorage('customHero', []),
    searchInput: '',
    loading: false,
    error: null,
}

export const fetchHeroes = createAsyncThunk<HeroShort[], void, { rejectValue: string }>(
    'hero/fetchHeroes',
    async (_, {rejectWithValue}) => {
        try {
            const data = await request('datafeed/herolist?language=russian');
            return (data.result.data.heroes)
        } catch (error) {
            return rejectWithValue;
        }
    }
)

export const fetchHeroDetail = createAsyncThunk<HeroDetail, number, { rejectValue: string }>(
    'hero/fetchHeroDetail',
    async (id, {rejectWithValue}) => {
        try {
            const data = await request(`https://www.dota2.com/datafeed/herodata?language=russian&hero_id=${id}`)
            return data.result.data.heroes[0];
        } catch (error) {
            return rejectWithValue;
        }
    }
)


export const heroReducerSlice = createSlice({
    name: 'heroReducer',
    initialState,
    reducers: {
        addToFavoriteHero: (state, action: PayloadAction<number>) => {
            state.favoriteHeroes.push(action.payload);
        },
        deleteFromFavoriteHero: (state, action: PayloadAction<number>) => {
            state.favoriteHeroes = state.favoriteHeroes.filter((heroID) => heroID !== action.payload);
        },
        updateSearchInput: (state, action: PayloadAction<string>) => {
            state.searchInput = action.payload;
        },
        createHero: (state, action: PayloadAction<CreateHeroPayload>) => {
            const newHero = {
                ...action.payload,
            } as HeroDetail;
            state.customHero.push(newHero);
            state.heroDetailList.push(newHero);
        },
        deleteCustomHero: (state, action: PayloadAction<number>) => {
            state.customHero = state.customHero.filter((hero: HeroDetail) => hero.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHeroes.fulfilled, (state, action: PayloadAction<HeroShort[]>) => {
                state.loading = false;
                state.error = null
                state.heroListShorts = action.payload;
            })
            .addCase(fetchHeroes.rejected, (state, action) => {
                state.error = action.error.message ?? 'Ошибка загрузки';
                state.loading = false;
            })
            .addCase(fetchHeroDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHeroDetail.fulfilled, (state, action: PayloadAction<HeroDetail>) => {
                state.loading = false;
                state.error = null
                state.heroDetailList.push(action.payload);
            })
            .addCase(fetchHeroDetail.rejected, (state, action) => {
                state.error = action.error.message ?? 'Ошибка загрузки';
                state.loading = false;
            })
    }
})


export const {
    addToFavoriteHero, deleteFromFavoriteHero, updateSearchInput, createHero, deleteCustomHero

} = heroReducerSlice.actions;
