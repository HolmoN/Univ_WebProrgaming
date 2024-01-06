const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const sqlite3 = require('sqlite3').verbose();

///----------
/// ルーティング処理
///----------

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
});
app.get('/Test', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public/Test') });
});
app.get('/gamescene', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public/gamescene') });
});
app.get('/titlescene', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public/titlescene') });
});


///----------
/// 1クライアントの動作
///----------

io.on('connection', (socket) => {

  /// =====================================
  /// === クライアントが接続したときの処理 ===
  /// =====================================

  // クライアントに一意のIDを割り当てる
  const clientId = socket.id;
  console.log(`クライアント ${clientId} が接続しました`);
  socket.emit('assignId', clientId); 

  /// ==============================
  /// === マッチングリクエスト処理 ===
  /// ==============================

  socket.on('matchingRequest', () => { !
    //マッチングキューに追加
    AddToQueue(socket.id);
    //ログを出力
    console.log(`クライアント ${clientId} がマッチングキューに追加されました`);
  });

  /// ================================
  /// === マッチングタイムアウト処理 ===
  /// ================================

  socket.on('matchingTimeout', () => { 
    //マッチングキューから削除
    RemoveFromQueue(socket.id);
    //ログを出力
    console.log(`クライアント ${clientId} がマッチングキューから削除されました`);
  });

  /// ===========================
  /// === Parentの準備完了報告 ===
  /// ===========================
  socket.on('sendParentReady', (childID) => { //!
    const childSocket = io.sockets.sockets.get(childID);
    childSocket.emit('receiveParentReady'); //!
  });

  /// ==========================
  /// === Childの準備完了報告 ===
  /// ==========================
  socket.on('sendChildReady', (parentID) => { //!
    const parentSocket = io.sockets.sockets.get(parentID);
    
    socket.emit('gameStart'); //!
    parentSocket.emit('gameStart');
  });

  /// ======================
  /// === SQL保存イベント ===
  /// ======================

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

///----------
///定数
///----------

const MAX_PLAYERS_IN_MATCH = 2; //マッチング処理をするのに必要な最低プレイヤー数

///----------
/// メンバ変数
///----------

let waitingPlayers = ["string"]; //マッチングキュー

///----------
/// メソッド
///----------

//マッチングキューに追加する
function AddToQueue(playerId) {
  waitingPlayers.push(playerId);
}

//マッチングキューから削除する
function RemoveFromQueue(playerId) {
  const index = waitingPlayers.indexOf(playerId);
  if (index >= 0) {
    waitingPlayers.splice(index, 1);
  }
}

//マッチング処理
function MatchPlayers() {
  if (waitingPlayers.length >= MAX_PLAYERS_IN_MATCH) {
    //マッチング相手を取り出す
    const matchedPlayers = waitingPlayers.splice(0, MAX_PLAYERS_IN_MATCH);
    
    for(let i = 0; i < matchedPlayers.length; i++){
      const playerSocket = io.sockets.sockets.get(matchedPlayers[i]);
      playerSocket.emit('matchFound', matchedPlayers, i); 
    }

    //ログを出力
    console.log(`クライアント ${matchedPlayers[0]} と ${matchedPlayers[1]} がマッチしました`);
  }
}

//tick処理
async function Tick() {
  while (true) {
    MatchPlayers(); //マッチング処理

    console.log(waitingPlayers);
    
    await new Promise(_ => setTimeout(_, 1000));
  }
}

///----------
/// 実行処理
///----------

const PORT = 3000;
//サーバーが起動したときに処理される
server.listen(3000, () => {
  console.log('サーバーがポート3000で起動しました');
  app.use(express.static(path.join(__dirname, 'public')));

  //waitingPlayersの初期化
  waitingPlayers = [];

  //tick処理の起動
  Tick();
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