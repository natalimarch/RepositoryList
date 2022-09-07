import { repoReducer } from './repoReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    repos: repoReducer,
    page: repoReducer,
    perPage: repoReducer,
    totalCount: repoReducer
})

export type RootState = ReturnType<typeof rootReducer>