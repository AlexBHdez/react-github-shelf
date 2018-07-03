import React, { Component } from 'react';
import axios from 'axios';
// COMPONENTS
import Search from '../Search/search';
import UserList from '../UsersList/userList';
// WIDGETS
import Spinner from '../../Widgets/Spinner/spinner';
import BlankState from '../../Widgets/BlankState/blankState';
// CSS
import style from './home.css';

class Home extends Component {

  state = {
    blankState: true,
    loading: false,
    users: Array,
    message: 'start',
  }

  searchByKeyword = (event) => {
    let keyword = event.target.value;

    
    if (keyword.length > 2) {
      this.setState({
        blankState: false,
        loading: true,
      })
      axios.get(`https://api.github.com/search/users?q=${keyword}+in:login`)
        .then((response) => {
          response.data.items.length > 0 ?
          this.setState({
            loading: false,
            users: response.data.items,
          })
          :
          this.setState({
            loading: false,
            blankState: true,
            message: 'no user'
          })
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            loading: false,
            blankState: true,
            message: 'error'
          })
        })
    } else {
      this.setState({
        blankState: true,
        loading: false,
        message: 'start'
      })
    }
  }

  render() {
    return(
      <div className={`container ${style.homeWrapper}`} >
        <Search keywords={ this.searchByKeyword } />
        { this.state.blankState ?
          <BlankState message={this.state.message} />
        :
        this.state.loading ?
          <Spinner />
        :
          <UserList users={this.state.users} />
        }
      </div>
    )
  }
}

export default Home;