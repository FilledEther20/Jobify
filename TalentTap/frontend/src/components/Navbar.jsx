import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import profile from '../assets/Profile.jpeg';

const Navbar = () => {
	return (
		<nav className="bg-indigo-700 border-b border-indigo-500">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					<div className="flex flex-1 items-center justify-center md:items-stretch">
						<Link
							to="/home"
							className="flex flex-shrink-0 items-center mr-4"
						>
							<img
								className="h-10 w-auto"
								src={logo}
								alt="React Jobs"
							/>
							<span className="md:block text-white text-2xl font-bold">
								Talent$Tap
							</span>
						</Link>
						<div className="md:ml-auto">
							<div className="flex space-x-2 py-5">
								<Link
									to="/home"
									className="rounded-md py-2 px-2 mt text-white hover:bg-black contain"
								>
									Home
								</Link>
								<Link
									to="/view-all-jobs"
									className="rounded-md py-2 px-2 mt text-white hover:bg-black contain"
								>
									Jobs
								</Link>
								<Link
									to="/profile"
									className="rounded-md py-2 px-2 mt text-white hover:bg-black contain"
								>
									Profile
								</Link>
							</div>
						</div>
					</div>
					<Link
						to="/profile"
						claDssName="rounded-full py-1 px-1 mt text-white ring-2 ring-white ring-inset"
					>
						<Avatar
							alt="User Avatar"
							src={profile}
							sx={{ width: 60, height: 60 }}
						/>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
