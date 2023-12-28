
import { BubbleGenerator } from "./BubbleGenerator";
import { IWatermelonGame } from "./Interface/IWatermelonGame";
import { MatterEnvironment } from "./modules/MatterEnvironment";
import { Walls } from "./modules/Walls";

export class WatermelonGame implements IWatermelonGame {

    ///----------
    /// 定数
    ///----------
    private readonly BUBBLE_GENERATOR: BubbleGenerator;

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
    }

    /**
     * ゲームをスタートする
     */
    Play(gameOver: () => void): void {
        this._gameOver = gameOver;

        //ゲームの初期化
        let nextBubble = this.BUBBLE_GENERATOR.NextBubble;
        if (nextBubble != undefined) this.BUBBLE_GENERATOR.SendController(nextBubble);
    }

    /**
     * ゲームをストップする
     */
    Stop(): void {
        this.BUBBLE_GENERATOR.SendController(undefined);
    }
}