import React from 'react';
// CSS
import style from './userList.css';

const UserList = (props) => (
  <div className={`list-group`}>
    { props.users.map((user, index) => {
      return(
        <a href="#" className={`list-group-item list-group-item-action ${style.flexWrapper}`} key={index}>
          <div className={style.flexInfo}>
            <img className={`${style.image}`} src={user.avatar_url} alt={`avatar_${user.login}`}/>
            <h4>{user.login}</h4>
          </div>
          <div>
            <h3 className={style.h3}>Score</h3>
            <span>{Math.floor(user.score)}</span>
          </div>
        </a>
      )
    }) }
  </div>
)

export default UserList;