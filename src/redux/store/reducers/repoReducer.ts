import { RepoAction, RepoState, RepoActionTypes } from "../../../types/types"

const initialState: RepoState = {
    repos: {
        items: []
    },
    loading: false,
    error: null,
    currPage: 1,
    perPage: 30,
    totalCount: 0
}

export const repoReducer = (state = initialState, action: RepoAction): RepoState => {
    switch (action.type) {
        case RepoActionTypes.FETCH_REPOS:
            return {loading: true, error: null, repos: {items:[]}, totalCount: 0}
        case RepoActionTypes.FETCH_REPOS_SUCCESS:
            return {loading: false, error: null, repos: action.payload, totalCount: action.payload.total_count}
        case RepoActionTypes.FETCH_REPOS_ERROR:
            return {loading: false, error: action.payload, repos: {items:[]}, totalCount:0}
        case RepoActionTypes.FETCH_PAGE:
            return {loading: false, error: null, repos: {items:[]}, totalCount: 0}
        default:
            return state

    }
}