"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerHandler = void 0;
var ServerHandler = /** @class */ (function () {
    function ServerHandler() {
    }
    Object.defineProperty(ServerHandler, "serverAddress", {
        ///----------
        ///プロパティ
        ///----------
        get: function () {
            return this.SERVER_ADDRESS;
        },
        enumerable: false,
        configurable: true
    });
    ///----------
    ///定数
    ///----------
    ServerHandler.SERVER_ADDRESS = "http://localhost:3000";
    return ServerHandler;
}());
exports.ServerHandler = ServerHandler;
