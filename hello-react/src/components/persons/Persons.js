import React, { PureComponent } from 'react';
import Person from './modelPerson/person';

class Persons extends PureComponent {
  render() {
    console.log("[persons.js] rendering person ....");
    return this.props.persons.map((person) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          changedName={(event) => this.props.changedName(event, person.id)}
          clickDelete={() => this.props.clickDelete(person.id)}
        />
      );
    });
  }
}

export default Persons;