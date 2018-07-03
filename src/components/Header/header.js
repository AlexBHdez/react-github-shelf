import React from 'react';
import { Link } from 'react-router-dom';
// CSS Modules
import style from './header.css';

// const RouteNames = {
//   home: '/react-github-shelf/'
// }

const Header = () => (
  <header className="container-fluid">
    <Link to="/">
      <div className={style.headerContent}>
        React Github Shelf
      </div>
    </Link>
  </header>
)

export default Header;