import React, { memo, useRef, useEffect } from 'react';
import classes from './cockpit.module.css';
import PropTypes from 'prop-types';

const Cockpit = (props) => {
  let btnHide = [];
  let textButtonHide = "show card";
  const toggleBtnRefHideCard = useRef(null);

  useEffect(() => {
    toggleBtnRefHideCard.current.click();
  }, []);

  if (props.showPersons === true) {
    btnHide.push(classes.Red);
    textButtonHide = "hide card";
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <button ref={toggleBtnRefHideCard} className={btnHide.join(' ')} onClick={props.toggleHideCardHandler}>{textButtonHide}</button>
      <button className={classes.Button} onClick={props.resetHandler}>reset</button>
    </div>
  )
}

Cockpit.propTypes = {
  appTitle: PropTypes.string,
  toggleHideCardHandler: PropTypes.func,
  resetHandler: PropTypes.func
}

export default memo(Cockpit);