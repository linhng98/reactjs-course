import React from 'react';
import classes from './person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/aux';

const person = (properties) => {
  return (
    <Aux>
      <h3>{properties.name}</h3>
      <p>age: {properties.age}</p>
      <input className={classes.inputChangeName} value={properties.name} onChange={properties.changedName} />
      <button className={classes.deleteButton} type="button" onClick={properties.clickDelete}>delete!</button>
    </Aux>
  )
}

export default withClass(person, classes.person);