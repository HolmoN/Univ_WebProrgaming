const http = require('http');
const express = require('express');
const path = require('path');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

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
//サーバーが起動したときに処理される
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);


});

/*
// クライアントが接続したときの処理
io.on('connection', (socket) => {
  // クライアントに一意のIDを割り当てる（ここでは仮にランダムなIDを生成しています）
  const clientId = Math.random().toString(36).substring(2, 15);
  console.log(`クライアント ${clientId} が接続しました`);

  // クライアントにIDを送信
  socket.emit('assignId', clientId);

  // クライアントからのメッセージを受信したときの処理
  socket.on('clientMessage', (data) => {
    /*
    console.log(`クライアント ${clientId} からメッセージを受信: ${data}`);

    // 特定のクライアントにメッセージを送信
    // ここではクライアントIDが 'targetClientId' のクライアントに送信しています
    const targetClientId = 'targetClientId'; // 送信先のクライアントIDを指定
    io.to(targetClientId).emit('serverMessage', `サーバーからのメッセージ: ${data}`);
  });

  // クライアントが切断したときの処理
  socket.on('disconnect', () => {
    console.log(`クライアント ${clientId} が切断しました`);
  });
});
*/