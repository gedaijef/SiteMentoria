const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/serieController');

router.get('/', seriesController.getSeries);
router.post('/', seriesController.createSerie);
router.get('/:id', seriesController.getSerieById);
router.put('/:id', seriesController.updateSerie);
router.delete('/:id', seriesController.deleteSerie);

module.exports = router;
