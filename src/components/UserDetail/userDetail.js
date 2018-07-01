import React, { Component } from 'react';
import axios from 'axios';
// CSS
import * as FontAwesome from 'react-icons/lib/fa';
import style from './userDetail.css';

class UserDetail extends Component {

  state = {
    login: '',
    avatar_url: '',
    bio: '',
    location: '',
    public_repos: '',
    blog: '',
    followers: '',
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
        <div className={`list-group-item ${style.flexWrapper}`}>
          <div className={style.flexInfo}>
            <img className={style.image} src={this.state.avatar_url} alt="wola"/>
            <div className={style.flexBio}>
              <h4>{this.state.login}</h4>
              <p>{this.state.bio}</p>
              <ul className={style.flexMoreInfo}>
                <li>
                  <FontAwesome.FaMapMarker />
                  <span className={style.moreInfoItem}>{this.state.location}</span>
                </li>
                <li>
                  <FontAwesome.FaGithub />
                  <span className={style.moreInfoItem}>{this.state.public_repos}</span>
                </li>
                <li>
                  <FontAwesome.FaUser />
                  <span className={style.moreInfoItem}>{this.state.followers}</span>
                </li>
                <li>
                  <a href={this.state.blog}>
                    <FontAwesome.FaExternalLink />
                    <span className={style.moreInfoItem}>{this.state.blog.slice(4)}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserDetail;