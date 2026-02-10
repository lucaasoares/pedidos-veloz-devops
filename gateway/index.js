const express = require('express');

const app = express();
app.use(express.json());

// Serviços internos vindos das variáveis do Docker Compose
const ORDER_SERVICE = process.env.ORDER_SERVICE || 'http://localhost:3000';
const STOCK_SERVICE = process.env.STOCK_SERVICE || 'http://localhost:3001';

// Rota de teste principal
app.get('/', (req, res) => {
  res.send('Gateway funcionando corretamente 🚀');
});

// Healthcheck (usado depois no Kubernetes)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Inicialização
const PORT = 8080;
app.listen(PORT, () => {
  console.log('Gateway online na porta ' + PORT);
});
