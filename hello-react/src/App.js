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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => id === person.id);
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    if (this.state.showing === true) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              changedName={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div align="center">
        <h1>hello React</h1>
        {persons}
        <br /><br />
      </div>
    );
  }
}

export default App;
