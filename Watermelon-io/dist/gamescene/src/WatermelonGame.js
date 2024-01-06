"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatermelonGame = void 0;
var BubbleGenerator_1 = require("./BubbleGenerator");
var Result_1 = require("./Result");
var GameoverJudge_1 = require("./modules/GameoverJudge");
var MatterEnvironment_1 = require("./modules/MatterEnvironment");
var Walls_1 = require("./modules/Walls");
var WatermelonGame = /** @class */ (function () {
    ///----------
    /// メソッド
    ///----------
    function WatermelonGame() {
        this.BUBBLE_GENERATOR = new BubbleGenerator_1.BubbleGenerator();
        //壁の生成
        var walls = new Walls_1.Walls(); //TODO: 生成位置を変えられるようにする
        walls.objects.forEach(function (element) {
            MatterEnvironment_1.MatterEnvironment.Instantiate(element);
        });
        //ゲームオーバーエリアの生成
        this.GAMEOVER_AREA = new GameoverJudge_1.GameoverArea(MatterEnvironment_1.MatterEnvironment.width / 2, 100, MatterEnvironment_1.MatterEnvironment.width, 70);
        MatterEnvironment_1.MatterEnvironment.Instantiate(this.GAMEOVER_AREA.boundary);
        //ゲージの生成
        /*
        this.GAUGE = new Gauge();
        this.GAUGE.setGaugeSize(50, 700); //ゲージサイズの変更
        this.GAUGE.Display(true);
        this.GAUGE.FillAmount = 0.5;
        */
        //リザルトの生成
        this.RESULT = new Result_1.Result();
    }
    /**
     * ゲームをスタートする
     */
    WatermelonGame.prototype.Play = function (gameOver) {
        var _this = this;
        this._gameOver = gameOver;
        //ゲームの初期化
        this.GenerateBubbles();
        this.GAMEOVER_AREA.SetCallBack(function () {
            console.log("ゲームオーバー");
            if (_this._gameOver != undefined)
                _this._gameOver();
            _this.Stop();
        });
    };
    /**
     * ゲームをストップする
     */
    WatermelonGame.prototype.Stop = function () {
        this.BUBBLE_GENERATOR.SendController(undefined, function () { });
        this.GAMEOVER_AREA.SetCallBack(undefined);
        //リザルトの表示を行う
        this.RESULT.Play(this.BUBBLE_GENERATOR.Score, function () {
            console.log("リザルト終了");
            window.location.href = '/titlescene';
        });
    };
    WatermelonGame.prototype.GenerateBubbles = function () {
        var _this = this;
        var nextBubble = this.BUBBLE_GENERATOR.NextBubble;
        if (nextBubble != undefined)
            this.BUBBLE_GENERATOR.SendController(nextBubble, function () { return _this.GenerateBubbles(); });
    };
    return WatermelonGame;
}());
exports.WatermelonGame = WatermelonGame;
