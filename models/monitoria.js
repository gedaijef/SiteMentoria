const { Client } = require('pg');

// Configuração da conexão com o banco de dados
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'dbmonitoria',
    password: '1234',
    port: 5432,
});

// Conecte-se ao banco de dados
client.connect();

// Função para obter as monitorias
function getMonitorias(callback) {
    client.query('SELECT * FROM monitoria', (err, res) => {
        if (err) {
            throw err;
        }
        callback(res.rows);
    });
}

// Função para adicionar uma nova monitoria
function addMonitoria(nome, email) {
    client.query("INSERT INTO monitoria (nome, email) VALUES ($1, $2)", [nome, email], (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Monitoria adicionada com sucesso');
        }
    });
}

// Função para remover uma monitoria
function removeMonitoria(id) {
    client.query("DELETE FROM monitoria WHERE id = $1", [id], (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Monitoria removida com sucesso');
        }
    });
}

module.exports = { addMonitoria, getMonitorias, removeMonitoria };
