const express = require("express");
const cors = require("cors");
const chalk = require("chalk");
const config = require("./src/config/config.js");
const emailRoutes = require("./src/routes/emails.js");

const app = express();
const PORT = config.PORT;

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/emails", emailRoutes);

app.listen(PORT, (error) => {
  if (error) console.log(chalk.red(`FAIL TO LISTEN ON PORT ${PORT}`));
  else console.log(`LISTENING TO PORT ${PORT}`);
});
