const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Questions.create);
router.post("/update", Controller.Questions.update);
router.post("/delete", Controller.Questions.delete);
router.post("/getall", Controller.Questions.getAll);
module.exports = router;
