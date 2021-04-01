const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Cuurency.create);
router.post("/update", Controller.Cuurency.update);
router.post("/delete", Controller.Cuurency.delete);
router.post("/getall", Controller.Cuurency.getAll);
module.exports = router;
