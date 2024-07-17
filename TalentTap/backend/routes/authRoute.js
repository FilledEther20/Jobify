const jwt = require('jsonwebtoken');
const express = require('express');
const Candidate = require('../models/Candidate');
const authRouter = express.Router();
require('dotenv').config();
const bcrypt=require("bcrypt")
//Signup Route defined
authRouter.post('/signup', async (req, res) => {
	const { name, email, phone, education, skills, password } = req.body;
	try {
		// Perform any necessary data validation here
		// For example, ensure email is unique, validate phone number format, etc.
		const existingUser = await Candidate.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: 'Email already exists' });
		}
		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);
		// Create a new user instance using your User model
		const newUser = new Candidate({
			name,
			email,
			phone,
			education,
			skills,
			password: hashedPassword, // Store hashed password in the database
		});

		// Save the user to the database
		await newUser.save();

		// Respond with a success message
		res.status(201).json({
			message: 'User created successfully',
		});
	} catch (error) {
		console.error('Error creating user:', error);
		res.status(500).json({
			message: 'Failed to create user',
		});
	}
});
//Login route defined
authRouter.post('/login', async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await Candidate.findOne({ email });
		const passwordCorrect =
			user === null ? false : await bcrypt.compare(password, user.password);

		if (!(user && passwordCorrect)) {
			return res.status(401).json({
				error: 'invalid email or password',
			});
		}

		// If the email and password are valid, assign a token
		// Assign by email due to its unique existence
		const userForToken = {
			email: user.email,
			id: user._id,
		};
		const token = jwt.sign(userForToken, process.env.SECRET, {
			expiresIn: '1h',
		});

		res.status(200).send({ token, email: user.email, name: user.name });
		console.log('User logged in successfully');
	} catch (error) {
		console.error('Error during login:', error);
		res.status(500).json({ error: 'Something went wrong during login' });
	}
});

module.exports = authRouter;
