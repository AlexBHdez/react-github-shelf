import React from 'react';
import PropTypes from 'prop-types';
// CSS
import * as FontAwesome from 'react-icons/lib/fa';
import style from './userBox.css';

const UserBox = (props) => {
  return(
    <div className={`list-group-item ${style.flexWrapper}`}>
      <div className={style.flexInfo}>
        <img className={style.image} src={props.avatar_url} alt="wola"/>
        <div className={style.flexBio}>
          <h4>{props.login}</h4>
          <ul className={style.flexMoreInfo}>
            <li>
              <FontAwesome.FaMapMarker />
              <span className={style.moreInfoItem}>{props.location}</span>
            </li>
            <li>
              <FontAwesome.FaGithub />
              <span className={style.moreInfoItem}>{props.public_repos}</span>
            </li>
            <li>
              <FontAwesome.FaUser />
              <span className={style.moreInfoItem}>{props.followers}</span>
            </li>
            <li>
              <a href={props.blog}>
                <FontAwesome.FaExternalLink />
                <span className={style.moreInfoItem}>{props.blog.slice(4)}</span>
              </a>
            </li>
          </ul>
          <p>{props.bio}</p>
        </div>
      </div>
    </div>
  )
};

UserBox.propTypes = {
  blankState: PropTypes.bool,
  loading: PropTypes.bool,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  location: PropTypes.string,
  public_repos: PropTypes.number.isRequired,
  blog: PropTypes.string,
  followers: PropTypes.number,
  repos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default UserBox;