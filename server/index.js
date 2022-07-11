const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://localhost/startupeer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err)
  });


