const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.learningPlan.create);
router.post("/update", Controller.learningPlan.update);
router.post("/delete", Controller.learningPlan.delete);
router.post("/getall", Controller.learningPlan.getAll);
module.exports = router;
