import Navbar from './Navbar';
import Banner from './Banner';
import HomeCards from './HomeCards';
import JobListings from './JobListings';
import React from 'react';

const Home = () => {
    return (
		<>
			<Navbar />
			<Banner />
			<HomeCards />
			<JobListings />
		</>
	);
};

export default Home;
