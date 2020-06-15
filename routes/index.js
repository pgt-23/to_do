const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');


console.log("Router up");

router.get('/', homeController.home);

router.get('/action', homeController.action);

module.exports = router;
