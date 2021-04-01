const express = require("express");
const router = express.Router();
const Controller = require('../controllers/Controller');
const checkAuth = require('../middleware/check-auth');
router.post("/create", Controller.Curses.create);
router.post("/update", Controller.Curses.update);
router.post("/delete", Controller.Curses.delete);
router.post("/getall", Controller.Curses.getAll);
module.exports = router;
