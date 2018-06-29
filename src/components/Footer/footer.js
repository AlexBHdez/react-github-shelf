import React from 'react';
// CONFIG
import { CURRENT_YEAR } from '../../config';
// CSS
import FaGithubAlt from 'react-icons/lib/fa/github-alt';

const Footer = () => (
  <div className="container-fluid">
    Made with 
    <FaGithubAlt/>
    by <a href="http://www.alexbretones.com" target="_blank" rel="noopener noreferrer">AlexBHdez</a> ©{ CURRENT_YEAR }
  </div>
)

export default Footer;