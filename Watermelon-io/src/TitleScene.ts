import { ITitleScene } from "./Interface/ITitleScene"
export class TitleScene implements ITitleScene {

    private _buttonElement :HTMLButtonElement;
    private _matchingText :HTMLElement;

    /**
     * スタートボタンのオブジェクトを返す
     */
    get StartButton(): HTMLButtonElement {
        return this._buttonElement;
    }
    
    constructor(){
        // HTML要素の取得
        this._buttonElement = document.getElementById('start') as HTMLButtonElement;
        this._matchingText = document.getElementById('matchingText')as HTMLElement;
        
        

        // クリックイベントのリスナーを登録
        this._buttonElement.addEventListener('click', (event: MouseEvent) => {
            console.log("ボタンがクリックされました");
            //ボタンがクリックされたらボタンが消える
            this._buttonElement.className = "hidden";
            
            //マッチングを開始する

            
            this._matchingText.style.display = 'block';
            
            

        });

        

    }



    /**
     * 画面を描写するかを切り替える
     */
    Display(display: boolean): void {
        if(display = true){

        }
        else{

        }
    }

    /**
     * マッチングしたかどうかの結果を受け取る
     */
    Matched(matched: boolean): void {
        if(matched = false){
            this.Display(true);
            /*
            const repaint = async () => {
                for (let i = 0; i < 2; i++) {
                    await new Promise(resolve => requestAnimationFrame(resolve));
                }
            };
            */
        }
        else{

        }
    }
}