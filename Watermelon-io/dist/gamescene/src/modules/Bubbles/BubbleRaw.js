"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleRaw = void 0;
var Matter = __importStar(require("matter-js"));
var BubbleRaw = /** @class */ (function () {
    ///----------
    ///メソッド
    ///----------
    //バブルの定義をする
    function BubbleRaw(x, y, r, definition) {
        if (definition) {
            this.body = Matter.Bodies.circle(x, y, r, definition);
        }
        else {
            this.body = Matter.Bodies.circle(x, y, r, {
                label: "bubble_",
                render: {
                    fillStyle: 'red',
                }
            });
        }
    }
    Object.defineProperty(BubbleRaw.prototype, "Body", {
        ///----------
        ///プロパティ
        ///----------
        get: function () {
            return this.body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BubbleRaw.prototype, "x", {
        get: function () {
            return this.body.position.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BubbleRaw.prototype, "y", {
        get: function () {
            return this.body.position.y;
        },
        enumerable: false,
        configurable: true
    });
    //バブルの位置をセットする
    BubbleRaw.prototype.SetPosition = function (x, y) {
        Matter.Body.setPosition(this.body, { x: x, y: y });
    };
    //静的設定
    BubbleRaw.prototype.SetStatic = function (isStatic) {
        this.body.isStatic = isStatic;
    };
    return BubbleRaw;
}());
exports.BubbleRaw = BubbleRaw;
