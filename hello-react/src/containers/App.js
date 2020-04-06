import React, { Component } from 'react';
import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/cockpit';
import classes from './App.module.css';

const listPersons = [
  { id: 1, name: "Ha", age: 22 },
  { id: 2, name: "Khue", age: 23 },
  { id: 3, name: "Linh", age: 24 },
];

class App extends Component {
  state = {
    persons: [...listPersons],
    showPersons: true,
    showCockpit: true,
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
    const isShow = this.state.showPersons;
    this.setState({ showPersons: !isShow });
  };

  resetHandler = () => {
    this.setState({
      persons: [...listPersons],
      showPersons: true,
    })
  }

  render() {
    let persons = null;
    let cockpit = null;
    
    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changedName={this.nameChangedHandler}
            clickDelete={this.clickDeleteHandler}
          />
        </div>
      );
    }

    if (this.state.showCockpit === true) {
      cockpit = (
        <Cockpit
          showPersons={this.state.showPersons}
          appTitle={this.props.appTitle}
          toggleHideCardHandler={this.toggleHideCardHandler}
          resetHandler={this.resetHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        {cockpit}
        {persons}
      </div>
    );
  }
}

export default App;
