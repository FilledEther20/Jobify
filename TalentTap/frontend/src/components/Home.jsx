import Navbar from './Navbar';
import Banner from './Banner';
import HomeCards from './HomeCards';
import JobListings from './JobListings';
import React from 'react';
import { toast } from 'react-toastify';
const Home = (user) => {
    return (
		<>	
			<Navbar/>
			<Banner />
			<HomeCards />
			<JobListings />
		</>
	);
};

export default Home;
