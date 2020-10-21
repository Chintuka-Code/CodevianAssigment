const express = require('express');
require('dotenv').config();
const api = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

// Import route
const UserRoute = require('./Route/user');

const PORT = process.env.PORT || 3000;
const URL = process.env.connectionURL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    useUnifiedTopology: true,
    // reconnectTries: 30,
    // reconnectInterval: 500,
    poolSize: 10,
  })
  .then(() => {
    console.log('database connect');
  })
  .catch((error) => {
    console.log(error);
    res.json({ err: 1, msg: error });
  });

api.use(cors());
api.use(bodyparser.json());
api.use('/api/user', UserRoute);

api.listen(PORT, () => {
  console.log(`server start listning port ${PORT}`);
});
