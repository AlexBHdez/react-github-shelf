import React from 'react';
// CSS Modules
import style from './header.css';

const Header = () => (
  <header className={`container-fluid ${style.header}`}>
    <div className={style.headerContent}>
      React Github Shelf
    </div>
  </header>
)

export default Header;