import React from 'react';
import classes from './person.module.css';


const person = (properties) => {
  return (
    <div className={classes.person}>
      <h3>{properties.name}</h3>
      <p>age: {properties.age}</p>
      <input className={classes.inputChangeName} value={properties.name} onChange={properties.changedName} />
      <button className={classes.deleteButton} type="button" onClick={properties.clickDelete}>delete!</button>
    </div>
  )
}

export default person;