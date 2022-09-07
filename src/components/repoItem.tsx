import React from "react"
import './repoItem.css'
import star from './image/GoldStar.png'
import link from './image/GH.png'

export interface RepoState {
    repos: any[];
}

const repoItem: React.FC<RepoState> = ({repos}) => {
      const elements = repos.map(repo => <li className="Item" key={repo.id}>
        <span className="Name">{repo.name}</span>
        <div className="Score">
        <img src={star} alt="star" width={20} style={{verticalAlign: 'middle'}}/>
        <span className="ScoreItem">{repo.stargazers_count}</span>
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="Link"><img src={link} alt="link" width={20} style={{verticalAlign: 'middle'}}/></a>
        </div>
        </li>)
    return <ul className="List">{elements}</ul>
} 

export default repoItem