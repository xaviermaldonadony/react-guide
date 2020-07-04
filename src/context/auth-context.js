import React from 'react';

const authcontext = React.createContext({
	authenticated: false,
	login: () => {},
});

export default authcontext;
