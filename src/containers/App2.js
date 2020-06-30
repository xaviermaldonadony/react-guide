import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
	// second element will always be a function that allows us to update this state
	// React is aware of it
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 },
		],
		// otherState: 'Some other value',
	});
	// const [otherState, setOtherState] = useState('Some other other value');
	// console.log(personsState, otherState);

	const switchNameHandler = (newName) => {
		setPersonsState({
			persons: [
				{ name: newName, age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 27 },
			],
		});
	};

	return (
		<div className='App'>
			<h1>Hi, I'm a React App</h1>
			<p>this is really working!</p>
			<button onClick={switchNameHandler}> Switch Name</button>
			<Person
				name={personsState.persons[0].name}
				age={personsState.persons[0].age}
			/>
			<Person
				name={personsState.persons[1].name}
				age={personsState.persons[1].age}
				click={switchNameHandler}
				click={switchNameHandler}
			>
				My Hobbies: Racing
			</Person>

			<Person
				name={personsState.persons[2].name}
				age={personsState.persons[2].age}
			/>
		</div>
	);
};

export default app;
