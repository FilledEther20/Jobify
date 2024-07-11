const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Fetch all Jobs from db
router.get('/alljobs', async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

// Delete job by ID
router.delete('/job/:id', async (req, res, next) => {
  try {
    const result = await Job.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

// Update job by ID
router.put('/job/:id', async (req, res, next) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedJob) {
      res.status(200).json(updatedJob);
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (error) {
    next(error);
  }
});

// Create jobs route
router.post('/addJobs', async (req, res, next) => {
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
  } catch (error) {
    next(error); // Pass the error to the error-handling middleware
  }
});

module.exports = router;
