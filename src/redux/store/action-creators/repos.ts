import axios from 'axios';
import { Dispatch } from 'redux';
import { RepoAction, RepoActionTypes } from './../../../types/types';

export const fetchRepos = (value: string, page: number = 1) => {

    return async (dispatch: Dispatch<RepoAction>) => {
        try {
            dispatch({type: RepoActionTypes.FETCH_REPOS})
            const response = await axios(`https://api.github.com/search/repositories?q=${value}+in:name&page=${page}&sort=stars&order=desc&per_page=30`, {
                method: "GET",
            })
            dispatch({type: RepoActionTypes.FETCH_REPOS_SUCCESS, payload: response.data})
            
            
        } catch(error) {

            dispatch({type: RepoActionTypes.FETCH_REPOS_ERROR, payload: 'Error'})

        }
    }
}