const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Serviço ORDERS funcionando 📦');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Orders rodando na porta 3000');
});
