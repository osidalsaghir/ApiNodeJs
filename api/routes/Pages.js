const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Pages.create);
router.post("/update", Controller.Pages.update);
router.post("/delete", Controller.Pages.delete);
router.post("/getall", Controller.Pages.getAll);
module.exports = router;
