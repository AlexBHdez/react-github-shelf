import React from 'react';
// CSS
import style from './blankState.css';

const BlankState = (props) => (
  <div className={style.blankStateWrapper}>
    <div className={style.imageWrapper}>
      <img className={style.image} src="/img/blank-state.png" alt="blank-state"/>
    </div>
    <div className={style.message}>
      {props.message}
    </div>
  </div>
)

export default BlankState;