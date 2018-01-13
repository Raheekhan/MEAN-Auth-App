const express = require('express');
const router = express.Router();
const _ = require('lodash');
const config = require('../config/database');
const ContactForm = require('../models/contactForm');

router.post('/contact', (req, res) => {
  var body = _.pick(req.body, ['name', 'email', 'message']);
  var form = new ContactForm(body);

  form.save((err, f) => {
    if (err) {
      res.json({success: false, msg: 'Please fill out all fields'});
    } else {
      res.json({success: true, msg: 'Email sent'});
    }
  });
});

module.exports = router;
