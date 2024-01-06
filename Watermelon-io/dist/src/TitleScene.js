"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleScene = void 0;
var TitleScene = /** @class */ (function () {
    function TitleScene() {
        var _this = this;
        // HTML要素の取得
        this._buttonElement = document.getElementById('start');
        this._matchingText = document.getElementById('matchingText');
        // クリックイベントのリスナーを登録
        this._buttonElement.addEventListener('click', function (event) {
            console.log("ボタンがクリックされました");
            //ボタンがクリックされたらボタンが消える
            _this._buttonElement.className = "hidden";
            //マッチングを開始する
            _this._matchingText.style.display = 'block';
        });
    }
    Object.defineProperty(TitleScene.prototype, "StartButton", {
        /**
         * スタートボタンのオブジェクトを返す
         */
        get: function () {
            return this._buttonElement;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 画面を描写するかを切り替える
     */
    TitleScene.prototype.Display = function (display) {
        if (this._buttonElement && this._matchingText) {
            if (!display) {
                // display = falseはすべて非表示にする
                this._buttonElement.style.visibility = "hidden";
                this._matchingText.style.visibility = "hidden";
            }
            else {
            }
        }
    };
    /**
     * マッチングしたかどうかの結果を受け取る
     */
    TitleScene.prototype.Matched = function (matched) {
        if (this._buttonElement && this._matchingText) {
            if (!matched) {
                // マッチング結果に基づいて画像ボタンを再描写
                this._buttonElement.className = "start";
                this._matchingText.style.display = 'none';
            }
            else {
            }
        }
    };
    return TitleScene;
}());
exports.TitleScene = TitleScene;
