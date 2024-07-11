import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
} from '@mui/material';

const RecruiterForm = () => {
	const navigate = useNavigate();
	const [recruiterInfo, setRecruiterInfo] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		company: '',
		position: '',
		bio: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const recruiterData = {
			name: data.get('name'),
			email: data.get('email'),
			phone: data.get('phone-number'),
			company: data.get('company'),
			position: data.get('position'),
			bio: data.get('bio'),
			password: data.get('password'),
			confirmPassword: data.get('confirm-password'),
		};
		console.log(recruiterData);
		// Submit recruiterData to the backend
		navigate('/home');
	};

	const handleChange = (event) => {
		setRecruiterInfo({
			...recruiterInfo,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div className="w-full bg-white flex items-center justify-center h-full rounded-lg shadow dark:border md:mt-40 sm:max-w-sm lg:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="max-w-md p-6 space-y-4 md:space-y-6 sm:p-8 h-full">
				<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
					<div className="max-w-md w-full">
						<label
							htmlFor="name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							className="input-field"
							placeholder="John Doe"
							value={recruiterInfo.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="input-field"
							placeholder="name@example.com"
							value={recruiterInfo.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="phone-number"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Phone Number
						</label>
						<input
							type="text"
							name="phone-number"
							id="phone-number"
							className="input-field"
							placeholder="123-456-7890"
							value={recruiterInfo.phoneNumber}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="company"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Company
						</label>
						<input
							type="text"
							name="company"
							id="company"
							className="input-field"
							placeholder="ABC Solutions"
							value={recruiterInfo.company}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="position"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Position
						</label>
						<input
							type="text"
							name="position"
							id="position"
							className="input-field"
							placeholder="Recruiter"
							value={recruiterInfo.position}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="bio"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Bio
						</label>
						<textarea
							name="bio"
							id="bio"
							className="input-field"
							placeholder="Write a short bio..."
							value={recruiterInfo.bio}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							className="input-field"
							placeholder="••••••••"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="confirm-password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Confirm password
						</label>
						<input
							type="password"
							name="confirm-password"
							id="confirm-password"
							className="input-field"
							placeholder="••••••••"
							required
						/>
					</div>
					<Button type="submit" variant="contained" color="primary" fullWidth>
						Create an account
					</Button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Already have an account? <Link to="/login">Login here</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default RecruiterForm;
