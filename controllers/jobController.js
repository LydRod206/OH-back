const jobs = [
    {
      id: 1,
      category: "Child Care",
      title: "Babysitting",
      description: "Looking for a babysitter for my 2-year-old child.",
      date: "2023-05-15",
      time: "10:00 AM",
      price: 20,
      location: "123 Main St, Forks",
      contact: "555-123-4567"
    },
    {
      id: 2,
      category: "Cleaning",
      title: "House Cleaning",
      description: "Need someone to clean my house once a week.",
      date: "2023-05-20",
      time: "1:00 PM",
      price: 50,
      location: "456 Elm St, Forks",
      contact: "555-987-6543"
    }
  ];
  
  // Get all jobs
  const getAllJobs = (req, res) => {
    res.json({ jobs });
  };
  
  // Get a specific job by ID
  const getJobById = (req, res) => {
    const { id } = req.params;
  
    // Find the job with the provided ID
    const job = jobs.find((job) => job.id === parseInt(id));
  
    // Check if the job exists
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
  
    res.json({ job });
  };
  
  // Create a new job
  const createJob = (req, res) => {
    const { category, title, description, date, time, price, location, contact } = req.body;
  
    // Generate a unique ID for the new job
    const newJobId = jobs.length + 1;
  
    // Create a new job object
    const newJob = {
      id: newJobId,
      category,
      title,
      description,
      date,
      time,
      price,
      location,
      contact
    };
  
    // Add the new job to the list of jobs
    jobs.push(newJob);
  
    res.status(201).json({ message: "Job created successfully", job: newJob });
  };
  
  // Update a job by ID
  const updateJob = (req, res) => {
    const { id } = req.params;
    const { category, title, description, date, time, price, location, contact } = req.body;
  
    // Find the job with the provided ID
    const job = jobs.find((job) => job.id === parseInt(id));
  
    // Check if the job exists
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
  
    // Update the job properties
    job.category = category;
    job.title = title;
    job.description = description;
    job.date = date;
    job.time = time;
    job.price = price;
    job.location = location;
    job.contact = contact;
  
    res.json({ message: "Job updated successfully", job });
  };
  
  // Delete a job by ID
  const deleteJob = (req, res) => {
    const { id } = req.params;
  
    // Find the index of the job with the provided ID
    const index = jobs.findIndex((job) => job.id === parseInt(id));
  
    // Check if the job exists
    if (index === -1) {
      return res.status(404).json({ error: "Job not found" });
    }
  
    // Remove the job from the list
    jobs.splice(index, 1);

  res.json({ message: "Job deleted successfully" });
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob
};