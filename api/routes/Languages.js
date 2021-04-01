const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Languages.create);
router.post("/update", Controller.Languages.update);
router.post("/delete", Controller.Languages.delete);
router.post("/getall", Controller.Languages.getAll);
module.exports = router;
