import React from 'react';

const UserRepos = (props) => (
  <div className="list-group">
    { props.repos.map((repo, index) => {
      return(
        <div key={index} className="list-group-item list-group-item-action" >
          {repo.name} {repo.description}
        </div>
      )
    }) }
  </div>
)

export default UserRepos;