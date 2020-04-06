import React, { memo } from 'react';
import classes from './cockpit.module.css';

const cockpit = (props) => {
  let btnHide = [];
  let textButtonHide = "show card";

  if (props.showPersons === true) {
    btnHide.push(classes.Red);
    textButtonHide = "hide card";
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <button className={btnHide.join(' ')} onClick={props.toggleHideCardHandler}>{textButtonHide}</button>
      <button className={classes.Button} onClick={props.resetHandler}>reset</button>
    </div>
  )
}

export default memo(cockpit);