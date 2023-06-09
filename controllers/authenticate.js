// // authenticate.js

// const jwt = require("jsonwebtoken");
// const secretKey = process.env.JWT_SECRET_KEY;

// const authenticate = (req, res, next) => {
//   // Get the token from the Authorization header
//   const token = req.headers.authorization;

//   // Check if the token is present
//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   try {
//     // Verify and decode the token
//     const decoded = jwt.verify(token, secretKey);

//     // Set the authenticated user information in the request object
//     req.user = decoded;

//     // Move to the next middleware or route handler
//     next();
//   } catch (err) {
//     // Token verification failed
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// module.exports = authenticate;
