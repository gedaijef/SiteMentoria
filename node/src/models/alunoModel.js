const pool = require('../database');

// CONSULTAS BÁSICAS 
const getAllAlunos = async () => {
  const result = await pool.query('SELECT * FROM Aluno');
  return result.rows;
};

const getAlunoById = async (id) => {
  const result = await pool.query('SELECT * FROM Aluno WHERE id = $1', [id]);
  return result.rows[0];
};

const createAluno = async (aluno) => {
  const result = await pool.query(
    'INSERT INTO Aluno (nome, email) VALUES ($1, $2) RETURNING *',
    [aluno.nome, aluno.email]
  );
  return result.rows[0];
};

const updateAluno = async (id, aluno) => {
  const result = await pool.query(
    'UPDATE Aluno SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
    [aluno.nome, aluno.email, id]
  );
  return result.rows[0];
};

const deleteAluno = async (id) => {
  await pool.query('DELETE FROM Aluno WHERE id = $1', [id]);
};

// CONSULTAS ESPECÍFICAS

// // CONSULTA PARA VERIFICAR OS ALUNOS QUE MARCARAM EM TAL DATA, HORARIO, DISCIPLINA E SERIE
// const getMonitoriaByDataHorarioDisciplinaSerie = async (data, horario, disciplina, serieId) => {
//   const result = await pool.query(`
//     SELECT a.nome, a.email
//       FROM Aluno a
//       JOIN Monitoria mon ON mon.aluno_id = a.id
//       JOIN Disciplina disc ON disc.id = mon.disciplina_id
//       WHERE 
//           mon.data = '${data}' 
//           AND mon.horario = '${horario}'
//           AND disc.nome = '${disciplina}'
//         AND mon.serie_id = ${serieId};`, [data, horario, disciplina, serieId]);
//   return result.rows;
// }

// EXPORTAÇÃO DE FUNÇÕES
module.exports = {
  getAllAlunos,
  getAlunoById,
  createAluno,
  updateAluno,
  deleteAluno,
  // getMonitoriaByDataHorarioDisciplinaSerie
};