import React from 'react';

const Search = (props) => (
  <div className={`input-group`}> 
    <input className={`form-control`} type="text" onChange={ event => props.keywords(event) } />
  </div>
)

export default Search;