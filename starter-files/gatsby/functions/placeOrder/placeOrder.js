const nodemailer = require('nodemailer');

// create a transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'theo.mertz@ethereal.email',
    pass: 'sTR4h6X8WB83QxRZ5V',
  },
});
