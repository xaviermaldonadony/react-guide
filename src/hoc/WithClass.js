import React from 'react';

// const withclass = (props) => (
// 	<div className={props.classes}>{props.children}</div>
// );

// first arg must be with a cap because it would be a referrence to a component
// HOC, function body which returns a functional component
const withclass = (WrappedComponent, className) => {
	return (props) => (
		<div className={className}>
			<WrappedComponent />
		</div>
	);
};

export default withclass;
