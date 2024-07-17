import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
	MenuItem,
	Button,
	FormControl,
	InputLabel,
	Select,
	OutlinedInput,
	Chip,
	Box,
} from '@mui/material';
import 'react-phone-number-input/style.css';
import { BaseURL } from '../../constants'; // Ensure this path is correct
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';

const CandidateForm = () => {
	const navigate = useNavigate();
	const [education, setEducation] = useState({
		degree: '',
		institution: '',
		yearOfCompletion: '',
	});
	const [phone, setPhone] = useState('');
	const [skills, setSkills] = useState([]);
	const skillOptions = [
		'JavaScript',
		'React',
		'Node.js',
		'Python',
		'Java',
		'Kotlin',
	];

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const candidateData = {
			name: data.get('name'),
			email: data.get('email'),
			phone: phone,
			education: {
				degree: data.get('degree'),
				institution: data.get('institution'),
				yearOfCompletion: data.get('yearOfCompletion'),
			},
			skills: skills,
			password: data.get('password'),
		};

		if (data.get('password') !== data.get('confirm-password')) {
			toast.error("Password confirmation does not match", {
				position: 'top-center',
				autoClose: 3000,
			});
			return;
		}

		try {
			const res = await axios.post(`${BaseURL}/api/signup`, candidateData);
			if (res.status === 201) {
				toast.success("Welcome!", {
					position: 'top-center',
					autoClose: 4000,
				});
				navigate('/home');
			}
		} catch (error) {
			toast.error('User With Email already Exists', {
				position: 'top-center',
				autoClose: 3000,
			});
			console.error('Error registering user', error);
		}
	};

	const handleEducationChange = (event) => {
		setEducation({
			...education,
			[event.target.name]: event.target.value,
		});
	};

	const handleSkillsChange = (event) => {
		const val = event.target.value;
		setSkills(typeof val === 'string' ? val.split(',') : val);
	};

	return (
		<div className="w-full bg-white flex items-center justify-center h-full rounded-lg shadow dark:border md:mt-40 sm:max-w-sm lg:p-0 dark:bg-gray-800 dark:border-gray-700">
			<div className="max-w-md p-6 space-y-4 md:space-y-6 sm:p-8 h-full">
				<ToastContainer />
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
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Jane Doe"
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
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="name@mail.com"
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
						<PhoneInput
							defaultCountry="US"
							value={phone}
							onChange={setPhone}
							placeholder="123-456-7890"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="degree"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Degree
						</label>
						<input
							type="text"
							name="degree"
							id="degree"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Bachelor's Degree"
							value={education.degree}
							onChange={handleEducationChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="institution"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Institution
						</label>
						<input
							type="text"
							name="institution"
							id="institution"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="XYZ University"
							value={education.institution}
							onChange={handleEducationChange}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="yearOfCompletion"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Year of Completion
						</label>
						<input
							type="text"
							name="yearOfCompletion"
							id="yearOfCompletion"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="2023"
							value={education.yearOfCompletion}
							onChange={handleEducationChange}
							required
						/>
					</div>
					<div>
						<FormControl fullWidth>
							<InputLabel id="skills-label" sx={{ color: 'white' }}>
								Skills
							</InputLabel>
							<Select
								labelId="skills-label"
								id="skills"
								multiple
								value={skills}
								onChange={handleSkillsChange}
								input={<OutlinedInput id="select-multiple-chip" label="Skills" />}
								renderValue={(selected) => (
									<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
										{selected.map((value) => (
											<Chip key={value} label={value} />
										))}
									</Box>
								)}
							>
								{skillOptions.map((skill) => (
									<MenuItem key={skill} value={skill}>
										{skill}
									</MenuItem>
								))}
							</Select>
						</FormControl>
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
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="confirm-password"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Confirm Password
						</label>
						<input
							type="password"
							name="confirm-password"
							id="confirm-password"
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
						/>
					</div>
					<Button
						type="submit"
						variant="contained"
						sx={{
							mt: 2,
							backgroundColor: '#4caf50',
							color: 'white',
							'&:hover': { backgroundColor: '#45a049' },
						}}
					>
						Register
					</Button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Already have an account?{' '}
						<Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
							Login here
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default CandidateForm;
