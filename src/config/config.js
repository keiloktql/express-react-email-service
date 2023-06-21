require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = {
  PORT: parseInt(process.env.PORT) || 8000,
  NODEMAILER_TRANSPORT: nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_AUTH_USER,
      pass: process.env.MAILTRAP_AUTH_PASS,
    },
  }),
};
