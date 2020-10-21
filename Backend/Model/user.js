const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  number: { type: Number, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('user', user);
