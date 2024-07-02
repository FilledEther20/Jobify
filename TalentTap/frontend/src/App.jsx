import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import ViewAllJobs from './components/ViewAllJobs';
import SignUpForm from './components/SignUpForm';

const App = () => {
	return (

		<Router>
			<Routes>
				<Route path='/' element={<Landing/>}/>
				<Route path='/home' element={<Home/>}/>
				<Route path="/signup" element={<SignUpForm />} />
				<Route path="/view-all-jobs" element={<ViewAllJobs />} />
			</Routes>
		</Router>
	);
};

export default App;
