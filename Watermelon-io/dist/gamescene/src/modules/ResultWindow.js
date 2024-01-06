"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultWindow = void 0;
var ResultWindow = /** @class */ (function () {
    function ResultWindow() {
        //全てのhtml要素を取得
        this._resultMordal = document.querySelector('.result');
        this._nameEntry = document.querySelector('.nameEntry');
        this._scoreEntry = document.getElementById('score');
        this._userName = document.getElementById('username');
        this._submitButton = document.getElementById('submitScore');
        this._submited = document.querySelector('.submited');
        this._backButton = document.getElementById('backtotitle');
        //初期化
        this._resultMordal.style.display = 'none';
        this._nameEntry.style.display = 'none';
        this._submited.style.display = 'none';
    }
    ResultWindow.prototype.Display = function (enable) {
        if (enable) {
            this._resultMordal.style.display = 'block';
        }
        else {
            this._resultMordal.style.display = 'none';
        }
    };
    ResultWindow.prototype.DisplayScore = function (enable, score) {
        if (enable) {
            this._scoreEntry.textContent = "スコア : " + score.toString();
            this._nameEntry.style.display = 'block';
        }
        else {
            this._nameEntry.style.display = 'none';
        }
    };
    ResultWindow.prototype.DisplaySubmited = function (enable) {
        if (enable) {
            this._submited.style.display = 'block';
        }
        else {
            this._submited.style.display = 'none';
        }
    };
    ResultWindow.prototype.GetPlayerName = function () {
        return this._userName.value;
    };
    ResultWindow.prototype.SubmitButtonCallBack = function (callBack) {
        var _this = this;
        console.log("submit");
        this._submitButton.removeEventListener('click', function () {
            if (_this._submitCallBack != undefined)
                _this._submitCallBack();
        });
        this._submitCallBack = callBack;
        this._submitButton.addEventListener('click', function () {
            if (_this._submitCallBack != undefined)
                _this._submitCallBack();
        });
    };
    ResultWindow.prototype.BackButtonCallBack = function (callBack) {
        var _this = this;
        this._backButton.removeEventListener('click', function () {
            if (_this._backButtonCallBack != undefined)
                _this._backButtonCallBack();
        });
        this._backButtonCallBack = callBack;
        this._backButton.addEventListener('click', function () {
            if (_this._backButtonCallBack != undefined)
                _this._backButtonCallBack();
        });
    };
    return ResultWindow;
}());
exports.ResultWindow = ResultWindow;
