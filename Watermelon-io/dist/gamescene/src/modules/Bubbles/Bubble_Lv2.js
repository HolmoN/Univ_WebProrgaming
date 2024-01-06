"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bubble_Lv2 = void 0;
var BubbleRaw_1 = require("./BubbleRaw");
var Bubble_Lv2 = /** @class */ (function (_super) {
    __extends(Bubble_Lv2, _super);
    //バブルの定義をする
    function Bubble_Lv2(x, y) {
        return _super.call(this, x, y, 30, {
            label: "bubble_2",
            render: {
                sprite: {
                    texture: './image/lv2.png',
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        }) || this;
    }
    return Bubble_Lv2;
}(BubbleRaw_1.BubbleRaw));
exports.Bubble_Lv2 = Bubble_Lv2;
