import React from 'react';
// CSS
import style from './search.css';

const Search = (props) => (
  <div className={`input-group ${style.inputWrapper}`}> 
    <input className="form-control" type="text" placeholder="start typing to search" onChange={ event => props.keywords(event) } />
  </div>
)

export default Search;