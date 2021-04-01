const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');


router.post("/create", Controller.Api.create);
router.post("/update", Controller.Api.update);
router.post("/delete", Controller.Api.delete);
router.post("/getall", Controller.Api.getAll);

module.exports = router;
