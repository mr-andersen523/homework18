const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://username123:password123@ds051843.mlab.com:51843/heroku_x22llr6r", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://username123:password123@ds051843.mlab.com:51843/heroku_x22llr6r";

// mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});