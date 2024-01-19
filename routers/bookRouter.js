const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


router.get('/booksread', bookController.index);
router.put('/bookread', bookController.create);

module.exports = router