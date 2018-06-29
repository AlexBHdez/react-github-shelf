import React from 'react';
// CONFIG
import { CURRENT_YEAR } from '../../config';

const Footer = () => (
  <div className="container-fluid">
    Made with love by <a href="http://www.alexbretones.com" target="_blank">AlexBHdez</a> ©{ CURRENT_YEAR }
  </div>
)

export default Footer;