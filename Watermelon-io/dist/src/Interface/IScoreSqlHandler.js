"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreSQL = void 0;
var ScoreSQL = /** @class */ (function () {
    function ScoreSQL(day, name, score) {
        this._day = day;
        this._name = name;
        this._score = score;
    }
    Object.defineProperty(ScoreSQL.prototype, "Day", {
        //ゲッター
        get: function () {
            return this._day;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScoreSQL.prototype, "Name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScoreSQL.prototype, "Score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    return ScoreSQL;
}());
exports.ScoreSQL = ScoreSQL;
