import React, { useState, Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black',
			},
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black',
			};
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red '); // classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold'); // classes = ['red', 'bold']
		}

		return (
			<StyleRoot>
				<div className='App'>
					<h1>Hi, I'm a React App</h1>
					<p className={classes.join(' ')}>this is really working!</p>
					<button style={style} onClick={this.togglePersonsHandler}>
						Toggle Persons
					</button>
					{persons}
				</div>
			</StyleRoot>
		);
	}
}

export default Radium(App);

// 4 - 12
// import Validation from './Validation/Validation';
// import Char from './Char/Char';

// class App extends Component {
// 	state = {
// 		userInput: '',
// 	};

// 	inputChangedHandler = (event) => {
// 		this.setState({ userInput: event.target.value });
// 	};

// 	delteCharHandler = (index) => {
// 		const text = this.state.userInput.split('');
// 		text.splice(index, 1);
// 		const updatedText = text.join('');
// 		this.setState({ userInput: updatedText });
// 	};

// 	render() {
// 		const charList = this.state.userInput.split('').map((ch, index) => {
// 			return (
// 				<Char
// 					character={ch}
// 					key={index}
// 					clicked={() => this.delteCharHandler(index)}
// 				/>
// 			);
// 		});

// 		return (
// 			<div className='App'>
// 				<ol>
// 					<li>
// 						Create an input field (in App component) with a change listener
// 						which outputs the length of the entered text below it (e.g. in a
// 						paragraph).
// 					</li>
// 					<li>
// 						Create a new component (=> ValidationComponent) which receives the
// 						text length as a prop
// 					</li>
// 					<li>
// 						Inside the ValidationComponent, either output "Text too short" or
// 						"Text long enough" depending on the text length (e.g. take 5 as a
// 						minimum length)
// 					</li>
// 					<li>
// 						Create another component (=> CharComponent) and style it as an
// 						inline box (=> display: inline-block, padding: 16px, text-align:
// 						center, margin: 16px, border: 1px solid black).
// 					</li>
// 					<li>
// 						Render a list of CharComponents where each CharComponent receives a
// 						different letter of the entered text (in the initial input field) as
// 						a prop.
// 					</li>
// 					<li>
// 						When you click a CharComponent, it should be removed from the
// 						entered text.
// 					</li>
// 				</ol>
// 				<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
// 				<hr />
// 				<input
// 					type='text'
// 					onChange={this.inputChangedHandler}
// 					value={this.state.userInput}
// 				/>
// 				<p>{this.state.userInput}</p>
// 				<Validation inputLength={this.state.userInput.length} />
// 				{charList}
// 			</div>
// 		);
// 	}
// }

// export default App;

// 3 27 Practice Problem

// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

// class App extends Component {
// 	state = {
// 		username: 'superMax',
// 	};

// 	// es6 arrow function, render is also a method diff syntax
// 	// If you plan to use the this keyword inside the method,use this syntax
// 	// this would encapsulate the this keyword, to still refer to the class
// 	// usint it as an event listener, if it's not in es6 syntax this keyword wont work
// 	usernameChangedHandler = (event) => {
// 		this.setState({ username: event.target.value });
// 	};

// 	render() {
// 		return (
// 			<div className='App'>
// 				<ol>
// 					<li>Create TWO new components: UserInput and UserOutput</li>
// 					<li>
// 						UserInput should hold an input element, UserOutput two paragraphs
// 					</li>
// 					<li>
// 						Output multiple UserOutput components in the App component (any
// 						paragraph texts of your choice)
// 					</li>
// 					<li>
// 						Pass a username (of your choice) to UserOutput via props and display
// 						it there
// 					</li>
// 					<li>
// 						Add state to the App component (=> the username) and pass the
// 						username to the UserOutput component
// 					</li>
// 					<li>
// 						Add a method to manipulate the state (=> an event-handler method)
// 					</li>
// 					<li>
// 						Pass the event-handler method reference to the UserInput component
// 						and bind it to the input-change event
// 					</li>
// 					<li>
// 						Ensure that the new input entered by the user overwrites the old
// 						username passed to UserOutput
// 					</li>
// 					<li>
// 						Add two-way-binding to your input (in UserInput) to also display the
// 						starting username
// 					</li>
// 					<li>
// 						Add styling of your choice to your components/ elements in the
// 						components - both with inline styles and stylesheets
// 					</li>
// 					<UserInput
// 						changed={this.usernameChangedHandler}
// 						currentName={this.state.username}
// 					/>
// 					<UserOutput userName={this.state.username} />
// 					<UserOutput userName={this.state.username} />
// 					<UserOutput userName='Max' />
// 				</ol>
// 			</div>
// 		);
// 	}
// }
// export default App;
