export interface RepoState {
    repos: {
        items: any[]
    };
    loading: boolean;
    error: null | string;
    currPage?: number,
    perPage?: number,
    totalCount: number
}

export interface searchState {
    value: string;
    clickHandler(e: React.MouseEvent<HTMLButtonElement>): void;
    changeValue(value:string): void;
}

export enum RepoActionTypes {
    FETCH_REPOS = 'FETCH_REPOS',
    FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
    FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR',
    FETCH_PAGE = 'FETCH_PAGE',
    FETCH_TOTAL = 'FETCH_TOTAL'
}

interface FetchReposAction {
    type: RepoActionTypes.FETCH_REPOS;
}

interface FetchReposSuccessAction {
    type: RepoActionTypes.FETCH_REPOS_SUCCESS;
    payload: {
        items: any[],
        total_count: number
    }
}

interface FetchReposErrorAction {
    type: RepoActionTypes.FETCH_REPOS_ERROR;
    payload: string
}

interface FetchReposCurrPageAction {
    type: RepoActionTypes.FETCH_PAGE;
    payload: number
}

interface FetchReposTotalAction {
    type: RepoActionTypes.FETCH_TOTAL;
    payload: number
}

export type RepoAction = FetchReposAction | FetchReposSuccessAction | FetchReposErrorAction | FetchReposCurrPageAction | FetchReposTotalAction