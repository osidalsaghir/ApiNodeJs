const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Instructor.create);
router.post("/update", Controller.Instructor.update);
router.post("/delete", Controller.Instructor.delete);
router.post("/getall", Controller.Instructor.getAll);
module.exports = router;
