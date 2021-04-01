const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Level.create);
router.post("/update", Controller.Level.update);
router.post("/delete", Controller.Level.delete);
router.post("/getall", Controller.Level.getAll);
module.exports = router;
