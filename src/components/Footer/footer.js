import React from 'react';
// CONFIG
import { CURRENT_YEAR } from '../../config';
// CSS
import style from './footer.css';
import FaCode from 'react-icons/lib/fa/code';

const Footer = () => (
  <footer className={`container-fluid ${style.footer}`}>
    <p>
      Made with
      <FaCode className={style.icon} />
      by <a href="http://www.alexbretones.com" target="_blank" rel="noopener noreferrer">AlexBHdez</a> ©{ CURRENT_YEAR }
    </p>
  </footer>
)

export default Footer;