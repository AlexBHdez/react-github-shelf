import React from 'react';
// CSS
import style from './blankState.css';

let messages = [
  `If you start typing in the input below(more than 2 letters please), I will search
  for you in the Github Users Database.`,
  `Sorry, I didn 't found any users with that name. Please, try again.`,
  `Sorry, some error ocurred with the github api. Please, reload the page and try again.`
]

const BlankState = (props) => {
  let template = null;

  switch (props.message) {
    case 0:
      template = (
        <div className={style.blankStateWrapper}>
          <div className={style.message}>
            {messages[0]}
          </div>
          <div className={style.imageWrapper}>
            <img className={style.image} src="/img/blank-state-00.png" alt="blank-state"/>
          </div>
        </div>
      )
    break;
    
    case 1:
      template = (
        <div className={style.blankStateWrapper}>
          <div className={style.message}>
            {messages[1]}
          </div>
          <div className={style.imageWrapper}>
            <img className={style.image} src="/img/blank-state-01.png" alt="blank-state"/>
          </div>
        </div>
      )
    break;

    case 2:
      template = (
        <div className={style.blankStateWrapper}>
          <div className={style.message}>
            {messages[2]}
          </div>
          <div className={style.imageWrapper}>
            <img className={style.image} src="/img/blank-state-02.png" alt="blank-state"/>
          </div>
        </div>
      )
    break;
  
    default:
      template = null;
  }
  return template;
}

export default BlankState;