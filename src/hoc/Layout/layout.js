import React, { Component } from 'react';
// COMPONENTS
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
// CSS
import style from './layout.css';

class Layout extends Component {
  render() {
    return(
      <div className={`text-center ${style.layoutWrapper}`}>
        <Header/>
        { this.props.children }
        <Footer/>
      </div>
    )
  }
}

export default Layout;