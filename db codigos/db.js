const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: '177.153.208.100',     // Endereço do servidor MySQL
    user: 'bluecare',          // Usuário do MySQL
    password: 'tccEtecMAR021421@',  // Senha do MySQL
    database: 'bluecare'       // Nome do banco de dados
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

app.get('/aluno/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT nome FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao buscar dados' });
      return;
    }
    if (results.length > 0) {
      res.json({ nome: results[0].nome });
    } else {
      res.status(404).json({ error: 'Aluno não encontrado' });
    }
  });
});

const PORT = 3306;
app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT3306});
});