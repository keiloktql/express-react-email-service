const chalk = require("chalk");
const config = require("../config/config.js");
const { fsReadFileHtml } = require("../../utility.js");

module.exports.sendOneEmail = async (req, res) => {
  try {
    const htmlFile = await fsReadFileHtml("stripe-welcome.html");

    const mailOptions = {
      from: '"Apple Kim" <applekim@acme.com>',
      to: "jasonlee@acme.com",
      subject: "Test: You're now ready to make live transactions with Stripe!",
      html: htmlFile,
    };

    config.nodemailerTransport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(chalk.red(error));
        return res.status(500).send("An error occured when sending email.");
      }
      console.log("Message sent: %s", info.messageId);
    });

    return res.status(200).send("Success! An email has been sent");
  } catch (error) {
    console.log(chalk.red(error));
    return res.status(500).send("An error occured when sending email.");
  }
};
