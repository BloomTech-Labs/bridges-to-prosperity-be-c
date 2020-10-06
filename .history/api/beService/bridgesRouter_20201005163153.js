const router = require('express').Router();
const Bridges = require('./bridgesModel');
// const authRequired = require('../middleware/authRequired');

router.get('/', (req, res) => {
  Bridges.findBridges()
    .then((bridges) => {
      res.status(200).json(bridges);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get Bridges' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Bridges.findById({ id })
    .then((bridge) => {
      res.status(200).json(bridge);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: `cannot get bridge by id at this time` });
    });
});



module.exports = router;
