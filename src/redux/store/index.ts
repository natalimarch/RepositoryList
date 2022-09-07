import { configureStore } from '@reduxjs/toolkit';
import {repoReducer} from "./reducers/repoReducer"

export const store = configureStore({
    reducer: {
        repos: repoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>