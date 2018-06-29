import React, { Component } from 'react';
// COMPONENTS
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

class Layout extends Component {
  render() {
    return(
      <div>
        <Header/>
        { this.props.children }
        <Footer/>
      </div>
    )
  }
}

export default Layout;