const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Ratings.create);
router.post("/update", Controller.Ratings.update);
router.post("/delete", Controller.Ratings.delete);
router.post("/getall", Controller.Ratings.getAll);
module.exports = router;
