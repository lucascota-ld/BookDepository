const express = require('express');
const router = express();
const apiController = require('../controllers/apiController');


router.get('/teste', apiController.teste)

module.exports = router;