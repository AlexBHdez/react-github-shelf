import React from 'react';

const UserList = (props) => (
  <div className={`list-group`}>
    { props.users.map((user, index) => {
      return(
        <a href="#" className={`list-group-item list-group-item-action`} key={index}>{ user.login }</a>
      )
    }) }
  </div>
)

export default UserList;