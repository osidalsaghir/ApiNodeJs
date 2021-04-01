const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.levelInstructor.create);
router.post("/update", Controller.levelInstructor.update);
router.post("/delete", Controller.levelInstructor.delete);
router.post("/getall", Controller.levelInstructor.getAll);
module.exports = router;
