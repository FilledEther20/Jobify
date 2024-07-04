import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Router, Routes, Link } from 'react-router-dom';
const Navbar = () => {
	const nav=useNavigate();
	const handleJobsClick = () => {
		nav('/view-all-jobs');
	};

	const handleHomeClick=()=>{
		nav('/home')
	}
	return (
		<>
			<nav className="bg-indigo-700 border-b border-indigo-500">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="flex h-20 items-center justify-between">
						<div className="flex flex-1 items-center justify-center md:items-stretch">
							<button
								className="flex flex-shrink-0
						items-center mr-4"
								onClick={handleHomeClick}
							>
								<img
									className="h-10 w-auto"
									src={logo}
									alt="React Jobs"
								/>
								<span className="md:block text-white text-2xl font-bold">
									Talent$Tap
								</span>
							</button>
							<div className="md:ml-auto">
								<div className="flex space-x-2">
									<button
										onClick={handleHomeClick}
										className="rounded-md py-2 px-2 mt text-white hover:bg-black contain"
									>
										Home
									</button>
									<button
										onClick={handleJobsClick}
										className="rounded-md py-2 px-2 mt text-white hover:bg-black contain"
									>
										Jobs
									</button>
									<Link to={'/profile'}>
										<button
											className="rounded-md py-2 px-2 mt text-white hover:bg-black contain"
										>
											Profile
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
