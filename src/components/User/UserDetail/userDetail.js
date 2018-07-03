import React, { Component } from 'react';
import axios from 'axios';
// CSS
import style from './userDetail.css';
// COMPONENTS
import UserBox from '../UserBox/userBox';
import UserRepos from '../UserRepos/userRepos';
// WIDGETS
import Spinner from '../../../Widgets/Spinner/spinner';
import BlankState from '../../../Widgets/BlankState/blankState';

class UserDetail extends Component {

  state = {
    blankState: false,
    loading: true,
    login: String,
    avatar_url: String,
    bio: String,
    location: String,
    public_repos: Number,
    blog: String,
    followers: Number,
    repos: Array,
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
              loading: false,
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
          .catch((err) => {
            console.log(err);
            this.setState({
              loading: false,
              blankState: true,
            })
          })
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
          blankState: true,
        })
      })
  }

  render() {
    return(
    <div className={`container ${style.userWrapper}`}>
      { this.state.blankState ? 
        <BlankState message={'error'} />
      :
      this.state.loading ?
        <Spinner />
      :
        <div>
          <UserBox {...this.state} />
          <UserRepos repos={this.state.repos} />
        </div>
      }
    </div>
    )
  }

}

export default UserDetail;