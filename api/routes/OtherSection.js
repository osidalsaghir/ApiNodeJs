const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.OtherSection.create);
router.post("/update", Controller.OtherSection.update);
router.post("/delete", Controller.OtherSection.delete);
router.post("/getall", Controller.OtherSection.getAll);
module.exports = router;
