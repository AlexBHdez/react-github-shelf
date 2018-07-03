import React from 'react';
// CSS
import style from './blankState.css';

let blankStates = {
  start: {
    title: 'Type to search',
    message: `If you start typing in the input below(more than 2 letters please), I will search
  for you in the Github Users Database.`,
    image: {
      url: '/img/blank-state-00.png',
      alt: 'blank-state-00',
    }
      
  },
  noUser: {
    title: 'No user found',
    message: `Sorry, I used the force, but I didn 't found any users with that name. Please, type another username.`,
    image: {
      url: '/img/blank-state-01.png',
      alt: 'blank-state-01',
    }
  },
  error: {
    title: 'You got me',
    message: `Sorry, some error ocurred with the github api. Please, reload the page and try again.`,
    image: {
      url: '/img/blank-state-02.png',
      alt: 'blank-state-02',
    }
  }
}

const BlankState = (props) => {
  let title = null;
  let content = null;
  let image = null;

  switch (props.message) {
    case 0:
      title = blankStates.start.title;
      content = blankStates.start.message;
      image = <img className={style.image} src={blankStates.start.image.url} alt={blankStates.start.image.alt}/>;
    break;
    
    case 1:
      title = blankStates.noUser.title;
      content = blankStates.noUser.message;
      image = <img className={style.image} src={blankStates.noUser.image.url} alt={blankStates.start.image.alt}/>;
    break;

    case 2:
      title = blankStates.error.title;
      content = blankStates.error.message;
      image = <img className={style.image} src={blankStates.error.image.url} alt={blankStates.start.image.alt}/>;
    break;
  
    default:
      content = null;
      image = null;
  }
  return (
    <div className={style.blankStateWrapper}>
      <div className={style.message}>
        <h2>
          {title}
        </h2>
          {content}
      </div>
      <div className={style.imageWrapper}>
        {image}
      </div>
    </div>
  )
}

export default BlankState;