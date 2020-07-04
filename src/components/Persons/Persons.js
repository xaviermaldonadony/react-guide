// Persons Can be a functional component // Not managing state here
// class base components for state managment
// and functional components for the presentation of content

// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';

// ES6 whats in the parenthesis gets returned
// class Persons extends Component {
class Persons extends PureComponent {
	// Update LC
	// props changes
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getderivesStateFromProps', state);
	// 	return state;
	// }

	// Update LC
	// props changes
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[Persons.js] ShouldComponentUpdate');
	// 	if (
	// 		nextProps.persons !== this.props.persons ||
	// 		nextProps.changed !== this.props.changed ||
	// 		nextProps.clicked !== this.props.clicked
	// 	) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	// Update LC
	// props changes
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapShotBeforeUpdate');
		return { message: 'Snapshot!' };
	}

	// Update LC
	// props changes
	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}

	// Clean up LC
	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
		// run any code here right before component is removed
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
