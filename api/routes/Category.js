const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Category.create);
router.post("/update", Controller.Category.update);
router.post("/delete", Controller.Category.delete);
router.post("/getall", Controller.Category.getAll);
module.exports = router;
