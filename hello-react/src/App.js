import React, { Component } from 'react';
import Person from './components/person';
import styled from 'styled-components';

const listPersons = [
  { id: 1, name: "Ha", age: 22 },
  { id: 2, name: "Khue", age: 23 },
  { id: 3, name: "Linh", age: 24 },
];

const Button = styled.button`
  margin: 30px;
`;

class App extends Component {
  state = {
    persons: [...listPersons],
    showing: true,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => id === person.id);
    const persons = [...this.state.persons];

    const newPerson = { ...persons[personIndex] };
    newPerson.name = event.target.value ? event.target.value : String.fromCharCode(160);;
    persons[personIndex] = newPerson
    
    this.setState({ persons: persons });
  }

  clickDeleteHandler = (id) => {
    const personIndex = this.state.persons.findIndex(person => id === person.id);
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  }

  toggleHideCardHandler = () => {
    const isShow = this.state.showing;
    this.setState({ showing: !isShow });
  };

  resetHandler = () => {
    this.setState({
      persons: [...listPersons],
      showing: true,
    })
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
              changedName={(event) => this.nameChangedHandler(event, person.id)}
              clickDelete={() => this.clickDeleteHandler(person.id)}
            />
          })}
        </div>
      )
    }

    return (
      <div align="center">
        <h1>hello React</h1>
        {persons}
        <br /><br />
        <Button onClick={this.toggleHideCardHandler}>hide card</Button>
        <Button onClick={this.resetHandler}>reset</Button>
      </div>
    );
  }
}

export default App;
