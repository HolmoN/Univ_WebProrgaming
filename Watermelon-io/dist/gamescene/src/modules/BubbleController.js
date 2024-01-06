"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleController = void 0;
var MatterEnvironment_1 = require("./MatterEnvironment");
var Mouseinput = /** @class */ (function () {
    function Mouseinput() {
    }
    //マウスの右クリック入力イベントのコールバックを登録する
    Mouseinput.prototype.RightMousePressed = function (callback) {
        var _this = this;
        //解除
        MatterEnvironment_1.MatterEnvironment.canvas.htmlElement.removeEventListener("mousedown", function (e) {
            _this._RightMousePressedEvent(e.clientX, e.clientY);
        });
        //登録
        this._rightMousePressed = callback;
        MatterEnvironment_1.MatterEnvironment.canvas.htmlElement.addEventListener("mousedown", function (e) {
            _this._RightMousePressedEvent(e.clientX, e.clientY);
        });
    };
    //マウスの右クリックリリースイベントのコールバックをコールバックする
    Mouseinput.prototype.RightMouseReleased = function (callback) {
        var _this = this;
        //解除
        MatterEnvironment_1.MatterEnvironment.canvas.htmlElement.removeEventListener("mouseup", function (e) {
            _this._RightMouseReleasedEvent(e.clientX, e.clientY);
        });
        //登録
        this._rightMouseReleased = callback;
        MatterEnvironment_1.MatterEnvironment.canvas.htmlElement.addEventListener("mouseup", function (e) {
            _this._RightMouseReleasedEvent(e.clientX, e.clientY);
        });
    };
    //マウスのドラッグイベントのコールバックをコールバックする
    Mouseinput.prototype.MouseDrag = function (callback) {
        var _this = this;
        //解除
        MatterEnvironment_1.MatterEnvironment.canvas.htmlElement.removeEventListener("mousemove", function (e) {
            _this._MouseDragEvent(e.clientX, e.clientY);
        });
        //登録
        this._MouseDrag = callback;
        MatterEnvironment_1.MatterEnvironment.canvas.htmlElement.addEventListener("mousemove", function (e) {
            _this._MouseDragEvent(e.clientX, e.clientY);
        });
    };
    Mouseinput.prototype._RightMousePressedEvent = function (x, y) {
        if (this._rightMousePressed === undefined)
            return;
        this._rightMousePressed(x, y);
    };
    Mouseinput.prototype._RightMouseReleasedEvent = function (x, y) {
        if (this._rightMouseReleased === undefined)
            return;
        this._rightMouseReleased(x, y);
    };
    Mouseinput.prototype._MouseDragEvent = function (x, y) {
        if (this._MouseDrag === undefined)
            return;
        //x,y値の補正を行う
        x = x - MatterEnvironment_1.MatterEnvironment.canvas.htmlElement.getBoundingClientRect().left;
        y = y - MatterEnvironment_1.MatterEnvironment.canvas.htmlElement.getBoundingClientRect().top;
        this._MouseDrag(x, y);
    };
    return Mouseinput;
}());
var BubbleController = /** @class */ (function () {
    ///----------
    ///メソッド
    ///----------
    function BubbleController() {
        this.MOUSEINPUT = new Mouseinput();
        this.draggable = false; //ドラッグ可能かどうかを切り替える
        this.CONTAINER = document.querySelector(".container");
        if (this.CONTAINER == null)
            return;
        this.MOUSEINPUT = new Mouseinput();
        this._Present();
    }
    //このクラスにおいては、「ボディがクリックされたかどうか」は考慮しない
    //ボディがクリックされたかどうかは、IBubbleControllerを実装するクラスで考慮する
    BubbleController.prototype._Present = function () {
        var _this = this;
        this.MOUSEINPUT.MouseDrag(function (x, y) {
            _this._MouseDragged(x);
        });
        this.MOUSEINPUT.RightMousePressed(function (x, y) {
            _this._Pressed();
        });
        this.MOUSEINPUT.RightMouseReleased(function (x, y) {
            _this._Released();
        });
    };
    //バブルとコールバックを外部からセットする
    BubbleController.prototype.UpdateBubble = function (bubble, drop) {
        var _a;
        //古いバブルを持っている場合は、破棄する
        if (((_a = this._bubble) === null || _a === void 0 ? void 0 : _a.Body.isStatic) == true)
            MatterEnvironment_1.MatterEnvironment.Destroy(this._bubble.Body);
        this._bubble = bubble;
        this._drop = drop;
    };
    BubbleController.prototype._MouseDragged = function (x) {
        //ドラッグ可能状態でなければ何もしない
        if (!this.draggable)
            return;
        //console.log(x);
        //バブルを移動させる
        if (this._bubble === undefined)
            return;
        this._bubble.SetPosition(x, this._bubble.y);
    };
    BubbleController.prototype._Pressed = function () {
        //console.log("ぷれす");
        //ドラッグ可能状態に切り替える
        if (this._bubble === undefined)
            return;
        this.draggable = true;
    };
    BubbleController.prototype._Released = function () {
        //console.log("りりーす");
        //ドラッグ可能状態を解除する
        this.draggable = false;
        //バブルを落とす
        if (this._bubble === undefined || this._drop === undefined)
            return;
        this._drop(this._bubble);
        //各種変数を初期化する
        this._bubble = undefined;
        this._drop = undefined;
    };
    return BubbleController;
}());
exports.BubbleController = BubbleController;
