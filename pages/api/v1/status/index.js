function status(req, res) {
  res
    .status(200)
    .json({ chave: "Alunos do curso.dev são pessoas acimda da média" });
}

export default status;
