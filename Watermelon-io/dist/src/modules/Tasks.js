"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tasks = void 0;
var Tasks = /** @class */ (function () {
    function Tasks() {
    }
    Tasks.sleep = function (ms) { return new Promise(function (res) { return setTimeout(res, ms); }); };
    return Tasks;
}());
exports.Tasks = Tasks;
