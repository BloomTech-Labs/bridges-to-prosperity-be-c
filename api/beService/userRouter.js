const express = require('express');
const router = express.Router();
const Users = require('./userModel');
// const authRequired = require('../middleware/authRequired');

router.get('/', (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get user' });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get user' });
    });
});

module.exports = router;
