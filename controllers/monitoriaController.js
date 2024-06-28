const Monitoria = require('../models/monitoria');

exports.addMonitoria = (req, res) => {
    Monitoria.addMonitoria(req.body.nome, req.body.email);
    res.redirect('/monitorias');
}

exports.getMonitorias = (req, res) => {
    Monitoria.getMonitorias((monitorias) => {
        res.render('index', { monitorias });
    });
}

exports.removeMonitoria = (req, res) => {
    const { id } = req.params;
    Monitoria.removeMonitoria(parseInt(id));
    res.redirect('/monitorias');
}
