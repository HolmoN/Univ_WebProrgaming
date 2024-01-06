"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatermelonGame_Debug = void 0;
var BubbleGenerator_1 = require("./BubbleGenerator");
var Gauge_1 = require("./Gauge");
var GameoverJudge_1 = require("./modules/GameoverJudge");
var MatterEnvironment_1 = require("./modules/MatterEnvironment");
var Walls_1 = require("./modules/Walls");
var WatermelonGame_Debug = /** @class */ (function () {
    ///----------
    /// メソッド
    ///----------
    function WatermelonGame_Debug() {
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
        this.GAUGE = new Gauge_1.Gauge();
        this.GAUGE.setGaugeSize(100, 800); //ゲージサイズの変更
        this.GAUGE.Display(true);
        this.GAUGE.FillAmount = 0.5;
    }
    /**
     * ゲームをスタートする
     */
    WatermelonGame_Debug.prototype.Play = function (gameOver) {
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
    WatermelonGame_Debug.prototype.Stop = function () {
        this.BUBBLE_GENERATOR.SendController(undefined, function () { });
        this.GAMEOVER_AREA.SetCallBack(undefined);
    };
    WatermelonGame_Debug.prototype.GenerateBubbles = function () {
        var _this = this;
        var nextBubble = this.BUBBLE_GENERATOR.NextBubble;
        if (nextBubble != undefined)
            this.BUBBLE_GENERATOR.SendController(nextBubble, function () { return _this.GenerateBubbles(); });
    };
    Object.defineProperty(WatermelonGame_Debug.prototype, "BubbleGenerator", {
        ///----------
        ///デバッグ用のメンバ変数公開
        ///----------
        get: function () {
            return this.BUBBLE_GENERATOR;
        },
        enumerable: false,
        configurable: true
    });
    return WatermelonGame_Debug;
}());
exports.WatermelonGame_Debug = WatermelonGame_Debug;
