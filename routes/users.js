const mongoose = require('mongoose');

const plm  = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jd-db");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],

  profileImage: {
    type: String
  },
  
  email: {
    type: String,
    required: true,
    unique: true
  }
  
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);


