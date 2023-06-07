const express = require('express');
const router = express.Router();

// Example database of jobs
let jobs = [];

// Get all jobs
router.get('/jobs', (req, res) => {
  res.json(jobs);
});

// Get a specific job
router.get('/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }

  res.json(job);
});

// Create a new job
router.post('/jobs', (req, res) => {
  const { client, description } = req.body;

  if (!client || !description) {
    return res.status(400).json({ error: 'Client and description are required' });
  }

  const newJob = {
    id: Date.now().toString(),
    client,
    description,
    scheduledDate: null,
  };

  jobs.push(newJob);
  res.status(201).json(newJob);
});

// Update a job
router.put('/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  const { client, description, scheduledDate } = req.body;

  let job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }

  job.client = client || job.client;
  job.description = description || job.description;
  job.scheduledDate = scheduledDate || job.scheduledDate;

  res.json(job);
});

// Delete a job
router.delete('/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  const index = jobs.findIndex((job) => job.id === jobId);

  if (index === -1) {
    return res.status(404).json({ error: 'Job not found' });
  }

  jobs.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
