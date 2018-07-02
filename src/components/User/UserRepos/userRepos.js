import React from 'react';
// CSS
import style from './userRepos.css';

const UserRepos = (props) => (
  <div className={`list-group ${style.reposWrapper}`}>
    { props.repos.map((repo, index) => {
      return(
        <a href={repo.html_url} target="_blank">
          <div key={index} className={`list-group-item list-group-item-action ${style.repoWrapper}`} >
            <div>
              <h2 className={style.title} >
                {repo.name}
              </h2>
              <p>
                {repo.description}
              </p>
            </div>
            <div className={style.language}>
              {repo.language}
            </div>
          </div>
        </a>
      )
    }) }
  </div>
)

export default UserRepos;