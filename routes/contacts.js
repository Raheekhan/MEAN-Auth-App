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

  // form.save().then(() => {
  //   res.json({success: true, msg: 'Email sent'});
  // }).catch((e) => {
  //   res.json({success: false, msg: 'Failed to send email'});
  //   res.status(400).send(e);
  // });
});

module.exports = router;
