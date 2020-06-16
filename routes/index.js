const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');


//console.log("Router up");

router.get('/', homeController.home);

router.use('/users', require('./users'));

router.use('/users/posts',require('./posts'));


module.exports = router;
