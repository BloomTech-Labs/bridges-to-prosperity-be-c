const router = require('express').Router();
const Bridges = require('./bridgesModel');

/**
 * @swagger
 * /bridges:
 *  get:
 *    description: Returns a list of all Bridges
 *    summary: Get a list of all Bridges
 *    security:
 *      - okta: []
 *    tags:
 *      - bridges
 *    responses:
 *      200:
 *        description: array of Bridges
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - project_code: 1007327
 *                  after_img: null
 *                  before_img: null
 *                  province: "Eastern Province"
 *                  district: "Bugesera"
 *                  sector: "Kabukuba"
 *                  cell: "Unknown"
 *                  bridge_site_name: "Gikana"
 *                  project_stage: "Rejected"
 *                  bridge_type: "Unknown"
 *                  latitude: -2.072628
 *                  longitude: 30.204382
 *                  individuals_directly_served: "Unknown"
 *                  assessment_date: "2018-05-14"
 *                  original_community_col: "Community Served 2"
 *                  community_served: "Mbuye"
 *                  prov_id: 5
 *                  district_id: 57
 *                  sector_id: 0
 *                  cell_id: 0
 *
 *                - project_code: 1007327
 *                  after_img: null
 *                  before_img: null
 *                  province: "Eastern Province"
 *                  district: "Bugesera"
 *                  sector: "Kabukuba"
 *                  cell: "Unknown"
 *                  bridge_site_name: "Gikana"
 *                  project_stage: "Rejected"
 *                  bridge_type: "Unknown"
 *                  latitude: -2.072628
 *                  longitude: 30.204382
 *                  individuals_directly_served: "Unknown"
 *                  assessment_date: "2018-05-14"
 *                  original_community_col: "Community Served 2"
 *                  community_served: "Mbuye"
 *                  prov_id: 5
 *                  district_id: 57
 *                  sector_id: 0
 *                  cell_id: 0
 *      500:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
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

/**
 * @swagger
 * /bridges/0/imgs:
 *  get:
 *    description: Returns a list of all images in links
 *    summary: Get a list of all images in links
 *    security:
 *      - okta: []
 *    tags:
 *      - bridges
 *    responses:
 *      200:
 *        description: array of image links
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - after_img:  "https://farm4.staticflickr.com/3732/19313901332_5be63b5257_z.jpg"
 *                  before_img: "https://live.staticflickr.com/65535/48105851421_811fdd72bb_k.jpg"
 *
 *                - after_img:  "https://farm4.staticflickr.com/3732/19313901332_5be63b5257_z.jpg"
 *                  before_img: "https://live.staticflickr.com/65535/48105851421_811fdd72bb_k.jpg"
 *      500:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
router.get('/0/imgs', (req, res) => {
  Bridges.getImgs()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

/**
 * @swagger
 * components:
 *  parameters:
 *     project_code:
 *      name: project_code
 *      description: Unique project Code
 *      required: true
 *      in: path
 *      example: 1007327
 *      schema:
 *         type: integer
 *
 * /bridges/:project_code:
 *  get:
 *    description: Returns a list with one matching bridge
 *    summary: Get a list with one bridges data
 *    security:
 *      - okta: []
 *    tags:
 *      - bridges
 *    parameters:
 *      - $ref: '#/components/parameters/project_code'
 *    responses:
 *      200:
 *        description: array of Bridges
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - project_code: 1007327
 *                  after_img: null
 *                  before_img: null
 *                  province: "Eastern Province"
 *                  district: "Bugesera"
 *                  sector: "Kabukuba"
 *                  cell: "Unknown"
 *                  bridge_site_name: "Gikana"
 *                  project_stage: "Rejected"
 *                  bridge_type: "Unknown"
 *                  latitude: -2.072628
 *                  longitude: 30.204382
 *                  individuals_directly_served: "Unknown"
 *                  assessment_date: "2018-05-14"
 *                  original_community_col: "Community Served 2"
 *                  community_served: "Mbuye"
 *                  prov_id: 5
 *                  district_id: 57
 *                  sector_id: 0
 *                  cell_id: 0
 *      500:
 *        $ref: '#/components/responses/UnauthorizedError'
 */

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

/**
 * @swagger
 * components:
 *  parameters:
 *     newProject:
 *      name: New project JSON
 *      description: Object with the same shape as the bridge object only unique project_code is required
 *      required: true
 *      in: body of Request
 *      example: 
 *        {
              "project_code": 20,
              "after_img": "hello",
              "before_img": null,
              "province": null,
              "district": null,
              "sector": null,
              "cell": null,
              "bridge_site_name": null,
              "project_stage": null,
              "bridge_type": null,
              "latitude": null,
              "longitude": null,
              "individuals_directly_served": null,
              "assessment_date": null,
              "original_community_col": null,
              "community_served": null,
              "prov_id": null,
              "district_id": null,
              "sector_id": null,
              "cell_id": null
           }
 *      schema:
 *         type: object
 *       
 *
 * /bridges:
 *  post:
 *    description: Returns a list with one matching bridge
 *    summary: Get a list with one bridges data
 *    security:
 *      - okta: []
 *    tags:
 *      - bridges
 *    parameters:
 *      - $ref: '#/components/parameters/newProject'
 *    responses:
 *      200:
 *        description: Recently created bridge
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - project_code: 1007327
 *                  after_img: null
 *                  before_img: null
 *                  province: "Eastern Province"
 *                  district: "Bugesera"
 *                  sector: "Kabukuba"
 *                  cell: "Unknown"
 *                  bridge_site_name: "Gikana"
 *                  project_stage: "Rejected"
 *                  bridge_type: "Unknown"
 *                  latitude: -2.072628
 *                  longitude: 30.204382
 *                  individuals_directly_served: "Unknown"
 *                  assessment_date: "2018-05-14"
 *                  original_community_col: "Community Served 2"
 *                  community_served: "Mbuye"
 *                  prov_id: 5
 *                  district_id: 57
 *                  sector_id: 0
 *                  cell_id: 0
 *      500:
 *        $ref: '#/components/responses/UnauthorizedError'
 */
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
