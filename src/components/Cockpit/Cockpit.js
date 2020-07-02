import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
	// useEffect runs every render cycle, take parameters into consideration
	// Similar to ComponentDidMount and
	// componentDidUpdate
	//  getDerivesStateFromprops() is not available but you can use, useState()
	// you have that available since it's a functional component

	// useEffect(() => {
	// 	console.log('[Cockpit.js] useEffect');
	// 	// Http request ...
	// 	setTimeout(() => {
	// 		alert('Saved data');
	// 	}, 1000);
	// }, [props.persons]); // multiple fields

	useEffect(() => {
		console.log('[Cockpit.js] useEffect []');
		// Http request ...
		setTimeout(() => {
			alert('Saved data');
		}, 2000);
		// clean up with useEffect ex
		return () => {
			console.log('[cockpit.js] cleanup work in useEffect');
		};
	}, []); // with that parameter it will run when rendered or unmounted

	//  this will run on every update cycle
	// this is useful in case you have an operation that should be canceled
	// when ever the component rerenders. It can be said after each update
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
	// before props.persons.length
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red); // classes = ['red']
	}
	// before props.persons.length
	if (props.personsLength <= 1) {
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

// before
// export default cockpit;
// only if it's inputs changes it will rerender
// other wise that stored snapshot will be returned
export default React.memo(cockpit);
