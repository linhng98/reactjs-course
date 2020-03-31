import React from 'react';
import Person from './modelPerson/person';

const Persons = (properties) => properties.persons.map((person) => {
  return (
    <Person
      name={person.name}
      age={person.age}
      key={person.id}
      changedName={(event) => properties.changedName(event, person.id)}
      clickDelete={() => properties.clickDelete(person.id)}
    />
  )
});

export default Persons;