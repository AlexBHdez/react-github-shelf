import React from 'react';
// CSS Modules
import style from './header.css';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';

const Header = () => (
  <header className={`container-fluid ${style.header}`}>
    <div className={style.logoWrapper}>
      <FaGithubAlt className={style.logoIcon} />
    </div>
    <div className={style.headerContent}>
      React Github Shelf
    </div>
  </header>
)

export default Header;