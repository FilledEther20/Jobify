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

mongoose.connect(URI);

mongoose.connection.on('connected', () => {
	console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
	console.error(`MongoDB connection error: ${err}`);
});

const jobRoutes = require('./controllers/Jobs');
const candidateRoutes=require('./controllers/Candidate')
//addJob route
app.use('/', jobRoutes);
app.use('/',candidateRoutes)
app.get('/', (req, res) => {
	res.send('HI asde');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: err.message || 'Something went wrong !' });
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
