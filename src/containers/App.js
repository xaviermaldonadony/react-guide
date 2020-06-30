import React, { useState, Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// 4-11
class App extends Component {
	// second element will always be a function that allows us to update this state
	// React is aware of it
	state = {
		persons: [
			{ id: 'asfa1', name: 'Max', age: 28 },
			{
				id: 'vasdf1',
				name: 'Manu',
				age: 29,
			},
			{
				id: 'asdf11',
				name: 'Stephanie',
				age: 26,
			},
		],
		otherState: 'Some other value',
		showPersons: false,
	};

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		// an Es6 way
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
		// this.setState({persons})
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => p.id === id);

		// const person = Object.assign({}, this.state.persons[personIndex])
		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons,
		});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
