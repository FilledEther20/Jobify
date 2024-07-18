import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import CandidateForm from './CandidateForm';
import RecruiterForm from './RecruiterForm';
import { UserContext } from '../Context/UserContext'; // Import UserContext
import { useToast } from '@chakra-ui/react';
const Landing = () => {
	const { setUserType, userType } = useContext(UserContext); // Access userType and updateUserType from context

	const handleUserChange = (e) => {
		// const toast = useToast();
		// toast({
		// 	title: 'Account created.',
		// 	description: "We've created your account for you.",
		// 	status: 'success',
		// 	duration: 9000,
		// 	isClosable: true,
		// });
		const newUserType = e.target.value;
		setUserType(newUserType);
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a
					href="#"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					<img
						src={logo}
						alt="logo"
						className="w-8 h-8 mr-2"
					/>
					TalentTap
				</a>
				<div className="bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Create an account
						</h1>
						<FormControl sx={{ m: 1, minWidth: 120 }}>
							<InputLabel sx={{ color: 'white' }}>User Type</InputLabel>
							<Select
								label="Usertype"
								value={userType}
								onChange={handleUserChange}
								sx={{
									color: 'white',
									'& .MuiSelect-icon': { color: 'white' },
									'& .MuiOutlinedInput-notchedOutline': {
										borderColor: 'white',
									},
									'&:hover .MuiOutlinedInput-notchedOutline': {
										borderColor: 'white',
									},
								}}
								MenuProps={{
									PaperProps: {
										sx: {
											bgcolor: 'black',
											'& .MuiMenuItem-root': { color: 'white' },
										},
									},
								}}
							>
								<MenuItem value="candidate">Candidate</MenuItem>
								<MenuItem value="recruiter">Recruiter</MenuItem>
							</Select>
						</FormControl>
						{userType === 'candidate' && <CandidateForm />}
						{userType === 'recruiter' && <RecruiterForm />}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
