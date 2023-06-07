const express = require('express');
const router = express.Router();

// Sample job categories
const jobCategories = [
  { id: 1, name: 'Child Care' },
  { id: 2, name: 'Cleaning' },
  { id: 3, name: 'Cooking' },
  { id: 4, name: 'Dog Walking' },
  { id: 5, name: 'Yard Work' },
  { id: 6, name: 'Hardly Work' }
];

// Placeholder jobs array
let jobs = [];

// GET all job categories
router.get('/job-categories', (req, res) => {
  res.json(jobCategories);
});

// GET jobs for a specific job category
router.get('/job-categories/:category', (req, res) => {
  const category = req.params.category;

  // Replace this logic with your implementation to fetch jobs for the specified category
  const jobsForCategory = jobs.filter(job => job.category === category);

  res.json(jobsForCategory);
});

// GET home page
router.get('/', (req, res) => {
  // Replace this with the logic for rendering your home page
  res.render('home');
});

// GET dashboard page
router.get('/dashboard', (req, res) => {
  // Replace this with the logic for rendering your dashboard page
  res.render('dashboard');
});

// GET specific job category page
router.get('/job-categories/:category', (req, res) => {
  const category = req.params.category;

  // Replace this with the logic for rendering the specific job category page
  res.render('job-category', { category });
});

// POST new job
router.post('/jobs', (req, res) => {
  // Replace this with the logic to create a new job
  const newJob = req.body;
  jobs.push(newJob);

  res.status(201).json(newJob);
});

// PUT update job
router.put('/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  const updatedJob = req.body;

  // Replace this with the logic to update the job with the given ID
  const index = jobs.findIndex(job => job.id === jobId);
  if (index !== -1) {
    jobs[index] = updatedJob;
    res.json(updatedJob);
  } else {
    res.status(404).json({ error: 'Job not found' });
  }
});

// DELETE job
router.delete('/jobs/:id', (req, res) => {
  const jobId = req.params.id;

  // Replace this with the logic to delete the job with the given ID
  const index = jobs.findIndex(job => job.id === jobId);
  if (index !== -1) {
    const deletedJob = jobs.splice(index, 1)[0];
    res.json(deletedJob);
  } else {
    res.status(404).json({ error: 'Job not found' });
  }
});

module.exports = router;
