import React, { Component } from 'react';
import axios from 'axios';
// COMPONENTS
import Search from '../Search/search';
import UserList from '../UsersList/userList';
// CSS
import style from './home.css';

class Home extends Component {

  state = {
    loading: false,
    users: [],
  }

  searchByKeyword = (event) => {
    let keyword = event.target.value;
    this.setState({
      loading: true,
    })
    axios.get(`https://api.github.com/search/users?q=${keyword}+in:login`)
      .then((response) => {
        console.log(response.data.items);
        this.setState({
          loading: false,
          users: response.data.items,
        })
      })
  }

  render() {
    console.log(this.state.loading);
    return(
      <div className={`container ${style.homeWrapper}`} >
        <Search keywords={ this.searchByKeyword } />
        { this.state.loading ?
          <div className={style.spinner}></div>
          :
          <UserList users={this.state.users} />
        }
      </div>
    )
  }
}

export default Home;