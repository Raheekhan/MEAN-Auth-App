const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// All objects are String type because Bcrypt is unable to handle Integers
// when saying 'bcrypt.hash(newCard.cardcvv, ...)'
const cardSchema = mongoose.Schema({
  cardnumber: {
    type: String,
    required: true
  },
  cardcvv: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  purchasedAt: {
    type: Date,
    default: Date.now
  }
});

const Card = module.exports = mongoose.model('Card', cardSchema);

module.exports.addCard = function(newCard, callback) {
  // newCard.save(callback);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newCard.cardcvv, salt, (err, hash) => {
      if (err) throw err;
      newCard.cardcvv = hash;
      newCard.save(callback);
    });
  });
}
