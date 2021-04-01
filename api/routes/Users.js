const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Users.create);
router.post("/update", Controller.Users.update);
router.post("/delete", Controller.Users.delete);
router.post("/getall", Controller.Users.getAll);
module.exports = router;
