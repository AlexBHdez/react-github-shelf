import React, { Component } from 'react';
import axios from 'axios';
// COMPONENTS
import Search from '../Search/search';
import UserList from '../UsersList/userList';
// CSS
import style from './home.css';

class Home extends Component {

  state = {
    users: [],
  }

  searchByKeyword = (event) => {
    let keyword = event.target.value;
    axios.get(`https://api.github.com/search/users?q=${keyword}+in:login`)
      .then((response) => {
        console.log(response);
        this.setState({
          users: response.data.items,
        })
      })
  }

  render() {
    return(
      <div className={`container ${style.homeWrapper}`} >
        <Search keywords={ this.searchByKeyword } />
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default Home;