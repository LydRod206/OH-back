const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

const users = [
  { id: 1, username: "test100", email: "test100@test.com", password: "test100test100"}
];

const getUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found." });
  }

  // Check if the authenticated user has permission to access the user's information
  if (req.user.userId !== user.id) {
    return res.status(403).json({ error: "Access denied." });
  }

  res.json(user);
};


const createUser = (req, res) => {
  const { username, email, password } = req.body;
  const newUserId = users.length + 1;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const newUser = {
      id: newUserId,
      username,
      email,
      password: hashedPassword, // Store the hashed password
    };

    users.push(newUser);
    res.status(201).json(newUser);
  });
};

const updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { username, email, password } = req.body;
  const user = users.find((user) => user.id === userId);
  if (user) {
    user.username = username || user.username;
    // user.lastName = lastName || user.lastName;
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

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({ error: "Authentication failed. User not found." });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ error: "Authentication failed. Invalid email or password." });
    }

    const token = jwt.sign({ userId: user.id }, secretKey);
    res.json({ token });
  });
};


const signup = (req, res) => {
  const { username, email, password } = req.body;
  const newUserId = users.length + 1;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    const newUser = {
      id: newUserId,
      username,
      email,
      password: hashedPassword, // Store the hashed password
    };

    users.push(newUser);
    
    // Generate a token
    const token = jwt.sign({ userId: newUser.id }, secretKey);

    res.status(201).json({ token });
  });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  signup, 
};







// const users = [
//     { id: 1, firstName: "Bella", lastName: "Swan", email: "bella@example.com", password: "twilight123" },
//     { id: 2, firstName: "Edward", lastName: "Cullen", email: "edward@example.com", password: "vampire456" }
//   ];
  
//   const getUsers = (req, res) => {
//     res.json(users);
//   };
  
//   const getUser = (req, res) => {
//     const userId = parseInt(req.params.id);
//     const user = users.find((user) => user.id === userId);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   };
  
//   const createUser = (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
//     const newUserId = users.length + 1;
//     const newUser = { id: newUserId, firstName, lastName, email, password };
//     users.push(newUser);
//     res.status(201).json(newUser);
//   };
  
//   const updateUser = (req, res) => {
//     const userId = parseInt(req.params.id);
//     const { firstName, lastName, email, password } = req.body;
//     const user = users.find((user) => user.id === userId);
//     if (user) {
//       user.firstName = firstName || user.firstName;
//       user.lastName = lastName || user.lastName;
//       user.email = email || user.email;
//       user.password = password || user.password;
//       res.json(user);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   };
  
//   const deleteUser = (req, res) => {
//     const userId = parseInt(req.params.id);
//     const index = users.findIndex((user) => user.id === userId);
//     if (index !== -1) {
//       const deletedUser = users.splice(index, 1)[0];
//       res.json(deletedUser);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   };
  
//   module.exports = {
//     getUsers,
//     getUser,
//     createUser,
//     updateUser,
//     deleteUser
//   };
