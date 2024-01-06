import { io, Socket } from 'socket.io-client';
import { ServerHandler } from '../src/ServerHandler';

window.onload = () => {
    const socket = io();

    let cliantId: string;
    let pairID: string;

    // イベントを送信する例
    document.addEventListener('keydown', (event) => {
        if (event.key === 'W' || event.key === 'w') {
            socket.emit('matchingRequest');
        }

        if (event.key === 'E' || event.key === 'e') {
            socket.emit('matchingTimeout');
        }
    });

    socket.on('assignId', (receiveID: string) => {
        console.log(`クライアントIDが割り当てられました: ${receiveID}`);
        cliantId = receiveID;
    });

    socket.on('matchFound', async (pairIDs: string[], isParent: boolean) => {
        console.log(`クライアント ${pairIDs[0]} と ${pairIDs[1]} がマッチしました`);
        //cliantIdと等しくないものがpairID
        if (cliantId === pairIDs[0]) pairID = pairIDs[1];
        else pairID = pairIDs[0];

        //親か子かをログに出力
        if (isParent) console.log(`あなたは親です`);

        await new Promise(_ => setTimeout(_, 1000));
        
        //ゲーム開始の準備が出来たら実行
        //親だった場合、ゲームスタートの信号を送る
        if(isParent) socket.emit('sendParentReady', pairID);
    });

    //子だった場合、親からの信号を受け取り次第、ゲームスタートの信号を送る
    socket.on('receiveParentReady', () => {
        
        //ゲーム開始の準備が出来たら実行
        socket.emit('sendChildReady', pairID);
    });

    //ゲーム開始の信号を受け取る
    socket.on('gameStart', async () => {
        console.log('3');
        await new Promise(_ => setTimeout(_, 1000));
        console.log('2');
        await new Promise(_ => setTimeout(_, 1000));
        console.log('1');
        await new Promise(_ => setTimeout(_, 1000));
        console.log('スタート！');
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