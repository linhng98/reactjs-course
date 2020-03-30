import React, { Component } from 'react';
import Person from './components/person';

const listPersons = [
  { id: 1, name: "Ha", age: 22 },
  { id: 2, name: "Khue", age: 23 },
  { id: 3, name: "Linh", age: 24 },
];

class App extends Component {
  state = {
    persons: [...listPersons],
    showing: true,
  }

  render() {
    let persons = null;
    if (this.state.showing === true) {
      persons = (
        <div align="center">
          {this.state.persons.map((person) => {
            return <Person
              name={person.name}
              age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div>
        <h1 align="center">hello React</h1>
        {persons}
      </div>
    );
  }
}

export default App;
