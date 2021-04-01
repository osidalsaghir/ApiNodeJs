const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Lesson.create);
router.post("/update", Controller.Lesson.update);
router.post("/delete", Controller.Lesson.delete);
router.post("/getall", Controller.Lesson.getAll);
module.exports = router;
