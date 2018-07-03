import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// CSS
import style from './userList.css';

const UserList = (props) => (
  <div className={`list-group ${style.usersWrapper}`}>
    { props.users.map((user, index) => {
      return(
        <Link to={`/user/${user.login}`} key={index}>
          <div className={`list-group-item list-group-item-action ${style.flexWrapper}`} >
            <div className={style.flexInfo}>
              <img className={`${style.image}`} src={user.avatar_url} alt={`avatar_${user.login}`}/>
              <h4>{user.login}</h4>
            </div>
            <div>
              <h3 className={style.h3}>Score</h3>
              <span>{Math.floor(user.score)}</span>
            </div>
          </div>
        </Link>
      )
    }) }
  </div>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
}

export default UserList;