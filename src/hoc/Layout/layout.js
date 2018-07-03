import React from 'react';
import PropTypes from 'prop-types';
// COMPONENTS
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
// CSS
import style from './layout.css';

const Layout = (props) => (
  <div className={`text-center ${style.layoutWrapper}`}>
    <Header/>
    <div className={style.content}>
      { props.children }
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout;