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
router.get('/0/imgs', (req, res) => {
  Bridges.findBridges()
    .select('befere_img', 'after_img')
    .whereNotNull()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

router.get('/:project_code', (req, res) => {
  const { project_code } = req.params;
  Bridges.findById(project_code)
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

router.post('/', (req, res) => {
  Bridges.add(req.body)
    .then((proj) => {
      res.status(200).json(proj);
    })
    .catch((err) => {
      res.status(500).json({ Error: `${err}` });
    });
});

router.put('/:id', (req, res) => {
  Bridges.findById(req.params.id)
    .then((item) => {
      if (item) {
        Bridges.update(req.body, req.params.id)
          .then((changed) => {
            res.status(200).json(changed);
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      } else {
        res.status(404).json({ error: 'item could not be found' });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
