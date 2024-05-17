const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: '177.153.208.100',
  user: 'bluecare',
  password: 'tccEtecMAR021421@',
  database: 'bluecare'
});

app.get('/api/aluno', (req, res) => {
  db.query('SELECT * FROM aluno', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
