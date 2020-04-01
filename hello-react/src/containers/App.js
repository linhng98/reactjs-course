import React, { Component } from 'react';
import Persons from '../components/persons/persons';
import classes from './App.module.css';

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
    let btnHide = [classes.Button];
    let textButtonHide = "show card";

    let persons = null;
    if (this.state.showing === true) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changedName={this.nameChangedHandler}
            clickDelete={this.clickDeleteHandler}
          />
        </div>
      );

      btnHide.push(classes.Red);
      textButtonHide = "hide card";
    }

    return (
      <div className={classes.App}>
        <h1>{this.props.appTitle}</h1>
        {persons}
        <br /><br />
        <button className={btnHide.join(' ')} onClick={this.toggleHideCardHandler}>{textButtonHide}</button>
        <button className={classes.Button} onClick={this.resetHandler}>reset</button>
      </div>
    );
  }
}

export default App;
