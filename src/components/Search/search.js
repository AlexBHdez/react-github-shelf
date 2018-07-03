import React from 'react';
import PropTypes from 'prop-types';
// CSS
import style from './search.css';

const Search = (props) => (
    <div className={`input-group ${style.inputWrapper}`}> 
      <input className="form-control" type="text" placeholder="start typing to search" onChange={ event => props.keywords(event) } />
    </div>
)

Search.propTypes = {
  keywords: PropTypes.func.isRequired,
}

export default Search;