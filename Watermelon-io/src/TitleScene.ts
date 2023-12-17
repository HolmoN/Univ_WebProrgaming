import { ITitleScene } from "./Interface/ITitleScene"
export class TitleScene implements ITitleScene {

    private _buttonElement: HTMLButtonElement;
    private _matchingText: HTMLElement;

    /**
     * スタートボタンのオブジェクトを返す
     */
    get StartButton(): HTMLButtonElement {
        return this._buttonElement;
    }

    constructor() {
        // HTML要素の取得
        this._buttonElement = document.getElementById('start') as HTMLButtonElement;
        this._matchingText = document.getElementById('matchingText') as HTMLElement;



        // クリックイベントのリスナーを登録
        this._buttonElement.addEventListener('click', (event: MouseEvent) => {
            console.log("ボタンがクリックされました");
            //ボタンがクリックされたらボタンが消える
            this._buttonElement.className = "hidden";

            //マッチングを開始する
            this._matchingText.style.display = 'block';

            // 仮にここでマッチング処理を行うと仮定
            // マッチングの結果を受け取り、Matchedメソッドに渡す
            // ここではsetTimeoutを使用して2秒後にマッチングの結果を受け取ったものと仮定
            setTimeout(() => {
                const matched = false; // 仮のマッチング結果

                // マッチング結果を処理
                this.Matched(matched);
            }, 2000);



        });



    }



    /**
     * 画面を描写するかを切り替える
     */
    Display(display: boolean): void {
        if (display = true) {

        }
        else {

        }
    }

    /**
     * マッチングしたかどうかの結果を受け取る
     */
    Matched(matched: boolean): void {
        if (this._buttonElement && this._matchingText) {
            if (!matched) {


                // マッチング結果に基づいて画像ボタンを再描写

                this._buttonElement.className = "example";
                this._matchingText.style.display = 'none';


            }
        }
        else {

        }
    }
}