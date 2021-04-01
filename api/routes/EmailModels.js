const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.EmailModels.create);
router.post("/update", Controller.EmailModels.update);
router.post("/delete", Controller.EmailModels.delete);
router.post("/getall", Controller.EmailModels.getAll);
module.exports = router;
