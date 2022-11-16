const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const chalk = require("chalk");
const { readdirSync } = require("fs");
require("dotenv").config();

//app
const app = express();

//connect DB
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("ERROR connect"));

//midleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

//routes localhost:8000/api/
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log("Server is runing: " + chalk.blueBright(port))
);
