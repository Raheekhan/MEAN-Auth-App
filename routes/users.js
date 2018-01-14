const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Don't have to say /users/register since we say
// app.use('/users', users); in the app.js

router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// router.put('/profile', (req, res, next) => {
//   let updateUser = new User({
//     name: req.body.name,
//     email: req.body.email,
//     username: req.body.username,
//     address: req.body.address,
//     city: req.body.city,
//     zipcode: req.body.zipcode,
//     password: req.body.password,
//     newpassword: req.body.newpassword
//   });
//
//   User.updateUser(updateUser, (err, user) => {
//     if (err) {
//       res.json({success: false, msg: 'Failed to update user'});
//     } else {
//       res.json({success: true, msg: 'User updated'});
//     }
//   });
// });

router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;

    if (!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 Week in seconds
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          msg: 'Logged in',
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// To protect route if user not logged in: passport.authenticate('jwt', {session: false})
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
