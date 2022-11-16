const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
require("dotenv").config();

//app
const app = express();

//connect DB

//midleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is runing: ' + chalk.blueBright(port)));
