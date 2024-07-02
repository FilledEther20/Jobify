import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUpForm = ({ onClose }) => {
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');
	const navigate=useNavigate();

	const handleClose=()=>{
		navigate('/');
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`${name} ${mail} ${password}`);
		setMail('');
		setName('');
		setPassword('');
		onClose();
	};
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
			<div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
				<h2 className="text-2xl mb-4">Sign Up</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="mt-1 p-2 w-full border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={mail}
							onChange={(e) => setMail(e.target.value)}
							className="mt-1 p-2 w-full border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mt-1 p-2 w-full border border-gray-300 rounded-md"
							required
						/>
					</div>
					<div className="flex justify-between">
						<button
							type="button"
							className="px-4 py-2 bg-gray-600 text-white rounded-md"
							onClick={handleClose}
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-indigo-600 text-white rounded-md"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUpForm;
