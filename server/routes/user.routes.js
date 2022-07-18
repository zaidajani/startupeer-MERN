const express = require("express");
const User = require("../models/user");
const auth = require("./../middleware/auth");
const Businesses = require("./../models/startup");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const router = express.Router();
const _ = require("lodash");

router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedpassword,
  });

  const realNewUser = await newUser.save();

  res.send(realNewUser);
});

router.get("/info", auth, async (req, res) => {
  const users = await User.findById(req.user._id);
  res.send(_.pick(users, "username", "email"));
});

router.get("/", async (req, res) => {
  const startups = await Businesses.find();
  res.send(startups);
});

router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).send('invalid object ID');
  const startups = await Businesses.findById(req.params.id);
  if (!startups) return res.send('invalid object ID');
  res.send(startups);
});

router.get("/userInfo/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).send('invalid object ID');
  const startups = await User.findById(req.params.id);
  const business = await Businesses.find({ author: req.params.id });
  if (!startups) return res.send('invalid object ID');
  const obj = [{ name: startups.username, email: startups.email, id: startups._id }, business];
  res.send(obj);
});

router.post("/newBusiness", auth, async (req, res) => {
  const userData = await User.findById(req.user._id);
  let userObj = userData;

  const businessData = new Businesses({
    name: req.body.name,
    brief: req.body.brief,
    explaination: req.body.explaination,
    author: req.user._id,
  });
  let data = await businessData.save();
  userObj.makes.push(data._id);
  await User.findByIdAndUpdate(req.user._id, userObj, {
    new: true,
  });

  res.send(data);
});

router.post('/review/:id', auth, async (req, res) => {
  const userData = await User.findById(req.user._id);
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).send('invalid object ID');
  const product = await Businesses.findById(req.params.id);
  if (!product) return res.status(400).send('Product not found');
  let business = product;
  const newReview = {
    by: req.user._id,
    ros: req.body.ros,
    dom: Date.now()
  }
  business.reviews.push(newReview);
  await Businesses.findByIdAndUpdate(req.params.id, business);
  res.send('successfully written');
});

module.exports = router;
