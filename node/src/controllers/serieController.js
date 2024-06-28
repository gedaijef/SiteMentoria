const db = require('../models/serieModel');

exports.getSeries = async (req, res) => {
  try {
    const series = await db.Serie.findAll();
    res.json(series);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSerie = async (req, res) => {
  try {
    const serie = await db.Serie.create(req.body);
    res.json(serie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSerieById = async (req, res) => {
  try {
    const serie = await db.Serie.findByPk(req.params.id);
    res.json(serie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSerie = async (req, res) => {
  try {
    const serie = await db.Serie.update(req.body, { where: { id: req.params.id } });
    res.json(serie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSerie = async (req, res) => {
  try {
    await db.Serie.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Serie deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
