import React, { Component } from 'react';
// COMPONENTS
import Search from '../Search/search';
// CSS
import style from './home.css';

class Home extends Component {

  getKeywords = (event) => {
    let keyword = event.target.value;
    console.log(keyword);
  }

  render() {
    return(
      <div className={`container ${style.homeWrapper}`} >
        <Search keywords={ this.getKeywords } />
      </div>
    )
  }
}

export default Home;