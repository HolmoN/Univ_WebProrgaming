import Matter from "matter-js";
import { MatterEnvironment } from "./MatterEnvironment";

export class GameoverArea {

    ///----------
    ///定数
    ///----------
    private readonly GAMEOVER_TIME: number = 3000; //ゲームオーバーになるまでの時間(ms)
    private readonly TICKRATE: number = 10; //ゲームオーバーになるまでの時間(ms)

    ///----------
    /// メンバ変数
    ///----------
    private _gameOver: (() => void);
    private _boundary: Matter.Body;

    private _tickCounter = 0;

    ///----------
    ///プロパティ
    ///----------
    public get boundary(): Matter.Body {
        return this._boundary;
    }

    ///----------
    /// メソッド
    ///----------
    constructor(x: number, y: number, width: number, height: number) {
        this._gameOver = () => { };

        //ゲームオーバー判定範囲の生成
        this._boundary = Matter.Bodies.rectangle(x, y, width, height, 
            { 
                isStatic: true , 
                render: {
                    fillStyle: 'rgba(255, 0, 0, 0.3)', // 赤色の半透明な塗りつぶし
                    strokeStyle: 'transparent', // 枠線を透明に設定
                    lineWidth: 0, // 枠線の幅を0に設定
                },
            }, );
        this._boundary.collisionFilter = {
            group: -1, // 物体同士が衝突しないようにするために、同じgroupを指定します
        };
    }

    public SetCallBack(gameOver: (() => void) | undefined) {
        Matter.Events.off(MatterEnvironment.engine, 'afterUpdate', () => { this._ObserveEntryBody(); });
        this. _tickCounter = 0;

        //コールバックが渡されている場合は、イベントの登録を行う
        if (gameOver != undefined) {
            this._gameOver = gameOver;
            Matter.Events.on(MatterEnvironment.engine, 'afterUpdate', () => { this._ObserveEntryBody(); });
        }

    }

    private _ObserveEntryBody() {
        //計算回数を減らす
        this._tickCounter++;
        if(this._tickCounter < this.TICKRATE) return;
        this._tickCounter = 0;

        // World内のすべてのバブルを取得
        const bodies = MatterEnvironment.FindByTag("bubble_");

        // 各バブルに対して範囲内かどうかを確認
        for (const body of bodies) {
            if (Matter.Bounds.overlaps(body.bounds, this._boundary.bounds)) {
                // 特定の範囲内にボディが入った場合の処理
                this._EntryBubble(body);
            }
        }
    }

    //ここすげー雑
    private _EntryBubble(bubble: Matter.Body) {
        //console.log("enter");

        //n秒経過しても範囲内にbodyが存在するなら、ゲームオーバーにする
        const entryID = setTimeout(() => {
            if (Matter.Bounds.overlaps(bubble.bounds, this._boundary.bounds)){
                this._gameOver();
            }
            else {
                
            }
        }, this.GAMEOVER_TIME);
    }
}