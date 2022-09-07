import React, {FC} from 'react';
import { searchState } from '../types/types';
import './searchRepo.css'

const SearchRepo: FC<searchState> = ({value, clickHandler, changeValue}) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value);
    }

    return (
        <div>
            <form className='Form'>
            <input className="Input" value={value} onInput={changeHandler} type="text" placeholder="Enter the name"/>
            <button className="FormBtn" onClick={clickHandler}>Search</button>
            </form>
        </div>
    );
};

export default SearchRepo;