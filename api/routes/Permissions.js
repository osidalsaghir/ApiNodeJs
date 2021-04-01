const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Permissions.create);
router.post("/update", Controller.Permissions.update);
router.post("/delete", Controller.Permissions.delete);
router.post("/getall", Controller.Permissions.getAll);
module.exports = router;
