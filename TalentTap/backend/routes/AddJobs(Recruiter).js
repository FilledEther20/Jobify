const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.post('/', async (req, res) => {
	try {
		const {
			title,
			company,
			date,
			location,
			salary,
			description,
			responsibilities,
			requirements,
		} = req.body;

		const newJob = new Job({
			title,
			company,
			dateOfPosting: date,
			location,
			salary,
			description,
			responsibilities,
			requirements,
		});

		await newJob.save();
		res.status(201).json({ message: 'Job posted successfully', job: newJob });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
