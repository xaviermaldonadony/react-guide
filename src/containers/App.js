import React, { useState, Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// lower case w, becuase its not used as a component anymore
// it's a function that returns a component function
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilliary';
import AuthContext from '../context/auth-context';

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
		changeCounter: 0,
		authenticated: false,
	};

	// when ever your props change or ur class base component u can sync ur state to them
	// rare
	// Creationg LC
	// Update LC
	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFrom props', props);
		return state;
	}

	// once render and render child components were rendered and their life cycle finish
	// your life cycle component will finish when componentDidMount gets called
	// Creationg LC
	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	// Update LC
	// state changes
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate ');
		return true;
	}

	// Update LC
	// state changes
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

		// this.setState({
		// 	persons: persons,
		// 	// incorrect way
		// 	changeCounter: this.state.changeCounter + 1,
		// });

		// when updating state based of the prev one
		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: ++prevState.changeCounter,
			};
		});
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	loginHandler = () => {
		this.setState({ authenticated: true });
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
					isAuthenticated={this.state.authenticated}
				/>
			);
		}

		return (
			// <WithClass classes={classes.App}>
			<Aux>
				<button
					onClick={() => {
						this.setState({ showCockpit: false });
					}}
				>
					Remove Cockpit
				</button>
				<AuthContext.Provider
					value={{
						authenticated: this.state.authenticated,
						login: this.loginHandler,
					}}
				>
					{this.state.showCockpit ? (
						<Cockpit
							title={this.props.appTitle}
							showPersons={this.state.showPersons}
							personsLength={this.state.persons.length}
							clicked={this.togglePersonsHandler}
						/>
					) : null}
					{persons}
				</AuthContext.Provider>
			</Aux>
			// </WithClass>
		);
	}
}

export default withClass(App, classes.App);
