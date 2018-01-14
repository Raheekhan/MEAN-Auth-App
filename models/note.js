const mongoose = require('mongoose');
const config = require('../config/database');

const noteSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 1
  },
  completed: {
    type: Boolean,
    default: false
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Note = module.exports = mongoose.model('Note', noteSchema);
