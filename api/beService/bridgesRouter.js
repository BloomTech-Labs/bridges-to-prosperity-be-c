const router = require('express').Router();
const Bridges = require('./bridgesModel');
const authRequired = require('../middleware/authRequired');

router.get('/bridges', authRequired, (req, res) => {
  Bridges.findBridges()
    .then((bridges) => {
      res.status(200).json({ bridges });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get Bridges' });
    });
});

router.get('/bridges/:id', authRequired, (req, res) => {
  const { id } = req.params;
  Bridges.findById({ id })
    .then((bridge) => {
      res.status(200).json({ bridge });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: `cannot get bridge by id at this time` });
    });
});
