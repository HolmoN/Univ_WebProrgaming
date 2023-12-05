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
const Matter = __importStar(require("matter-js"));
const { Engine, Render, Runner } = Matter;
const WIDTH = 420; // 横幅
const HEIGHT = 700; // 鷹さ
class BubbeGame {
    constructor(container) {
        this.engine = Engine.create();
        this.render = Render.create({
            element: container,
            engine: this.engine,
            options: {
                width: WIDTH,
                height: HEIGHT,
            },
        });
        this.runner = Runner.create();
        Render.run(this.render);
        Runner.run(this.runner, this.engine);
        container.addEventListener("click", () => {
            let bubble = new BubbleRaw(0, 0, 2);
            bubble.InstantiateBabble(this.engine);
        });
    }
    init() { }
}
window.onload = () => {
    const container = document.querySelector(".container");
    if (container == null)
        return;
    // とりあえずゲーム作成
    const game = new BubbeGame(container);
    // とりあえず初期化すると思う
    game.init();
};
