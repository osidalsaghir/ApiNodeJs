const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Section.create);
router.post("/update", Controller.Section.update);
router.post("/delete", Controller.Section.delete);
router.post("/getall", Controller.Section.getAll);
module.exports = router;
