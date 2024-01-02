const express = require('express');
const path = require('path');

const app = express();

// 各ページのルーティング
app.get('/', (req, res) => {
  app.use(express.static(path.join(__dirname, 'public')));
});
app.get('/Test', (req, res) => {
  app.use(express.static(path.join(__dirname, 'public', 'Test')));
});
app.get('/gamescene', (req, res) => {
  app.use(express.static(path.join(__dirname, 'public', 'gamescene')));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
