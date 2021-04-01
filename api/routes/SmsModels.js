const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.SmsModels.create);
router.post("/update", Controller.SmsModels.update);
router.post("/delete", Controller.SmsModels.delete);
router.post("/getall", Controller.SmsModels.getAll);
module.exports = router;
