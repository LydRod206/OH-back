const jobCategories = [
    {
      id: 1,
      name: "Child Care"
    },
    {
      id: 2,
      name: "Cleaning"
    },
    {
      id: 3,
      name: "Cooking"
    },
    {
      id: 4,
      name: "Dog Walking"
    },
    {
      id: 5,
      name: "Yard Work"
    },
    {
      id: 6,
      name: "Hardly Work"
    }
  ];
  
  // Get all job categories
  const getAllJobCategories = (req, res) => {
    res.json({ jobCategories });
  };
  
  // Get a specific job category by ID
  const getJobCategoryById = (req, res) => {
    const { id } = req.params;
  
    // Find the job category with the provided ID
    const jobCategory = jobCategories.find((category) => category.id === parseInt(id));
  
    // Check if the job category exists
    if (!jobCategory) {
      return res.status(404).json({ error: "Job category not found" });
    }
  
    res.json({ jobCategory });
  };
  
  module.exports = {
    getAllJobCategories,
    getJobCategoryById
  };
  