
import { BubbleGenerator } from "./BubbleGenerator";
import { Gauge } from "./Gauge";
import { IWatermelonGame } from "./Interface/IWatermelonGame";
import { Result } from "./Result";
import { GameoverArea } from "./modules/GameoverJudge";
import { MatterEnvironment } from "./modules/MatterEnvironment";
import { Walls } from "./modules/Walls";

export class WatermelonGame implements IWatermelonGame {

    ///----------
    /// 定数
    ///----------
    private readonly BUBBLE_GENERATOR: BubbleGenerator;
    private readonly GAMEOVER_AREA: GameoverArea;
    //private readonly GAUGE: Gauge;
    private readonly RESULT: Result;

    ///----------
    /// メンバ変数
    ///----------
    private _gameOver: (() => void) | undefined;


    ///----------
    /// メソッド
    ///----------

    constructor() {
        this.BUBBLE_GENERATOR = new BubbleGenerator();

        //壁の生成
        const walls: Walls = new Walls(); //TODO: 生成位置を変えられるようにする
        walls.objects.forEach(element => {
            MatterEnvironment.Instantiate(element);
        });

        //ゲームオーバーエリアの生成
        this.GAMEOVER_AREA = new GameoverArea(MatterEnvironment.width/2, 100, MatterEnvironment.width, 70);
        MatterEnvironment.Instantiate(this.GAMEOVER_AREA.boundary);

        //ゲージの生成
        /*
        this.GAUGE = new Gauge();
        this.GAUGE.setGaugeSize(50, 700); //ゲージサイズの変更
        this.GAUGE.Display(true);
        this.GAUGE.FillAmount = 0.5;
        */

        //リザルトの生成
        this.RESULT = new Result();
    }

    /**
     * ゲームをスタートする
     */
    Play(gameOver: () => void): void {
        this._gameOver = gameOver;

        //ゲームの初期化
        this.GenerateBubbles();

        this.GAMEOVER_AREA.SetCallBack(() => {
            console.log("ゲームオーバー");
            if(this._gameOver != undefined) this._gameOver();
            this.Stop();
        });
    }

    /**
     * ゲームをストップする
     */
    Stop(): void {
        this.BUBBLE_GENERATOR.SendController(undefined, () => {});
        this.GAMEOVER_AREA.SetCallBack(undefined);

        //リザルトの表示を行う
        this.RESULT.Play(0, () => {
            console.log("リザルト終了");
        });
    }

    private GenerateBubbles(): void {
        let nextBubble = this.BUBBLE_GENERATOR.NextBubble;
        if (nextBubble != undefined) this.BUBBLE_GENERATOR.SendController(nextBubble, () => this.GenerateBubbles());
    }
}