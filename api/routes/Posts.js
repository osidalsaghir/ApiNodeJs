const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Posts.create);
router.post("/update", Controller.Posts.update);
router.post("/delete", Controller.Posts.delete);
router.post("/getall", Controller.Posts.getAll);
module.exports = router;
