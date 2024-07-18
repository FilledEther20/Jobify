import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import profile from '../assets/Profile.jpeg';
import logo from '../assets/logo.png'; // Ensure logo is imported
import { UserContext } from '../Context/UserContext';

const Navbar = () => {
	const { userType, isAuthenticated } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, navigate]);

	const navLinks = userType === 'candidate' ? (
		<>
			<Link to="/home" className="rounded-md py-2 px-2 text-white hover:bg-black">Home</Link>
			<Link to="/view-all-jobs" className="rounded-md py-2 px-2 text-white hover:bg-black">Jobs</Link>
			<Link to="/profile" className="rounded-md py-2 px-2 text-white hover:bg-black">Profile</Link>
		</>
	) : (
		<>
			<Link to="/home" className="rounded-md py-2 px-2 text-white hover:bg-black">Home</Link>
			<Link to="/add-job" className="rounded-md py-2 px-2 text-white hover:bg-black">Add Job</Link>
			<Link to="/applicants" className="rounded-md py-2 px-2 text-white hover:bg-black">Applicants</Link>
			<Link to="/profile" className="rounded-md py-2 px-2 text-white hover:bg-black">Profile</Link>
		</>
	);

	return (
		<nav className="bg-indigo-700 border-b border-indigo-500">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<div className="flex flex-1 items-center justify-center md:items-stretch">
						<Link to="/home" className="flex flex-shrink-0 items-center mr-4">
							<img className="h-10 w-auto" src={logo} alt="React Jobs" />
							<span className="md:block text-white text-2xl font-bold">Talent$Tap</span>
						</Link>
						<div className="md:ml-auto">
							<div className="flex space-x-2 py-5">
								{navLinks}
							</div>
						</div>
					</div>
					<div className="flex items-center space-x-4">
						<Link to="/profile" className="rounded-full py-1 px-1 text-white ring-2 ring-white ring-inset">
							<Avatar alt="User Avatar" src={profile} sx={{ width: 60, height: 60 }} />
						</Link>
						<Link to="/logout" className="rounded-md py-2 px-2 text-white hover:bg-black">Logout</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
