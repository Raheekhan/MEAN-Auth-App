const mongoose = require('mongoose');
const config = require('../config/database');

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200
  }
});

const ContactForm = module.exports = mongoose.model('ContactForm', contactSchema);
