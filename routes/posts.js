const express = require('express');
const router = express.Router();

const postController = require('../controllers/post_controllers');

router.get('/liked',postController.posts);
module.exports = router;