import React, { memo, useRef, useEffect, useContext } from 'react';
import classes from './cockpit.module.css';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  let btnHide = [];
  let textButtonHide = "show card";
  const toggleBtnRefHideCard = useRef(null);
  const context = useContext(AuthContext);

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
      <button className={classes.Blue} onClick={context.login} >login</button>
    </div>
  )
}

Cockpit.propTypes = {
  appTitle: PropTypes.string,
  toggleHideCardHandler: PropTypes.func,
  resetHandler: PropTypes.func
}

export default memo(Cockpit);