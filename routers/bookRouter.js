const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


router.get('/booksread', bookController.index);
router.post('/booksread', bookController.create);
router.delete('/booksread/:id', bookController.destroy)

module.exports = router