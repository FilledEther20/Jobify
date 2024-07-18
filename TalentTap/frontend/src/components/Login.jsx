import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.png';
import { BaseURL } from '../../constants'; // Ensure this path is correct
import { UserContext } from '../Context/UserContext'; // Make sure to have UserContext defined

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userType, setUserType] = useState(''); // State for user type
	const navigate = useNavigate();
	const { setUserType: setGlobalUserType, setIsAuthenticated } =
		useContext(UserContext);
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			console.log(email)
			console.log(password)
			console.log(userType)
			const response = await axios.post(`${BaseURL}/api/login`, {
				email,
				password,
				userType // or 'recruiter' depending on the user type
			});
			if (response.status === 200) {
				toast.success('Login successful!');
				setIsAuthenticated(true);
				setGlobalUserType(userType);
				navigate('/home');
			} else {
				toast.error('Login failed. Please check your credentials.');
			}
		} catch (error) {
			toast.error('Something went wrong. Please try again.');
			console.error('Error during login:', error);
		}
	};
	return (
		<section className="bg-indigo-500/90 bg-contain">
			<div className="flex flex-col overflow-y-auto items-center justify-center px-6 py-8 mx-auto h-full md:h-screen lg:py-2">
				<p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
					<img
						className="w-8 h-8 mr-2 hover:bg-contain "
						src={logo}
						alt="logo"
					/>
					TalentTap
				</p>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-700 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Login to your account
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={handleSubmit}
						>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@company.com"
								required
							/>
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
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							/>
							<label
								htmlFor="userType"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								User Type
							</label>
							<select
								id="userType"
								name="userType"
								value={userType}
								onChange={(e) => setUserType(e.target.value)}
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
							>
								<option
									value=""
									disabled
								>
									Select user type
								</option>
								<option value="candidate">Candidate</option>
								<option value="recruiter">Recruiter</option>
							</select>
							<button
								type="submit"
								className="hover:bg-pink-800 bg-white w-full text-blue bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Login
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Don't have an account yet?{' '}
								<Link to={'/signup'}>
									<span className="text-sm font-light">Sign up</span>
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
