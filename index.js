const express = require('express');
const app = express();

app.use(express.json());

// Importar rotas de produtos
const rotasTarefas = require('./routes/tarefas');
app.use('/tarefas', rotasTarefas);

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
