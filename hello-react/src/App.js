import React, { Component } from 'react';
import Person from './components/person';

class App extends Component {
  state = {
    persons: [
      { name: "Ha", age: 22 },
      { name: "Khue", age: 23 },
      { name: "Linh", age: 24 },
    ],
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
