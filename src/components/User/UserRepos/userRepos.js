import React from 'react';
import PropTypes from 'prop-types';
// CSS
import style from './userRepos.css';

const UserRepos = (props) => (
  <div className={`list-group ${style.reposWrapper}`}>
    { props.repos.map((repo, index) => {
      return(
        <a href={repo.html_url} target="_blank" key={index} >
          <div className={`list-group-item list-group-item-action ${style.repoWrapper}`} >
            <div>
              <h2 className={style.title} >
                {repo.name}
              </h2>
              <p className={style.description}>
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

UserRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserRepos;