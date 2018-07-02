import React from 'react';
import { Link } from 'react-router-dom';
// CSS Modules
import style from './header.css';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';

const Header = () => (
  <header className="container-fluid">
    <Link to="/">
      <div className={style.logoWrapper}>
        <FaGithubAlt className={style.logoIcon} />
      </div>
      <div className={style.headerContent}>
        React Github Shelf
      </div>
    </Link>
  </header>
)

export default Header;