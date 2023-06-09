const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');




router.get('/', (req, res) => {
  res.send('Welcome to the API ! ! !');
});

// router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// module.exports = router;


// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------


// const express = require('express');
// const router = express.Router();

// Example database of users
let users = [];

// signup a new user
router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Validate input data
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  // Check if user with the same email already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ error: 'User with this email already exists' });
  }

  // Create a new user
  const newUser = {
    id: Date.now().toString(),
    username,
    email,
    password,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});


// User login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate input data
  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide email and password' });
  }

  // Check if user exists
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Check if password is correct
  if (user.password !== password) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // User is authenticated
  res.json({ message: 'Login successful' });
});

module.exports = router;
