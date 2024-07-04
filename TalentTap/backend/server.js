const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const URI = process.env.URL;

mongoose.connect(URI );

mongoose.connection.on('connected', () => {
	console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
	console.error(`MongoDB connection error: ${err}`);
});

const addJobs=require("./routes/AddJobs(Recruiter)")
//addJob route
app.use('/addJob',addJobs)

app.get('/', (req, res) => {
	res.send('HI');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
