import React, { Children, createContext, useState } from 'react';

export const UserContext = createContext({
	userType: 'Candidate',
	isAuthenticated: false,
	updateUserType: () => {},
	login: () => {},
	logout: () => {},
});
export const UserProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userType, setUserType] = useState('Candidate');

	const login = () => {
		setIsAuthenticated(true);
	};

	const logout = () => {
		setIsAuthenticated(false);
		setUserType('Candidate'); //reset userType
	};

	return (
        <UserContext.Provider value={{ userType, setUserType, isAuthenticated, setIsAuthenticated }}>
            {children}
        </UserContext.Provider>
	);
};
