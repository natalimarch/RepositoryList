import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RepoActionCreator from '../redux/store/action-creators/repos'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(RepoActionCreator, dispatch)
}