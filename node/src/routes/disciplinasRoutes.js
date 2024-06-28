const express = require('express');
const router = express.Router();
const disciplinasController = require('../controllers/disciplinaController');

router.get('/', disciplinasController.getDisciplinas);
router.post('/', disciplinasController.createDisciplina);
router.get('/:id', disciplinasController.getDisciplinaById);
router.put('/:id', disciplinasController.updateDisciplina);
router.delete('/:id', disciplinasController.deleteDisciplina);

module.exports = router;
