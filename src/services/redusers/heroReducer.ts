import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {HeroShort} from "../../types/hero.ts";
import {request} from "../api.ts";


interface HeroState {
    heroListShorts: HeroShort[];
    loading: boolean;
    error: string | null;
}

const initialState: HeroState = {
    heroListShorts: [],
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

export const fetchHeroDetail = createAsyncThunk<>


export const heroReducerSlice = createSlice({
    name: 'heroReducer',
    initialState,
    reducers: {

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
    }
})


export const {
} = heroReducerSlice.actions;
