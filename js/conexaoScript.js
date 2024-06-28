async function fetchReservas() {
  const response = await fetch("http://localhost:3000/reservas");
  const reservas = await response.json();
  // adicionar no tbody as reservas
}

async function addAluno(nome, email) {
  const response = await fetch("http://localhost:3000/alunos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email }),
  });
  const aluno = await response.json();
  return aluno;
}

async function addReserva(
  alunoId,
  serieId,
  disciplinaId,
  turmaId,
  data,
  horario
) {
  const response = await fetch("http://localhost:3000/reservas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      aluno_id: alunoId,
      serie_id: serieId,
      disciplina_id: disciplinaId,
      turma_id: turmaId,
      data,
      horario,
    }),
  });
  const reserva = await response.json();
  return reserva;
}
