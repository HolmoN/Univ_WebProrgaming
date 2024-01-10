import { io, Socket } from 'socket.io-client';
import { ServerHandler } from '../src/ServerHandler';

window.onload = () => {
    // イベントを送信する例
    document.addEventListener('keydown', (event) => {
        if (event.key === 'W' || event.key === 'w') {
            const socket = io();
            const eventData = 'ボタンがクリックされました';
            socket.emit('sqlSave', "2020-02-02", "hgoe", 22);
        }
    });
}


/*
let _clientId: string;
let _partnerId: string;
let _startConnectionButton: HTMLElement;
let _sendMessageButton: HTMLElement;
let _connectingMessage: HTMLElement;

// HTML要素の取得
let _startConnectionButton_raw = document.getElementById('startConnectionButton');
let _sendMessageButton_raw = document.getElementById('sendMessageButton');
let _connectingMessage_raw = document.getElementById('connectingMessage');
if (!_sendMessageButton_raw || !_startConnectionButton_raw || !_connectingMessage_raw) {
    throw new Error('HTML要素の取得の取得に失敗しました');
}
_startConnectionButton = _startConnectionButton_raw;
_sendMessageButton = _sendMessageButton_raw;
_connectingMessage = _connectingMessage_raw;
*/

/*
window.onload = () => {
    // サーバーに接続
    const socket: Socket = io();
    document.addEventListener('keydown', (event) => {
        if (event.key === 'W' || event.key === 'w') {
            socket.emit('sqlSave', "hoge", "huga", 100);
            console.log("wが押された");
        }
    });
}
*/

/*
// サーバーからのIDを受信
socket.on('assignId', (clientId: string) => {
    console.log(`クライアントIDが割り当てられました: ${clientId}`);
    _clientId = clientId;
});

// 接続開始ボタン
_startConnectionButton.addEventListener('click', () => {
    socket.emit('connectionRequest', _clientId);
    _sendMessageButton.style.visibility = 'hidden';
    _connectingMessage.style.visibility = 'visible';
});

// サーバーからのメッセージを受信
socket.on('connectionEstablish', (partnerId: string) => {
    _connectingMessage.style.visibility = 'hideden';

    //接続が確立しなかった場合
    if (partnerId === 'failed') {
        console.log('接続に失敗しました');
        _sendMessageButton.style.visibility = 'visible';
        return;
    }

    console.log(`${partnerId} と接続が確立しました`);
    _partnerId = partnerId;

    //ボタンの表示切り替え
    _startConnectionButton.style.visibility = 'visible';
});

//メッセージ送信
_sendMessageButton.addEventListener('click', () => {
    
});

//メッセージ受信
socket.on('receiveMessage', (message: string) => {
    // テキストを表示するdivの要素を取得
    const messagesDiv = document.querySelector(".messages");

    // 新しいテキストを含むp要素を作成
    const newParagraph = document.createElement("p");
    newParagraph.innerText = message;

    // messagesDivに新しいp要素を追加
    if (messagesDiv) {
        messagesDiv.appendChild(newParagraph);
    }
});

//接続切断
socket.on('endSession', () => {
    console.log(`${_partnerId} と接続が切断されました`);

    _startConnectionButton.style.visibility = 'visible';
    _sendMessageButton.style.visibility = 'hidden';
    _connectingMessage.style.visibility = 'hidden';

    const messagesDiv = document.querySelector(".messages");

    // すべての子要素を削除
    if (messagesDiv) {
        while (messagesDiv.firstChild) {
            messagesDiv.removeChild(messagesDiv.firstChild);
        }
    }

});
*/