import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	// useEffect(() => {
	// 	console.log('[Cockpit.js] useEffect');
	// 	// Similar to ComponentDidMount and
	// 	// componentDidUpdate
	// 	// Http request ...
	// 	setTimeout(() => {
	// 		alert('Saved data');
	// 	}, 1000);
	// }, [props.persons]); // multiple fields

	useEffect(() => {
		console.log('[Cockpit.js] useEffect []');
		// Similar to ComponentDidMount and
		// componentDidUpdate
		// Http request ...
		const timer = setTimeout(() => {
			alert('Saved data');
		}, 2000);
		return () => {
			clearTimeout(timer);
			console.log('[cockpit.js] cleanup work in useEffect');
		};
	}, []); // wit that parameter it will run when rendered or unmounted

	// this will run on every update cycle
	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect []');
		return () => {
			console.log('[cockpit.js] cleanup work in 2nd  useEffect');
		};
	});

	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}
	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold); // classes = ['red', 'bold']
	}
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>this is really working!</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default cockpit;
