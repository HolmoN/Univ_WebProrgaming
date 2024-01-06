"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameoverArea = void 0;
var matter_js_1 = __importDefault(require("matter-js"));
var MatterEnvironment_1 = require("./MatterEnvironment");
var GameoverArea = /** @class */ (function () {
    ///----------
    /// メソッド
    ///----------
    function GameoverArea(x, y, width, height) {
        ///----------
        ///定数
        ///----------
        this.GAMEOVER_TIME = 3000; //ゲームオーバーになるまでの時間(ms)
        this.TICKRATE = 10; //ティックレート
        this._tickCounter = 0;
        this._gameOver = function () { };
        //ゲームオーバー判定範囲の生成
        this._boundary = matter_js_1.default.Bodies.rectangle(x, y, width, height, {
            isStatic: true,
            render: {
                fillStyle: 'rgba(255, 0, 0, 0.3)', // 赤色の半透明な塗りつぶし
                strokeStyle: 'transparent', // 枠線を透明に設定
                lineWidth: 0, // 枠線の幅を0に設定
            },
        });
        this._boundary.collisionFilter = {
            group: -1, // 物体同士が衝突しないようにするために、同じgroupを指定します
        };
    }
    Object.defineProperty(GameoverArea.prototype, "boundary", {
        ///----------
        ///プロパティ
        ///----------
        get: function () {
            return this._boundary;
        },
        enumerable: false,
        configurable: true
    });
    GameoverArea.prototype.SetCallBack = function (gameOver) {
        var _this = this;
        matter_js_1.default.Events.off(MatterEnvironment_1.MatterEnvironment.engine, 'afterUpdate', function () { _this._ObserveEntryBody(); });
        this._tickCounter = 0;
        //コールバックが渡されている場合は、イベントの登録を行う
        if (gameOver != undefined) {
            this._gameOver = gameOver;
            matter_js_1.default.Events.on(MatterEnvironment_1.MatterEnvironment.engine, 'afterUpdate', function () { _this._ObserveEntryBody(); });
        }
    };
    GameoverArea.prototype._ObserveEntryBody = function () {
        //計算回数を減らす
        this._tickCounter++;
        if (this._tickCounter < this.TICKRATE)
            return;
        this._tickCounter = 0;
        // World内のすべてのバブルを取得
        var bodies = MatterEnvironment_1.MatterEnvironment.FindByTag("bubble_");
        // 各バブルに対して範囲内かどうかを確認
        for (var _i = 0, bodies_1 = bodies; _i < bodies_1.length; _i++) {
            var body = bodies_1[_i];
            if (matter_js_1.default.Bounds.overlaps(body.bounds, this._boundary.bounds)) {
                // 特定の範囲内にボディが入った場合の処理
                this._EntryBubble(body);
            }
        }
    };
    //ここすげー雑
    GameoverArea.prototype._EntryBubble = function (bubble) {
        //console.log("enter");
        var _this = this;
        //n秒経過しても範囲内にbodyが存在するなら、ゲームオーバーにする
        var entryID = setTimeout(function () {
            if (matter_js_1.default.Bounds.overlaps(bubble.bounds, _this._boundary.bounds)) {
                _this._gameOver();
            }
            else {
                //console.log("exited");
            }
        }, this.GAMEOVER_TIME);
    };
    return GameoverArea;
}());
exports.GameoverArea = GameoverArea;
