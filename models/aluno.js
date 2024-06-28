const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbmonitoria',
    password: '1234',
    port: 5432,
});

// Conexão com o banco de dados
pool.connect();

// Função para obter os alunos
function getAlunos(callback) {
  pool.query("SELECT * FROM aluno", (err, res) => {
    if (err) {
      throw err;
    }
    callback(res.rows);
  });
}

// Função para adicionar um novo aluno
function addAluno(nome, email) {
  pool.query(
    "INSERT INTO aluno (nome, email) VALUES ($1, $2)",
    [nome, email],
    (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Aluno adicionado com sucesso");
      }
    }
  );
}

// Função para remover um aluno
function removeAluno(id) {
  pool.query("DELETE FROM aluno WHERE id = $1", [id], (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Aluno removido com sucesso");
    }
  });
}

// Funcção para pegar os alunos por monitoria específica
exports.getAlunosPorMonitoria = (data, horario, disciplina, serie, callback) => {
    const query = `
        SELECT a.nome, a.email
        FROM Aluno a
        JOIN Monitoria mon ON mon.aluno_id = a.id
        JOIN Disciplina disc ON disc.id = mon.disciplina_id
        WHERE 
            mon.data = $1
            AND mon.horario = $2
            AND disc.nome = $3
            AND mon.serie_id = $4;
    `;
    const values = [data, horario, disciplina, serie];

    pool.query(query, values, (error, results) => {
        if (error) {
            throw error;
        }
        callback(results.rows);
    });
};