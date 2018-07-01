import React, { Component } from 'react';
import axios from 'axios';
// CSS
import style from './userDetail.css';
// COMPONENTS
import UserBox from '../UserBox/userBox';
import UserRepos from '../UserRepos/userRepos';

class UserDetail extends Component {

  state = {
    login: '',
    avatar_url: '',
    bio: '',
    location: '',
    public_repos: '',
    blog: '',
    followers: '',
    repos: []
  }

  componentWillMount() {
    let username = this.props.match.params.username;
    axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
        const {
          login,
          avatar_url,
          bio,
          location,
          public_repos,
          blog,
          followers
        } = response.data;
          
        this.setState({
          login,
          avatar_url,
          bio,
          location,
          public_repos,
          blog,
          followers
        })
      })
  }

  render() {
    return(
      <div className={`container ${style.userWrapper}`}>
        <UserBox {...this.state} />
        <UserRepos />
      </div>
    )
  }
}

export default UserDetail;