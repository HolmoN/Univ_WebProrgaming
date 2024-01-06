import { TitleScene } from "./TitleScene";
import { io, Socket } from 'socket.io-client';


window.onload = () => {
    const socket = io();

    const TIMEOUT: number = 10000;

    let cliantId: string = "";
    let pairID: string = "";

    const TITLE_SCENE: TitleScene = new TitleScene();

    socket.on('assignId', (receiveID: string) => {
        console.log(`クライアントIDが割り当てられました: ${receiveID}`);
        cliantId = receiveID;
    });

    // タイトル画面の表示
    TITLE_SCENE.Display(true);

    TITLE_SCENE.StartButton.addEventListener('click', (event: MouseEvent) => {
        console.log("ボタンがクリックされました");

        socket.emit('matchingRequest');

        //数秒間たってもマッチングしなかったらタイムアウト
        setTimeout(() => {
            if (pairID === "") {
                TITLE_SCENE.Matched(false);
                socket.emit('matchingTimeout');
            }
        }, TIMEOUT);
    });

    socket.on('matchFound', (pairIDs: string[], isParent: boolean) => {
        console.log(`クライアント ${pairIDs[0]} と ${pairIDs[1]} がマッチしました`);
        //cliantIdと等しくないものがpairID
        if (cliantId === pairIDs[0]) pairID = pairIDs[1];
        else pairID = pairIDs[0];

        //親か子かをログに出力
        if (isParent) console.log(`あなたは親です`);

        //マッチングしたことを伝えるモーダルを表示
        TITLE_SCENE.Matched(true);

        //数秒したらページ切り替え
        setTimeout(() => {   
            TITLE_SCENE.ChangePage("/gamescene?you=${cliantId}&pair=${pairID}&parent=${isParent}");
        }, 3000);
    });
}
