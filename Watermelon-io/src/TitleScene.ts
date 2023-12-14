import { ITitleScene } from "./Interface/ITitleScene"
export class TitleScene implements ITitleScene {

    private _buttonElement :HTMLButtonElement;

    /**
     * スタートボタンのオブジェクトを返す
     */
    get StartButton(): HTMLButtonElement {
        return this._buttonElement;
    }
    
    constructor(){
        // HTML要素の取得
        this._buttonElement = document.getElementById('myButton') as HTMLButtonElement;

        // クリックイベントのリスナーを登録
        this._buttonElement.addEventListener('click', (event: MouseEvent) => {
            console.log("ボタンがクリックされました");
        });

    }



    /**
     * 画面を描写するかを切り替える
     */
    Display(display: boolean): void {

    }

    /**
     * マッチングしたかどうかの結果を受け取る
     */
    Matched(matched: boolean): void {

    }
}