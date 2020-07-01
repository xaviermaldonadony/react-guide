// Persons Can be a functional component
// Not managing state here
// class base components for state managment
// and functional components for the presentation of content

import React, { Component } from 'react';
import Person from './Person/Person';
// ES6 whats in the parenthesis gets returned
class Persons extends Component {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getderivesStateFromProps', state);
	// 	return state;
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] ShouldComponentUpdate');
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapShotBeforeUpdate');
		return { message: 'Snapshot!' };
	}

	componentDidUpdate(prevProps, prevState, Snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		// console.log(snapshot);
	}
	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}
	render() {
		console.log('[Persons.js] rendering...');

		return this.props.persons.map((person, index) => {
			return (
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}
export default Persons;
