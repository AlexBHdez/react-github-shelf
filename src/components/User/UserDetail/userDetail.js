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

        axios.get(`https://api.github.com/users/${response.data.login}/repos?per_page=250`)
          .then((response) => {
            this.setState({
              login,
              avatar_url,
              bio,
              location,
              public_repos,
              blog,
              followers,
              repos: response.data
            })
          })
          
      })
  }

  render() {
    return(
      <div className={`container ${style.userWrapper}`}>
        <UserBox {...this.state} />
        <UserRepos repos={this.state.repos} />
      </div>
    )
  }
}

export default UserDetail;