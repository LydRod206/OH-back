const express = require('express');
const nodemailer = require("nodemailer");
const cors = require("cors");
const sequelize = require('./config/database');
const controllers = require('./controllers');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "25mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: ['https://only-hands.netlify.app', 'http://localhost:3000'],
  optionsSuccessStatus: 200
}));

function sendEmail({ recipient_email, subject, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "boisefosters@gmail.com",
        pass: "ppjnqkpgckvlgbpp"
      }
    });

    const mailConfig = {
      from: "Only Hands Invoicing <boisefosters@gmail.com>",
      to: recipient_email,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailConfig, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred: ${error.message}` });
      }
      return resolve({ message: "Email sent successfully!" });
    });
  });
}

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/greeting', (req, res) => {
  res.json({ greeting: "hello" });
});

app.post("/send_email", (req, res) => {
  const { recipient_email, subject, message } = req.body;
  sendEmail({ recipient_email, subject, message })
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// Set up your controllers
app.use('/', controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log('Merged Email + Backend Server running at http://localhost:' + port);
  });
});











// ----below is the original index.js before merging the 2 

// const express = require('express');
// const cors = require('cors');
// const sequelize = require('./config/database');
// const controllers = require('./controllers');
// // const authenticate = require("./controllers/authenticate");

// const app = express();
// const PORT = process.env.PORT || 9000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(cors({
//   origin: ['https://only-hands.netlify.app', 'http://localhost:3000'],
//   optionsSuccessStatus: 200
// }));

// // app.use(authenticate);

// app.use('/', controllers);

// app.get('/', (req, res) => {
//   res.send("Hello World")
// })
// app.get('/greeting', (req, res) => {
//   res.json({ greeting: "hello "})
// })

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