const db = require('../models/professoresModel');

exports.getProfessores = async (req, res) => {
  try {
    const professores = await db.Professor.findAll({ include: db.Disciplina });
    res.json(professores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProfessor = async (req, res) => {
  try {
    const professor = await db.Professor.create(req.body);
    res.json(professor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProfessorById = async (req, res) => {
  try {
    const professor = await db.Professor.findByPk(req.params.id, { include: db.Disciplina });
    res.json(professor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfessor = async (req, res) => {
  try {
    const professor = await db.Professor.update(req.body, { where: { id: req.params.id } });
    res.json(professor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProfessor = async (req, res) => {
  try {
    await db.Professor.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Professor deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
