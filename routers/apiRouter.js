const express = require('express');
const router = express();
const apiController = require('../controllers/apiController');


router.get('/teste', apiController.teste);
router.get('/details', apiController.details);
router.post('/create', apiController.create);
router.put('/update', apiController.update);
router.delete('/:id', apiController.delete);

module.exports = router;