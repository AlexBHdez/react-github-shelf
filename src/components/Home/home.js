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
    users: [],
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
          this.setState({
            loading: false,
            users: response.data.items,
          })
        })
    } else {
      this.setState({
        blankState: true,
        loading: false,
      })
    }
  }

  render() {
    return(
      <div className={`container ${style.homeWrapper}`} >
        <Search keywords={ this.searchByKeyword } />
        { this.state.blankState ?
          <BlankState message={`If you start typing in the input below (more than 2 letters please), I will search for you in the Github Users Database.`} />
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