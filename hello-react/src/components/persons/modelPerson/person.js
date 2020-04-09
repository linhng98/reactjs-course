import React from 'react';
import classes from './person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/aux';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const Person = (properties) => {
  return (
    <Aux>
      <AuthContext.Consumer>
        {(context) => context.authenticated ? <h4>Authenticated</h4> : <h4>please login</h4>}
      </AuthContext.Consumer>
      <h3>{properties.name}</h3>
      <p>age: {properties.age}</p>
      <input className={classes.inputChangeName} value={properties.name} onChange={properties.changedName} />
      <button className={classes.deleteButton} type="button" onClick={properties.clickDelete}>delete!</button>
    </Aux>
  );
}

// optional for type properties error detect
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  changedName: PropTypes.func,
  clickDelete: PropTypes.func
}

export default withClass(Person, classes.person);