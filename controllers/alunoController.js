const Aluno = require('../models/aluno');

exports.addAluno = (req, res) => {
    Aluno.addAluno(req.body.nome, req.body.email);
    res.redirect('/alunos');
}

exports.getAlunos = (req, res) => {
    Aluno.getAlunos((alunos) => {
        res.render('index', { alunos });
    });
}

exports.removeAluno = (req, res) => {
    const { id } = req.params;
    Aluno.removeAluno(parseInt(id));
    res.redirect('/alunos');
}

exports.getAlunosPorMonitoria = (req, res) => {
    const { data, horario, disciplina, serie } = req.query;

    Aluno.getAlunosPorMonitoria(data, horario, disciplina, serie, (alunos) => {
        res.render('index', { alunos });
    });
}