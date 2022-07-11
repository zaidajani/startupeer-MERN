const express = require("express");
const mongoose = require("mongoose");
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
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


app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.listen(4000, () => {
  console.log("Server started at port 4000");
});