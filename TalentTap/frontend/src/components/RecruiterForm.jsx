import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecruiterForm = () => {
  const { setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [recruiterInfo, setRecruiterInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    position: '',
    bio: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const recruiterData = {
      name: data.get('name'),
      email: data.get('email'),
      phoneNumber: phone,
      company: data.get('company'),
      position: data.get('position'),
      bio: data.get('bio'),
      password: data.get('password'),
    };

    if (data.get('password') !== data.get('confirm-password')) {
      toast.error('Password confirmation does not match', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    try {
      const res = await axios.post(`${BaseURL}/api/signup`, recruiterData);
      if (res.status === 201) {
        setIsAuthenticated(true);
        toast.success('Registration successful!', {
          position: 'top-center',
          autoClose: 3000,
        });
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast.error('Registration failed', {
          position: 'top-center',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('User with this email already exists', {
        position: 'top-center',
        autoClose: 3000,
      });
      console.error('Error registering user', error);
    }
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <PhoneInput
              international
              defaultCountry="US"
              value={phone}
              onChange={setPhone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Company Name"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Position"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bio"
              value={recruiterInfo.bio}
              onChange={handleChange}
              required
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm Password"
              required
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </Button>
        </form>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
        <div id="map" className="w-full h-64 bg-gray-300 rounded-lg mt-4">
          <p className="text-center pt-24 text-gray-700">Map Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterForm;
