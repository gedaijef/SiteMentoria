const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const alunoController = require('./controllers/alunoController');
const monitoriaController = require('./controllers/monitoriaController');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/alunos', alunoController.getAlunos);
app.post('/adicionar', alunoController.addAluno);
app.get('/remover/:id', alunoController.removeAluno);
app.get('/monitorias', monitoriaController.getMonitorias);
app.post('/adicionarMonitoria', monitoriaController.addMonitoria);
app.get('/alunos/monitoria', alunoController.getAlunosPorMonitoria)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
