const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const sqlite3 = require('sqlite3').verbose();

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
app.get('/titlescene', (req, res) => {
  app.use(express.static(path.join(__dirname, 'public', 'titlescene')));
});

io.on('connection', (socket) => {
  console.log('クライアントが接続しました');

  //sql保存のイベントを受け取る
  socket.on('sqlSave', (day, name, score) => {
    console.log("SQLリクエストを受け取りました");
  
    //データベースに接続
    var db = new sqlite3.Database(path.join(__dirname, 'public', 'sql', 'scoreData.sqlite'));
    //データベースに保存する
    db.serialize(() => {
      var stmt = db.prepare("INSERT INTO scores VALUES (NULL, ?, ?, ?)");
      stmt.run(day, name, score);
      stmt.finalize();
    });
    db.close();
  
    console.log("SQLリクエエスト処理が正常に完了しました");
  });
});

const PORT = 3000;
//サーバーが起動したときに処理される
server.listen(3000, () => {
  console.log('サーバーがポート3000で起動しました');
  app.use(express.static(path.join(__dirname, 'public')));
});
/*
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);

  app.use(express.static(path.join(__dirname, 'public')));
});
*/

/*
io.on('connection', (socket) => {
  console.log('a user connected');

  
});

/*
// クライアントが接続したときの処理
io.on('connection', (socket) => {
  // クライアントに一意のIDを割り当てる
  const clientId = Math.random().toString(36).substring(2, 15);
  console.log(`クライアント ${clientId} が接続しました`);
  socket.emit('assignId', clientId);

  // クライアントからのメッセージを受信したときの処理
  socket.on('clientMessage', (data) => {
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