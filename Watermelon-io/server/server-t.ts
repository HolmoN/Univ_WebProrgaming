/*
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

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

io.on('connection', (socket) => {
  console.log('クライアントが接続しました');

  // クライアントからのメッセージを受け取ったときの処理
  socket.on('clientEvent', (data) => {
    console.log(`クライアントからのメッセージ: ${data}`);
  });
});

server.listen(3000, () => {
  console.log('サーバーがポート3000で起動しました');
});
*/
