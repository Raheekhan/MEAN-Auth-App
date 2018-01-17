const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Card = require('../models/card');

router.post('/purchase-plan', (req, res, next) => {
  let newCard = new Card({
    cardnumber: req.body.cardnumber,
    cardcvv: req.body.cardcvv,
    month: req.body.month,
    year: req.body.year
  });

  Card.addCard(newCard, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Unable to make the purchase'});
    } else {
      res.json({success: true, msg: 'Purchase successful!'});
    }
  });
});

module.exports = router;
