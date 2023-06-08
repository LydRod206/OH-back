const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const controllers = require('./controllers');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS for specific origin
app.use(cors({
  origin: ['https://only-hands.netlify.app', 'http://localhost:3000'],
  optionsSuccessStatus: 200
}));

// Set up routes
app.use('/', controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Backend Server running on PORT ' + PORT);
  });
});

module.exports = app;








// const express = require('express');
// const cors = require('cors');
// const sequelize = require('./config/database');

// const controllers = require('./controllers');


// // Import routes
// // const userRoutes = require('./routes/userRoutes');
// // const allRoutes = require('./controllers/');
// // const mainRoutes = require('./controllers/mainRoutes');


// // var testAPIRouter = require("./routes/testAPI");

// // Create Express app
// const app = express();
// const PORT = process.env.PORT || 9000;

// // Set up middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Enable CORS for specific origin
// app.use(cors({
//   origin: ['https://only-hands.netlify.app','http://localhost:3000'],
//   optionsSuccessStatus: 200
// }));

// // Set up routes
// app.use('/', controllers);
// // app.use('/users', userRoutes);
// // app.use('/', allRoutes);
// // app.use("/", mainRoutes);


// // app.use("/testAPI", testAPIRouter);

// // Sync database and start server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     console.log('Backend Server running on PORT ' + PORT);
//   });
// });

// module.exports = app;





// const express = require('express');
// const cors = require('cors');
// const sequelize = require('./config/database');

// const controllers = require('./controllers');


// // Import routes
// // const userRoutes = require('./routes/userRoutes');
// // const allRoutes = require('./controllers/');
// // const mainRoutes = require('./controllers/mainRoutes');


// // var testAPIRouter = require("./routes/testAPI");

// // Create Express app
// const app = express();
// const PORT = process.env.PORT || 9000;

// // Set up middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// // this connects Netlify frontend
// app.use(cors({
//     origin: 'https://only-hands.netlify.app',
//     optionsSuccessStatus: 200
// }));


// // Set up routes
// app.use('/', controllers);
// // app.use('/users', userRoutes);
// // app.use('/', allRoutes);
// // app.use("/", mainRoutes);


// // app.use("/testAPI", testAPIRouter);

// // Sync database and start server
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => {
//         console.log('Backend Server running on PORT ' + PORT);
//     });
// });

// module.exports = app;