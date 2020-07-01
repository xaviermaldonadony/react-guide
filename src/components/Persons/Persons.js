// Persons Can be a functional component
// Not managing state here
// class base components for state managment
// and functional components for the presentation of content

import React from 'react';
import Person from './Person/Person';
// ES6 whats in the parenthesis gets returned
const persons = (props) => {
	console.log('[Persons.js] rendering...');

	return props.persons.map((person, index) => {
		return (
			<Person
				click={() => props.clicked(index)}
				name={person.name}
				age={person.age}
				key={person.id}
				changed={(event) => props.changed(event, person.id)}
			/>
		);
	});
};
export default persons;
