import { ITitleScene } from "./src/ITitleScene"
export class TitleScene implements ITitleScene {

    private _buttonElement: HTMLButtonElement;
    private _matchingText: HTMLElement;
    private _matchedMordal: HTMLElement;

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
        this._matchedMordal = document.querySelector('.matched') as HTMLElement;

        // クリックイベントのリスナーを登録
        this._buttonElement.addEventListener('click', (event: MouseEvent) => {
            //ボタンがクリックされたらボタンが消える
            this._buttonElement.className = "hidden";

            //マッチングを開始する
            this._matchingText.style.display = 'block';
        });
    }

    /**
     * 画面を描写するかを切り替える
     */
    public Display(display: boolean): void {

        //if (this._buttonElement && this._matchingText) {
        if (this._buttonElement) {
            if (!display) {
                // display = falseはすべて非表示にする
                this._buttonElement.style.visibility = "hidden";
                this._matchingText.style.visibility = "hidden";
                this._matchedMordal.style.visibility = "hidden";
            } else {

            }
        }
    }

    /**
     * マッチングしたかどうかの結果を受け取る
     */
    Matched(matched: boolean): void {
        if (this._buttonElement && this._matchingText) {
            console.log(matched);
            if (!matched) {
                // マッチング結果に基づいて画像ボタンを再描写
                this._buttonElement.className = "start";
                this._matchingText.style.display = 'none';
            }
            else {
                console.log("hoge");

                this._buttonElement.style.visibility = "hidden";
                this._matchingText.style.visibility = "hidden";
                this._matchedMordal.style.visibility = "visible";
            }
        }
    }

    ChangePage(url: string): void {
        window.location.href = url;
    }
}