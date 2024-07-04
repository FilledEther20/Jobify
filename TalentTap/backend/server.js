const express = require('express');
require("dotenv").config
const URI=process.env.URL
const cors = require('cors');
const app = express();
const Job = require('./models/Job');
const PORT = 3000;
app.use(cors());
app.use(express.json());

//MongoDB Connection


app.post('/jobs', async (req, res) => {
	try {
		const {
			title,
			company,
			date,
			location,
			salary,
			description,
			responsibilites,
			requirements,
		} = req.body;
		const newJob = new Job({
			title,
			company,
			dateOfPosting: date,
			location,
			salary,
			description,
			responsibilites,
			requirements,
		});
		await newJob.save();
		res.status(201).json({ message: 'Job posted successfully', job: newJob });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
});

app.get('/', (req, res) => {
	res.send('HI');
});
app.listen(PORT, () => {
	console.log('HI');
});
