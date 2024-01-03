const mongoose = require('mongoose');
// Define the post schema
const postSchema = new mongoose.Schema({
  
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateTime: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: []
  },

  image: {
    type: String
  }
});

module.exports = mongoose.model('Post', postSchema);
