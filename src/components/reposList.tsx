import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypesSelector";
import SearchRepo from './searchRepo';
import RepoItem from "./repoItem";
import Spinner from './Spinner/Spinner'
import './repoList.css'


const ReposList: React.FC = () => {
    const {repos, loading, error, totalCount} = useTypesSelector(state => state.repos)
    const {fetchRepos} = useActions()

    const [value, setValue] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const changeValue = (value:string) => setValue(value);
    
    const clickHandler = () => {
        value ? fetchRepos(value, currentPage) : alert("Enter the name")
        setCurrentPage(currentPage)
    }

    const pageChanger = (page:number)=>{
        setCurrentPage(page);
        fetchRepos(value, page);
    }

    if (loading) {
        return (
        <>    
        <Spinner/>
        </>)
    }

    if (error) {
        return <h1>{error}</h1>
    }
    
    return <div>
      <SearchRepo 
      value={value}
      changeValue={changeValue}
      clickHandler={clickHandler}
      />
      <RepoItem repos={repos.items}/>
        <div className="Pages">
                <Pagination total={totalCount} show={20} currentPage={currentPage} pageChanger={pageChanger}/>
        </div>
    </div>
}

const Pagination:React.FC<{total:number, show: number, currentPage:number, pageChanger:Function}> = ({total, show, currentPage, pageChanger}) => {
    
    const changePage = (page:number) => (e: React.MouseEvent<HTMLInputElement>) => {
        pageChanger(page);
    }
    const runCallback = (cb:any) => {
        return cb();
    }
    return (
        <>
            {
                runCallback (()=>{
                    const pages = [];
                    total = Math.ceil(total/30);
                    for(let i=1;i<=total;i++) {
                        if(i<=show)   pages.push(i);
                    }

                   return pages.map((page:number)=>{
                    let classes = 'Page';

                    if(page === currentPage) {
                        classes = classes+' active';
                    }

                  return <span className={classes} onClick={changePage(page)}>{page}</span>
                })
                })
            }
            </>
    )
}

export default ReposList