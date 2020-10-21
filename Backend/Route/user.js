const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../Model/user');
const AUTHENTICATION_KEY = process.env.AUTHENTICATION_KEY;

router.get('/login', async (req, res) => {
  try {
    const email = req.header('email');
    const password = req.header('password');
    const payload = { email: email, password: password };
    const token = await jwt.sign(payload, AUTHENTICATION_KEY);
    const data = await UserModel.findOne({ email: email });
    if (data == null) {
      res.json({ err: 1, msg: 'Email not Found' });
    } else {
      const storePassword = data.password;
      const compairResult = await bcrypt.compare(password, storePassword);
      if (compairResult) {
        res.json({
          err: 0,
          msg: 'Login Success',
          token: token,
          email: data.email,
        });
      } else {
        res.json({ err: 1, msg: 'Password Not match' });
      }
    }
  } catch (error) {
    res.json({ err: 1, msg: error });
  }
});

router.post('/register', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const number = req.body.number;
    const address = req.body.address;
    const payload = req.body;
    const encryptPassword = await bcrypt.hash(password, 10);
    const token = await jwt.sign(payload, AUTHENTICATION_KEY);

    const newUser = new UserModel({
      email: email,
      password: encryptPassword,
      number: number,
      address: address,
    });
    const data = await newUser.save();
    res.json({ err: 0, token: token, email: data.email });
  } catch (error) {
    if (error.name == 'MongoError') {
      res.json({ err: 1, msg: 'Email already Found' });
    } else {
      res.json({ err: 1, msg: error });
    }
  }
});

router.get('/getuser', async (req, res) => {
  try {
    const email = req.query.email;
    const token = req.query.token;
    const verifyToken = await jwt.verify(token, AUTHENTICATION_KEY);
    const data = await UserModel.findOne({ email: email });
    res.json({ err: 0, data: data });
  } catch (error) {
    if (error.message == 'jwt malformed') {
      res.json({ err: 1, msg: 'Unauthorised User' });
    } else {
      res.json({ err: 1, msg: error });
    }
  }
});

router.post('/updateUser', async (req, res) => {
  try {
    const token = req.body.token;
    const verifyToken = await jwt.verify(token, AUTHENTICATION_KEY);
    const email = req.body.data.email;
    const number = req.body.data.number;
    const address = req.body.data.address;
    const data = await UserModel.findOneAndUpdate(
      { email: email },
      { $set: { email: email, number: number, address: address } }
    );
    res.json({ err: 0, data: data });
  } catch (error) {
    res.json({ err: 1, msg: error });
  }
});

router.get('/getallUser', async (req, res) => {
  try {
    const data = await UserModel.find();
    res.json({ err: 0, data: data });
  } catch (error) {
    res.json({ err: 1, msg: error });
  }
});

module.exports = router;
