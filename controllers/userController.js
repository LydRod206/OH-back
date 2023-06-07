const users = [
    { id: 1, firstName: "Bella", lastName: "Swan", email: "bella@example.com", password: "twilight123" },
    { id: 2, firstName: "Edward", lastName: "Cullen", email: "edward@example.com", password: "vampire456" }
  ];
  
  const getUsers = (req, res) => {
    res.json(users);
  };
  
  const getUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  };
  
  const createUser = (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUserId = users.length + 1;
    const newUser = { id: newUserId, firstName, lastName, email, password };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { firstName, lastName, email, password } = req.body;
    const user = users.find((user) => user.id === userId);
    if (user) {
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.email = email || user.email;
      user.password = password || user.password;
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  };
  
  const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex((user) => user.id === userId);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      res.json(deletedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  };
  
  module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
  };
  
  
  
  
  
  // ------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------
  
  
  // const users = [
  //     { id: 1, firstName: "Bella", lastName: "Swan", email: "bella@example.com", password: "twilight123" },
  //     { id: 2, firstName: "Edward", lastName: "Cullen", email: "edward@example.com", password: "vampire456" }
  //   ];
    
    // Register a new user
    // const signup = (req, res) => {
    //   const { firstName, lastName, email, password } = req.body;
    
      // Check if the email is already registered
      // const existingUser = users.find((user) => user.email === email);
      // if (existingUser) {
      //   return res.status(400).json({ error: "Email already registered" });
      // }
    
      // Generate a unique ID for the new user
      // const newUserId = users.length + 1;
    
      // Create a new user object
      // const newUser = {
      //   id: newUserId,
      //   firstName,
      //   lastName,
      //   email,
      //   password
      // };
    
      // Add the new user to the list of users
      // users.push(newUser);
    
      // Return the newly created user object
    //   res.status(201).json({ message: "User registered successfully", user: newUser });
    // };
    
    // User login
    // const login = (req, res) => {
    //   const { email, password } = req.body;
    
      // Find the user with the provided email
      // const user = users.find((user) => user.email === email);
    
      // Check if the user exists and the password matches
      // if (!user || user.password !== password) {
        // Return an error message
        // return res.status(401).json({ error: "Invalid email or password" });
      // }
    
      // Return the user object
      // res.json({ message: "Login successful", user });
    // };
    
    // module.exports = { signup, login };
    