"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var ResultSave_1 = require("./modules/ResultSave");
var ResultWindow_1 = require("./modules/ResultWindow");
var Result = /** @class */ (function () {
    ///----------
    /// メソッド
    ///----------
    function Result() {
        this.RESULT_WINDOW = new ResultWindow_1.ResultWindow();
        this.SQL_HANDLER = new ResultSave_1.ResultSave();
    }
    /**
     * リザルト表示を開始する
     */
    Result.prototype.Play = function (score, progressEnd) {
        var _this = this;
        this._progressEnd = progressEnd;
        //モーダルを表示する
        this.RESULT_WINDOW.Display(true);
        //スコアを表示する
        this.RESULT_WINDOW.DisplayScore(true, score);
        //サブミットボタンが押された時の処理
        this.RESULT_WINDOW.SubmitButtonCallBack(function () {
            //名前が空欄ならば、処理を終了する
            if (_this.RESULT_WINDOW.GetPlayerName() == "")
                _this.Stop();
            //スコアを保存する
            _this.SaveScore(score);
            //スコアを非表示にする
            _this.RESULT_WINDOW.DisplayScore(false, score);
            //サブミット完了を表示する
            _this.RESULT_WINDOW.DisplaySubmited(true);
            //戻るボタンが押された時の処理
            _this.RESULT_WINDOW.BackButtonCallBack(function () {
                //サブミット完了を非表示にする
                _this.RESULT_WINDOW.DisplaySubmited(false);
                //処理を終了する
                _this.Stop();
            });
        });
    };
    /**
     * リザルト表示を終了する
     */
    Result.prototype.Stop = function () {
        //モーダルを非表示にする
        this.RESULT_WINDOW.Display(false);
        if (this._progressEnd != undefined)
            this._progressEnd();
    };
    Result.prototype.SaveScore = function (score) {
        //今日の年月日をstring形式で取得する
        //フォーマットはyyyy-mm-dd
        var today = this.GetFormattedDate();
        //名前を取得する
        var name = this.RESULT_WINDOW.GetPlayerName();
        //名前が空欄でなければ、データベースに保存する
        this.SQL_HANDLER.SetData("", today, name, score.toString());
    };
    Result.prototype.GetFormattedDate = function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = (today.getMonth() + 1).toString().padStart(2, '0'); // 0-indexed, hence +1
        var day = today.getDate().toString().padStart(2, '0');
        return "".concat(year, "-").concat(month, "-").concat(day);
    };
    return Result;
}());
exports.Result = Result;
