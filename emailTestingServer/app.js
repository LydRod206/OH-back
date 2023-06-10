const express = require('express');
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5001;
// const passKey = process.env.GMAIL_PASSKEY;
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());

app.use(express.json({ limit: "25mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail({ recipient_email , subject , message }) {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "boisefosters@gmail.com",
                // user: process.env.GMAIL_NAME,
                pass: "ppjnqkpgckvlgbpp"
                // pass: process.env.GMAIL_PASSKEY
            }
        });

        const mailConfig = {
            from: "Only Hands Invoicing <boisefosters@gmail.com>",
            to: recipient_email,
            subject: subject,
            text: message,
        };
        
        transporter.sendMail(mailConfig, function(error, info) {
            if(error) {
                console.log(error);
                return reject({ message: `An error has occurred: ${error.message}` });
            } 
            return resolve({ message: "Email sent successfully!" });
        });
    });
}

app.get("/", (req, res) => {
    // sendEmail({ 
    //     recipient_email: "recipient_email",
    //     subject: "subject",
    //     message: "message",
    // })
    const { recipient_email , subject , message } = req.body;
    sendEmail({ recipient_email , subject , message })
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/send_email", (req, res) => {
    const { recipient_email , subject , message } = req.body;
    sendEmail({ recipient_email , subject , message })
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`Nodemailer tests listening st http://localhost:${port}`);
});