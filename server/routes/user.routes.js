const express = require('express');
const User = require('../models/user');
const auth = require('./../middleware/auth');
const bcrypt = require('bcrypt');
const router = express.Router();
const _ = require('lodash');

router.post('/', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered');

  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedpassword
  });

  const realNewUser = await newUser.save();

  res.send(realNewUser);
});

router.get('/info', auth, async (req, res) => {
  const users = await User.findById(req.user._id);
  res.send(_.pick(users, 'username', 'email'));
});

module.exports = router;