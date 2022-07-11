const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();
const app = express();

router.post('/', async (req, res) => {
  const userMongo = await User.findOne({ email: req.body.email });
  if (!userMongo) return res.status(400).send('User not registered');

  const isMatch = await bcrypt.compare(req.body.password, userMongo.password);
  if (!isMatch) return res.status(400).send('Incorrect password');

  const token = userMongo.generateAuthToken();
  res.send(token);
});

module.exports = router;