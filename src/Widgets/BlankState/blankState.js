import React from 'react';
// CSS
import style from './blankState.css';

let blankStates = {
  start: {
    title: 'Type to search',
    message: `If you start typing in the input below(more than 2 letters please), I will search
  for you in the Github Users Database.`,
  },
  noUser: {
    title: 'No user found',
    message: `Sorry, I used the force, but I didn 't found any users with that name. Please, type another username.`,
  },
  error: {
    title: 'You got me',
    message: `Sorry, some error ocurred with the github api. Please, reload the page and try again.`
  }
}

const BlankState = (props) => {
  let template = null;

  switch (props.message) {
    case 0:
      template = (
        <div className={style.blankStateWrapper}>
          <div className={style.message}>
            <h2>
              {blankStates.start.title}
            </h2>
            {blankStates.start.message}
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
            <h2>
              {blankStates.noUser.title}
            </h2>
            {blankStates.noUser.message}
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
            <h2>
              {blankStates.error.title}
            </h2>
            {blankStates.error.message}
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