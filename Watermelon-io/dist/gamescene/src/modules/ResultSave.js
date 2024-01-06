"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultSave = void 0;
var socket_io_client_1 = require("socket.io-client");
var ResultSave = /** @class */ (function () {
    function ResultSave() {
    }
    ResultSave.prototype.SetData = function (_) {
        var datas = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            datas[_i - 1] = arguments[_i];
        }
        var socket = (0, socket_io_client_1.io)();
        socket.emit('sqlSave', datas[0], datas[1], datas[2]);
    };
    ResultSave.prototype.GetData = function (query) {
        //このクラス内では、データベースからデータを取得することはできない
        //ログを出す
        console.log("データベースからデータを取得することはできません");
        return [];
    };
    return ResultSave;
}());
exports.ResultSave = ResultSave;
