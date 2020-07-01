import React, { useState, Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor ');
	}

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
		showCockpit: true,
	};

	// when ever your props change or ur class base component u can sync ur state to them
	// rare
	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFrom props', props);
		return state;
	}
	// once render and render child components were rendered and their life cycle finish
	// your life cycle component will finish when componentDidMount gets called
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate ');
		return true;
	}
	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}
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
		console.log('[App.js] render');
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
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? (
					<Cockpit
						title={this.props.appTitle}
						showPersons={this.state.showPersons}
						persons={this.state.persons}
						clicked={this.togglePersonsHandler}
					/>
				) : null}
				{persons}
			</div>
		);
	}
}

export default App;
